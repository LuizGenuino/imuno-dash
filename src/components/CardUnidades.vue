<template>
    <div class="card bg-base-300 w-96 shadow-md m-4">
        <!-- Imagem -->
        <figure>
            <img :src="img" alt="USB Cidade Nova" class="h-48 w-full object-cover" />
        </figure>

        <!-- Conteúdo do Card -->
        <div class="card-body">
            <!-- Título -->
            <h2 class="card-title text-primary">Unidade Básica de Saúde Ademar Rocha de Oliveira</h2>

            <!-- Status -->
            <div class="badge badge-success w-fit">Aberto</div>

            <!-- Informações -->
            <div class="mt-3 space-y-2 text-sm">
                <p><strong>Horário de Atendimento:</strong> 07h às 17h</p>
                <p><strong>Endereço:</strong> Rua das Flores, 123 - Bairro Cidade Nova</p>
            </div>

            <!-- Ações (opcional) -->
            <div class="card-actions justify-end mt-4">
                <button class="btn btn-outline btn-sm" @click="relatorio">Ver Detalhes</button>
            </div>
        </div>
    </div>

</template>

<script>
import router from '@/router';

export default {
    name: "CardUnidades",
    data() {


        return {
            img: "./imgs/ubs-cavalhada.png"
        }
    },

    methods: {
        relatorio() {
            router.push({ name: "relatorio" })
        },
    }
}
</script>

<style lang="scss" scoped></style>