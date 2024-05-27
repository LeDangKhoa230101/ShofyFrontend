<template>
    <div class="content">
        <header class="header">
            <h2>Cập nhật danh mục</h2>
            <router-link to="/quan-ly-danh-muc">Quản lý danh mục</router-link>
        </header>

        <div class="add-action">
            <form>
                <div class="form-group">
                    <label>Nhập tên</label>
                    <input type="text" placeholder="Laptop dell..." />
                </div>
                <div class="form-group">
                    <label>Nhập tên</label>
                    <input type="text" placeholder="Laptop dell..." />
                </div>
                <button type="submit">Cập nhật</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "update-category",
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
form {
    margin-left: 14px;

    > button {
        padding: 8px 30px;
        font-size: 1.6rem;
        margin-top: 10px;
        border: none;
        color: var(--white);
        background-color: var(--primary-color);
        transition: all 0.3s ease-out 0s;
    }
}
form > button:hover {
    background-color: var(--common-black);
}
.form-group {
    position: relative;
    margin-bottom: 18px;

    label {
        position: absolute;
        top: -7px;
        font-size: 1.2rem;
        left: 20px;
        line-height: 1;
        padding: 0 5px;
        color: var(--common-black);
        background-color: var(--white);
    }

    input {
        font-size: 1.4rem;
        height: 44px;
        width: 500px;
        padding: 0 26px;
        background: var(--white);
        border: 1px solid #e0e2e3;
        color: var(--common-black);
        outline: none;
        transition: all 0.2s ease-out 0s;
    }
}
.error {
    display: inline-block;
    margin-top: 2px;
    font-size: 1.3rem;
    color: var(--pink-color);
}
.error-1 {
    margin-bottom: 30px;
}
.form-group > input:focus {
    border-color: var(--common-black);
}
.form-group > input:focus::placeholder {
    opacity: 0;
}
</style>
