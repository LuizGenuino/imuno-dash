<template>
    <div class="p-6 space-y-6 bg-base-100">
        <div class="flex justify-between items-center flex-wrap gap-4">
            <h2 class="text-2xl font-semibold">Resumo</h2>

            <!-- Filtros -->
            <div class="flex items-center gap-2">
                <button class="px-4 py-1 rounded-full text-white font-semibold"
                    :class="filter === 'today' ? 'bg-blue-500' : 'bg-blue-100 text-blue-500'" @click="filter = 'today'">
                    Hoje
                </button>
                <button class="px-4 py-1 rounded-full text-white font-semibold"
                    :class="filter === 'month' ? 'bg-orange-500' : 'bg-orange-100 text-orange-500'"
                    @click="filter = 'month'">
                    Mes
                </button>
                <button class="px-4 py-1 rounded-full text-white font-semibold"
                    :class="filter === 'year' ? 'bg-green-500' : 'bg-green-100 text-green-500'"
                    @click="filter = 'year'">
                    Ano
                </button>
            </div>
        </div>

        <!-- Cartões -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 text-white p-5 shadow-md">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-sm">Nos ultimos 30 dias</span>
                    <button class="text-sm underline">Ver Detalhes</button>
                </div>
                <h3 class="text-lg font-semibold">Vacinas Aplicadas</h3>
                <p class="text-3xl font-bold mt-2">350</p>
            </div>

            <div class="rounded-xl bg-gradient-to-br from-orange-400 to-orange-300 text-white p-5 shadow-md">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-sm">Vencem nos proximos 30 dias</span>
                    <button class="text-sm underline">Ver Detalhes</button>
                </div>
                <h3 class="text-lg font-semibold">Lotes Proximos do Vencimento</h3>
                <p class="text-3xl font-bold mt-2">5</p>
            </div>

            <div class="rounded-xl bg-gradient-to-br from-green-400 to-cyan-400 text-white p-5 shadow-md">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-sm">/today</span>
                    <button class="text-sm underline">Ver Detalhes</button>
                </div>
                <h3 class="text-lg font-semibold">Numero de Lotes disponiveis</h3>
                <p class="text-3xl font-bold mt-2">15</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "DashboardOverview",

    data() {
        return {
            filter: "month"
        }

    }
}

</script>