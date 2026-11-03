<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Profile/Design </h3>
            <Link :href="`/revision/${idpaps}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>
        <!-- {{ form }}
        {{ selPaps }} -->
        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <div class="d-none">
                    <label for="">ID</label>
                    <input type="text" v-model="form.id" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.id">{{ form.errors.idooe }}</div>
                </div>

                <label for="">PROGRAMS AND PROJECTS</label>
                <select v-model="form.idpaps" class="form-select" :disabled="editData !== undefined"
                    @change="updateProjectTitle">
                    <option v-for="pap in paps_all" :value="pap.id">
                        {{ pap.paps_desc }}
                    </option>
                </select>
                <!-- {{ paps_all }} -->
                <!-- <div v-if="paps[0]" >
                    <label for="">PROGRAMS AND PROJECTS -Description</label>
                    <input type="text" v-model="paps[0].paps_desc" class="form-control" />
                </div> -->
                <!-- paps_all : {{ paps_all }} -->
                <div v-if="editData===undefined && paps_all!==undefined">
                    <!-- <select v-model="form.idpaps" class="form-control"
                        @change="updateProjectTitle">
                        <option v-for="pap in paps_all" :value="pap.id">
                            {{ pap.paps_desc }}
                        </option>
                    </select> -->
                </div>
                <!-- {{ popsp_agencies }} -->

                <label for="">Agency (For POPSP Programs Only)</label>
                <select class="form-control form-select" v-model="form.agency_name" disabled>
                    <option></option>
                    <option v-for="popsp in popsp_agencies" :value="popsp.agency_code">
                        {{ popsp.agency_name }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.agency_name">{{ form.errors.agency_name }}</div>

                <label for="">PROJECT TITLE</label>
                <input type="text" v-model="form.project_title" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.project_title">{{ form.errors.project_title }}</div>

                <label for="">AIP Code</label>
                <input type="text" v-model="form.aip_code" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.aip_code">{{ form.errors.aip_code }}</div>

                <label for="">PROJECT LOCATION</label>
                <input type="text" v-model="form.project_location" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.project_location">{{ form.errors.project_location }}</div>

                <label for="">LIST OF LGUs COVERED</label>
                <input type="text" v-model="form.list_of_lgu_covered" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.list_of_lgu_covered">{{ form.errors.list_of_lgu_covered }}
                </div>

                <hr style="background-color: black !important; border:1px; height: 1px;">
                IMPLEMENTATION SCHEDULE<br>
                <label for="">START</label>
                <input type="date" v-model="form.date_start" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.date_start">{{ form.errors.date_start }}</div>

                <label for="">END</label>
                <input type="date" v-model="form.date_end" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.date_end">{{ form.errors.date_end }}</div>
                <hr style="background-color: black !important; border:1px; height: 1px;">

                INTENDED BENEFICIARIES<br>
                <div class="peers">
                    <div class="peer mR-10">
                        <label for="">MALE</label>
                        <input type="number" v-model="form.beneficiary_male" class="form-control" autocomplete="chrome-off" @change="setIntendedTotal">
                        <div class="fs-6 c-red-500" v-if="form.errors.beneficiary_male">{{ form.errors.beneficiary_male }}</div>
                    </div>
                    <div class="peer mR-10">
                        <label for="">FEMALE</label>
                        <input type="number" v-model="form.beneficiary_female" class="form-control" autocomplete="chrome-off" @change="setIntendedTotal">
                        <div class="fs-6 c-red-500" v-if="form.errors.beneficiary_female">{{ form.errors.beneficiary_female }}</div>
                    </div>
                    <div class="peer mR-10">
                        <label for="">TOTAL</label>
                        <input type="number" v-model="total_intended" class="form-control" autocomplete="chrome-off">
                        <!-- <div class="fs-6 c-red-500" v-if="form.errors.beneficiary_female">{{ form.errors.beneficiary_female }}</div> -->
                    </div>
                </div>
                <hr style="background-color: black !important; border:1px; height: 1px;">
                BASELINE DISAGGREGATED DATA<br>
                <div class="peers">
                    <div class="peer mR-10">
                        <label for="">MALE</label>
                        <input type="number" v-model="form.baseline_male" class="form-control" autocomplete="chrome-off" @change="setTotal">
                        <div class="fs-6 c-red-500" v-if="form.errors.baseline_male">{{ form.errors.baseline_male }}</div>
                    </div>

                    <div class="peer mR-10">
                        <label for="">FEMALE</label>
                        <input type="number" v-model="form.baseline_female" class="form-control" autocomplete="chrome-off" @change="setTotal">
                        <div class="fs-6 c-red-500" v-if="form.errors.baseline_female">{{ form.errors.baseline_female }}</div>
                    </div>
                     <div class="peer mR-10">
                        <label for="">TOTAL</label>
                        <input type="number" v-model="form.baseline_total" class="form-control" autocomplete="chrome-off" >
                        <div class="fs-6 c-red-500" v-if="form.errors.baseline_total">{{ form.errors.baseline_total }}</div>

                     </div>
                </div>

                DATA SOURCE<br>
                <div class="peers">

                     <div class="peer mR-10">

                        <input type="text" v-model="form.data_source" class="form-control" autocomplete="chrome-off" >
                        <div class="fs-6 c-red-500" v-if="form.errors.data_source">{{ form.errors.data_source }}</div>

                     </div>
                </div>

                <hr style="background-color: black !important; border:1px; height: 1px;">


                <label for="">RATIONALE</label>
                <!-- @input="limitWords"  -->
                 <QuillEditor theme="snow" v-model:content="form.rationale" contentType="html"
                    toolbar="essential" />
                <div class="fs-6 c-red-500" v-if="form.errors.baseline_total">{{ form.errors.baseline_total }}</div>

                <label for="">OBJECTIVES</label>
                <QuillEditor theme="snow" v-model:content="form.objective" contentType="html" toolbar="essential" />
                <div class="fs-6 c-red-500" v-if="form.errors.objective">{{ form.errors.objective }}</div>

                <label for="">BENEFICIARIES</label>
                <QuillEditor theme="snow" v-model:content="form.beneficiaries" contentType="html" toolbar="essential" />
                <div class="fs-6 c-red-500" v-if="form.errors.beneficiaries">{{ form.errors.beneficiaries }}</div>

                <label for="">IMPLEMENTING TEAM</label>
                <QuillEditor theme="snow" v-model:content="form.implementing_team" contentType="html" toolbar="essential" />
                <div class="fs-6 c-red-500" v-if="form.errors.implementing_team">{{ form.errors.implementing_team }}</div>

                <label for="">PARTNERSHIPS AND SUSTAINABILITY</label>
                <QuillEditor theme="snow" v-model:content="form.partnership" contentType="html" toolbar="essential" />
                <div class="fs-6 c-red-500" v-if="form.errors.partnership">{{ form.errors.partnership }}</div>

                <label for="">MONITORING AND EVALUATION</label>
                <QuillEditor theme="snow" v-model:content="form.monitoring" contentType="html" toolbar="essential" />
                <div class="fs-6 c-red-500" v-if="form.errors.monitoring">{{ form.errors.monitoring }}</div>

                <label for="">RISK MANAGEMENT</label>
                <QuillEditor theme="snow" v-model:content="form.risk_management" contentType="html" toolbar="essential"
                />
                <div class="fs-6 c-red-500" v-if="form.errors.risk_management">{{ form.errors.risk_management }}</div>

                <label for="">Checklist/Box Number</label>
                <select type="number" v-model="form.checklist_id" class="form-control" autocomplete="chrome-off">
                    <option v-for="hgdg in hgdgs" :value="hgdg.id">
                        {{ hgdg.box_number }}. {{ hgdg.sector }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.checklist_id">{{ form.errors.checklist_id }}</div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>
    </div>
    <!-- {{this.source }}cxzsdfsdfdsfsdfsf
    {{ form }} -->
     <!-- {{ paps[0].aip_code }} -->
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Places from "@/Shared/PlacesShared";
import QuillEditorC from '@/Shared/QuillEditorShared'

//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        editData: Object,
        paps: Object,
        duplicate: Object,
        idpaps: Number,
        paps_all: Object,
        source: String,
        hgdgs: Object,
        popsp_agencies: Object
    },
    components: {

        Places: () => new Promise((resolve) => {
            setTimeout(() => {
                resolve(Places)
            }, 2000)
        }),
        QuillEditorC

    },
    data() {
        return {
            submitted: false,
            maxWords: 200,
            act_words: 0,
            form: useForm({
                idpaps: "",
                project_title:"",
                project_location: "",
                list_of_lgu_covered: "",
                date_start: "",
                date_end: "",
                beneficiary_male: 0,
                beneficiary_female: 0,
                baseline_male: 0,
                baseline_female: 0,
                baseline_total: 0,
                data_source: "",
                rationale: "",
                objective: "",
                beneficiaries: "",
                checklist_id: "",
                implementing_team: "",
                partnership: "",
                monitoring: "",
                risk_management: "",
                is_strategy_based: "",
                aip_code: "",
                agency_name: "",
                source: "",
                id: null,
                selPaps: ""
            }),
            total_intended: 0,
            pageTitle: ""
        };
    },
    computed: {
        wordsRemaining() {
            const wordCount = this.form.rationale.trim().split(/\s+/).length;
            var returner = this.maxWords - wordCount;

            if (this.form.rationale === "") {
                returner = 200;
            }
            return returner;
        },
        wordCount() {
            var rtn = this.form.rationale.trim().split(/\s+/).length;
            if (this.form.rationale === "") {
                rtn = 0;
            }
            return rtn;
        }
    },
    mounted() {
        this.form.idpaps = this.idpaps;
        if(this.source!==undefined){
            this.form.source =this.source
        }
        //this.form.idinteroutcome=this.idinteroutcome
        if (this.editData !== undefined) {
            this.pageTitle = "Edit"
            this.form.idpaps = this.editData.idpaps
            this.form.project_title = this.editData.project_title
            this.form.project_location = this.editData.project_location
            this.form.list_of_lgu_covered = this.editData.list_of_lgu_covered
            this.form.date_start = this.editData.date_start
            this.form.date_end = this.editData.date_end
            this.form.beneficiary_male = this.editData.beneficiary_male
            this.form.beneficiary_female = this.editData.beneficiary_female
            this.total_intended = parseFloat(this.form.beneficiary_male)+parseFloat(this.form.beneficiary_female)
            this.form.baseline_male = this.editData.baseline_male
            this.form.baseline_female = this.editData.baseline_female
            this.form.baseline_total = this.editData.baseline_total
            this.form.data_source = this.editData.data_source
            this.form.rationale = this.editData.rationale
            this.form.objective = this.editData.objective
            this.form.checklist_id = this.editData.checklist_id
            this.form.beneficiaries = this.editData.beneficiaries
            this.form.implementing_team = this.editData.implementing_team
            this.form.partnership = this.editData.partnership
            this.form.monitoring = this.editData.monitoring
            this.form.risk_management = this.editData.risk_management
            this.form.is_strategy_based = this.editData.is_strategy_based
            this.form.id = this.editData.id
            this.form.aip_code = this.editData.aip_code

        } else {
            this.pageTitle = "Create"
            this.form.is_strategy_based=0
            //this.form.idpaps=this.idpaps
            //this.form.aip_code=this.paps[0].aip_code
            if(this.paps[0]!==undefined){
                this.form.aip_code=this.paps[0].aip_code
                this.form.agency_name =this.paps[0].agency_name
            }
            if (this.duplicate !== undefined) {
                this.form.idpaps = this.duplicate[0].idpaps
                this.form.project_title = this.duplicate[0].project_title
                this.form.project_location = this.duplicate[0].project_location
                this.form.list_of_lgu_covered = this.duplicate[0].list_of_lgu_covered
                this.form.date_start = this.duplicate[0].date_start
                this.form.date_end = this.duplicate[0].date_end
                this.form.beneficiary_male = this.duplicate[0].beneficiary_male
                this.form.beneficiary_female = this.duplicate[0].beneficiary_female
                this.form.baseline_male = this.duplicate[0].baseline_male
                this.form.baseline_female = this.duplicate[0].baseline_female
                this.form.baseline_total = this.duplicate[0].baseline_total
                this.form.data_source = this.duplicate[0].data_source
                this.form.rationale = this.duplicate[0].rationale
                this.form.objective = this.duplicate[0].objective
                this.form.checklist_id = this.duplicate[0].checklist_id
                this.form.beneficiaries = this.duplicate[0].beneficiaries
                this.form.implementing_team = this.duplicate[0].implementing_team
                this.form.partnership = this.duplicate[0].partnership
                this.form.monitoring = this.duplicate[0].monitoring
                this.form.risk_management = this.duplicate[0].risk_management
                this.is_strategy_based = this.duplicate[0].is_strategy_based
            } else {
                // this.form.project_title = this.paps[0].paps_desc
                //alert('undefined si idpaps!');
            }
        }

    },

    methods: {
        //this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4);
        //alert(this.form.target_qty);
        // if (this.act_words > this.maxWords) {
        //     alert("Rationale exceeds 200 words limit")
        // } else {
        submit() {

                if (this.editData !== undefined) {
                    //alert('patch');
                    this.form.patch("/revision/update", this.form);
                } else {
                    this.form.id = null;
                    //alert('store');
                    this.form.post("/revision/store", this.form);
                }
            // }

        },
        limitWords() {
            const words = this.form.rationale.trim().split(/\s+/);
            this.act_words = words.length;
            if (words.length > this.maxWords) {
                //alert("Rationale has already 200 words!")
                //this.form.rationale = words.slice(0, this.maxWords).join(' ');
            }
        },
        setTotal(){
            var male =parseFloat(this.form.baseline_male);
            var female =parseFloat(this.form.baseline_female);
            var tot = male + female;
            this.form.baseline_total =tot
        },
        setIntendedTotal(){
            var male =parseFloat(this.form.beneficiary_male);
            var female =parseFloat(this.form.beneficiary_female);
            var tot = male + female;
            this.total_intended =tot
        },
        updateProjectTitle() {

            var selectedPap = this.paps_all.find(pap => String(pap.id) === String(this.form.idpaps));
            // alert("fsdfsdf")
            console.log(this.form.idpaps)
            this.form.project_title = selectedPap ? selectedPap.paps_desc : '';
            this.form.aip_code = selectedPap ? selectedPap.aip_code : '';
            this.form.agency_name = selectedPap ? selectedPap.agency_name : '';
            this.selPaps = selectedPap
        }
    },
};
</script>
