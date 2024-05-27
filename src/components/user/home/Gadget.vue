<template>
    <div class="gadget">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-md-4 col-12" style="padding: 0 12px">
                    <div class="sidebar">
                        <div class="sidebar-category">
                            <img src="https://shofy-nuxt.vercel.app/img/product/gadget/gadget-girl.png" alt="" />
                            <h3>
                                Thiết bị điện tử
                                <br />
                                Dụng cụ
                            </h3>
                            <ul class="sidebar-category-list">
                                <li>
                                    <router-link to="/cua-hang">Samsung</router-link>
                                </li>
                                <li>
                                    <router-link to="/cua-hang">Kids Headphones</router-link>
                                </li>
                                <li>
                                    <router-link to="/cua-hang">CPU Cooler</router-link>
                                </li>
                                <li>
                                    <router-link to="/cua-hang">Sports Smart Watch</router-link>
                                </li>
                                <li>
                                    <router-link to="/cua-hang">Wireless Bluetooth</router-link>
                                </li>
                                <li>
                                    <router-link to="/cua-hang">Apple</router-link>
                                </li>
                            </ul>
                            <button>
                                Xem thêm
                                <font-awesome-icon :icon="['fas', 'arrow-right']" />
                            </button>
                        </div>
                        <div class="sidebar-banner">
                            <swiper
                                :slidesPerView="1"
                                :effect="'fade'"
                                :pagination="{
                                    clickable: true,
                                }"
                                :modules="modules"
                                class="tp-sidebar-active"
                            >
                                <swiper-slide>
                                    <div class="sidebar-banner-item">
                                        <img
                                            src="https://shofy-nuxt.vercel.app/img/product/gadget/gadget-banner-1.jpg"
                                            alt=""
                                        />
                                        <div class="sidebar-banner-item-body">
                                            <span>Only 999.000đ</span>
                                            <h4>
                                                Selected novelty <br />
                                                Products
                                            </h4>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="sidebar-banner-item">
                                        <img
                                            src="https://shofy-nuxt.vercel.app/img/product/gadget/gadget-banner-2.jpg"
                                            alt=""
                                        />
                                        <div class="sidebar-banner-item-body">
                                            <span>Only 999.000đ</span>
                                            <h4>
                                                Selected novelty <br />
                                                Products
                                            </h4>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8 col-md-8 col-12" style="padding: 0 12px">
                    <div class="row">
                        <div v-for="item in homeStore.productFeatures" :key="item.id" class="col-xl-4 col-md-4 col-6">
                            <ProductItem :product="item" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper/modules";

import ProductItem from "@/components/ProductItem.vue";
import { useHome } from "@/store/home";
export default {
    name: "gadget-wrapper",
    components: {
        Swiper,
        SwiperSlide,
        ProductItem,
    },
    setup() {
        const homeStore = useHome();

        homeStore.getProductFeature();

        return {
            homeStore,
            modules: [Pagination, EffectFade],
        };
    },
};
</script>

<style lang="scss" scoped>
.gadget {
    padding: 80px 0 75px;
}
.sidebar {
    position: sticky;
    top: 73px;
    margin-bottom: 40px;
}
.sidebar-category {
    position: relative;
    padding: 37px 40px;
    border-radius: 8px;
    overflow: hidden;
    border: 3px solid var(--pink-color);
    margin-bottom: 10px;

    img {
        position: absolute;
        bottom: 0;
        right: -18px;
    }

    h3 {
        position: relative;
        font-size: 2rem;
        font-weight: 500;
        color: var(--common-black);
        max-width: 150px;
        padding-bottom: 8px;
        margin-bottom: 22px;
    }

    button {
        font-size: 1.4rem;
        color: var(--common-black);
        border: none;
        background-color: transparent;
        transition: all 0.3s ease-out 0s;
    }
}
.sidebar-category > button:hover {
    color: var(--primary-color);
}
.sidebar-category > h3::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    bottom: 0;
    background-color: var(--primary-color);
}
.sidebar-category-list {
    max-width: 150px;
    margin-bottom: 27px;

    li {
        margin-bottom: 4px;

        a {
            position: relative;
            display: block;
            font-size: 1.4rem;
            font-weight: 500;
            color: #55585b;
            padding-left: 12px;
            transition: all 0.3s ease-out 0s;
        }
    }
}
.sidebar-category-list li a::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 2px;
    left: 0;
    top: 50%;
    border-radius: 50%;
    transform: translateY(-50%);
    background-color: #55585b;
}
.sidebar-category-list li a:hover {
    color: var(--primary-color);
}
.sidebar-banner-item {
    position: relative;

    img {
        width: 100%;
        height: 177px;
        border-radius: 8px;
    }
    .sidebar-banner-item-body {
        position: absolute;
        top: 50%;
        left: 30px;
        transform: translateY(-50%);
        color: var(--white);

        span {
            font-size: 1.4rem;
            animation-delay: 0.5s;
            display: block;
        }

        h4 {
            font-size: 2.4rem;
            font-weight: 600;
            animation-delay: 0.7s;
        }
    }
}
.tp-sidebar-active .swiper-slide-active .sidebar-banner-item-body span,
.tp-sidebar-active .swiper-slide-active .sidebar-banner-item-body h4 {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: fadeInUp;
}
</style>
