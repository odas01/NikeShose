<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:data", "delete:data"],
    props: {
        data: { type: Object, required: true },
        inputs: { type: Array, required: true },
        isPlaceholder: { type: Boolean }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
            phone: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // contactLocal để liên kết với các input trên form
            contactLocal: this.data,
            contactFormSchema,
            inputss: () => {
                const convertInput = this.inputs.reduce((cur, input) => {
                    let title = input, type = 'text';
                    switch (input) {
                        case 'name':
                            title = 'Họ tên'
                            break;
                        case 'phone':
                            title = 'Số điện thoại'
                            break;
                        case 'email':
                            title = 'Email'
                            type = 'email'
                            break;
                        case 'message':
                            title = 'Nội dung'
                            break;
                        default:
                            new Error('Unknown')
                    }
                    return [...cur, { name: input, title, type }]
                }, [])
                return convertInput;
            }
        };
    },
    methods: {
        submitContact() {
            this.$emit("submit:data", this.contactLocal);
        },
        deleteContact() {
            this.$emit("delete:data", this.contactLocal.id);
        },
        log(message) {
            console.log(message);
        },
        placeholder(title) {
            return this.isPlaceholder ? title : '';
        }
    },
};
</script>

<template>
    <Form @submit="submitContact" :validation-schema="contactFormSchema">
        <div class="form-group mt-3" v-for='input in inputss()'>
            <label v-if='!this.isPlaceholder' :for='input.name'>{{ input.title }}</label>

            <Field v-if="input.name!=='message'" :name='input.name' :type='input.type' class="form-control"
                :placeholder='placeholder(input.title)' />
            <textarea v-else name="message" id="message" rows="3" class="form-control" style="width: 100%;"
                :placeholder='placeholder(input.title)'></textarea>

            <ErrorMessage :name='input.name' class="error-feedback" />
        </div>
        <div class="form-group mt-3">
            <button class="btn btn-primary">Gửi</button>
            <button v-if="contactLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteContact">
                Xóa
            </button>
        </div>
    </Form>
</template>

<style lang='scss'>
.error-feedback {
    color: #e74c3c;
    font-weight: 600;
    display: inline-block;
    margin-top: 2px;
    margin-left: 4px;
}
</style>
