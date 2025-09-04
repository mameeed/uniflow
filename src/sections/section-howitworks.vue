<template>
    <section
        id="howitworks"
        class="howitworks">
        <div class="howitworks__content container">
            <h3 class="howitworks__title">How it works</h3>

            <div class="howitworks__slider">
                <div
                    ref="howitworks__swiper"
                    class="howitworks__swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide hwtslide">
                            <div class="hwtslide__content">
                                <h2 class="hwtslide__title">Launch</h2>
                                <p class="hwtslide__subtitle">
                                    Kickstart your campaign by going to
                                    <a
                                        class="hoverable"
                                        href="https://t.me/uniquestio_bot"
                                        target="_blank">
                                        @UniQuestio_bot
                                    </a>
                                    on Telegram.
                                </p>
                            </div>
                        </div>
                        <div class="swiper-slide hwtslide">
                            <div class="hwtslide__content">
                                <h2 class="hwtslide__title">Connect</h2>
                                <p class="hwtslide__subtitle">Integrate the bot seamlessly into your Telegram community.</p>
                            </div>
                        </div>
                        <div class="swiper-slide hwtslide">
                            <div class="hwtslide__content">
                                <h2 class="hwtslide__title">Create</h2>
                                <p class="hwtslide__subtitle">Craft captivating quests with clear, easy-to-follow instructions.</p>
                            </div>
                        </div>
                        <div class="swiper-slide hwtslide">
                            <div class="hwtslide__content">
                                <h2 class="hwtslide__title">Reward</h2>
                                <p class="hwtslide__subtitle">Set enticing rewards for your top community contributors.</p>
                            </div>
                        </div>
                        <div class="swiper-slide hwtslide">
                            <div class="hwtslide__content">
                                <h2 class="hwtslide__title">Engage</h2>
                                <p class="hwtslide__subtitle">Watch your community flourish with increased interaction and lively engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="howitworks__slider-navigation">
                    <span class="howitworks__slider-btn howitworks__slider-prev hoverable">
                        <img
                            src="@/assets/icons/arrow-down-accent.svg"
                            alt="icon" />
                    </span>
                    <span class="howitworks__slider-btn howitworks__slider-next hoverable">
                        <img
                            src="@/assets/icons/arrow-down-accent.svg"
                            alt="icon" />
                    </span>
                </div>

                <div class="howitworks__slider-pagination"></div>
            </div>
        </div>
    </section>
</template>

<script>
import Swiper, {Navigation, Pagination, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default {
    mounted() {
        new Swiper(this.$refs.howitworks__swiper, {
            modules: [Navigation, Pagination, Autoplay],
            loop: false,
            slidesPerView: 1,
            spaceBetween: 20,

            pagination: {
                el: ".howitworks__slider-pagination",
                type: "bullets",
            },
            navigation: {
                nextEl: ".howitworks__slider-next",
                prevEl: ".howitworks__slider-prev",
            },

            breakpoints: {
                576: {
                    spaceBetween: 40,
                },
            },
        });
    },
};
</script>
