<template>
    <div class="min-h-screen flex items-center justify-center bg-base-200">
        <div class="w-full max-w-md p-8 shadow-lg rounded-2xl bg-base-100">
            <img :src="img" alt="USB Cidade Nova" class="h-48 w-full object-cover" />

            <form @submit.prevent="handleLogin" class="space-y-4">
                <div>
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="email" v-model="email" placeholder="Digite seu email"
                        class="input input-bordered w-full" required />
                </div>

                <div>
                    <label class="label">
                        <span class="label-text">Senha</span>
                    </label>
                    <input type="password" v-model="password" placeholder="Digite sua senha"
                        class="input input-bordered w-full" required />
                </div>

                <div class="flex justify-between items-center text-sm">
                    <label class="cursor-pointer flex items-center gap-2">
                        <input type="checkbox" class="checkbox checkbox-sm" v-model="remember" />
                        Lembrar de mim
                    </label>
                    <a href="#" class="link link-hover text-sm">Esqueceu a senha?</a>
                </div>

                <button type="submit" class="btn btn-primary w-full mt-4">Entrar</button>
            </form>

            <div class="divider">ou</div>

            <p class="text-center text-sm">
                Não tem uma conta?
                <RouterLink to="/cadastro" class="link link-primary">Cadastre-se</RouterLink>
            </p>
        </div>
    </div>
</template>

<script setup>
import router from '@/router'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const remember = ref(false)
const img = "./imgs/logo.png"

function handleLogin() {
    router.push({ name: "home" })
}
</script>