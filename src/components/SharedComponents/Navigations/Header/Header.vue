<template>
  <q-header class="bg-dark" elevated>
    <div class="container-xl">
      <q-toolbar style="height: 60px">
        <q-avatar style="margin-left: -13px">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title>Movie App</q-toolbar-title>

        <q-btn style="margin-right: -13px" flat round dense icon="mdi-cog" />
      </q-toolbar>
    </div>
  </q-header>
</template>

<script setup>
defineOptions({
  name: 'HeaderComponent'
});
</script>
