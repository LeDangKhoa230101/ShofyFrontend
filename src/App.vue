<template>
    <Header v-if="!isLoginPage && !isRegisterPage && accountStore.isROLE === 'ROLE_USER'" />
    <div id="user" v-if="accountStore.isROLE === 'ROLE_USER'">
        <router-view />
    </div>
    <Footer v-if="!isLoginPage && !isRegisterPage && accountStore.isROLE === 'ROLE_USER'" />

    <div id="admin" v-if="accountStore.isROLE === 'ROLE_ADMIN'">
        <Sidebar v-if="accountStore.isROLE === 'ROLE_ADMIN'" />
        <router-view />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useAccount } from "@/store/account";
import Sidebar from "./components/admin/Sidebar.vue";
export default {
    name: "App",
    components: { Header, Footer, Sidebar },
    computed: {
        isLoginPage() {
            return this.$route.path === "/dang-nhap";
        },
        isRegisterPage() {
            return this.$route.path === "/dang-ky";
        },
    },
    setup() {
        const accountStore = useAccount();

        return { accountStore };
    },
};
</script>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html {
    font-size: 62.5%;
}
body {
    font-family: "Jost", sans-serif;
}
#app {
    overflow: hidden;
}
.container {
    max-width: 1320px;
    margin: auto;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
}

@media screen and (min-width: 1025px) {
    .col-w-20 {
        flex: 0 0 auto;
        width: 20%;
    }
}
/* Mobile */
@media screen and (max-width: 739px) {
    .col-w-50 {
        flex: 0 0 auto;
        width: 50%;
    }
}
:root {
    --primary-color: #0989ff;
    --white: #fff;
    --common-black: #010f1c;
    --height-header: 150px;
    --pink-color: #fd4b6b;
    --box-shadow-popup: 0 20px 30px rgba(1, 15, 28, 0.1);
    --border-color-product: #eaebed;
    --yellow: #ffb21d;
}
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes fadeInRight {
    0% {
        opacity: 0;
        transform: translateX(20px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
@keyframes leftToWidth {
    0% {
        opacity: 0;
        width: 0%;
    }
    100% {
        opacity: 1;
        width: 100%;
    }
}

#admin {
    display: flex;
    background-color: #fcfcfc;
}
</style>
