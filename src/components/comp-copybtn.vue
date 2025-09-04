<template>
    <button
        class="copybutton hoverable"
        :class="{animate: isAnimating}"
        @click="copyToClipboard">
        <div class="copybutton__content">
            <div class="copybutton__copier">
                Copy
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 18 18"
                    fill="none">
                    <path
                        d="M7.39132 4.83333C7.65576 2.31558 8.86869 1.5 11.9167 1.5C15.4216 1.5 16.5 2.57843 16.5 6.08333C16.5 9.13133 15.6844 10.3443 13.1667 10.6087M1.5 11.9167C1.5 8.41176 2.57843 7.33333 6.08333 7.33333C9.58824 7.33333 10.6667 8.41176 10.6667 11.9167C10.6667 15.4216 9.58824 16.5 6.08333 16.5C2.57843 16.5 1.5 15.4216 1.5 11.9167Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
            <div class="copybutton__copied">Copied</div>
        </div>
    </button>
</template>

<script>
export default {
    name: "compCopyButton",
    props: {
        copyToken: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isAnimating: false,
        };
    },
    methods: {
        async copyToClipboard() {
            if (this.isAnimating) return;

            try {
                await navigator.clipboard.writeText(this.copyToken);
                this.isAnimating = true;
                setTimeout(() => {
                    this.isAnimating = false;
                }, 3200);
            } catch ($e) {
                alert("Cannot copy");
            }
        },
    },
};
</script>
