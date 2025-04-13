<template>
  <div class="w-full">
    <div class="navbar bg-base-300 shadow-sm p-4">
      <!-- Menu lateral para mobile -->
      <div class="flex-none lg:hidden">
        <div class="dropdown">
          <button tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <RouterLink to="/minha-unidade">Início</RouterLink>
            </li>
            <li>
              <RouterLink to="/unidades">Unidades</RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Logo -->
      <div class="flex-1">
        <RouterLink to="/minha-unidade" class="btn btn-ghost text-xl"> <img :src="img" alt="USB Cidade Nova"
            class="h-20 object-cover" /></RouterLink>
        <RouterLink to="/minha-unidade">Início</RouterLink> |
        <RouterLink to="/unidades">Unidades</RouterLink>
      </div>

      <!-- Campo de busca centralizado (desktop only) -->
      <div class="hidden lg:flex flex-1 justify-center">
        <input type="text" placeholder="Buscar" class="input input-bordered w-full max-w-md" />
      </div>

      <!-- Avatar -->
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img alt="Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Perfil</a></li>
            <li><a>Configurações</a></li>
            <li><a>Sair</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Campo de busca para mobile -->
    <div class="lg:hidden px-4 mt-2">
      <input type="text" placeholder="Buscar" class="input input-bordered w-full" />
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: "HeaderApp",
  components: {
    RouterLink
  },
  data() {
    return {
      img: "./imgs/logo2.png"
    }
  }
}
</script>

<style scoped></style>
