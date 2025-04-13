<template>
    <div class="p-4 w-full">
        <!-- Topo: busca e botão -->
        <div class="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
            <div class="relative w-full sm:max-w-xs">
                <input type="text" v-model="searchQuery" placeholder="Faça uma busca..."
                    class="input input-bordered w-full pr-10" />
                <svg class="w-5 h-5 absolute top-2.5 right-3 text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
            </div>
        </div>

        <!-- Tabela com overflow -->
        <div class="bg-white rounded-lg shadow overflow-x-auto">
            <table class="min-w-full text-sm text-gray-700">
                <thead class="bg-gray-100 text-gray-600">
                    <tr>
                        <th class="px-4 py-3 text-left whitespace-nowrap">Nº do lote</th>
                        <th class="px-4 py-3 text-left whitespace-nowrap">ID do lote</th>
                        <th class="px-4 py-3 text-left whitespace-nowrap">Data validade</th>
                        <th class="px-4 py-3 text-left whitespace-nowrap">Totais de entradas</th>
                        <th class="px-4 py-3 text-left whitespace-nowrap text-red-500">Totais de saídas *</th>
                        <th class="px-4 py-3 text-left whitespace-nowrap">Totais de aplicadas</th>
                        <th class="px-4 py-3 text-left whitespace-nowrap text-red-500">Saldo total **</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in paginatedFilteredData" :key="index"
                        class="border-b hover:bg-gray-50 transition-all">
                        <td class="px-4 py-3">{{ item.numero }}</td>
                        <td class="px-4 py-3">{{ item.id }}</td>
                        <td class="px-4 py-3">{{ item.validade }}</td>
                        <td class="px-4 py-3">{{ item.entrada }}</td>
                        <td class="px-4 py-3">{{ item.saida }}</td>
                        <td class="px-4 py-3">{{ item.aplicada }}</td>
                        <td class="px-4 py-3">{{ item.saldo }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Notas -->
        <div class="mt-3 text-xs text-gray-500 space-y-1">
            <p><span class="text-red-500">*</span> Totais de Saídas: Exceto retirada por Utilização</p>
            <p><span class="text-red-500">**</span> Saldo Total: Totais de Entradas - Totais de Saídas - Totais de
                Aplicadas</p>
        </div>

        <!-- Paginação -->
        <div class="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div class="flex items-center gap-2 text-sm">
                <label>Quantidade por Página:</label>
                <select v-model="itemsPerPage" class="select select-sm select-bordered w-20">
                    <option v-for="option in [5, 10, 15]" :key="option" :value="option">{{ option }}</option>
                </select>
            </div>
            <div class="flex items-center gap-2 text-sm">
                <button @click="prevPage" :disabled="currentPage === 1" class="btn btn-sm btn-outline">Anterior</button>
                <span>Página {{ currentPage }} de {{ totalPages }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="btn btn-sm btn-outline">Próxima</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoteCompletoTable",
    data() {
        return {
            currentPage: 1,
            itemsPerPage: 5,
            searchQuery: "",
            data: [
                { numero: "202010020", id: 21, validade: "02/10/2023", entrada: 501, saida: 1, aplicada: 499, saldo: 1 },
                { numero: "202010036", id: 20, validade: "24/10/2023", entrada: 500, saida: 0, aplicada: 465, saldo: 35 },
                { numero: "210051", id: 382, validade: "28/02/2022", entrada: 310, saida: 0, aplicada: 312, saldo: -2 },
                { numero: "210134", id: 1023, validade: "31/03/2022", entrada: 310, saida: 230, aplicada: 79, saldo: 1 },
                { numero: "213J21A", id: 25322, validade: "30/09/2023", entrada: 505, saida: 45, aplicada: 460, saldo: 0 },
            ],
        };
    },
    computed: {
        filteredData() {
            const q = this.searchQuery.toLowerCase();
            return this.data.filter(item =>
                Object.values(item).some(val =>
                    String(val).toLowerCase().includes(q)
                )
            );
        },
        totalPages() {
            return Math.ceil(this.filteredData.length / this.itemsPerPage);
        },
        paginatedFilteredData() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredData.slice(start, end);
        },
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.totalPages) this.currentPage++;
        },
        prevPage() {
            if (this.currentPage > 1) this.currentPage--;
        },
    },
};
</script>