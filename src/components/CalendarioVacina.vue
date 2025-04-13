<template>
    <div class="max-w-4xl mx-auto p-6">
        <h1 class="text-3xl font-bold mb-6 text-center">Calendário Nacional de Vacinação</h1>

        <div class="space-y-4">
            <!-- Crianças -->
            <div tabindex="0" class="collapse collapse-arrow bg-base-100 border border-base-300">
                <div class="collapse-title font-semibold text-xl">👶 Crianças
                </div>
                <div class="collapse-content text-sm">
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>BCG:</strong> Ao nascer</li>
                        <li><strong>Hepatite B:</strong> Ao nascer, 1 e 6 meses</li>
                        <li><strong>Pentavalente:</strong> 2, 4 e 6 meses</li>
                        <li><strong>VIP (Poliomielite Inativada):</strong> 2, 4 e 6 meses</li>
                        <li><strong>Rotavírus:</strong> 2 e 4 meses</li>
                        <li><strong>Pneumocócica 10V:</strong> 2, 4 e 12 meses</li>
                        <li><strong>Meningocócica C:</strong> 3, 5 e 12 meses</li>
                        <li><strong>Tríplice Viral:</strong> 12 e 15 meses</li>
                    </ul>
                </div>
            </div>

            <!-- Adolescentes -->
            <div tabindex="0" class="collapse collapse-arrow bg-base-100 border border-base-300">
                <div class="collapse-title font-semibold text-xl">👧 Adolescentes
                </div>
                <div class="collapse-content text-sm">
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>HPV:</strong> Meninas e meninos de 9 a 14 anos</li>
                        <li><strong>Meningocócica ACWY:</strong> 11 a 14 anos</li>
                    </ul>
                </div>
            </div>

            <!-- Adultos e Idosos -->
            <div tabindex="0" class="collapse collapse-arrow bg-base-100 border border-base-300">
                <div class="collapse-title font-semibold text-xl">👵 Adultos e Idosos
                </div>
                <div class="collapse-content text-sm">
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>dT (Dupla adulto):</strong> Reforço a cada 10 anos</li>
                        <li><strong>Febre Amarela:</strong> Dose única, com reforço conforme necessidade</li>
                        <li><strong>Hepatite B:</strong> 3 doses, conforme situação vacinal</li>
                        <li><strong>Influenza (gripe):</strong> Campanha anual</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CalendarioVacina"
}
</script>