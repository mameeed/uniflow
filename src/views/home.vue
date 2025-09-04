<template>
    <main>
        <SectionIntro />
        <SectionEngagement />
        <SectionCommunities />
        <SectionHowitworks />
        <SectionRewarding />
        <Sectionjoinus />
    </main>
</template>

<script>
import SectionIntro from "@/sections/section-intro.vue";
import SectionEngagement from "@/sections/section-engagement.vue";
import SectionHowitworks from "@/sections/section-howitworks.vue";
import SectionCommunities from "@/sections/section-communities.vue";
import SectionRewarding from "@/sections/section-rewarding.vue";
import Sectionjoinus from "@/sections/section-joinus.vue";

export default {
    name: "pageHome",
    components: {
        SectionIntro,
        SectionEngagement,
        SectionCommunities,
        SectionRewarding,
        Sectionjoinus,
        SectionHowitworks,
    },
};
</script>
