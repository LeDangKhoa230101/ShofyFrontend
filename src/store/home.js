import axios from "axios";
import { defineStore } from "pinia";

export const useHome = defineStore("home", {
    state: () => ({
        showCategoryList: false,
        menuActiveHeaderBottom: 0,
        hoverTimeout: null,

        countDownDate1: new Date("2024-10-15T13:14:14").getTime(),
        day1: 0,
        hours1: 0,
        minutes1: 0,
        seconds1: 0,

        countDownDate2: new Date("2024-07-12T13:14:23").getTime(),
        day2: 0,
        hours2: 0,
        minutes2: 0,
        seconds2: 0,

        countDownDate3: new Date("2024-08-10T13:14:42").getTime(),
        day3: 0,
        hours3: 0,
        minutes3: 0,
        seconds3: 0,

        intervalId: null,

        showMenuMobile: false,

        menuHeaderBottom: [
            { link: "/", name: "Trang chủ" },
            { link: "/cua-hang", name: "Cửa hàng" },
            { link: "/blog", name: "Blog" },
            { link: "/phieu-giam-gia", name: "Phiếu giảm giá" },
            { link: "/lien-he", name: "Liên hệ" },
        ],

        sliderData: [
            {
                id: 1,
                image: "https://shofy-nuxt.vercel.app/img/slider/slider-img-1.png",
                discount: 10,
            },
            {
                id: 2,
                image: "https://shofy-nuxt.vercel.app/img/slider/slider-img-2.png",
                discount: 35,
            },
            {
                id: 3,
                image: "https://shofy-nuxt.vercel.app/img/slider/slider-img-3.png",
                discount: 27,
            },
        ],

        categorys: [],

        productNews: [],
        productFeatures: [],
        productSellers: [],

        productArraivals: [],

        productArea1: [],
        productArea2: [],
        productArea3: [],

        tabShowNew: true,
        tabShowFeature: false,
        tabShowTopSell: false,

        tabContentNew: true,
        tabContenFeature: false,
        tabContentTopSell: false,
    }),
    actions: {
        handleShowNew() {
            this.tabShowNew = true;
            this.tabContentNew = true;
            this.tabShowFeature = false;
            this.tabContenFeature = false;
            this.tabShowTopSell = false;
            this.tabContentTopSell = false;
        },
        handleShowFeature() {
            this.tabShowFeature = true;
            this.tabContenFeature = true;
            this.tabShowNew = false;
            this.tabShowTopSell = false;
            this.tabContentNew = false;
            this.tabContentTopSell = false;
        },
        handleShowTopSell() {
            this.tabShowTopSell = true;
            this.tabContentTopSell = true;
            this.tabShowFeature = false;
            this.tabContenFeature = false;
            this.tabShowNew = false;
            this.tabContentNew = false;
        },
        countdown() {
            this.intervalId = setInterval(() => {
                const now = new Date().getTime();

                //count down 2
                let distance = this.countDownDate1 - now;
                this.day1 = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.hours1 = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes1 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds1 = Math.floor((distance % (1000 * 60)) / 1000);

                if (distance < 0) {
                    clearInterval(this.intervalId);
                    this.day1 = 0;
                    this.hours1 = 0;
                    this.minutes1 = 0;
                    this.seconds1 = 0;
                }

                //count down 2
                distance = this.countDownDate2 - now;
                this.day2 = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.hours2 = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes2 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds2 = Math.floor((distance % (1000 * 60)) / 1000);

                if (distance < 0) {
                    clearInterval(this.intervalId);
                    this.day2 = 0;
                    this.hours2 = 0;
                    this.minutes2 = 0;
                    this.seconds2 = 0;
                }

                //count down 3
                distance = this.countDownDate3 - now;
                this.day3 = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.hours3 = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes3 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds3 = Math.floor((distance % (1000 * 60)) / 1000);

                if (distance < 0) {
                    clearInterval(this.intervalId);
                    this.day3 = 0;
                    this.hours3 = 0;
                    this.minutes3 = 0;
                    this.seconds3 = 0;
                }
            }, 1000);
        },
        async getCategorys() {
            try {
                const res = await axios.get("http://localhost:8081/categorys/list-category");
                this.categorys = res.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getProductNew() {
            const res = await axios.get("http://localhost:8081/products/list-product-new");
            this.productNews = res.data;
        },
        async getProductFeature() {
            const res = await axios.get("http://localhost:8081/products/list-product-featured");
            this.productFeatures = res.data;
        },
        async getProductSeller() {
            const res = await axios.get("http://localhost:8081/products/list-product-seller");
            this.productSellers = res.data;
        },
        async getProductArrival() {
            const res = await axios.get("http://localhost:8081/products/list-product");
            this.productArraivals = res.data;
        },
        async getProductArea1() {
            const res = await axios.get("http://localhost:8081/products/list-product");
            this.productArea1 = res.data.slice(1, 4);
        },
        async getProductArea2() {
            const res = await axios.get("http://localhost:8081/products/list-product");
            this.productArea2 = res.data.slice(5, 8);
        },
        async getProductArea3() {
            const res = await axios.get("http://localhost:8081/products/list-product");
            this.productArea3 = res.data.slice(8, 11);
        },
    },
});
