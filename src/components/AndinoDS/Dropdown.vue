<script setup>
    import "https://cdn-eds-uat.en.tel/components/lit-components/dropdown/web-component.min.js"

    defineProps({
        EdsName: String,
        EdsId: String,
        EdsPlaceholder: String,
        EdsOptions: String,
    });

</script>

<template>
    <andino-dropdown
        :eds-name=EdsName
        :eds-id=EdsId
        :eds-placeholder=EdsPlaceholder
        :eds-options=EdsOptions
        >
    </andino-dropdown>
</template>