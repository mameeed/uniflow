<template>
    <div class="unisalebg">
        <span
            v-for="item in particles"
            :key="item"
            :data-index="item"
            class="unisalebg__span"></span>
    </div>
</template>

<script>
export default {
    name: "compIntrobg",
    data() {
        return {
            particles: 544,
            colors: ["red", "yellow", "green", "blue"],
        };
    },
    mounted() {
        this.starInterval = setInterval(this.addStarAnimateClass, 100);
        this.blockInterval = setInterval(this.addBlockAnimateClass, 650);
    },
    methods: {
        addStarAnimateClass() {
            const elements = Array.from(document.querySelectorAll(".unisalebg__span"));
            const element = elements[Math.floor(Math.random() * elements.length)];
            const elementColor = this.colors[Math.floor(Math.random() * 6)];
            element.classList.add("staranimate", elementColor);

            setTimeout(() => {
                element.classList.remove("staranimate");
                element.classList.remove(elementColor);
            }, 3000);
        },
        addBlockAnimateClass() {
            const elements = Array.from(document.querySelectorAll(".unisalebg__span"));
            const element = elements[Math.floor(Math.random() * elements.length)];
            const elementColor = this.colors[Math.floor(Math.random() * 6)];
            element.classList.add("blockanimate", elementColor);

            setTimeout(() => {
                element.classList.remove("blockanimate");
                element.classList.remove(elementColor);
            }, 3000);
        },
    },
};
</script>
