<template>
    <div class="search">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="heading">
                        <h3>Tìm kiếm sản phẩm</h3>
                        <div class="breadcrumb">
                            <span>Trang chủ</span>
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            <span>Tìm kiếm sản phẩm</span>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="search-filter">
                        <span>Hiển thị 37 kết quả</span>
                        <div class="filter-select">
                            <select>
                                <option selected>Phân loại mặc định</option>
                                <option value="1">Thấp đến cao</option>
                                <option value="2">Cao đến thấp</option>
                                <option value="3">Đang giảm giá</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-xl-4 col-md-4 col-6" style="padding: 0 12px"><ProductItem /></div>
                        <div class="col-xl-4 col-md-4 col-6" style="padding: 0 12px"><ProductItem /></div>
                        <div class="col-xl-4 col-md-4 col-6" style="padding: 0 12px"><ProductItem /></div>
                        <div class="col-xl-4 col-md-4 col-6" style="padding: 0 12px"><ProductItem /></div>
                        <div class="col-12">
                            <p style="font-size: 1.6rem; text-align: center; color: #55585b; margin-top: 15px">
                                Kết thúc sản phẩm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
export default {
    name: "search-page",
    components: { ProductItem },
};
</script>

<style lang="scss" scoped>
.search {
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
.search-filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 45px;
    > span {
        font-size: 1.6rem;
        color: #818487;
    }

    .filter-select {
        height: 40px;
        select {
            background-color: #f9f9f9;
            height: 100%;
            font-size: 1.6rem;
            color: #55585b;
            padding: 0 12px;
            outline: none;
        }
    }
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .heading {
        padding-top: 50px;
    }
}
</style>
