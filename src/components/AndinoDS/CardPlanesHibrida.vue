<script setup>
    import "https://cdn-eds-uat.en.tel/components/lit-components/cards/planes-hibrida/web-component.min.js";

    // Define the prop to explicitly accept an array
    defineProps({
        EdsCardPlan: {
            type: Array,
            required: true,
        },
    });
</script>

<template>
    <!-- Ensure the prop is passed correctly to the web component -->
    <andino-card-planes-hibrida 
        :eds-card="EdsCardPlan"
    >
    </andino-card-planes-hibrida>
</template>