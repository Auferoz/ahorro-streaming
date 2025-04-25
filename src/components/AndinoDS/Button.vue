<script setup>
    import "https://cdn-eds-uat.en.tel/components/lit-components/buttons/web-component.min.js"

    defineProps({
        EdsVariant: String,
        EdsText: String,
        EdsIcon: String,
        EdsHref: String,
    });

</script>

<template>
    <andino-button 
        :eds-variant=EdsVariant
        :eds-text=EdsText
        :eds-icon=EdsIcon
        :eds-href=EdsHref
    >
    </andino-button>
</template>