<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Accomplishment</h3>
            <Link :href="`/AddAccomplishment`">
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

                <label for="">Major Final Output</label>
                <select class="form-control form-select" v-model="form.idmfo" @click="filterPaps()">
                    <option v-for="mfo in mfo" :value="mfo.id">
                        {{ mfo.mfo_desc }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.description">{{ form.errors.description }}</div>

                <label for="">Programs and Project</label>
                <select class="form-control form-select" v-model="form.idpaps">
                    <option v-for="paps in my_paps" :value="paps.id">
                        {{ paps.paps_desc }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.description">{{ form.errors.description }}</div>

                <label for="">Activity</label>
                <input type="text" v-model="form.description" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.description">{{ form.errors.description }}</div>

                <label for="">Quantity (if any)</label>
                <input type="number" v-model="form.quantity" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.quantity">{{ form.errors.quantity }}</div>

                <label for="">Amount (if any)</label>
                <input type="number" v-model="form.amount" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.amount">{{ form.errors.amount }}</div>

                <label for="">Source of Fund (if any)</label>
                <input type="text" v-model="form.source_of_fund" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.source_of_fund">{{ form.errors.source_of_fund }}</div>

                <label for="">Responsible Person/Unit</label>
                <input type="text" v-model="form.responsible_person" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.responsible_person">{{ form.errors.responsible_person }}</div>

                <label for="">Date From</label>
                <input type="date" v-model="form.date_from" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.date_from">{{ form.errors.date_from }}</div>

                <label for="">Date To</label>
                <input type="date" v-model="form.date_to" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.date_to">{{ form.errors.date_to }}</div>

                <label for="">Remarks</label>
                <input type="text" v-model="form.remarks" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.remarks">{{ form.errors.remarks }}</div>

                <label for="">Link</label>
                <input type="text" v-model="form.Link" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.Link">{{ form.errors.Link }}</div>

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
        mfo: Object,
        paps: Object,
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
            my_paps: [],
            submitted: false,
            form: useForm({
                idmfo: "",
                date_from: "",
                date_to: "",
                description: "",
                quantity: "",
                remarks: "",
                Link: "",
                idpaps: "",
                amount: "",
                responsible_person: "",
                source_of_fund: "",
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
            this.form.date_from = this.editData.date_from
            this.form.date_to = this.editData.date_to
            this.form.description = this.editData.description
            this.form.quantity = this.editData.quantity
            this.form.remarks = this.editData.remarks
            this.form.Link = this.editData.Link
            this.form.idpaps = this.editData.idpaps
            this.form.idmfo = this.editData.idmfo
            this.form.amount = this.editData.amount
            this.form.source_of_fund = this.editData.source_of_fund
            this.form.responsible_person = this.editData.responsible_person
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
                this.form.patch("/AddAccomplishment/" + this.form.id, this.form);
            } else {
                // alert("Sample");
                var url = "/AddAccomplishment/store"
                // alert('for store '+url);
                this.form.post(url);
            }
        },
        filterPaps() {
            this.my_paps = [];
            this.paps.forEach(i => {
                if (i.idmfo === this.form.idmfo) {
                    this.my_paps.push(i);
                }
            });
            console.log(this.my_paps);
            return this.my_paps;
        },
    },
};
</script>
