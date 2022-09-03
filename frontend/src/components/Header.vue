<script>
import { SearchOutlined, ShoppingCartOutlined, UserSwitchOutlined } from '@ant-design/icons-vue';

export default {
    components: {
        SearchOutlined,
        ShoppingCartOutlined,
        UserSwitchOutlined
    },
};
</script>

<template>
    <div class="header displayBox ">
        <div class="container">
            <div class="row">
                <div class="col col-md-2">
                    <router-link :to="{ name: 'home' }" class="header__logo">
                        <img src="https://file.hstatic.net/200000525917/file/logo-scofield-while_2d1f4117bd8d4867acc370cb4b35e531.png"
                            alt="">
                    </router-link>
                </div>
                <div class="col col-md-6 d-flex align-items-center">
                    <div class="header__search">
                        <input type="text" placeholder="Enter your product...">
                        <search-outlined class="search-btn" width='2em' height='2em' />
                    </div>
                </div>
                <div class="col col-md-4">
                    <div class="row align-items-center justify-content-end header__group">
                        <div class="col col-md-5 d-flex align-items-center justify-content-center">
                            <user-switch-outlined />
                            <div class="d-flex flex-column align-items-center header__group-wrap">
                                <router-link :to="{ name: 'register' }" class="header__group-login">
                                    <span>Đăng nhập</span>
                                </router-link>
                                <router-link :to="{ name: 'login' }">
                                    <span>Đăng ký</span>
                                </router-link>
                            </div>
                        </div>
                        <router-link :to="{ name: 'cart' }"
                            class="col col-md-4 d-flex align-items-center  header__group-cart">
                            <shopping-cart-outlined width='2em' height='2em' />
                            <div class="header__group-wrap">
                                <span>Giỏ hàng</span>
                                <span>10</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang='scss' scoped>
@use '../scss/' as *;

.header {
    height: $header-h;
    background-color: $header-color;
    color: $white-color;
    padding: 5px;

    &__logo {
        @include flex(center, unset);
        height: var(calc($header-h - 10px));
    }

    &__search {
        @include flex(center, unset);

        height: 40px;
        width: 100%;
        margin: 0px 12px;
        background-color: $white-color;
        padding: 5px 2px 5px 0;
        border-radius: 4px;

        & input {
            flex: 1;
            outline: none;
            border: none;
            padding-left: 12px;
            color: $black-color;
        }

        & .search-btn {
            @include flex(center, center);
            width: 80px;
            height: 36px;
            background-color: $black-color;
            border-radius: 4px;
        }
    }

    &__group {
        height: 100%;

        & span:first-child {
            margin-left: 8px;
        }

        & a {
            color: unset;
        }

        &-cart {
            position: relative;

            & span:last-child {
                position: absolute;
                top: -10px;
                left: 32px;
                background-color: $white-color;
                color: $black-color;
                border-radius: 100rem;
                padding: 4px 8px;
                font-size: 8px;
                font-weight: 700;
            }
        }

        &-wrap {

            & span {
                font-size: 13px;
                transition: color 0.15s ease;

                &:hover {
                    color: #0984e3;
                }
            }
        }

        &-login {
            & span {
                font-size: 15px;
            }
        }
    }



}
</style>