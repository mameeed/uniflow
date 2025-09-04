<template>
    <section
        id="communities"
        class="communities">
        <div class="communities__content container">
            <div class="communities__titling">
                <h2
                    v-parallax="-0.13"
                    class="communities__titling-title">
                    Communities using UniFlow
                </h2>
            </div>
            <div class="communities__main">
                <div class="communities__main-cards">
                    <div class="communities__card">
                        <span></span>
                        <span></span>
                    </div>
                    <div class="communities__card">
                        <span></span>
                        <span></span>
                    </div>
                    <div class="communities__card">
                        <span></span>
                        <span></span>
                    </div>
                    <div class="communities__card">
                        <span></span>
                        <span></span>
                    </div>
                    <div class="communities__card md-none">
                        <span></span>
                        <span></span>
                    </div>
                    <div class="communities__card md-none">
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div
                    v-for="(item, index) in parallaxes"
                    :key="index"
                    :data-depth="item.depth"
                    class="communities__parallaxer-holder">
                    <img
                        class="communities__parallaxer"
                        :class="`item_${index + 1}`"
                        :src="require(`@/assets/icons/${item.image}`)"
                        alt="coming soon" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import Parallax from "parallax-js";

export default {
    name: "sectionCommunities",
    data() {
        return {
            parallaxes: [
                {
                    image: "parallaxer-1.png",
                    depth: 0.7,
                },
                {
                    image: "parallaxer-2.png",
                    depth: 0.1,
                },
                {
                    image: "parallaxer-3.png",
                    depth: 0.2,
                },
                {
                    image: "parallaxer-4.png",
                    depth: 0.9,
                },
                {
                    image: "parallaxer-5.png",
                    depth: 1.1,
                },
                {
                    image: "parallaxer-6.png",
                    depth: 0.2,
                },
                {
                    image: "parallaxer-7.png",
                    depth: 0.1,
                },
                {
                    image: "parallaxer-8.png",
                    depth: 0.3,
                },
            ],
        };
    },
    mounted() {
        // this.parallax = new Parallax(this.$refs.cmparallax, {});
    },
    beforeDestroy() {
        // this.parallax.destroy();
    },
};
</script>
