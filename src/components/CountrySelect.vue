<template>
    <div class="relative">
        <label v-if="covidStore.selectedCountry === ''" for="countrySelect" class="absolute left-3 top-3">
            Select A Country
        </label>

        <select @change="covidStore.changeCountry(covidStore.selectedCountry)" id="countrySelect" v-model="covidStore.selectedCountry" class="form-select mt-10 block w-full boder p-3 rounded-md focus:outline-none shadow-md">
            <option>
                Global
            </option>
            <option v-for="country in covidStore.countries">
                {{ country.Country }}
            </option>
        </select>
    </div>

</template>

<script>
import dataStore from '../store/storeIndex.js'

export default {
    name: 'CountrySelect',
    data(){
        const covidStore = dataStore();
        return { covidStore };
    },
}

</script>