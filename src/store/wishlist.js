import router from "@/router/router";
import axios from "axios";
import { defineStore } from "pinia";

export const useWishList = defineStore("wishlist", {
    state: () => ({
        baseUrl: "http://localhost:8081/wishlist",

        showWishlist: 0,
        wishlists: [],
        token: localStorage.getItem("token"),
    }),
    actions: {
        async addWishlist(productId) {
            try {
                await axios.post(`${this.baseUrl}/add-wishlist/${productId}?token=${this.token}`);

                await this.getWishlist();
                await this.getCountWishlist();
                router.replace("/dang-sach-yeu-thich");
            } catch (error) {
                console.log(error);
            }
        },
        async removeWishlist(id) {
            try {
                await axios.post(`${this.baseUrl}/remove-wishlist/${id}?token=${this.token}`);
                await this.getWishlist();
                await this.getCountWishlist();
            } catch (error) {
                console.log(error);
            }
        },
        async getWishlist() {
            try {
                const res = await axios.get(`${this.baseUrl}/?token=${this.token}`);
                this.wishlists = res.data.wishlists;
            } catch (error) {
                console.log(error);
            }
        },
        async getCountWishlist() {
            try {
                const res = await axios.get(`${this.baseUrl}/count-wishlist?token=${this.token}`);
                this.showWishlist = res.data;
            } catch (error) {
                console.log(error);
            }
        },
    },
});
