<template>
    <div class="category">
        <div class="container">
            <div class="row">
                <div class="col-w-20 col-w-50" v-for="item in homeStore.categorys" :key="item.cateId">
                    <a href="#" class="category-item">
                        <div class="category-img">
                            <img :src="item.cateImage" alt="category img" />
                        </div>
                        <h3>{{ item.cateName }}</h3>
                        <span>{{ item.productCount }} sản phẩm</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useHome } from "@/store/home";
export default {
    name: "category-wrapper",
    setup() {
        const homeStore = useHome();

        // get category
        homeStore.getCategorys();

        return { homeStore };
    },
};
</script>

<style lang="scss" scoped>
.category {
    padding: 60px 0 15px 0;
}
.category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;

    .category-img {
        width: 180px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #f6f7f9;
        background-image: radial-gradient(95.56% 95.56% at 50% 50%, #fff 0, #bddeff 100%);

        img {
            transition: all 0.3s ease-out 0s;
        }
    }

    h3 {
        font-size: 2rem;
        color: var(--common-black);
        font-weight: 550;
        margin-top: 16px;
        transition: 0.3s;
    }

    span {
        font-size: 1.4rem;
        color: #55585b;
    }
}
.category-item:hover .category-img img {
    transform: scale(1.1);
}
.category-item > h3:hover {
    color: var(--primary-color);
}
</style>
