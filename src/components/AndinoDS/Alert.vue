<script setup>
    import "https://cdn-eds-uat.en.tel/components/lit-components/alert/web-component.min.js"

    const props = defineProps({
        EdsType: String,
        EdsIconName: String,
        EdsSubtitle: String,
    })

</script>

<template>
    <andino-alert
        :eds-type=EdsType
        :eds-icon-name=EdsIconName
        :eds-subtitle=EdsSubtitle
    ></andino-alert>
</template>