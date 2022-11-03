<script>
import { Row, Col } from "ant-design-vue";
import Card from "@/components/Card.vue";

export default {
    components: {
        Row,
        Col,
        Card,
    },
    data() {
        return {
            products: [],
        };
    },
    computed: {
        name() {
            return this.$route.query.q;
        },
        count() {
            return this.products.length;
        },
    },
    methods: {
        async getProducts() {
            const response = await this.$store.dispatch("search", this.name);
            this.products = response.products;
        },
    },
    async mounted() {
        await this.getProducts();
    },
};
</script>

<template>
  <div class="search">
    <h4 class="search__title">
        Search: {{name}}({{count}})
    </h4>
    <div class="search__body">
        <Row :gutter='[16,16]'>
            <Col :span='6' v-for="product, index in products">
                <Card :data="product" />
            </Col>
        </Row>
    </div>
  </div>
</template>

<style lang='scss'>
.search {
    &__title {
        text-transform: capitalize;
        font-size: 28px;
        color: rgba(0, 0, 0, 0.85);
    }

    &__body {
        margin-top: 24px;
    }
}
</style>