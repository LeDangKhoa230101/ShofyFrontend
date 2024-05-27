<template>
    <div class="contact">
        <div class="container" style="padding-bottom: 100px">
            <div class="row">
                <div class="col-12">
                    <div class="heading">
                        <h3>Giữ liên lạc với chúng tôi</h3>
                        <div class="breadcrumb">
                            <span>Trang chủ</span>
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            <span>Liên hệ</span>
                        </div>
                    </div>
                </div>
                <div class="sent-content">
                    <div class="row">
                        <h3 class="sent-title">Đã gửi tin nhắn</h3>
                        <div class="col-xl-9 col-md-9 col-12">
                            <form class="sent-form">
                                <div class="form-group">
                                    <label>Họ và Tên</label>
                                    <input type="text" placeholder="Uzumaki Naruto" />
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="abc@mail.com" />
                                </div>
                                <div class="form-group">
                                    <label>Chủ thể</label>
                                    <input type="text" placeholder="Viết chủ đề của bạn" />
                                </div>
                                <div class="form-group">
                                    <label>Tin nhắn của bạn</label>
                                    <textarea placeholder="Viết chủ đề của bạn" />
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" />
                                    <span
                                        >Lưu tên, email và trang web của tôi trong trình duyệt này cho lần bình luận
                                        tiếp theo.</span
                                    >
                                </div>
                                <button type="submit">Gửi tin nhắn</button>
                            </form>
                        </div>
                        <div class="col-xl-3 col-md-3 col-12" style="display: flex; justify-content: center">
                            <div class="sent-content-right">
                                <ul>
                                    <li>
                                        <img
                                            src="https://shofy-nuxt.vercel.app/img/contact/contact-icon-1.png"
                                            alt=""
                                        />
                                        <label>contact@shofy.com</label>
                                        <span>+670 413 90 762</span>
                                    </li>
                                    <li>
                                        <img
                                            src="https://shofy-nuxt.vercel.app/img/contact/contact-icon-2.png"
                                            alt=""
                                        />
                                        <label>
                                            84 buồn ngủ rỗng st.
                                            <br />
                                            Jamaica, New York 1432
                                        </label>
                                    </li>
                                    <li>
                                        <img
                                            src="https://shofy-nuxt.vercel.app/img/contact/contact-icon-3.png"
                                            alt=""
                                        />
                                        <label>Tìm trên mạng xã hội</label>
                                        <div class="app-list">
                                            <button>
                                                <font-awesome-icon :icon="['fab', 'facebook-f']" />
                                            </button>
                                            <button>
                                                <font-awesome-icon :icon="['fab', 'twitter']" />
                                            </button>
                                            <button>
                                                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="map-contact">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894612!2d-74.11976383964465!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1678114595329!5m2!1sen!2sbd"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "contact-wrapper",
};
</script>

<style lang="scss" scoped>
.contact {
    padding-bottom: 120px;
    background-color: #fcfcfc;
}
.heading {
    padding-top: 95px;
    padding-bottom: 50px;

    h3 {
        font-size: 4.4rem;
        color: var(--common-black);
        text-align: center;
    }

    .breadcrumb {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #55585b;

        span {
            font-size: 1.6rem;
        }
        svg {
            width: 4px;
            height: 4px;
            margin: 0 5px;
        }
    }
}
.sent-content {
    box-shadow: 0 30px 70px rgba(1, 15, 28, 0.1);
    padding: 42px 70px 49px;
    background-color: var(--white);
}
.sent-title {
    font-size: 3rem;
    margin-bottom: 35px;
    color: var(--common-black);
}
.sent-form {
    .form-group {
        position: relative;
        margin-bottom: 34px;

        > label {
            position: absolute;
            top: -7px;
            font-size: 1.4rem;
            left: 20px;
            line-height: 1;
            padding: 0 5px;
            color: var(--common-black);
            background-color: var(--white);
        }
        > input {
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
        > textarea {
            padding: 17px 26px;
            font-size: 1.4rem;
            height: 200px;
            width: 100%;
            outline: none;
            resize: none;
            color: var(--common-black);
            border: 1px solid #d5d8db;
            transition: all 0.3s ease-out 0s;
        }
    }
    button {
        font-size: 1.6rem;
        padding: 9px 30px;
        color: var(--white);
        border: none;
        background-color: var(--common-black);
        transition: all 0.3s ease-out 0s;
    }
}
.sent-form > button:hover {
    background-color: var(--primary-color);
}
.form-group > input:focus,
.form-group > textarea:focus {
    border-color: var(--common-black);
}
.form-group > input:focus::placeholder,
.form-group > textarea:focus::placeholder {
    opacity: 0;
}
.form-check {
    display: flex;
    align-items: center;
    padding: 0;
    margin-bottom: 20px;

    > input {
        width: 18px;
        height: 18px;
        margin-right: 6px;
    }
    > span {
        font-size: 1.5rem;
        color: #55585b;
    }
}
.sent-content-right {
    ul {
        li {
            display: flex;
            flex-direction: column;
            margin-bottom: 38px;
            > img {
                width: 62px;
                height: 62px;
                margin-bottom: 18px;
            }
            > label {
                font-size: 1.7rem;
                color: #55585b;
                cursor: pointer;
                transition: all 0.3s ease-out 0s;
            }
            > span {
                font-size: 1.8rem;
                cursor: pointer;
                color: var(--common-black);
                font-weight: 550;
                transition: all 0.3s ease-out 0s;
            }
            .app-list {
                > button {
                    width: 38px;
                    height: 38px;
                    font-size: 1.4rem;
                    background-color: var(--white);
                    color: var(--common-black);
                    border: 1px solid #e6e7e8;
                    transition: all 0.3s ease-out 0s;
                }
            }
        }
    }
}
.sent-content-right ul li > label:hover {
    color: var(--primary-color);
}
.sent-content-right ul li > span:hover {
    color: var(--primary-color);
}
.sent-content-right ul li > .app-list > button:hover {
    color: var(--white);
    background-color: var(--primary-color);
}
.map-contact {
    height: 360px;
    iframe {
        width: 100%;
        height: 100%;
    }
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .heading {
        padding-top: 50px;
    }
    .sent-content-right {
        margin-top: 30px;
    }
}
</style>
