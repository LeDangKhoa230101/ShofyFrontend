<template>
    <div class="wishlist">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="heading">
                        <h3>Danh sách yêu thích</h3>
                        <div class="breadcrumb">
                            <span>Trang chủ</span>
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            <span>Danh sách yêu thích</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-if="wishlistStore.showWishlist !== 0">
                <div class="col-12">
                    <div class="wishlist-table">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th colspan="2" class="th-product">Sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Thêm vào giỏ hàng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in wishlistStore.wishlists" :key="item.wishlistId">
                                    <td class="td-image">
                                        <a href="#" class="img-link">
                                            <img class="image" :src="item.productImageDefault" alt="" />
                                        </a>
                                    </td>
                                    <td class="td-name">
                                        <a href="#">{{ item.productName }}</a>
                                    </td>
                                    <td class="td-price">
                                        <span>{{ item.productPriceNew.toLocaleString() }}đ</span>
                                    </td>
                                    <td class="td-add-cart">
                                        <a href="#" @click="addToCartFromWishlist(item.wishlistId, item.productId)"
                                            >Thêm vào giỏ hàng</a
                                        >
                                    </td>
                                    <td class="td-remove">
                                        <span @click="wishlistStore.removeWishlist(item.wishlistId)"> Xóa </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="go-to-cart">
                                <router-link to="/gio-hang">Đến giỏ hàng</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-if="wishlistStore.showWishlist === 0">
                <div class="col-12">
                    <div class="not-cart">
                        <h3>Không tìm thấy mục danh sách mong muốn nào</h3>
                        <a href="/cua-hang">Vào cửa hàng</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useWishList } from "@/store/wishlist";
import { useCart } from "@/store/cart";
import axios from "axios";
export default {
    name: "cart-wrapper",
    setup() {
        const wishlistStore = useWishList();
        const cartStore = useCart();

        // get wishlist
        wishlistStore.getWishlist();

        /// add cart from wish list
        const addToCartFromWishlist = async (id, productId) => {
            try {
                await axios.post(
                    `http://localhost:8081/cart/add-to-cart/${productId}?quantity=${cartStore.quantityDetail}&token=${cartStore.token}`
                );
                await axios.post(`http://localhost:8081/wishlist/remove-wishlist/${id}?token=${wishlistStore.token}`);
                await wishlistStore.getWishlist();
                await wishlistStore.getCountWishlist();
                await cartStore.getCountCart();
                await cartStore.getListCart();
            } catch (error) {
                console.log(error);
            }
        };

        return { wishlistStore, cartStore, addToCartFromWishlist };
    },
};
</script>

<style lang="scss" scoped>
.wishlist {
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
.table {
    margin: 0 30px 25px 0;
}
tr {
    > th {
        border: none;
        background-color: #f1f3f4;
        font-size: 1.5rem;
        font-weight: 500;
        padding: 9px 0;
    }
    .th-product {
        padding-left: 16px;
    }
    td {
        padding: 26px 0;

        a {
            .image {
                width: 78px;
                height: 100px;
                object-fit: cover;
            }
        }

        .img-link {
            display: inline-block;
            background-color: rgb(242, 243, 245);
        }
    }
    .td-image {
        width: 78px;
    }
    .td-name {
        width: 500px;

        > a {
            display: inline-block;
            font-size: 1.6rem;
            color: var(--common-black);
            margin-left: 20px;
            margin-top: 33px;
            transition: all 0.3s ease-out 0s;
        }
    }
    .td-price {
        width: 150px;
        span {
            display: inline-block;
            margin-top: 33px;
            font-size: 1.6rem;
            color: var(--common-black);
        }
    }
    .td-add-cart {
        width: 400px;
        > a {
            display: inline-block;
            margin-top: 27px;
            padding: 9px 26px 7px;
            color: var(--white);
            font-size: 1.4rem;
            font-weight: 500;
            background-color: var(--primary-color);
            transition: all 0.3s ease-out 0s;
        }
    }
    .td-remove {
        > span {
            display: inline-block;
            margin-top: 33px;
            font-size: 1.6rem;
            color: #55585b;
            cursor: pointer;
            transition: all 0.3s ease-out 0s;
        }
    }
}
tr .td-name > a:hover {
    color: var(--primary-color);
}
tr .td-remove > span:hover {
    color: var(--pink-color);
}
tr .td-add-cart > a:hover {
    background-color: var(--common-black);
}
.go-to-cart > a {
    font-size: 1.6rem;
    font-weight: 550;
    padding: 9px 29px;
    margin-top: 45px;
    display: inline-block;
    border: 1px solid rgba(1, 15, 28, 0.1);
    color: var(--common-black);
    transition: all 0.3s ease-out 0s;
}
.go-to-cart > a:hover {
    background-color: var(--primary-color);
    color: var(--white);
}
.not-cart {
    text-align: center;

    > h3 {
        font-size: 2.8rem;
        color: var(--common-black);
        font-weight: 600;
        margin-bottom: 5px;
    }
    > a {
        display: inline-block;
        font-size: 1.6rem;
        padding: 10px 30px;
        background-color: var(--common-black);
        color: var(--white);
        margin-top: 25px;
        transition: all 0.3s ease-out 0s;
    }
}
.not-cart > a:hover {
    background-color: var(--primary-color);
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .heading {
        padding-top: 50px;
    }
    .wishlist-table {
        overflow-x: scroll;
        table {
            width: 840px;
        }
    }
}
</style>
