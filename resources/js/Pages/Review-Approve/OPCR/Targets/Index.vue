<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <!-- <p class="text-center"> -->
        <h4 class="text-center">Review/Approve </h4>
        <!-- </p> -->
        <div class="peers fxw-nw jc-sb ai-c">
            <div class="peers">
                <h3>OPCR Targets</h3>
            </div>
            <!-- <Link :href="'/Sectoral'">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link> -->
        </div>

        <!-- FILTERING SECTION -->
        <div class="masonry-item w-100">
            <div class="toolbar-card">
                <!-- Top Row: Actions -->
                <div class="toolbar-row toolbar-actions">
                    <div class="toolbar-left">
                        <span class="toolbar-label">
                            <i class="fas fa-sliders-h"></i> FILTER PANEL
                        </span>
                    </div>
                    <div class="toolbar-right">
                        <!-- <Link class="tool-btn tool-btn-primary" :href="`/Societal/create`">
                            <i class="fas fa-plus"></i> Add Societal Goals
                        </Link> -->
                    </div>
                </div>

                <!-- Divider -->
                <div class="toolbar-divider"></div>

                <!-- Bottom Row: Filters -->
                <div class="toolbar-row toolbar-filters">
                    <!-- Search -->
                    <div class="filter-group filter-group-grow">
                        <label class="filter-label">
                            <i class="fas fa-search"></i> Search
                        </label>
                        <div class="search-wrapper">
                            <i class="fas fa-search search-icon"></i>
                            <input v-model="search" type="text" class="filter-input" placeholder="Search targets...">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="bgc-white p-20 bd">
                <!-- Table Header with Title and Stats -->
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h4 class="text-primary mb-0">
                        <i class="fas fa-list-ul me-2"></i>
                        OPCR Targets List
                    </h4>
                    <div class="text-muted small">
                        Showing {{ data.from }} to {{ data.to }} of {{ data.total }} entries
                    </div>
                </div>

                <!-- Responsive Table Container -->
                <div class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-head-sticky">
                            <tr>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-building me-2"></i>Office
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-calendar me-2"></i>Semester
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-calendar-alt me-2"></i>Period Covered
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-info-circle me-2"></i>Status
                                </th>
                                <th class="border-0 fw-semibold text-primary text-center">
                                    <i class="fas fa-cogs me-2"></i>Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data">
                                <td>
                                    {{ dat.office.FFUNCTION }}
                                </td>
                                <td>
                                    {{ dat.semester }}
                                </td>
                                <td>
                                    {{ dat.opcr_date }}
                                </td>
                                <td>
                                    {{ getStatus(dat.target_status) }}
                                </td>
                                <td class="text-center">
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
                                            <li>
                                                <!-- <Link class="dropdown-item" :href="`/Societal/${dat.id}/edit`">Edit</Link> -->
                                                <button class="dropdown-item"
                                                    @click="viewModal(dat.id, dat.rating_status, dat)">View</button>
                                            </li>
                                            <li>
                                                <!-- <Link class="text-danger dropdown-item" @click="deleteSectoral(dat.id)">
                                                Delete</Link> -->
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <pagination :next="data.next_page_url" :prev="data.prev_page_url" />
                    </div>
                </div>

            </div>
        </div>
        <Modal v-if="displayModal" @close-modal-event="hideModal">
            <div>
                <!-- {{ opcr_current }} -->
                <div><b>OFFICE:&nbsp;</b><u>{{ opcr_current.office.FFUNCTION }}</u></div>
                <div><b>SEMESTER:&nbsp;</b><u>{{ opcr_current.semester }}</u></div>
                <div><b>PERIOD COVERED:&nbsp;</b><u>{{ opcr_current.opcr_date }}</u></div>
                <div><b>STATUS:&nbsp;</b><u>{{ getStatus(opcr_current.target_status) }}</u></div>
                <!-- <div>{{ opcr_current.target_status }}</div> -->
            </div>
            <div class="d-flex justify-content-center">
                <!-- <iframe :src="my_link" style="width:100%; height:500px" /> -->
                <!-- {{ opcr_data }} -->

                <table class="table table-sm table-borderless table-striped table-hover">

                    <thead>
                        <tr class="bg-secondary text-white">
                            <th>MFO</th>
                            <th>PAPS</th>
                            <th>Success Indicator</th>
                            <th>Target</th>
                            <th>Target Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="dat in opcr_data">
                            <td>{{ dat.mfo_desc }}</td>
                            <td>{{ dat.paps_desc }}</td>
                            <td>{{ dat.success_indicator }}</td>
                            <td>{{ dat.target_success_indicator }}</td>
                            <td>{{ dat.quantity }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="d-flex justify-content-center">
                <label>REMARKS: </label>&nbsp;&nbsp;&nbsp;
                <input class="form-control" v-model="form.remarks" type="text" /><br />
            </div>
            <div>
                <hr>
            </div>
            <div class="d-flex justify-content-center">
                <button v-if="opcr_current.target_status == 0" @click="reviewSubmit()"
                    class="btn btn-primary text-white">Review</button>&nbsp;
                <button v-if="opcr_current.target_status == 1" @click="approveSubmit()"
                    class="btn btn-success text-white">Approve</button>&nbsp;
                <button @click="returnSubmit()" class="btn btn-danger text-white">Return</button>
            </div>
        </Modal>
        <!-- <Modal2 v-if="displayModal2" @close-modal-event="hideModal">
            <button @click="backTo()" class="btn btn-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z" />
                    <path fill-rule="evenodd"
                        d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                </svg>
            </button>
            {{ mode }} Remarks:
            <input class="form-control" v-model="remarks" type="text" />
            viewModal(opcr_id, status, opcr)
            &nbsp;v-if="auth.user.office.department_code == '04'"
            <button @click="confirmSubmission()" class="btn btn-primary text-white">Done</button>&nbsp;
            <button @click="hideModal()" class="btn btn-danger text-white">Cancel</button>
        </Modal2> -->
        <!-- {{ auth }}
        {{ auth.user.office.department_code }} -->
    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";
import Modal2 from "@/Shared/PrintModal";
import { router } from '@inertiajs/vue3';
export default {
    props: {
        auth: Object,
        filters: Object,
        data: Object
    },
    data() {
        return {
            search: "",
            displayModal: false,
            displayModal2: false,
            opcr_data: [],
            status_val: -3,
            opcr_current: [],
            remarks: "",
            mode: "",
            form: useForm({
                remarks: "",
                opcr_list_id: "",
            }),
            search: this.$props.filters.search,
        }
    },
    components: {
        Pagination, Filtering, Modal, Modal2
    },
    watch: {
        // search: _.debounce(function (value) {
        //     this.filterPrograms(value, this.filter_FFUNCCOD)
        // }, 300),
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/review-approve/targets",
                { search: value
                 },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    methods: {

        showCreate() {
            this.$inertia.get(
                "/targets/create",
                {
                    raao_id: this.raao_id
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        deleteSectoral(id) {
            let text = "WARNING!\nAre you sure you want to delete the Societal Goals?" + id;
            if (confirm(text) == true) {
                this.$inertia.delete("/Societal/" + id);
            }
        },
        getAccomplishment(tar_id) {
            this.$inertia.get(
                "/accomplishments",
                {
                    idtarget: tar_id
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        getPercent(accomp, targqty) {
            var accSum = 0;
            accomp.forEach(myFunction);
            function myFunction(item) {
                accSum += parseFloat(item.accomplishment_qty)

            }
            var percentt = (accSum / targqty) * 100
            percentt = this.format_number(percentt, 2, true)
            return percentt;
        },
        async viewModal(opcr_id, status, opcr) {
            // alert('View Modal');
            this.status_val = status
            this.opcr_current = opcr
            var url = "/review-approve/targets/" + opcr_id + "/view/opcr/target/submission"
            await axios.get(url, {
                params: {

                }
            }).then((response) => {
                this.opcr_data = response.data;
            }).catch((error) => {
                console.error(error);
            });
            this.displayModal = true;
        },
        hideModal() {
            this.displayModal = false;
            this.displayModal2 = false;
        },
        showModal2(md) {
            this.hideModal();
            this.displayModal2 = true;
            if (md === 'v') {
                this.mode = "Review"
            } else if (md === 'a') {
                this.mode = "Approve"
            } else if (md === 'r') {
                this.mode = "Return"
            }
        },
        backTo() {
            this.hideModal();
            this.viewModal(this.opcr_current.id, this.opcr_current.status_val, this.opcr_current)
        },
        confirmSubmission() {

        },
        reviewSubmit() {
            // var opcr_list_id_here = this.opcr_current.id;
            var url = '/review-approve/targets/' + this.opcr_current.id + '/review';
            this.form.opcr_list_id = this.opcr_current.id;
            let text = "WARNING!\nAre you sure you want to review the IPCR Target?";
            // alert("/ipcrtargets/" + ipcr_id + "/"+ this.id+"/delete")
            if (confirm(text) == true) {
                this.form.get(url, this.form);
            }
            this.hideModal();
            this.clearForm();
        },
        approveSubmit() {
            //  Route:: prefix('review-approve') -> group(function () {
            //     Route:: prefix('/targets') -> group(function () {
            //         Route:: get('/', [TargetAccomplishmentReviewApproveController:: class, 'index_target']);
            //         Route:: get('/{opcr_list_id}/review', [TargetAccomplishmentReviewApproveController:: class, 'reviewOPCRTarget']);
            //         Route:: get('/{opcr_list_id}/approve/opcr'
            // alert('review-approve')
            var url = '/review-approve/targets/approve/' + this.opcr_current.id + '/opcr';
            this.form.opcr_list_id = this.opcr_current.id;
            let text = "WARNING!\nAre you sure you want to approve the IPCR Target?";
            // alert(url)
            if (confirm(text) == true) {
                this.form.post(url, this.form);
            }
            this.hideModal();
            this.clearForm();
        },
        returnSubmit() {
            ///{opcr_list_id}/view/opcr/target/submission
            // /return/remarks / { opcr_list_id } / opcr
            var url = '/review-approve/targets/return/remarks/' + this.opcr_current.id + '/opcr';
            this.form.opcr_list_id = this.opcr_current.id;
            let text = "WARNING!\nAre you sure you want to return the IPCR Target?";
            // alert(url)
            if (confirm(text) == true) {
                this.form.post(url, this.form);
            }

            this.hideModal();
            this.clearForm();
        },
        clearForm() {
            this.form.remarks = "";
            this.form.opcr_list_id = "";
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
