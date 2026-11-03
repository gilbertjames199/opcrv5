<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Appropriations</h3>

            <Link :href="`/appropriations/${pap1.id}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>
        <h6>Programs, Projects, and Activities (PAPS) Selected: <u>{{ pap_selected }}</u> </h6>
        <!-- <div class="col-md-8">
            <button class="btn btn-secondary" @click="showModal" :disabled="submitted">Permissions</button>
        </div> -->

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <input type="hidden" v-model="form.idpaps" class="form-control" autocomplete="positionchrome-off">

                <div hidden>
                    <label for="">Chart of Accounts *</label>
                    <div @keyup.enter="addAccount($event)">
                        <multiselect :options="accounts" :searchable="true" v-model="chart_selected" @select="setCode"
                            :value="chart_selected" @search-change="typed = $event">
                        </multiselect>
                    </div>
                    <!-- <div class="fs-6 c-red-500" v-if="form.errors.object_of_expenditure">{{ form.errors.object_of_expenditure }}</div> -->

                    <label>ACCOUNT CODE </label>
                    <input type="number" class="form-control" v-model="form.account_code" @change="searchByAccountCode" />
                    <div class="fs-6 c-red-500" v-if="form.errors.account_code">{{ form.errors.account_code }}</div>

                    <label for="">Object of Expenditure</label>
                    <input type="text" v-model="form.object_of_expenditure" class="form-control"
                        autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.object_of_expenditure">{{
                        form.errors.object_of_expenditure }}</div>
                </div>
                <!--*****************************-->
                <label>YEAR</label>
                <input type="number" class="form-control" v-model="form.year" />
                <div class="fs-6 c-red-500" v-if="form.errors.year">{{ form.errors.year }}</div>

                <label>OFFICE</label>
                <!-- {{ form.FFUNCCOD }} -->
                <select class="form-control" v-model="form.FFUNCCOD">
                    <option></option>
                    <option v-for="functione in functions" :value="functione.FFUNCCOD">{{ functione.FFUNCTION }}</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.FFUNCCOD">{{ form.errors.FFUNCCOD }}</div>

                <label>RAAO TYPE</label>
                <!-- {{ form.raaotype }} -->
                <select class="form-control" v-model="form.raaotype" ref="raaoSelect" @click="filterProgram">
                    <option></option>
                    <option value="1">Personnel Services</option>
                    <option value="2">Maintenance, Operating, and Other Expenses</option>
                    <option value="3">Capital Outlay</option>
                    <option value="4">Programs</option>
                    <option value="5">Projects</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.raaotype">{{ form.errors.raaotype }}</div>

                <label>PROGRAM</label>&nbsp;
                <!-- <br>{{ form.idprogram }} -->
                <!-- {{ form }} @keyup.enter="searchPrograms($event)"-->
                <div>
                    <multiselect :options="formattedPrograms" :searchable="true" v-model="form.idprogram" label="label"
                        track-by="label" @close="loadOOE">
                    </multiselect>
                </div>
                <div class="fs-6 c-red-500" v-if="form.errors.raaotype">{{ form.errors.raaotype }}</div>
                <!--******************************-->
                <label>Objects of Expenditure</label>&nbsp;
                idooe: {{ form.idooe }}
                <div>
                    <multiselect :options="formattedOOEs" :searchable="true" v-model="form.idooe" label="label"
                        track-by="label" @close="setOOEValue">
                    </multiselect>
                </div>


                <div class="fs-6 c-red-500" v-if="form.errors.GAD">{{ form.errors.GAD }}</div>
                <label>PAST YEAR </label>
                <input type="text" class="form-control" v-model="computed_pastyear" readonly />
                <div class="fs-6 c-red-500" v-if="form.errors.past_year">{{ form.errors.past_year }}</div>

                <label>FIRST SEMESTER (Actual) </label>
                <input type="text" class="form-control" :value="computed_sem1" readonly />
                <div class="fs-6 c-red-500" v-if="form.errors.first_sem">{{ form.errors.first_sem }}</div>

                <label>SECOND SEMESTER (Estimate) </label>
                <input type="text" class="form-control" :value="computed_sem2" readonly />
                <div class="fs-6 c-red-500" v-if="form.errors.second_sem">{{ form.errors.second_sem }}</div>

                <label>TOTAL </label>
                <input type="text" class="form-control" :value="getTotal12" readonly />

                <label>BUDGET YEAR PROPOSED </label>
                <input type="number" class="form-control" v-model="form.budget_year" />
                <div class="fs-6 c-red-500" v-if="form.errors.budget_year">{{ form.errors.budget_year }} OR the budget year
                    value is greater than the value recorded at the LBP Form No. 2</div>

                <label>CATEGORY</label>
                <input type="text" class="form-control" v-model="form.category" />
                <div class="fs-6 c-red-500" v-if="form.errors.category">{{ form.errors.category }}</div>

                <label>GAD CATEGORY</label>
                <select class="form-control" v-model="form.GAD">
                    <option>NON-GAD</option>
                    <option>GAD</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.GAD">{{ form.errors.GAD }}</div>
                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">


                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn text-white btn-primary mt-3 text-white" @click="submit()"
                    :disabled="form.processing">
                    Save changes
                </button>
                <!-- {{ aip }}
                <br/>
                {{ total_budget_year }} -->
                <!-- trte {{ formattedPrograms }} -->
                <!-- {{ dt_ooes }} -->
            </form>
        </div>

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
        paps: Object,
        pap1: Object,
        editData: Object,
        sectors: Object,
        accounts: Object,
        codes: Object,
        aip: Object,
        total_budget_year: Object,
        functions: Object,
        programs: Object,
        ooes: Object
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
            form: useForm({
                idooe: "",
                year: "",
                FFUNCCOD: "",
                raaotype: "",
                idprogram: "",
                object_of_expenditure: "",
                account_code: "",
                past_year: 0,
                first_sem: 0,
                second_sem: 0,
                budget_year: "",
                idpaps: "",
                category: "",
                GAD: "",
                CCET: "",
                AIP_CODE: "",
                id: null
            }),
            pageTitle: "",
            data_programs: [],
            dt_prog: [],
            data_ooes: [],
            dt_ooes: [],
            dt_ooes_length: [],
        };
    },
    computed: {
        formattedOOEs() {
            let dataOoes = this.dt_ooes;
            return this.dt_ooes.map((dataOoes) => ({
                value: dataOoes.recid,
                label: dataOoes.FOOEDESC,
                FACTCODE: dataOoes.FACTCODE,
                program_id: dataOoes.idprogram,
                FFUNCCOD: dataOoes.FFUNCCOD,
                sem1: dataOoes.sem1,
                sem2: dataOoes.sem2,
                past_year: dataOoes.past_year
            }));
        },
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
                label: program.FPROGRAM,
                raaotype: program.ftype,
                FFUNCCOD: program.FFUNCCOD,
                raohsid: program.raohsid
            }));

        },
        getTotal12() {
            var f1 = parseFloat(this.form.first_sem);
            var f2 = parseFloat(this.form.second_sem);
            var tot = f1 + f2;
            var tat = this.format_number_conv(tot, 2, true);
            return tat;
        },
        computed_pastyear() {
            // var p_year = this.format_number_conv(this.form.past_year,2,true);
            // if(isNaN(p_year)){
            //     return "0.00"
            // }else{
            //     return this.format_number_conv(this.form.past_year,2,true);
            // }
            return this.format_number_conv(this.form.past_year, 2, true);
        },
        computed_sem1() {
            //var s1 = parseFloat(this.form.sem1);
            return this.format_number_conv(this.form.first_sem, 2, true);
            //return this.format_number_conv(s1,2,true);
            //return isNaN(s1) ? '0.00' : s1;

        },
        computed_sem2() {
            return this.format_number_conv(this.form.second_sem, 2, true);
        }
    },
    mounted() {
        //this.setCurrentYear()
        this.dt_prog = this.programs
        this.data_programs = this.programs.map(programs => programs.FPROGRAM);
        this.dt_ooes = [];
        this.dt_ooes = this.ooes;
        this.pap_selected = this.pap1.paps_desc
        if (this.editData !== undefined) {
            if (this.bari) {
                this.bar = this.bari
            }
            this.pageTitle = "Edit"
            this.form.year = this.editData.year
            this.form.FFUNCCOD = this.editData.FFUNCCOD
            this.form.raaotype = this.editData.raaotype
            this.filterProgram();
            this.form.idprogram = this.editData.idprogram
            this.loadOOE();
            this.form.idooe = this.editData.idooe
            this.form.account_code = this.editData.account_code
            this.form.past_year = this.editData.past_year
            this.form.first_sem = this.editData.first_sem
            this.form.second_sem = this.editData.second_sem
            this.form.budget_year = this.editData.budget_year
            this.form.idpaps = this.editData.idpaps
            this.form.category = this.editData.category
            this.form.GAD = this.editData.GAD
            this.form.CCET = this.editData.CCET
            this.form.id = this.editData.id
            this.form.object_of_expenditure = this.editData.object_of_expenditure
            this.searchByAccountCodeForEditMounted();
        } else {
            this.pageTitle = "Create "
            this.form.idpaps = this.pap1.id
            this.setCurrentYear()
        }

    },

    methods: {
        submit() {
            if (this.editData !== undefined) {
                this.form.patch("/appropriations/", this.form);
            } else {
                // alert("Sample");
                var url = "/appropriations/store"
                // alert('for store '+url);
                this.form.post(url);
            }
        },
        addAccount() {
            // if (!this.accounts.includes(this.typed)) this.accounts.push(this.typed);
            // this.selected = this.typed;
            alert('addAccount');
        },

        searchPrograms() {
            //this.program_typed = searchText;
            //alert(this.program_typed)
            // const matchedPrograms = this.formattedPrograms.filter(
            //     (program) => program.label.toLowerCase().includes(this.typed.toLowerCase())
            // );

            // if (matchedPrograms.length > 0) {
            //     // Set the first matching program's value (recid) to form.idprogram
            //     this.form.idprogram = matchedPrograms[0].value;
            // } else {
            //     // Handle the case when there are no matching programs
            //     // For example, you can clear the form.idprogram or show an error message
            //     this.form.idprogram = null;
            // }
            //alert(typed);
            // if (!this.formattedPrograms.includes(this.typed)) this.formattedPrograms.push(this.typed);
            // this.selected = this.typed;
            // Find the program whose label matches the typed search text (case-insensitive)
            // const matchedProgram = this.formattedPrograms.find(
            //     (formattedPrograms) => formattedPrograms.label.toLowerCase() === this.typed.toLowerCase()
            // );

            // if (matchedProgram) {
            //     // Set the selected program's value (recid) to form.idprogram
            //     this.form.idprogram = matchedProgram.value;
            // } else {
            //     // Handle the case when the search text doesn't match any program
            //     // You may want to add some error handling here or reset the value
            //     this.form.idprogram = null;
            // }

        },
        setCode() {
            var ind = this.accounts.indexOf(this.chart_selected);
            this.form.account_code = this.codes[ind];
            this.form.object_of_expenditure = this.chart_selected
            // this.budget_code = this.budgets.indexOf(this.form.account_code.toString());
            // this.form.particulars = this.chart_selected
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
            this.form.category = selectElement.options[selectElement.selectedIndex].text;

        },
        loadOOE() {
            this.dt_ooes = [];
            var year1 = parseFloat(this.form.year) - 1;
            axios.get("/ooes/filtered/ooes", {
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
        },
        setOOEValue() {
            var prog_sel = this.dt_ooes.filter(ooes => ooes.recid === this.form.idooe);
            this.form.account_code = prog_sel[0].FACTCODE;
            this.searchByAccountCode();
            this.form.object_of_expenditure = prog_sel[0].FOOEDESC;
            this.form.first_sem = this.format_number_conv(prog_sel[0].sem1, 2, false);
            this.form.second_sem = this.format_number_conv(prog_sel[0].sem2, 2, false);
            this.form.past_year = this.format_number_conv(prog_sel[0].past_year, 2, false);
        },

    },

};
</script>
