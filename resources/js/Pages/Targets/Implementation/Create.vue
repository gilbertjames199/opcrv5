<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Targets </h3>
            <Link :href="`/targets/${imp_id}/implementation`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>

        <!-- <div class="col-md-8">
            <button class="btn btn-secondary" @click="showModal" :disabled="submitted">Permissions</button>
        </div> -->

        <div class="col-md-8">
            <!-- <span v-if="mfos.id">fdfdfd</span> {{ mfos.id }} <span v-if="paps.id">fdfdfd</span> {{ paps.id }}
           <br> {{ mfos }}<br>{{ paps }} -->
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <div class="d-none">
                    <label for="">ID</label>
                    <input type="text" v-model="form.id" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.id">{{ form.errors.idooe }}</div>
                </div>

                <input type="text" v-model="form.idpdip" class="form-control d-none" autocomplete="chrome-off" disabled>

                <div v-if="paps">
                    <label for="">Program/Project </label>
                    <input type="text" v-model="paps_desc" class="form-control" autocomplete="chrome-off">
                </div>

                <label for="">Revision Plan </label>
                <input type="text" v-model="revision_plan.project_title" class="form-control" autocomplete="chrome-off">

                <label for="">Implementation Plan </label>
                <input type="text" v-model="implementation_plan.description" class="form-control" autocomplete="chrome-off">

                <!--<input class="form-control" v-model="form.idpdip" />-->
                <div class="fs-6 c-red-500" v-if="form.errors.idpdip">{{ form.errors.idpdip }}</div>
                <div hidden>
                    <label for="">ID - OOE</label>
                    <input type="text" v-model="form.idooe" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.idooe">{{ form.errors.idooe }}</div>
                </div>


                <label for="">DESCRIPTION</label>
                <input type="text" v-model="form.description" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.description">{{ form.errors.description }}</div>

                <label for="">MUNICIPALITY </label>
                <select class="form-control" v-model="form.municipality" @change="loadBar">
                    <option>-</option>
                    <option v-for="munn in mun">
                        {{ munn.citymunDesc }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.municipality">{{ form.errors.municipality }}</div>

                <label for="">BARANGAY </label>
                <select class="form-control" v-model="form.brgy">
                    <option>-</option>
                    <option v-for="barr in bar">
                        {{ barr.brgyDesc }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.brgy">{{ form.errors.brgy }}</div>
                <div>
                    <label for="">PLAN PERIOD</label><br />
                    <div class="relative row gap-20 masonry pos-r">
                        <div class="col-md-1"></div>
                        <div class="col-md-1">
                            <label>FROM</label>
                        </div>
                        <div class="col-md-10">
                            <input type="date" v-model="form.planned_period_from" class="form-control"
                                autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.planned_period_from">{{
                                form.errors.planned_period_from }}</div>
                        </div>
                    </div>
                    <div class="relative row gap-20 masonry pos-r">
                        <div class="col-md-1"></div>
                        <div class="col-md-1">
                            <label>TO</label>
                        </div>
                        <div class="col-md-10">
                            <input type="date" v-model="form.planned_period_to" class="form-control"
                                autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.planned_period_to">{{
                                form.errors.planned_period_to }}</div>
                        </div>
                    </div>
                </div>
                <label for="">PLAN BUDGET</label>
                <!--@input="handleNumberInput"-->
                <input type="number" v-model="form.planned_budget" class="form-control" max=999 v-on:keypress="NumbersOnly"
                    autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.planned_budget">{{ form.errors.description }}</div>

                <hr />
                <label for="">TARGET QUANTITY</label><br />
                <label for="">Q1</label>
                <input type="number" v-model="form.target_qty1" v-on:keypress="NumbersOnly" class="form-control"
                    autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.target_qty1">{{ form.errors.target_qty1 }}</div>
                <label for="">Q2</label>
                <input type="number" v-model="form.target_qty2" v-on:keypress="NumbersOnly" class="form-control"
                    autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.target_qty2">{{ form.errors.target_qty2 }}</div>
                <label for="">Q3</label>
                <input type="number" v-model="form.target_qty3" v-on:keypress="NumbersOnly" class="form-control"
                    autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.target_qty3">{{ form.errors.target_qty3 }}</div>
                <label for="">Q4</label>
                <input type="number" v-model="form.target_qty4" v-on:keypress="NumbersOnly" class="form-control"
                    autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.target_qty4">{{ form.errors.target_qty4 }}</div>
                <hr />
                <label for="">Indicator</label>
                <input type="text" v-model="form.idindicator" class="form-control d-none" autocomplete="chrome-off">
                <select v-model="form.idindicator" class="form-control">
                    <option v-for="indicate in indicator" :value="indicate.id">{{ indicate.description }}</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.idindicator">{{ form.errors.idindicator }}</div>

                <label for="">ONSITE TAG</label>
                <!--
                    <input type="text" v-model="form.onsite_tag" class="form-control" autocomplete="chrome-off">
                -->
                <select v-model="form.onsite_tag" class="form-control" autocomplete="chrome-off">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.onsite_tag">{{ form.errors.onsite_tag }}</div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>
        <!--
            <div class="col-md-8">
                <form @submit.prevent="submit()">
                    <input type="hidden" required>
                    <label for="">Names</label>
                </form>
            </div>
        -->


    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Places from "@/Shared/PlacesShared";
//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        editData: Object,
        data_indicator: Object,
        mun: Array,
        raao_id: String,
        raao: Object,
        indicator: Object,
        bari: Array,
        imp_id: String,
        idrev_plan: String,
        paps: Object,
        implementation_plan: Object,
        revision_plan: Object,
        idmfo: String,
        mfos: String
    },
    components: {
        //BootstrapModalNoJquery,

        Places: () => new Promise((resolve) => {
            setTimeout(() => {
                resolve(Places)
            }, 2000)
        })

    },
    data() {
        return {
            paps_desc: this.paps.paps_desc,
            submitted: false,
            barsel: "",
            munsel: "",
            form: useForm({
                idpdip: this.paps.id,
                idmfo: this.mfos.id,
                idooe: "",
                idindicator: "",
                description: "",
                brgy: "",
                municipality: "",
                planned_period_from: "",
                planned_period_to: "",
                planned_budget: "",
                target_qty: "",
                onsite_tag: "",
                idimplementation: this.imp_id,
                target_qty1: "",
                target_qty2: "",
                target_qty3: "",
                target_qty4: "",
                id: null
            }),
            bar: [],
            pageTitle: ""
        };
    },

    mounted() {

        this.form.idpdip = this.paps.id;
        if (this.editData !== undefined) {
            if (this.bari) {
                this.bar = this.bari
            }
            this.pageTitle = "Edit"
            this.form.idpdip = this.editData.idpdip
            this.form.idindicator = this.editData.idindicator
            this.form.description = this.editData.description
            this.form.brgy = this.editData.brgy
            this.form.municipality = this.editData.municipality
            this.loadBar();
            this.form.brgy = this.editData.brgy
            this.form.planned_period_from = this.editData.planned_period_from
            this.form.planned_period_to = this.editData.planned_period_to
            this.form.planned_budget = this.editData.planned_budget
            this.form.target_qty = this.editData.target_qty
            this.form.onsite_tag = this.editData.onsite_tag
            this.form.idimplementation = this.imp_id
            this.form.target_qty1 = this.editData.target_qty1
            this.form.target_qty2 = this.editData.target_qty2
            this.form.target_qty3 = this.editData.target_qty3
            this.form.target_qty4 = this.editData.target_qty4
            this.form.id = this.editData.id
        } else {
            this.pageTitle = "Create"
            this.form.planned_budget = 0
            this.form.target_qty1 = 0
            this.form.target_qty2 = 0
            this.form.target_qty3 = 0
            this.form.target_qty4 = 0
            this.form.brgy = "-"
            this.form.municipality = "-"
            this.form.onsite_tag = "No"

            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();

            const january1 = new Date(currentYear, 0, 2);
            const formattedDate = january1.toISOString().split('T')[0];

            const december31 = new Date(currentYear, 11, 31);
            const formattedDate2 = december31.toISOString().split('T')[0];
            this.form.planned_period_from = formattedDate;
            this.form.planned_period_to = formattedDate2;
            if (this.mfos.id) {
                this.form.idmfo = this.mfos.id
                this.paps_desc = this.mfos.mfo_desc
            } else {
                this.form.idmfo = "0"
            }
            if (this.paps.id) {
                this.form.idpdip = this.paps.id
            } else {
                this.form.idpdip = "0"
            }
        }

    },

    methods: {
        loadBar() {
            //alert(this.form.municipality);
            if (this.form.municipality === "") {

            } else {
                this.form.brgy = "";
                axios.post("/places/bar", { mun: this.form.municipality }).then((response) => {
                    this.bar = response.data.data
                });
            }
        },
        getTarget(targid) {
            if (this.form.idpdip) {
                targid = this.form.idpdip
            }
            this.$inertia.get(
                "/targets",
                {
                    id_raao: targid
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        submit() {
            this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
            //alert(this.form.target_qty);
            if (this.form.brgy === "") {
                this.form.brgy = "-"
            }
            if (this.form.municipality === "") {
                this.form.municipality = "-"
            }
            if (this.editData !== undefined) {
                this.form.patch("/targets/" + this.imp_id + '/implementation/update', this.form);
            } else {
                //alert('sa else'+this.editData)
                this.form.id = null;
                this.form.post("/targets/" + this.imp_id + "/implementation/store", this.form);
            }
        },
        count(obj) {
            var vall = Object.length(obj);
            return vall;
        }
    },
};
</script>
