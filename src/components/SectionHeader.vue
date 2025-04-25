<script setup>
    import HeaderSimple from './AndinoDS/HeaderSimple.vue'
    import BannerSeccion from './AndinoDS/BannerSeccion.vue'
</script>

<template>

    <section>

        <HeaderSimple 
            EdsThemeClass="light" 
        />

        <BannerSeccion 
            EdsTopLabel=''
            EdsIcon=''
            EdsTitle='{"text":"¡Disfruta la televisión \\ncon Fibra de calidad!"}'
            EdsSubtitle='{"text":"Selecciona la opción más te guste de acuerdo a tus necesidades"}'
            EdsBgImageAlt="Banner Seccion"
            :EdsBgImageSources="[
            { src: 'https://entel.cdn.modyo.com/uploads/95deda79-e7b7-46f0-b3c9-4b43edc5cc6f/original/banner-mob-360px.webp' },
            { src: 'https://entel.cdn.modyo.com/uploads/57d2f928-13fb-4a3e-b675-b24bfab56835/original/banner-tablet-696px.webp', breakpoint: '768' },
            { src: 'https://entel.cdn.modyo.com/uploads/c0682165-5769-478e-8bb2-9cacd0ba1b8a/original/banner-desk-960px.webp', breakpoint: '992' },
            { src: 'https://entel.cdn.modyo.com/uploads/70fe7532-673f-435b-b5bf-cd0476f332b5/original/banner-desk-1280px.webp', breakpoint: '1280' },
            { src: 'https://entel.cdn.modyo.com/uploads/9b29b9eb-863e-4b88-8215-28a97d70a634/original/banner-desk-1920px.webp', breakpoint: '1920' }
            ]"
            EdsObjectFit="right"
        />
        
    </section>

</template>

<style scoped>

</style>
