<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} questions</h3>
            <Link :href="`/HGDGQuestions/${checklist_id}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>
        <!--
            <div class="col-md-8">
                <button class="btn btn-secondary" @click="showModal" :disabled="submitted">Permissions</button>
            </div>
        -->
        <div class="col-md-8">
            <!--level:  {{ $page.props.auth.user.level }}-->
            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <div>
                    <label for="">Question Parent</label>
                    <select v-model="form.question_id" class="form-control" autocomplete="chrome-off"
                        v-bind:disabled="question_id != undefined">
                        <option value=0></option>
                        <option class="form-control" style="color: black;" v-for="question in questions"
                            :value="question.id">
                            {{ question.question_number }}.) {{ question.question }}
                        </option>
                    </select>
                    <div class="fs-6 c-red-500" v-if="form.errors.question_id">{{ form.errors.question_id }}</div>
                </div>

                <label for="">Question Item</label>
                <input type="text" v-model="form.question_number" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.question_number">{{ form.errors.question_number }}</div>

                <label for="">Question</label>
                <input type="text" v-model="form.question" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.question">{{ form.errors.question }}</div>

                <label for="">Score (Input the possible score for partly done)</label>
                <input type="text" v-model="form.score" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.score">{{ form.errors.score }}</div>



                <div class="parent">
                    <!--<h4>Bootstrap Modal Parent</h4>-->
                    <div class="row">
                        <div class="col-md-6">
                            <!--<button class="btn btn-secondary" @click="showModal" :disabled="submitted">Open Bootstrap Modal</button>-->
                        </div>
                    </div>

                </div>
                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
            <!--{{ questions }}-->
        </div>
    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";


export default {
    props: {
        editData: Object,
        municipalities: Object,
        questions: Object,
        permissions: Object,
        question_id: String,
        checklist_id: String,
    },
    components: {

    },
    computed: {

    },
    data() {
        return {
            submitted: false,

            newData: [],
            form: useForm({
                question_number: "",
                question: "",
                checklist_id: this.checklist_id,
                score: "",
                question_id: "",
                question_id_former: "",
                id: null
            }),
            pageTitle: ""
        };
    },

    mounted() {
        if (this.editData !== undefined) {
            this.pageTitle = "Edit"
            this.form.checklist_id = this.editData.checklist_id
            this.form.question = this.editData.question
            this.form.question_id = this.editData.question_id
            this.form.question_id_former = this.editData.question_id
            this.form.id = this.editData.id
            this.form.question_number = this.editData.question_number
            this.form.score = this.editData.score

        } else {
            this.pageTitle = "Create"
        }
        //alert(this.question_id);
        if (this.question_id !== undefined) {
            this.form.question_id = this.question_id;
        }
    },

    methods: {
        submit() {
            if (this.editData !== undefined) {
                this.form.patch("/HGDGQuestions/" + this.form.id, this.form);
            } else {
                //alert('post!');
                this.form.post("/HGDGQuestions/store", this.form);
            }
        },

        selectLevel(level1) {
            this.level1 = level1;
            if (this.level1 === 'provincial') {
                this.form.municipality = '';
                this.form.barangay = '';
                this.disabled_mun = 0;
            } else if (this.level1 === 'municipal') {
                this.form.barangay = '';
                this.form.municipality = '';
                this.form.barangay = '';
            } else {
                this.disabled_mun = 1;
                this.form.municipality = '';
                this.form.barangay = '';
            }
        },

        filterBarangay(munval) {
            //this.arr_length = this.barangays.length-1;
            this.my_barangays = [];
            this.barangays.forEach(i => {
                if (i.municipality === this.form.municipality) {
                    this.my_barangays.push(i.barangay);
                }
            });
            console.log(this.my_barangays);
            return this.my_barangays;
        },

        canCreateCheck: function (value, event) {
            if (event.target.checked) {
                alert('is selected')
            }
        },

        checkBarangayOrIndiv(level1) {
            var stat = false;
            if (level1 === 'barangay') {
                stat = true;
            } else if (level1 === 'individual') {
                stat = true;
            } else {
                stat = false;
            }
            return stat;
        },
        /*
        toggleExamplateModalShowing(){
            this.exampleModalShowing = !this.exampleModalShowing;
        },*/
        showModal() {
            this.displayModal = true;
        },
        hideModal() {
            this.displayModal = false;
        },
        /*showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        toggleModal() {
            // We pass the ID of the button that we want to return focus to
            // when the modal has hidden
            this.$refs['my-modal'].toggle('#toggle-btn')
        }*/
    },
};
</script>
