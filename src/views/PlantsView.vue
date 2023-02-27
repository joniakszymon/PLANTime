<template>
  <div class="plants">
    <Plants />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Plants from "@/components/PlantsAll.vue"; // @ is an alias to /src

export default defineComponent({
  name: "PlantsView",
  components: {
    Plants,
  },
});
</script>
