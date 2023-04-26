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
        selectedCountry:'',
    }),
    actions: {
        async fetchCovidData() {
            try{
                const response = await fetch('https://api.covid19api.com/summary');
                const data = await response.json();
                this.loading = false;
                this.dataDate = data.Date;
                this.stats = data.Global;
                this.global = data.Global;
                this.countries = data.Countries;
            }catch(err){
              console.log(err);
            }
          }, 
        
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        changeCountry(country){
            this.title = country;
            this.selectedCountry = country;
            if (country === 'Global'){
                this.stats = this.global;
            } else {
                this.stats = this.countries.find(object => object.Country === country);
            }
        },

        async getLatestData(){
            try{
                const response = await fetch('https://api.covid19api.com/summary');
                const data = await response.json();
                this.dataDate = data.Date;
                this.stats = data.Global;
                this.global = data.Global;
                this.countries = data.Countries;
                this.title = 'Global';
                this.selectedCountry = 'Global';
            }catch(err){
              console.log(err);
            }
        },
    },
    getters: {
        getTime () {
            const timeStamp = moment(this.dataDate).format('MMMM Do YYYY  h:mm:ss a');
            return timeStamp;
        }
    }
    });

export default dataStore;
