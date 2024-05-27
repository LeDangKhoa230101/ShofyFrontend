import { defineStore } from "pinia";

export const useDetail = defineStore("detail", {
    state: () => ({
        descriptionText: true,
        showAllDescription: false,
        seeDescriptionText: "Xem thêm",

        showMessageAddCart: false,

        imageItemActive: 0,

        product: {
            id: 1,
            name: "Gaming Headphone",
            category: "Headphones",
            price: 173.0,
            colors: [
                {
                    colorId: 1,
                    rgb: "background-color: rgb(3, 226, 221)",
                },
                {
                    colorId: 2,
                    rgb: "background-color: rgb(72, 72, 72)",
                },
                {
                    colorId: 3,
                    rgb: "background-color: rgb(241, 123, 61)",
                },
            ],
            image_default: "https://i.ibb.co/n1YRvWJ/headphone-5.png",
            image_detail: [
                {
                    imgId: 1,
                    image: "https://i.ibb.co/n1YRvWJ/headphone-5.png",
                },
                {
                    imgId: 2,
                    image: "https://i.ibb.co/WpkH1vq/headphone-6.png",
                },
                {
                    imgId: 3,
                    image: "https://i.ibb.co/yRYbDCc/headphone-7.png",
                },
            ],
        },
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
        addToCart() {
            this.showMessageAddCart = true;
            setTimeout(() => {
                this.showMessageAddCart = false;
            }, 1500);
        },
    },
});
