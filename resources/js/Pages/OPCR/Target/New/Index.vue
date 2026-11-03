<template>
    <Head>
        <title>OPCR Targets</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>OPCR Targets </h3>
            <!-- {{ opcr_list }} -->
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer mR-10">
                    <!-- <Link class="btn btn-primary btn-sm" :href="`/opcrtarget/create/${opcr_list_id}`">Create OPCR</Link> -->
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
                <div class="peer">
                    <button @click="showModal()" class="btn btn-primary btn-sm text-white">Print</button>
                </div>
                &nbsp;
                <div class="peer">
                    <button @click="submitThis()" class="btn btn-primary btn-sm text-white"
                        :disabled="opcr_list.target_status > -1">
                        Submit
                    </button>
                </div>
                &nbsp;
                <Link :href="`/opcrlist/${FFUNCCOD}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
                </Link>

            </div>
        </div>
        <div class="peers fxw-nw jc-sb ai-c">
            <div v-if="office"><b>Office: </b><u>{{ office.FFUNCTION }}</u></div>
            <p><b>Status</b>: {{ getStatus(opcr_list.target_status) }}</p>
            <p><b>Period</b>:
                <u>
                    <span v-if="opcr_list.semester=='Second Semester'">July to December</span>
                    <span v-else>January to June</span>
                    {{ opcr_list.year }}
                </u>
            </p>
        </div>
        <!-- {{ auth }} -->
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-hover table-striped table-bordered border-dark">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>
                                    <input type="checkbox"
                                        :checked="bulk_selected"
                                        @click="toggleBulk()"
                                    >
                                </th>
                                <th>MFO</th>
                                <th>PAPS</th>
                                <th>DPCR</th>
                                <th>Success Indicator</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(dat, index) in data" :key="index">
                                <td>
                                    <!-- {{ dat }} -->
                                    <!-- {{ dat.opcr_target_binary }}  -->
                                    <input type="checkbox"
                                        :checked="dat.opcr_target_binary"
                                        :disabled="!dat.opcr_target_binary && !dat.opcr_standard"
                                        @click="toggleTarget(dat, dat.opcr_target_binary)"
                                    >
                                    <div v-if="!dat.opcr_standard || Object.keys(dat.opcr_standard).length === 0 && parseFloat(dat.is_shared_paps)==0">
                                        <button
                                            type="button"
                                            class="btn btn-sm btn-primary text-white"
                                            @click="openOPCRStandard(dat.idpaps)"
                                        >
                                            Create Standard
                                        </button>
                                        <!-- {{ dat.is_shared_paps }} -->
                                        <!-- {{ dat.idpaps }} -->
                                    </div>
                                    <div
                                        v-if="is_submitted && (!dat.opcr_standard || Object.keys(dat.opcr_standard).length === 0)"
                                        class="alert alert-warning py-2 mb-0"
                                    >   <i class="fas fa-triangle-exclamation me-2"></i>
                                        <strong>Warning:</strong> This PPA has no standard assigned.
                                    </div>
                                    <!-- {{ dat }} -->
                                </td>
                                <td>{{ dat.mfo_desc }}</td>
                                <td v-if="index === 0 || dat.paps_desc !== data[index - 1].paps_desc"
                                    :rowspan="getRowspanPaps(dat.paps_desc, index)" style="vertical-align:middle">
                                    <!-- {{ dat.paps_desc }}
                                    {{ dat.allotted }} -->
                                     <!-- {{ dat.allotted }} -->
                                    <Link :href="`/opcrbudgeting/edit/${dat.opcr_target_budget_id}`" v-if="dat.allotted!='0.00' && dat.allotted!=undefined">{{ dat.paps_desc }}</Link>
                                    <span v-else>{{ dat.paps_desc }}</span>
                                </td>
                                <td class="p-0">
                                    <!-- {{ dat.division_outputs }} -->
                                    <!-- <tr v-for="(div_output, div_index) in dat.division_outputs" :key="div_index">
                                        <td>{{ div_output.output }}
                                            <hr>
                                        </td>
                                    </tr> -->
                                    <div
                                        v-for="(div_output, div_index) in dat.division_outputs"
                                        :key="div_index"
                                        class="w-100"
                                    >
                                        <div class="px-3 py-2">
                                            {{ div_output.output }}
                                        </div>
                                        <hr v-if="div_index < dat.division_outputs.length - 1"
                                        style="
                                                border: 0 !important;
                                                border-top: 1px solid #000 !important;
                                                background: #000 !important;
                                                color: #000 !important;
                                                opacity: 1 !important;
                                                height: 1px !important;
                                                margin: 0.5rem 0 !important;
                                            "
                                        >
                                    </div>
                                </td>
                                <td>
                                    <!-- {{ dat.opcr_standard }} -->
                                    {{ dat.performance_measure }}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <Link :href="`/opcrbudgeting/${opcr_list_id}`" class="btn btn-primary text-white">Proceed to budgeting</Link>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">

                    </div>
                </div>

            </div>
        </div>
        <Modal v-if="displayModal" @close-modal-event="hideModal">
            <div class="d-flex justify-content-center">

                <iframe :src="my_link" style="width:100%; height:400px" />
            </div>
        </Modal>

    </div>
</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";
import { useForm } from "@inertiajs/vue3";

export default {
    props: {
        opcr_list_id: String,
        data: Object,
        FFUNCCOD: String,
        total: String,
        ave: String,
        dept_head: String,
        opcr_date: String,
        mooe: String,
        ps: String,
        opcr_list: Object,
        office: Object,
        auth: Object,
    },
    data() {
        return {
        bulk_selected: false,
            my_link: "",
            displayModal: false,
            form: useForm({
                idpaps: "",
                idopcr: "",
            }),
            is_submitted:false,
        }
    },
    components: {
        Pagination, Filtering, Modal
    },

    methods: {

        getRowspanPaps(row, ind) {

            let count = 1;
            const index = ind;

            for (let i = parseFloat(index) + 1; i < this.data.length; i++) {
                if (this.data[i].paps_desc === row) {
                    //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
                    count = parseFloat(count) + 1;
                } else {
                    break;
                }
            }

            return count;

        },
        viewlink() {

            var linkt = "https://";
            // var jasper_ip = "paps.dvodeoro.ph/";
            // var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FOPCR%2Ftarget%2FOPCR_TARGET&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FOPCR%2Ftarget&decorate=no&output=pdf';
            // var params = '&total=' + this.total + '&ave=' + this.ave + '&dept_head=' + this.dept_head +
            //     '&opcr_date=' + this.opcr_date + '&mooe=' + this.mooe + '&ps=' + this.ps +
            //     '&FFUNCCOD=' + this.FFUNCCOD + '&opcr_id=' + this.opcr_list_id;
            // var jasper_link ='jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system%2FOPCR&reportUnit=%2Freports%2Fplanning_system%2FOPCR%2Ftarget_opcr&standAlone=true&decorate=no&output=pdf'
            var jasper_link ='jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2FOPCR_AIP%2FOPCR_Target_Revised&standAlone=true&ParentFolderUri=%2Freports%2FOPCR_AIP&decorate=no&output=pdf';
            // var params = '&total=' + this.total + '&ave=' + this.ave + '&dept_head=' + this.dept_head +
            //     '&opcr_date=' + this.opcr_date + '&mooe=' + this.mooe + '&ps=' + this.ps +
            //     '&FFUNCCOD=' + this.FFUNCCOD + '&opcr_id=' + this.opcr_list_id;
            var params = '&idopcr='+ this.opcr_list_id;

            var linkl = linkt + this.jasper_ip + jasper_link + params;
            return linkl;
        },
        showModal(FFUNCCOD, total, ave, dept_head, opcr_date, mooe, ps, id) {
            this.my_link = this.viewlink();
            this.displayModal = true;
        },
        hideModal() {
            this.displayModal = false;
        },

        submitThis() {
            this.is_submitted=true;
            if (!this.hasValidTargetStandards()) {
                alert("Some targeted PPAs have no standards set. Please set standards for all targeted PPAs before submitting.");
                return;
            }
            let text = "WARNING!\nAre you sure you want to submit this target?";
            if (confirm(text) == true) {
                this.$inertia.post("/opcrtarget/" + this.opcr_list_id + "/submit/target/opcr/now");
            }
        },
        hasValidTargetStandards() {
            // Get only rows that are targeted
            const targetedRows = this.data.filter(row => row.opcr_target_binary === 1 || row.opcr_target_binary ===true);

            // Return false if any targeted row has a null/undefined opcr_standard
            const hasMissingStandard = targetedRows.some(row => row.opcr_standard == null);
            console.log("hasMissingStandard "+hasMissingStandard);
            return !hasMissingStandard;
        },
        toggleTarget(dat, isChecked){
            // if(this.bulk_selected==false){
                // alert(false);
                if (isChecked) {
                    if (dat.opcr_target !== null) {
                        this.deleteTarget(dat.opcr_target.id);

                    }
                    this.bulk_selected=false;
                } else {

                    this.createTarget(dat.office_performance_commitment_rating_list_id, dat.idpaps);

                }
            // }

        },
        createTarget(idopcr, idpaps) {

            this.form.post(`/opcrtargetrevised/store/${idopcr}/${idpaps}`, {
                preserveScroll: true,
            });

        },
        deleteTarget(opcrTargetId) {
            this.$inertia.delete("/opcrtargetrevised/" + opcrTargetId, {
                preserveScroll: true,
            });
            // let text = "WARNING!\nAre you sure you want to delete the Target?";
            // if (confirm(text) == true) {
            //     this.$inertia.delete("/opcrtargetrevised/" + opcrTargetId);
            // }

        },
        toggleBulk(){
            this.bulk_selected =!this.bulk_selected
            // alert(this.bulk_selected)
            this.form.post(`/opcrtargetrevised/store/bulk/then/${this.opcr_list_id}/${this.bulk_selected}`);
            // this.bulk_selected=false;
            // if(this.bulk_selected==true){

            // }
            // this.data.forEach(dat => {
            //     if (this.bulk_selected) {
            //         // If bulk selected, check each item and create target if it's not already selected
            //         if (!dat.opcr_target_binary) {
            //             this.createTarget(dat.office_performance_commitment_rating_list_id, dat.idpaps);
            //             dat.opcr_target_binary = true; // Update the checkbox state
            //         }
            //     } else {
            //         // If bulk unselected, uncheck each item and delete the target
            //         if (dat.opcr_target_binary) {
            //             this.deleteTarget(dat.opcr_target.id);
            //             dat.opcr_target_binary = false; // Update the checkbox state
            //         }
            //     }
            // });
        },
        // Open OPCR Standard in New Tab
        openOPCRStandard(idpaps) {
            window.open(`/OPCRpaps/create/${idpaps}`, '_blank');
        },
    }
};
</script>
<style>
.row-centered {
    text-align: center;
}

.col-centered {
    display: inline-block;
    float: none;
    text-align: left;
    margin-right: -4px;
}

.pos {
    position: top;
    top: 240px;
}
</style>
