<template>
    <div class="content">
        <header class="header">
            <h2>Quản lý danh mục</h2>
            <router-link to="/them-danh-muc">Thêm danh mục</router-link>
        </header>
        <div class="manager-main">
            <table class="table">
                <thead>
                    <tr>
                        <th class="th-product">Id</th>
                        <th>Danh mục</th>
                        <th>Tên</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="td-macate">
                            <span>1</span>
                        </td>
                        <td class="td-image">
                            <a href="#" class="img-link">
                                <img class="image" src="https://i.ibb.co/WVdTgR8/headphone-1.png" alt="" />
                            </a>
                        </td>
                        <td class="td-name">
                            <a href="#">Headphones Wireless</a>
                        </td>
                        <td class="td-control">
                            <router-link to="/sua-danh-muc">Sửa</router-link>
                            <a href="#">Xóa</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "category-manager",
};
</script>

<style lang="scss" scoped>
.content {
    flex: 1;
}
.header {
    padding: 24px 14px;
    display: flex;
    align-items: center;

    h2 {
        font-size: 3rem;
        font-weight: 550;
        color: var(--common-black);
    }
    > a {
        padding: 8px 14px;
        font-size: 1.6rem;
        border: none;
        color: var(--white);
        background-color: var(--primary-color);
        margin-left: 40px;
        transition: all 0.3s ease-out 0s;
    }
}
.header > a:hover {
    background-color: var(--common-black);
}
.manager-main {
    padding: 0 14px;
}
.table {
    margin: 0 30px 25px 0;
}
tr {
    > th {
        border: none;
        background-color: #f1f3f4;
        font-size: 1.5rem;
        font-weight: 500;
        padding: 9px 0;
    }
    .th-product {
        padding-left: 16px;
    }
    td {
        padding: 4px 0;

        a {
            .image {
                width: 50px;
                height: 72px;
                object-fit: cover;
            }
        }

        .img-link {
            display: inline-block;
            background-color: rgb(242, 243, 245);
        }
    }
    .td-name {
        width: 300px;

        > a {
            display: inline-block;
            font-size: 1.6rem;
            color: var(--common-black);
            margin-top: 22px;
            transition: all 0.3s ease-out 0s;
        }
    }
    .td-macate {
        width: 140px;
        padding-left: 14px;
        span {
            display: inline-block;
            margin-top: 22px;
            font-size: 1.6rem;
            color: var(--common-black);
        }
    }
    .td-control {
        > a {
            display: inline-block;
            margin-top: 18px;
            font-size: 1.6rem;
            color: var(--white);
            cursor: pointer;
            border: none;
            margin-right: 16px;
            padding: 4px 10px;
            transition: all 0.2s ease-out 0s;
        }
        > a:nth-child(1) {
            background-color: #31cb0b;
        }
        > a:nth-child(2) {
            background-color: var(--pink-color);
        }
    }
}
tr .td-name > a:hover {
    color: var(--primary-color);
}
tr .td-control > a:hover {
    background-color: var(--primary-color);
}
</style>
