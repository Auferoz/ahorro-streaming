<script setup>
    import Toggle from '../AndinoDS/Toggle.vue'
    
    const props = defineProps({
        EdsUpgradeState: String,
        EdsUpgradeValue: String,
        EdsUpgradeTitle: String,
        EdsUpgradePrice: String,
        EdsUpgradePriceText: String,
        EdsUpgradeIncludes: String,
        EdsUpgradePriceOffert: String,
        EdsUpgradePeriodicity: String,
        EdsUpgradeNormalPrice: String,
    })

</script>

<template>

    <article :class="' card-upgrade ' + EdsUpgradeState">

        <div class="card-info">
            <p class="body_3-xs body_3-lg">
                Velocidad <strong>{{ EdsUpgradeTitle }}</strong>
            </p>
            <p class="body_2-xs body_2-lg text-primary">
                <strong>
                    {{ EdsUpgradePrice }}
                {{ EdsUpgradePriceText }}
                </strong>
            </p>
            <p class="caption-xs caption-lg text-subtext py-1">
                Incluye <strong>{{ EdsUpgradeIncludes }}</strong>
            </p>

        </div>


        <aside class="card-toggle">
            <slot name="toggleUpgrade">
                
            </slot>
        </aside>
    </article>

</template>

<style scoped>

    .card-upgrade {
        display: flex;
        flex-direction: row;
        padding: 16px var(--spacing-05, 16px);
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-02, 4px);

        max-width: 478px;
        width: 100%;

        border-radius: 8px;
        border: 1px solid #FFF;
        background: #FFF;
        transition: all 0.3s ease-in-out;
    }

    .card-upgrade.active {
        border: 1px solid var(--color-primary-stroke-default, #002EFF);
        transition: all 0.3s ease-in-out;
    }

</style>