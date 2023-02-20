<template>
  <div class="home">
    <Plants />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Plants from "@/components/PlantsAll.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    Plants,
  },
});
</script>
