<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>LBP Form</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <!-- <Link class="btn btn-primary btn-sm" :href="`/paps/direct/create`">Add Programs and Projects </Link> -->
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showPrint()">Print</button>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>

            <!--
            <Link :href="`/inter_outcome/${idoutcome}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
            -->
        </div>
        <Printing v-if="print" @closeFilter="print = false">
            Select Form
            <select v-model="lbp_version" class="form-control">
                <option value="0"></option>
                <option value="2">LBP Form 2</option>
                <option value="4">LBP Form 4</option>
            </select>
            <br>
            <div v-if="lbp_version > 2">
                Target Fiscal Year
                <br>
                <input v-model="dates" class="form-control" type="number" name="year" min="1900" max="2099" step="1"
                    oninput="javascript: if (this.value.length > 4) this.value = this.value.slice(0, 4);" />
                <br>
                <br>
            </div>

            <button class="btn btn-primary btn-sm mL-2 text-white"
                @click="showModal(FFUNCCOD.FFUNCCOD, FFUNCCOD.FFUNCTION, dates)">Print</button>
            <!-- <button class="btn btn-primary btn-sm mL-2 text-white"
                @click="showModal(data.data[0].FFUNCCOD, data.data[0].FFUNCTION, dates)">Print</button> -->
        </Printing>

        <filtering v-if="filter" @closeFilter="filter = false">
            Filter by MFO
            <select v-model="mfosel" class="form-control" @change="filterData()">
                <option v-for="mfo in mfos" :value="mfo.id">
                    {{ mfo.mfo_desc }}
                </option>
            </select>
            <button class="btn btn-sm btn-danger mT-5 text-white" @click="clearFilter">Clear Filter</button>
        </filtering>
        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>AIP Code</th>
                                <th>Major Final Output</th>
                                <th>PAPS Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data" :key="dat.id">
                                <td>
                                    <div v-if="dat.a_i_p">{{ dat.a_i_p.AIP_Code }}</div>
                                </td>
                                <td>
                                    <div v-if="dat.m_f_o">{{ dat.m_f_o.mfo_desc }}</div>
                                </td>
                                <td>{{ dat.paps_desc }}</td>

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
                                            <!--/{id}/{idinteroutcome}/edit-->
                                            <li v-if="!dat.a_i_p">
                                                <Link class="dropdown-item" :href="`/AIP/create/${dat.id}`"> AIP Code</Link>
                                            </li>
                                            <li v-if="dat.a_i_p">
                                                <Link class="dropdown-item" :href="`/AIP/${dat.a_i_p.id}/edit`"> Edit</Link>
                                            </li>
                                            <li v-if="dat.a_i_p">
                                                <Link class="dropdown-item" :href="`/appropriations/${dat.id}`">
                                                Appropriations</Link>
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
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p>
                            {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <!-- {{ FFUNCCOD.FFUNCCOD }} -->
        <Modal v-if="displayModal" @close-modal-event="hideModal">
            <div class="d-flex justify-content-center">

                <iframe :src="my_link" style="width:100%; height:500px" />
            </div>
        </Modal>
    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Printing from "@/Shared/FilterPrint";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";
export default {
    props: {
        data: Object,
        filters: Object,
        auth: Object,
        // idinteroutcome: String,
        // idoutcome: String,
        //idmfo:string,
        idmfo: String,
        idpaps: Number,
        can: Object,
        mfos: Object,
        FFUNCCOD: Object,
        // pg_head: String,
        totals: Object,
    },
    data() {
        return {
            dates: "",
            search: this.$props.filters.search,
            filter: false,
            print: false,
            my_link: "",
            displayModal: false,
            lbp_version: "",
            date: ""
        }
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/AIP/direct",
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    components: {
        Pagination, Filtering, Modal, Printing,
    },
    mounted() {

        this.setCurrentYear()


    },

    methods: {
        deleteMFO(id) {
            let text = "WARNING!\nAre you sure you want to delete the PAP?";
            if (confirm(text) == true) {
                this.$inertia.delete("/paps/" + id + "/");
            }
        },
        showFilter() {
            //alert("show filter");
            this.filter = !this.filter
        },
        async clearFilter() {
            this.mfosel = "";
            this.filterData();
        },
        async filterData() {
            //alert(this.mfosel);
            this.$inertia.get(
                "/AIP/direct",
                {
                    mfosel: this.mfosel
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        showPrint() {
            //alert("show filter");
            this.print = !this.print
        },
        getToRep(ffunccod, ffunction, dates) {
            // alert(data[0].FFUNCCOD);
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FBudget%2FLBP_Form_4&reportUnit=%2Freports%2FBudget%2FLBP_Form_4%2FLBPFORM4&standAlone=true&decorate=no&output=pdf';
            var params = '&id=' + ffunccod + '&FUNCTION=' + ffunction + '&Date=' + dates;
            var link1 = linkt + jasper_ip + jasper_link + params;
            return link1;
        },
        goToRepPrintLBP2() {
            //http://122.53.120.27:8080/jasperserver/flow.html?_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FLBP_Form2%2FAppropMAIN&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FLBP_Form2
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FLBP_Form2%2FAppropMAIN&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FLBP_Form2&standAlone=true&decorate=no&output=pdf';
            var params = '&department_code=' + this.auth.user.department_code +
                '&office=' + this.auth.user.office.office +
                '&department_head=' + " DEPT" +
                '&budget_officer=EVA JEAN S. LICAYAN' +
                '&local_chief=ENGR. RAUL M. MABANGLO' +
                '&total_past_year=' + this.totals.past_year +
                '&total_first_sem=' + this.totals.first_sem +
                '&total_second_sem=' + this.totals.second_sem +
                '&total_total=' + this.totals.total +
                '&total_budget_year=' + this.totals.budget_year;
            // alert(params)
            var link1 = linkt + jasper_ip + jasper_link + params;
            return link1;
        },
        showModal(ffunccod, ffunction, dates) {
            // alert(ffunction,ffunccod);
            // alert(this.lbp_version);
            if (this.lbp_version > 2) {
                this.my_link = this.getToRep(ffunccod, ffunction, dates);
            } else {
                this.my_link = this.goToRepPrintLBP2();
            }
            this.displayModal = true;
        },

        hideModal() {
            this.displayModal = false;
        },
        goToAppropriations(id) {
            axios.get('/appropriations', {
                params: {
                    idpaps: id
                }
            })
                .then(response => {
                    // Handle the response data if needed
                    console.log(response.data);

                    // Redirect the user to 'Appropriations/Index' using return inertia
                    window.location.href = '/Appropriations/Index';
                })
                .catch(error => {
                    // Handle any errors
                    console.error(error);
                });
        },
        setCurrentYear() {

            var yr = new Date().getFullYear()
            this.dates = parseFloat(yr) + 1;
            // alert("year: "+this.form.year);
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
