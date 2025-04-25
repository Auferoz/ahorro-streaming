<script setup>
    import "https://cdn-eds-uat.en.tel/components/lit-components/header/simple/web-component.min.js";

    defineProps({
        EdsThemeClass: String,
        EdsHref: String,
        EdsText: String,
    });

</script>

<template>
    <andino-header-simple
        eds-header-url-home="/"
        :class="EdsThemeClass"
        :eds-header-button="JSON.stringify(
            {
                id: 'headerId',
                href: EdsHref,
                text: EdsText,
                icon: {
                    name: 'ejecutivo',
                    position: 'left'
                },
                data: {
                    mercado: 'pe',
                    segmento: 'po'
                }
            }
        )"
    ></andino-header-simple>

</template>

<style scoped>
</style>