<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Budgetary Requirement </h3>
            <Link :href="`/budget/${idrev}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>

        <div class="col-md-8">

            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <div class="d-none">
                    <label for="">ID</label>
                    <input type="text" v-model="form.id" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.id">{{ form.errors.idooe }}</div>
                </div>
                <div>
                    <label for="">CHART OF ACCOUNTS <!--chart selected{{ chart_selected }} :value="chart_selected" --></label>
                    <!-- {{ form.account_code }}
                    <div @keyup.enter="addAccount($event)">
                        <multiselect :options="accounts_computed" :searchable="true" v-model="form.account_code" @select="setCode"
                            @search-change="typed = $event">
                        </multiselect>
                    </div> -->
                    <multiselect :options="accounts_computed" :searchable="true" v-model="form.account_code" label="label"
                    track-by="label" @select="setCode">
                    </multiselect>
                    <!--<div class="fs-6 c-red-500" v-if="form.errors.particulars">{{ form.errors.particulars }}</div>-->

                </div>
                <label>PARTICULARS: </label>
                <input type="text" class="form-control" v-model="form.particulars" />
                <div class="fs-6 c-red-500" v-if="form.errors.particulars">{{ form.errors.particulars }}</div>

                <!--{{ budget_code }} budgets: budget_code:  {{ budgets }} form.account_code: {{ form.account_code }}-->
                <label>ACCOUNT CODE </label>
                <input type="number" class="form-control" v-model="form.account_code" @input="searchByAccountCode" />
                <div class="fs-6 c-red-500" v-if="form.errors.account_code">{{ form.errors.account_code }}</div>
                <label>AMOUNT</label>
                <input type="number" class="form-control" v-model="form.amount" />
                <div class="fs-6 c-red-500" v-if="form.errors.amount">{{ form.errors.amount }}</div>
                <label>CATEGORY</label>
                <select class="form-control" v-model="form.category">
                    <option>Personnel Services</option>
                    <option>Maintenance, Operating, and Other Expenses</option>
                    <option>Financial Expenses</option>
                    <option>Capital Outlay</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.category">{{ form.errors.category }}</div>
                <!---->
                <label>SOURCE </label>
                <input type="text" class="form-control" v-model="form.source" />
                <div class="fs-6 c-red-500" v-if="form.errors.source">{{ form.errors.source }}</div>

                <!--style="visibility: hidden"-->
                <div v-if="revs[0].gad_version=='1'">
                    <label>GAD/NON-GAD</label>
                    <select class="form-control" v-model="form.category_gad" >
                        <option>GAD</option>
                        <option>NON-GAD</option>
                    </select>
                    <div class="fs-6 c-red-500" v-if="form.errors.category_gad">{{ form.errors.category_gad }}</div>
                </div>



                <!--<input type="text" v-model="searchTerm" @input="filteredAccounts" placeholder="Search">
                <select class="form-control" v-model="form.particulars" >
                    <option v-for="account in filteredAccounts" :value="account.FTITLE">
                        {{  account.FTITLE }}
                    </option>
                </select>-->
                <!--<model-select :options="accounts" v-model="form.particulars" placeholder="item-item">
                    <options v-for="account in filteredAccounts">
                        {{ account.FTITLE }}
                    </options>
                </model-select>-->
                <!--{{ accounts[0].FTITLE }}<input type="text" v-model="form.project_title" class="form-control" autocomplete="chrome-off">-->

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>
        <!-- {{revs}} -->
        <!-- -- {{ revs[0].gad_version }}
        {{  form }} -->
        <!-- {{ accounts_raw }} -->
    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Places from "@/Shared/PlacesShared";
import { ModelSelect } from 'vue-search-select'
//import Multiselect from "vue-multiselect";

//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        editData: Object,
        revs: Object,
        //duplicate: Object,
        idrev: Number,
        accounts: Object,
        codes: Object,
        budgets: Object,
        accounts_raw: Object
    },
    components: {
        ModelSelect,
        Places: () => new Promise((resolve) => {
            setTimeout(() => {
                resolve(Places)
            }, 2000)
        })
    },
    computed: {
        filteredAccounts() {
            return this.accounts.filter(account => account.FTITLE.toLowerCase().includes(this.searchTerm.toLowerCase()))
        },
        accounts_computed() {
            let accs = this.accounts_raw;
            return accs.map((acc) => ({
                value: acc.FACTCODE,
                label: acc.FACTCODE+' - '+acc.FTITLE
            }));
        },
    },
    data() {
        return {
            submitted: false,
            chart_selected: "",
            form: useForm({
                revision_plan_id: "",
                particulars: "",
                account_code: "",
                amount: "",
                category: "",
                category_gad: "",
                source: "",
                id: null
            }),
            pageTitle: "",
            // searchTerm: "",
            // selectedOption: "",
            selected: "",
            typed: "",
            //budget_code: "",
        };
    },

    mounted() {

        //alert(this.idrev);
        if(this.revs[0].gad_version=='2'){
            this.form.category_gad='NON-GAD'
        }
        this.form.revision_plan_id = this.idrev
        if (this.editData !== undefined) {
            this.pageTitle = "Edit"
            this.form.id = this.editData.id
            this.form.revision_plan_id = this.editData.revision_plan_id
            this.form.particulars = this.editData.particulars
            this.form.account_code = this.editData.account_code
            this.form.amount = this.editData.amount
            this.form.category = this.editData.category
            this.form.category_gad = this.editData.category_gad
            this.form.source = this.editData.source

            //GET INDEX OF ACCOUNT CODE
            var acin = this.codes.indexOf(this.form.account_code);
            //SET VALUE OF chart_selected
            this.chart_selected = this.accounts[acin];
            //this.chart_selected = acin

        } else {
            this.pageTitle = "Create"
            this.form.particulars = this.budgets[0];
            var ind = this.codes.indexOf(parseInt(this.form.particulars));
            //alert(ind);
            this.form.particulars = this.accounts[ind];
            //this.budget_code = this.budgets.indexOf(this.form.account_code.toString());

            //GET THE INDEX OF THE ACCOUNT CODE

        }

    },

    methods: {
        submit() {
            //this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4);
            //alert(this.form.target_qty);
            //alert('account code: '+this.form.account_code)
            var indr = this.budgets.indexOf(this.form.account_code.toString());
            //alert(this.budgets)
            //alert(indr);
            if (this.editData !== undefined) {
                // alert(this.form.revision_plan_id);
                // alert(this.form.id);
                //alert('patch');
                this.form.patch("/budget/update/" + this.form.revision_plan_id, this.form);
            } else {
                this.form.id = null;
                this.form.post("/budget/store", this.form);
                //alert('store');
                // if(indr<0){

                // }else{
                //     alert("Account code already exists!");
                // }

            }
        },
        // reset(){
        //     this.form.particulars="";
        //     this.form.account_code="";
        // },
        // selectFromParentComponent1(){
        //     this.form.particulars=this.accounts[0].FTITLE;
        // }
        addAccount() {
            // if(!this.accounts.includes(this.searchTerm)) this.accounts.push(this.searchTerm);
            // this.selectedOption=this.searchTerm;
            if (!this.accounts.includes(this.typed)) this.accounts.push(this.typed);
            this.selected = this.typed;
        },
        setCode() {
            //alert(this.form.particulars);
            // alert(this.form.account_code);
            var ind = this.codes.indexOf(this.form.account_code);
            // this.form.account_code = this.codes[ind];

            this.budget_code = this.budgets.indexOf(this.form.account_code.toString());
            // this.form.particulars = this.chart_selected
            console.log("index of account code: " + ind);
            this.form.particulars = this.accounts[ind];
            //alert(this.budget_code+" code: "+ this.codes[ind]);
        },
        searchByAccountCode() {

            var ind = this.codes.indexOf(this.form.account_code.toString());
            this.chart_selected = this.accounts[parseInt(ind)];
            this.form.particulars = this.chart_selected
            //alert('search by account tgttg! '+ind);
        }
    },
};
</script>
