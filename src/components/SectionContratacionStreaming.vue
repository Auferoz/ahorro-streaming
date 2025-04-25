<script setup>
import { ref, watch, reactive, computed } from 'vue';
import Button from '../components/AndinoDS/Button.vue'
import Icon from '../components/AndinoDS/Icon.vue'
import Toggle from '../components/AndinoDS/Toggle.vue'
import CardUpgradeToggle from '../components/NewComponent/CardUpgradeToggle.vue'
import CardFloat from '../components/NewComponent/CardFloat.vue'
import { plansFibraInternetData } from '../services/PlansData.js';

const props = defineProps({
    selectedPlan: {
        type: Object,
        required: true
    }
})

// Modificación para que ninguno esté activo por defecto:
const defaultToggleId = '';  // before: props.selectedPlan.cardHibrida[0].upgradePlans[0]?.value || '';
const activeToggleId = ref(defaultToggleId);

function toggleCheck(id) {
    if (activeToggleId.value === id) {
        activeToggleId.value = defaultToggleId;
    } else {
        activeToggleId.value = id;
    }
}

const FormatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const displayedTitle = computed(() => {
    const baseTitle = props.selectedPlan.cardHibrida[0].title.replace(/TV Full\+|TV Lite/g, '').trim();
    if (activeToggleId.value) {
        const selectedUpgrade = props.selectedPlan.cardHibrida[0].upgradePlans.find(up => up.value === activeToggleId.value);
        return selectedUpgrade ? selectedUpgrade.title.replace(/TV Full\+|TV Lite/g, '').trim() : baseTitle;
    }
    return baseTitle;
});

const displayedDetails = computed(() => {
    if (activeToggleId.value) {
        const selectedUpgrade = props.selectedPlan.cardHibrida[0].upgradePlans.find(
            up => up.value === activeToggleId.value
        );
        return selectedUpgrade && selectedUpgrade.details
            ? selectedUpgrade.details
            : props.selectedPlan.cardHibrida[0].details;
    }
    return props.selectedPlan.cardHibrida[0].details;
});

const displayedFooter = computed(() => {
    const basePlan = props.selectedPlan.cardHibrida[0];
    if (activeToggleId.value) {
        const upgrade = basePlan.upgradePlans.find(up => up.value === activeToggleId.value);
        if (upgrade && upgrade.price && upgrade.periodicity && upgrade.normalPrice) {
        return {
            price: upgrade.price,
            periodicity: upgrade.periodicity,
            normalPrice: upgrade.normalPrice
        };
        }
    }
    return {
        price: basePlan.price,
        periodicity: basePlan.periodicity,
        normalPrice: basePlan.normalPrice
    };
});


// Nueva propiedad y función para alternar la visibilidad del aside
const asideActive = ref(false);
const toggleAside = () => {
    asideActive.value = !asideActive.value;
};

const arrowUp = {"position": "right", "name": "chevron-up"};
const arrowDown = {"position": "right", "name": "chevron-down"};

// Agregar computed para el texto del botón
const toggleButtonText = computed(() => activeToggleId.value ? "Aumentar velocidad y continuar" : "Continuar con mi seleción");

</script>

<template>
    <section class="streaming">
        <div class="container">
            <div class="row">

                <div class="col-12 col-lg-5 LeftSection d-none d-lg-flex">
                    <nav>
                        <Button 
                            EdsVariant="link"
                            EdsText="Volver atras"
                            EdsHref="/"
                            EdsIcon='{"position":"left","name":"chevron-left"}'
                        />
                    </nav>

                    <div>
                        <p class="subtitle_2-xs subtitle_2-lg mb-2">
                            Estás llevando
                        </p>
                        
                        <article class="card-section">

                            <header>
                                <p class="subtitle_1b-xs subtitle_1b-lg">
                                    {{ selectedPlan.cardHibrida[0].type }} {{ displayedTitle }} {{ selectedPlan.cardHibrida[0].titleTv }}
                                </p>
                            </header>

                            <section class="card-body">
                                <p
                                    v-for="(detail, index) in displayedDetails"
                                    :key="index"
                                    :class="['body_1-xs', 'body_1-lg', 'mb-2', index === 0 ? 'router' : index === 1 ? 'extensor' : 'velocidad']"
                                >
                                    <Icon 
                                        EdsId="icons"
                                        EdsType="transversales" 
                                        :EdsName="detail.icon.name"
                                        EdsClass="image-xs-2"
                                        EdsFormat="webp"
                                    />
                                    {{ detail.text.replace(/\*/g, '') }}
                                </p>

                                <p class="body_1-xs body_1-lg mb-2 channels" v-if="selectedPlan.cardHibrida[0].appChannels && selectedPlan.cardHibrida[0].appChannels.icon && selectedPlan.cardHibrida[0].appChannels.icon.length">
                                    <Icon 
                                        EdsId="icons"
                                        EdsType="transversales" 
                                        EdsName="smart-tv-2"
                                        EdsClass="image-xs-2"
                                        EdsFormat="webp"
                                    />
                                    <span>
                                        <template v-for="icons in selectedPlan.cardHibrida[0].appChannels.icon" :key="icons.icon">
                                            <Icon 
                                                :EdsType="icons.type"
                                                :EdsName="icons.name"
                                                EdsClass="image-xs-4"
                                                EdsFormat="webp"
                                            />
                                        </template>
                                        <p class="body_3-xs body_3-lg">
                                            {{ selectedPlan.cardHibrida[0].appChannels.icon[0]?.text }}
                                        </p>
                                    </span>
                                </p>
                            </section>

                            <footer class="footer">
                                <p class="subtitle_1-xs subtitle_1-lg">
                                    Precio oferta: <strong>${{ FormatPrice(displayedFooter.price) }}{{ displayedFooter.periodicity }}</strong>
                                </p>
                                <p class="subtitle_2-xs subtitle_2-lg text-subtext">
                                    {{ displayedFooter.normalPrice }}
                                </p>
                            </footer>

                        </article>
                    </div>
                </div>

                <nav class="d-flex d-lg-none py-2">
                    <Button 
                        EdsVariant="link"
                        EdsText="Volver atras"
                        EdsHref="/"
                        EdsIcon='{"position":"left","name":"chevron-left"}'
                    />
                </nav>

                <div class="col-12 col-lg-7 RightSection">

                    <p class="subtitle_2-xs subtitle_2-lg mb-0 mb-lg-2">
                        Aumenta la velocidad de la fibra por un <strong>precio especial</strong>
                    </p>

                    <CardUpgradeToggle
                        v-for="(upgrade, index) in selectedPlan.cardHibrida[0].upgradePlans"
                        :key="index"
                        :EdsUpgradeState="activeToggleId === upgrade.value ? 'active' : 'inactive'"
                        :EdsUpgradeValue="upgrade.value"
                        :EdsUpgradeTitle="upgrade.title"
                        :EdsUpgradePrice="upgrade.priceUpgrade"
                        :EdsUpgradePriceText="upgrade.priceUpgradeText"
                        :EdsUpgradeIncludes="upgrade.includes"

                        @click="toggleCheck(upgrade.value)"
                    >
                        <template #toggleUpgrade>
                            <div @click="toggleCheck(upgrade.value)">
                                <Toggle 
                                    EdsId="ChekedInUpgrade"
                                    :key="`${selectedPlan.id || 'default'}-${upgrade.value}-${activeToggleId}`"
                                    :EdsValue="upgrade.value"
                                    :EdsChecked="activeToggleId === upgrade.value"
                                />
                            </div>
                        </template>
                    </CardUpgradeToggle>

                    <div class="d-none d-lg-flex">
                        <Button
                            EdsVariant="primary"
                            :EdsText="toggleButtonText"
                            :EdsHref=selectedPlan.cardHibrida[0].buttonIntermedia.href
                        />
                    </div>

                </div>

            </div>
        </div>
        

        <div class="card-float-article d-block d-lg-none">

        

        <!-- // CardFloat  -->

        <article class="card-float">

            <aside :class="['card-aside p-3', asideActive ? 'slide-in' : 'slide-out']">
                <p class="caption-xs caption-lg">
                    <strong>Tu selección:</strong>
                </p>
                <div class="card-aside-main">
                    <div class="card-aside-main-icon" v-for="(detail, index) in displayedDetails" :key="index">
                        <div class="card-aside-main-icon-img">
                            <Icon
                                EdsId="icons" 
                                EdsType="transversales"
                                :EdsName="detail.icon.name"
                                EdsClass="image-xs-1"
                                EdsFormat="webp"
                            />
                        </div>
                        <p class="body_3-xs body_3-lg">
                            {{ detail.text.replace(/\*\*/g, '') }}
                        </p>
                    </div>

                    <div class="card-aside-main-icon d-none" v-if="selectedPlan.cardHibrida[0].appChannels && selectedPlan.cardHibrida[0].appChannels.icon">
                        <Icon
                            EdsId="icons"
                            EdsType="transversales"
                            EdsName="tv"
                            EdsClass="image-xs-1"
                            EdsFormat="webp"
                        />
                        <div v-for="(channel, channelsIndex) in selectedPlan.cardHibrida[0].appChannels.icon" :key="channelsIndex">
                            <Icon
                                :EdsType="channel.type"
                                :EdsName="channel.name"
                                EdsClass="image-xs-3"
                                EdsFormat="webp"
                            />
                        </div>
                        <p class="caption-xs caption-lg">
                            {{ selectedPlan.cardHibrida[0].appChannels.icon[0].text }}
                        </p>
                    </div>
                </div>

            </aside>      
            
            <header class="card-head">
                <p class="body_3-xs body_3-lg">
                    {{ selectedPlan.cardHibrida[0].type }}
                </p>
                <p class="body_1-xs body_1-lg mb-2">
                    <strong> {{ displayedTitle }} {{ selectedPlan.cardHibrida[0].titleTv }}</strong>
                </p>
                <p class="headline_3-xs headline_3-lg text-primary">
                    <strong>${{ FormatPrice(displayedFooter.price) }}{{ displayedFooter.periodicity }}</strong>
                </p>
                <p class="body_3-xs body_3-lg text-subtext mb-2">
                    {{ displayedFooter.normalPrice }}
                </p>

                <div class="card-aside-main-icon" v-if="selectedPlan.cardHibrida[0].appChannels && selectedPlan.cardHibrida[0].appChannels.icon">
                    <div v-for="(channel, channelsIndex) in selectedPlan.cardHibrida[0].appChannels.icon" :key="channelsIndex">
                        <Icon
                            :EdsType="channel.type"
                            :EdsName="channel.name"
                            EdsClass="image-xs-4"
                            EdsFormat="webp"
                        />
                    </div>
                </div>
                    
                    <p class="caption-xs caption-lg mb-3" v-if="selectedPlan.cardHibrida[0].appChannels">
                        {{ selectedPlan.cardHibrida[0].appChannels.icon[0].text }}
                    </p>
                
                <footer class="d-flex justify-content-center align-items-center">
                    <Button 
                        EdsVariant="primary"
                        :EdsText="toggleButtonText"
                        EdsIcon=""
                        :EdsHref=selectedPlan.cardHibrida[0].buttonIntermedia.href
                    />
                </footer>
                
            </header>
            

            <footer class="card-footer text-center ">
                <Button 
                    EdsVariant="link"
                    :EdsText="asideActive ? 'Ocultar detalles' : 'Ver detalles'"
                    :EdsIcon="asideActive ? JSON.stringify(arrowDown) : JSON.stringify(arrowUp)"
                    EdsHref="#"
                    @click="toggleAside"
                />
            </footer>

        </article>


        </div>

    </section>
</template>

<style scoped>

    .int {
        background: var(--color-neutral-bg-fill-light, #E9E9E9);
    }

    .LeftSection {
        display: flex;
        align-items: start;
        flex-direction: column;
        justify-content: flex-start;
        gap: 8px;

        padding: 16px;
        background: #FFF;
        
        height: calc(100dvh - 104px);
    }

    .RightSection {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
        gap: 16px;

        padding: 16px;
        background: var(--color-neutral-bg-fill-light, #E9E9E9);
        
        height: calc(100dvh - 104px);
    }

    .RightSection aside {
        height: 26px;
    }

    .RightSection andino-button::part(andino-button) {
        width: 323px;
    }

    .card-section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 19px;
    }

    .card-body p{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 13px;
    }

    .card-body p span {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .footer {
        border-top: 1px solid #E9E9E9;
        padding-top: 19px;
    }

    .card-float {
        position: fixed;
        bottom: 0;
        z-index: 9000;

        width: 100%;
        border-radius: var(--radius-03-large, 12px) var(--radius-03-large, 12px) var(--radius-00-none, 0px) var(--radius-00-none, 0px);
    }

    .card-aside {
        position: relative;
        z-index: 5; /* Hace que la animación se ejecute detrás del header */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 17px;
        z-index: 10000;

        border-radius: 12px 12px 0px 0px;
        border: 1px solid var(--color-neutral-stroke-light, #E9E9E9);
        background: var(--color-primary-bg-fill-light, #F3F5FF);
    }

    .slide-in {
        animation: slideInUp 0.5s forwards;
    }

    .slide-out {
        animation: slideOutDown 0.5s forwards;
    }

    @keyframes slideInUp {
        from {
            transform: translateY(100%);
            opacity: 0;
            visibility: hidden;
            display: none;
        }
        to {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }

    @keyframes slideOutDown {
        from {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        to {
            transform: translateY(100%);
            opacity: 0;
            visibility: hidden;
            display: none;
        }
    }

    .card-aside-main {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 8px;
    }

    .card-aside-main-icon {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;
    }

    .card-aside-main-icon-img {
        flex-shrink: 0; /* <-- Esto evita que se encoja */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-head {
        position: relative;
        z-index: 10; /* Asegura que el header siempre esté por delante */
        display: flex;
        padding: var(--spacing-05, 16px);
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        align-self: stretch;
        z-index: 20000;

        border-radius: 12px 12px 0px 0px;
        border: 1px solid var(--color-neutral-stroke-modal-default, #D7D7D7);
        background: var(--color-base-bg-default, #FFF);
        box-shadow: 0px 6px 24px 0px var(--Color-Base-shadow, rgba(0, 0, 0, 0.20));
    }
    
    .card-head :deep(::part(andino-button)) {
            width: 328px;
    }

    :deep([eds-id="icons"]::part(andino-icon)) {
        filter: brightness(0) saturate(100%) invert(42%) sepia(4%) saturate(420%) hue-rotate(182deg) brightness(93%) contrast(86%);
    }

    .card-footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        padding: 16px;
        border-top: 1px solid var(--color-neutral-stroke-modal-default, #D7D7D7);
        background: var(--color-base-bg-default, #FFF);
    }

    @media screen and (min-width: 769px) {

        .LeftSection {
            padding: 20px 40px;
        }

        .RightSection {            
            padding: 57px 96px;
        }

        .RightSection andino-button::part(andino-button) {
            width: 323px;
        }

    }

    @media (min-width: 992px) {
        .RightSection {
            gap: 24px;
        }
    }

</style>