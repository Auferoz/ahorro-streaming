<script setup>
    import { ref, watch, reactive } from 'vue';
    import CardPlanesHibrida from './AndinoDS/CardPlanesHibrida.vue';
    import Alert from './AndinoDS/Alert.vue';
    import CardToggle from './NewComponent/CardToggle.vue';
    import CardFloat from './NewComponent/CardFloat.vue';
    import Icon from './AndinoDS/Icon.vue';
    import Toggle from './AndinoDS/Toggle.vue';
    import { plansFibraInternetData } from '../services/PlansData.js';

    // Reactive state for the selected plan and active toggle
    const selectedPlan = ref([]);
    const activeToggleId = ref('internet-fibra-basic'); // Default toggle ID

    // Function to select a plan by id and assign its cardHibrida array
    const selectPlanById = (id) => {
        const plan = plansFibraInternetData.find(plan => plan.id === id);
        selectedPlan.value = plan ? plan.cardHibrida : [];
    };

    // Watch for changes in activeToggleId to update the selected plan
    watch(activeToggleId, (newId) => {
        selectPlanById(newId);
    });

    // Set the default selected plan
    selectPlanById(activeToggleId.value);

    // Lista de IDs de toggle disponibles
    const toggleIds = [
        'internet-fibra-basic-streaming',
        'duo-pack-fibra-basic-tv-lite',
        'duo-pack-fibra-basic-tv-full'
    ];

    // Estado reactivo para almacenar el estado de cada Toggle
    const togglesChecked = reactive({});

    // Inicializar todos los toggles en false (desactivados)
    toggleIds.forEach(id => togglesChecked[id] = false);

    // Identificador por defecto (cuando se desactiva todo)
    const defaultToggleId = 'internet-fibra-basic';

    // Función para manejar activación/desactivación de toggles
    const toggleCheck = (id) => {
        if (activeToggleId.value === id) {
            // Si se vuelve a hacer click en el mismo toggle, se desactiva y vuelve al default
            togglesChecked[id] = false;
            activeToggleId.value = defaultToggleId;
        } else {
            // Desactivar todos
            toggleIds.forEach(tid => togglesChecked[tid] = false);
            // Activar el nuevo
            togglesChecked[id] = true;
            activeToggleId.value = id;
        }
    };
</script>


<template>

    <section class="p-40">
        <div class="container">
            <div class="row">

                <div class="col-12 col-lg-8">

                    <h4 class="subtitle_2-xs subtitle_2-lg mb-4">
                        Agrega el contenido que quieras
                    </h4>

                    <div class="card-section">

                        <CardToggle 
                            @click="toggleCheck('internet-fibra-basic-streaming')"
                            :EdsState="togglesChecked['internet-fibra-basic-streaming'] ? 'active' : 'inactive'"
                            EdsTitle="Agrega Disney+ Premium por"
                            EdsPriceText="$8.000 adicional"
                            EdsPriceNormal="Precio normal: $13.500"

                            EdsIconType="marcas"
                            EdsIconName="disney-plus-2"
                            EdsIconClass="image-xs-5"
                        >
                            <template #icon>
                                <Icon EdsType="marcas" EdsName="disney-plus-2" EdsClass="image-xs-5" EdsFormat="webp" />
                            </template>
                            <template #toggle>
                                <Toggle 
                                    :key="togglesChecked['internet-fibra-basic-streaming']"
                                    EdsId="ChekedInPlan"
                                    EdsValue="Value_internet-fibra-basic-streaming"
                                    :EdsChecked="togglesChecked['internet-fibra-basic-streaming']"
                                    @click.stop="toggleCheck('internet-fibra-basic-streaming')"
                                />
                            </template>
                        </CardToggle>

                        <CardToggle 
                            @click="toggleCheck('duo-pack-fibra-basic-tv-lite')"
                            :EdsState="togglesChecked['duo-pack-fibra-basic-tv-lite'] ? 'active' : 'inactive'"
                            EdsTitle="Agrega Entel TV y <a href='#parrilla-canales' class='text-primary'>46 canales</a>"
                            EdsPriceText="$11.000 adicional"

                            EdsIconType="entel"
                            EdsIconName="entel-tv-2"
                            EdsIconClass="image-xs-5"
                        >
                            <template #icon>
                                <Icon EdsType="entel" EdsName="entel-tv-2" EdsClass="image-xs-5" EdsFormat="webp" />
                                <Icon EdsType="transversales" EdsName="canales-46" EdsClass="image-xs-5" EdsFormat="webp" />
                            </template>
                            <template #toggle>
                                <Toggle 
                                    :key="togglesChecked['duo-pack-fibra-basic-tv-lite']"
                                    EdsId="ChekedInPlan"
                                    EdsValue="Value_duo-pack-fibra-basic-tv-lite"
                                    :EdsChecked="togglesChecked['duo-pack-fibra-basic-tv-lite']"
                                    @click.stop="toggleCheck('duo-pack-fibra-basic-tv-lite')"
                                />
                            </template>
                        </CardToggle>
                        
                        <CardToggle 
                            @click="toggleCheck('duo-pack-fibra-basic-tv-full')"
                            :EdsState="togglesChecked['duo-pack-fibra-basic-tv-full'] ? 'active' : 'inactive'"
                            EdsTitle="Agrega Disney+, Max, Entel TV <br> y <a href='#parrilla-canales' class='text-primary'>90 canales</a>"
                            EdsPriceText="$21.000 adicional"

                            EdsIconType="marcas"
                            EdsIconName="max-icon-2"
                            EdsIconClass="image-xs-5"
                        >
                            <template #icon>
                                <Icon EdsType="marcas" EdsName="disney-plus-2" EdsClass="image-xs-5" EdsFormat="webp" />
                                <Icon EdsType="marcas" EdsName="max-icon-2" EdsClass="image-xs-5" EdsFormat="webp" />
                                <Icon EdsType="entel" EdsName="entel-tv-2" EdsClass="image-xs-5" EdsFormat="webp" />
                                <Icon EdsType="transversales" EdsName="canales-90" EdsClass="image-xs-5" EdsFormat="webp" />
                            </template>
                            <template #toggle>
                                <Toggle 
                                    :key="togglesChecked['duo-pack-fibra-basic-tv-full']"
                                    EdsId="ChekedInPlan"
                                    EdsValue="Value_duo-pack-fibra-basic-tv-full"
                                    :EdsChecked="togglesChecked['duo-pack-fibra-basic-tv-full']"
                                    @click.stop="toggleCheck('duo-pack-fibra-basic-tv-full')"
                                />
                            </template>
                        </CardToggle>

                    </div>

                    <div class="col-12 col-lg-12 mt-4">
                        <Alert 
                            EdsType="info"
                            EdsIconName="info"
                            EdsSubtitle="**Instalación sin costo** en todos los planes"
                        />
                    </div>
                </div>

                <div class="col-12 col-lg-4 d-none d-lg-block">
                    <CardPlanesHibrida :EdsCardPlan="JSON.stringify(selectedPlan)" />
                </div>

            </div>
        </div>
    </section>

    <div class="card-float-article d-block d-lg-none">
        <CardFloat :EdsCardPlanFloat="selectedPlan" />
    </div>
    
</template>

<style scoped>

    .card-float-article {
        position: relative;
    }

    .card-section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-06, 24px);
    }

</style>