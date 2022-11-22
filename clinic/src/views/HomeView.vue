<script setup lang="ts">
  import HeaderView from './Header/HeaderView.vue';
  import BodyView from './Body/BodyView.vue';
  import SideBarModal from './sideBar/SideBarModal.vue';
</script>

<template>
  <main>
    <HeaderView />
    <SideBarModal />
    <BodyView />
  </main>
</template>
