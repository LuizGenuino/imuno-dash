<template>
    <div class="flex items-center justify-between p-4 bg-base-300 rounded-2xl max-w-2xl m-4">
        <div class="flex-1">
            <h2 class="text-xl font-bold">
                Vacina BCG <span class="font-normal">(Dose única)</span>
            </h2>
            <p class="text-base mt-1">Tomar: <span class="font-medium">Ao nascer</span></p>
            <p class="text-sm mt-1">
                <strong>Doenças evitadas:</strong>
                formas graves da <span class="font-bold underline">tuberculose</span>
                (miliar e meníngea)
            </p>
        </div>

        <div class="flex flex-col items-center justify-center w-32 h-32 rounded-full bg-neutral ">
            <span class="text-3xl font-semibold text-white">50</span>
            <span class="text-xs text-center text-white">unidade<br>disponíveis</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "CardVacinasDisponiveis"
}
</script>