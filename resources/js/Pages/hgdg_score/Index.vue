<template>
    <Head>
        <title>Questions</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <h1 v-if="revision_plan">{{ revision_plan.project_title }}
            <b>({{
                revision_plan?.date_start && !isNaN(new Date(revision_plan.date_start))
                    ? new Date(revision_plan.date_start).getFullYear()
                    : ''
                }})</b>
        </h1>

        <div class="toolbar-card">
            <div class="toolbar-row">
                <div class="toolbar-actions">
                    <h3>{{  hgdg_checklist.box_number }}. {{  hgdg_checklist.sector }}
                    </h3>
                </div>
                <div class="toolbar-actions">
                    <button class="tool-btn tool-btn-primary" @click="showModal(idrevplan)">
                        <i class="fas fa-print"></i> Print HGDG Score
                    </button>
                    <a class="tool-btn tool-btn-secondary" @click.prevent="goBack" href="#">
                        <i class="fas fa-times"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <form @submit.prevent="submit()">
                        <table name="tabel" class="table table-hover align-middle">
                            <thead class="table-head-sticky">
                                <tr >
                                    <th scope="col">
                                        <i class="fas fa-list-ol"></i> Item Number
                                    </th>
                                    <th scope="col">
                                        <i class="fas fa-question"></i> Question
                                    </th>
                                    <th v-if="can_edit" scope="col">
                                        <i class="fas fa-times-circle"></i> Not Done
                                    </th>
                                    <th v-if="can_edit" scope="col">
                                        <i class="fas fa-star-half-alt"></i> Partly Done
                                    </th>
                                    <th v-if="can_edit" scope="col">
                                        <i class="fas fa-check-circle"></i> Done
                                    </th>
                                    <th scope="col" class="text-end">
                                        <i class="fas fa-trophy"></i> Score
                                    </th>
                                    <th scope="col">
                                        <i class="fas fa-comment"></i> Remarks
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(hgdg_score, index) in form.hgdg_scores">
                                    <th>{{ form.hgdg_scores[index].question_number }}</th>
                                    <th>{{ form.hgdg_scores[index].question }}</th>
                                    <th v-if="can_edit">
                                        <input type="radio"
                                            v-model="form.hgdg_scores[index].score"
                                            :name="form.hgdg_scores[index].id"
                                            v-bind:hidden="hgdg_score.has_subquestion!='0'"
                                            :value="0"
                                            @change="submit2(form.hgdg_scores[index].id,form.hgdg_scores[index].score)"
                                        />
                                    </th>
                                    <th v-if="can_edit">
                                        <input type="radio"
                                            v-model="form.hgdg_scores[index].score"
                                            :name="form.hgdg_scores[index].id"
                                            v-bind:hidden="hgdg_score.has_subquestion!='0'"
                                            :value="form.hgdg_scores[index].q_score"
                                            @change="submit2(form.hgdg_scores[index].id,form.hgdg_scores[index].score)"
                                        /><br>

                                    </th>
                                    <th v-if="can_edit">
                                        <input type="radio"
                                            v-model="form.hgdg_scores[index].score"
                                            :name="form.hgdg_scores[index].id"
                                            v-bind:hidden="hgdg_score.has_subquestion != '0'"
                                            :value="form.hgdg_scores[index].q_score2"
                                            @change="submit2(form.hgdg_scores[index].id,form.hgdg_scores[index].score)"
                                        />
                                    </th>
                                    <th><div v-bind:hidden="hgdg_score.has_subquestion!='0'">{{ format_number_conv(setScore(form.hgdg_scores[index].score),2,false) }}</div></th>
                                    <th>
                                        <textarea v-model="form.hgdg_scores[index].result_comment"
                                            :disabled="!can_edit"
                                            @change="submit3(form.hgdg_scores[index].id,form.hgdg_scores[index].result_comment)"
                                        >

                                        </textarea>

                                    </th>
                                </tr>
                                <tr colspan="7" >

                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <!-- <div class="row justify-content-center">
                    <div class="col-md-12">
                        <button type="button"
                                class="btn btn-primary mt-3 text-white"
                                @click="submit()" :disabled="form.processing">
                            Save changes
                        </button>
                    </div>
                </div> -->

                <div>
                    <!-- can_edit: {{ can_edit }} -->
                    <b>TOTAL:&nbsp;</b>
                    <u>{{ total_score }}</u>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!--<pagination :next="users.next_page_url" :prev="users.prev_page_url" />-->
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p >
                            <!--{{ users.from }} to {{ users.to }} of {{ users.total }} entries-->
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <Modal v-if="displayModal" @close-modal-event="hideModal">
            <div class="d-flex justify-content-center">

                <iframe :src="my_link" style="width:100%; height:500px" />
            </div>
        </Modal>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/vue3";
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";
//import Table from './Table.vue'               , Table

export default {
    components: { Pagination, Filtering, Modal },
    props: {
        auth: Object,
        users: Object,
        filters: Object,
        can: Object,
        permissions_all: Object,
        questions: Object,
        hgdg_checklist: Object,
        idrevplan: Object,
        idpaps: String,
        idmfo: String,
        scope: String,
        FFUNCCOD: String,
        revision_plan: Object,
        can_edit: Boolean
    },
    mounted(){
        this.form.hgdg_scores=this.questions
        setTimeout(() => {
            this.total_score = this.getTotalScore();
        }, 1000);
    },
    data() {
        return {
            selected_permissions: [],
            permission_index: [],
            permission_particular: [],
            permission_option: [],
            form: useForm({
                hgdg_scores: [],
            }),
            my_name: '',
            my_status: '0',
            my_id: 0,
            my_pass1: null,
            my_pass2: null,
            selected_user_id: null,
            permissions_selected_user: [],
            search: null,
            confirm: false,
            filter: false,
            total_score: 0,
            results: [],
            my_link: "",
            displayModal: false,
        };
    },
    computed:{
        setScore(){
            return (score)=>{
                return `${score}`
            }
        }

    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/users",
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    methods: {
        submit(){

            let jsonString = JSON.stringify(this.form.hgdg_scores);
            //alert("submit"+jsonString);
            //this.form.get("/HGDGScore/store/hgdg", jsonString);
            this.$inertia.get(
                "/HGDGScore/store/hgdg",
                {
                    scores: jsonString,
                    idrevplan: this.idrevplan
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            )
        },

        showModal(idrevplan) {
            // alert("FFUNCCOD: " + ffunccod + "\n "
            //     + " FFUNCTION: " + ffunction + "\n " +
            //     "MOOE: " + MOOE + " \n" +
            //     "PS: " + PS
            // )
            this.my_link = this.getToRep(idrevplan);
            this.displayModal = true;
        },

        hideModal() {
            this.displayModal = false;
        },

        getToRep(idrevplan) {
            // alert(data[0].FFUNCCOD);
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2FHGDG_Score&standAlone=true&decorate=no&output=pdf';
            var params = '&idrevplan=' + idrevplan;
            var link1 = linkt + jasper_ip + jasper_link + params;
            return link1;
        },
        submit2(id, score){
            // alert(score+" "+ id)
            // let jsonString = JSON.stringify(this.form.hgdg_scores);
            //alert("submit"+jsonString);
            //this.form.get("/HGDGScore/store/hgdg", jsonString);
            this.$inertia.post(
                "/HGDGScore/store/{"+id+"}/{"+score+"}",
                {
                    // scores: jsonString,
                    // idrevplan: this.idrevplan
                    can_edit: this.can_edit
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            )
            this.total_score=this.getTotalScore()
        },
        submit3(id, comment){
            // alert(comment)
            // console.log(comment)
            if(this.can_edit){
                this.$inertia.post(
                "/HGDGScore/commentstore",
                {
                    // scores: jsonString,
                    id: id,
                    comment: comment
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            )
            }

        },
        getTotalScore() {
            var tot= this.questions.reduce((total, q) => {
                return total + parseFloat(q.score || 0);
            }, 0);
            return this.format_number_conv(tot,2,true);
        },
        getIndex(index) {
            let parentIndexes = [];
            let parent = this.questions[index];
            while (parent) {
                parentIndexes.unshift(parent.index);
                parent = parent.parent;
            }
            return parentIndexes.join('.');
        },

        deleteQ(id, has_subquestion){

            if(has_subquestion>0){
                alert("This question has subquestions! Delete the subquestions first!");
            }else{
                let text = "WARNING!\nAre you sure you want to delete the Checklist?";
                if (confirm(text) == true) {
                    this.$inertia.delete("/HGDGQuestions/delete/" + id);
                }
            }
        },
        viewScore(sc_val){
            alert(sc_val);
        },
        roundScore(value) {
            return parseFloat(value).toFixed(2); // or .toFixed(3), depending on precision you need
        }
    },
};
</script>
