<template>
    <div class="area-home">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-md-6 col-12" style="padding: 0 12px">
                    <div class="area-title">
                        <h4>Sản phẩm giảm giá</h4>
                        <svg width="64" height="20" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M62 13.1107C1.91792 -5.41202 -3.10865 1.22305 5.00242 18.3636"
                                stroke="currentColor"
                                stroke-width="3"
                                stroke-miterlimit="3.8637"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </div>
                    <div class="row">
                        <div class="col-12" v-for="product in homeStore.productArea1" :key="product.id">
                            <a href="#" class="area-item">
                                <div class="area-item-img">
                                    <img :src="product.imageDefault" alt="" />
                                </div>
                                <div class="area-item-content">
                                    <span class="category">{{ product.cateName }}</span>
                                    <h5>{{ product.name }}</h5>
                                    <div class="rate">
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <span>(3 đánh giá)</span>
                                    </div>
                                    <span class="price">{{ product.priceNew.toLocaleString() }}đ</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-12" style="padding: 0 12px">
                    <div class="area-title">
                        <h4>Sản phẩm nổi bật</h4>
                        <svg width="64" height="20" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M62 13.1107C1.91792 -5.41202 -3.10865 1.22305 5.00242 18.3636"
                                stroke="currentColor"
                                stroke-width="3"
                                stroke-miterlimit="3.8637"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </div>
                    <div class="row">
                        <div class="col-12" v-for="product in homeStore.productArea2" :key="product.id">
                            <a href="#" class="area-item">
                                <div class="area-item-img">
                                    <img :src="product.imageDefault" alt="" />
                                </div>
                                <div class="area-item-content">
                                    <span class="category">{{ product.cateName }}</span>
                                    <h5>{{ product.name }}</h5>
                                    <div class="rate">
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <span>(3 đánh giá)</span>
                                    </div>
                                    <span class="price">{{ product.priceNew.toLocaleString() }}đ</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-12" style="padding: 0 12px">
                    <div class="area-title">
                        <h4>Bán sản phẩm</h4>
                        <svg width="64" height="20" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M62 13.1107C1.91792 -5.41202 -3.10865 1.22305 5.00242 18.3636"
                                stroke="currentColor"
                                stroke-width="3"
                                stroke-miterlimit="3.8637"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </div>
                    <div class="row">
                        <div class="col-12" v-for="product in homeStore.productArea3" :key="product.id">
                            <a href="#" class="area-item">
                                <div class="area-item-img">
                                    <img :src="product.imageDefault" alt="" />
                                </div>
                                <div class="area-item-content">
                                    <span class="category">{{ product.cateName }}</span>
                                    <h5>{{ product.name }}</h5>
                                    <div class="rate">
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <font-awesome-icon :icon="['fas', 'star']" />
                                        <span>(3 đánh giá)</span>
                                    </div>
                                    <span class="price">{{ product.priceNew.toLocaleString() }}đ</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useHome } from "@/store/home";
export default {
    name: "area-home",
    setup() {
        const homeStore = useHome();

        homeStore.getProductArea1();
        homeStore.getProductArea2();
        homeStore.getProductArea3();

        return { homeStore };
    },
};
</script>

<style lang="scss" scoped>
.area-home {
    padding-bottom: 50px;
}
.area-title {
    position: relative;

    > h4 {
        font-size: 2.4rem;
        font-weight: 600;
        color: #021d35;
        z-index: 1;
        margin-bottom: 40px;
    }

    > svg {
        position: absolute;
        bottom: -3px;
        left: -3px;
        z-index: -1;
        color: var(--pink-color);
    }
}
.area-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eaebed;
    padding-bottom: 12px;
    margin-bottom: 12px;

    .area-item-img {
        background-color: #eceff4;
        border-radius: 4px;
        margin-right: 25px;
        cursor: pointer;

        img {
            height: 140px;
            transition: all 0.3s ease-out 0s;
        }
    }
}
.area-item:hover .area-item-img img {
    transform: scale(1.1);
}
.area-item-content h5:hover {
    color: var(--primary-color);
}
.area-item-content {
    .category {
        font-size: 1.2rem;
        color: #55585b;
    }
    h5 {
        font-size: 1.5rem;
        color: var(--common-black);
        font-weight: 550;
        margin: 3px 0 13px;
        cursor: pointer;
        transition: all 0.3s ease-out 0s;
    }

    .rate {
        svg {
            color: var(--yellow);
            width: 13px;
            height: 12px;
            margin-right: 3px;
        }
        > span {
            font-size: 1.2rem;
            color: #55585b;
            margin-left: 3px;
        }
    }

    .price {
        font-size: 1.5rem;
        color: var(--primary-color);
        font-weight: 550;
        margin-top: 3px;
        display: block;
    }
}
</style>
