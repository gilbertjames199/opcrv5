<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Office AIP Code</h3>
            <Link :href="`/logframe`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>
        <h2><u>{{ office.office }}</u></h2>
        <!-- <div class="col-md-8">
            <button class="btn btn-secondary" @click="showModal" :disabled="submitted">Permissions</button>
        </div> -->

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <input type="hidden" v-model="form.idpaps" class="form-control" autocomplete="positionchrome-off">
                <label for="">FFUNCCOD</label>
                <input type="text" v-model="form.FFUNCCOD" class="form-control" autocomplete="positionchrome-off" readonly>
                <div class="fs-6 c-red-500" v-if="form.errors.FFUNCCOD">{{ form.errors.FFUNCCOD }}</div>
                <label for="">Department Code</label>
                <input type="text" v-model="form.department_code" class="form-control" autocomplete="positionchrome-off" readonly>
                <div class="fs-6 c-red-500" v-if="form.errors.department_code">{{ form.errors.department_code }}</div>
                <label for="">AIP Code</label>
                <input type="text" v-model="form.aip_code" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.aip_code">{{ form.errors.aip_code }}</div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
                <!-- {{ editData.FFUNCCOD }} -->

                <br>
                {{  form }}
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
        // paps: Object,
        // idpaps: Number,
        // editData: Object,
        // sectors: Object
        editData: Object,
        office: Object
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
                FFUNCCOD: "",
                department_code: "",
                aip_code: "",
                // idpaps: "",
                id: null
            }),
            pageTitle: ""
        };
    },

    mounted() {
        this.form.idpaps = this.idpaps;
        if (this.editData !== undefined) {
            if (this.bari) {
                this.bar = this.bari
            }
            this.pageTitle = "Edit"
            this.form.FFUNCCOD = this.editData.FFUNCCOD
            this.form.department_code = this.editData.department_code
            this.form.aip_code = this.editData.aip_code
            // this.form.idpaps = this.editData.idpaps
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
                this.form.patch("/office-aip-code" , this.form);
            } else {
                // alert("Sample");
                var url = "/Quality/store"
                // alert('for store '+url);
                this.form.post(url);
            }
        },
    },
};
</script>
