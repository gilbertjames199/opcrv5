<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Expected Outcomes</h3>
            <Link :href="`/expected-outcomes-revised/${project[0].id}/${type}`" >
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
            <h4 v-if="type==='strategy'">Strategy: {{ project[0].strategy.description }}</h4>
            <h4 v-if="type==='activity'">Activity: {{ project[0].activity.description }}</h4>
        </div>


        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <label for="">DESCRIPTION</label>
                <input type="text" v-model="form.description" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.description">{{ form.errors.description }}</div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>
        <br>
        <br>
        <br>
        <!-- {{ form }}
        <br>********************************<br>
        {{ project[0] }} -->

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
                description: "",
                strategy_id: "",
                activity_id: "",
                strategy_project_id: "",
                activity_project_id: "",
                is_strategy_outcome: "",
                project_id: "",
                type: "",
                id: null
            }),
            pageTitle: ""
        };
    },

    mounted() {
            this.form.type=this.type
            this.form.project_id=this.project[0].id
        if (this.editData !== undefined) {

            this.pageTitle = "Edit"
            this.form.description = this.editData.description
            this.form.is_strategy_outcome = this.editData.is_strategy_outcome
            this.form.strategy_id = this.editData.strategy_id
            this.form.activity_id = this.editData.activity_id
            this.form.id = this.editData.id
        } else {
            this.pageTitle = "Create"
            // alert(this.type)
            if(this.type==='activity'){
                this.form.is_strategy_outcome=0
                this.form.activity_id=this.project[0].activity_id
                this.form.activity_project_id = this.project[0].id
            }else if(this.type==='strategy'){
                this.form.is_strategy_outcome=1
                this.form.strategy_id=this.project[0].strategy_id
                this.form.strategy_project_id = this.project[0].id
            }
        }

    },

    methods: {
        submit() {

            if (this.editData !== undefined) {
                this.form.patch("/expected-outcomes-revised/"+this.form.id , this.form);
            } else {
                this.form.post("/expected-outcomes-revised/store" , this.form);
            }
        },
    },
};
</script>
