<script setup>
    import Icon from '../AndinoDS/Icon.vue'
    import Toggle from '../AndinoDS/Toggle.vue'

    const props = defineProps({
        EdsState: String,
        EdsTitle: String,
        EdsPriceText: String,
        EdsPriceNormal: String,

        EdsIconType: String,
        EdsIconName: String,
        EdsIconClass: String,
    })

</script>

<template>

    <article :class="'card-article ' + EdsState">
            <div class="col-10 col-md-8 card-aside">
                <div class="card-texts">
                    <p class="body_3-xs body_3-lg" v-html=EdsTitle>
                    
                    </p>
    
                    <p class="body_2-xs body_2-lg text-primary">
                        <strong>{{ EdsPriceText }}</strong>
                    </p>
    
                    <p class="caption-xs caption-lg text-subtext">
                        {{ EdsPriceNormal }}
                    </p>
                </div>

                <div class="card-icons">
                    <slot name="icon">
                    </slot>
                </div>
            </div>
            <div class="col-2 col-md-1 offset-md-1 card-toggle p-0">
                <slot name="toggle">

                </slot>
            </div>
    </article>

</template>

<style scoped>

    .card-article {
        display: flex;
        padding: var(--spacing-05, 16px);
        align-items: center;
        gap: var(--spacing-02, 4px);
        align-self: stretch;

        flex-wrap: wrap;

        border-radius: 8px;
        background: #FFF;
        border: 1px solid var(--color-neutral-stroke-light, #E9E9E9);
        transition: all 0.3s ease-in-out;
    }

    .card-article.active {
        border: 1px solid var(--color-primary-stroke-default, #002EFF);
        transition: all 0.3s ease-in-out;
    }

    .card-article :deep(strong) {
        font-weight: 600;
    }

    .card-article :deep(a) {
        color: #002EFF;
    }

    .card-icons {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .card-aside {
        display: flex;
        align-items: center;
        align-content: center;
        gap: 8px;
        flex: 1 0 0;
        flex-wrap: wrap;
    }

    .card-toggle {
        display: flex;
        padding: var(--spacing-05, 16px);
        align-items: center;
        gap: var(--spacing-02, 4px);
        align-self: stretch;
    }

    @media screen and (min-width: 420px) {

        .card-texts {
            min-width: 205px;
        }

    }

    @media screen and (min-width: 768px) {

        .card-aside {
            gap: 24px;
        }

}

</style>