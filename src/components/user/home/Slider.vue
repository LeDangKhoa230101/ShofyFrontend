<template>
    <swiper
        class="tp-slider-active"
        :slides-per-view="1"
        effect="fade"
        :space-between="50"
        :modules="modules"
        @swiper="onSwiper"
    >
        <swiper-slide
            v-for="slide in homeStore.sliderData"
            :key="slide.id"
            style="min-height: 516px; background-color: #115061"
        >
            <div class="shape">
                <img src="@/assets/slider-shape-1.png" alt="" />
                <img src="@/assets/slider-shape-2.png" alt="" />
                <img src="@/assets/slider-shape-3.png" alt="" />
                <img src="@/assets/slider-shape-4.png" alt="" />
            </div>
            <div class="container slider-container">
                <div class="row" style="align-items: center">
                    <div class="col-xl-5 col-md-6 col-xs-12">
                        <div class="slider-body">
                            <span class="fade-in-up slider-start">Starting at 999.000đ</span>
                            <h3 class="fade-in-up slider-name">The best note book collection 2024</h3>
                            <p class="fade-in-up slider-offer">
                                Exclusive offer
                                <span>
                                    -{{ slide.discount }}%
                                    <svg
                                        width="94"
                                        height="20"
                                        viewBox="0 0 94 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </span>
                                off this week
                            </p>
                            <button class="fade-in-up slider-btn">
                                Shop Now
                                <font-awesome-icon :icon="['fas', 'arrow-right']" />
                            </button>
                        </div>
                    </div>
                    <div class="col-xl-7 col-md-6 col-xs-12">
                        <div class="slider-image">
                            <img :src="slide.image" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- Swiper control -->
            <button @click="slidePrev" class="slider-control slider-control-left">
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </button>
            <button @click="slideNext" class="slider-control slider-control-right">
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </button>
            <!-- Swiper control -->
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useHome } from "@/store/home";
export default {
    name: "slider-wrapper",
    components: { Swiper, SwiperSlide },
    setup() {
        const homeStore = useHome();

        const modules = [EffectFade];

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
        return { homeStore, modules, onSwiper, slideNext, slidePrev };
    },
};
</script>

<style lang="scss" scoped>
.shape {
    :nth-child(1) {
        position: absolute;
        mix-blend-mode: luminosity;
        opacity: 0.1;
        right: 0;
        top: 0;
    }
    :nth-child(2) {
        bottom: 13%;
        position: absolute;
        right: 28%;
    }
    :nth-child(3) {
        position: absolute;
        right: 33%;
        top: 8%;
    }
    :nth-child(4) {
        left: 6%;
        position: absolute;
        top: 30%;
    }
}
.slider-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.tp-slider-active .swiper-slide-active .slider-body .fade-in-up {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: fadeInUp;
}
.slider-start {
    color: var(--white);
    font-size: 1.6rem;
    margin-top: 18px;
    display: inline-block;
    animation-delay: 0.3s;
}
.slider-name {
    color: var(--white);
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 1.07;
    margin-bottom: 12px;
    animation-delay: 0.5s;
}
.slider-offer {
    color: var(--white);
    font-size: 2.8rem;
    margin-bottom: 40px;
    font-family: Oregano, cursive;
    animation-delay: 0.7s;

    span {
        position: relative;
        color: #ffd43a;

        svg {
            position: absolute;
            bottom: -21px;
            left: -29px;
        }
    }
}
.slider-btn {
    display: flex;
    align-items: center;
    border: 1px solid var(--white);
    background-color: var(--white);
    color: var(--common-black);
    font-size: 1.5rem;
    padding: 9px 29px;
    border-radius: 4px;
    animation-delay: 0.9s;
    transition: 0.3s;

    svg {
        margin-left: 6px;
    }
}
.slider-btn:hover {
    color: var(--white);
    background-color: transparent;
    border-color: #ffffff33;
}
.slider-image {
    text-align: right;

    img {
        display: inline-block;
        animation-delay: 0.9s;
    }
}
.tp-slider-active .swiper-slide-active .slider-image img {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: fadeInRight;
}
.slider-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.8rem;
    padding: 6px 14px;
    color: var(--white);
    border-radius: 50%;
    border: 1px solid var(--white);
    background-color: transparent;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-out 0s;
}
.tp-slider-active:hover .slider-control-right {
    right: 40px;
    opacity: 1;
    visibility: visible;
}
.tp-slider-active:hover .slider-control-left {
    left: 40px;
    opacity: 1;
    visibility: visible;
}
.slider-control:hover {
    transition: 0.3s;
    color: var(--primary-color);
    background-color: var(--white);
}
.slider-control-left {
    left: 0;
}
.slider-control-right {
    right: 0;
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .slider-name {
        font-size: 3rem;
    }
    .slider-offer {
        margin-bottom: 14px;
    }
    .slider-image {
        text-align: center;
        img {
            width: 200px;
        }
    }
}
</style>
