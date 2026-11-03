<template>
    <div class="masonry-item w-100">
        <div class="row gap-20">
            <div class="col-md-3 col-6">
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Municipalities {{ my_mun }}</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer peer-greed">
                                <span id="sparklinedash"></span>
                            </div>
                            <select class="form-control" v-model="munsel" @change="loadBar">
                                <option v-for="munn in mun">
                                    {{ munn.citymunDesc }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Barangay</h6>

                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer peer-greed">
                                <span id="sparklinedash"></span>
                            </div>
                            <select class="form-control">
                                <option></option>
                                <option v-for="barr in bar">
                                    {{ barr.brgyDesc }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>



export default {
    props:{
        mun: Array,
        // bar: Array,

    },
    data(){
        return{
            mun_code: "",
            barsel: "",
            munsel: "",
            bar: [],
        }
    },
    computed:{
        my_mun(){
            return this.mun_code;
        },
        my_bar(){
            return this.bar;
        }
    },
    mounted(){
        //this.bar=[];
    },
    watch:{

    },
    methods: {
        loadBar(){
            alert(this.munsel);
            if(this.munsel===""){

            }else{

                axios.post("/places/bar",{mun: this.munsel}).then((response)=>{
                    this.bar = response.data.data
                });
            }
        },
        showMun(){
            alert(this.mun_code);
        }
    },

}
</script>
