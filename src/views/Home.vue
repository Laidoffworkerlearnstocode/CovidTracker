<template>
    <div>
        Hello World!
    </div>

</template>

<script>
export default {
  name: 'Home',
  components: {
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
    const data = this.fetchCovidData()
  }
}

</script>