<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Division division_outputs</h3>
            <!-- <h4>{{ dept.FFUNCTION }}</h4> -->
            <Link :href="`/division_outputs`">
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

                <label for="">DIVISION</label>
                <select type="text" v-model="form.division_id" class="form-control" autocomplete="chrome-off">
                    <option></option>
                    <option v-for="division in divisions" :value="division.id">
                        {{ division.division_name1 }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.division_id">{{ form.errors.division_id }}</div>

                <label for="">MAJOR FINAL OUTPUT</label>
                <select type="text" v-model="form.idmfo" class="form-control" autocomplete="chrome-off">
                    <option></option>
                    <option v-for="mfo in mfos" :value="mfo.id">
                        {{ mfo.mfo_desc }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.idmfo">{{ form.errors.idmfo }}</div>


                <label for="">OUTPUT</label>
                <input type="text" v-model="form.output" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.output">{{ form.errors.output }}</div>

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
        editData: Object,
        mfos: Object,
        divisions: Object,
    },

    data() {
        return {
            submitted: false,
            form: useForm({
                output: "",
                idmfo: "",
                division_id: "",
                id: null
            }),
            pageTitle: ""
        };
    },

    mounted() {

        if (this.editData !== undefined) {
            this.pageTitle = "Edit"
            this.form.output = this.editData.output
            this.form.idmfo = this.editData.idmfo
            this.form.division_id = this.editData.division_id
            this.form.id = this.editData.id
        } else {
            this.pageTitle = "Create"
            //this.form.FFUNCCOD = this.FFUNCCOD
        }

    },

    methods: {
        submit() {

            if (this.editData !== undefined) {
                this.form.patch("/division_outputs/", this.form);
            } else {
                this.form.post("/division_outputs/store", this.form);
            }
        },
    },
};
</script>
