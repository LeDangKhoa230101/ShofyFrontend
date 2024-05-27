<template>
    <div class="new-arrival">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 col-md-10 col-7">
                    <div class="new-arri-title">
                        <h3>Điểm đến mới</h3>
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
                    </div>
                </div>
                <div
                    class="col-xl-2 col-md-2 col-5"
                    style="display: flex; align-items: center; justify-content: flex-end"
                >
                    <div class="new-arri-control">
                        <button @click="slidePrev" class="control-btn control-btn-left">
                            <font-awesome-icon :icon="['fas', 'chevron-left']" />
                        </button>
                        <button @click="slideNext" class="control-btn control-btn-right">
                            <font-awesome-icon :icon="['fas', 'chevron-right']" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <swiper
                        @swiper="onSwiper"
                        :breakpoints="{
                            '0': {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            '768': {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            '1024': {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }"
                    >
                        <swiper-slide v-for="item in homeStore.productArraivals" :key="item.id">
                            <ProductItem :product="item" />
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import ProductItem from "@/components/ProductItem.vue";
import { useHome } from "@/store/home";
export default {
    name: "new-arrival",
    components: {
        Swiper,
        SwiperSlide,
        ProductItem,
    },
    setup() {
        const homeStore = useHome();

        let swiperInstance = null;
        const onSwiper = (swiper) => {
            swiperInstance = swiper;
        };

        const slideNext = () => {
            if (swiperInstance) {
                swiperInstance.slideNext();
            }
        };
        const slidePrev = () => {
            if (swiperInstance) {
                swiperInstance.slidePrev();
            }
        };

        // get product arrivals
        homeStore.getProductArrival();

        return { homeStore, onSwiper, slideNext, slidePrev };
    },
};
</script>

<style lang="scss" scoped>
.new-arrival {
    padding-bottom: 55px;
}
.new-arri-title {
    position: relative;
    h3 {
        font-size: 3.6rem;
        color: #021d35;
        z-index: 1;
        font-weight: 550;
    }

    svg {
        position: absolute;
        bottom: -12px;
        left: 0;
        z-index: -1;
        color: var(--pink-color);
    }
}
.new-arri-title > h3::before {
    position: absolute;
    content: "";
    width: 500px;
    height: 2px;
    top: 50%;
    right: 100px;
    transform: translateY(-50%);
    background-color: #f0f2f4;
}
.control-btn {
    font-size: 2rem;
    height: 40px;
    width: 40px;
    line-height: 38px;
    border-radius: 50%;
    color: #55585b;
    margin-bottom: 40px;
    background-color: transparent;
    border: 1px solid rgba(1, 15, 28, 0.1);
    text-align: center;
    transition: all 0.3s ease-out 0s;
}
.control-btn:hover {
    color: var(--white);
    background-color: var(--primary-color);
}
.control-btn-left {
    margin-right: 8px;
}
.swiper-wrapper {
    justify-content: center;
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .new-arri-title > h3::before {
        display: none;
    }
    .new-arri-title h3 {
        font-size: 3rem;
    }
}
</style>
