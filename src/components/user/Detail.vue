<template>
    <div class="detail">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav style="--bs-breadcrumb-divider: ' '" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.42393 16H15.5759C15.6884 16 15.7962 15.9584 15.8758 15.8844C15.9553 15.8104 16 15.71 16 15.6054V6.29143C16 6.22989 15.9846 6.1692 15.9549 6.11422C15.9252 6.05923 15.8821 6.01147 15.829 5.97475L8.75305 1.07803C8.67992 1.02736 8.59118 1 8.5 1C8.40882 1 8.32008 1.02736 8.24695 1.07803L1.17098 5.97587C1.11791 6.01259 1.0748 6.06035 1.04511 6.11534C1.01543 6.17033 0.999976 6.23101 1 6.29255V15.6063C1.00027 15.7108 1.04504 15.8109 1.12451 15.8847C1.20398 15.9585 1.31165 16 1.42393 16ZM10.1464 15.2107H6.85241V10.6202H10.1464V15.2107ZM1.84866 6.48977L8.4999 1.88561L15.1517 6.48977V15.2107H10.9946V10.2256C10.9946 10.1209 10.95 10.0206 10.8704 9.94654C10.7909 9.87254 10.683 9.83096 10.5705 9.83096H6.42848C6.316 9.83096 6.20812 9.87254 6.12858 9.94654C6.04904 10.0206 6.00435 10.1209 6.00435 10.2256V15.2107H1.84806L1.84866 6.48977Z"
                                        fill="#55585B"
                                        stroke="#55585B"
                                        stroke-width="0.5"
                                    ></path>
                                </svg>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link to="/">Home</router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <span>{{ detailStore.productDetail.brandName }}</span>
                            </li>
                            <li class="breadcrumb-item">
                                <span>{{ detailStore.productDetail.cateName }}</span>
                            </li>
                            <li class="breadcrumb-item">
                                <span>{{ detailStore.productDetail.name }}</span>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <div class="container" style="padding-bottom: 115px; position: relative">
            <div class="row">
                <div class="col-xl-6 col-md-12 col-12">
                    <div class="product-detail-thumb">
                        <div class="nav-tab-thumb">
                            <button
                                class="nav-link"
                                v-for="(imageItem, index) in detailStore.productDetail.images"
                                :key="index"
                                :class="{ active: detailStore.imageItemActive === index }"
                                @click="detailStore.imageItemActive = index"
                            >
                                <img :src="imageItem.imageUrl" alt="" />
                            </button>
                        </div>
                        <div
                            class="product-detail-img"
                            v-for="(imageItem, index) in detailStore.productDetail.images"
                            :key="index"
                        >
                            <img
                                v-if="detailStore.imageItemActive === index"
                                :src="imageItem.imageUrl"
                                alt="img-detail"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-12 col-12">
                    <div class="product-detail-content">
                        <span class="category">{{ detailStore.productDetail.cateName }}</span>
                        <h3 class="name">{{ detailStore.productDetail.name }}</h3>
                        <div class="rate">
                            <span>in-stock</span>
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <p>(2 Reviews)</p>
                        </div>
                        <p class="description">
                            <span v-if="detailStore.descriptionText"
                                >Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams
                                Stereo Headset ha...</span
                            >
                            <span v-if="detailStore.showAllDescription">
                                Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams
                                Stereo Headset has replaced previous hybrid working standards. Industry-leading call
                                quality thanks to top-notch audio engineering. With this intelligent headset, you can
                                stay connected and productive from the first call of the day to the last train home.
                                With an ergonomic earcup design, this headset invented a brand-new dual-foam technology.
                                You will be comfortable from the first call to the last thanks to the re-engineered
                                leatherette ear cushion design that allows for better airflow. We can provide
                                exceptional noise isolation and the best all-day comfort by mixing firm foam for the
                                outer with soft foam for the interior of the ear cushions. So that you may receive
                                Active Noise-Cancellation (ANC) performance that is even greater in a headset that you
                                can wear for whatever length you wish. The headset also offers MS Teams Certifications
                                and other features like Busylight, Calls controls, Voice guiding, and Wireless range
                                (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS
                                Teams Stereo Headset offers professional-grade call performance that leads the industry,
                                yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone
                                boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading
                                call performance for which Jabra headsets are known. It complies with Microsoft's Open
                                Office criteria and is specially tuned for outstanding conversations in open-plan
                                workplaces and other loud environments when the microphone boom arm is lowered in
                                Performance Mode.
                            </span>
                            <span @click="detailStore.handleToggleDesc()" class="see">{{
                                detailStore.seeDescriptionText
                            }}</span>
                        </p>
                        <div class="price">
                            <span>
                                {{
                                    detailStore.productDetail.priceOld
                                        ? detailStore.productDetail.priceOld.toLocaleString()
                                        : "N/A"
                                }}đ
                            </span>
                            <span>
                                {{
                                    detailStore.productDetail.priceNew
                                        ? detailStore.productDetail.priceNew.toLocaleString()
                                        : "N/A"
                                }}đ
                            </span>
                        </div>
                        <div class="color">
                            <h4>Màu sắc</h4>
                            <div class="color-list">
                                <button
                                    v-for="(colorItem, index) in detailStore.productDetail.colors"
                                    :key="index"
                                    :class="{ active: detailStore.imageItemActive === index }"
                                    @click="detailStore.imageItemActive = index"
                                >
                                    <span :style="colorItem.color"></span>
                                </button>
                            </div>
                        </div>
                        <div class="action">
                            <h4>Số lượng</h4>
                            <div class="control">
                                <div class="quantity">
                                    <span class="quantity-minus" @click="cartStore.minusItemDetail">
                                        <font-awesome-icon :icon="['fas', 'minus']" />
                                    </span>
                                    <input type="text" :value="cartStore.quantityDetail" disabled />
                                    <span class="quantity-plus" @click="cartStore.plusItemDetail">
                                        <font-awesome-icon :icon="['fas', 'plus']" />
                                    </span>
                                </div>
                                <button class="add-cart" @click="cartStore.addToCart(detailStore.productDetail.id)">
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <span>
                                    <svg
                                        width="14"
                                        height="16"
                                        viewBox="0 0 14 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 3.16431H10.8622C12.0451 3.16431 12.9999 4.08839 12.9999 5.23315V7.52268"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M3.25177 0.985168L1 3.16433L3.25177 5.34354"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M12.9999 12.5983H3.13775C1.95486 12.5983 1 11.6742 1 10.5295V8.23993"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M10.748 14.7774L12.9998 12.5983L10.748 10.4191"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                    Compare
                                </span>
                            </li>
                            <li>
                                <span>
                                    <svg
                                        width="17"
                                        height="16"
                                        viewBox="0 0 17 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M2.33541 7.54172C3.36263 10.6766 7.42094 13.2113 8.49945 13.8387C9.58162 13.2048 13.6692 10.6421 14.6635 7.5446C15.3163 5.54239 14.7104 3.00621 12.3028 2.24514C11.1364 1.8779 9.77578 2.1014 8.83648 2.81432C8.64012 2.96237 8.36757 2.96524 8.16974 2.81863C7.17476 2.08487 5.87499 1.86999 4.69024 2.24514C2.28632 3.00549 1.68259 5.54167 2.33541 7.54172ZM8.50115 15C8.4103 15 8.32018 14.9784 8.23812 14.9346C8.00879 14.8117 2.60674 11.891 1.29011 7.87081C1.28938 7.87081 1.28938 7.8701 1.28938 7.8701C0.462913 5.33895 1.38316 2.15812 4.35418 1.21882C5.7492 0.776121 7.26952 0.97088 8.49895 1.73195C9.69029 0.993159 11.2729 0.789057 12.6401 1.21882C15.614 2.15956 16.5372 5.33966 15.7115 7.8701C14.4373 11.8443 8.99571 14.8088 8.76492 14.9332C8.68286 14.9777 8.592 15 8.50115 15Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M8.49945 13.8387L8.42402 13.9683L8.49971 14.0124L8.57526 13.9681L8.49945 13.8387ZM14.6635 7.5446L14.5209 7.4981L14.5207 7.49875L14.6635 7.5446ZM12.3028 2.24514L12.348 2.10211L12.3478 2.10206L12.3028 2.24514ZM8.83648 2.81432L8.92678 2.93409L8.92717 2.9338L8.83648 2.81432ZM8.16974 2.81863L8.25906 2.69812L8.25877 2.69791L8.16974 2.81863ZM4.69024 2.24514L4.73548 2.38815L4.73552 2.38814L4.69024 2.24514ZM8.23812 14.9346L8.16727 15.0668L8.16744 15.0669L8.23812 14.9346ZM1.29011 7.87081L1.43266 7.82413L1.39882 7.72081H1.29011V7.87081ZM1.28938 7.8701L1.43938 7.87009L1.43938 7.84623L1.43197 7.82354L1.28938 7.8701ZM4.35418 1.21882L4.3994 1.36184L4.39955 1.36179L4.35418 1.21882ZM8.49895 1.73195L8.42 1.85949L8.49902 1.90841L8.57801 1.85943L8.49895 1.73195ZM12.6401 1.21882L12.6853 1.0758L12.685 1.07572L12.6401 1.21882ZM15.7115 7.8701L15.5689 7.82356L15.5686 7.8243L15.7115 7.8701ZM8.76492 14.9332L8.69378 14.8011L8.69334 14.8013L8.76492 14.9332ZM2.19287 7.58843C2.71935 9.19514 4.01596 10.6345 5.30013 11.744C6.58766 12.8564 7.88057 13.6522 8.42402 13.9683L8.57487 13.709C8.03982 13.3978 6.76432 12.6125 5.49626 11.517C4.22484 10.4185 2.97868 9.02313 2.47795 7.49501L2.19287 7.58843ZM8.57526 13.9681C9.12037 13.6488 10.4214 12.8444 11.7125 11.729C12.9999 10.6167 14.2963 9.17932 14.8063 7.59044L14.5207 7.49875C14.0364 9.00733 12.7919 10.4 11.5164 11.502C10.2446 12.6008 8.9607 13.3947 8.42364 13.7093L8.57526 13.9681ZM14.8061 7.59109C15.1419 6.5613 15.1554 5.39131 14.7711 4.37633C14.3853 3.35729 13.5989 2.49754 12.348 2.10211L12.2576 2.38816C13.4143 2.75381 14.1347 3.54267 14.4905 4.48255C14.8479 5.42648 14.8379 6.52568 14.5209 7.4981L14.8061 7.59109ZM12.3478 2.10206C11.137 1.72085 9.72549 1.95125 8.7458 2.69484L8.92717 2.9338C9.82606 2.25155 11.1357 2.03494 12.2577 2.38821L12.3478 2.10206ZM8.74618 2.69455C8.60221 2.8031 8.40275 2.80462 8.25906 2.69812L8.08043 2.93915C8.33238 3.12587 8.67804 3.12163 8.92678 2.93409L8.74618 2.69455ZM8.25877 2.69791C7.225 1.93554 5.87527 1.71256 4.64496 2.10213L4.73552 2.38814C5.87471 2.02742 7.12452 2.2342 8.08071 2.93936L8.25877 2.69791ZM4.64501 2.10212C3.39586 2.49722 2.61099 3.35688 2.22622 4.37554C1.84299 5.39014 1.85704 6.55957 2.19281 7.58826L2.478 7.49518C2.16095 6.52382 2.15046 5.42513 2.50687 4.48154C2.86175 3.542 3.58071 2.7534 4.73548 2.38815L4.64501 2.10212ZM8.50115 14.85C8.43415 14.85 8.36841 14.8341 8.3088 14.8023L8.16744 15.0669C8.27195 15.1227 8.38645 15.15 8.50115 15.15V14.85ZM8.30897 14.8024C8.19831 14.7431 6.7996 13.9873 5.26616 12.7476C3.72872 11.5046 2.07716 9.79208 1.43266 7.82413L1.14756 7.9175C1.81968 9.96978 3.52747 11.7277 5.07755 12.9809C6.63162 14.2373 8.0486 15.0032 8.16727 15.0668L8.30897 14.8024ZM1.29011 7.72081C1.31557 7.72081 1.34468 7.72745 1.37175 7.74514C1.39802 7.76231 1.41394 7.78437 1.42309 7.8023C1.43191 7.81958 1.43557 7.8351 1.43727 7.84507C1.43817 7.8504 1.43869 7.85518 1.43898 7.85922C1.43913 7.86127 1.43923 7.8632 1.43929 7.865C1.43932 7.86591 1.43934 7.86678 1.43936 7.86763C1.43936 7.86805 1.43937 7.86847 1.43937 7.86888C1.43937 7.86909 1.43937 7.86929 1.43938 7.86949C1.43938 7.86959 1.43938 7.86969 1.43938 7.86979C1.43938 7.86984 1.43938 7.86992 1.43938 7.86994C1.43938 7.87002 1.43938 7.87009 1.28938 7.8701C1.13938 7.8701 1.13938 7.87017 1.13938 7.87025C1.13938 7.87027 1.13938 7.87035 1.13938 7.8704C1.13938 7.8705 1.13938 7.8706 1.13938 7.8707C1.13938 7.8709 1.13938 7.87111 1.13938 7.87131C1.13939 7.87173 1.13939 7.87214 1.1394 7.87257C1.13941 7.87342 1.13943 7.8743 1.13946 7.8752C1.13953 7.87701 1.13962 7.87896 1.13978 7.88103C1.14007 7.88512 1.14059 7.88995 1.14151 7.89535C1.14323 7.90545 1.14694 7.92115 1.15585 7.93861C1.16508 7.95672 1.18114 7.97896 1.20762 7.99626C1.2349 8.01409 1.26428 8.02081 1.29011 8.02081V7.72081ZM1.43197 7.82354C0.623164 5.34647 1.53102 2.26869 4.3994 1.36184L4.30896 1.0758C1.23531 2.04755 0.302663 5.33142 1.14679 7.91665L1.43197 7.82354ZM4.39955 1.36179C5.7527 0.932384 7.22762 1.12136 8.42 1.85949L8.57791 1.60441C7.31141 0.820401 5.74571 0.619858 4.30881 1.07585L4.39955 1.36179ZM8.57801 1.85943C9.73213 1.14371 11.2694 0.945205 12.5951 1.36192L12.685 1.07572C11.2763 0.632908 9.64845 0.842602 8.4199 1.60447L8.57801 1.85943ZM12.5948 1.36184C15.4664 2.27018 16.3769 5.34745 15.5689 7.82356L15.8541 7.91663C16.6975 5.33188 15.7617 2.04893 12.6853 1.07581L12.5948 1.36184ZM15.5686 7.8243C14.9453 9.76841 13.2952 11.4801 11.7526 12.7288C10.2142 13.974 8.80513 14.7411 8.69378 14.8011L8.83606 15.0652C8.9555 15.0009 10.3826 14.2236 11.9413 12.9619C13.4957 11.7037 15.2034 9.94602 15.8543 7.91589L15.5686 7.8243ZM8.69334 14.8013C8.6337 14.8337 8.56752 14.85 8.50115 14.85V15.15C8.61648 15.15 8.73201 15.1217 8.83649 15.065L8.69334 14.8013Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12.8384 6.93209C12.5548 6.93209 12.3145 6.71865 12.2911 6.43693C12.2427 5.84618 11.8397 5.34743 11.266 5.1656C10.9766 5.07361 10.8184 4.76962 10.9114 4.48718C11.0059 4.20402 11.3129 4.05023 11.6031 4.13934C12.6017 4.45628 13.3014 5.32371 13.3872 6.34925C13.4113 6.64606 13.1864 6.90622 12.8838 6.92993C12.8684 6.93137 12.8538 6.93209 12.8384 6.93209Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M12.8384 6.93209C12.5548 6.93209 12.3145 6.71865 12.2911 6.43693C12.2427 5.84618 11.8397 5.34743 11.266 5.1656C10.9766 5.07361 10.8184 4.76962 10.9114 4.48718C11.0059 4.20402 11.3129 4.05023 11.6031 4.13934C12.6017 4.45628 13.3014 5.32371 13.3872 6.34925C13.4113 6.64606 13.1864 6.90622 12.8838 6.92993C12.8684 6.93137 12.8538 6.93209 12.8384 6.93209"
                                            stroke="currentColor"
                                            stroke-width="0.3"
                                        ></path>
                                    </svg>
                                    Add Wishlist
                                </span>
                            </li>
                            <li>
                                <span>
                                    <svg
                                        width="17"
                                        height="16"
                                        viewBox="0 0 17 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.575 12.6927C8.775 12.6927 8.94375 12.6249 9.08125 12.4895C9.21875 12.354 9.2875 12.1878 9.2875 11.9907C9.2875 11.7937 9.21875 11.6275 9.08125 11.492C8.94375 11.3565 8.775 11.2888 8.575 11.2888C8.375 11.2888 8.20625 11.3565 8.06875 11.492C7.93125 11.6275 7.8625 11.7937 7.8625 11.9907C7.8625 12.1878 7.93125 12.354 8.06875 12.4895C8.20625 12.6249 8.375 12.6927 8.575 12.6927ZM8.55625 5.0638C8.98125 5.0638 9.325 5.17771 9.5875 5.40553C9.85 5.63335 9.98125 5.92582 9.98125 6.28294C9.98125 6.52924 9.90625 6.77245 9.75625 7.01258C9.60625 7.25272 9.3625 7.5144 9.025 7.79763C8.7 8.08087 8.44063 8.3795 8.24688 8.69352C8.05313 9.00754 7.95625 9.29385 7.95625 9.55246C7.95625 9.68792 8.00938 9.79567 8.11563 9.87572C8.22188 9.95576 8.34375 9.99578 8.48125 9.99578C8.63125 9.99578 8.75625 9.94653 8.85625 9.84801C8.95625 9.74949 9.01875 9.62635 9.04375 9.47857C9.08125 9.23228 9.16562 9.0137 9.29688 8.82282C9.42813 8.63195 9.63125 8.42568 9.90625 8.20402C10.2812 7.89615 10.5531 7.58829 10.7219 7.28042C10.8906 6.97256 10.975 6.62775 10.975 6.246C10.975 5.59333 10.7594 5.06996 10.3281 4.67589C9.89688 4.28183 9.325 4.0848 8.6125 4.0848C8.1375 4.0848 7.7 4.17716 7.3 4.36187C6.9 4.54659 6.56875 4.81751 6.30625 5.17463C6.20625 5.31009 6.16563 5.44863 6.18438 5.59025C6.20313 5.73187 6.2625 5.83962 6.3625 5.91351C6.5 6.01202 6.64688 6.04281 6.80313 6.00587C6.95937 5.96892 7.0875 5.88272 7.1875 5.74726C7.35 5.5256 7.54688 5.35627 7.77813 5.23929C8.00938 5.1223 8.26875 5.0638 8.55625 5.0638ZM8.5 15.7775C7.45 15.7775 6.46875 15.5897 5.55625 15.2141C4.64375 14.8385 3.85 14.3182 3.175 13.6532C2.5 12.9882 1.96875 12.2062 1.58125 11.3073C1.19375 10.4083 1 9.43547 1 8.38873C1 7.35431 1.19375 6.38762 1.58125 5.48866C1.96875 4.58969 2.5 3.80772 3.175 3.14273C3.85 2.47775 4.64375 1.95438 5.55625 1.57263C6.46875 1.19088 7.45 1 8.5 1C9.5375 1 10.5125 1.19088 11.425 1.57263C12.3375 1.95438 13.1313 2.47775 13.8063 3.14273C14.4813 3.80772 15.0156 4.58969 15.4094 5.48866C15.8031 6.38762 16 7.35431 16 8.38873C16 9.43547 15.8031 10.4083 15.4094 11.3073C15.0156 12.2062 14.4813 12.9882 13.8063 13.6532C13.1313 14.3182 12.3375 14.8385 11.425 15.2141C10.5125 15.5897 9.5375 15.7775 8.5 15.7775ZM8.5 14.6692C10.2625 14.6692 11.7656 14.0534 13.0094 12.822C14.2531 11.5905 14.875 10.1128 14.875 8.38873C14.875 6.6647 14.2531 5.18695 13.0094 3.95549C11.7656 2.72404 10.2625 2.10831 8.5 2.10831C6.7125 2.10831 5.20312 2.72404 3.97188 3.95549C2.74063 5.18695 2.125 6.6647 2.125 8.38873C2.125 10.1128 2.74063 11.5905 3.97188 12.822C5.20312 14.0534 6.7125 14.6692 8.5 14.6692Z"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            stroke-width="0.3"
                                        ></path>
                                    </svg>
                                    Ask a question
                                </span>
                            </li>
                        </ul>
                        <div class="query">
                            <div class="query-item">
                                SKU:
                                <span>NVB7SDVX45</span>
                            </div>
                            <div class="query-item">
                                Category:
                                <span>Headphones</span>
                            </div>
                            <div class="query-item">
                                Tag:
                                <span>Android</span>
                            </div>
                        </div>
                        <div class="social">
                            <span>Share:</span>
                            <a href="#">
                                <font-awesome-icon :icon="['fab', 'facebook-f']" />
                            </a>
                            <a href="#">
                                <font-awesome-icon :icon="['fab', 'twitter']" />
                            </a>
                            <a href="#">
                                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                            </a>
                            <a href="#">
                                <font-awesome-icon :icon="['fab', 'vimeo-v']" />
                            </a>
                        </div>
                        <div class="message">
                            <span> 30 days easy returns </span>
                            <span> Order yours before 2.30pm for same day dispatch </span>
                        </div>
                        <div class="payment">
                            <p>Guaranteed safe & secure checkout</p>
                            <img src="https://shofy-nuxt.vercel.app/img/product/icons/payment-option.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Message -->
            <div class="message-add-cart" v-if="cartStore.showMessageAddCart">
                <font-awesome-icon :icon="['far', 'circle-check']" />
                <span>Thêm giỏ hàng thành công!</span>
            </div>
        </div>

        <!-- Related Products -->
        <div class="container" style="padding: 95px 0 120px">
            <div class="row">
                <h2 class="relate-heading">Những sảm phẩm tương tự</h2>
                <div
                    v-for="item in detailStore.productRelateds"
                    :key="item.id"
                    class="col-xl-3 col-md-4 col-6"
                    style="padding: 0 12px"
                >
                    <ProductItem :product="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useDetail } from "@/store/detail";
import { useCart } from "@/store/cart";
import ProductItem from "@/components/ProductItem.vue";
export default {
    name: "detail-wrapper",
    components: { ProductItem },
    setup() {
        const detailStore = useDetail();
        const cartStore = useCart();

        const productDetail = localStorage.getItem("productDetail");
        if (productDetail) {
            detailStore.productDetail = JSON.parse(productDetail);
        }

        // list product related
        detailStore.getRelated();

        return { detailStore, cartStore };
    },
};
</script>

<style lang="scss" scoped>
.message-add-cart {
    position: absolute;
    top: 26%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--common-black);
    padding: 24px;
    font-size: 1.6rem;
    background-color: var(--white);
    box-shadow: 0 1px 1px #13e708;
    > svg {
        color: #13e708;
        margin-right: 8px;
    }
}
.breadcrumb {
    padding: 50px 0 20px;
    align-items: center;

    .breadcrumb-item {
        span {
            position: relative;
            color: #55585b;
            font-size: 1.7rem;
            padding-left: 6px;
            font-family: Jost sans-serif;
        }
        a {
            color: var(--primary-color);
            font-size: 1.7rem;
            font-family: Jost sans-serif;
        }
    }
}
.breadcrumb .breadcrumb-item span::before {
    position: absolute;
    content: "";
    top: 50%;
    transform: translateY(-50%);
    left: -2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #55585b;
}
.product-detail-thumb {
    display: flex;
    position: sticky;
    top: 30px;

    .nav-tab-thumb {
        margin-right: 10px;

        .nav-link {
            width: 78px;
            height: 100px;
            background-color: #f4f5f7;
            margin-bottom: 10px;
            transition: all 0.3s ease-out 0s;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .product-detail-img {
        background-color: #f4f5f7;
    }
}
.nav-tab-thumb .nav-link.active {
    border: 1px solid var(--common-black);
}
.product-detail-content {
    padding-left: 112px;
    > span {
        font-size: 1.6rem;
        color: #55585b;
    }
    > h3 {
        font-size: 3.2rem;
        color: var(--common-black);
        margin-bottom: 15px;
        font-weight: 550;
    }
    .rate {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        > span {
            display: inline-block;
            font-size: 1.5rem;
            line-height: 1;
            padding: 4px 12px;
            background-color: rgba(9, 137, 255, 0.06);
            color: var(--primary-color);
            margin-right: 8px;
        }
        > svg {
            width: 13px;
            height: 12px;
            color: var(--yellow);
            margin-right: 2px;
        }
        > p {
            margin: 0 0 0 8px;
            font-size: 1.4rem;
            color: #55585b;
        }
    }
    .description {
        font-size: 1.6rem;
        line-height: 1.7;
        color: #55585b;
        margin-bottom: 10px;
        font-family: Jost sans-serif;
        transition: all 0.3s ease-out 0s;

        .see {
            font-weight: 550;
            color: var(--primary-color);
            cursor: pointer;
        }
    }
    .price {
        margin-bottom: 20px;

        > span:nth-child(1) {
            color: #767a7d;
            font-size: 1.6rem;
            text-decoration-line: line-through;
        }
        > span:nth-child(2) {
            color: var(--common-black);
            font-size: 2.4rem;
            font-weight: 500;
            margin-left: 3px;
        }
    }
    .color {
        > h4 {
            font-size: 1.5rem;
            color: var(--common-black);
            margin-bottom: 4px;
        }
        .color-list {
            button {
                position: relative;
                display: inline-block;
                margin-right: 5px;
                border-radius: 50%;
                height: 26px;
                width: 26px;
                border: none;
                transition: box-shadow 0.2s linear 0s;

                > span {
                    position: absolute;
                    background-color: var(--white);
                    height: 100%;
                    width: 100%;
                    left: 50%;
                    top: 50%;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    transition: all 0.2s linear 0s;
                }
            }
        }
    }
    .action {
        margin-top: 35px;

        > h4 {
            font-size: 1.6rem;
            margin-bottom: 13px;
            font-family: Jost sans-serif;
        }
        .control {
            display: flex;
            align-items: center;

            .quantity {
                position: relative;
                width: 122px;
                margin-right: 15px;
                background-color: #f3f5f6;

                > span {
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    top: 50%;
                    font-size: 1.4rem;
                    text-align: center;
                    cursor: pointer;
                    transform: translateY(-50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .quantity-minus {
                    left: 14px;
                }
                .quantity-plus {
                    right: 14px;
                }
                > input {
                    font-size: 1.6rem;
                    height: 46px;
                    width: 100%;
                    color: var(--common-black);
                    border: none;
                    background-color: transparent;
                    padding: 0 30px;
                    text-align: center;
                }
            }
            > button {
                height: 46px;
                flex: 1;
                font-family: Jost sans-serif;
                font-size: 1.7rem;
                color: #55585b;
                background-color: var(--white);
                border: 1px solid #e0e2e3;
                transition: all 0.3s ease-out 0s;
            }
        }
    }
    > ul {
        display: flex;
        align-items: center;
        margin: 20px 0 25px;
        padding-bottom: 9px;
        border-bottom: 1px solid #eaebed;

        > li {
            margin-right: 10px;
            margin-bottom: 10px;

            span {
                display: flex;
                align-items: center;
                font-size: 1.6rem;
                color: #55585b;
                cursor: pointer;
                transition: all 0.3s ease-out 0s;

                svg {
                    margin-right: 4px;
                }
            }
        }
    }
    .query {
        margin-bottom: 22px;

        .query-item {
            font-size: 1.5rem;
            color: var(--common-black);
            margin-bottom: 3px;

            span {
                color: #55585b;
            }
        }
    }
    .social {
        display: flex;
        align-items: center;
        margin-bottom: 22px;

        > span {
            font-size: 1.5rem;
            color: #55585b;
        }
        > a {
            display: inline-block;
            height: 38px;
            width: 38px;
            line-height: 40px;
            margin-left: 6px;
            text-align: center;
            border: 1px solid #e6e7e8;
            border-radius: 50%;
            transition: all 0.3s ease-out 0s;
            color: #55585b;
            svg {
                font-size: 1.4rem;
            }
        }
    }
    .message {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;

        > span {
            position: relative;
            padding-left: 25px;
            font-size: 1.5rem;
            color: #55585b;
            font-family: Jost sans-serif;
        }
    }
    .payment {
        display: flex;
        align-items: center;
        background-color: #f3f5f6;
        padding: 18px 30px;
        > p {
            font-size: 1.6rem;
            color: #55585b;
            margin-right: 46px;
            margin-bottom: 0;
            line-height: 17px;
        }
    }
}
.color-list > button.active {
    box-shadow: 0 1px 2px rgba(1, 15, 28, 0.2);
}
.color-list > button.active > span {
    transform: translate(-50%, -50%) scale(0.7) !important;
}
.color-list > button > span:hover {
    box-shadow: 0 1px 2px rgba(1, 15, 28, 0.2);
    transform: translate(-50%, -50%) scale(0.7) !important;
}

.action .control > button:hover {
    background-color: var(--primary-color);
    color: var(--white);
}
.product-detail-content > ul > li span:hover {
    color: var(--primary-color);
}
.product-detail-content .social a:hover {
    background-color: var(--primary-color);
    color: var(--white);
}
.product-detail-content .message span::before {
    position: absolute;
    content: url("https://shofy-nuxt.vercel.app/img/product/icons/check-3.svg");
    height: 18px;
    width: 18px;
    top: 4px;
    left: 0;
    line-height: 16px;
    text-align: center;
    transition: all 0.2s linear 0s;
}
.relate-heading {
    font-size: 4rem;
    color: var(--common-black);
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
}
</style>

<style lang="scss" scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .breadcrumb .breadcrumb-item a {
        font-size: 1.5rem;
    }
    .breadcrumb .breadcrumb-item span {
        font-size: 1.5rem;
    }
    .product-detail-thumb {
        margin-bottom: 30px;
    }
    .product-detail-img {
        img {
            width: 328px;
        }
    }
    .detail-content-mobile {
        padding-left: 0;
    }
    .product-detail-content {
        padding-left: 6px;
    }
    .payment {
        align-items: flex-start;
        flex-direction: column;
    }
}
</style>
