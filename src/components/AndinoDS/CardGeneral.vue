<script setup>
    import "https://cdn-eds-uat.en.tel/components/lit-components/cards/general/web-component.min.js"

    defineProps({
        EdsImage: String,
        EdsText: String,
    });
</script>

<template>
    <andino-card-general 
        :eds-card="JSON.stringify([
            {
            header: 
                {image: 
                    {sources: 
                        [{src: EdsImage}]
                    }
                },
            text: EdsText
            }
        ])"
        >
    </andino-card-general>
</template>