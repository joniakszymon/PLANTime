<template>
  <h1>Plants</h1>
  <Search @search-value="filterPlants" />
  <div class="plants-container">
    <div
      v-for="plant in plants.data"
      :key="plant.id"
      class="plant-wrapper"
      @click="setDataToStore(plant)"
    >
      <div class="plant-img">
        <img
          :src="
            plant.image_url
              ? plant.image_url
              : 'https://fundacja-sprzymierzeni.pl/wp-content/uploads/2021/04/no-image-1.jpg'
          "
          :alt="plant.common_name"
        />
      </div>
      <div class="plant-info">
        <h3>{{ plant.common_name }}</h3>
        <p>Family: {{ plant.family }}</p>
        <p>Genus: {{ plant.genus }}</p>
        <p>Scientific name: {{ plant.scientific_name }}</p>
      </div>
      <div class="overlay">
        <span class="plus">+</span>
        <span>Add to garden</span>
      </div>
    </div>
  </div>
  <Pagination :plants="plants" @pagination-number="paginationNumber" />
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import Pagination from "@/components/common/PaginationCommon.vue";
import Search from "@/components/common/SearchComponent.vue";

export default defineComponent({
  name: "PlantsAll",
  components: { Pagination, Search },
  data() {
    return {
      paginationNum: Number,
    };
  },
  setup() {
    const store = useStore();
    const paginationNum = ref(1); // Inicjacja ref z wartością początkową
    const searchValue = computed(() => store.state.searchValue);

    onMounted(() => {
      store.dispatch("fetchData", {
        index: paginationNum.value,
        searchValue: searchValue,
      });
    });

    const plants = computed(() => store.state.plants);

    const paginationNumber = (target: any) => {
      paginationNum.value = target.value; // Zmiana wartości ref
      store.dispatch("fetchData", {
        index: paginationNum.value,
        searchValue: searchValue,
      }); // Wywołanie z nową wartością
    };

    return {
      plants,
      paginationNumber,
      searchValue,
    };
  },
  methods: {
    filterPlants(newVal: any) {
      this.$store.commit("setSearchValue", newVal);
      this.$store.dispatch("fetchData", {
        index: 1,
        searchValue: newVal,
      });
    },
    setDataToStore(plant: any) {
      this.$store.commit("setGardenPlants", plant);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.plants-container {
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  .plant-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 15px;
    border: 1px solid #a5a5a5;
    background-color: #fff;
    overflow: hidden;
    transition: all 0.4s;
    .overlay {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: -200px;
      width: 0;
      bottom: 0;
      content: "";
      background-color: #0c864d;
      z-index: 2;
      opacity: 1;
      transition: all 0.6s;
      span {
        color: #fff;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: bolder;
        &.plus {
          font-size: 38px;
        }
      }
    }
    h3 {
      margin: 0 0 20px;
    }
    .plant-img {
      img {
        width: 100%;
        height: auto;
        aspect-ratio: 1;
        object-fit: fill;
      }
    }
    .plant-info {
      padding: 10px;
    }
    &:hover {
      box-shadow: 0 0 10px 3px #dbdbdb;
      cursor: pointer;
      transform: scale(1.02);
      .overlay {
        opacity: 0.92;
        width: 100%;
        right: 0;
      }
    }
  }
}
</style>
