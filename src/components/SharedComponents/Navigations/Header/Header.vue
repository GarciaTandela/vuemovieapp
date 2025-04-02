<template>
  <q-header class="bg-dark cursor-pointer" elevated @click="goToHomePage">
    <div class="container-xl">
      <q-toolbar style="height: 60px">
        <q-avatar style="margin-left: -13px">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title>Movie App</q-toolbar-title>

        <q-btn style="margin-right: -13px" flat round dense icon="mdi-cog">
          <q-tooltip style="font-size: 13px"> User Preferences </q-tooltip>
        </q-btn>
      </q-toolbar>
    </div>
  </q-header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToHomePage = () => {
  router.push('/');
};
defineOptions({
  name: 'HeaderComponent'
});
</script>
