<script>
import DashboardOverview from '@/components/DashboardOverview.vue';
import HeaderApp from '@/components/HeaderApp.vue';
import LoteTable from '@/components/LoteTable.vue';
import TopVacinas from '@/components/TopVacinas.vue';





export default {
  name: "Home",
  components: {
    HeaderApp,
    DashboardOverview,
    TopVacinas,
    LoteTable
  },

  data() {
    return {

    }
  }
}

</script>

<template>
  <div>
    <HeaderApp />
    <h1 class="text-center text-2xl font-bold mt-8">Minha Unidade Basica de Saude</h1>
    <DashboardOverview />
    <div class="flex flex-col md:flex-row">
      <TopVacinas />
      <LoteTable />
    </div>
  </div>
</template>
