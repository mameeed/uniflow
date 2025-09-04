<template>
    <BaseLayout>
        <RouterView />
    </BaseLayout>
</template>

<script>
import BaseLayout from "@/layout/BaseLayout.vue";

export default {
    name: "App",
    components: {
        BaseLayout,
    },
    mounted() {
        this.setCursor2();
    },
    methods: {
        setCursor2() {
            const script = document.createElement("script");

            script.src = "https://umkamatov.gitlab.io/unisale/cursor2.js";
            script.async = true;

            script.onload = () => {
                const htmlElement = document.documentElement;
                htmlElement.classList.add("customcursor");
            };

            script.onerror = (error) => {
                console.error("Error loading custom script:", error);
            };
            document.head.appendChild(script);
        },
    },
};
</script>
