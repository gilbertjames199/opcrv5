<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Intermediate Outcome</h3>
            <Link :href="`/inter_outcome/${idoutcome}`">
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

                <label for="">OUTCOME</label>
                <select class="form-control" v-model="form.idoutcome">
                    <option v-for="outcome in outcomes" :value="outcome.id">
                        {{ outcome.oc_desc }} ( {{ outcome.id }})
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.plan_period">{{ form.errors.plan_period }}</div>

                <label for="">INTERMEDIATE OUTCOME DESCRIPTION</label>
                <input type="text" v-model="form.io_desc" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.io_desc">{{ form.errors.io_desc }}</div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
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
        outcomes: Object,
        idoutcome: String
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
                idoutcome: "",
                io_desc: "",
                id: null
            }),
            pageTitle: ""
        };
    },

    mounted() {
        this.form.idoutcome = this.idoutcome
        if (this.editData !== undefined) {
            if (this.bari) {
                this.bar = this.bari
            }
            this.pageTitle = "Edit"
            this.form.idoutcome = this.idoutcome
            this.form.io_desc = this.editData.io_desc
            this.form.id = this.editData.id
        } else {
            this.pageTitle = "Create"
        }

    },

    methods: {
        submit() {
            this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
            //alert(this.form.target_qty);
            if (this.editData !== undefined) {
                this.form.patch("/inter_outcome/", this.form);
            } else {
                this.form.id = null;
                this.form.post("/inter_outcome/store", this.form);
            }
        },
    },
};
</script>
