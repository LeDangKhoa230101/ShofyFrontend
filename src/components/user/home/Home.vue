<template>
    <Slider />
    <Category />
    <Feature />
    <TrendingProduct />
    <Banner />
    <Deal />
    <Gadget />
    <SlideBanner />
    <NewArrivals />
    <AreaHome />
    <LatestArt />
    <Subscribe />
</template>

<script>
import Slider from "./Slider.vue";
import Category from "./Category.vue";
import Feature from "./Feature.vue";
import TrendingProduct from "./TrendingProduct.vue";
import Banner from "./Banner.vue";
import Deal from "./Deal.vue";
import Gadget from "./Gadget.vue";
import SlideBanner from "./SlideBanner.vue";
import NewArrivals from "./NewArrivals.vue";
import AreaHome from "./AreaHome.vue";
import LatestArt from "./LatestArt.vue";
import Subscribe from "./Subscribe.vue";
export default {
    name: "home-wrapper",
    components: {
        Slider,
        Category,
        Feature,
        TrendingProduct,
        Banner,
        Deal,
        Gadget,
        SlideBanner,
        NewArrivals,
        AreaHome,
        LatestArt,
        Subscribe,
    },
};
</script>

<style lang="scss" scoped></style>
