<template>
    <div class="trending">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-md-6 col-12">
                    <h2 class="tren-heading-title">
                        Sản phẩm thịnh hành
                        <svg
                            width="114"
                            height="35"
                            viewBox="0 0 114 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053"
                                stroke="currentColor"
                                stroke-width="4"
                                stroke-miterlimit="3.8637"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </h2>
                </div>
                <div class="col-xl-4 col-md-6 col-12">
                    <ul class="tabs">
                        <li
                            @click="homeStore.handleShowNew()"
                            :class="homeStore.tabShowNew ? 'active' : ''"
                            class="tab-item"
                        >
                            Mới
                            <svg
                                width="52"
                                height="13"
                                viewBox="0 0 52 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 8.97127C11.6061 -5.48521 33 3.99996 51 11.4635"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-miterlimit="3.8637"
                                    stroke-linecap="round"
                                ></path>
                            </svg>
                        </li>
                        <li
                            @click="homeStore.handleShowFeature()"
                            :class="homeStore.tabShowFeature ? 'active' : ''"
                            class="tab-item"
                        >
                            Đặc sắc
                            <svg
                                width="52"
                                height="13"
                                viewBox="0 0 52 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 8.97127C11.6061 -5.48521 33 3.99996 51 11.4635"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-miterlimit="3.8637"
                                    stroke-linecap="round"
                                ></path>
                            </svg>
                        </li>
                        <li
                            @click="homeStore.handleShowTopSell()"
                            :class="homeStore.tabShowTopSell ? 'active' : ''"
                            class="tab-item"
                        >
                            Bán chạy nhất
                            <svg
                                width="52"
                                height="13"
                                viewBox="0 0 52 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 8.97127C11.6061 -5.48521 33 3.99996 51 11.4635"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-miterlimit="3.8637"
                                    stroke-linecap="round"
                                ></path>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Tab content -->
            <div v-if="homeStore.tabContentNew" class="row">
                <div
                    v-for="item in homeStore.productNews"
                    :key="item.id"
                    class="col-xl-3 col-lg-3 col-6"
                    style="padding: 0 12px"
                >
                    <ProductItem :product="item" />
                </div>
            </div>
            <div v-if="homeStore.tabContenFeature" class="row">
                <div
                    v-for="item in homeStore.productFeatures"
                    :key="item.id"
                    class="col-xl-3 col-lg-3 col-6"
                    style="padding: 0 12px"
                >
                    <ProductItem :product="item" />
                </div>
            </div>
            <div v-if="homeStore.tabContentTopSell" class="row">
                <div
                    v-for="item in homeStore.productSellers"
                    :key="item.id"
                    class="col-xl-3 col-lg-3 col-6"
                    style="padding: 0 12px"
                >
                    <ProductItem :product="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { useHome } from "@/store/home";
export default {
    name: "trending-product",
    components: { ProductItem },
    setup() {
        const homeStore = useHome();

        // get product new
        homeStore.getProductNew();

        // get product feature
        homeStore.getProductFeature();

        // get product seller
        homeStore.getProductSeller();

        return { homeStore };
    },
};
</script>

<style lang="scss" scoped>
.trending {
    padding-bottom: 55px;
}
.tren-heading-title {
    position: relative;
    color: var(--common-black);
    font-size: 3.6rem;
    font-weight: 550;
    z-index: 1;

    svg {
        position: absolute;
        left: 0;
        bottom: -12px;
        z-index: -1;
        color: var(--pink-color);
    }
}
.tren-heading-title::before {
    position: absolute;
    content: "";
    width: 420px;
    height: 2px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #f0f2f4;
}
.tabs {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 45px;

    .tab-item {
        position: relative;
        font-size: 2rem;
        margin-left: 47px;
        color: #a0a2a4;
        cursor: pointer;
        transition: all ease-in-out 0.3s;

        svg {
            position: absolute;
            left: 0;
            bottom: -8px;
            color: var(--primary-color);
            opacity: 0;
            transition: all ease-in-out 0.3s;
        }
    }
}
.tab-item.active {
    color: var(--common-black);

    svg {
        opacity: 1;
    }
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .tren-heading-title::before {
        display: none;
    }
    .tren-heading-title {
        margin-bottom: 30px;
    }
    .tabs {
        justify-content: center;
        .tab-item {
            margin-left: 10px;
            margin-right: 20px;
        }
    }
}

/* Tablet */
@media screen and (min-width: 740px) and (max-width: 1024px) {
    .tren-heading-title::before {
        width: 200px;
        right: -126px;
    }
    .tabs .tab-item {
        margin-left: 30px;
    }
}
</style>
