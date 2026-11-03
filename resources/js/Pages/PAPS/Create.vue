<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Programs and Projects</h3>
            <div v-if="from_mfo == true">
                <Link @click="goBack">
                <!-- :href="`/paps/${idmfo}`" -->
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
                </Link>
            </div>
            <div v-else>
                <Link :href="`/paps/direct`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
                </Link>
            </div>

        </div>

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <div class="d-none">
                    <label for="">ID</label>
                    <input type="text" v-model="form.id" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.id">{{ form.errors.idooe }}</div>
                </div>
                <label for="">Office</label>
                <!--<input type="number" v-model="form.FFUNCCOD" class="form-control" autocomplete="chrome-off">-->
                <select class="form-control" v-model="form.FFUNCCOD" @change="filterMFOs">
                    <option value=""></option>
                    <option v-for="functional in functions" :value="functional.FFUNCCOD">
                        {{ functional.FFUNCTION }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.FFUNCCOD">{{ form.errors.FFUNCCOD }}</div>
                <!-- MFOs -->
                <label for="">Major Final Outputs </label>
                <select class="form-control form-select" v-model="form.idmfo" @change="loadPAPS">
                    <option></option>
                    <option v-for="mfo in mfos_data" :value="mfo.id">
                        {{ mfo.mfo_desc }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.idmfo">{{ form.errors.idmfo }}</div>

                <!-- Program and Projects (PAPS) -->
                <label for="">Parent Program and Projects (if any -0{{ form.mother_program_id }})</label>
                <select class="form-control form-select" v-model="form.mother_program_id">
                    <option></option>
                    <option v-for="mfo in motherPAPS" :value="mfo.id">
                        {{ mfo.paps_desc }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.mother_program_id">{{ form.errors.mother_program_id }}</div>
                <!-- POPSP Agency -->
                <label for="">Agency (For POPSP Programs Only)</label>
                <select class="form-control form-select" v-model="form.agency_name">
                    <option></option>
                    <option v-for="popsp in popsp_agencies" :value="popsp.agency_code">
                        {{ popsp.agency_name }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.agency_name">{{ form.errors.agency_name }}</div>
                <input type="checkbox"
                    v-model="form.is_mother_program"
                    :true-value="1"
                    :false-value="0">
                        &nbsp;Is Mother PAPS
                <br>
                <div class="fs-6 c-red-500" v-if="form.errors.with_gad_training">{{ form.errors.with_gad_training }}</div>

                <label for="">Program and Projects (PAPS) Description </label>
                <input type="text" v-model="form.paps_desc" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.paps_desc">{{ form.errors.paps_desc }}</div>

                <label for="">Description</label>
                <textarea rows="4" v-model="form.MOV" class="form-control" autocomplete="chrome-off" />
                <div class="fs-6 c-red-500" v-if="form.errors.MOV">{{ form.errors.MOV }}</div>

                <label for="">Type</label>
                <select class="form-control form-select" v-model="form.type">
                    <option>GAS</option>
                    <option>Activity</option>
                    <option>Program</option>
                    <option>Project</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.type">{{ form.errors.type }}</div>


                <label for="">Sectors</label>
                <select v-model="form.sector" class="form-control form-select">
                    <option v-for="(subsectors, sector) in sectors" :key="sector" :value="sector">
                        {{ sector }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.sector">{{ form.errors.sector }}</div>

                <!-- {{ sectors }} -->
                <label for="">Sub-sectors</label>
                <select v-model="form.subsector" class="form-control form-select">
                    <option v-for="subsector in sectors[form.sector]" :key="subsector">
                        {{ subsector }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.subsector">{{ form.errors.subsector }}</div>

                <!-- SOURCE OF FUNDS -->
                <label for="">Source of Funds</label>
                <!-- {{ form.source_of_funds }} -->
                <select class="form-control form-select" v-model="form.source_of_funds">
                    <!-- <option value=""></option> -->
                    <option value="gen_fund">General Fund</option>
                    <option value="ldrrmf">Local Disaster Risk Reduction Management Fund (LDRRMF)</option>
                    <option value="dev">20% Development Fund</option>
                    <option value="other">Other Sources</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.source_of_funds">{{ form.errors.source_of_funds }}</div>

                <!--SOURCE OF FUNDS OTHERS SPECIFY -->
                <div v-if="form.source_of_funds==='other'">
                    <label for="">Please Specify Other Source of Funds</label>
                    <input type="text" v-model="form.source_others_specify" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.source_others_specify">{{ form.errors.source_others_specify }}</div>
                </div>

                <label>Fund Owner</label>

                <select class="form-control" v-model="form.fund_owner_ffunccod">
                    <option value=""></option>

                    <option v-for="functional1 in functions1"
                            :key="functional1.FFUNCCOD"
                            :value="functional1.FFUNCCOD">

                        {{ functional1.FFUNCTION }} ({{ functional1.FFUNCCOD }})

                    </option>
                </select>
                <!-- FUNDING AGENCY -->
                <!-- <label for="">Funding Agency</label>
                <input type="text" v-model="form.funding_agency" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.funding_agency">{{ form.errors.funding_agency }}</div> -->

                <!-- POPSP SECTORS-->
                <div v-if="form.sector==='General Public Services Sector'">
                    <input type="checkbox" v-model="form.popsp" :true-value="1" :false-value="0" />
                    <label for="popsp">POPSP</label>
                    <label for="">Focus Area (POPSP)</label>
                    <select class="form-control form-select" v-model="form.focus_area">
                        <option>Crime and Disorder</option>
                        <option>Conflict</option>
                        <option>Threat to environment and human security</option>
                        <option>Public Safety</option>
                    </select>
                    <div class="fs-6 c-red-500" v-if="form.errors.focus_area">{{ form.errors.focus_area }}</div>
                </div>

                <label for="">Chief Executive Agenda</label>
                <select class="form-control form-select" v-model="form.chief_executive_agenda">
                    <option value=""></option>
                    <option v-for="chief_agenda in chief_agenda" :value="chief_agenda.id">
                        {{ chief_agenda.agenda_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.chief_executive_agenda">
                    {{ form.errors.chief_executive_agenda }}
                </div>

                <label for="">Socio-Economic Agenda</label>
                <select class="form-control form-select" v-model="form.socio_economic_agenda">
                    <option value=""></option>
                    <option v-for="socio_economic in socio_economic" :value="socio_economic.id">
                        {{ socio_economic.agenda_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.socio_economic_agenda">{{ form.errors.socio_economic_agenda }}
                </div>

                <label for="">Sustainable Development Goals</label>
                <select class="form-control form-select" v-model="form.sust_devt_goal">
                    <option value=""></option>
                    <option v-for="sustainable in sustainable" :value="sustainable.id">
                        {{ sustainable.goal_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.sust_devt_goal">{{ form.errors.sust_devt_goal }}</div>

                <label for="">Executive Legislative Agenda</label>
                <select class="form-control form-select" v-model="form.executive_legislative_agenda">
                    <option value=""></option>
                    <option v-for="executive_legislative in executive_legislative" :value="executive_legislative.id">
                        {{ executive_legislative.agenda_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.executive_legislative_agenda">
                    {{ form.errors.executive_legislative_agenda }}
                </div>

                <label for="">Research Agenda</label>
                <select class="form-control form-select" v-model="form.research_agenda">
                    <option value=""></option>
                    <option v-for="research in research" :value="research.id">
                        {{ research.agenda_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.research_agenda">{{ form.errors.research_agenda }}</div>

                <label for="">AIP Code</label>
                <input type="text" v-model="form.aip_code" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.aip_code">{{ form.errors.aip_code }}</div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>
        <!-- {{  form }} -->
        <!-- mfos_data: {{ mfos_data }}
        <br /><br /><br />
        FFUNCCOD: {{ form.FFUNCCOD }}<br />
        dataMFO: {{ formattedMFOs }}
        <br />
        <br />
        <br />
        {{ mfos }} -->
         <!-- {{ editData }} -->
    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Places from "@/Shared/PlacesShared";
//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        editData: Object,
        mfos: Object,
        chief_agenda: Object,
        socio_economic: Object,
        sustainable: Object,
        executive_legislative: Object,
        research: Object,
        idmfo: String,
        functions: Object,
        functions1:Object,
        popsp_agencies: Object
    },
    components: {
        Places: () => new Promise((resolve) => {
            setTimeout(() => {
                resolve(Places)
            }, 2000)
        })

    },

    data() {
        return {
            filter: false,
            from_mfo: false,
            submitted: false,
            form: useForm({
                paps_desc: "",
                type: "",
                FFUNCCOD: "",
                fund_owner_ffunccod: "",
                idmfo: "",
                MOV: "",
                sector: "",
                chief_executive_agenda: "",
                socio_economic_agenda: "",
                sust_devt_goal: "",
                executive_legislative_agenda: "",
                research_agenda: "",
                sector: "",
                subsector: "",
                source_of_funds: "",
                source_others_specify: "",
                funding_agency: "",
                popsp: 0,
                focus_area: "",
                is_mother_program: 0,
                mother_program_id: null,
                aip_code: "",
                agency_name: "",
                id: null
            }),
            year_values: ["2000",
                "2001",
                "2002",
                "2003",
                "2004",
                "2005",
                "2006",
                "2007",
                "2008",
                "2009",
                "2010",
                "2011",
                "2012",
                "2013",
                "2014",
                "2015",
                "2016",
                "2017",
                "2018",
                "2019",
                "2020",
                "2021",
                "2022",
                "2023",
                "2024",
                "2025",
                "2026",
                "2027",
                "2028",
                "2029",
                "2030",
                "2031",
                "2032",
                "2033",
                "2034",
                "2035",
                "2036",
                "2037",
                "2038",
                "2039",
                "2040",
                "2041",
                "2042",
                "2043",
                "2044",
                "2045",
                "2046",
                "2047",
                "2048",
                "2049",
                "2050",
                "2051",
                "2052",
                "2053",
                "2054",
                "2055",
                "2056",
                "2057",
                "2058",
                "2059",
                "2060",
                "2061",
                "2062",
                "2063",
                "2064",
                "2065",
                "2066",
                "2067",
                "2068",
                "2069",
                "2070",
                "2071",
                "2072",
                "2073",
                "2074",
                "2075",
                "2076",
                "2077",
                "2078",
                "2079",
                "2080",
                "2081",
                "2082",
                "2083",
                "2084",
                "2085",
                "2086",
                "2087",
                "2088",
                "2089",
                "2090",
                "2091",
                "2092",
                "2093",
                "2094",
                "2095",
                "2096",
                "2097",
                "2098",
                "2099",
                "2100",
            ],
            mfos_data: [],
            motherPAPS: [],
            functions1: [],
            pageTitle: ""
        };
    },
    computed: {
        formattedMFOs() {
            let dataMFO = this.mfos;
            const selectedFFUNCCOD = this.form.FFUNCCOD;
            console.log('Selected FFUNNCOD: ', selectedFFUNCCOD);
            if (this.form.FFUNCCOD) {
                dataMFO = this.mfos.filter((mfo) => mfo.FFUNCCOD === selectedFFUNCCOD);
            }
            console.log('Filtered Data:', dataMFO);
            // if (this.form.FFUNCCOD) {
            //     dataMFO = dataMFO.filter((mfo) => mfo.FFUNCCOD === this.form.FFUNCCOD);
            // }
            // value: program.recid,
            //     label: program.FPROGRAM,
            return dataMFO.map((mfo) => ({

                mfo_desc: mfo.mfo_desc,
                FFUNCCOD: mfo.FFUNCCOD,
                id: mfo.id
            }));
            // return dataPrograms.map((program) => ({
            //     value: program.recid,
            //     label: program.FPROGRAM,
            //     raaotype: program.ftype,
            //     FFUNCCOD: program.FFUNCCOD,
            //     raohsid: program.raohsid
            // }));
            // get() {

            // },
            // set() { }

        }
    },
    mounted() {
    this.getFunctions1();
        if (this.idmfo !== undefined) {
            this.from_mfo = true
        }

        this.form.idmfo = this.idmfo
        if (this.editData !== undefined) {
            this.pageTitle = "Edit"
            this.form.paps_desc = this.editData.paps_desc
            this.form.MOV = this.editData.MOV
            this.form.type = this.editData.type
            this.form.FFUNCCOD = this.editData.FFUNCCOD
            this.form.idmfo = this.editData.idmfo
            this.form.chief_executive_agenda = this.editData.chief_executive_agenda
            this.form.socio_economic_agenda = this.editData.socio_economic_agenda
            this.form.sust_devt_goal = this.editData.sust_devt_goal
            this.form.executive_legislative_agenda = this.editData.executive_legislative_agenda
            this.form.research_agenda = this.editData.research_agenda
            this.form.sector = this.editData.sector
            this.form.subsector = this.editData.subsector
            this.form.source_of_funds = this.editData.source_of_funds
            this.form.source_others_specify = this.editData.source_others_specify
            this.form.funding_agency = this.editData.funding_agency
            this.form.popsp = this.editData.popsp
            this.form.focus_area = this.editData.focus_area
            this.form.is_mother_program = this.editData.is_mother_program
            this.form.aip_code =this.editData.aip_code
            this.form.agency_name = this.editData.agency_name
            this.form.fund_owner_ffunccod = this.editData.fund_owner
            this.form.id = this.editData.id
            this.filterMFOs()
            this.loadPAPS();
            this.form.mother_program_id = this.editData.mother_program_id
        } else {
            this.pageTitle = "Create"
            if (this.idmfo != undefined) {
                this.form.idmfo = this.idmfo
                this.from_mfo = true
            }
            this.setselect();
        }

    },

    methods: {

   getFunctions1() {
    axios.get('/paps/major/final/outputs')
        .then(res => {
            this.functions1 = res.data.data;
        });
},
        limitWordCount() {
            // Get the words from the input text
            const words = this.form.MOV.split(/\s+/);

            // Limit the input to 50 words
            if (words.length > 50) {
                // If the word count exceeds 50, truncate the input
                this.form.MOV = words.slice(0, 50).join(' ');
            }
        },
        submit() {
            if (this.form.type == "GAS") {
                this.form.idmfo = "0";
            } else {
                if (this.form.idmfo == "0") {
                    this.form.idmfo = null
                }
            }
            this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
            if (this.editData !== undefined) {
                if (this.from_mfo == true) {
                    this.form.patch("/paps/update/" + this.form.id, this.form);
                } else {
                    this.form.patch("/paps/" + this.form.id, this.form);
                }

            } else {
                this.form.id = null;
                // alert(this.from_mfo);
                if (this.from_mfo == true) {
                    this.form.post("/paps/save", this.form);
                } else {
                    this.form.post("/paps/store", this.form);
                }

            }
        },
        setselect() {
            const now = new Date();
            var year_now = now.getFullYear();
            this.form.plan_period_from = year_now;
            this.form.plan_period_to = year_now;
        },

        async filterMFOs() {
            this.mfos_data = [];
            this.motherPAPS = [];
            // await axios.post("/paps/major/final/outputs/filter", { FFUNCCOD: this.form.FFUNCCOD }).then((response) => {
            //     this.mfos_data = response.data.data
            // });
            try {
                var my_url = "/paps/major/final/outputs/filter/" + this.form.FFUNCCOD;

                const response = await axios.get(my_url, { FFUNCCOD: this.form.FFUNCCOD });
                this.mfos_data = response.data.data;
            } catch (error) {
                console.error("Error fetching MFOs:", error);
            }
        },
        async loadPAPS() {
            this.motherPAPS = [];
            // await axios.post("/paps/mother/paps/filter", { idmfo: this.form.idmfo }).then((response) => {
            //     this.motherPAPS = response.data.data
            // });
            try {
                var my_url = "/paps/mother/paps/filter/" + this.form.idmfo;
                // alert(my_url);
                const response = await axios.get(my_url, { idmfo: this.form.idmfo });
                this.motherPAPS = response.data.data;
            } catch (error) {
                console.error("Error fetching PAPS:", error);
            }
        },
        goBack() {
            // Navigate back to the previous page
            window.history.back();
        }
    },
};
</script>


