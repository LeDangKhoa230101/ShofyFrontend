import { createWebHistory, createRouter } from "vue-router";

import Home from "@/components/user/home/Home.vue";
import Detail from "@/components/user/Detail.vue";
import Cart from "@/components/user/Cart.vue";
import Checkout from "@/components/user/Checkout.vue";
import Shop from "@/components/user/Shop.vue";
import SearchPage from "@/components/user/SearchPage.vue";
import Wishlist from "@/components/user/Wishlist.vue";
import Blog from "@/components/user/Blog.vue";
import Coupon from "@/components/user/Coupon.vue";
import Contact from "@/components/user/Contact.vue";
import Login from "@/components/user/account/Login.vue";
import Register from "@/components/user/account/Register.vue";

import Admin from "@/components/admin/Dashboard.vue";
import ProductManager from "@/components/admin/product/ProductManager.vue";
import AddProduct from "@/components/admin/product/AddProduct.vue";
import UpdateProduct from "@/components/admin/product/UpdateProduct.vue";
import CategoryManager from "@/components/admin/category/CategoryManager.vue";
import AddCategory from "@/components/admin/category/AddCategory.vue";
import UpdateCategory from "@/components/admin/category/UpdateCategory.vue";

const routes = [
    {
        path: "/",
        component: Home,
        meta: {
            title: "Trang chủ",
        },
    },
    {
        path: "/san-pham/:id",
        component: Detail,
        name: "productDetail",
        meta: {
            title: "Chi tiết sản phẩm",
        },
    },
    {
        path: "/dang-nhap",
        component: Login,
        meta: {
            title: "Đăng nhập",
        },
    },
    {
        path: "/dang-ky",
        component: Register,
        meta: {
            title: "Đăng ký",
        },
    },
    {
        path: "/gio-hang",
        component: Cart,
        meta: {
            title: "Giỏ hàng",
        },
    },
    {
        path: "/thanh-toan",
        component: Checkout,
        meta: {
            title: "Thanh toán",
        },
    },
    {
        path: "/cua-hang",
        component: Shop,
        meta: {
            title: "Cửa hàng",
        },
    },
    {
        path: "/tim-kiem",
        component: SearchPage,
        meta: {
            title: "Tìm kiếm",
        },
    },
    {
        path: "/dang-sach-yeu-thich",
        component: Wishlist,
        meta: {
            title: "Danh sách yêu thích",
        },
    },
    {
        path: "/blog",
        component: Blog,
        meta: {
            title: "Blog",
        },
    },
    {
        path: "/phieu-giam-gia",
        component: Coupon,
        meta: {
            title: "Phiếu giảm giá",
        },
    },
    {
        path: "/lien-he",
        component: Contact,
        meta: {
            title: "Liên hệ",
        },
    },
    {
        path: "/admin",
        component: Admin,
        meta: {
            title: "Admin",
        },
    },
    {
        path: "/quan-ly-san-pham",
        component: ProductManager,
        meta: {
            title: "Quản lý sản phẩm",
        },
    },
    {
        path: "/quan-ly-danh-muc",
        component: CategoryManager,
        meta: {
            title: "Quản lý danh mục",
        },
    },
    {
        path: "/them-san-pham",
        component: AddProduct,
        meta: {
            title: "Thêm sản phẩm",
        },
    },
    {
        path: "/sua-san-pham",
        component: UpdateProduct,
        meta: {
            title: "Cập nhật sản phẩm",
        },
    },
    {
        path: "/them-danh-muc",
        component: AddCategory,
        meta: {
            title: "Thêm danh mục",
        },
    },
    {
        path: "/sua-danh-muc",
        component: UpdateCategory,
        meta: {
            title: "Cập nhật danh mục",
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "Tiêu đề mặc định";
    next();
});

export default router;
