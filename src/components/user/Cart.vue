<template>
    <div class="cart">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="heading">
                        <h3>Giỏ hàng</h3>
                        <div class="breadcrumb">
                            <span>Trang chủ</span>
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            <span>Giỏ hàng</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-if="cartStore.countCart !== 0">
                <div class="col-xl-9 col-md-9 col-12" style="padding: 0 12px">
                    <div class="cart-table">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th colspan="2" class="th-product">Sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Quantity</th>
                                    <th>Tổng giá</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="cart in cartStore.carts.cartItems" :key="cart.id">
                                    <td class="td-image">
                                        <a href="#" class="img-link">
                                            <img class="image" :src="cart.productImageDefault" alt="" />
                                        </a>
                                    </td>
                                    <td class="td-name">
                                        <a href="#">{{ cart.productName }}</a>
                                    </td>
                                    <td class="td-price">
                                        <span
                                            >{{
                                                cart.productPriceNew ? cart.productPriceNew.toLocaleString() : "N/A"
                                            }}đ</span
                                        >
                                    </td>
                                    <td class="td-quantity">
                                        <div class="body-quanti">
                                            <span
                                                :class="{ disable: cart.quanty === 1 }"
                                                @click="cartStore.minusCartItem(cart.id)"
                                            >
                                                <font-awesome-icon :icon="['fas', 'minus']" />
                                            </span>
                                            <input type="text" :value="cart.quanty" disabled />
                                            <span @click="cartStore.plusCartItem(cart.id)">
                                                <font-awesome-icon :icon="['fas', 'plus']" />
                                            </span>
                                        </div>
                                    </td>
                                    <td class="td-total-price">
                                        <span>{{ cart.price ? cart.price.toLocaleString() : "N/A" }}đ</span>
                                    </td>
                                    <td class="td-remove">
                                        <span @click="cartStore.removeCart(cart.id)"> Xóa </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-md-6 col-12">
                            <div class="coupon-code">
                                <span>Mã giảm giá:</span>
                                <form>
                                    <input type="text" placeholder="Nhập mã giảm giá" />
                                    <button>Áp dụng</button>
                                </form>
                            </div>
                        </div>
                        <!-- Delete All Cart -->
                        <div
                            class="col-xl-6 col-md-6 col-12"
                            style="display: flex; justify-content: end; align-items: center"
                        >
                            <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                class="clear-cart-btn"
                            >
                                Xóa giỏ hàng
                            </button>
                            <!-- Modal -->
                            <div
                                class="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title">Xóa giỏ hàng</h1>
                                        </div>
                                        <div class="modal-body">
                                            Bạn có chắc chắn muốn xóa tất cả các mặt hàng trong giỏ hàng của mình không?
                                        </div>
                                        <div class="modal-footer">
                                            <button
                                                @click="cartStore.clearCart"
                                                type="button"
                                                class="btn delete-btn"
                                                data-bs-dismiss="modal"
                                            >
                                                Xóa
                                            </button>
                                            <button type="button" class="btn destroy-btn" data-bs-dismiss="modal">
                                                Hủy
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-3 col-12" style="padding: 0 12px">
                    <div class="cart-checkout">
                        <div class="cart-checkout-heading">
                            <h3>Tổng phụ</h3>
                            <span
                                >{{
                                    cartStore.carts.totalPrice ? cartStore.carts.totalPrice.toLocaleString() : "N/A"
                                }}đ</span
                            >
                        </div>
                        <div class="shipping">
                            <h3>Đang chuyển hàng</h3>
                            <div class="shipping-item">
                                <input type="radio" disabled />
                                <label>
                                    Giá cố định:
                                    <span>20.000đ</span>
                                </label>
                            </div>
                            <div class="shipping-item">
                                <input type="radio" disabled />
                                <label>
                                    Nhận hàng tại địa phương:
                                    <span>23.000đ</span>
                                </label>
                            </div>
                            <div class="shipping-item">
                                <input type="radio" checked />
                                <label> Miễn phí vận chuyển: </label>
                            </div>
                        </div>
                        <div class="footer-total">
                            <label>Tổng cộng</label>
                            <span
                                >{{
                                    cartStore.carts.totalPrice ? cartStore.carts.totalPrice.toLocaleString() : "N/A"
                                }}đ</span
                            >
                        </div>
                        <router-link to="/thanh-toan" class="link-checkout">Tiến hành thanh toán</router-link>
                    </div>
                </div>
            </div>
            <div class="row" v-if="cartStore.countCart === 0">
                <div class="col-12">
                    <div class="not-cart">
                        <h3>Giỏ hàng trống</h3>
                        <a href="/cua-hang">Vào cửa hàng</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useCart } from "@/store/cart";
export default {
    name: "cart-wrapper",
    setup() {
        const cartStore = useCart();

        return { cartStore };
    },
};
</script>

<style lang="scss" scoped>
.cart {
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
        width: 380px;

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
    .td-quantity {
        width: 140px;

        .body-quanti {
            position: relative;
            display: inline-block;
            margin-top: 30px;

            .disable {
                opacity: 0.4;
                pointer-events: none;
            }

            > input {
                height: 34px;
                width: 100px;
                padding: 0 30px;
                font-size: 1.5rem;
                border: 1px solid #dadce0;
                border-radius: 16px;
                text-align: center;
                color: var(--common-black);
                outline: none;
            }
            > span {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.3rem;
                cursor: pointer;
                width: 32px;
                height: 34px;
            }
            > span:nth-child(1) {
                top: 0;
                left: 0;
            }
            > span:nth-child(3) {
                top: 0;
                right: 0;
            }
        }
    }
    .td-total-price {
        width: 150px;
        > span {
            display: inline-block;
            margin-top: 33px;
            font-size: 1.6rem;
            color: var(--common-black);
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
.coupon-code {
    > span {
        display: inline-block;
        font-size: 1.5rem;
        margin-bottom: 7px;
    }
    > form {
        > input {
            max-width: 282px;
            height: 46px;
            line-height: 46px;
            margin-right: 4px;
            background: var(--white);
            padding: 0 26px;
            font-size: 1.4rem;
            border: 1px solid #d6d9dc;
        }
        > button {
            height: 46px;
            border: none;
            font-size: 1.4rem;
            padding: 10px 30px;
            color: var(--white);
            background-color: var(--common-black);
            transition: all 0.3s ease-out 0s;
        }
    }
}
.coupon-code > form > button:hover {
    background-color: var(--primary-color);
}
.clear-cart-btn {
    font-size: 1.6rem;
    padding: 9px 29px;
    color: var(--common-black);
    border: 1px solid rgba(1, 15, 28, 0.1);
    cursor: pointer;
    background-color: var(--white);
    transition: all 0.3s ease-out 0s;
}
.clear-cart-btn:hover {
    background-color: var(--primary-color);
    color: var(--white);
}
.modal-title {
    font-size: 2.2rem;
    font-weight: 550;
}
.modal-body {
    padding: 30px 12px;
    font-size: 1.6rem;
}
.modal-footer {
    .delete-btn {
        font-size: 1.6rem;
        background: var(--primary-color);
        color: var(--white);
        padding: 4px 14px;
        margin-right: 12px;
    }
    .destroy-btn {
        font-size: 1.6rem;
        background: var(--white);
        color: var(--common-black);
        border: 1px solid #55585b;
        padding: 4px 14px;
    }
}
.modal-footer .delete-btn:hover {
    background-color: var(--common-black);
}
.modal-footer .destroy-btn:hover {
    background-color: #dedede;
}
.cart-checkout {
    padding: 36px 24px 28px;
    background: var(--white);
    box-shadow: 0 30px 70px rgba(1, 15, 28, 0.1);

    .cart-checkout-heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--common-black);
        border-bottom: 1px solid #e0e2e3;
        margin-bottom: 19px;
        padding-bottom: 13px;

        > h3 {
            font-size: 2rem;
            margin: 0;
        }

        > span {
            font-size: 2rem;
        }
    }
    .shipping {
        border-bottom: 1px solid #e0e2e3;
        margin-bottom: 15px;
        padding-bottom: 16px;

        > h3 {
            font-size: 1.5rem;
            color: var(--common-black);
            font-weight: 500;
        }
        .shipping-item {
            display: flex;
            align-items: center;
            font-size: 1.4rem;

            > label {
                margin-left: 4px;
                > span {
                    color: var(--primary-color);
                }
            }
        }
    }
    .footer-total {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;

        > label {
            font-size: 1.8rem;
            font-weight: 550;
            color: var(--common-black);
        }
        > span {
            font-size: 1.8rem;
            font-weight: 550;
            color: var(--common-black);
        }
    }
    .link-checkout {
        display: block;
        text-align: center;
        background-color: var(--common-black);
        color: var(--white);
        padding: 10px 30px;
        font-size: 1.6rem;
        transition: all 0.3s ease-out 0s;
    }
}
.cart-checkout .link-checkout:hover {
    background-color: var(--primary-color);
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
    .coupon-code {
        margin-bottom: 20px;
    }
    .cart-table {
        overflow-x: scroll;

        table {
            width: 840px;
            margin-right: 0;
        }
    }
    .cart-checkout {
        margin-top: 30px;
    }
}
</style>
