<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Risk Management</h3>
            <Link href="/RiskManagement">
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
                <input type="hidden" v-model="form.revision_plan_id" class="form-control" autocomplete="positionchrome-off">
                <label for="">PROSPECTIVE POSSIBLE RISKS</label>
                <QuillEditor theme="snow" v-model:content="form.possible_risk" contentType="html" toolbar="essential"
                />
                <!-- <input type="text" v-model="form.possible_risk" class="form-control" autocomplete="positionchrome-off"> -->
                <div class="fs-6 c-red-500" v-if="form.errors.possible_risk">{{ form.errors.possible_risk }}</div>

                <label for="">PREVENTIVE MEASURES</label>
                <QuillEditor theme="snow" v-model:content="form.person_affected" contentType="html" toolbar="essential"
                />
                <!-- <input type="text" v-model="form.person_affected" class="form-control" autocomplete="chrome-off"> -->
                <div class="fs-6 c-red-500" v-if="form.errors.person_affected">{{ form.errors.person_affected }}</div>

                <label for="">MECHANISMS TO MONITOR</label>
                <QuillEditor theme="snow" v-model:content="form.management" contentType="html" toolbar="essential"
                />
                <!-- <input type="text" v-model="form.management" class="form-control" autocomplete="chrome-off"> -->
                <div class="fs-6 c-red-500" v-if="form.errors.management">{{ form.errors.management }}</div>

                <!-- <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off"> -->
                <!-- :disabled="form.processing" -->
                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" >
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
        revs: Object,
        editData: Object,
        sectors: Object
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
                possible_risk: "",
                person_affected: "",
                management: "",
                revision_plan_id: "",
                id: null
            }),
            pageTitle: ""
        };
    },

    mounted() {
        this.form.revision_plan_id = this.revs.id;
        if (this.editData !== undefined) {
            if (this.bari) {
                this.bar = this.bari
            }
            this.pageTitle = "Edit"
            this.form.possible_risk = this.editData.possible_risk
            this.form.person_affected = this.editData.person_affected
            this.form.management = this.editData.management
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
                this.form.patch("/RiskManagement/" + this.form.id, this.form);
            } else {
                var url = "/RiskManagement/store"
                // alert('for store '+url);
                this.form.post(url);
            }
        },
    },
};
</script>
