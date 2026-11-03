<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Major Final Outputs {{ idinteroutcome }}</h3>
            <Link :href="`/mfos/direct`">
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

                <label for="">SOCIETAL GOALS</label>

                <select class="form-control" v-model="form.id_socgoal">
                    <option v-for="societalGoal in societalGoals" :value="societalGoal.id">
                        {{ societalGoal.description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.id_socgoal">{{ form.errors.id_socgoal }}</div>


                <label for="">SECTOR OUTCOMES</label>

                <select class="form-control" v-model="form.id_sec_outcome">
                    <option v-for="sectorOutcome in sectorOutcomes" :value="sectorOutcome.id">
                        {{ sectorOutcome.goal_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.id_sec_outcome">{{ form.errors.id_sec_outcome }}</div>

                <label for="">ORGANIZATIONAL OUTCOMES</label>

                <select class="form-control" v-model="form.id_org_outcome">
                    <option v-for="organizationalOutcome in organizationalOutcomes" :value="organizationalOutcome.id">
                        {{ organizationalOutcome.goal_description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.id_org_outcome">{{ form.errors.id_org_outcome }}</div>

                <label for="">MFO DESCRIPTION</label>
                <input type="text" v-model="form.mfo_desc" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.mfo_desc">{{ form.errors.mfo_desc }}</div>

                <label for="">OFFICE</label>
                <!--<input type="text" v-model="form.FFUNCCOD" class="form-control" autocomplete="chrome-off">-->
                <select class="form-control" v-model="form.FFUNCCOD">
                    <option v-for="functional in functions" :value="functional.FFUNCCOD">
                        {{ functional.FFUNCTION }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.FFUNCCOD">{{ form.errors.FFUNCCOD }}</div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3  text-white" @click="submit()"
                    :disabled="form.processing">
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
//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        editData: Object,
        societalGoals: Object,
        sectorOutcomes: Object,
        organizationalOutcomes: Object,
        idinteroutcome: String,
        functions: Object,
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
            submitted: false,
            form: useForm({
                id_org_outcome: "",
                id_sec_outcome: "",
                id_socgoal: "",
                mfo_desc: "",
                FFUNCCOD: "",
                id: null
            }),
            select_FFUNCCOD: "",
            pageTitle: ""
        };
    },

    mounted() {
        if (this.editData !== undefined) {
            this.pageTitle = "Edit"
            this.form.id_org_outcome = this.editData.id_org_outcome
            this.form.id_sec_outcome = this.editData.id_sec_outcome
            this.form.id_socgoal = this.editData.id_socgoal
            this.form.mfo_desc = this.editData.mfo_desc
            this.form.FFUNCCOD = this.editData.FFUNCCOD
            this.form.id = this.editData.id
        } else {
            this.pageTitle = "Create"
        }

    },

    methods: {
        submit() {
            // alert(this.dat)
            this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
            //alert(this.form.target_qty);
            if (this.editData !== undefined) {
                this.form.patch("/mfos", this.form);
            } else {
                this.form.id = null;
                this.form.post("/mfos/store", this.form);
            }
        },
    },
};
</script>
