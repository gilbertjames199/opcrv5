<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Expected Output</h3>
            <Link :href="`/expected-outputs-revised/${project[0].id}/${type}`" >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>
        <div class="peers fxw-nw jc-sb ai-c">
            <h4 v-if="type==='strategy'">{{ project[0].strategy.description }}</h4>
            <h4 v-if="type==='activity'">{{ project[0].activity.description }}</h4>
        </div>
        <!-- {{ project[0] }} -->

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <label for="">DESCRIPTION</label>
                <input type="text" v-model="form.description" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.description">{{ form.errors.description }}</div>

                <label for="">PHYSICAL -Q1</label>
                <input type="number" v-model="form.physical_q1" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.physical_q1">{{ form.errors.physical_q1 }}</div>
                <input type="hidden" v-model="form.physical_q1" class="form-control" autocomplete="chrome-off">

                <label for="">PHYSICAL -Q2</label>
                <input type="number" v-model="form.physical_q2" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.physical_q2">{{ form.errors.physical_q2 }}</div>
                <input type="hidden" v-model="form.physical_q2" class="form-control" autocomplete="chrome-off">

                <label for="">PHYSICAL -Q3</label>
                <input type="number" v-model="form.physical_q3" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.physical_q3">{{ form.errors.physical_q3 }}</div>
                <input type="hidden" v-model="form.physical_q3" class="form-control" autocomplete="chrome-off">

                <label for="">PHYSICAL -Q4</label>
                <input type="number" v-model="form.physical_q4" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.physical_q4">{{ form.errors.physical_q4 }}</div>
                <input type="hidden" v-model="form.physical_q4" class="form-control" autocomplete="chrome-off">

                <label for="">TARGET INDICATOR</label>
                <input type="text" v-model="form.target_indicator" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.target_indicator">{{ form.errors.target_indicator }}</div>
                <input type="hidden" v-model="form.target_indicator" class="form-control" autocomplete="chrome-off">
                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>
        <br>
        <br>
        <br>
        {{ form }}
        <br>********************************<br>
        project: {{ project[0] }}

    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Places from "@/Shared/PlacesShared";

export default {
    props: {
        editData: Object,
        project: Object,
        type: String
    },

    data() {
        return {
            submitted: false,
            form: useForm({
                id: null,
                description: "",
                strategy_id: "",
                activity_id: "",
                strategy_project_id: "",
                activity_project_id: "",
                type: "",
                // is_strategy_output: "",
                project_id: "",
                target_indicator: "",
                date_from: "",
                date_to: "",
                physical_q1: "",
                physical_q2: "",
                physical_q3: "",
                physical_q4: "",
                ps_q1: "",
                ps_q2: "",
                ps_q3: "",
                ps_q4: "",
                mooe_q1: "",
                mooe_q2: "",
                mooe_q3: "",
                mooe_q4: "",
                co_q1: "",
                co_q2: "",
                co_q3: "",
                co_q4: "",
                gad_issue: "",
                ccet_code: "",
                responsible: "",
                is_active: "",
                is_strategy_output: "",
            }),
            pageTitle: ""
        };
    },

    mounted() {
            this.form.type=this.type
            this.form.project_id=this.project[0].id
        if (this.editData !== undefined) {

            this.pageTitle = "Edit"
            this.form.id=this.editData.id
            this.form.description=this.editData.description
            this.form.strategy_id=this.editData.strategy_id
            this.form.activity_id=this.editData.activity_id
            // this.form.is_strategy_outcome=this.editData.is_strategy_outcome
            // this.form.project_id=this.editData.project_id
            this.form.target_indicator=this.editData.target_indicator
            this.form.date_from=this.editData.date_from
            this.form.date_to=this.editData.date_to
            this.form.physical_q1=this.editData.physical_q1
            this.form.physical_q2=this.editData.physical_q2
            this.form.physical_q3=this.editData.physical_q3
            this.form.physical_q4=this.editData.physical_q4
            this.form.ps_q1=this.editData.ps_q1
            this.form.ps_q2=this.editData.ps_q2
            this.form.ps_q3=this.editData.ps_q3
            this.form.ps_q4=this.editData.ps_q4
            this.form.mooe_q1=this.editData.mooe_q1
            this.form.mooe_q2=this.editData.mooe_q2
            this.form.mooe_q3=this.editData.mooe_q3
            this.form.mooe_q4=this.editData.mooe_q4
            this.form.co_q1=this.editData.co_q1
            this.form.co_q2=this.editData.co_q2
            this.form.co_q3=this.editData.co_q3
            this.form.co_q4=this.editData.co_q4
            this.form.gad_issue=this.editData.gad_issue
            this.form.ccet_code=this.editData.ccet_code
            this.form.responsible=this.editData.responsible
            this.form.is_active=this.editData.is_active
            // this.form.created_at=this.editData.created_at
            // this.form.updated_at=this.editData.updated_at
            this.form.is_strategy_output=this.editData.is_strategy_output

            this.form.id = this.editData.id
        } else {
            this.pageTitle = "Create"
            this.form.is_active="1";
            // alert(this.type)
            if(this.type==='activity'){
                this.form.is_strategy_output=0
                this.form.activity_id=this.project[0].activity.id
                this.form.activity_project_id =this.project[0].id
            }else if(this.type==='strategy'){
                this.form.is_strategy_output=1
                this.form.strategy_id=this.project[0].strategy.id
                this.form.strategy_project_id =this.project[0].id
            }
        }

    },

    methods: {
        submit() {

            if (this.editData !== undefined) {
                this.form.patch("/expected-outputs-revised/"+this.form.id , this.form);
            } else {
                this.form.post("/expected-outputs-revised/store" , this.form);
            }
        },
    },
};
</script>
