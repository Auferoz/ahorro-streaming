<script setup>
    import { computed, ref } from 'vue'
    import Button from '../AndinoDS/Button.vue'
    import Icon from '../AndinoDS/Icon.vue'

    const { EdsCardPlanFloat } = defineProps({
        EdsCardPlanFloat: {
            type: Array,
            required: true,
        },
    })

    const FormatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    const plan = computed(() => EdsCardPlanFloat?.[0] || null)

    // Nueva propiedad y función para alternar la visibilidad del aside
    const asideActive = ref(false);
    const toggleAside = () => {
        asideActive.value = !asideActive.value;
    };

    const arrowUp = {"position": "right", "name": "chevron-up"};
    const arrowDown = {"position": "right", "name": "chevron-down"};


</script>


<template>
    <article class="card-float">
        <aside :class="['card-aside p-3', asideActive ? 'slide-in' : 'slide-out']">
            <p class="caption-xs caption-lg">
                <strong>{{ plan.titleDetails }}</strong>
            </p>
            <div class="card-aside-main">
                <div class="card-aside-main-icon" v-for="(detail, index) in plan.details" :key="index">
                    <div class="card-aside-main-icon-img">
                        <Icon 
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

                <div class="card-aside-main-icon" v-if="plan.appChannels && plan.appChannels.icon">
                    <Icon 
                        EdsType="transversales"
                        EdsName="tv"
                        EdsClass="image-xs-1"
                        EdsFormat="webp"
                    />
                    <div v-for="(channel, channelsIndex) in plan.appChannels.icon" :key="channelsIndex">
                        <Icon 
                            :EdsType="channel.type"
                            :EdsName="channel.name"
                            EdsClass="image-xs-3"
                            EdsFormat="webp"
                        />
                    </div>
                </div>

            </div>

        </aside>
        <header class="card-head">
            <p class="body_3-xs body_3-lg">
                {{ plan.type }}
            </p>
            <p class="body_1-xs body_1-lg mb-2">
                <strong>{{ plan.title }}</strong>
            </p>
            <p class="headline_3-xs headline_3-lg text-primary">
                <strong> ${{ FormatPrice(plan.price) }}{{ plan.periodicity }}</strong>
            </p>
            <p class="body_3-xs body_3-lg text-subtext mb-2">
                {{ plan.normalPrice }}
            </p>
            
            <Button 
                EdsVariant="primary"
                EdsText="Lo quiero"
                EdsIcon=""
                :EdsHref=plan.button.href
            />
        </header>
        <footer class="card-footer text-center ">
            <Button 
                EdsVariant="link"
                :EdsText="asideActive ? 'Ocultar detalles' : 'Ver detalles'"
                :EdsIcon="asideActive ? JSON.stringify(arrowDown) : JSON.stringify(arrowUp)"
                @click="toggleAside"
            />
        </footer>
    </article>
</template>

<style scoped>
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
    /* Elimina las clases hidden/active anteriores y añade animaciones */
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
        gap: 8px;
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

    .card-footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        padding: 16px;
        border-top: 1px solid var(--color-neutral-stroke-modal-default, #D7D7D7);
        background: var(--color-base-bg-default, #FFF);
    }
</style>