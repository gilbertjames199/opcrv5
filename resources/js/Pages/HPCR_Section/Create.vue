<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Hospital Section Output</h3>
            <!-- <h4>{{ paps }}</h4> -->
            <Link :href="`/hospital_section/${idhdpcr}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>
<h5>{{"Division Output: " + hdpcr.output }}</h5>

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <input type="hidden" v-model="form.idhdpcr" class="form-control" autocomplete="positionchrome-off">

                <label for="">Hospital Section Output</label>
                <input type="text" v-model="form.output" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.output">{{ form.errors.output }}</div>
<!--
                <label for="">Performance Measures / Success Indicator</label>
                <input type="text" v-model="form.performance_measure" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.performance_measure">{{ form.errors.performance_measure }}</div> -->

                <label for="">Verb</label>
                <input type="text" v-model="form.performance_measure" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.performance_measure">{{ form.errors.performance_measure }}</div>

                <div class="form-check mt-2">
                    <input type="checkbox" id="notRated" v-model="form.not_rated" class="form-check-input">
                    <label for="notRated" class="form-check-label">Not to be Rated (Prescribed Period/Timeliness)</label>
                </div>

                <!-- <label for="">Success Indicator</label>
                <input type="text" v-model="form.success_indicator" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.success_indicator">{{ form.errors.success_indicator }}</div> -->

                <br>
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">
                            Quality/Effectiveness
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">
                            Efficiency
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false" :disabled="form.efficiency1 === 'Yes'" :class="{'text-decoration-line-through': form.efficiency1 === 'Yes'}">
                            Timeliness
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">

                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                        <fieldset class="border p-4">
                            <legend class="float-none w-auto"><b>Quality/Effectiveness</b></legend>

                            <div>
                                                <select class="form-control" v-model="form.quality1">
                                                    <option value="Acceptability">Acceptability</option>
                                                    <option value="Meeting Standard">Meeting Standard</option>
                                                    <option value="Client Satisfaction">Client Satisfaction</option>
                                                    <option value="Accuracy">Accuracy</option>
                                                    <option value="Completeness/Comprehensiveness">Completeness/Comprehensiveness</option>
                                                </select>

                                            </div>
                                            <br>
                                             <div>
                                                <select class="form-control" v-model="form.quality2">
                                                    <option value="Acceptability">Acceptability</option>
                                                    <option value="Meeting Standard">Meeting Standard</option>
                                                    <option value="Client Satisfaction">Client Satisfaction</option>
                                                    <option value="Accuracy">Accuracy</option>
                                                    <option value="Completeness/Comprehensiveness">Completeness/Comprehensiveness</option>
                                                </select>
                                            </div>
                                            <br>
                                              <div>
                                                <select class="form-control" v-model="form.quality3" :disabled="true">
                                                    <option value="Acceptability">Acceptability</option>
                                                    <option value="Meeting Standard">Meeting Standard</option>
                                                    <option value="Client Satisfaction">Client Satisfaction</option>
                                                    <option value="Accuracy">Accuracy</option>
                                                    <option value="Completeness/Comprehensiveness">Completeness/Comprehensiveness</option>
                                                    <option value="Creativity/Innovation/Personal Initiative">Creativity/Innovation/Personal Initiative</option>
                                                </select>
                                            </div>

                        </fieldset>
                    </div>

                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                        <fieldset class="border p-4">
                            <legend class="float-none w-auto"><b>Efficiency</b></legend>
                            <div>

                            <label for="">Standard Response Time</label>
                            <select class="form-control" v-model="form.efficiency1" :disabled="isDisabled">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>

                            <div v-if="showPrescribedPeriod">
                                <label for="">Prescribed Period</label>
                                <input type="text" v-model="form.prescribed_period" class="form-control" autocomplete="positionchrome-off">
                                <div class="fs-6 c-red-500" v-if="form.errors.prescribed_period">{{ form.errors.prescribed_period }}</div>
                                <br>
                            </div>
                            <br>
                            <label for="">Number of requests/applications acted upon over number of request/applications received</label>
                            <select class="form-control" v-model="form.efficiency2">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>

                            <br>
                            <label for="">Optimum use or resources (e.g., money, logistics, office supplies)</label>
                            <select class="form-control" v-model="form.efficiency3" :disabled="true">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            </div>
                        </fieldset>


                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

                        <fieldset class="border p-4">
                            <legend class="float-none w-auto"><b>Timeliness Rating </b></legend>
                            <div>
                            <label for="">Please provide specific time (e.g., Every 1st Monday of the Month, December 31)</label>
                             <input type="text" v-model="form.timeliness" class="form-control" autocomplete="positionchrome-off" :disabled="isDisabled">
                            </div>

                        </fieldset>
                        </div>
                        </div>

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
        hdpcr: Object,
        Output: Object,
        // Performance: Object,
        idhdpcr: Number,
        performance_measure: Object,
    },

    data() {
        return {
            submitted: false,
            form: useForm({
                output: "",
                prescribed_period:"",
                quality1:"",
                quality2:"",
                quality3: "Creativity/Innovation/Personal Initiative",
                efficiency1:"",
                efficiency2:"",
                efficiency3:"Yes",
                timeliness: "",
                performance_measure:"",
                idhdpcr: "",
                id: null
            }),
            isDisabled: false,
            pageTitle: ""
        };
    },

    mounted() {
        // console.log(this.editData);
        this.form.idhdpcr = this.idhdpcr;
        if (this.editData !== undefined) {
            this.pageTitle = "Edit"
            this.form.output = this.editData.output
            this.form.performance_measure = this.editData.performance_measure
            this.form.prescribed_period = this.editData.prescribed_period
            this.form.quality1 = this.editData.quality1
            this.form.quality2 = this.editData.quality2
            this.form.quality3 = this.editData.quality3
            this.form.efficiency1 = this.editData.efficiency1
            this.form.efficiency2 = this.editData.efficiency2
            this.form.efficiency3 = this.editData.efficiency3
            this.form.timeliness = this.editData.timeliness
            this.form.idhdpcr = this.editData.idhdpcr
            this.form.id = this.editData.id
        } else {
            this.pageTitle = "Create"
            // this.form.idpaps = this.idpaps
        }

    },
    watch: {
        'form.not_rated'(newValue) {
        if (newValue) {
            this.isDisabled = true;
            this.form.efficiency1 = "No"; // Set efficiency1 to "No" when Not to be Rated is checked
            this.$nextTick(() => {
                    this.form.timeliness = "No"; // Ensure Vue updates the input field properly
                });
            this.$nextTick(() => {
                this.form.prescribed_period = 'No'; // Ensure Vue updates the input field properly
            });
        } else {
            this.isDisabled = false;
            this.form.efficiency1 = ""; // Set efficiency1 to "No" when Not to be Rated is checked
            this.form.timeliness = "";
        }
    },
         'form.efficiency1'(newValue) {
        if (newValue === 'Yes') {
            this.form.timeliness = 'No'; // Set timeliness to No when efficiency1 is Yes
            this.showPrescribedPeriod = true; // Show the prescribed period field
            if(this.form.prescribed_period === "No"){
                 this.form.prescribed_period = "";
            }
        } else {
            if(this.form.timeliness === "No"){
                 this.form.timeliness = "";
            }
            this.showPrescribedPeriod = false; // Hide it when No is selected
            this.form.prescribed_period = 'No'; // Clear the input value
        }

        },
    },

    methods: {
        submit() {
            console.log(this.form);
            if (this.editData !== undefined) {
                this.form.patch("/hospital_section/" + this.form.id, this.form);
            } else {
                this.form.post("/hospital_section/store", this.form);
            }
        },
    },
};
</script>
