<template>
    <a href="" class="card">
        <img src="../assets/imgage/product/thumb1.jpg" alt="" class="card-img-top">
        <div class="card-body">
            <span class="card__name abc">NikeCourt Legacy</span>
            <span class="card__price">2,189,000₫</span>
        </div>
    </a>
</template>

<style lang='scss' scoped>
@use '../scss/' as *;

.card {
    border-color: transparent;
    transition: all 0.2s ease;
    cursor: pointer;

    &__detail {
        padding: 10px;
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
    }

    &__price {
        color: #e70303;
        font-weight: 600;
        margin-right: 10px;
        margin-top: 10px;
    }

    &:hover {
        border-color: rgba(0, 0, 0, .2);
    }
}
</style>