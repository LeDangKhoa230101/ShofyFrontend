<template>
    <div class="deal">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 col-md-8 col-12">
                    <div class="heading">
                        <h3>
                            Giao dịch trong ngày
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
                        </h3>
                    </div>
                </div>
                <div class="col-xl-2 col-md-4 col-12 deal-btn">
                    <button class="deal-view-btn">
                        Xem tất cả ưu đãi
                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-md-4 col-12" style="padding: 0 12px">
                    <a href="#" class="product-item">
                        <div class="product-image">
                            <img src="https://i.ibb.co/n1YRvWJ/headphone-5.png" alt="" />
                        </div>
                        <div class="product-action">
                            <button class="product-action-btn product-cart-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    class="bi bi-cart3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                                    />
                                </svg>
                            </button>
                            <button class="product-action-btn product-wish-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    class="bi bi-heart"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div class="product-body">
                            <span class="category">Tai nghe</span>
                            <h5>Tai nghe khong day</h5>
                            <div class="rate">
                                <font-awesome-icon :icon="['fas', 'star']" />
                                <font-awesome-icon :icon="['fas', 'star']" />
                                <font-awesome-icon :icon="['fas', 'star']" />
                                <font-awesome-icon :icon="['fas', 'star']" />
                                <font-awesome-icon :icon="['fas', 'star-half-stroke']" />
                            </div>
                            <div class="price">
                                <span>200.000đ</span>
                                <span>110.000đ</span>
                            </div>
                            <ul class="countdown">
                                <li>
                                    <span>{{ homeStore.day1 }}</span>
                                    DAY
                                </li>
                                <li>
                                    <span>{{ homeStore.hours1 }}</span>
                                    HRS
                                </li>
                                <li>
                                    <span>{{ homeStore.minutes1 }}</span>
                                    MIN
                                </li>
                                <li>
                                    <span>{{ homeStore.seconds1 }}</span>
                                    SEC
                                </li>
                            </ul>
                        </div>
                    </a>
                </div>
                <div class="col-xl-4 col-md-4 col-12" style="padding: 0 12px">
                    <a href="#" class="product-item">
                        <div class="product-image">
                            <img src="https://i.ibb.co/fMhtt2T/watch-9.png" alt="" />
                        </div>
                        <div class="product-action">
                            <button class="product-action-btn product-cart-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    class="bi bi-cart3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                                    />
                                </svg>
                            </button>
                            <button class="product-action-btn product-wish-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    class="bi bi-heart"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div class="product-body">
                            <span class="category">Smart Watch</span>
                            <h5>Sony Lady Fitness Watch</h5>
                            <div class="rate">
                                <font-awesome-icon :icon="['fas', 'star']" />
                                <font-awesome-icon :icon="['fas', 'star']" />
                                <font-awesome-icon :icon="['fas', 'star']" />
                                <font-awesome-icon :icon="['fas', 'star']" />
                                <font-awesome-icon :icon="['fas', 'star-half-stroke']" />
                            </div>
                            <div class="price">
                                <span>220.000đ</span>
                                <span>170.000đ</span>
                            </div>
                            <ul class="countdown">
                                <li>
                                    <span>{{ homeStore.day2 }}</span>
                                    DAY
                                </li>
                                <li>
                                    <span>{{ homeStore.hours2 }}</span>
                                    HRS
                                </li>
                                <li>
                                    <span>{{ homeStore.minutes2 }}</span>
                                    MIN
                                </li>
                                <li>
                                    <span>{{ homeStore.seconds2 }}</span>
                                    SEC
                                </li>
                            </ul>
                        </div>
                    </a>
                </div>
                <div class="col-xl-4 col-md-4 col-12" style="padding: 0 12px">
                    <a href="#" class="product-item">
                        <div class="product-image">
                            <img src="https://i.ibb.co/fvXHr2Y/blutooth-1.png" alt="" />
                        </div>
                        <div class="product-action">
                            <button class="product-action-btn product-cart-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    class="bi bi-cart3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                                    />
                                </svg>
                            </button>
                            <button class="product-action-btn product-wish-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    class="bi bi-heart"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div class="product-body">
                            <span class="category">Bluetooth</span>
                            <h5>Lenovo Sports Bluetooth</h5>
                            <div class="rate">
                                <font-awesome-icon :icon="['fas', 'star']" />
                                <font-awesome-icon :icon="['fas', 'star']" />
                                <font-awesome-icon :icon="['fas', 'star']" />
                                <font-awesome-icon :icon="['fas', 'star']" />
                                <font-awesome-icon :icon="['fas', 'star-half-stroke']" />
                            </div>
                            <div class="price">
                                <span>320.000đ</span>
                                <span>230.000đ</span>
                            </div>
                            <ul class="countdown">
                                <li>
                                    <span>{{ homeStore.day3 }}</span>
                                    DAY
                                </li>
                                <li>
                                    <span>{{ homeStore.hours3 }}</span>
                                    HRS
                                </li>
                                <li>
                                    <span>{{ homeStore.minutes3 }}</span>
                                    MIN
                                </li>
                                <li>
                                    <span>{{ homeStore.seconds3 }}</span>
                                    SEC
                                </li>
                            </ul>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { useHome } from "@/store/home";
export default {
    name: "deal-wrapper",
    setup() {
        const homeStore = useHome();

        onMounted(() => {
            homeStore.countdown();
        });

        return { homeStore };
    },
};
</script>

<style lang="scss" scoped>
.deal {
    background-color: #ecf2f7;
    padding: 70px 0 80px;
}
.heading {
    margin-bottom: 40px;
    h3 {
        position: relative;
        font-size: 3.6rem;
        z-index: 1;

        svg {
            position: absolute;
            left: 0;
            bottom: -12px;
            color: var(--pink-color);
            z-index: -1;
        }
    }
}
.heading > h3::before {
    position: absolute;
    content: "";
    width: 500px;
    height: 3px;
    right: 110px;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--white);
}
.deal-view-btn {
    font-size: 1.4rem;
    width: 100%;
    border-radius: 4px;
    border: none;
    color: var(--white);
    padding: 10px 26px;
    background-color: var(--primary-color);
    transition: all 0.3s ease-out 0s;

    svg {
        margin-left: 4px;
    }
}
.deal-view-btn:hover {
    background-color: var(--common-black);
}
// Product item
.product-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    border-radius: 8px;
    background-color: var(--white);
    border: 1px solid var(--border-color-product);
    transition: all 0.3s ease-out 0s;

    .product-image {
        border-bottom: 0;
        max-width: calc(100% - 2px);

        img {
            width: 100%;
            transition: all 0.3s ease-out 0s;
        }
    }
}
.product-item:hover {
    border-color: var(--white);
    box-shadow: 0 4px 10px rgba(1, 15, 28, 0.14);
}
.product-item:hover .product-image img {
    transform: scale(1.1);
}
.product-item:hover .product-action {
    visibility: visible;
    right: 20px;
    opacity: 1;
}
.product-body {
    padding: 10px 30px 20px;
    width: calc(100% - 2px);
    border-top: 1px solid var(--border-color-product);

    span {
        font-size: 1.2rem;
        color: #55585b;
    }

    h5 {
        display: -webkit-box;
        line-height: 1.8rem;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 1.5rem;
        font-weight: 550;
        margin: 7px 0;
        color: var(--common-black);
    }

    .rate {
        margin-bottom: 2px;

        svg {
            width: 13px;
            height: 13px;
            color: var(--yellow);
            margin-right: 3px;
        }
    }

    .price {
        span:nth-child(1) {
            font-size: 1.2rem;
            font-weight: 500;
            color: #55585b;
            margin-right: 4px;
            text-decoration-line: line-through;
        }
        span:nth-child(2) {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--primary-color);
        }
    }
}
.product-action {
    position: absolute;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(1, 15, 28, 0.14);
    transition: all 0.3s ease-out 0s;
    visibility: hidden;
    opacity: 0;

    .product-action-btn {
        padding: 8px;
        transition: 0.3s;
        border: none;
        background-color: transparent;
    }

    .product-wish-btn {
        border-top: 1px solid #eaebed;
    }
}
.product-action-btn:hover {
    color: var(--white);
    background-color: var(--primary-color);
}
// count down
.countdown {
    display: flex;
    align-items: center;
    margin-top: 20px;

    li {
        font-size: 1rem;
        width: 50px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid #e4e5e9;
        border-radius: 2px;
        color: #55585b;
        font-weight: 550;
        margin-right: 4px;

        span {
            color: var(--common-black);
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.7rem;
        }
    }
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .heading > h3::before {
        display: none;
    }
    .deal-btn {
        margin-bottom: 20px;
    }
}

/* Tablet */
@media screen and (min-width: 740px) and (max-width: 1024px) {
    .heading > h3::before {
        width: 320px;
        right: -60px;
    }
    .deal-btn {
        text-align: right;
        margin-bottom: 20px;
    }
}
</style>
