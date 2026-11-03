<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} OPCR Target</h3>
            <Link :href="`/opcrtarget/${opcr_list_id}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>
        <div v-if="paps_selected">
            Programs, Activities, and Projects: <u>{{ paps_selected.paps_desc }}</u>
        </div>

        <div class="col-md-8">
            <!--<div>
                qualities:
                {{ qualities }}
                <br>
                {{ editData.quality_id }}
                <br>
                quality_exp:
                {{ quality_exp }}
                <br>
                editData:
                {{ editData }}
            </div>-->
            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <div v-if="form.idpaps">
                    <label for="">SUCCESS INDICATOR</label>
                    <select v-model="success_indicator_holder" class="form-control" autocomplete="chrome-off"
                        @change="setSuccessTarget">
                        <option v-for="success_indicator in success_indicators">
                            {{ success_indicator.success_indicator }}
                        </option>
                    </select>
                    <!-- <input type="text" v-model="form.semester" class="form-control" autocomplete="chrome-off"> -->
                    <div class="fs-6 c-red-500" v-if="form.errors.semester">{{ form.errors.semester }}</div>
                </div>
                <label for="">Target Description</label>
                <input type="text" v-model="form.target_success_indicator" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.target_success_indicator">{{
                    form.errors.target_success_indicator }}</div>

                <div class="peers fxw-nw jc-sb ai-c">
                    <div class="col-md-3">
                        <label for="">Quantity</label>
                        <input type="number" v-model="form.quantity" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.quantity">{{ form.errors.quantity }}</div>
                        <label for="isZeroCheckbox">Is Zero?&nbsp;</label>
                        <input type="checkbox" id="isZeroCheckbox" true-value="1" false-value="0" class="form-check-input"
                            v-model="form.is_zero">
                    </div>
                    <div class="col-md-3">
                        <label>Unit:&nbsp;</label>
                        <select class="form-select" v-model="form.quantity_unit">
                            <option value=""></option>
                            <option v-for="(unit, index) in measurement_units" :value="unit" :key="index">{{
                                unit }}</option>
                            <option value="others">Others, please specify</option>
                        </select>
                        <label v-if="form.quantity_unit === 'others'">Others, please specify</label>
                        <input type="text" v-model="other_quant" v-if="form.quantity_unit === 'others'" class="form-control"
                            autocomplete="chrome-off">
                    </div>
                    <div class="col-md-3">
                        <label>Comparison Operator:&nbsp;</label>
                        <select class="form-select" v-model="form.comparison_operator">
                            <option></option>
                            <option v-for="(comp, index) in comparison_operators" :value="comp" :key="index">{{
                                comp }}</option>
                        </select>
                    </div>
                </div>

                <div></div>


                <!--TARGET*******************************************-->
                <!--OUTPUT-->
                <label for="">Output</label>
                <select v-model="form.output_id" id="selectOutput" class="form-control" autocomplete="chrome-off">
                    <option v-for="output in outputs" :value="output.id">
                        {{ output.Outputs }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.output_id">{{ form.errors.output_id }}</div>

                <!--QUALITY-->
                <label for="">Quality</label>
                <select v-model="form.quality_id" id="selectQuality" class="form-control" autocomplete="chrome-off">
                    <option v-for="quality in qualities" :value="quality.id">
                        {{ quality.quality }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.quality_id">{{ form.errors.quality_id }}</div>

                <!--EFFICIENCY/RATING-->
                <label for="">Efficiency</label>
                <select v-model="form.ratings_id" id="selectRating" class="form-control" autocomplete="chrome-off">
                    <option v-for="rating in ratings" :value="rating.id">
                        {{ rating.efficiency_quantity }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.ratings_id">{{ form.errors.ratings_id }}</div>

                <!--TIMELINESS-->
                <label for="">Timeliness</label>
                <select v-model="form.timeliness_id" id="selectTimeliness" class="form-control" autocomplete="chrome-off"
                    @change="setSentence">
                    <option v-for="time in timeliness" :value="time.id">
                        {{ time.timeliness }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.quality_id">{{ form.errors.timeliness_id }}</div>
                <!--*************************************************-->

                <!--OPCR_list_id-->
                <input type="hidden" v-model="form.office_performance_commitment_rating_list_id" class="form-control"
                    autocomplete="chrome-off">

                <div>
                    <label for="">Remarks</label>
                    <input type="text" v-model="form.remarks_final" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.remarks_final">{{ form.errors.remarks_final }}</div>
                </div>
                <!--idpaps-->
                <input type="hidden" v-model="form.idpaps" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
                <!-- <div style="color: inherit">idpaps: {{ idpaps }}</div> -->
                <!-- {{ this.editData }}
                <br>*****************<br>
                {{ qualities }}
                <br>*****************<br>
                {{ success_indicators }} -->
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
        FFUNCCOD: String,
        office: Object,
        paps: Object,
        idpaps: String,
        opcr_list_id: String,
        success_indicators: Object,
        outputs: Object,
        qualities: Object,
        ratings: Object,
        timeliness: Object,
        paps_selected: Object,
        quality_exp: Object
    },

    data() {
        return {
            success_indicator_holder: "",
            submitted: false,
            correctedSentence: "",
            other_quant: "",
            form: useForm({
                target_success_indicator: "",
                output_id: "",
                quality_id: "",
                ratings_id: "",
                timeliness_id: "",
                remarks_final: "",
                quantity_unit: "",
                comparison_operator: "",
                is_zero: 0,
                quantity: "",
                idpaps: "",
                office_performance_commitment_rating_list_id: "",
                id: null
            }),
            pageTitle: "",
            isStringFound: false
        };
    },

    mounted() {
        if (this.editData !== undefined) {
            this.pageTitle = "Edit"
            this.form.target_success_indicator = this.editData.target_success_indicator
            this.form.output_id = this.editData.output_id
            this.form.quality_id = this.editData.quality_id
            this.form.ratings_id = this.editData.ratings_id
            this.form.timeliness_id = this.editData.timeliness_id
            this.form.quantity = this.editData.quantity
            this.form.quantity_unit = this.editData.quantity_unit
            this.form.comparison_operator = this.editData.comparison_operator
            this.form.is_zero = this.editData.is_zero
            this.form.idpaps = this.editData.idpaps
            this.form.office_performance_commitment_rating_list_id = this.editData.office_performance_commitment_rating_list_id
            this.form.id = this.editData.id
            this.form.remarks_final = this.editData.remarks_final
            this.success_indicator_holder = this.editData.target_success_indicator
            const values = Object.values(this.measurement_units);
            this.isStringFound = values.some(value => value.includes(this.editData.quantity_unit));
            if (this.isStringFound == false) {
                this.other_quant = this.editData.quantity_unit
                this.form.quantity_unit = "others"
            }
            this.other_quant = this.editData.quantity_unit
        } else {
            this.pageTitle = "Create"
            this.form.idpaps = this.idpaps;
            this.form.office_performance_commitment_rating_list_id = this.opcr_list_id
            this.form.id = null
            this.preselectThirdLevel();
        }
    },

    methods: {
        submit() {
            //other_quant
            if (this.form.quantity_unit === 'others') {
                this.form.quantity_unit = this.other_quant;
            }
            // alert('other_quant: ' + this.other_quant + 'this.form.quantity_unit' + this.form.quantity_unit);
            if (this.success_indicator_holder === "") {
                alert("Select success indicator first!");
            } else {
                if (this.editData !== undefined) {
                    this.form.patch("/opcrtarget", this.form);
                } else {
                    this.form.post("/opcrtarget/store");
                }
            }

        },
        setSuccessTarget() {
            //alert('setSuccessTarget');
            this.form.target_success_indicator = this.success_indicator_holder;
        },
        preselectThirdLevel() {
            var count_q = Object.keys(this.qualities).length;
            var count_e = Object.keys(this.ratings).length;
            var count_t = Object.keys(this.timeliness).length;
            if (count_q > 0) {

                var i = parseFloat(count_q) / 2;
                i = Math.floor(i);
                this.form.quality_id = this.qualities[i].id;
            }
            if (count_e > 0) {
                var g = parseFloat(count_e) / 2;
                g = Math.floor(g);
                this.form.ratings_id = this.ratings[g].id;
            }
            if (count_t > 0) {
                var h = parseFloat(count_t) / 2;
                h = Math.floor(h);
                this.form.timeliness_id = this.timeliness[h].id;
            }
        },
        async correctSentence(sentence) {
            try {
                const response = await axios.post('https://languagetool.org/api/v2/check',
                    {
                        text: sentence,
                        language: 'en-US'
                    }
                );

                const corrections = response.data.matches;

                let correctedSentence = sentence;

                corrections.forEach(correction => {
                    correctedSentence = correctedSentence.replace(
                        correction.context.text,
                        correction.replacements[0].value
                    );
                });

                return correctedSentence;
            } catch (error) {
                console.error(error);
                return sentence; // Return the original sentence in case of an error
            }
        },
        async setSentence() {
            // selectQuality
            // selectRating
            // selectTimeliness
            var ind_output = document.getElementById("selectOutput").selectedIndex;
            var ind_qual = document.getElementById("selectQuality").selectedIndex;
            var ind_eff = document.getElementById("selectRating").selectedIndex;
            var ind_time = document.getElementById("selectTimeliness").selectedIndex;
            // alert(ind_time)
            var out = this.outputs[ind_output].Outputs;
            var qual = this.qualities[ind_qual].quality;
            var eff = this.ratings[ind_eff].efficiency_quantity;
            var time = this.ratings[ind_time].ind_time;
            var my_sentence = this.form.quantity + " " + eff + " " + out + " " + time + " " + " with " + qual;
            // alert(my_sentence)
            this.correctedSentence = await this.correctSentence(my_sentence);
            // alert(this.correctedSentence)
        },
        async setVal() {
            this.form.target_success_indicator = this.setSentence();
            alert(this.form.target_success_indicator)
        }

    },
};
</script>
