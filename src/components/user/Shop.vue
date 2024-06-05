<template>
    <div class="shop">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="heading">
                        <h3>Cửa hàng</h3>
                        <div class="breadcrumb">
                            <span>Trang chủ</span>
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            <span>Cửa hàng</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- Side bar filter -->
                <div class="col-xl-3 col-md-3 col-12" style="padding: 0 12px">
                    <div class="side-bar">
                        <div class="side-bar-item">
                            <h3>Thể loại</h3>
                            <ul class="list-category">
                                <li
                                    v-for="(item, index) in homestore.categorys"
                                    :key="item.cateId"
                                    :class="
                                        shopStore.activeCategoryIndex === index && isShopCategoryPage ? 'active' : ''
                                    "
                                    @click="shopStore.activeCategoryIndex = index"
                                >
                                    <router-link
                                        :to="{ name: 'shop', params: { name: item.cateName } }"
                                        @click="getProductByCate(item.cateName)"
                                    >
                                        {{ item.cateName }}
                                        <span>{{ item.productCount }}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="side-bar-item">
                            <h3>Trạng thái sản phẩm</h3>
                            <div class="status-product-item">
                                <input type="checkbox" />
                                <span>Đang giảm giá</span>
                            </div>
                            <div class="status-product-item">
                                <input type="checkbox" />
                                <span>Trong kho</span>
                            </div>
                        </div>
                        <div class="side-bar-item">
                            <h3>Sản phẩm đánh giá hàng đầu</h3>
                            <ul class="rate-product-list">
                                <li>
                                    <a href="#">
                                        <img src="https://i.ibb.co/n1YRvWJ/headphone-5.png" alt="" />
                                        <div class="product-content">
                                            <div class="rate-list">
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <span>(5)</span>
                                            </div>
                                            <h4>Gaming Headphone</h4>
                                            <span>12.121.000đ</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="https://i.ibb.co/n1YRvWJ/headphone-5.png" alt="" />
                                        <div class="product-content">
                                            <div class="rate-list">
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <span>(5)</span>
                                            </div>
                                            <h4>Gaming Headphone</h4>
                                            <span>12.121.000đ</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="https://i.ibb.co/n1YRvWJ/headphone-5.png" alt="" />
                                        <div class="product-content">
                                            <div class="rate-list">
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <span>(5)</span>
                                            </div>
                                            <h4>Gaming Headphone</h4>
                                            <span>12.121.000đ</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="side-bar-item">
                            <h3>Thương hiệu nổi tiếng</h3>
                            <div class="row">
                                <div class="col-6">
                                    <a href="#" class="brand-link">
                                        <img src="https://i.ibb.co/Ydf3C1H/brand-1.png" alt="" />
                                    </a>
                                </div>
                                <div class="col-6">
                                    <a href="#" class="brand-link">
                                        <img src="https://i.ibb.co/GTzWqnP/brand-2.png" alt="" />
                                    </a>
                                </div>
                                <div class="col-6">
                                    <a href="#" class="brand-link">
                                        <img src="https://i.ibb.co/YPzHpCD/brand-3.png" alt="" />
                                    </a>
                                </div>
                                <div class="col-6">
                                    <a href="#" class="brand-link">
                                        <img src="https://i.ibb.co/n3Wktzh/brand-4.png" alt="" />
                                    </a>
                                </div>
                                <div class="col-6">
                                    <a href="#" class="brand-link">
                                        <img src="https://i.ibb.co/xqTCvsL/brand-5.png" alt="" />
                                    </a>
                                </div>
                                <div class="col-6">
                                    <a href="#" class="brand-link">
                                        <img src="https://i.ibb.co/SfBRy61/brand-6.png" alt="" />
                                    </a>
                                </div>
                                <div class="col-6">
                                    <a href="#" class="brand-link">
                                        <img src="https://i.ibb.co/LNymxGk/brand-7.png" alt="" />
                                    </a>
                                </div>
                                <div class="col-6">
                                    <a href="#" class="brand-link">
                                        <img src="https://i.ibb.co/mCqwRnT/brand-8.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="side-bar-item">
                            <h3>Đặt lại bộ lọc</h3>
                            <router-link to="/cua-hang" @click="handlePagenate(1)" class="reset-filter-btn"
                                >Đặt lại bộ lọc</router-link
                            >
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 col-md-9 col-12" style="padding: 0 12px">
                    <div class="row">
                        <div class="col-12">
                            <div class="row" style="margin-bottom: 45px">
                                <!-- Nav Menu -->
                                <div class="col-xl-6 col-md-6 col-6">
                                    <div class="nav-menu">
                                        <button
                                            @click="shopStore.handleShowList4()"
                                            class="nav-item-btn"
                                            :class="{ active: shopStore.showList4 === true }"
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.3327 6.01341V2.98675C16.3327 2.04675 15.906 1.66675 14.846 1.66675H12.1527C11.0927 1.66675 10.666 2.04675 10.666 2.98675V6.00675C10.666 6.95341 11.0927 7.32675 12.1527 7.32675H14.846C15.906 7.33341 16.3327 6.95341 16.3327 6.01341Z"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path
                                                    d="M16.3327 15.18V12.4867C16.3327 11.4267 15.906 11 14.846 11H12.1527C11.0927 11 10.666 11.4267 10.666 12.4867V15.18C10.666 16.24 11.0927 16.6667 12.1527 16.6667H14.846C15.906 16.6667 16.3327 16.24 16.3327 15.18Z"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path
                                                    d="M7.33268 6.01341V2.98675C7.33268 2.04675 6.90602 1.66675 5.84602 1.66675H3.15268C2.09268 1.66675 1.66602 2.04675 1.66602 2.98675V6.00675C1.66602 6.95341 2.09268 7.32675 3.15268 7.32675H5.84602C6.90602 7.33341 7.33268 6.95341 7.33268 6.01341Z"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path
                                                    d="M7.33268 15.18V12.4867C7.33268 11.4267 6.90602 11 5.84602 11H3.15268C2.09268 11 1.66602 11.4267 1.66602 12.4867V15.18C1.66602 16.24 2.09268 16.6667 3.15268 16.6667H5.84602C6.90602 16.6667 7.33268 16.24 7.33268 15.18Z"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                            </svg>
                                        </button>
                                        <button
                                            @click="shopStore.handleShowList12()"
                                            class="nav-item-btn"
                                            :class="{ active: shopStore.showList12 === true }"
                                        >
                                            <svg
                                                width="16"
                                                height="15"
                                                viewBox="0 0 16 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15 7.11108H1"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path
                                                    d="M15 1H1"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path
                                                    d="M15 13.2222H1"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                            </svg>
                                        </button>
                                        <span class="show-result-text">
                                            Hiển thị {{ products.length }} trên {{ totalProducts }} kết quả
                                        </span>
                                    </div>
                                </div>
                                <!-- Select -filter -->
                                <div class="col-xl-6 col-md-6 col-6">
                                    <div class="filter-select">
                                        <select @change="handleSelectFilter">
                                            <option value="default" selected>Phân loại mặc định</option>
                                            <option value="1">Cao đến thấp</option>
                                            <option value="2">Thấp đến cao</option>
                                            <option value="3">Đang giảm giá</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12" v-if="shopStore.showList4">
                            <div class="row">
                                <div
                                    v-for="item in products"
                                    :key="item.id"
                                    class="col-xl-4 col-md-4 col-6"
                                    style="padding: 0 12px"
                                >
                                    <ProductItem :product="item" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12" v-if="shopStore.showList12">
                            <div class="row">
                                <div v-for="product in products" :key="product.id" class="col-12">
                                    <div class="product-item">
                                        <router-link
                                            :to="{ name: 'productDetail', params: { id: product.id } }"
                                            @click="detailStore.handleDetail(product.id)"
                                            class="image-link"
                                        >
                                            <img :src="product.imageDefault" alt="product-image" />
                                        </router-link>
                                        <div class="product-item-content">
                                            <p class="category">{{ product.cateName }}</p>
                                            <router-link
                                                :to="{ name: 'productDetail', params: { id: product.id } }"
                                                @click="detailStore.handleDetail(product.id)"
                                                class="name"
                                                >{{ product.name }}</router-link
                                            >
                                            <div class="rate">
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                                <font-awesome-icon :icon="['fas', 'star']" />
                                            </div>
                                            <div class="price">
                                                <span>{{ product.priceOld.toLocaleString() }}đ</span>
                                                <span>{{ product.priceNew.toLocaleString() }}đ</span>
                                            </div>
                                            <p class="description">
                                                Tai nghe Jabra Evolve2 75 USB-A MS Teams Stereo Tai nghe Jabra Evolve2
                                                75 USB-A MS Teams ha
                                            </p>
                                            <a href="#" class="next-cart">Thêm vào giỏ hàng</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Paginate -->
                    <div class="row" v-if="!isShopCategoryPage">
                        <div class="col-12">
                            <div class="paginate-container">
                                <nav>
                                    <ul class="pagination-list">
                                        <li class="page-item">
                                            <router-link
                                                class="page-link"
                                                :to="{ name: 'shopPaginate', params: { page: currentPage - 1 } }"
                                                :class="{ disable: currentPage === 1 }"
                                                @click="prevPage"
                                            >
                                                <font-awesome-icon :icon="['fas', 'arrow-left']" />
                                            </router-link>
                                        </li>
                                        <li class="page-item" v-for="item in pageItems" :key="item">
                                            <router-link
                                                :to="{ name: 'shopPaginate', params: { page: item } }"
                                                class="page-link"
                                                :class="{ active: currentPage === item }"
                                                @click="handlePagenate(item)"
                                            >
                                                {{ item }}
                                            </router-link>
                                        </li>
                                        <li class="page-item">
                                            <router-link
                                                class="page-link"
                                                :to="{ name: 'shopPaginate', params: { page: currentPage + 1 } }"
                                                :class="{ disable: currentPage === totalPages }"
                                                @click="nextPage"
                                            >
                                                <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                            </router-link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { useShop } from "@/store/shop";
import { useDetail } from "@/store/detail";
import { useHome } from "@/store/home";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";
export default {
    name: "shop-wrapper",
    components: { ProductItem },
    computed: {
        isShopCategoryPage() {
            return this.$route.name === "shop";
        },
    },
    setup() {
        const shopStore = useShop();
        const detailStore = useDetail();
        const homestore = useHome();

        // get all category
        homestore.getCategorys();

        // filter select
        const handleSelectChange = (event) => {
            shopStore.handleSelectChange(event);
        };

        //// load products and paginate
        const route = useRoute();
        const currentPage = ref(parseInt(route.params.page) || 1);
        const products = ref([]);
        const totalProducts = ref(0);
        const pageItems = ref([]);
        const totalPages = ref(0);

        const paginateProducts = async (page) => {
            try {
                const res = await axios.get(`http://localhost:8081/products/pagination/${page}?size=6`);
                products.value = res.data.productDtos;
                totalProducts.value = res.data.totalProducts;
                totalPages.value = Math.ceil(totalProducts.value / 6);
                generatePageItems();
            } catch (error) {
                console.log(error);
            }
        };

        const generatePageItems = () => {
            pageItems.value = Array.from({ length: totalPages.value }, (_, i) => i + 1);
        };

        const handlePagenate = (page) => {
            currentPage.value = page;
            paginateProducts(page);
        };

        const prevPage = () => {
            if (currentPage.value > 1) {
                handlePagenate(currentPage.value - 1);
            }
        };

        const nextPage = () => {
            if (currentPage.value < totalPages.value) {
                handlePagenate(currentPage.value + 1);
            }
        };

        /// load product by caategory
        const getProductByCate = async (name) => {
            try {
                const res = await axios.get(`http://localhost:8081/categorys/${name}`);
                products.value = res.data;
            } catch (error) {
                console.log(error);
            }
        };

        /// sort product by desc and asc
        const sortProductByDesc = () => {
            products.value.sort((a, b) => b.priceNew - a.priceNew);
        };

        const sortProductByAsc = () => {
            products.value.sort((a, b) => a.priceNew - b.priceNew);
        };

        const handleSelectFilter = (event) => {
            const selectedValue = event.target.value;
            switch (selectedValue) {
                case "1":
                    sortProductByDesc();
                    break;
                case "2":
                    sortProductByAsc();
                    break;
                case "3":
                    break;
                case "default":
                    break;
                default:
                    break;
            }
        };

        onMounted(() => {
            paginateProducts(currentPage.value);
        });

        return {
            shopStore,
            detailStore,
            homestore,
            handleSelectChange,
            pageItems,
            products,
            totalProducts,
            currentPage,
            totalPages,
            handlePagenate,
            prevPage,
            nextPage,
            getProductByCate,
            handleSelectFilter,
        };
    },
};
</script>

<style lang="scss" scoped>
.shop {
    padding-bottom: 120px;
}
.heading {
    padding-top: 95px;
    padding-bottom: 50px;

    h3 {
        font-size: 4.4rem;

        color: var(--common-black);
    }

    .breadcrumb {
        display: flex;
        align-items: center;
        color: #55585b;

        span {
            font-size: 1.6rem;
        }
        svg {
            width: 4px;
            height: 4px;
            margin: 0 5px;
        }
    }
}
.side-bar-item {
    margin-bottom: 50px;
    h3 {
        font-size: 1.8rem;
        font-weight: 500;
        margin-bottom: 25px;
        padding-bottom: 5px;
        border-bottom: 1px solid #eee;
    }
    .list-category {
        li {
            position: relative;
            line-height: 2.6rem;
            margin-bottom: 10px;

            > a {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 1.5rem;
                padding-left: 16px;
                color: #55585b;
                width: 100%;
                transition: all 0.3s ease-out 0s;

                > span {
                    font-size: 1.2rem;
                    font-weight: 500;
                    line-height: 1;
                    padding: 5px 6px 3px;
                    border-radius: 8px;
                    border: 1px solid #eaeaea;
                    transition: all 0.3s ease-out 0s;
                }
            }
        }
    }
}
.list-category li > a:hover {
    color: var(--primary-color);
}
.list-category li > a:hover::before {
    background-color: var(--primary-color);
}
.list-category li > a:hover > span {
    background-color: var(--primary-color);
    color: var(--white);
}
.list-category li.active > a {
    color: var(--primary-color);
}
.list-category li.active > a::before {
    background-color: var(--primary-color);
}
.list-category li.active > a > span {
    background-color: var(--primary-color);
    color: var(--white);
}
.list-category li > a::before {
    position: absolute;
    content: "";
    width: 6px;
    height: 6px;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    background: #e7e7e7;
    transition: all 0.3s ease-out 0s;
}
.status-product-item {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    color: #55585b;
    margin-bottom: 4px;

    > input {
        width: 16px;
        height: 16px;
        margin-right: 10px;
        margin-top: 2px;
    }
}
.rate-product-list {
    li {
        margin-bottom: 20px;
        > a {
            display: flex;
            align-items: center;
            img {
                width: 70px;
                height: 70px;
                background-color: #f2f2f2;
                margin-right: 14px;
            }
            .product-content {
                .rate-list {
                    svg {
                        width: 13px;
                        height: 13px;
                        margin-right: 2px;
                        color: var(--yellow);
                    }
                    > span {
                        color: #818487;
                        font-size: 1.2rem;
                    }
                }
                > h4 {
                    display: -webkit-box;
                    line-height: 24px;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    font-size: 1.6rem;
                    margin: 0;
                    color: var(--common-black);
                }
                > span {
                    font-size: 1.4rem;
                    color: #55585b;
                }
            }
        }
    }
}
.brand-link {
    display: inline-block;
    margin-bottom: 30px;
}
.reset-filter-btn {
    display: inline-block;
    font-size: 1.6rem;
    padding: 9px 26px;
    color: var(--white);
    border: 1px solid #55585b;
    background-color: var(--common-black);
    transition: all 0.3s ease-out 0s;
}
.reset-filter-btn:hover {
    color: var(--common-black);
    background-color: var(--white);
}
.nav-menu {
    .nav-item-btn {
        width: 40px;
        height: 40px;
        line-height: 38px;
        font-size: 1.8rem;
        border-radius: 0;
        color: #818487;
        display: inline-block;
        text-align: center;
        margin-right: 6px;
        border: 1px solid rgba(1, 15, 28, 0.1);
        background-color: transparent;
        transition: all 0.3s ease-out 0s;

        svg {
            transform: translateY(-2px);
        }
    }
    .show-result-text {
        font-size: 1.6rem;
        color: #818487;
        margin-left: 20px;
    }
}
.nav-menu .nav-item-btn.active {
    border-color: var(--common-black);

    svg {
        color: var(--common-black);
    }
}
.filter-select {
    height: 100%;
    text-align: right;
    select {
        height: 100%;
        font-size: 1.6rem;
        color: #55585b;
        padding: 0 12px;
        outline: none;
    }
}
.product-item {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    .image-link {
        display: block;
        background-color: rgb(242, 243, 245);

        img {
            height: 310px;
            object-fit: contain;
            transition: all 0.3s ease-out 0s;
        }
    }
    .product-item-content {
        padding: 37px 70px 37px 60px;
        border-top: 1px solid #e0e2e3;
        border-right: 1px solid #e0e2e3;
        border-bottom: 1px solid #e0e2e3;

        .category {
            font-size: 1.6rem;
            color: #55585b;
            margin-bottom: 0;
        }
        .name {
            display: inline-block;
            font-size: 2rem;
            color: var(--common-black);
            margin-bottom: 2px;
            transition: all 0.3s ease-out 0s;
        }
        .rate {
            line-height: 2.6rem;
            margin-bottom: 4px;
            svg {
                width: 15px;
                height: 15px;
                color: var(--yellow);
                margin-right: 2px;
            }
        }
        .price {
            margin-bottom: 12px;
            > span:nth-child(1) {
                font-size: 1.6rem;
                color: var(--common-black);
                font-weight: 550;
                margin-right: 4px;
            }
            > span:nth-child(2) {
                font-size: 1.4rem;
                color: #55585b;
                text-decoration: line-through;
            }
        }
        .description {
            font-size: 1.6rem;
            color: #55585b;
            margin-bottom: 25px;
        }
        .next-cart {
            padding: 9px 20px;
            color: var(--white);
            font-size: 1.4rem;
            display: inline-block;
            background-color: var(--common-black);
            transition: all 0.3s ease-out 0s;
        }
    }
}
.product-item:hover .image-link img {
    transform: scale(1.1);
}
.product-item-content .name:hover {
    color: var(--primary-color);
}
.product-item-content .next-cart:hover {
    background-color: var(--primary-color);
}
.pagination-list {
    display: flex;
    align-items: center;
    margin-top: 20px;
    .page-item {
        margin-right: 6px;
        .page-link {
            display: block;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            font-weight: 550;
            color: #55585b;
            border: 1px solid rgba(1, 15, 28, 0.1);
            transition: all 0.3s ease-out 0s;
        }
    }
}
.pagination-list .page-item .page-link:hover {
    background-color: var(--primary-color);
    color: var(--white);
}
.pagination-list .page-item .page-link.active {
    background-color: var(--primary-color);
    color: var(--white);
}
.pagination-list .page-item .page-link.disable {
    pointer-events: none;
    opacity: 0.5;
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .heading {
        padding-top: 50px;
    }
    .nav-menu .show-result-text {
        display: none;
    }
    .product-item {
        flex-direction: column;
    }
    .product-item .image-link {
        width: 100%;
    }
    .product-item .image-link img {
        width: 100%;
    }
    .product-item .product-item-content {
        border-top: none;
        border-right: 1px solid #e0e2e3;
        border-bottom: 1px solid #e0e2e3;
        border-left: 1px solid #e0e2e3;
    }
}
</style>
