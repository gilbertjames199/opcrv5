<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Implementation Plan  {{ idrev }}</h3>
            <Link :href="`/implementation/${idrev}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
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

                <label>STRATEGY</label><!--{{ strategies }}-->
                <select class="form-control" v-model="form.idstrategy" >
                    <option v-for="strategy in strategies" :value="strategy.id">
                        {{ strategy.description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.idstrategy">{{ form.errors.idstrategy }}</div>
                <!--
                <label>ACTIVTY</label>
                <select class="form-control" v-model="form.idactivity">
                    <option></option>
                    <option v-for="strategy in strategies" value="strategy.id">
                        {{ strategy.description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.idstrategy">{{ form.errors.idstrategy }}</div>
                -->
                <label>GAD ISSUES ADDRESSED</label>
                <select class="form-control" v-model="form.idissue" >
                    <option v-for="issue in issues" :value="issue.id">
                        {{ issue.description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.idissue">{{ form.errors.idissue }}</div>

                <label>TIMELINE -DATE FROM</label>
                <input type="date" class="form-control" v-model="form.date_from"/>
                <div class="fs-6 c-red-500" v-if="form.errors.date_from">{{ form.errors.date_from }}</div>

                <label>TIMELINE -DATE TO</label>
                <input type="date" class="form-control" v-model="form.date_to"/>
                <div class="fs-6 c-red-500" v-if="form.errors.date_to">{{ form.errors.date_to }}</div>

                <label>CLIMATE CHANGE TOPOLOGY CODE</label>
                <input type="text" class="form-control" v-model="form.cc_topology"/>
                <div class="fs-6 c-red-500" v-if="form.errors.cc_topology">{{ form.errors.cc_topology }}</div>

                <label>PERSON RESPONSIBLE</label>
                <input type="text" class="form-control" v-model="form.person_responsible"/>
                <div class="fs-6 c-red-500" v-if="form.errors.person_responsible">{{ form.errors.person_responsible }}</div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>
        <!-- {{  form }} -->

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
            strategies: Object,
            issues: Object,
            exist_strat: Object,
        },
        components: {
            ModelSelect,
            Places: () => new Promise((resolve) => {
                setTimeout(() => {
                    resolve(Places)
                }, 2000)
            })
        },
        computed:{
            filteredAccounts(){
                return this.accounts.filter(account => account.FTITLE.toLowerCase().includes(this.searchTerm.toLowerCase()))
            }
        },
        data() {
            return {
                submitted: false,
                form: useForm({
                    idrev_plan: "",
                    idactivity: "",
                    idstrategy: "",
                    idissue: "",
                    date_from: "",
                    date_to: "",
                    cc_topology: "",
                    person_responsible: "",
                    id: null
                }),
                pageTitle: "",
                // searchTerm: "",

                selected: "",
                typed: "",
                //budget_code: "",
            };
        },

        mounted() {

            //alert(this.idrev);
            this.form.idrev_plan=this.idrev
            if (this.editData !== undefined) {
                this.pageTitle = "Edit"
                this.form.id = this.editData.id
                this.form.idrev_plan=this.editData.idrev_plan
                //this.form.idactivity=this.editData.idactivity
                this.form.idstrategy=this.editData.idstrategy
                this.form.idissue=this.editData.idissue
                this.form.date_from=this.editData.date_from
                this.form.date_to=this.editData.date_to
                this.form.cc_topology=this.editData.cc_topology
                this.form.person_responsible = this.editData.person_responsible
            } else {
                this.pageTitle = "Create"

                //this.form.particulars =this.budgets[0];
                //var ind=this.codes.indexOf(parseInt(this.form.particulars));
                //alert(ind);
                //this.form.particulars=this.accounts[ind];
                //this.budget_code = this.budgets.indexOf(this.form.account_code.toString());
            }

        },

        methods: {
            submit() {
                var indr=this.exist_strat.indexOf(parseInt(this.form.idstrategy));
                if (this.editData !== undefined) {
                    this.form.patch("/implementation/update/"+this.form.idrev_plan, this.form);
                } else {
                    this.form.id=null;
                    if(indr<0){
                        this.form.post("/implementation/store", this.form);
                    }else{
                        alert("Strategy already added!");
                    }

                }
            },
            // reset(){
            //     this.form.particulars="";
            //     this.form.account_code="";
            // },
            // selectFromParentComponent1(){
            //     this.form.particulars=this.accounts[0].FTITLE;
            // }
            addAccount(){
                // if(!this.accounts.includes(this.searchTerm)) this.accounts.push(this.searchTerm);
                // this.selectedOption=this.searchTerm;
                if (!this.accounts.includes(this.typed)) this.accounts.push(this.typed);
                this.selected = this.typed;
            },
            // setCode(){
            //     //alert(this.form.particulars);
            //     var ind=this.accounts.indexOf(this.form.particulars);
            //     this.form.account_code=this.codes[ind];
            //     this.budget_code = this.budgets.indexOf(this.form.account_code.toString());
            //     //alert(this.budget_code+" code: "+ this.codes[ind]);
            // },
            loadActivities(){
                alert(this.form.idstrategy);
            }
        },
    };
    </script>
