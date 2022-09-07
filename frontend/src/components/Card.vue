<script>
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue';
export default {
    components: {
        SearchOutlined,
        ShoppingCartOutlined
    }
}
</script>

<template>
    <a href="/detail/111" class="card">
        <img src="../assets/image/product/thumb1.jpg" alt="" class="card-img-top">
        <div class="card-body">
            <span class="card__name abc">NikeCourt Legacy</span>
            <span class="card__price">2,189,000₫</span>
        </div>
        <div class="card__icon">
            <a href="/detail/111" class="card__icon-link">
                <SearchOutlined />
            </a>
            <a href="/cart" class="card__icon-link">
                <ShoppingCartOutlined />
            </a>
        </div>
    </a>
</template>

<style lang='scss' scoped>
@use '../scss/' as *;

.card {
    border-color: transparent;
    transition: all 0.2s ease;
    cursor: pointer;
    border: none;
    position: relative;
    overflow: hidden;
    color: unset;

    &-body {
        position: relative;
    }

    &__name {
        font-size: 14px;
        font-weight: 500;
        color: $black-color;
        line-height: 18px;
        padding-top: 10px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        transition: color 0.35s ease;
    }

    &__price {
        color: #e70303;
        font-weight: 600;
        font-size: 16px;
        margin-right: 10px;
        margin-top: 10px;
        transition: all 0.35s ease;
    }

    &__icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.35s, transform 0.35s;

        &>*~* {
            margin-left: 20px;
        }

        &-link {
            color: $white-color;
        }

    }

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(72, 76, 97, 0) 0%, rgba(72, 76, 97, 0.8) 75%);
        content: '';
        opacity: 0;
        transform: translateY(50%);
        transition: opacity 0.35s, transform 0.35s;
    }

    &:hover::before {
        opacity: 1;
        transform: translateY(0);
    }

    &:hover &__icon {
        opacity: 1;
        transform: translateX(-50%);
    }

    &:hover &-body {
        position: unset;
    }

}
</style>