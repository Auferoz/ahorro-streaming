<script setup>
    import "https://cdn-eds-uat.en.tel/components/lit-components/icon/web-component.min.js"

    const props = defineProps({
        EdsId: String,
        EdsType: String,
        EdsName: String,
        EdsClass: String,
        EdsFormat: String,
    })

</script>

<template>

    <andino-icons
        :eds-id=EdsId
        :eds-type=EdsType
        :eds-name=EdsName
        :eds-class=EdsClass
        :eds-format=EdsFormat
    >
    </andino-icons>

</template>
