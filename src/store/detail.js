import axios from "axios";
import { defineStore } from "pinia";

export const useDetail = defineStore("detail", {
    state: () => ({
        descriptionText: true,
        showAllDescription: false,
        seeDescriptionText: "Xem thêm",

        imageItemActive: 0,

        productDetail: {},

        productRelateds: [],
    }),
    actions: {
        handleToggleDesc() {
            this.descriptionText = !this.descriptionText;
            this.showAllDescription = !this.showAllDescription;
            this.seeDescriptionText = "Ẩn bớt";

            if (this.descriptionText === true && this.showAllDescription === false) {
                this.seeDescriptionText = "Xem thêm";
            }
        },
        async handleDetail(id) {
            try {
                const res = await axios.get(`http://localhost:8081/products/detail/${id}`);
                this.productDetail = res.data;
                localStorage.setItem("productDetail", JSON.stringify(this.productDetail));
            } catch (error) {
                console.log(error);
            }
        },
        async getRelated() {
            try {
                const res = await axios.get("http://localhost:8081/products/list-product-new");
                this.productRelateds = res.data;
            } catch (error) {
                console.log(error);
            }
        },
    },
});
