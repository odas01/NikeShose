<script>
import {
    SearchOutlined,
    ShoppingCartOutlined,
    UserSwitchOutlined,
} from "@ant-design/icons-vue";
import { Row, Col } from "ant-design-vue";

export default {
    components: {
        SearchOutlined,
        ShoppingCartOutlined,
        UserSwitchOutlined,
        Row,
        Col,
    },
    computed: {
        name() {
            return this.$store.state.user.name;
        },
        isAdmin() {
            return this.$store.state.user.role === "admin";
        },
    },
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        logout() {
            this.$store.dispatch("logout");
            location.reload();
        },
        changePassword() {
            const token = localStorage.getItem("token_user");
        },
        async search(e) {
            if (e.target.value.trim()) {
                location.replace("/search?q=" + e.target.value.trim());
            }
        },
    },
};
</script>

<template>
    <div class="header displayBox">
    <div class="container">
        <Row :gutter='8'>
            <Col :span='4'>
                <router-link :to="{ name: 'home' }" class="header__logo">
                    <img src="https://file.hstatic.net/200000525917/file/logo-scofield-while_2d1f4117bd8d4867acc370cb4b35e531.png" alt="" />
                </router-link>
            </Col>
            <Col :span='12'>
                <div class="header__search">
                    <input type="text" placeholder="Enter your product..." @keyup.enter='search'/>
                    <search-outlined class="search-btn" width="2em" height="2em" />
                </div>
            </Col>
            <Col :span='8'>
                <Row :gutter='8'  class="header__group">
                    <Col :span='10' class="d-flex align-items-center">
                        <div v-if='!name' class="header__group-auth">
                            <user-switch-outlined />
                            <div class="header__group-auth--wrap">
                                <router-link :to="{ name: 'auth.login' }" class="header__group-auth--login">
                                    <span>Sign In</span>
                                </router-link>
                                <router-link :to="{ name: 'auth.register' }">
                                    <span>Sign Up</span>
                                </router-link>
                            </div>
                        </div>
                        <div v-else class="header__group-isUser">
                            <img src="../assets/image/category/men.png" alt="">
                            <span class="header__group-name">{{name}}</span>
                            <ul class="header__group-dropdown" ref="dropdown">
                                <li v-if="isAdmin">
                                    <a href="/dashboard">
                                        <i class="fa-solid fa-right-from-bracket"></i>
                                        <button>Dashboard</button>
                                    </a>
                                </li>
                                <li>
                                    <a href="/auth/changePassword">
                                        <i class="fa-solid fa-lock"></i>
                                        <button>Change password</button>
                                    </a>
                                </li>
                                <li>
                                    <i class="fa-solid fa-right-from-bracket"></i>
                                    <button @click='logout'>Log out</button>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col :span='8'>
                        <router-link :to="{ name: 'cart' }" class=" header__group-cart">
                            <shopping-cart-outlined width="2em" height="2em" />
                            <span>{{ this.$store.state.quantityCart }}</span>
                        </router-link>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
</div>

</template>

<style lang='scss' scoped>
@use "../scss/" as *;

.header {
    height: $header-h;
    background-color: $header-color;
    color: $white-color;
    padding: 5px;

    &__logo {
        @include flex(center);
        height: var(calc($header-h - 10px));
    }

    &__search {
        @include flex(center);

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
        align-items: center;
        justify-content: end;

        &-auth {
            @include flex(center);

            &--wrap {
                display: flex;
                flex-direction: column;

                & span {
                    font-size: 13px;
                    transition: color 0.15s ease;
                    cursor: pointer;

                    &:hover {
                        color: #0984e3;
                    }
                }
            }

            &--login {
                & span {
                    font-size: 15px;
                }
            }
        }

        &-isUser {
            @include flex(center);
            position: relative;
            cursor: pointer;
            img {
                width: 32px;
                border-radius: 100rem;
                border: 1px solid rgba($color: #000000, $alpha: 0.1);
            }

            span {
                font-size: 16px;
                margin-left: 4px;
            }

            &::before {
                content: "";
                position: absolute;
                top: calc(100% - 10px);
                width: 100%;
                height: 20px;
                background-color: transparent;
            }

            &:hover > ul {
                opacity: 1;
                visibility: visible;
            }
        }

        &-dropdown {
            position: absolute;
            top: calc(100% + 5px);
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            background-color: #202020;
            overflow: hidden;
            opacity: 0;
            visibility: hidden;
            width: max-content;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius: 4px;
            transition: all 0.3s ease;
            li {
                padding: 12px 24px;
                transition: all 0.1s ease;

                button {
                    margin-left: 12px;
                    color: $white-color;
                    background-color: transparent;
                }

                &:hover {
                    background-color: rgba(0, 0, 0, 0.1);
                }
            }
        }

        &-cart {
            position: relative;
            @include flex(center);

            & span:last-child {
                position: absolute;
                top: -10px;
                left: 32px;
                color: $black-color;
                background-color: $white-color;
                border-radius: 100rem;
                padding: 4px 8px;
                font-size: 8px;
                font-weight: 600;
            }
        }

        & span:first-child {
            margin-left: 8px;
        }
    }
}

.ant-col-12 {
    @include flex(center);
}
</style>