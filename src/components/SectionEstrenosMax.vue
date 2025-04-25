<script setup>
    import CardGeneral from './AndinoDS/CardGeneral.vue'
    import { DetailsCardsMaxData } from '../services/DetailsCardsMaxData';

    const cardsData = DetailsCardsMaxData;

</script>

<template>
    <section class="p-40 bg-subcolor pt-0">
        <div class="container p-0 p-lg-2">
            <div class="row">
                <div class="col-12 col-lg-12 mb-3">
                    <p class="headline_4-xs headline_4-lg">
                        Estrenos en <strong>Max</strong> todos los meses
                    </p>
                </div>
            </div>
        </div>
        <div class="container p-0 p-lg-2">
            <swiper
                class="CardGeneralMax"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :pagination="{ clickable: true }"
                :slides-per-view="1.2"
                :space-between="12"
                :modules="modules"
                :breakpoints="{
                    '424': {
                        slidesPerView: 1.6,
                        spaceBetween: 12,
                    },
                    '576': {
                        slidesPerView: 2.2,
                        spaceBetween: 12,
                    },
                    '696': {
                        slidesPerView: 2.6,
                        spaceBetween: 12,
                    },
                    '744': {
                        slidesPerView: 2.3,
                        spaceBetween: 12,
                    },
                    '768': {
                        slidesPerView: 2.3,
                        spaceBetween: 12,
                    },
                    '960': {
                        slidesPerView: 4,
                        spaceBetween: 12,
                    },
                    '1280': {
                        slidesPerView: 4.1,
                        spaceBetween: 12,
                    },
                    '1400': {
                        slidesPerView: 4,
                        spaceBetween: 12,
                    },
            }">
                <swiper-slide v-for="(card, index) in cardsData" :key="index">
                    <CardGeneral 
                        :EdsImage="card.imageURL"
                        :EdsText="card.title"
                    />
                </swiper-slide>
            </swiper>
            
        
        </div>
    </section>
</template>

<style scoped>

    .CardGeneralDisney {
        height: 262px;
    }

    :deep(.swiper-pagination) {
        margin: 10px 0px -10px 0px;
    }

    :deep(::part(andino-card)) {
        height: 240px;
        margin: 0px 0px 20px 0px;
    }

    :deep(.swiper-pagination-bullet.swiper-pagination-bullet-active) {
        width: 32px;
        height: 8px;
        border-radius: 12px;
        background: #002EFF;
    }

    :deep(.swiper-pagination-bullet) {
        width: 8px;
        height: 8px;
        border-radius: 12px;
        background: #000000;
    }

    @media (min-width: 769px) {

        :deep(::part(andino-card)) {
            height: 240px;
            margin: 0px 0px 20px 0px;
        }
    }

</style>

<script>
    import { register } from 'swiper/element/bundle';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    // import { Pagination, A11y } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/pagination';
    register();

    const onSwiper = (swiper) => {
        console.log(swiper);
    };

    const onSlideChange = () => {
        console.log('slide change');
    };
</script>