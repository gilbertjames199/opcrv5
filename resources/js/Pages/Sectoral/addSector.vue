<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Sectoral Outcomes</h3>
            <Link href="/Sectoral">
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
            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <label for="">DESCRIPTION</label>
                <QuillEditor theme="snow" v-model:content="form.goal_description" contentType="html" toolbar="full" />
                <!-- <input type="text" v-model="form.goal_description" class="form-control" autocomplete="chrome-off"> -->
                <div class="fs-6 c-red-500" v-if="form.errors.goal_description">{{ form.errors.goal_description }}</div>

                <label for="">SECTOR</label>
                <!--<input type="text" v-model="form.sector" class="form-control" autocomplete="chrome-off">-->
                <select class="form-control" v-model="form.sector">
                    <option v-for="sector in sectors" :value="sector.id">
                        {{ sector.sector_name }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.sector">{{ form.errors.sector }}</div>

                <label for="">OFFICES</label>
                <!--<input type="text" v-model="form.FFUNCCOD" class="form-control" autocomplete="chrome-off">-->
                <select class="form-control form-select" v-model="form.FFUNCCOD">
                    <option v-for="functional in functions" :value="functional.FFUNCCOD">
                        {{ functional.FFUNCTION }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.FFUNCCOD">{{ form.errors.FFUNCCOD }}</div>

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
//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        editData: Object,
        sectors: Object,
        functions: Object,
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
            submitted: false,
            form: useForm({
                goal_description: "",
                sector: "",
                FFUNCCOD: "",
                id: null
            }),
            pageTitle: ""
        };
    },

    mounted() {

        if (this.editData !== undefined) {
            if (this.bari) {
                this.bar = this.bari
            }
            this.pageTitle = "Edit"
            this.form.goal_description = this.editData.goal_description
            this.form.sector = this.editData.sector
            this.form.id = this.editData.id
            this.form.FFUNCCOD = this.editData.FFUNCCOD
        } else {
            this.pageTitle = "Create"
        }

    },

    methods: {
        submit() {
            this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
            //alert(this.form.target_qty);
            if (this.editData !== undefined) {
                this.form.patch("/Sectoral/" + this.form.id, this.form);
            } else {
                this.form.post("/Sectoral");
            }
        },
    },
};
</script>
