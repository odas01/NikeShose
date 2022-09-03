<script>
import AOS from 'aos';

import './App.scss';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Navbar from './components/Navbar.vue';
export default {
    components: {
        AppHeader: Header,
        AppFooter: Footer,
        AppNavbar: Navbar
    },
    created() {
        AOS.init()
    }
};
</script>

<template>
    <div data-aos="zoom-in" data-aos-duration="1000">
        <AppHeader />
        <AppNavbar />
        <div class="container mt-3 mb-3">
            <router-view />
        </div>
        <AppFooter />
    </div>
</template>