<script>
import { DownOutlined } from '@ant-design/icons-vue';
import TreeMenu from './TreeMenu.vue';

const navbars = [
    {
        name: 'home',
        title: 'Trang chủ'
    },
    {
        name: 'home',
        title: 'Danh mục',
        isCategory: true
    },
    {
        name: 'introduce',
        title: 'Giới thiệu'
    },
    {
        name: 'contact',
        title: 'Liên hệ'
    }
]

const categorys = {
    name: '/',
    children: [
        {
            name: 'cart',
            title: 'Nam',
            children: [
                {
                    name: 'cart',
                    title: 'Running',
                },
                {
                    name: 'cart',
                    title: 'Football',
                },
                {
                    name: 'cart',
                    title: 'Basketball'
                },
                {
                    name: 'cart',
                    title: 'Gym',
                },
            ]
        },
        {
            name: 'cart',
            title: 'Nữ',
            children: [
                {
                    name: 'cart',
                    title: 'Life style'
                },
                {
                    name: 'cart',
                    title: 'Running'
                },
                {
                    name: 'cart',
                    title: 'Football'
                },
                {
                    name: 'cart',
                    title: 'Basketball'
                },
                {
                    name: 'cart',
                    title: 'Gym'
                },
            ]
        },
        {
            name: 'cart',
            title: 'Trẻ em',
        },
    ]
}

export default {
    components: {
        DownOutlined,
        TreeMenu,
    },

    data() {
        return {
            navbars,
            categorys,
        }
    }
}
</script>

<template>
    <div class="navbar d-flex justify-content-center">
        <router-link :to="{ name: navbar.name }" class="navbar__item " v-for="navbar in navbars"
            :class='{ has__children: navbar.isCategory }'>
            {{ navbar.title }}

            <tree-menu v-if="navbar.isCategory" :name="categorys.name" :children="categorys.children" :depth="0">
            </tree-menu>

        </router-link>
    </div>
</template>

<style lang='scss' >
@use '../scss/' as *;

.navbar {
    margin-top: 8px;

    &__item {
        position: relative;
        font-size: 18px;
        font-weight: 500;
        color: unset;

        &:not(.has__children)::before {
            content: "";
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: $black-color;
            border-radius: 100rem;
            opacity: 0;
            visibility: hidden;
            transition: all 0.15s linear;
        }

        &:hover::before,
        &.router-link-active::before {
            opacity: 1;
            visibility: visible;
        }

        &.has__children::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 20px;
            background: transparent;
            bottom: -15px;
            left: 0;
        }


        &.has__children:hover>.tree__menu>.tree__children.root {
            overflow: visible;
            opacity: 1;
            max-height: 3000px;
            max-width: 3000px;
            -webkit-transform: perspective(600px) rotateX(0deg);
            -moz-transform: perspective(600px) rotateX(0deg);
            -ms-transform: perspective(600px) rotateX(0deg);
            -o-transform: perspective(600px) rotateX(0deg);
            transform: perspective(600px) rotateX(0deg);
            -webkit-transition: -webkit-transform 0.5s ease, opacity 0.2s ease, max-height 0s step-end, max-width 0s step-end, padding 0s step-end;
            -o-transition: -o-transform 0.5s ease, opacity 0.2s ease, max-height 0s step-end, max-width 0s step-end, padding 0s step-end;
            transition: transform 0.5s ease, opacity 0.2s ease, max-height 0s step-end, max-width 0s step-end, padding 0s step-end;
        }

    }

    &>*~* {
        margin-left: 28px;
    }
}
</style>