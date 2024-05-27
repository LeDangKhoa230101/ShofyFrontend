<template>
    <div class="blog">
        <div class="blog-banner">
            <img src="https://shofy-nuxt.vercel.app/img/breadcrumb/breadcrumb-bg-1.jpg" alt="" />
            <div class="blog-content">
                <h3>Blog của chúng tôi</h3>
                <div class="breadcrumb">
                    <span>Trang chủ</span>
                    <font-awesome-icon :icon="['fas', 'circle']" />
                    <span>Blog</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "blog-wrapper",
};
</script>

<style lang="scss" scoped>
.blog-banner {
    position: relative;
}
.blog-banner img {
    width: 100%;
    height: 100%;
}
.blog-banner::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(1, 15, 28, 0.5);
}
.blog-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h3 {
        font-size: 4.4rem;
        font-weight: 600;
        color: var(--white);
    }

    .breadcrumb {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);

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
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .blog-content h3 {
        font-size: 2.3rem;
    }
}
</style>
