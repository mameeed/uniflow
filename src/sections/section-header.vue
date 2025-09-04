<template>
    <header>
        <div
            class="header"
            :class="{scrolled: isScrolled, opened: isMobile}">
            <div class="header__content container">
                <div class="header__logo">
                    <a
                        class="header__logo-link"
                        @click="$scrollToSection('introduction')">
                        <img
                            class="header__logo-image"
                            src="@/assets/icons/logo.svg"
                            alt="Unisale logo" />
                    </a>
                </div>

                <div class="header__nav">
                    <ul class="header__nav-links">
                        <li class="header__link">
                            <a
                                @click="$scrollToSection('engagement')"
                                class="header__link-txt">
                                Features
                            </a>
                        </li>
                        <li class="header__link">
                            <a
                                @click="$scrollToSection('howitworks')"
                                class="header__link-txt">
                                How it works
                            </a>
                        </li>
                        <li class="header__link">
                            <a
                                @click="$scrollToSection('joinus')"
                                class="header__link-txt">
                                Revenue share
                            </a>
                        </li>
                        <!-- <li class="header__link price">
                            <a class="header__link-txt">
                                UNIQ price:
                                <span>0.075$</span>
                            </a>
                        </li> -->
                    </ul>

                    <div class="header__contacts">
                        <a
                            class="header__contact"
                            href="#!">
                            <img
                                class="header__contact-image"
                                height="40"
                                src="@/assets/icons/social-7.svg"
                                alt="icon" />
                        </a>
                        <a
                            class="header__contact"
                            href="#!">
                            <img
                                class="header__contact-image"
                                height="40"
                                src="@/assets/icons/social-8.svg"
                                alt="icon" />
                        </a>
                    </div>
                </div>

                <div class="header__actions">
                    <CompButton
                        class="header__action-btn"
                        :unibtnText="'Start UniQuest'"
                        :unibtnLink="'https://t.me/uniquestio_bot'"
                        :unibtnTarget="true"
                        :unibtnLeftIcon="'icon-btn-star'"
                        :unibtnRightIcon="'icon-btn-star'" />
                </div>

                <div class="header__mobile">
                    <span
                        class="header__mobile-btn"
                        @click="openMobile"></span>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import CompButton from "@/components/comp-unibtn.vue";

export default {
    name: "sectionHeader",
    components: {
        CompButton,
    },
    data() {
        return {
            isScrolled: false,
            isMobile: false,
        };
    },
    mounted() {
        ["mousewheel", "scroll"].forEach((evt) => window.addEventListener(evt, this.handleScroll, false));
    },
    methods: {
        handleScroll() {
            let screenWidth = window.innerWidth;
            if (screenWidth < 577) return;

            if (window.pageYOffset > 100) {
                this.isScrolled = true;
            } else if (this.isScrolled && window.pageYOffset <= 100 && window.pageYOffset > 1) {
                return;
            } else {
                this.isScrolled = false;
            }
        },
        openMobile() {
            this.isMobile = !this.isMobile;
        },
    },
};
</script>
