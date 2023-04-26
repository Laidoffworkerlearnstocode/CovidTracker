<template>
    <div v-if="!covidStore.loading">
      <DataTitle/>
      <DataBoxes/>  
      <CountrySelect/>                      
    </div>

    <main v-else class="flex flex-col align-center justify-center text-center">
      <div class="text-gray-500 text-3xl mt-10 mb-6">
        Fetching Data... 
      </div>
      <img :src="covidStore.loadingImage" alt="loading" class="w-24 m-auto">
    </main>

</template>

<script>
import dataStore from '../store/storeIndex.js'
import DataTitle from '../components/DataTitle.vue'
import DataBoxes from '../components/DataBoxes.vue'
import CountrySelect from '../components/CountrySelect.vue'

export default {
  name: 'Home',
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect
},
  data(){
    const covidStore = dataStore();
    return { covidStore };
  },
  async created() {
    await this.covidStore.fetchCovidData();
  },
}

</script>