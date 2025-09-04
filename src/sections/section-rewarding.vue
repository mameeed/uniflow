<template>
    <section
        id="rewarding"
        class="rewarding">
        <img
            v-parallax="-1.5"
            class="rewarding__bg-unicorn"
            src="@/assets/icons/bg-pony.svg"
            alt="pony" />
        <div class="rewarding__content container">
            <h1
                v-parallax="-0.1"
                class="rewarding__title">
                Rewarding
                <span>$UNIQ</span>
                Holders
            </h1>
            <div class="rewarding__campaign">
                <div class="rewarding__campaign-image">
                    <img
                        class="rewarding__campaign-imagepony"
                        src="@/assets/icons/pony.svg"
                        alt="pony" />
                </div>
                <div
                    v-parallax="-0.01"
                    class="rewarding__campaign-desc">
                    <h2 class="rewarding__campaign-title">Mega Campaign</h2>
                    <p class="rewarding__campaign-text">Participate in our exclusive weekly Mega Campaign, crafted for the most engaging UNIQ holders. Fueled by 1% of the 5% tax collected, participate in Quests, earn Points and win Rewards!</p>
                </div>
            </div>
            <div class="rewarding__cards">
                <div
                    v-parallax="-0.02"
                    class="rewarding__card">
                    <div class="rewarding__card-titling">
                        <div class="rewarding__card-icon yellow">
                            <img
                                class="rewarding__card-iconfile"
                                src="@/assets/icons/star-white.svg"
                                alt="icon" />
                        </div>
                        <h3 class="rewarding__card-title">Subscription</h3>
                    </div>
                    <p class="rewarding__card-text">To access the full array of UniFlow's features, Telegram community owners can subscribe, while also enjoying free features available for trial.</p>
                </div>
                <div
                    v-parallax="-0.04"
                    class="rewarding__card">
                    <div class="rewarding__card-titling">
                        <div class="rewarding__card-icon">
                            <img
                                class="rewarding__card-iconfile"
                                src="@/assets/icons/star-white.svg"
                                alt="icon" />
                        </div>
                        <h3 class="rewarding__card-title">Revenue Share</h3>
                    </div>
                    <p class="rewarding__card-text">The collected revenue generated through the bot subscription will be shared with $UNIQ holders. As the UniFlow community grows, so does the advantage for our token holders.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "sectionRewarding",
};
</script>
