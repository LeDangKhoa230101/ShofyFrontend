<template>
    <div class="coupon">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="heading">
                        <h3>Nhận ưu đãi tốt nhất</h3>
                        <div class="breadcrumb">
                            <span>Trang chủ</span>
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            <span>Phiếu giảm giá</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-6 col-md-6 col-12" style="padding: 0 12px">
                        <div class="coupon-item">
                            <span class="coupon-border"></span>
                            <div class="coupon-item-left">
                                <div class="coupon-item-img">
                                    <img src="https://i.ibb.co/kxGMcrw/ipad-1.png" alt="" />
                                </div>
                                <div class="coupon-item-content">
                                    <h3>August Gift Voucher</h3>
                                    <p>
                                        14%
                                        <span>Off</span>
                                    </p>
                                    <ul>
                                        <li class="separate">
                                            <span>0</span>
                                            Day
                                        </li>
                                        <li class="separate">
                                            <span>0</span>
                                            HRS
                                        </li>
                                        <li class="separate">
                                            <span>0</span>
                                            MIN
                                        </li>
                                        <li>
                                            <span>0</span>
                                            SEC
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="coupon-item-right">
                                <p>
                                    Coupon
                                    <span>Inactive</span>
                                </p>
                                <button>AUGUST23</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 col-12" style="padding: 0 12px">
                        <div class="coupon-item">
                            <span class="coupon-border"></span>
                            <div class="coupon-item-left">
                                <div class="coupon-item-img">
                                    <img src="https://i.ibb.co/ThxGY6N/clothing-13.png" alt="" />
                                </div>
                                <div class="coupon-item-content">
                                    <h3>SUMMER Vacation</h3>
                                    <p>
                                        8%
                                        <span>Off</span>
                                    </p>
                                    <ul>
                                        <li class="separate">
                                            <span>0</span>
                                            Day
                                        </li>
                                        <li class="separate">
                                            <span>0</span>
                                            HRS
                                        </li>
                                        <li class="separate">
                                            <span>0</span>
                                            MIN
                                        </li>
                                        <li>
                                            <span>0</span>
                                            SEC
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="coupon-item-right">
                                <p>
                                    Coupon
                                    <span>Inactive</span>
                                </p>
                                <button>SUMMER23</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 col-12" style="padding: 0 12px">
                        <div class="coupon-item">
                            <span class="coupon-border"></span>
                            <div class="coupon-item-left">
                                <div class="coupon-item-img">
                                    <img src="https://i.ibb.co/h9PYFHJ/lip-liner-2.png" alt="" />
                                </div>
                                <div class="coupon-item-content">
                                    <h3>Paper On Demand</h3>
                                    <p>
                                        15%
                                        <span>Off</span>
                                    </p>
                                    <ul>
                                        <li class="separate">
                                            <span>0</span>
                                            Day
                                        </li>
                                        <li class="separate">
                                            <span>0</span>
                                            HRS
                                        </li>
                                        <li class="separate">
                                            <span>0</span>
                                            MIN
                                        </li>
                                        <li>
                                            <span>0</span>
                                            SEC
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="coupon-item-right">
                                <p>
                                    Coupon
                                    <span>Inactive</span>
                                </p>
                                <button>PAPER12</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 col-12" style="padding: 0 12px">
                        <div class="coupon-item">
                            <span class="coupon-border"></span>
                            <div class="coupon-item-left">
                                <div class="coupon-item-img">
                                    <img src="https://i.ibb.co/rvmPWxc/bracelet-5.png" alt="" />
                                </div>
                                <div class="coupon-item-content">
                                    <h3>Fifty Fifty</h3>
                                    <p>
                                        10%
                                        <span>Off</span>
                                    </p>
                                    <ul>
                                        <li class="separate">
                                            <span>0</span>
                                            Day
                                        </li>
                                        <li class="separate">
                                            <span>0</span>
                                            HRS
                                        </li>
                                        <li class="separate">
                                            <span>0</span>
                                            MIN
                                        </li>
                                        <li>
                                            <span>0</span>
                                            SEC
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="coupon-item-right">
                                <p>
                                    Coupon
                                    <span>Inactive</span>
                                </p>
                                <button>FIF50</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "coupon-wrapper",
};
</script>

<style lang="scss" scoped>
.coupon {
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
.coupon-item {
    position: relative;
    border: 1px solid #eaebed;
    padding: 20px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .coupon-border {
        position: absolute;
        right: 35%;
        top: 0;
        width: 2px;
        z-index: 1;
        bottom: 0;
        height: 100%;
        display: inline-block;
        border-left: 2px dashed #eaebed;
        background-color: transparent;
    }

    .coupon-item-left {
        display: flex;
        align-items: center;
        .coupon-item-img {
            width: 120px;
            height: 120px;
            background-color: rgb(242, 243, 245);
            margin-right: 20px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .coupon-item-content {
            h3 {
                font-size: 1.7rem;
                font-weight: 550;
                margin-bottom: 3px;
                color: var(--common-black);
            }
            p {
                color: #ff2400;
                font-size: 1.8rem;
                font-weight: 550;
                margin-bottom: 15px;
                > span {
                    color: #55585b;
                }
            }
            ul {
                display: flex;
                align-items: center;
                li {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    padding-right: 12px;
                    font-size: 1.2rem;
                    color: var(--common-black);
                }
            }
        }
    }
    .coupon-item-right {
        flex: 0 0 32%;
        padding-left: 20px;
        > p {
            font-size: 1.4rem;
            margin-bottom: 8px;
            color: var(--common-black);

            > span {
                color: #ff2400;
            }
        }
        button {
            display: inline-block;
            color: teal;
            font-size: 15px;
            font-weight: 600;
            letter-spacing: 1px;
            padding: 6px 30px;
            border: 2px dashed rgba(0, 128, 128, 0.4);
            background-color: rgba(0, 128, 128, 0.1);
        }
    }
}
.coupon-item .coupon-border::before {
    position: absolute;
    content: "";
    right: 50%;
    transform: translateX(50%) scaleY(-1);
    top: -13px;
    width: 24px;
    height: 24px;
    z-index: 1;
    border-bottom: 0;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    background-color: var(--white);
    border: 1px solid #eaebed;
}
.coupon-item .coupon-border::after {
    position: absolute;
    content: "";
    right: 50%;
    transform: translateX(50%);
    bottom: -13px;
    width: 24px;
    height: 24px;
    z-index: 1;
    background-color: var(--white);
    border: 1px solid #eaebed;
    border-bottom: 0;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}
.coupon-item .coupon-item-content ul .separate::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 17px;
    top: 50%;
    transform: translateY(-50%);
    right: 7px;
    background-color: #ebebeb;
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .heading {
        padding-top: 50px;
    }
    .coupon-item {
        padding: 8px;
    }
    .coupon-item .coupon-item-left .coupon-item-img {
        width: 90px;
        height: 90px;
        margin-right: 10px;
    }
    .coupon-item .coupon-item-left .coupon-item-content h3 {
        font-size: 1.4rem;
    }
    .coupon-item .coupon-item-left .coupon-item-content p {
        font-size: 1rem;
    }
    .coupon-item .coupon-item-right {
        padding-left: 10px;
    }
    .coupon-item .coupon-item-right button {
        padding: 6px;
    }
}
</style>
