<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Edit Target Budget Refefe</h3>

        </div>


        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <input type="hidden" v-model="form.idpaps" class="form-control" autocomplete="positionchrome-off">



                <label>Major Final Output</label>
                <input type="text" class="form-control" v-model="mfo_text" readonly/>
                <input type="hidden" v-model="form.idmfo" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.idmfo">{{ form.errors.idmfo }}</div>
                <label>PAPS {{ form.idpaps }} </label>
                <select class="form-control" v-model="form.idpaps" @change="setMFOandSuccessIndicator">
                    <option></option>
                    <option v-for="paps in paps_selected" :value="paps.id">
                        {{ paps.paps_desc }} - {{ paps.id }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.idpaps">
                    <span v-if="form.idpaps">A budget with the selected PAPS and program has already been saved. Select a different PAPS!</span>
                    <span v-else>PAPS is required</span>
                </div>

                <label>Success Indicator</label>
                <input type="text" class="form-control" v-model="success_indicator_text" readonly/>
                <input type="hidden" v-model="form.idsuccessindicator" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.idsuccessindicator">{{ form.errors.idsuccessindicator }}</div>
                <label>PROGRAM</label>&nbsp;

                <div>
                    <multiselect :options="formattedPrograms" :searchable="true" v-model="form.idprogram" label="label"
                        track-by="label" @close="loadOOE">
                    </multiselect>
                </div>

                <div class="fs-6 c-red-500" v-if="form.errors.idprogram">
                    <span v-if="form.idprogram">A budget with the selected PAPS and program has already been saved. Select a different program!</span>
                    <span v-else>Program is required</span>
                </div>



                <div class="fs-6 c-red-500" v-if="form.errors.GAD">{{ form.errors.GAD }}</div>
                <label>AMOUNT </label>
                <!-- <input type="text" class="form-control" :value="computed_amount" readonly /> -->
                 <!-- famaount: {{ form.amount }} -->
                <input type="number" class="form-control" v-model="form.amount"  />
                <input type="text" class="form-control" :value="computed_amount" hidden/>
                <div class="fs-6 c-red-500" v-if="form.errors.amount">{{ form.errors.amount }}</div>


                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn text-white btn-primary mt-3 text-white" @click="submit()"
                    :disabled="form.processing">
                    Save changes
                </button>

            </form>
        </div>
        {{ editData }}
        **********************
        {{ form }}
        **********************
        {{ paps_selected }}
    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Places from "@/Shared/PlacesShared";
import { ModelSelect } from 'vue-search-select';
import Select2 from 'vue-select2';
//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        paps_selected: Object,
        opcr_targets: Object,
        programs: Object,
        ooes: Object,
        opcr_list_id: String,
        editData: Object,

    },
    components: {
        //BootstrapModalNoJquery,
        Select2,
        ModelSelect,
        Places: () => new Promise((resolve) => {
            setTimeout(() => {
                resolve(Places)
            }, 2000)
        })

    },
    data() {
        return {
            submitted: false,
            chart_selected: "",
            pap_selected: "",
            prog_selected: "",
            total: 0,
            idprogram_selected: "0",
            program_typed: "",
            raaotype: "",
            ind: "",
            ind_opcr: "",
            form: useForm({
                idsuccessindicator: "",
                idmfo: "",
                idpaps: "",
                amount: 0,
                idprogram: "",
                idtarget: "",
                opcr_list_id: "",
                id: null
            }),
            pageTitle: "",
            data_programs: [],
            dt_ooes: [],
            dt_ooes_length: [],
        };
    },
    computed: {

        formattedPrograms() {
            let dataPrograms = this.programs;
            if (this.form.raaotype) {
                dataPrograms = dataPrograms.filter((program) => program.ftype === this.form.raaotype);
            }
            if (this.form.FFUNCCOD) {
                dataPrograms = dataPrograms.filter((program) => program.FFUNCCOD === this.form.FFUNCCOD);
            }

            return dataPrograms.map((program) => ({
                value: program.recid,
                label: program.FPROGRAM + " "+program.recid + " "+program.raohsid,
                raaotype: program.ftype,
                FFUNCCOD: program.FFUNCCOD,
                raohsid: program.raohsid
            }));

        },

        computed_amount() {
            return this.format_number_conv(this.form.amount, 2, true);
        }
    },
    watch: {
    "form.idpaps"(newIdpaps) {
      if (newIdpaps) {
        console.log("form.idpaps is set:", newIdpaps);
        this.setMFOandSuccessIndicator();
      }
    }
  },
    mounted() {

        this.data_programs = this.programs.map(programs => programs.FPROGRAM);
        // this.dt_ooes = [];
        this.dt_ooes = this.ooes;
        // this.pap_selected = this.pap1.paps_desc
        if (this.editData !== undefined) {
            if (this.bari) {
                this.bar = this.bari
            }
            this.pageTitle = "Edit"
            this.form.idmfo = this.editData.idmfo
            this.form.idpaps = this.editData.idpaps
            console.log("idpaps: "+this.form.idpaps);

            this.form.amount = this.editData.amount

            // this.form.year = this.editData.year
            // this.form.FFUNCCOD = this.editData.FFUNCCOD
            // this.form.raaotype = this.editData.raaotype
            this.filterProgram();
            this.$nextTick(() => {
                console.log("NextTick - form.idpaps:", this.form.idpaps);
                if (this.form.idpaps) {
                    this.setMFOandSuccessIndicator();
                }
            });

            // ✅ Watch for changes in form.idpaps
            this.$watch(
                () => this.form.idpaps,
                (newIdpaps) => {
                    if (newIdpaps) {
                        console.log("form.idpaps is set:", newIdpaps);
                        this.setMFOandSuccessIndicator();
                    }
                },
                { immediate: true, deep: true }
            );
            this.console.log(" Naa bot diri")
            // this.form.idprogram = this.editData.idprogram
            //this.loadOOE();
            // this.form.idooe = this.editData.idooe
            // this.form.account_code = this.editData.account_code
            // this.form.past_year = this.editData.past_year
            // this.form.first_sem = this.editData.first_sem
            // this.form.second_sem = this.editData.second_sem
            // this.form.budget_year = this.editData.budget_year
            // this.form.idpaps = this.editData.idpaps
            // this.form.category = this.editData.category
            // this.form.GAD = this.editData.GAD
            // this.form.CCET = this.editData.CCET
            // this.form.id = this.editData.id
            // this.form.object_of_expenditure = this.editData.object_of_expenditure
            // this.searchByAccountCodeForEditMounted();
        } else {
            this.pageTitle = "Create "
            // this.form.idpaps = this.pap1.id
            this.form.opcr_list_id = this.opcr_list_id
            this.setCurrentYear()
        }

    },

    methods: {
        submit() {
            if (this.editData !== undefined) {
                    this.form.patch("/appropriations/", this.form);
            } else {
                // alert("Sample");
                var url = "/opcrbudgeting/store"
                // alert('for store '+url);
                this.form.post(url);

            }


        },
        addAccount() {
            alert('addAccount');
        },



        searchByAccountCode() {
            var ind = this.codes.indexOf(this.form.account_code.toString());
            this.chart_selected = this.accounts[parseInt(ind)];
            this.form.object_of_expenditure = this.chart_selected

        },
        searchByAccountCodeForEditMounted() {
            var ind = this.codes.indexOf(this.form.account_code.toString());
            this.chart_selected = this.accounts[parseInt(ind)];

        },
        setCurrentYear() {

            var yr = new Date().getFullYear()
            this.form.year = parseFloat(yr) + 1;
        },
        filterProgram() {
            // this.form.idprogram=null;
            // this.form.idooe=null;
            const selectElement = this.$refs.raaoSelect;
            // this.form.category = selectElement.options[selectElement.selectedIndex].text;

        },
        async loadOOE() {
            this.dt_ooes = [];
            var year1 = parseFloat(this.form.year) - 1;
            // alert(loadOOE);
            await axios.get("/ooes/filtered/ooes", {
                params: {
                    idprogram: this.form.idprogram,
                    FFUNCCOD: this.form.FFUNCCOD,
                    raaotype: this.form.raaotype,
                    year: year1
                }
            }).then((response) => {
                this.dt_ooes = response.data;
            }).catch((error) => {
                console.error(error);
            });
            this.form.amount = this.calculateTotalAnnual();
        },
        setMFOandSuccessIndicator(){
            this.ind = this.paps_selected.findIndex(paps => paps.id === this.form.idpaps);
            this.ind_opcr = this.opcr_targets.findIndex(optarg => optarg.idpaps===this.form.idpaps);
            if(this.ind>-1){
                this.form.idmfo = this.paps_selected[this.ind].idmfo;
                if(this.paps_selected[this.ind].m_f_o){
                    this.mfo_text=this.paps_selected[this.ind].m_f_o.mfo_desc;
                }
                if(this.paps_selected[this.ind].success_indicator){
                    this.success_indicator_text=this.paps_selected[this.ind].success_indicator.success_indicator;
                    this.form.idsuccessindicator=this.paps_selected[this.ind].success_indicator.id;
                }
                //this.success_indicator_text=this.
            }else{
                this.mfo_text="";
                this.form.idmfo="";
                this.success_indicator_text="";
                this.form.idsuccessindicator="";
            }
            if(this.ind_opcr>-1){
                this.form.idtarget = this.opcr_targets[this.ind_opcr].id;
            }
            console.log("index tt: "+this.ind)
            console.log("idmfo tt: "+this.form.idmfo)

        },
        calculateTotalAnnual() {
            return this.dt_ooes.reduce((total, item) => {
                let annualTotal = item.sem1 + item.sem2;
                // alert(item.sem1)
                console.log(item.sem1)
                return total + annualTotal;
            }, 0);
            },


    },

};
</script>
