<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Edit Target Budget </h3>
            <!-- {{ pageTitle }} -->
            <!-- <Link :href="`/appropriations/${pap1.id}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link> -->
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
         <!-- {{ editData }}
        **********************
        {{ form }}
        ********************** -->
        <!-- {{ paps_selected }} -->
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
        // paps: Object,
        // pap1: Object,
        // editData: Object,
        // sectors: Object,
        // accounts: Object,
        // codes: Object,
        // aip: Object,
        // total_budget_year: Object,
        // functions: Object,
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
            // + " "+program.recid + " "+program.raohsid
            return dataPrograms.map((program) => ({
                value: program.recid,
                label: program.FPROGRAM ,
                raaotype: program.ftype,
                FFUNCCOD: program.FFUNCCOD,
                raohsid: program.raohsid
            }));

        },
        // getTotal12() {
        //     var f1 = parseFloat(this.form.first_sem);
        //     var f2 = parseFloat(this.form.second_sem);
        //     var tot = f1 + f2;
        //     var tat = this.format_number_conv(tot, 2, true);
        //     return tat;
        // },
        // computed_pastyear() {
        //     // var p_year = this.format_number_conv(this.form.past_year,2,true);
        //     // if(isNaN(p_year)){
        //     //     return "0.00"
        //     // }else{
        //     //     return this.format_number_conv(this.form.past_year,2,true);
        //     // }
        //     return this.format_number_conv(this.form.past_year, 2, true);
        // },
        // computed_sem1() {
        //     //var s1 = parseFloat(this.form.sem1);
        //     return this.format_number_conv(this.form.first_sem, 2, true);
        //     //return this.format_number_conv(s1,2,true);
        //     //return isNaN(s1) ? '0.00' : s1;

        // },
        // computed_sem2() {
        //     return this.format_number_conv(this.form.second_sem, 2, true);
        // },
        computed_amount() {
            return this.format_number_conv(this.form.amount, 2, true);
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
            this.form.idpaps = Number(this.editData.idpaps)
            this.ind = this.paps_selected.findIndex(paps => paps.id === this.form.idpaps);
            console.log(this.ind)
            console.log(this.form.idpaps);
            if(this.paps_selected){
                this.$nextTick(() => {
                    if (this.form.idpaps) {
                        console.log(this.paps_selected)
                        console.log(this.form.idpaps)
                        this.setMFOandSuccessIndicator();
                    }
                });
            }

            // this.$watch(
            //     () => this.form.idpaps,
            //     (newIdpaps) => {
            //         if (newIdpaps) {
            //             console.log("form.idpaps is set:", newIdpaps);
            //             this.setMFOandSuccessIndicator();
            //         }
            //     },
            //     { immediate: true, deep: true }
            // );
            this.form.amount = this.editData.amount
            this.form.id =this.editData.id
            this.form.year = this.editData.year
            this.form.FFUNCCOD = this.editData.FFUNCCOD
            this.form.raaotype = this.editData.raaotype
            this.filterProgram();
            this.form.idprogram = this.editData.idprogram
            this.form.opcr_list_id=this.editData.opcr_list_id
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
                // alert(this.form.id);
                this.form.patch("/opcrbudgeting/update/"+this.form.id, this.form);
            } else {
                // alert("Sample");
                var url = "/opcrbudgeting/store"
                // alert('for store '+url);
                this.form.post(url);

            }
            // this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
            // var aip_mooe = parseFloat(this.aip.MOOE);
            // var aip_ps = parseFloat(this.aip.PS);
            // var aip_co = parseFloat(this.aip.CO);
            // var app_mooe = parseFloat(this.total_budget_year.total_approp_mooe) + parseFloat(this.form.budget_year);
            // var app_ps = parseFloat(this.total_budget_year.total_ps_approp) + parseFloat(this.form.budget_year);
            // var app_co = parseFloat(this.total_budget_year.total_co_approp) + parseFloat(this.form.budget_year);
            // var addable = true;
            //var adval=0;
            // var possible_difference = 0;
            // var maxi = parseFloat(0);
            // if (this.form.category == 'Capital Outlay') {
            //     if (app_co > aip_co) {
            //         addable = false;
            //         // possible_difference=aip_co - parseFloat(this.total_budget_year.total_co_approp);
            //         maxi = parseFloat(aip_co);
            //     }
            // }
            // if (this.form.category == 'Maintenance, Operating, and Other Expenses') {
            //     if (app_mooe > aip_mooe) {
            //         maxi = parseFloat(aip_mooe);
            //         addable = false;
            //         // possible_difference=aip_mooe - parseFloat(this.total_budget_year.total_approp_mooe);
            //     }
            // }
            // if (this.form.category == 'Personnel Services') {
            //     if (app_ps > aip_ps) {
            //         maxi = parseFloat(app_ps);
            //         addable = false;
            //         // possible_difference=aip_ps - parseFloat(this.total_budget_year.total_ps_approp);
            //     }
            // }

            // if (addable == false) {
            //     if (this.editData !== undefined) {
            //         this.form.patch("/appropriations/", this.form);
            //     } else {
            //         alert("The maximum allowable value for budget year is only " + maxi + ". ")
            //     }
            // } else {
            //     if (this.editData !== undefined) {
            //         this.form.patch("/appropriations/", this.form);
            //     } else {
            //         // alert("Sample");
            //         var url = "/appropriations/store"
            //         // alert('for store '+url);
            //         this.form.post(url);
            //     }
            // }

        },
        addAccount() {
            // if (!this.accounts.includes(this.typed)) this.accounts.push(this.typed);
            // this.selected = this.typed;
            alert('addAccount');
        },


        // setCode() {
        //     var ind = this.accounts.indexOf(this.chart_selected);
        //     this.form.account_code = this.codes[ind];
        //     this.form.object_of_expenditure = this.chart_selected
        //     // this.budget_code = this.budgets.indexOf(this.form.account_code.toString());
        //     // this.form.particulars = this.chart_selected
        // },
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
            }else{
                this.mfo_text="";
                this.form.idmfo="";
                this.success_indicator_text="";
                this.form.idsuccessindicator="";
            }
            if(this.ind_opcr>-1){
                this.form.idtarget = this.opcr_targets[this.ind_opcr].id;
            }
            console.log("index: rtert "+this.ind)
            console.log("idmfo: dsadasd "+this.form.idmfo)
        },
        calculateTotalAnnual() {
            return this.dt_ooes.reduce((total, item) => {
                let annualTotal = item.sem1 + item.sem2;
                // alert(item.sem1)
                console.log(item.sem1)
                return total + annualTotal;
            }, 0);
            },
        // setOOEValue() {
        //     var prog_sel = this.dt_ooes.filter(ooes => ooes.recid === this.form.idooe);
        //     this.form.account_code = prog_sel[0].FACTCODE;
        //     this.searchByAccountCode();
        //     this.form.object_of_expenditure = prog_sel[0].FOOEDESC;
        //     this.form.first_sem = this.format_number_conv(prog_sel[0].sem1, 2, false);
        //     this.form.second_sem = this.format_number_conv(prog_sel[0].sem2, 2, false);
        //     this.form.past_year = this.format_number_conv(prog_sel[0].past_year, 2, false);
        // },

    },

};
</script>
