<template>
    <header>
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-md-3 col-3">
                        <a href="/" class="logo">
                            <img src="https://shofy-nuxt.vercel.app/img/logo/logo.svg" alt="" />
                        </a>
                        <!-- Menu mobile -->
                        <button class="menu-mobile-btn" @click="homeStore.showMenuMobile = !homeStore.showMenuMobile">
                            <font-awesome-icon :icon="['fas', 'bars']" />
                            <!-- Menu mobile -->
                            <div class="menu-mobile" v-if="homeStore.showMenuMobile">
                                <ul class="menu-mobile-list">
                                    <li>
                                        <router-link to="/">Trang chủ</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/cua-hang">Cửa hàng</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/blog">Blog</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/phieu-giam-gia">Phiếu giảm giá</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/lien-he">Liên hệ</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/dang-nhap">Đăng nhập</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/dang-ky">Đăng ký</router-link>
                                    </li>
                                </ul>
                            </div>
                        </button>
                    </div>
                    <div class="col-xl-6 col-md-6 col-6">
                        <form @submit.prevent="searchSubmit" class="form-search">
                            <input type="text" v-model="searchTitle" placeholder="Tìm kiếm sản phẩm..." />
                            <button type="submit">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    class="bi bi-search"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                                    />
                                </svg>
                            </button>
                        </form>
                        <a href="/" class="logo-mobile">
                            <img src="https://shofy-nuxt.vercel.app/img/logo/logo.svg" alt="" />
                        </a>
                    </div>
                    <div class="col-xl-3 col-md-3 col-3">
                        <ul class="header-top-list">
                            <li v-if="accountStore.isAuthentication">
                                <button class="user-link">
                                    <button>
                                        <font-awesome-icon :icon="['far', 'user']" />
                                    </button>
                                    <div class="user-body">
                                        <p>Hello, Sign In</p>
                                        <p>{{ name }}</p>
                                    </div>
                                </button>
                                <!-- Popup User -->
                                <ul class="popup-user">
                                    <li>
                                        <a href="#">Tài khoản của tôi</a>
                                    </li>
                                    <li>
                                        <a href="#" @click="accountStore.logout">Đăng xuất</a>
                                    </li>
                                </ul>
                                <!-- Popup User -->
                            </li>
                            <li v-if="accountStore.isAuthentication === false" class="login-link-mobile">
                                <router-link to="/dang-nhap" class="header-top-link link-signup">Đăng nhập</router-link>
                            </li>
                            <li v-if="accountStore.isAuthentication === false" class="signup-link-mobile">
                                <router-link to="/dang-ky" class="header-top-link">Đăng ký</router-link>
                            </li>
                            <li>
                                <router-link to="/dang-sach-yeu-thich" class="header-top-link">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        class="bi bi-heart"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                                        />
                                    </svg>
                                    <span class="quanty-wish">3</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/gio-hang" class="header-top-link">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="21"
                                        fill="currentColor"
                                        class="bi bi-cart2"
                                        viewBox="0 0 16 16"
                                        style="margin-bottom: 5px"
                                    >
                                        <path
                                            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
                                        />
                                    </svg>
                                    <span class="quanty-cart">3</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <div class="container">
                <div class="row" style="align-items: center">
                    <div class="col-xl-3 col-md-3">
                        <button @click="homeStore.showCategoryList = !homeStore.showCategoryList" class="category-btn">
                            <font-awesome-icon :icon="['fas', 'bars-staggered']" />
                            <span>Tất cả danh mục</span>
                            <font-awesome-icon :icon="['fas', 'angle-down']" />
                        </button>
                        <!-- Popup category -->
                        <ul v-if="homeStore.showCategoryList" class="category-list">
                            <li v-for="cate in homeStore.categorys" :key="cate.cateId">
                                <a href="#">
                                    <img :src="cate.cateImage" alt="category img" />
                                    <span>{{ cate.cateName }}</span>
                                </a>
                            </li>
                        </ul>
                        <!-- Popup category -->
                    </div>
                    <div class="col-xl-7 col-md-9">
                        <ul class="header-bottom-list">
                            <li
                                :class="{ active: homeStore.menuActiveHeaderBottom === index }"
                                v-for="(item, index) in homeStore.menuHeaderBottom"
                                :key="index"
                                @mouseover="setActive(index)"
                                @mouseleave="resetActive"
                            >
                                <router-link :to="item.link">{{ item.name }}</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xl-2 hoteline-mobile-tablet">
                        <div class="hotline">
                            <font-awesome-icon :icon="['fas', 'phone-volume']" />
                            <div class="hotline-body">
                                <span>Hotline:</span>
                                <p>+84 356 118 444</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { useHome } from "@/store/home";
import { useAccount } from "@/store/account";
import { ref } from "vue";
export default {
    name: "header-wrapper",
    props: ["searchMethod"],
    mounted() {
        // Đặt mục đầu tiên là active mặc định khi component được mounted
        this.setActive(0);
    },
    created() {
        // Khi rời khỏi phần tử cuối cùng, đặt lại activeIndex về 0
        document.addEventListener("mouseleave", () => {
            this.setActive(0);
        });
    },
    setup(props) {
        const homeStore = useHome();
        const accountStore = useAccount();

        const setActive = (index) => {
            homeStore.menuActiveHeaderBottom = index;
            clearTimeout(homeStore.hoverTimeout);
        };
        const resetActive = () => {
            homeStore.hoverTimeout = setTimeout(() => {
                homeStore.menuActiveHeaderBottom = 0;
            }, 100);
        };

        // get category
        homeStore.getCategorys();

        const searchTitle = ref("");

        const searchSubmit = () => {
            props.searchMethod(searchTitle.value);
            searchTitle.value = "";
        };

        /// get name login
        const name = localStorage.getItem("name");
        const token = localStorage.getItem("token");
        if (token !== null) {
            accountStore.isAuthentication = true;
        }

        return { homeStore, accountStore, setActive, resetActive, searchTitle, searchSubmit, name };
    },
};
</script>

<style lang="scss" scoped>
header {
    height: var(--height-header);
    background-color: var(--white);
}
.header-top {
    height: calc(var(--height-header) - 50px);
    padding: 27px 0;
    border-bottom: 1px solid #010f1c1a;

    .row {
        align-items: center;
    }
}
.logo {
    display: inline-block;
}

.form-search {
    display: flex;
    align-items: center;

    input {
        height: 46px;
        width: 100%;
        color: var(--common-black);
        font-size: 1.4rem;
        padding: 0 12px;
        border: 2px solid var(--primary-color);
    }
    button {
        height: 46px;
        width: 60px;
        background: var(--primary-color);
        color: var(--white);
        border: none;
        outline: none;
    }
}
.form-search input:focus-visible {
    outline: none;
}
.header-top-list {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
        margin-left: 14px;

        .header-top-link {
            position: relative;
            display: flex;
            font-size: 1.6rem;
            color: var(--common-black);

            span {
                position: absolute;
                right: -8px;
                font-size: 1.2rem;
                width: 16px;
                height: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                color: var(--white);
                background: var(--pink-color);
            }

            .quanty-wish {
                top: -7px;
            }

            .quanty-cart {
                top: -4px;
            }
        }
    }
}
.header-top-list > li:hover > a {
    color: var(--primary-color);
}
.link-signup::before {
    position: absolute;
    content: "";
    width: 0.8px;
    height: 15px;
    bottom: 4px;
    right: -8px;
    background-color: #e0e0e0;
}
.user-link {
    display: flex;
    border: none;
    outline: none;
    margin-right: 8px;
    background-color: transparent;

    button {
        border: 1px solid var(--common-black);
        background: var(--white);
        color: var(--common-black);
        padding: 6px 8px;
        font-size: 1.8rem;
        border-radius: 50%;
        margin-right: 8px;
    }

    p {
        font-size: 1.4rem;
        margin: 0;
        text-align: left;
    }
}
.header-top-list > li:hover .popup-user {
    opacity: 1;
    transform: perspective(300px) rotateX(0deg);
    transition-duration: 0.2s;
    visibility: visible;
}
.popup-user {
    position: absolute;
    top: 78px;
    max-width: 200px;
    padding: 12px;
    margin: 0;
    background: var(--white);
    box-shadow: var(--box-shadow-popup);
    transform: perspective(300px) rotateX(-18deg);
    transform-origin: top;
    transition-duration: 0.1s;
    visibility: hidden;
    z-index: 99;
    opacity: 0;

    li {
        margin-left: 0;

        :hover {
            color: var(--primary-color);
        }

        a {
            display: block;
            font-size: 1.6rem;
            color: var(--common-black);
        }
    }

    li:first-child {
        margin-bottom: 12px;
    }
}
.popup-user::before {
    position: absolute;
    content: "";
    top: -9px;
    left: 0;
    background-color: transparent;
    width: 100%;
    height: 10px;
}
.header-bottom {
    height: calc(var(--height-header) - 100px);
}
.category-btn {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--white);
    width: 250px;
    height: 50px;
    padding: 0 12px;
    font-size: 1.6rem;
    border: none;
    background-color: var(--primary-color);
    transition: 0.3s;

    span {
        margin: 0 60px 0 8px;
    }
}
.category-btn:hover {
    background-color: var(--common-black);
}
.category-list {
    position: absolute;
    background: var(--white);
    box-shadow: var(--box-shadow-popup);
    width: 250px;
    padding: 12px;
    z-index: 99;

    li {
        margin-bottom: 14px;
        display: flex;
        align-items: center;

        img {
            width: 50px;
            height: 50px;
            margin-right: 8px;
            object-fit: contain;
        }

        a {
            display: block;
            width: 100%;
            font-size: 1.8rem;
            color: var(--common-black);
        }
    }
}
.category-list > li:hover a {
    color: var(--primary-color);
}
.header-bottom-list {
    display: flex;
    align-items: center;

    li {
        position: relative;
        margin-right: 30px;

        a {
            font-size: 1.8rem;
            color: var(--common-black);
        }
    }
}
.header-bottom-list li.active::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    bottom: -2px;
    animation: leftToWidth 0.6s both 0.2s;
    background-color: var(--primary-color);
}
.header-bottom-list li:hover a {
    transition: 0.2s;
    color: var(--primary-color);
}
.hotline {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
        width: 20px;
        height: 20px;
        color: var(--primary-color);
        margin-right: 10px;
    }

    .hotline-body {
        span {
            font-size: 1.2rem;
            font-weight: 600;
        }
        p {
            font-size: 1.4rem;
            margin: 0;
        }
    }
}
.hotline-body:hover p {
    color: var(--primary-color);
}
</style>

<style lang="scss" scoped>
@keyframes leftToRight {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}
/* Mobile */
@media screen and (max-width: 739px) {
    .header-top {
        padding: 27px 16px 27px 0px;
    }
    .logo {
        display: none;
    }
    .logo-mobile {
        display: block;
        text-align: center;
    }
    .form-search {
        display: none;
    }
    .login-link-mobile,
    .signup-link-mobile {
        display: none;
    }
    .header-top-list li {
        margin-left: 18px;
    }
    .menu-mobile-btn {
        position: relative;
        font-size: 2rem;
        border: none;
        width: 40px;
        height: 40px;
        color: var(--common-black);
        background-color: var(--white);
    }
    .menu-mobile {
        position: absolute;
        width: 200px;
        height: 330px;
        z-index: 99;
        left: -8px;
        padding: 24px;
        background-color: var(--white);
        box-shadow: 0px 1px 5px #87878755;
        animation-duration: 0.5s;
        animation-fill-mode: both;
        animation-name: leftToRight;

        .menu-mobile-list {
            li {
                margin-bottom: 10px;
                a {
                    display: block;
                    text-align: left;
                    color: var(--common-black);
                }
            }
        }
    }
    .header-bottom-list {
        display: none;
    }
}

/* Tablet */
@media screen and (min-width: 740px) and (max-width: 1024px) {
    .header-bottom-list {
        justify-content: flex-end;
    }
}

/* Tablet And Mobile */
@media screen and (max-width: 1024px) {
    .hoteline-mobile-tablet {
        display: none;
    }
}
@media screen and (min-width: 1025px) {
    .menu-mobile-btn,
    .menu-mobile,
    .logo-mobile {
        display: none;
    }
}
</style>
