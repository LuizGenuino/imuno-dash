<script>
import CardUnidades from '@/components/CardUnidades.vue';
import HeaderApp from '@/components/HeaderApp.vue';

export default {
    name: "Unidades",
    components: {
        CardUnidades,
        HeaderApp
    },

    data() {
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        }
    }
}

</script>

<template>
    <HeaderApp />
    <div class="p-6 flex flex-wrap justify-center">
        <CardUnidades v-for="item in items" :key="item" />
    </div>
</template>
