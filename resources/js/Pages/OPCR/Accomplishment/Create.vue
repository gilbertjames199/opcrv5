<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} OPCR Accomplishment</h3>
            <Link :href="`/opcraccomplishment/${opcr_list_id}`">
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

                <div v-if="form.idpaps">
                    <label for="">OPCR TARGET</label>
                    <select v-model="form.opcr_target_id" class="form-control" autocomplete="chrome-off"
                        @change="setTarget">
                        <option v-for="target in targets" :value="target.id">
                            {{ target.target_success_indicator }}
                        </option>
                    </select>
                    <input type="hidden" v-model="form.opcr_target_id" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.opcr_target_id">{{ form.errors.opcr_target_id }}</div>
                </div>
                <label for="">Accomplishment Description</label>
                <input type="text" v-model="form.actual_accomplishments" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.actual_accomplishments">{{ form.errors.actual_accomplishments
                }}</div>

                <!--TARGET*******************************************-->
                <!--QUALITY-->
                <label for="">Quality</label>
                <select v-model="form.quality_id" class="form-control" autocomplete="chrome-off">
                    <option v-for="quality in qualities" :value="quality.id">
                        {{ quality.quality }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.quality_id">{{ form.errors.quality_id }}</div>

                <!--EFFICIENCY/RATING-->
                <label for="">Efficiency</label>
                <select v-model="form.ratings_id" class="form-control" autocomplete="chrome-off">
                    <option v-for="rating in ratings" :value="rating.id">
                        {{ rating.efficiency_quantity }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.ratings_id">{{ form.errors.ratings_id }}</div>

                <!--TIMELINESS-->
                <label for="">Timeliness</label>
                <select v-model="form.timeliness_id" class="form-control" autocomplete="chrome-off">
                    <option v-for="time in timeliness" :value="time.id">
                        {{ time.timeliness }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.quality_id">{{ form.errors.timeliness_id }}</div>
                <!--*************************************************-->


                <label for="">Quantity</label>
                <input type="number" v-model="form.quantity" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.quantity">{{ form.errors.quantity }}</div>
                <!--OPCR_list_id-->


                <div>
                    <label for="">Remarks</label>
                    <input type="text" v-model="form.remarks_final" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.remarks_final">{{ form.errors.remarks_final }}</div>
                </div>

                <input type="hidden" v-model="form.office_performance_commitment_rating_list_id" class="form-control"
                    autocomplete="chrome-off">
                <!--idpaps-->
                <input type="hidden" v-model="form.idpaps" class="form-control" autocomplete="chrome-off">

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
        FFUNCCOD: String,
        office: Object,
        paps: Object,
        idpaps: String,
        opcr_list_id: String,
        targets: Object,
        qualities: Object,
        ratings: Object,
        timeliness: Object,
    },

    data() {
        return {
            opcr_target_holder: "",
            submitted: false,
            correctedSentence: '',
            form: useForm({
                actual_accomplishments: "",
                quantity: "",
                idpaps: "",
                opcr_target_id: "",
                quality_id: "",
                ratings_id: "",
                timeliness_id: "",
                remarks_final: "",
                office_performance_commitment_rating_list_id: "",
                id: null
            }),
            pageTitle: ""
        };
    },

    mounted() {
        if (this.editData !== undefined) {
            this.pageTitle = "Edit"
            this.form.actual_accomplishments = this.editData.actual_accomplishments
            this.form.quantity = this.editData.quantity
            this.form.idpaps = this.editData.idpaps
            this.form.quality_id = this.editData.quality_id
            this.form.ratings_id = this.editData.ratings_id
            this.form.timeliness_id = this.editData.timeliness_id
            this.form.opcr_target_id = this.editData.opcr_target_id
            this.form.remarks_final = this.editData.remarks_final
            this.form.office_performance_commitment_rating_list_id = this.editData.office_performance_commitment_rating_list_id
            this.form.id = this.editData.id
            //this.opcr_target_holder=this.editData.
        } else {
            this.pageTitle = "Create"
            this.form.idpaps = this.idpaps;
            this.form.office_performance_commitment_rating_list_id = this.opcr_list_id
            //this.form.opcr_target_id =
            this.form.id = null
            this.preselectThirdLevel();
        }
    },

    methods: {
        submit() {
            if (this.success_indicator_holder === "") {
                alert("Target");
            } else {
                if (this.editData !== undefined) {
                    //alert('update accompl');
                    this.form.patch("/opcraccomplishment", this.form);
                } else {
                    this.form.post("/opcraccomplishment/store");
                }
            }

        },
        setTarget(event) {
            //alert('setSuccessTarget');
            /*if(e.target.options.selectedIndex>-1){
                selectedText = e.target.options[e.target.options.selectedIndex].targets.target_success_indicator
                this.opcr_target_holder = selectedText;
                this.form.actual_accomplishments=selectedText;

            }*/
            var selectedText = event.target.selectedOptions[0].text;
            this.form.actual_accomplishments = selectedText;
            this.form.target_success_indicator = this.success_indicator_holder;
            //alert(selectedText);
        },
        preselectThirdLevel() {
            var count_q = Object.keys(this.qualities).length;
            var count_e = Object.keys(this.ratings).length;
            var count_t = Object.keys(this.timeliness).length;
            //alert(count_t);
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
                const response = await axios.post('https://languagetool.org/api/v2/check', {
                    text: sentence,
                    language: 'en-US'
                });

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

            this.correctedSentence = await this.correctSentence(this.sentence);
        }


    },
};
</script>
