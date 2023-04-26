import { defineStore } from "pinia";
import loadingImage from '../assets/hourglass.gif'

const dataStore = defineStore({
    id: "dataStore",
    state: () => ({
        loading: true,
        title:'Global',
        dataDate:'',
        stats:{},
        countries:[],
        loadingImage,
    }),
    actions: {
        async fetchCovidData() {
            try{
                const response = await fetch('https://api.covid19api.com/summary');
                const data = await response.json();
                this.loading = false;
                this.dataDate = data.Date;
                this.stats = data.Global;
                this.countries = data.Countries;
            }catch(err){
              console.log(err);
            }
          }, 
        }
    });

export default dataStore;
