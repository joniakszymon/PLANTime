<template>
  <div class="pagination-container">
    <ul>
      <li v-for="link in plants?.links" :key="link.split('=')[1].match(/\d+/)">
        <button
          @click="emitPaginationNumber($event)"
          :value="parseInt(link.split('=')[1].match(/\d+/))"
        >
          {{ parseInt(link.split("=")[1].match(/\d+/)) }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaginationComponent",
  props: {
    value: Number,
    plants: Object,
  },
  methods: {
    emitPaginationNumber(event: MouseEvent) {
      const target = event.target as HTMLButtonElement;
      this.$emit("pagination-number", target);
    },
  },
});
</script>
<style scoped lang="scss">
.pagination-container {
  text-align: center;
  ul {
    display: inline-flex;
    list-style: none;
    column-gap: 10px;
  }
}
</style>
