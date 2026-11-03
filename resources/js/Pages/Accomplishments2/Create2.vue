<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Accomplishments {{ form.idtarget }}</h3>
            <Link :href="`/accomplishments/${form.idtarget}/list`">
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
                <label for="">ID Target </label>
                <!-- <input type="text"
                        v-model="form.idtarget"
                        class="form-control"
                        autocomplete="chrome-off"
                        disabled> -->
                <select class="form-control" v-model="form.idtarget" @change="loadBar">
                    <option v-for="tar in target" :value="tar.id">
                        {{ tar.description }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.idtarget">{{ form.errors.idtarget }}</div>

                <label for="">Accomplishment Quantity </label>
                <input type="text" v-model="form.accomplishment_qty" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.accomplishment_qty">{{ form.errors.accomplishment_qty }}</div>

                <label for="">Actual Period</label>
                <input type="text" v-model="form.actual_period" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.actual_period">{{ form.errors.actual_period }}</div>

                <label for="">Actual Expenditure</label>
                <input type="text" v-model="form.actual_expenditure" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.actual_expenditure">{{ form.errors.actual_expenditure }}</div>

                <label for="">Facilitating Timelines</label>
                <input type="text" v-model="form.facilitating_timelines" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.facilitating_timelines">{{ form.errors.facilitating_timelines
                }}</div>

                <label for="">Facilitating Competency</label>
                <input type="text" v-model="form.facilitating_competency" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.facilitating_competency">{{
                    form.errors.facilitating_competency }}</div>

                <label for="">Facilitating Logistics</label>
                <input type="text" v-model="form.facilitating_logistics" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.facilitating_logistics">{{ form.errors.facilitating_logistics
                }}</div>

                <label for="">Detaining Timelines</label>
                <input type="text" v-model="form.detaining_timelines" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.detaining_timelines">{{ form.errors.detaining_timelines }}
                </div>

                <label for="">Detaining Concerns</label>
                <input type="text" v-model="form.detaining_concerns" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.detaining_concerns">{{ form.errors.detaining_concerns }}</div>

                <label for="">Detaining Logistics</label>
                <input type="text" v-model="form.detaining_logistics" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.detaining_logistics">{{ form.errors.detaining_logistics }}
                </div>

                <label for="">concerns_timelines</label>
                <input type="text" v-model="form.concerns_timelines" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.concerns_timelines">{{ form.errors.concerns_timelines }}</div>

                <label for="">Concerns Competency</label>
                <input type="text" v-model="form.concerns_competency" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.concerns_competency">{{ form.errors.concerns_competency }}
                </div>

                <label for="">Concerns Logistics</label>
                <input type="text" v-model="form.concerns_logistics" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.concerns_logistics">{{ form.errors.concerns_logistics }}</div>

                <label for="">New Strategy</label>
                <input type="text" v-model="form.new_strategy" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.new_strategy">{{ form.errors.new_strategy }}</div>

                <label for="">Remarks</label>
                <input type="text" v-model="form.remarks" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.remarks">{{ form.errors.remarks }}</div>

                <label for="">Date Accomplished</label>
                <input type="date" v-model="form.date_accomplished" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.date_accomplished">{{ form.errors.date_accomplished }}</div>

                <label for="">Validated Remarks</label>
                <input type="text" v-model="form.validated_remarks" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.validated_remarks">{{ form.errors.validated_remarks }}</div>

                <label for="">Validated Date</label>
                <input type="date" v-model="form.validated_date" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.validated_date">{{ form.errors.validated_date }}</div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3  text-white" @click="submit()"
                    :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>
    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
export default {
    props: {
        editData: Object,
        data_indicator: Object,
        mun: Array,
        target_id: String,
        bari: Array,
        target: Object,
        raao_id: String
    },
    components: {

    },
    data() {
        return {
            submitted: false,
            barsel: "",
            munsel: "",
            form: useForm({
                idtarget: "",
                accomplishment_qty: "",
                actual_period: "",
                actual_expenditure: "",
                facilitating_timelines: "",
                facilitating_competency: "",
                facilitating_logistics: "",
                detaining_timelines: "",
                detaining_concerns: "",
                detaining_logistics: "",
                concerns_timelines: "",
                concerns_competency: "",
                concerns_logistics: "",
                new_strategy: "",
                remarks: "",
                date_accomplished: "",
                validated_remarks: "",
                validated_date: "",
                id: null
            }),
            bar: [],
            pageTitle: ""
        };
    },

    mounted() {

        if (this.editData !== undefined) {
            this.pageTitle = "Edit"
            this.form.idtarget = this.editData.idtarget
            this.form.accomplishment_qty = this.editData.accomplishment_qty
            this.form.actual_period = this.editData.actual_period
            this.form.actual_expenditure = this.editData.actual_expenditure
            this.form.facilitating_timelines = this.editData.facilitating_timelines
            this.form.facilitating_competency = this.editData.facilitating_competency
            this.form.facilitating_logistics = this.editData.facilitating_logistics
            this.form.detaining_timelines = this.editData.detaining_timelines
            this.form.detaining_concerns = this.editData.detaining_concerns
            this.form.detaining_logistics = this.editData.detaining_logistics
            this.form.concerns_timelines = this.editData.concerns_timelines
            this.form.concerns_competency = this.editData.concerns_competency
            this.form.concerns_logistics = this.editData.concerns_logistics
            this.form.new_strategy = this.editData.new_strategy
            this.form.remarks = this.editData.remarks
            this.form.date_accomplished = this.editData.date_accomplished
            this.form.validated_remarks = this.editData.validated_remarks
            this.form.validated_date = this.editData.validated_date
            this.form.id = this.editData.id
            //this.target_id=this.editData.idtarget
        } else {
            this.pageTitle = "Create"
            this.form.idtarget = this.target_id;
        }
    },

    methods: {

        submit() {
            if (this.editData !== undefined) {
                this.form.patch("/accomplishments/" + this.form.id, this.form);
            } else {
                //alert('sa else'+this.editData)
                this.form.id = null;
                this.form.post("/accomplishments/store", this.form);
            }
        },
    },
};
</script>
