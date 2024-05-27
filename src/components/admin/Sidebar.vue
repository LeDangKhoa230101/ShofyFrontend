<template>
    <nav class="sidebar">
        <div class="sidebar-top">
            <img src="https://i.pinimg.com/564x/70/6a/14/706a14651b10bf270e7db457846751e2.jpg" alt="" />
            <div class="sidebar-top-info">
                <span>Xin chào</span>
                <h3>Admin</h3>
            </div>
        </div>
        <div class="sidebar-body">
            <ul>
                <li
                    v-for="(sidebar, index) in adminStore.sidebar"
                    :key="index"
                    :class="{ active: adminStore.activeSidebar === index }"
                    @click="setActiveSidebar(index)"
                >
                    <router-link :to="sidebar.link">
                        <span v-html="sidebar.icon"></span>
                        {{ sidebar.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { useAdmin } from "@/store/admin";
export default {
    name: "sidebar-wrapper",
    created() {
        this.loadActiveSidebar();
    },
    setup() {
        const adminStore = useAdmin();

        const setActiveSidebar = (index) => {
            adminStore.activeSidebar = index;
            localStorage.setItem("activeSidebar", index);
        };
        const loadActiveSidebar = () => {
            const savedIndex = localStorage.getItem("activeSidebar");
            if (savedIndex !== null) {
                adminStore.activeSidebar = parseInt(savedIndex);
            }
        };

        return { adminStore, setActiveSidebar, loadActiveSidebar };
    },
};
</script>

<style lang="scss" scoped>
.sidebar {
    width: 260px;
    min-height: 100vh;
    background-color: var(--white);
    box-shadow: 0 30px 70px rgba(1, 15, 28, 0.1);

    .sidebar-top {
        display: flex;
        align-items: center;
        padding: 24px 30px 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid #dfdcdc;
        > img {
            width: 46px;
            height: 46px;
            border-radius: 50%;
            margin-right: 12px;
        }
        .sidebar-top-info {
            color: var(--common-black);
            > span {
                font-size: 1.4rem;
            }
            > h3 {
                margin: 0;
                font-size: 2rem;
                font-weight: 550;
                color: var(--primary-color);
            }
        }
    }

    .sidebar-body {
        ul {
            li {
                > a {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    font-size: 1.6rem;
                    width: 100%;
                    padding: 10px 30px;
                    border: none;
                    cursor: pointer;
                    color: var(--primary-color);
                    background-color: var(--white);
                    transition: all 0.3s ease-out 0s;
                    > span {
                        margin-right: 6px;
                    }
                }
            }
        }
    }
}
.sidebar .sidebar-body ul li.active > a {
    color: var(--white);
    background-color: var(--common-black);
}
.sidebar .sidebar-body ul li.active > a:hover {
    padding-left: 30px;
}
.sidebar .sidebar-body ul li > a:hover {
    color: var(--white);
    background-color: var(--common-black);
    padding-left: 36px;
}
</style>
