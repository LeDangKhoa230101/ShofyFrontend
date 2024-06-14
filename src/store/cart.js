import axios from "axios";
import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
    state: () => ({
        baseUrl: "http://localhost:8081/cart",

        showMessageAddCart: false,

        quantityDetail: 1,

        countCart: 0,

        carts: [],

        token: localStorage.getItem("token"),
    }),
    actions: {
        plusItemDetail() {
            this.quantityDetail += 1;
        },
        minusItemDetail() {
            if (this.quantityDetail > 1) {
                this.quantityDetail -= 1;
            }
        },
        async getCountCart() {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(`${this.baseUrl}/count?token=${token}`);
                this.countCart = res.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getListCart() {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(`${this.baseUrl}/?token=${token}`);
                this.carts = res.data;
            } catch (error) {
                console.log(error);
            }
        },
        async addToCart(id) {
            try {
                const token = localStorage.getItem("token");
                await axios.post(`${this.baseUrl}/add-to-cart/${id}?quantity=${this.quantityDetail}&token=${token}`);
                this.showMessageAddCart = true;

                await this.getCountCart();
                await this.getListCart();

                setTimeout(() => {
                    this.showMessageAddCart = false;
                    this.quantityDetail = 1;
                }, 2000);
            } catch (error) {
                console.log(error);
            }
        },
        async plusCartItem(id) {
            try {
                const token = localStorage.getItem("token");
                await axios.post(`${this.baseUrl}/plus-cart/${id}?token=${token}`);
                await this.getListCart();
            } catch (error) {
                console.log(error);
            }
        },
        async minusCartItem(id) {
            try {
                const token = localStorage.getItem("token");
                await axios.post(`${this.baseUrl}/minus-cart/${id}?token=${token}`);
                await this.getListCart();
            } catch (error) {
                console.log(error);
            }
        },
        async removeCart(id) {
            try {
                const token = localStorage.getItem("token");
                await axios.post(`${this.baseUrl}/remove/${id}?token=${token}`);
                await this.getCountCart();
                await this.getListCart();
            } catch (error) {
                console.log(error);
            }
        },
        async clearCart() {
            try {
                await axios.post(`${this.baseUrl}/remove-all?token=${this.token}`);
                await this.getCountCart();
            } catch (error) {
                console.log(error);
            }
        },
    },
});
