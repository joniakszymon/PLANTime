<template>
  <div class="garden">
    <h1>My garden</h1>
    <GardenPlants />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import GardenPlants from "@/components/GardenPlants.vue";

export default defineComponent({
  name: "GardenView",
  components: { GardenPlants },
});
</script>
