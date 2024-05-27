<template>
    <div class="latest">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 col-md-8 col-12">
                    <div class="heading">
                        <h3>
                            Tin tức & bài viết mới nhất
                            <svg
                                width="114"
                                height="35"
                                viewBox="0 0 114 35"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053"
                                    stroke="currentColor"
                                    stroke-width="4"
                                    stroke-miterlimit="3.8637"
                                    stroke-linecap="round"
                                ></path>
                            </svg>
                        </h3>
                    </div>
                </div>
                <div class="col-xl-2 col-md-4 col-12">
                    <button class="latest-view-btn">
                        Xem tất cả Blog
                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <swiper
                        :modules="modules"
                        :autoplay="{
                            delay: 2500,
                            disableOnInteraction: false,
                        }"
                        :breakpoints="{
                            '0': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '768': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '1024': {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }"
                    >
                        <swiper-slide>
                            <div class="latest-item">
                                <div class="latest-item-img">
                                    <img src="https://shofy-nuxt.vercel.app/img/blog/blog-1.jpg" alt="" />
                                    <span>14 January, 2023</span>
                                </div>
                                <div class="latest-item-content">
                                    <h3>The Modern Art Clay Ceramics.</h3>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-tag"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"
                                            />
                                            <path
                                                d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"
                                            />
                                        </svg>
                                        Tablet, News
                                    </span>
                                    <p>
                                        The world is an amazing place providing an incredible assortment of interesting
                                        locations across.
                                    </p>
                                    <button>
                                        Read More
                                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="latest-item">
                                <div class="latest-item-img">
                                    <img src="https://shofy-nuxt.vercel.app/img/blog/blog-2.jpg" alt="" />
                                    <span>18 February, 2023</span>
                                </div>
                                <div class="latest-item-content">
                                    <h3>How clothes are linked to climate</h3>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-tag"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"
                                            />
                                            <path
                                                d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"
                                            />
                                        </svg>
                                        Tablet, News
                                    </span>
                                    <p>
                                        The world is an amazing place providing an incredible assortment of interesting
                                        locations across.
                                    </p>
                                    <button>
                                        Read More
                                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="latest-item">
                                <div class="latest-item-img">
                                    <img src="https://shofy-nuxt.vercel.app/img/blog/blog-3.jpg" alt="" />
                                    <span>20 January, 2023</span>
                                </div>
                                <div class="latest-item-content">
                                    <h3>The Sound Of Fashion: Malcolm</h3>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-tag"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"
                                            />
                                            <path
                                                d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"
                                            />
                                        </svg>
                                        Tablet, News
                                    </span>
                                    <p>
                                        The world is an amazing place providing an incredible assortment of interesting
                                        locations across.
                                    </p>
                                    <button>
                                        Read More
                                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="latest-item">
                                <div class="latest-item-img">
                                    <img src="https://shofy-nuxt.vercel.app/img/blog/blog-1.jpg" alt="" />
                                    <span>12 February, 2023</span>
                                </div>
                                <div class="latest-item-content">
                                    <h3>How clothes are linked to climate</h3>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-tag"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"
                                            />
                                            <path
                                                d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"
                                            />
                                        </svg>
                                        Tablet, News
                                    </span>
                                    <p>
                                        The world is an amazing place providing an incredible assortment of interesting
                                        locations across.
                                    </p>
                                    <button>
                                        Read More
                                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="latest-item">
                                <div class="latest-item-img">
                                    <img src="https://shofy-nuxt.vercel.app/img/blog/blog-2.jpg" alt="" />
                                    <span>18 February, 2023</span>
                                </div>
                                <div class="latest-item-content">
                                    <h3>How clothes are linked to climate</h3>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-tag"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"
                                            />
                                            <path
                                                d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"
                                            />
                                        </svg>
                                        Tablet, News
                                    </span>
                                    <p>
                                        The world is an amazing place providing an incredible assortment of interesting
                                        locations across.
                                    </p>
                                    <button>
                                        Read More
                                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="latest-item">
                                <div class="latest-item-img">
                                    <img src="https://shofy-nuxt.vercel.app/img/blog/blog-1.jpg" alt="" />
                                    <span>14 January, 2023</span>
                                </div>
                                <div class="latest-item-content">
                                    <h3>The Modern Art Clay Ceramics.</h3>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-tag"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"
                                            />
                                            <path
                                                d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"
                                            />
                                        </svg>
                                        Tablet, News
                                    </span>
                                    <p>
                                        The world is an amazing place providing an incredible assortment of interesting
                                        locations across.
                                    </p>
                                    <button>
                                        Read More
                                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="latest-item">
                                <div class="latest-item-img">
                                    <img src="https://shofy-nuxt.vercel.app/img/blog/blog-3.jpg" alt="" />
                                    <span>20 January, 2023</span>
                                </div>
                                <div class="latest-item-content">
                                    <h3>The Sound Of Fashion: Malcolm</h3>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-tag"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"
                                            />
                                            <path
                                                d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"
                                            />
                                        </svg>
                                        Tablet, News
                                    </span>
                                    <p>
                                        The world is an amazing place providing an incredible assortment of interesting
                                        locations across.
                                    </p>
                                    <button>
                                        Read More
                                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="latest-item">
                                <div class="latest-item-img">
                                    <img src="https://shofy-nuxt.vercel.app/img/blog/blog-1.jpg" alt="" />
                                    <span>12 February, 2023</span>
                                </div>
                                <div class="latest-item-content">
                                    <h3>How clothes are linked to climate</h3>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-tag"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"
                                            />
                                            <path
                                                d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"
                                            />
                                        </svg>
                                        Tablet, News
                                    </span>
                                    <p>
                                        The world is an amazing place providing an incredible assortment of interesting
                                        locations across.
                                    </p>
                                    <button>
                                        Read More
                                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="row" style="padding-top: 75px">
                <div class="col-w-20 col-6">
                    <div class="instagram-item">
                        <img src="https://shofy-nuxt.vercel.app/img/instagram/instagram-1.jpg" alt="" />
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-instagram"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="col-w-20 col-6">
                    <div class="instagram-item">
                        <img src="https://shofy-nuxt.vercel.app/img/instagram/instagram-2.jpg" alt="" />
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-instagram"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="col-w-20 col-6">
                    <div class="instagram-item">
                        <img src="https://shofy-nuxt.vercel.app/img/instagram/instagram-3.jpg" alt="" />
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-instagram"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="col-w-20 col-6">
                    <div class="instagram-item">
                        <img src="https://shofy-nuxt.vercel.app/img/instagram/instagram-4.jpg" alt="" />
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-instagram"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="col-w-20 col-6">
                    <div class="instagram-item">
                        <img src="https://shofy-nuxt.vercel.app/img/instagram/instagram-5.jpg" alt="" />
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-instagram"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export default {
    name: "lastest-art",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay],
        };
    },
};
</script>

<style lang="scss" scoped>
.latest {
    padding-bottom: 75px;
}
.heading {
    margin-bottom: 40px;
    h3 {
        position: relative;
        font-size: 3.6rem;
        z-index: 1;

        svg {
            position: absolute;
            left: 0;
            bottom: -12px;
            color: var(--pink-color);
            z-index: -1;
        }
    }
}
.heading > h3::before {
    position: absolute;
    content: "";
    width: 500px;
    height: 2px;
    right: 70px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #f0f2f4;
}
.latest-view-btn {
    font-size: 1.4rem;
    width: 100%;
    border-radius: 4px;
    border: none;
    color: var(--white);
    padding: 10px 26px;
    background-color: var(--primary-color);
    transition: all 0.3s ease-out 0s;

    svg {
        margin-left: 4px;
    }
}
.latest-view-btn:hover {
    background-color: var(--common-black);
}
.latest-item-img {
    position: relative;

    img {
        border-radius: 8px;
        width: 100%;
    }

    > span {
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--common-black);
        color: var(--white);
        display: inline-block;
        font-size: 1.5rem;
        font-weight: 500;
        padding: 4px 24px;
    }
}
.latest-item-content {
    margin-top: 22px;

    > h3 {
        font-size: 1.8rem;
        font-weight: 550;
        color: var(--common-black);
        margin-bottom: 8px;
    }

    > span {
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        color: #55585b;
        margin-bottom: 17px;

        > svg {
            color: var(--primary-color);
        }
    }

    > p {
        color: #55585b;
        font-size: 1.4rem;
        line-height: 1.8rem;
        margin-bottom: 30px;
    }

    button {
        background-color: transparent;
        font-size: 1.3rem;
        font-weight: 550;
        color: var(--common-black);
        border: 2px solid rgba(4, 9, 45, 0.1);
        padding: 8px 17px;
        border-radius: 6px;
        transition: all 0.3s ease-out 0s;
    }
}
.latest-item-content > button:hover {
    background-color: var(--primary-color);
    color: var(--white);
}
.instagram-item {
    position: relative;

    > img {
        border-radius: 8px;
        width: 100%;
    }

    button {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--white);
        width: 44px;
        height: 44px;
        border-radius: 6px;
        background-color: transparent;
        border: 2px solid hsla(0, 0%, 100%, 0.2);
        transition: all 0.3s ease-out 0s;
        z-index: 2;
        opacity: 0;
        visibility: hidden;
    }
}
.instagram-item > button:hover {
    background-color: var(--white);
    color: var(--common-black);
}
.instagram-item::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background-color: rgba(14, 16, 19, 0.5);
    transition: all 0.3s ease-out 0s;
    z-index: 1;
    opacity: 0;
}
.instagram-item:hover::after {
    opacity: 1;
}
.instagram-item:hover > button {
    opacity: 1;
    visibility: visible;
    top: 50%;
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .latest-view-btn {
        margin-bottom: 20px;
    }
    .heading h3 {
        font-size: 3rem;
    }
    .instagram-item {
        margin-bottom: 12px;
    }
}

/* Tablet And Mobile */
@media screen and (max-width: 1024px) {
    .heading > h3::before {
        display: none;
    }
}
</style>
