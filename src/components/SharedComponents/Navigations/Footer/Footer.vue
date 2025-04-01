<template>
  <q-footer style="background: #121212">
    <div>
      <q-toolbar>
        <q-toolbar-title class="flex flex-center">
          © {{ new Date().getFullYear() }} Movie App. All rights reserved.</q-toolbar-title
        >
      </q-toolbar>
    </div>
  </q-footer>
</template>

<script setup>
defineOptions({
  name: 'FooterComponent'
});
</script>
