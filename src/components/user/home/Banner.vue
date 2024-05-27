<template>
    <div class="banner">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-md-7 col-12" style="padding: 0 12px; margin-bottom: 12px">
                    <div class="banner-item">
                        <div class="banner-img">
                            <img src="@/assets/product-banner-1.jpg" alt="" />
                        </div>
                        <div class="banner-body">
                            <span>Giảm giá 20% toàn bộ cửa hàng</span>
                            <h5>Smartphone BLU G91 Pro 2022</h5>
                            <button>
                                Shop Now
                                <font-awesome-icon :icon="['fas', 'arrow-right']" />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-5 col-12" style="padding: 0 12px; margin-bottom: 12px">
                    <div class="banner-item">
                        <div class="banner-img">
                            <img src="@/assets/product-banner-2.jpg" alt="" />
                        </div>
                        <div class="banner-body">
                            <span>Giảm giá 35%</span>
                            <h5>HyperX Cloud II Wireless</h5>
                            <button>
                                Shop Now
                                <font-awesome-icon :icon="['fas', 'arrow-right']" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "banner-wrapper",
};
</script>

<style lang="scss" scoped>
.banner {
    padding-bottom: 70px;
    margin-bottom: 30px;
}
.banner-item {
    position: relative;
    min-height: 260px;
    padding: 52px 60px 32px;
    overflow: hidden;
    border-radius: 8px;

    .banner-img {
        position: absolute;
        top: 0;
        left: 0%;
        right: 0;
        height: 100%;

        img {
            height: 100%;
            width: 100%;
            border-radius: 8px;
            transition: all 0.3s ease-out 0s;
        }
    }
}
.banner-item:hover .banner-img img {
    transform: scale(1.05);
}
.banner-body {
    position: absolute;
    top: 50%;
    left: 60px;
    transform: translateY(-50%);
}
.banner-body {
    max-width: 300px;

    span {
        font-size: 1.6rem;
        color: var(--common-black);
    }
    h5 {
        font-size: 2.8rem;
        font-weight: 600;
        color: var(--common-black);
        margin: 10px 0 20px;
        transition: all 0.3s ease-out 0s;
    }
    button {
        border: none;
        color: var(--common-black);
        font-size: 1.3rem;
        transition: all 0.3s ease-out 0s;
        background-color: transparent;
    }
}
.banner-body > h5:hover {
    color: var(--primary-color);
    cursor: pointer;
}
.banner-body > button:hover {
    color: var(--primary-color);
}
</style>
