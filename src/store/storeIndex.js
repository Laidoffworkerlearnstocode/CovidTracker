import { defineStore } from "pinia";
import loadingImage from '../assets/hourglass.gif'
import moment from "moment";

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
                this.selectedCountry = 0;
            }catch(err){
              console.log(err);
            }
          }, 
        
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    getters: {
        getTime () {
            const timeStamp = moment(this.dataDate).format('MMMM Do YYYY  h:mm:ss a');
            return timeStamp;
        }
    }
    });

export default dataStore;
