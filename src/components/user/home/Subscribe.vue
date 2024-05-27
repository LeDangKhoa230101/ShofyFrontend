<template>
    <div class="subscribe">
        <div class="subscribe-shape">
            <img src="https://shofy-nuxt.vercel.app/img/subscribe/subscribe-shape-1.png" alt="" />
            <img src="https://shofy-nuxt.vercel.app/img/subscribe/subscribe-shape-2.png" alt="" />
            <img src="https://shofy-nuxt.vercel.app/img/subscribe/subscribe-shape-3.png" alt="" />
            <img src="https://shofy-nuxt.vercel.app/img/subscribe/subscribe-shape-4.png" alt="" />
            <div class="subscribe-plane">
                <img src="https://shofy-nuxt.vercel.app/img/subscribe/plane.png" alt="" />
                <svg
                    width="399"
                    height="110"
                    class="d-none d-sm-block"
                    viewBox="0 0 399 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.499634 1.00049C8.5 20.0005 54.2733 13.6435 60.5 40.0005C65.6128 61.6426 26.4546 130.331 15 90.0005C-9 5.5 176.5 127.5 218.5 106.5C301.051 65.2247 202 -57.9188 344.5 40.0003C364 53.3997 384 22 399 22"
                        stroke="white"
                        stroke-opacity="0.5"
                        stroke-dasharray="3 3"
                    ></path>
                </svg>
                <svg
                    class="d-sm-none"
                    width="193"
                    height="110"
                    viewBox="0 0 193 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 1C4.85463 20.0046 26.9085 13.6461 29.9086 40.0095C32.372 61.6569 13.5053 130.362 7.98637 90.0217C-3.57698 5.50061 85.7981 127.53 106.034 106.525C145.807 65.2398 98.0842 -57.9337 166.742 40.0093C176.137 53.412 185.773 22.0046 193 22.0046"
                        stroke="white"
                        stroke-opacity="0.5"
                        stroke-dasharray="3 3"
                    ></path>
                </svg>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-6 col-12">
                    <div class="subscribe-content">
                        <span>SALE 20% OFF ALL STORE</span>
                        <h3>Subscribe our Newsletter</h3>
                    </div>
                </div>
                <div class="col-xl-6 col-md-6 col-12">
                    <form class="subscribe-form">
                        <input class="subscribe-form-input" type="email" placeholder="Enter Your Email" />
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "subscribe-wrapper",
};
</script>

<style lang="scss" scoped>
.subscribe {
    position: relative;
    padding: 70px 0 65px;
    z-index: 1;
    background-color: var(--primary-color);

    .subscribe-shape {
        > img {
            position: absolute;
            z-index: -1;
        }

        > img:nth-child(1) {
            left: 0;
            top: 0;
            max-width: 100%;
            opacity: 0.4;
            mix-blend-mode: luminosity;
        }
        > img:nth-child(2) {
            left: 10%;
            top: 53%;
            max-width: 100%;
            opacity: 0.4;
            mix-blend-mode: luminosity;
        }
        > img:nth-child(3) {
            bottom: 10%;
            left: 12%;
            opacity: 0.4;
            mix-blend-mode: luminosity;
        }
        > img:nth-child(4) {
            right: 12%;
            top: -5%;
        }
    }
}
.subscribe-content {
    span {
        font-size: 1.6rem;
        color: var(--white);
        font-weight: 600;
    }
    h3 {
        color: var(--white);
        font-size: 4rem;
        font-weight: 800;
        line-height: 1;
        margin-bottom: 0;
    }
}
.subscribe-form {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .subscribe-form-input {
        font-size: 1.4rem;
        padding: 19.5px 155px 19.5px 26px;
        border: none;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
    > button {
        border: none;
        font-size: 1.4rem;
        padding: 19.5px 40px;
        color: var(--white);
        background-color: var(--common-black);
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
}
.subscribe-form-input:focus-visible {
    outline: none;
}
.subscribe-form-input:focus::placeholder {
    color: transparent;
}
.subscribe-plane {
    position: absolute;
    height: 110px;
    right: 17%;
    top: 24%;
    width: 399px;
    z-index: -2;

    > img {
        position: absolute;
        left: -6%;
        top: -34%;
    }

    svg {
        position: absolute;
        right: 0;
        top: 0;
    }
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .subscribe-content {
        span {
            font-size: 1.2rem;
        }
        h3 {
            font-size: 2.8rem;
            margin-bottom: 20px;
        }
    }
    .subscribe-form .subscribe-form-input {
        padding: 19.5px 72px 19.5px 26px;
    }
}
</style>
