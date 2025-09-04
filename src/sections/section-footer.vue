<template>
    <footer class="footer">
        <div class="footer__main">
            <div class="footer__content container">
                <div
                    v-if="isAdditional"
                    class="footer__address">
                    <div class="footer__address-copytext">
                        Address:
                        <div class="footer__address-copybtn">
                            <CompCopyButton :copyToken="'copied value'" />
                        </div>
                    </div>
                    <div class="footer__address-text">0x95ad61b0dsaa150ds234gfjhd79d...</div>
                </div>
                <div
                    v-else
                    class="footer__address">
                    <a
                        href="mailto:info@uniquest.io"
                        target="_blank"
                        class="footer__address-text hoverable">
                        info@uniquest.io
                    </a>
                </div>

                <div class="footer__logo">
                    <img
                        class="footer__logo-image"
                        height="100"
                        src="@/assets/icons/logo-vertical.svg"
                        alt="unisale logo" />

                    <p
                        v-if="isAdditional"
                        class="footer__logo-token">
                        Token price:
                        <span>0.075$</span>
                    </p>
                </div>

                <div class="footer__info">
                    <a
                        v-if="isAdditional"
                        class="footer__info-link hoverable"
                        href="mailto:info@uniquest.io">
                        info@uniquest.io
                    </a>
                    <p class="footer__info-text">© 2023 UniQuest.io | All Rights Reserved</p>
                </div>
            </div>
        </div>
        <div class="footer__socials container">
            <a
                v-for="i in 8"
                :key="i"
                :href="soicals[i - 1]"
                target="_blank"
                class="footer__social hoverable">
                <img
                    class="footer__social-image"
                    height="40"
                    :src="require(`@/assets/icons/social-${i}.svg`)"
                    alt="icon" />
            </a>
        </div>
    </footer>
</template>

<script>
import CompCopyButton from "@/components/comp-copybtn.vue";

export default {
    name: "sectionFooter",
    components: {
        CompCopyButton,
    },
    data() {
        return {
            isAdditional: false,
            soicals: ["https://etherscan.io/", "https://coinmarketcap.com/", "https://www.coingecko.com/", "https://docs.uniquest.io", "https://www.dextools.io/", "https://uniswap.org/", "https://twitter.com/uniquest_io", "https://t.me/uniquestportal"],
        };
    },
};
</script>
