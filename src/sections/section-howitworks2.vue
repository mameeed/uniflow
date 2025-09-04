<template>
    <div class="sti">
        <div class="ccontainer">
            <div
                class="space-holder"
                :style="{height: spaceHolderHeight}">
                <div
                    class="sticky"
                    ref="sticky">
                    <div
                        ref="horizontal"
                        class="horizontal"
                        :style="{transform: `translateX(-${horizontalTranslate}px)`}">
                        <section
                            role="feed"
                            class="cards">
                            <article class="sample-card"></article>
                            <article class="sample-card"></article>
                            <article class="sample-card"></article>
                            <article class="sample-card"></article>
                            <article class="sample-card"></article>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            spaceHolderHeight: 0,
            horizontalTranslate: 0,
        };
    },
    methods: {
        calcDynamicHeight() {
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const objectWidth = this.$refs.horizontal.scrollWidth;
            return objectWidth - vw + vh + 150; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
        },
        updateSpaceHolderHeight() {
            this.spaceHolderHeight = this.calcDynamicHeight();
        },
        handleScroll() {
            const sticky = this.$refs.sticky;
            this.horizontalTranslate = sticky.getBoundingClientRect().top;
            // this.horizontalTranslate = sticky.offsetTop;
        },
    },
    mounted() {
        this.updateSpaceHolderHeight(); // Initialize the spaceHolderHeight
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.updateSpaceHolderHeight);
    },
    // beforeDestroy() {
    //     window.removeEventListener("scroll", this.handleScroll);
    //     window.removeEventListener("resize", this.updateSpaceHolderHeight);
    // },
};
</script>

<style scoped>
.sti {
    top: 0;
    position: sticky;
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
}
.ccontainer {
    width: 100%;
    min-height: 100vh;
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
}

.space-holder {
    position: relative;
    width: 100%;
}

.sticky {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
}

.horizontal {
    position: absolute;
    height: 100%;
    will-change: transform;
}

.cards {
    position: relative;
    height: 100%;
    padding: 0 0 0 150px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
}

.sample-card {
    position: relative;
    height: 300px;
    width: 500px;
    background-color: #111f30;
    margin-right: 75px;
    flex-shrink: 0;
}

/* Your CSS styles here */
</style>
