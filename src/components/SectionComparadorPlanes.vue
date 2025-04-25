<script setup>
    import DropdownDetallePlan from './NewComponent/DropdownDetallePlan.vue';
</script>

<template>
    <section class="p-40">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-12 text-center mb-4">
                    <p class="headline_4-xs headline_4-lg">
                        Compara los Planes Internet Hogar
                    </p>
                    <p class="subtitle_2-xs subtitle_2-lg">
                        Te ayudamos a elegir el mejor plan
                    </p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <!-- Pasar el valor a través de la prop EdsNameValue -->
                <DropdownDetallePlan EdsNameValue="fibra_600" />
                <DropdownDetallePlan EdsNameValue="fibra_600_tv_full" />
                <DropdownDetallePlan EdsNameValue="fibra_600_tv_lite" class="d-none d-lg-block" />
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>