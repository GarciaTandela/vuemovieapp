<template>
  <q-layout view="lHh Lpr lff">
    <Header></Header>
    <Footer></Footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Header from 'components/SharedComponents/Navigations/Header/Header.vue';
import Footer from 'components/SharedComponents/Navigations/Footer/Footer.vue';
defineOptions({
  name: 'DefaultLayout'
});
</script>
