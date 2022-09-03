<script>
import Card from './Card.vue'
export default {
    props: {
        title: {
            type: Array
        },
        list: {
            type: Array,
            required: true
        },
        banner: {
            type: String
        }
    },
    components: {
        Card
    }
}
</script>


<template>
    <div class="list__card mt-4">
        <div class="list__card-title d-flex justify-content-center mb-3">

            <a href="" v-for='item in title'>{{ item }}</a>
        </div>
        <img :src='banner' alt="">
        <div class="row gx-3 gy-3">
            <div class="col col-md-2-5" v-for="item in list">
                <Card />
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.list__card {
    &-title {
        font-size: 24px;

        & a {
            color: unset;
            font-size: 20px;
            font-weight: 600;
        }

        &>*~* {
            margin-left: 40px;
        }
    }
}
</style>