<template>
  <div class="search-container">
    <p>{{ plantName }}</p>
    <input v-model="plantName" type="text" placeholder="Search for plants..." />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchComponent",
  data() {
    return {
      plantName: "",
    };
  },
  watch: {
    plantName: {
      handler(newVal) {
        this.$emit("search-value", newVal);
      },
    },
  },
});
</script>
<style lang="scss" scoped>
.search-container {
  text-align: center;
  input {
    padding: 5px 15px;
  }
}
</style>
