<template>
    <section
        id="joinus"
        class="joinus">
        <div class="joinus__content container">
            <div class="joinus__card">
                <div class="joinus__card-body">
                    <h1 class="joinus__card-title">
                        Ready to
                        <span>Boost</span>
                        Engagement?
                    </h1>
                    <p class="joinus__card-subtitle">
                        Join UniQuest today and transform your
                        <span>Telegram</span>
                        community experience!
                    </p>
                    <CompButton
                        class="header__action-btn"
                        :unibtnText="'Get Started'"
                        :unibtnLink="'https://t.me/uniquestio_bot'"
                        :unibtnTarget="true"
                        :unibtnLeftIcon="'icon-btn-star'"
                        :unibtnRightIcon="'icon-btn-star'" />
                </div>

                <div class="joinus__card-qr">
                    <img
                        class="joinus__card-qrimg"
                        src="@/assets/icons/qr.svg"
                        alt="qr" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CompButton from "@/components/comp-unibtn.vue";

export default {
    name: "sectionJoinus",
    components: {
        CompButton,
    },
};
</script>
