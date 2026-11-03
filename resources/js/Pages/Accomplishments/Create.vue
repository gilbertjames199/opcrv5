<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Accomplishment </h3>
            <Link :href="`/accomplishments/${form.target_id}/list`">
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

                <div class="d-none">
                    <label for="">ID</label>
                    <input type="text" v-model="form.id" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.id">{{ form.errors.idooe }}</div>
                    <label for="">Target </label>
                    <input type="text" v-model="form.target_id" class="form-control" autocomplete="chrome-off" disabled>
                    <div class="fs-6 c-red-500" v-if="form.errors.target_id">{{ form.errors.target_id }}</div>
                </div>


                <label for="">Accomplishment Quantity </label>
                <input type="number" v-model="form.accomplishment_qty" class="form-control" v-on:keypress="NumbersOnly"
                    autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.accomplishment_qty">{{ form.errors.accomplishment_qty }}</div>

                <label for="">Actual Period</label>
                <div>
                    <div class="relative row gap-20 masonry pos-r">
                        <div class="col-md-1"></div>
                        <div class="col-md-1">FROM</div>
                        <div class="col-md-10">
                            <input type="date" v-model="form.actual_period_from" class="form-control"
                                autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.actual_period_from">{{
                                form.errors.actual_period_from }}</div>
                        </div>
                    </div>
                    <div class="relative row gap-20 masonry pos-r">
                        <div class="col-md-1"></div>
                        <div class="col-md-1">TO</div>
                        <div class="col-md-10">
                            <input type="date" v-model="form.actual_period_to" class="form-control"
                                autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.actual_period_to">{{ form.errors.actual_period_to
                            }}</div>
                        </div>
                    </div>
                </div>


                <label for="">Actual Expenditure</label>
                <input type="number" v-model="form.actual_expenditure" class="form-control" v-on:keypress="NumbersOnly"
                    autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.actual_expenditure">{{ form.errors.actual_expenditure }}</div>

                <label for="">Facilitating Timeliness</label>
                <input type="text" v-model="form.facilitating_timeliness" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.facilitating_timeliness">{{
                    form.errors.facilitating_timeliness }}</div>

                <label for="">Facilitating Competency</label>
                <input type="text" v-model="form.facilitating_competency" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.facilitating_competency">{{
                    form.errors.facilitating_competency }}</div>

                <label for="">Facilitating Logistics</label>
                <input type="text" v-model="form.facilitating_logistics" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.facilitating_logistics">{{ form.errors.facilitating_logistics
                }}</div>

                <label for="">Deterring Timeliness</label>
                <input type="text" v-model="form.deterring_timeliness" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.deterring_timeliness">{{ form.errors.deterring_timeliness }}
                </div>

                <label for="">Deterring Concerns</label>
                <input type="text" v-model="form.deterring_concerns" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.deterring_concerns">{{ form.errors.deterring_concerns }}</div>

                <label for="">Deterring Logistics</label>
                <input type="text" v-model="form.deterring_logistics" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.deterring_logistics">{{ form.errors.deterring_logistics }}
                </div>

                <label for="">Concerns Timeliness</label>
                <input type="text" v-model="form.concerns_timeliness" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.concerns_timeliness">{{ form.errors.concerns_timeliness }}
                </div>

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
                <div>
                    <div class="relative row gap-20 masonry pos-r">
                        <div class="col-md-1"></div>
                        <div class="col-md-1">FROM</div>
                        <div class="col-md-10">
                            <input type="date" v-model="form.date_accomplished_from" class="form-control"
                                autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.date_accomplished_from">{{
                                form.errors.date_accomplished_from }}</div>
                        </div>
                    </div>
                    <div class="relative row gap-20 masonry pos-r">
                        <div class="col-md-1"></div>
                        <div class="col-md-1">TO</div>
                        <div class="col-md-10">
                            <input type="date" v-model="form.date_accomplished_to" class="form-control"
                                autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.date_accomplished_to">{{
                                form.errors.date_accomplished_to }}</div>
                        </div>
                    </div>
                </div>
                <!--***************-->
                {{ can.can_access_validation }}
                <div v-if="can.can_access_validation">
                    <label for="">Validated Status</label>
                    <div id="validated_status">
                        <input type="radio" value="Yes" id="Yes" v-model="form.validated_status" />
                        &nbsp;<label for="Yes">Yes</label>&nbsp;&nbsp;
                        <input type="radio" value="No" id="No" v-model="form.validated_status" />
                        &nbsp;<label for="No">No</label>
                    </div>
                    <label for="">Validated Remarks</label>
                    <input type="text" v-model="form.validated_remarks" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.validated_remarks">{{ form.errors.validated_remarks }}
                    </div>

                    <label for="">Validated Date</label>
                    <input type="date" v-model="form.validated_date" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.validated_date">{{ form.errors.validated_date }}</div>
                </div>
                <!--***********-->


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
export default {
    props: {
        editData: Object,
        data_indicator: Object,
        mun: Array,
        target_id: String,
        bari: Array,
        can: Object
    },
    components: {

    },
    data() {
        return {
            submitted: false,
            barsel: "",
            munsel: "",
            form: useForm({
                target_id: "",
                accomplishment_qty: "",
                actual_period_from: "",
                actual_period_to: "",
                actual_expenditure: "",
                facilitating_timeliness: "",
                facilitating_competency: "",
                facilitating_logistics: "",
                deterring_timeliness: "",
                deterring_concerns: "",
                deterring_logistics: "",
                concerns_timeliness: "",
                concerns_competency: "",
                concerns_logistics: "",
                new_strategy: "",
                remarks: "",
                date_accomplished_from: "",
                date_accomplished_to: "",
                validated_status: "No",
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
            this.form.target_id = this.editData.target_id
            this.form.accomplishment_qty = this.editData.accomplishment_qty
            this.form.actual_period_from = this.editData.actual_period_from
            this.form.actual_period_to = this.editData.actual_period_to
            this.form.actual_expenditure = this.editData.actual_expenditure
            this.form.facilitating_timeliness = this.editData.facilitating_timeliness
            this.form.facilitating_competency = this.editData.facilitating_competency
            this.form.facilitating_logistics = this.editData.facilitating_logistics
            this.form.deterring_timeliness = this.editData.deterring_timeliness
            this.form.deterring_concerns = this.editData.deterring_concerns
            this.form.deterring_logistics = this.editData.deterring_logistics
            this.form.concerns_timeliness = this.editData.concerns_timeliness
            this.form.concerns_competency = this.editData.concerns_competency
            this.form.concerns_logistics = this.editData.concerns_logistics
            this.form.new_strategy = this.editData.new_strategy
            this.form.remarks = this.editData.remarks
            this.form.date_accomplished_from = this.editData.date_accomplished_from
            this.form.validated_status = this.editData.validated_status
            this.form.date_accomplished_to = this.editData.date_accomplished_to
            this.form.validated_status = this.editData.validated_status
            this.form.validated_remarks = this.editData.validated_remarks
            this.form.validated_date = this.editData.validated_date
            this.form.id = this.editData.id
            //this.target_id=this.editData.idtarget
        } else {
            this.pageTitle = "New"
            this.form.target_id = this.target_id;
        }
    },

    methods: {

        submit() {
            //alert("id "+this.form.id);
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
