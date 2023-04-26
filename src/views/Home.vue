<template>
    <main v-if="!loading">
      Show Data      
    </main>

    <main v-else class="flex flex-col align-center justify-center text-center">
      <div class="text-gray-500 text-3xl mt-10 mb-6">
        Fetching Data... 
      </div>
      <img :src="loadingImage" alt="loading" class="w-24 m-auto">
    </main>

</template>

<script>
import loadingImage from '../assets/hourglass.gif'
export default {
  name: 'Home',
  data() {
    return {
      loading: true,
      title:'Global',
      dataDate:'',
      stats:{},
      countries:[],
      loadingImage,
    }
  },
  methods: {
    async fetchCovidData() {
      try{
        const response = await fetch('https://api.covid19api.com/summary')
        const data = await response.json()
        return data
      }catch(err){
        console.log(err)
      }
    }
  },
  async created(){
    const data = await this.fetchCovidData()
    this.dataDate = data.Date
    this.stats = data.Global
    this.countries = data.Countries
    this.loading = false
  }
}

</script>