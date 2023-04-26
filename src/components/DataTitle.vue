<template>
    <div class="text-center">
        <h2 class="text-3xl font-bold">
            {{covidStore.title}}
        </h2>
        <div class="text-2xl mt-4 mb-10">
            {{covidStore.getTime}}
        </div>
    </div>

</template>

<script>
import dataStore from '../store/storeIndex.js'

export default {
    name: 'DataTitle',
    data(){
    const covidStore = dataStore();
    return { covidStore };
  },
}

</script>