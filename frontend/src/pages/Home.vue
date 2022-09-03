<script>
import Slider from '@/components/Slider.vue';
import Card from '@/components/Card.vue';
import ListCard from '@/components/ListCard.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";

export default {
    components: {
        Slider,
        Card,
        ListCard,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            titleMenWomen: ['Shop men\'s', 'Shop women\'s'],
            titleChildren: ['Shop boy\'s', 'Shop girl\'s'],
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
            }
        }
    }, setup() {
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
                        <img :src='"src/assets/imgage/product/" + item' alt="" />
                    </a>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <div class="banner mt-4">
        <div class="row">
            <div class="col col-md-12">
                <img src="../assets/imgage/banner/banner5.jpg" alt="">
            </div>
        </div>
    </div>
    <ListCard :title='titleMenWomen' :list='[1, 2, 3, 4, 5, 5, 6, 7]' banner="/src/assets/imgage/banner/banner7.jpg" />
    <ListCard :title='titleChildren' :list='[1, 2, 3, 4, 5, 5, 6, 7]' banner="/src/assets/imgage/banner/banner8.jpg" />
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
</style>

