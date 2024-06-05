import { defineStore } from "pinia";

export const useShop = defineStore("shop", {
    state: () => ({
        showList4: true,
        showList12: false,

        activeCategoryIndex: 0,

        activePageItemIndex: 0,
    }),
    actions: {
        handleShowList4() {
            this.showList4 = true;
            this.showList12 = false;
        },
        handleShowList12() {
            this.showList4 = false;
            this.showList12 = true;
        },
    },
});
