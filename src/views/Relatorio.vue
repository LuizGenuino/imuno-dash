<template>
    <div>
        <HeaderApp />
        <CardVacinasDisponiveis />
    </div>
</template>

<script>
import CardVacinasDisponiveis from '@/components/CardVacinasDisponiveis.vue';
import HeaderApp from '@/components/HeaderApp.vue';

export default {
    name: "Relatorios",
    components: {
        CardVacinasDisponiveis,
        HeaderApp
    },
    data() {


        return {}
    }
}
</script>

<style lang="scss" scoped></style>