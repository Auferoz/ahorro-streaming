<script setup>
    import { useRoute } from 'vue-router'
    import { computed } from 'vue'
    import { plansFibraInternetData } from '../services/PlansData.js'

    import HeaderSimple from '../components/AndinoDS/HeaderSimple.vue'
    import SectionContratacionStreaming from '../components/SectionContratacionStreaming.vue'

    const route = useRoute()
    const selectedPlan = computed(() => plansFibraInternetData.find(plan => plan.id === route.query.id))
</script>

<template>
    <!--  -->        
    <HeaderSimple EdsThemeClass="light" EdsHref="/" EdsText="" />
    <!--  -->
    <SectionContratacionStreaming :selectedPlan="selectedPlan" />
    <!--  -->


    
</template>

<style scoped>
/* Add your styles here */
</style>