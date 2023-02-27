<template>
  <div>
    <div class="plants-container">
      <div v-if="gardenPlants.length === 0" class="empty-garden">
        <h1>Your garden is empty :(</h1>
        <h2><router-link to="/plants">Add to your garden!</router-link></h2>
      </div>
      <div v-for="plant in gardenPlants" :key="plant.id" class="plant-wrapper">
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
      </div>
    </div>
    <button @click="goToPlants">Back</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "GardenPlants",
  data() {
    return {
      gardenPlants: [],
    };
  },
  created() {
    console.log(this.gardenPlants);
    this.gardenPlants = this.$store.state.gardenPlants;
  },
});
</script>
<style scoped lang="scss">
.empty-garden {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
  }
}
</style>
