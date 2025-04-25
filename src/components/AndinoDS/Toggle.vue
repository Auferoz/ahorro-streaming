<script setup>
    import "https://cdn-eds-uat.en.tel/components/lit-components/toggle/web-component.min.js"

    const props = defineProps({
        EdsId: String,
        EdsValue: String,
        EdsChecked: Boolean,
    })

</script>

<template>

    <andino-toggle 
        :eds-id="EdsId"
        :eds-value="EdsValue"
        :eds-checked="EdsChecked ? '' : undefined"
    >
    </andino-toggle>

</template>