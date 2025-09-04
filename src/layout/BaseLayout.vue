<template>
    <div>
        <MainHeader class="unisale__header" />
        <RouterView class="unisale__body" />
        <MainFooter class="unisale__footer" />
    </div>
</template>

<script>
import MainHeader from "@/sections/section-header.vue";
import MainFooter from "@/sections/section-footer.vue";

export default {
    name: "unisaleLayout",
    components: {
        MainHeader,
        MainFooter,
    },
};
</script>
