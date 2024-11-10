<template>
  <div>
    <!-- <Header/> -->
    <RouterView/>
    <Sidebar/>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
</script>