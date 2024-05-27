<template>
    <div class="checkout">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="heading">
                        <h3>Thanh toán</h3>
                        <div class="breadcrumb">
                            <span>Trang chủ</span>
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            <span>Thanh toán</span>
                        </div>
                    </div>
                </div>
            </div>
            <form>
                <div class="row">
                    <div class="col-xl-7 col-md-7 col-12" style="padding: 0 12px">
                        <div class="bill-detail">
                            <h3>Chi tiết thanh toán</h3>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>
                                            Họ
                                            <span>*</span>
                                        </label>
                                        <input type="text" placeholder="Họ" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>
                                            Tên
                                            <span>*</span>
                                        </label>
                                        <input type="text" placeholder="Tên" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>
                                            Phone
                                            <span>*</span>
                                        </label>
                                        <input type="number" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>
                                            Địa chỉ
                                            <span>*</span>
                                        </label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label> Ghi chú đơn hàng (tùy chọn) </label>
                                        <textarea
                                            placeholder="Ghi chú về đơn đặt hàng của bạn, ví dụ: ghi chú đặc biệt để giao hàng."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-md-5 col-12" style="padding: 0 12px">
                        <div class="order">
                            <h3>Đơn hàng của bạn</h3>
                            <div class="order-header order-group">
                                <span>Sản phẩm</span>
                                <span>Tổng cộng</span>
                            </div>
                            <ul>
                                <li class="order-group">
                                    <div class="product-item">
                                        Headphones Wireless.
                                        <span> x 1</span>
                                    </div>
                                    <label>2.128.000đ</label>
                                </li>
                                <li class="order-group">
                                    <div class="product-item">
                                        Gaming Headphone
                                        <span> x 1</span>
                                    </div>
                                    <label>1.234.000đ</label>
                                </li>
                            </ul>
                            <div class="order-subtotal order-group">
                                <span>Tổng phụ</span>
                                <label>3.239.000đ</label>
                            </div>
                            <div class="order-ship order-group">
                                <span>Đang chuyển hàng</span>
                                <ul class="order-ship-list">
                                    <li>
                                        <span>Giá cố định:</span>
                                        <label>20.000đ</label>
                                        <input type="radio" disabled />
                                    </li>
                                    <li>
                                        <span>Nhận hàng tại nhà:</span>
                                        <label>25.000đ</label>
                                        <input type="radio" disabled />
                                    </li>
                                    <li>
                                        <span>Miễn phí vận chuyển</span>
                                        <input type="radio" checked />
                                    </li>
                                </ul>
                            </div>
                            <div class="order-footer">
                                <span>Total</span>
                                <span>3.245.000đ</span>
                            </div>
                            <button type="submit" class="checkout-btn">Đặt hàng</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "checkout-wrapper",
};
</script>

<style lang="scss" scoped>
.checkout {
    padding-bottom: 120px;
    background-color: #eff1f5;
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
.bill-detail {
    padding: 45px 40px 24px;
    background-color: var(--white);

    > h3 {
        font-size: 2.6rem;
        margin-bottom: 35px;
        font-weight: 600;
    }
}
.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    > label {
        font-size: 1.4rem;
        font-weight: 550;
        color: var(--common-black);
        line-height: 2.6rem;

        > span {
            color: red;
        }
    }
    > input {
        height: 50px;
        width: 100%;
        padding: 0 26px;
        font-size: 1.4rem;
        background: var(--white);
        border: 1px solid #d5d8db;
        color: var(--common-black);
        outline: none;
        transition: all 0.3s ease-out 0s;
    }
    > textarea {
        padding: 17px 26px;
        font-size: 1.4rem;
        height: 200px;
        outline: none;
        resize: none;
        color: var(--common-black);
        border: 1px solid #d5d8db;
        transition: all 0.3s ease-out 0s;
    }
}
.form-group > input:focus,
.form-group > textarea:focus {
    border-color: var(--common-black);
}
.form-group > input:focus::placeholder,
.form-group > textarea:focus::placeholder {
    opacity: 0;
}
.order {
    padding: 45px 40px 24px;
    background-color: var(--white);

    > h3 {
        font-size: 2.6rem;
        margin-bottom: 35px;
        font-weight: 600;
    }

    > ul {
        > li {
            padding: 15px 0;
            .product-item {
                font-size: 1.5rem;
                color: #55585b;
                > span {
                    font-weight: 550;
                    color: var(--common-black);
                }
            }
            > label {
                font-size: 1.5rem;
                color: var(--common-black);
            }
        }
    }
    .checkout-btn {
        font-size: 1.6rem;
        color: var(--white);
        background-color: var(--primary-color);
        padding: 0 30px;
        width: 100%;
        height: 50px;
        border: none;
        margin-top: 24px;
        transition: all 0.3s ease-out 0s;
    }
}
.order .checkout-btn:hover {
    background-color: var(--common-black);
}
.order-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: 1px solid #e0e2e3;
}
.order-header {
    > span {
        font-size: 1.6rem;
        font-weight: 550;
        color: var(--common-black);
    }
}
.order-subtotal {
    padding: 15px 0;
    font-size: 1.5rem;
    > span {
        color: var(--common-black);
    }
    > label {
        color: var(--primary-color);
    }
}
.order-ship {
    padding: 15px 0;
    > span {
        font-size: 1.5rem;
        color: var(--common-black);
    }
    .order-ship-list {
        > li {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            line-height: 2.6rem;

            > span {
                font-size: 1.4rem;
                font-family: "Jost", sans-serif;
                color: var(--common-black);
            }
            > label {
                font-size: 1.4rem;
                color: var(--primary-color);
                margin-left: 4px;
            }
            > input {
                margin-left: 4px;
            }
        }
    }
}
.order-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;

    > span {
        font-size: 1.6rem;
        color: var(--common-black);
        font-weight: 550;
    }
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .heading {
        padding-top: 50px;
    }
    .order {
        margin-top: 30px;
    }
}
</style>
