<template>
    <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h2 class="text-xl font-semibold text-gray-800 mb-5">Vacinas Mais Aplicadas</h2>

        <div class="grid grid-cols-2 text-sm font-medium text-gray-500 mb-3">
            <span>Vacinas</span>
            <span class="text-right">Numero de Doses</span>
        </div>

        <div v-for="(channel, index) in channels" :key="index" class="mb-4 last:mb-0">
            <div class="flex justify-between items-center text-sm">
                <span class="text-gray-700">{{ channel.name }}</span>
                <span class="font-semibold text-gray-800">{{ channel.visitors }}</span>
            </div>
            <div class="w-full h-3 mt-2 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full rounded-full transition-all duration-700 ease-in-out" :style="{
                    width: channel.percentage + '%',
                    background: channel.color,
                }"></div>
            </div>
        </div>

        <div class="pt-5 text-center">
            <a href="#" class="text-indigo-500 text-sm font-semibold hover:underline">
                Grafico Completo →
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopVacinas",
    data() {
        return {
            channels: [
                { name: 'Vacina Hepatite B', visitors: '200', percentage: 100, color: "#b6c7ff" },
                { name: 'Vacina rotavírus humano G1P1', visitors: '180', percentage: 89, color: "#b6c7ff" },
                { name: 'Vacina HPV Papilomavírus humano ', visitors: '160', percentage: 72, color: "#b6c7ff" },
                { name: 'Vacina Difteria e Tétano', visitors: '140', percentage: 66, color: "#b6c7ff" },
                { name: 'Vacina Febre Amarela (VFA - atenuada)', visitors: '100', percentage: 50, color: "#b6c7ff" },
                { name: 'Vacina Difteria, Tétano, Pertussis', visitors: '80', percentage: 36, color: "#b6c7ff" },
                { name: 'Vacina Tríplice viral', visitors: '50', percentage: 25, color: "#b6c7ff" },
                { name: 'Vacina Difteria, Tétano, Pertussis (dTpa - acelular) ', visitors: '25', percentage: 17, color: "#b6c7ff" },
            ]
        }
    }
}
</script>