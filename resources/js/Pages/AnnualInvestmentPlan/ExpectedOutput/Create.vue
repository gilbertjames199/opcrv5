<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Expected Output</h3>
            <Link :href="`/expected-outputs/${aip_id}`">
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
        <!-- {{ paps }} -->
        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <label for="">Programs and Projects</label>
                <select v-model="form.idpaps" class="form-control" >
                    <option v-for="pap in paps" :value="pap.id">
                        {{ pap.paps_desc }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.idpaps">{{ form.errors.idpaps }}</div>

                <label for="">Output Description</label>
                <input type="text" v-model="form.output_description" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.output_description">{{ form.errors.output_description }}</div>

                <label for="">Output Quantity</label>
                <input type="text" v-model="form.output_qty" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.output_qty">{{ form.errors.output_qty }}</div>

                <label for="">Weight (%)</label>
                <input type="text" v-model="form.weight" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.weight">{{ form.errors.weight }}</div>

                <label for="">OPCR Target</label>
                <input type="text" v-model="form.opcr_target" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.opcr_target">{{ form.errors.opcr_target }}</div>



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
        paps: Object,
        functions: Object,
        aip_id: String,
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
                aip_id: "",
                idpaps: "",
                output_qty: "",
                output_description: "",
                weight: "",
                opcr_target: "",
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
            this.form.aip_id=this.editData.aip_id
            this.form.idpaps=this.editData.idpaps
            this.form.output_qty=this.editData.output_qty
            this.form.output_description=this.editData.output_description
            this.form.weight=this.editData.weight
            this.form.opcr_target=this.editData.opcr_target
            this.form.id = this.editData.id
            // this.form.FFUNCCOD = this.editData.FFUNCCOD
        } else {
            this.pageTitle = "Create"
            this.form.aip_id = this.aip_id
        }

    },

    methods: {
        submit() {
            this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
            //alert(this.form.target_qty);
            if (this.editData !== undefined) {
                this.form.patch("/expected-outputs/" + this.form.id, this.form);
            } else {
                this.form.post("/expected-outputs");
            }
        },
    },
};
</script>
