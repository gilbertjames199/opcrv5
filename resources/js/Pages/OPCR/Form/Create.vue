<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Office </h3>
            <Link href="/ELA">
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

                <label for="">DESCRIPTION</label>
                <input type="text" v-model="form.agenda_description" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.agenda_description">{{ form.errors.agenda_description }}</div>

                <label for="">YEAR FROM</label>
                <input type="date" v-model="form.year_from" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.year_from">{{ form.errors.year_from }}</div>

                <label for="">YEAR TO</label>
                <input type="date" v-model="form.year_to" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.year_to">{{ form.errors.year_to }}</div>

                <label for="">RATIONALE</label>
                <input type="text" v-model="form.rationale" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.rationale">{{ form.errors.rationale }}</div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>

    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Places from "@/Shared/PlacesShared";

export default {
    props: {
        editData: Object
    },

    data() {
        return {
            submitted: false,
            form: useForm({
                agenda_description: "",
                year_from: "",
                year_to: "",
                rationale: "",
                id: null
            }),
            pageTitle: ""
        };
    },

    mounted() {

        if (this.editData !== undefined) {

            this.pageTitle = "Edit"
            this.form.agenda_description = this.editData.agenda_description
            this.form.year_from = this.editData.year_from
            this.form.year_to = this.editData.year_to
            this.form.rationale = this.editData.rationale
            this.form.id = this.editData.id
        } else {
            this.pageTitle = "Create"
        }

    },

    methods: {
        submit() {

            if (this.editData !== undefined) {
                this.form.patch("/ELA/" + this.form.id, this.form);
            } else {
                this.form.post("/ELA");
            }
        },
    },
};
</script>
