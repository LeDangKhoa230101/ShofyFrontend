<template>
    <div class="product-item-container">
        <router-link
            :to="{ name: 'productDetail', params: { id: product.id } }"
            v-if="product"
            @click="detailStore.handleDetail(product.id)"
            class="product-item"
        >
            <div class="product-image">
                <img :src="product.imageDefault" alt="" />
            </div>
            <div class="product-body">
                <span class="category">{{ product.cateName }}</span>
                <h5>{{ product.name }}</h5>
                <div class="rate">
                    <font-awesome-icon :icon="['fas', 'star']" />
                    <font-awesome-icon :icon="['fas', 'star']" />
                    <font-awesome-icon :icon="['fas', 'star']" />
                    <font-awesome-icon :icon="['fas', 'star']" />
                    <font-awesome-icon :icon="['fas', 'star-half-stroke']" />
                </div>
                <div class="price">
                    <span>{{ product.priceOld.toLocaleString() }}đ</span>
                    <span>{{ product.priceNew.toLocaleString() }}đ</span>
                </div>
            </div>
        </router-link>
        <div class="product-action">
            <button @click="cartStore.addToCart(product.id)" class="product-action-btn product-cart-btn">
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
    </div>
</template>

<script>
import { useCart } from "@/store/cart";
import { useDetail } from "@/store/detail";
export default {
    name: "product-item",
    props: ["product"],
    setup() {
        const cartStore = useCart();
        const detailStore = useDetail();

        return { cartStore, detailStore };
    },
};
</script>

<style lang="scss" scoped>
.product-item-container {
    position: relative;
    transition: all 0.3s ease-out 0s;
}
// Product item
.product-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    border-radius: 8px;
    cursor: pointer;
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
.product-item-container:hover .product-action {
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
        transition: all 0.3s ease-out 0s;
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
.product-body > h5:hover {
    color: var(--primary-color);
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
    opacity: 1;

    .product-action-btn {
        padding: 8px;
        transition: 0.3s;
        border: none;
        color: var(--common-black);
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
</style>
