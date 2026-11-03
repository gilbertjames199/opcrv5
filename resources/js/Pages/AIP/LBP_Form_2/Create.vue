<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} AIP Code</h3>
            <Link :href="`/AIP/direct`">
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
                <input type="hidden" v-model="form.idpaps" class="form-control" autocomplete="positionchrome-off">
                <label for="">AIP Code</label>
                <input type="text" v-model="form.AIP_Code" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.AIP_Code">{{ form.errors.AIP_Code }}</div>

                <label for="">PS</label>
                <input type="number" v-model="form.PS" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.PS">{{ form.errors.PS }}</div>

                <label for="">MOOE</label>
                <input type="number" v-model="form.MOOE" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.MOOE">{{ form.errors.MOOE }}</div>

                <label for="">CO</label>
                <input type="number" v-model="form.CO" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.CO">{{ form.errors.CO }}</div>

                <label for="">Total</label>
                <div class="form-control">
                    {{ Total }}
                </div>

                <label>YEAR</label>
                <input type="number" class="form-control" v-model="form.date" />
                <div class="fs-6 c-red-500" v-if="form.errors.date">{{ form.errors.date }}</div>

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
        paps: Object,
        idpaps: Number,
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
                AIP_Code: "",
                PS: "",
                MOOE: "",
                CO: "",
                idpaps: "",
                date: "",
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
            this.form.AIP_Code = this.editData.AIP_Code
            this.form.PS = this.editData.PS
            this.form.MOOE = this.editData.MOOE
            this.form.CO = this.editData.CO
            this.form.idpaps = this.editData.idpaps
            this.form.id = this.editData.id
            this.form.date = this.editData.date
        } else {
            this.pageTitle = "Create"
            this.form.PS = 0;
            this.form.MOOE = 0;
            this.form.CO = 0;
            this.setCurrentYear()
        }

    },

    methods: {
        submit() {
            this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
            //alert(this.form.target_qty);
            if (this.editData !== undefined) {
                this.form.patch("/AIP/" + this.form.id, this.form);
            } else {
                // alert("Sample");
                var url = "/AIP/store"
                // alert('for store '+url);
                this.form.post(url);
            }
        },
        setCurrentYear() {

            var yr = new Date().getFullYear()
            this.form.date = parseFloat(yr) + 1;
            // alert("year: "+this.form.year);
        },
    },
    computed: {
        Total() {
            try {
                var PS = parseFloat(this.form.PS);
                var MOOE = parseFloat(this.form.MOOE);
                var CO = parseFloat(this.form.CO);
                return PS + MOOE + CO;

            } catch (error) {
                return 0;
            }
        }
    }
};
</script>
