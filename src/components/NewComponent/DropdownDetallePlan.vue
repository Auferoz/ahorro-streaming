<script setup>
    import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
    import Icon from '../AndinoDS/Icon.vue';
    import Dropdown from '../AndinoDS/Dropdown.vue';
    import { dropdownDetalleData } from '../../services/DetailsPlansData.js'; // Importar la constante

    // Nueva prop para recibir el valor inicial
    const props = defineProps({
        EdsNameValue: {
            type: String,
            required: true
        }
    });

    const selectedValue = ref(props.EdsNameValue); // Inicializar con el valor recibido

    // Actualizar selectedValue si EdsNameValue cambia
    watch(() => props.EdsNameValue, (newValue) => {
        selectedValue.value = newValue;
    });

    // Función para manejar el cambio del dropdown
    const handleDropdownChange = (event) => {
        const value = event.target ? event.target.value : event; // Extrae el valor si es un objeto de evento
        console.log('Valor seleccionado:', value); // Verifica el valor en la consola
        selectedValue.value = value;
    };

    // Computed para obtener el objeto seleccionado
    const selectedOption = computed(() => {
        return dropdownDetalleData.find(option => option.value === selectedValue.value) || null;
    });

    // Nueva propiedad para la clase dinámica según el tamaño de la ventana
    const iconClass = ref('image-xs-4');
    const updateIconClass = () => {
        iconClass.value = window.innerWidth > 768 ? 'image-xs-5' : 'image-xs-4';
    };
    onMounted(() => {
        updateIconClass();
        window.addEventListener('resize', updateIconClass);
    });
    onUnmounted(() => {
        window.removeEventListener('resize', updateIconClass);
    });
</script>

<template>
    <div class="col-6 col-lg-4">
        <Dropdown 
            EdsName="edsName"
            EdsId="edsId"
            EdsPlaceholder="edsPlaceholder"
            EdsOptions='[
                {"text":"Fibra 600","value":"fibra_600"},
                {"text":"Fibra 600+","value":"fibra_600+"},
                {"text":"Dúo 600 TV Full","value":"fibra_600_tv_full"},
                {"text":"Dúo 600 TV Lite","value":"fibra_600_tv_lite"}
            ]'
            :value="selectedValue"
            @change="handleDropdownChange"
        />

        
        <div v-if="selectedOption" class="detalle-plan mt-4">
            <div class="detalle-plan-icons">

                <p class="body_3-xs body_3-lg text-subtext py-2 py-lg-4 text-center">
                    {{ selectedOption.IconChannels.find(channel => channel.default)?.AppsText || '' }}
                </p>

                <div v-for="(channel, index) in selectedOption.IconChannels.filter(channel => channel.active === true && !channel.iconName.includes('canales-90') && !channel.iconName.includes('canales-46'))" :key="index">
                    <Icon
                        :EdsId="channel.iconName"
                        :EdsType="channel.iconType"
                        :EdsName="channel.iconName"
                        :EdsClass="iconClass"
                        :EdsFormat="channel.iconFormat"
                    />
                </div>

            </div>

            <aside class="detalle-plan-aside text-center">
                <p class="subtitle_2-xs subtitle_2-lg text-primary">
                    <strong>{{ selectedOption.price }}</strong>
                </p>
                <p class="body_3-xs body_3-lg" v-html="selectedOption.savingsText">
                </p>
            </aside>

            
            <article class="detalle-plan-article" v-for="(detail, detailIndex) in selectedOption.iconsDetail" :key="detailIndex" >
                <Icon
                    :EdsId="detail.titleIcon === 'No incluido' ? 'noincluido' : detail.iconName"
                    :EdsType="detail.iconType"
                    :EdsName="detail.iconName"
                    :EdsClass="detail.iconClass"
                    :EdsFormat="detail.iconFormat"
                />
                <p class="body_2-xs body_3-lg">{{ detail.titleIcon }}</p>
                <p class="body_3-xs body_3-lg text-subtext">{{ detail.subtitleIcon }}</p>
            </article>
            
        </div>


    </div>
</template>

<style scoped>
    .detalle-plan {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }

    .detalle-plan-aside {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding-bottom: 24px;
        border-bottom: 1px solid #E9E9E9;
    }
    
    .detalle-plan-article {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }

    .detalle-plan-icons {
        display: flex;
        flex-direction: row;
        gap: 4px;
    }

    :deep([eds-id="noincluido"]::part(andino-icon)) {
        filter: brightness(0) saturate(100%) invert(42%) sepia(4%) saturate(420%) hue-rotate(182deg) brightness(93%) contrast(86%);
    }
    
</style>