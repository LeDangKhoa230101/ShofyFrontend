import { defineStore } from "pinia";

export const useAccount = defineStore("accounnt", {
    state: () => ({
        isROLE: "ROLE_USER",
        isAuthentication: false,

        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

        showEyePassword: false,
        hideEyePassword: true,

        emailLogin: "",
        passwordLogin: "",

        errorEmailLogin: "",
        errorPasswordLogin: "",

        nameRegister: "",
        emailRegister: "",
        passwordRegister: "",

        errorNameRegister: "",
        errorEmailRegister: "",
        errorPasswordRegister: "",

        typePassword: "password",
    }),
    actions: {
        handleErrorEmail() {
            if (this.emailLogin !== "" && !this.pattern.test(this.emailLogin)) {
                this.errorEmailLogin = "Email không hợp lệ";
            } else {
                this.errorEmailLogin = "";
            }
        },
        handleErrorPassword() {
            if (this.passwordLogin.length < 6 && this.passwordLogin !== "") {
                this.errorPasswordLogin = "Mật khẩu tối thiểu 6 ký tự";
            } else {
                this.errorPasswordLogin = "";
            }
        },
        handleShowPass() {
            this.typePassword = "text";
            this.showEyePassword = true;
            this.hideEyePassword = false;
        },
        handleHidePass() {
            this.typePassword = "password";
            this.showEyePassword = false;
            this.hideEyePassword = true;
        },
        handleNameRegister() {
            if (this.nameRegister === "") {
                this.errorNameRegister = "Tên là bắt buộc";
            } else {
                this.errorNameRegister = "";
            }
        },
        handleEmailRegister() {
            if (this.emailRegister !== "" && !this.pattern.test(this.emailRegister)) {
                this.errorEmailRegister = "Email không hợp lệ";
            } else if (this.emailRegister === "") {
                this.errorEmailRegister = "Email là bắt buộc";
            } else {
                this.errorEmailRegister = "";
            }
        },
        handlePasswordRegister() {
            if (this.passwordRegister === "") {
                this.errorPasswordRegister = "Mật khẩu là bắt buộc";
            } else if (this.passwordRegister !== "" && this.passwordRegister.length < 6) {
                this.errorPasswordRegister = "Mật khẩu tối thiểu 6 ký tự";
            } else {
                this.errorPasswordRegister = "";
            }
        },
    },
});
