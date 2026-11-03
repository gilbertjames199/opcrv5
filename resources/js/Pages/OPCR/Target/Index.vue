<template>
    <Head>
        <title>OPCR Targets</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>OPCR Targets</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer mR-10">
                    <Link class="btn btn-primary btn-sm" :href="`/opcrtarget/create/${opcr_list_id}`">Create OPCR</Link>
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
        </div>
        <!-- <div class="masonry-sizer col-md-6">
            <b>Status</b>: {{ getStatus(opcr_list.target_status) }}
        </div> -->
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-hover table-striped table-bordered border-dark">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>MFO</th>
                                <th>PAPS</th>
                                <th>Success Indicator</th>
                                <th>Target</th>
                                <th>Target Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(dat, index) in data" :key="index">
                                <td>{{ dat.mfo_desc }}</td>
                                <td v-if="index === 0 || dat.paps_desc !== data[index - 1].paps_desc"
                                    :rowspan="getRowspanPaps(dat.paps_desc, index)" style="vertical-align:middle">
                                    {{ dat.paps_desc }}

                                </td>
                                <td>{{ dat.success_indicator }}
                                    <!-- **************************
                                    idpaps: &nbsp; &nbsp;{{ dat.idpaps }} <br>
                                    id: &nbsp; &nbsp;{{ dat.id }} <br>
                                    idmfo: &nbsp; &nbsp;{{ dat.idmfo }} <br>
                                    su_id: &nbsp; &nbsp;{{ dat.su_id }} <br>
                                    office_performance_commitment_rating_list_id: &nbsp; &nbsp;{{
                                        dat.office_performance_commitment_rating_list_id }} <br> -->
                                </td>
                                <td>{{ dat.target_success_indicator }}</td>
                                <td>
                                    <span v-if="dat.quantity">
                                        {{ format_number_conv(dat.quantity, 2, true) }}
                                    </span>

                                </td>
                                <td>
                                    <div class="dropdown dropstart">
                                        <button class="btn btn-secondary btn-sm action-btn" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path
                                                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                            <li v-if="dat.id">
                                                <Link class="dropdown-item"
                                                    :href="`/opcrtarget/${opcr_list_id}/edit?idpaps=${dat.idpaps}&opcr_target_id=${dat.id}`">
                                                Edit
                                                </Link>
                                            </li>
                                            <li v-if="dat.id">
                                                <Link class="text-danger dropdown-item" @click="deleteTarget(dat.id)">Delete
                                                </Link>
                                            </li>
                                            <li v-if="dat.success_indicator && !dat.id">
                                                <Link class="text-danger dropdown-item"
                                                    @click="createTarget(dat.idpaps, dat.success_indicator)">
                                                Add Target
                                                </Link>
                                            </li>
                                            <li v-else>
                                                <Link class="text-danger dropdown-item"
                                                    :href="`/OPCRpaps/create/${dat.idpaps}`">
                                                Add OPCR Standard
                                                <!-- {{ dat.idpaps }} -->
                                                </Link>
                                            </li>
                                            <!-- <li><Link class="dropdown-item" :href="`/opcrlist/${opcr_list.id}/edit`">Edit</Link></li>
                                            <li><Link class="dropdown-item" :href="`/opcr/form/${opcr_list.id}/${FFUNCCOD}`">Rating</Link></li>
                                            <li><Link class="dropdown-item" :href="`/opcrtarget/${opcr_list.id}`">Target</Link></li> -->
                                            <!-- -->
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- <pagination :next="data.next_page_url" :prev="data.prev_page_url" /> -->
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- <p >
                            {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries
                        </p> -->
                    </div>
                </div>

            </div>
        </div>
        <Modal v-if="displayModal" @close-modal-event="hideModal">
            <div class="d-flex justify-content-center">
                <!-- {{ my_link }} -->
                <iframe :src="my_link" style="width:100%; height:400px" />
            </div>
        </Modal>

        <!-- {{ office }} -->
    </div>
</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";

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
        office: Object
    },
    data() {
        return {
            my_link: "",
            displayModal: false,
        }
    },
    components: {
        Pagination, Filtering, Modal
    },

    methods: {
        deleteTarget(id) {
            let text = "WARNING!\nAre you sure you want to delete the Target?";
            if (confirm(text) == true) {
                this.$inertia.delete("/opcrtarget/" + id);
            }
        },
        createTarget(idpaps, success_indic) {
            //alert(idpaps);
            // this.$inertia.get("/opcrtarget/create/" + this.opcr_list_id, {"idpaps": idpaps});
            if (success_indic === null) {
                alert('This PPA has no success indicator! Add success indicator for the target first!');
            } else {
                this.$inertia.get("/opcrtarget/create/" + this.opcr_list_id, { "idpaps": idpaps });
            }
        },
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
            //var linkt ="abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-";
            //FFUNCCOD, total, ave, dept_head, opcr_date, mooe, ps, id
            var linkt = "http://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FOPCR%2Ftarget%2FOPCR_TARGET&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FOPCR%2Ftarget&decorate=no&output=pdf';
            // var jasper_link ='jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system%2FOPCR&reportUnit=%2Freports%2Fplanning_system%2FOPCR%2Ftarget_opcr&standAlone=true&decorate=no&output=pdf'
            var params = '&total=' + this.total + '&ave=' + this.ave + '&dept_head=' + this.dept_head +
                '&opcr_date=' + this.opcr_date + '&mooe=' + this.mooe + '&ps=' + this.ps +
                '&FFUNCCOD=' + this.FFUNCCOD + '&opcr_id=' + this.opcr_list_id;
            // var params = '&idopcr='+ this.opcr_list_id;
            var linkl = linkt + jasper_ip + jasper_link + params;
            // alert(linkl);
            return linkl;
        },
        showModal(FFUNCCOD, total, ave, dept_head, opcr_date, mooe, ps, id) {
            this.my_link = this.viewlink();
            this.displayModal = true;
        },
        hideModal() {
            this.displayModal = false;
        },
        createOPCR(opcr_list_id, success_indicator) {
            //:href="`/opcrtarget/create/${opcr_list_id}`"
            var url = "/opcrtarget/create/" + opcr_list_id
        },
        submitThis() {
            let text = "WARNING!\nAre you sure you want to submit this target?";
            if (confirm(text) == true) {
                this.$inertia.post("/opcrtarget/" + this.opcr_list_id + "/submit/target/opcr/now");
            }
        }
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
