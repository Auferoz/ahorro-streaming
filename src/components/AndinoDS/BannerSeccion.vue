<script setup>
    import { ref, onMounted, watch } from 'vue'
    import "https://cdn-eds-uat.en.tel/components/lit-components/banners/seccion/web-component.min.js"

    const props = defineProps({
        EdsTopLabel: String,
        EdsTitle: String,
        EdsSubtitle: String,
        EdsIcon: String,
        EdsBgImageAlt: String,
        EdsBgImageSources: Array,
        EdsObjectFit: String
    })

    const bannerRef = ref(null)

    const updateBgImage = () => {
        if (bannerRef.value) {
        const bgData = {
            responsive: true,
            alt: props.EdsBgImageAlt,
            sources: props.EdsBgImageSources
        }
        bannerRef.value.edsBgImage = bgData
        bannerRef.value.setAttribute('eds-bg-image', JSON.stringify(bgData))
        }
    }

    onMounted(() => { updateBgImage() })
    watch(() => [props.EdsBgImageAlt, props.EdsBgImageSources], () => { updateBgImage() })
</script>

<template>
    <andino-banner-seccion 
        ref="bannerRef"
        :eds-top-label="props.EdsTopLabel"
        :eds-title="props.EdsTitle"
        :eds-subtitle="props.EdsSubtitle"
        :eds-icon="props.EdsIcon"
        :eds-object-fit="props.EdsObjectFit"
    >
    </andino-banner-seccion>
</template>

