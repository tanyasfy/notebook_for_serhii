<template>
  <router-view />
</template>

<script setup lang="ts">
import { provideWebsockeService } from './service/websocketService';
provideWebsockeService()

</script>
