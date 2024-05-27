import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
    state: () => ({
        showCart: true,

        btnAddCartProductItem: true,
        btnShowCartProductItem: false,
    }),
});
