<template>
    <section
        id="engagement"
        class="engagement">
        <div class="engagement__content container">
            <div class="engagement__titling">
                <div
                    v-parallax="-0.05"
                    class="engagement__titling-icon">
                    <img
                        class="engagement__titling-iconfile"
                        src="@/assets/icons/icon-star-accent.svg"
                        alt="icon star" />
                </div>

                <h2
                    v-parallax="-0.1"
                    class="engagement__titling-title">
                    Engagement made Fun
                </h2>
            </div>
            <div class="engagement__list">
                <div
                    v-for="(item, index) in engagements"
                    :key="'card' + index"
                    class="engagement__item">
                    <img
                        v-parallax="0.02"
                        class="engagement__item-emoji"
                        :src="item.emoji"
                        alt="Emoji icon" />

                    <h3 class="engagement__item-title">{{ item.title }}</h3>
                    <p class="engagement__item-desc">{{ item.desc }}</p>
                </div>
            </div>
            <CompButton
                class="engagement__btn"
                :unibtnLink="'https://t.me/mukhammadumid'"
                :unibtnTarget="true"
                :unibtnText="'Start UniFlow'"
                :unibtnLeftIcon="'icon-btn-star'"
                :unibtnRightIcon="'icon-btn-star'" />
        </div>
    </section>
</template>

<script>
import emojiQuests from "@/assets/images/emoji-quests.png";
import emojiRewards from "@/assets/images/emoji-rewards.png";
import emojiIntegration from "@/assets/images/emoji-integration.png";
import emojiCommunity from "@/assets/images/emoji-community.png";
import CompButton from "@/components/comp-unibtn.vue";

export default {
    name: "sectionEngagement",
    components: {CompButton},
    data() {
        return {
            engagements: [
                {
                    emoji: emojiQuests,
                    title: "Quests",
                    desc: "Craft interactive and captivating Quests that deeply engage your Telegram community",
                },
                {
                    emoji: emojiRewards,
                    title: "Rewards",
                    desc: "Drive active participation by providing enticing Rewards that fuel motivation and enthusiasm",
                },
                {
                    emoji: emojiIntegration,
                    title: "Integration",
                    desc: "Effortlessly integrate the UniFlow bot into your community's Telegram group",
                },
                {
                    emoji: emojiCommunity,
                    title: "Community",
                    desc: "Watch your community come alive as members take on quests, collaborate, and earn rewards",
                },
            ],
        };
    },
};
</script>
