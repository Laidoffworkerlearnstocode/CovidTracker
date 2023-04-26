<template>
    <div class="grid md:grid-cols-2 gap-4">
        <!-- Box1 -->
        <div class="shadow-md bg-brightRedSupLight p-10 text-center rounded-md">
            <h3 class="text-3xl font-bold mb-4">
                Cases
            </h3>

            <div class="text-2xl mb-4">
                <span class="font-bold">
                    New: {{ covidStore.numberWithCommas(covidStore.stats.NewConfirmed) }}
                </span>
            </div>

            <div class="text-2xl mb-4">
                <span class="font-bold">
                    Total: {{ covidStore.numberWithCommas(covidStore.stats.TotalConfirmed) }}
                </span>
            </div>
        </div>
        <!-- Box2 -->
        <div class="shadow-md bg-brightRedlight p-10 text-center rounded-md">
            <h3 class="text-3xl font-bold mb-4">
                Deaths
            </h3>

            <div class="text-2xl mb-4">
                <span class="font-bold">
                    New: {{ covidStore.numberWithCommas(covidStore.stats.NewDeaths) }}
                </span>
            </div>

            <div class="text-2xl mb-4">
                <span class="font-bold">
                    Total: {{ covidStore.numberWithCommas(covidStore.stats.TotalDeaths) }}
                </span>
            </div>
        </div>
    </div>    

</template>

<script>
import dataStore from '../store/storeIndex.js'

export default {
    name: 'DataBoxes',
    data(){
    const covidStore = dataStore();
    return { covidStore };
  },
}

</script>