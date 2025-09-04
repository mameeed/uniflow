<template>
    <a
        :href="unibtnLink"
        :target="{_blank: unibtnTarget}"
        class="unibtn hoverable">
        <img
            v-if="unibtnLeftIcon"
            class="unibtn__icon left"
            :src="require(`@/assets/icons/${unibtnLeftIcon}.svg`)"
            alt="button icon" />
        <p class="unibtn__text">{{ unibtnText }}</p>
        <img
            v-if="unibtnRightIcon"
            class="unibtn__icon right"
            :src="require(`@/assets/icons/${unibtnRightIcon}.svg`)"
            alt="button icon" />
    </a>
</template>

<script>
export default {
    name: "compButton",
    props: {
        unibtnText: {
            type: String,
            required: true,
        },
        unibtnLink: {
            type: String,
            default: "/",
        },
        unibtnLeftIcon: {
            type: String,
        },
        unibtnRightIcon: {
            type: String,
        },
        unibtnTarget: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
