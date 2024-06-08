<template>
    <div class="account-page">
        <div class="account-page-shape">
            <img src="https://shofy-nuxt.vercel.app/img/login/login-shape-1.png" alt="" />
            <img src="https://shofy-nuxt.vercel.app/img/login/login-shape-2.png" alt="" />
            <img src="https://shofy-nuxt.vercel.app/img/login/login-shape-3.png" alt="" />
            <img src="https://shofy-nuxt.vercel.app/img/login/login-shape-4.png" alt="" />
        </div>
        <div class="login-modal">
            <h4>Đăng ký</h4>
            <div class="change-text">
                Bạn đã có tài khoản?
                <router-link to="/dang-nhap"> Đăng nhập </router-link>
            </div>
            <div class="text-center">
                <p>hoặc đăng ký bằng Email</p>
            </div>
            <form @submit.prevent="accountStore.signup">
                <div class="form-group">
                    <label>Nhập tên</label>
                    <input
                        @blur="accountStore.handleNameRegister()"
                        v-model="accountStore.nameRegister"
                        type="text"
                        placeholder="Uzumaki Naruto"
                    />
                </div>
                <p class="error error-1">{{ accountStore.errorNameRegister }}</p>
                <div class="form-group">
                    <label>Nhập Email</label>
                    <input
                        @blur="accountStore.handleEmailRegister()"
                        v-model="accountStore.emailRegister"
                        type="email"
                        placeholder="abc@mail.com"
                    />
                </div>
                <p class="error error-2">{{ accountStore.errorEmailRegister }}</p>
                <div class="form-group">
                    <label>Mật khẩu</label>
                    <input
                        @blur="accountStore.handlePasswordRegister()"
                        v-model="accountStore.passwordRegister"
                        type="password"
                        placeholder="Min. 6 character"
                    />
                </div>
                <p class="error">{{ accountStore.errorPasswordRegister }}</p>
                <button class="btn-form" type="submit">Đăng ký</button>
            </form>
        </div>
    </div>
</template>

<script>
import { useAccount } from "@/store/account";

export default {
    name: "register-wrapper",
    setup() {
        const accountStore = useAccount();

        return { accountStore };
    },
};
</script>

<style lang="scss" scoped>
.account-page {
    position: relative;
    min-height: 100vh;

    .account-page-shape {
        img {
            position: absolute;
            z-index: -1;
        }

        > img:nth-child(1) {
            left: 18%;
            top: 7%;
        }
        > img:nth-child(2) {
            bottom: 38%;
            left: 26%;
        }
        > img:nth-child(3) {
            right: 22%;
            top: 7%;
        }
        > img:nth-child(4) {
            right: 10%;
            bottom: 27%;
        }
    }
}
.login-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 651px;
}
.login-modal {
    background-color: var(--white);
    box-shadow: 0 30px 70px rgba(1, 15, 28, 0.1);
    padding: 50px 60px 70px;

    h4 {
        font-size: 3rem;
        color: var(--common-black);
        text-align: center;
        font-weight: 500;
        margin-bottom: 4px;
    }

    .change-text {
        font-size: 1.6rem;
        color: #49535b;
        margin-bottom: 15px;
        font-family: "Jost", sans-serif;
        text-align: center;
    }
}
.app-control-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 252px;
    border: 1px solid #e0e2e3;
    color: #041226;
    font-size: 1.5rem;
    height: 56px;
    line-height: 54px;
    margin-bottom: 10px;
    transition: all 0.3s ease-out 0s;

    img {
        margin-right: 7px;
        transform: translateY(-2px);
    }
}
.app-control-btn:nth-child(1) {
    margin-right: 10px;
}
.app-control-btn:hover {
    border-color: #010f1c;
}
.text-center {
    position: relative;
    margin-top: 10px;
    margin-bottom: 40px;
    font-size: 1.5rem;
    color: #55585b;
}
.text-center p::after {
    position: absolute;
    content: "";
    right: 0px;
    width: 150px;
    top: 50%;
    transform: translateY(-50%);
    height: 1px;
    background-color: #e0e2e3;
}
.text-center p::before {
    position: absolute;
    content: "";
    left: 0px;
    width: 150px;
    top: 50%;
    transform: translateY(-50%);
    height: 1px;
    background-color: #e0e2e3;
}
.form-group {
    position: relative;

    label {
        position: absolute;
        top: -7px;
        font-size: 1.4rem;
        left: 20px;
        line-height: 1;
        padding: 0 5px;
        color: var(--common-black);
        background-color: var(--white);
    }

    input {
        font-size: 1.4rem;
        height: 56px;
        width: 100%;
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
.error-1,
.error-2 {
    margin-bottom: 30px;
}
.form-group > input:focus {
    border-color: var(--common-black);
}
.form-group > input:focus::placeholder {
    opacity: 0;
}
.password-control {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);

    button {
        border: none;
        background-color: transparent;
        font-size: 1.6rem;
        padding: 2px;
        color: #55585b;
    }
}
.btn-form {
    width: 100%;
    border: none;
    font-size: 1.6rem;
    padding: 14px 30px;
    margin-top: 30px;
    color: var(--white);
    background-color: var(--common-black);
    transition: all 0.3s ease-out 0s;
}
.btn-form:hover {
    background-color: var(--primary-color);
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .login-modal {
        min-width: 400px;
    }
}
</style>
