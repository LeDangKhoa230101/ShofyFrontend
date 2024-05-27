<template>
    <div class="slide-banner">
        <div class="container">
            <swiper
                :slidesPerView="1"
                :spaceBetween="30"
                :effect="'fade'"
                :pagination="{
                    clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide style="max-height: 500px">
                    <div class="row">
                        <div class="col-xl-6 col-md-6 col-12">
                            <div class="slide-banner-content">
                                <span class="fade-in-up">Tablet Collection 2023</span>
                                <h3 class="fade-in-up">Galaxy Tab S6 Lite Android Tablet</h3>
                                <div class="fade-in-up slide-banner-content-price">
                                    <span>999.000đ</span>
                                    <p>345.000đ</p>
                                </div>
                                <button class="fade-in-up">Shop now</button>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6 col-12">
                            <div class="slide-banner-thumb">
                                <div class="slide-banner-thumb-shape">
                                    <span class="fade-in-right"></span>
                                    <img
                                        class="fade-in-right"
                                        src="https://shofy-nuxt.vercel.app/img/banner/banner-slider-offer.png"
                                        alt=""
                                    />
                                </div>
                                <div class="slide-banner-thumb-img">
                                    <img
                                        class="fade-in-right"
                                        src="https://shofy-nuxt.vercel.app/img/banner/banner-slider-2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide style="max-height: 500px">
                    <div class="row">
                        <div class="col-xl-6 col-md-6 col-12">
                            <div class="slide-banner-content">
                                <span class="fade-in-up">Tablet Collection 2023</span>
                                <h3 class="fade-in-up">Galaxy Tab S6 Lite Android Tablet</h3>
                                <div class="fade-in-up slide-banner-content-price">
                                    <span>999.000đ</span>
                                    <p>345.000đ</p>
                                </div>
                                <button class="fade-in-up">Shop now</button>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6 col-12">
                            <div class="slide-banner-thumb">
                                <div class="slide-banner-thumb-shape">
                                    <span class="fade-in-right"></span>
                                    <img
                                        class="fade-in-right"
                                        src="https://shofy-nuxt.vercel.app/img/banner/banner-slider-offer.png"
                                        alt=""
                                    />
                                </div>
                                <div class="slide-banner-thumb-img">
                                    <img
                                        class="fade-in-right"
                                        src="https://shofy-nuxt.vercel.app/img/banner/banner-slider-1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide style="max-height: 500px">
                    <div class="row">
                        <div class="col-xl-6 col-md-6 col-12">
                            <div class="slide-banner-content">
                                <span class="fade-in-up">Tablet Collection 2023</span>
                                <h3 class="fade-in-up">Galaxy Tab S6 Lite Android Tablet</h3>
                                <div class="fade-in-up slide-banner-content-price">
                                    <span>999.000đ</span>
                                    <p>345.000đ</p>
                                </div>
                                <button class="fade-in-up">Shop now</button>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6 col-12">
                            <div class="slide-banner-thumb">
                                <div class="slide-banner-thumb-shape">
                                    <span class="fade-in-right"></span>
                                    <img
                                        class="fade-in-right"
                                        src="https://shofy-nuxt.vercel.app/img/banner/banner-slider-offer.png"
                                        alt=""
                                    />
                                </div>
                                <div class="slide-banner-thumb-img">
                                    <img
                                        class="fade-in-right"
                                        src="https://shofy-nuxt.vercel.app/img/slider/slider-img-1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import { Pagination, EffectFade } from "swiper/modules";
export default {
    name: "slide-banner",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, EffectFade],
        };
    },
};
</script>

<style lang="scss" scoped>
.slide-banner {
    padding-bottom: 90px;
}
.mySwiper .swiper-slide-active .fade-in-up {
    animation-fill-mode: both;
    animation-name: fadeInUp;
}
.mySwiper .swiper-slide-active .fade-in-right {
    animation-fill-mode: both;
    animation-name: fadeInRight;
}
.swiper-slide {
    background-color: var(--primary-color);
    padding: 64px 80px 69px;
    border-radius: 8px;
}
.slide-banner-content {
    > span {
        font-size: 1.6rem;
        color: #ffffffcc;
        transition: all 0.3s ease-out 0s;
        animation-delay: 0.3s;
        animation-duration: 1s;
    }
    h3 {
        color: var(--white);
        font-size: 5.2rem;
        font-weight: 800;
        line-height: 1.15;
        margin-bottom: 10px;
        animation-delay: 0.5s;
        animation-duration: 1s;
        transition: all 0.3s ease-out 0s;
    }

    .slide-banner-content-price {
        animation-delay: 0.7s;
        animation-duration: 1s;
        > span {
            color: hsla(0, 0%, 100%, 0.7);
            font-size: 1.4rem;
            letter-spacing: -0.02em;
            line-height: 20px;
            text-decoration-line: line-through;
            transition: all 0.3s ease-out 0s;
        }
        > p {
            color: var(--white);
            font-size: 4rem;
            letter-spacing: -0.04em;
            line-height: 3rem;
            transition: all 0.3s ease-out 0s;
        }
    }
    button {
        border: none;
        background-color: var(--common-black);
        color: var(--white);
        font-size: 1.4rem;
        padding: 10px 41px 12px;
        border-radius: 8px;
        margin-top: 40px;
        animation-delay: 0.9s;
        animation-duration: 1s;
        transition: all 0.3s ease-out 0s;
    }
}
.slide-banner-content > button:hover {
    background-color: var(--white);
    color: var(--common-black);
}
.slide-banner-thumb {
    position: relative;
    text-align: right;
    .slide-banner-thumb-shape {
        > span {
            display: inline-block;
            position: absolute;
            height: 400px;
            width: 400px;
            left: 0;
            top: -6%;
            border-radius: 50%;
            background-image: radial-gradient(
                50% 50% at 50% 50%,
                rgba(171, 215, 255, 0.25) 0,
                rgba(3, 76, 219, 0.35) 100%
            );
            animation-delay: 1.3s;
            animation-duration: 1s;
        }
        > img {
            position: absolute;
            left: 30%;
            top: -8%;
            z-index: 11;
            animation-delay: 1.1s;
            animation-duration: 1s;
        }
    }

    .slide-banner-thumb-img {
        position: relative;
        z-index: 1;

        > img {
            max-height: 367px;
            animation-delay: 1.1s;
            animation-duration: 1s;
        }
    }
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .swiper-slide {
        padding: 30px 30px 69px;
    }
    .slide-banner-content h3 {
        font-size: 3rem;
    }
    .slide-banner-thumb-img {
        img {
            width: 200px;
        }
    }
    .slide-banner-thumb .slide-banner-thumb-shape > img {
        width: 70px;
        top: 14%;
    }
    .slide-banner-content > button {
        margin-top: 30px;
    }
}
</style>
