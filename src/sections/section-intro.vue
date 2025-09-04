<template>
    <section
        id="introduction"
        class="introduction">
        <div class="introduction__back">
            <CompIntrobg />
        </div>
        <div class="introduction__content container">
            <div class="introduction__texts">
                <h1
                    v-parallax="-0.2"
                    class="introduction__texts-title">
                    ACTIVATE YOUR
                    <span>COMMUNITY</span>
                </h1>
                <p
                    v-parallax="-0.4"
                    class="introduction__texts-subtitle">
                    Elevate your
                    <span>Telegram</span>
                    Community’s Engagement with Interactive Quests & Rewards
                </p>
            </div>
            <div class="introduction__actions">
                <a
                    class="introduction__actions-btn hoverable"
                    @click="$scrollToSection('engagement')">
                    <img
                        src="@/assets/icons/arrow-down-accent.svg"
                        alt="icon arrow" />
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import CompIntrobg from "@/components/comp-introbg.vue";
export default {
    name: "sectionIntro",
    components: {
        CompIntrobg,
    },
};
</script>
