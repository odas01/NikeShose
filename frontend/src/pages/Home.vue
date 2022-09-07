<script>
import Slider from '@/components/Slider.vue';
import Card from '@/components/Card.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";

export default {
    components: {
        Slider,
        Card,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            bestSeller: {
                breakpoints: {
                    '640': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '768': {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    '1024': {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                },
                images: ['thumb1.jpg', 'thumb1.jpg', 'thumb1.jpg', 'thumb1.jpg', 'thumb1.jpg', 'thumb1.jpg', 'thumb1.jpg', 'thumb1.jpg',]
            },
            products: [
                {
                    title: ['men', 'women'],
                    banner: '/src/assets/image/banner/banner7.jpg',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 8]
                }
                ,
                {

                    title: ['children'],
                    banner: '/src/assets/image/banner/banner8.jpg',
                    data: [1, 2, 3, 4, 5, 6, 7, 8]
                }
            ]
        }
    },
    methods: {
        titlee(title) {
            switch (title) {
                case 'men':
                    return 'nam'
                case 'women':
                    return 'nữ'
                default:
                    return 'trẻ em';
            }
        }
    }
    ,
    setup() {
        return {
            modules: [Pagination],
        };
    },
}
</script>


<template>
    <Slider />
    <div class="bestSeller">
        <h3 class="bestSeller__title">
            SẢN PHẨM BÁN CHẠY
        </h3>
        <div class="row gx-3">
            <swiper :slidesPerView="1" :spaceBetween="10" :pagination="{ clickable: true, }"
                :breakpoints='bestSeller.breakpoints' :modules="modules" class="mySwiper">
                <swiper-slide v-for="item in bestSeller.images">
                    <a href="">
                        <img :src='"src/assets/image/product/" + item' alt="">
                    </a>
                </swiper-slide>
            </swiper>
        </div>
    </div>

    <div class="banner mt-4">
        <div class="row">
            <div class="col col-md-12">
                <img src="../assets/image/banner/banner5.jpg" alt="">
            </div>
        </div>
    </div>

    <div class="list__card mt-4" v-for="product in products">
        <div class="list__card-title d-flex justify-content-center mb-3">
            <router-link v-for='title in product.title' :to='{name: "product.show", params:{gender: title}}'>
                Shop {{
                titlee(title)}}
            </router-link>
        </div>
        <img :src='product.banner' alt="">
        <div class="row gx-3 gy-3">
            <div class="col col-md-2-5" v-for="itemData in product.data">
                <Card />
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
@use '../scss/' as *;

.bestSeller {
    position: relative;
    border-top: 1px solid #d9d9d9;
    margin-top: 32px;

    &__title {
        position: absolute;
        top: -14px;
        left: 50%;
        transform: translateX(-50%);
        background-color: $white-color;
        padding: 0 20px;
        font-size: 24px;
        font-weight: 600;
        font-style: italic;
    }

    &>div {
        margin-top: 36px;
    }
}

.list__card {
    &-title {
        font-size: 24px;

        & a {
            color: unset;
            font-size: 20px;
            font-weight: 600;

            &:hover {

                color: #0984e3 !important;
            }
        }

        &>*~* {
            margin-left: 40px;
        }
    }
}
</style>

