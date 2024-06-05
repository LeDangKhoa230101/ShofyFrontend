import axios from "axios";
import { defineStore } from "pinia";

export const useSearch = defineStore("search", {
    state: () => ({
        productSearch: [],
    }),
    actions: {
        async handleSearch(name) {
            try {
                const res = await axios.get(`http://localhost:8081/categorys/${name}`);
                this.productSearch = res.data;
            } catch (error) {
                console.log(error);
            }
        },
    },
});
