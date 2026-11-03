<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <div class="peers">
                <h3>Programs and Projects </h3>
            </div>
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
                        <Link class="tool-btn tool-btn-primary" :href="`/paps/direct/create`">
                            <i class="fas fa-plus"></i> Add Programs and Projects
                        </Link>
                        <button class="tool-btn tool-btn-primary" @click="showModal(func_code, func_name)">
                            <i class="fas fa-print"></i> Print DPCR Standard
                        </button>
                        <button class="tool-btn tool-btn-outline" @click="showFilter()">
                            <i class="fas fa-filter"></i> Filter
                        </button>
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
                            <input v-model="search" type="text" class="filter-input" placeholder="Search PAPS...">
                        </div>
                    </div>

                    <!-- Office Filter (conditional) -->
                    <div v-if="$page.props.auth.user.department_code === '04'" class="filter-group">
                        <label class="filter-label">
                            <i class="fas fa-building"></i> Office
                        </label>
                        <select v-model="FFUNCCOD" class="filter-select" @change="filterMFOs()">
                            <option value=""></option>
                            <option v-for="FFUNCCOD in offices" :value="FFUNCCOD.FFUNCCOD">
                                {{ FFUNCCOD.FFUNCTION }}
                            </option>
                        </select>
                    </div>

                    <!-- Division Filter (conditional) -->
                    <div v-if="$page.props.auth.user.department_code === '02'" class="filter-group">
                        <label class="filter-label">
                            <i class="fas fa-sitemap"></i> Division
                        </label>
                        <select v-model="division_code" class="filter-select" @change="filterMFOs()">
                            <option value=""></option>
                            <option v-for="div in divisions" :value="div.division_code">
                                {{ div.division_name1 }}
                            </option>
                        </select>
                    </div>

                    <!-- MFO Filter -->
                    <div class="filter-group">
                        <label class="filter-label">
                            <i class="fas fa-file-alt"></i> MFO
                        </label>
                        <select v-model="mfosel" class="filter-select" @change="filterData()">
                            <option value=""></option>
                            <option v-for="mfo in mfos_data" :value="mfo.id">
                                {{ mfo.mfo_desc }}
                            </option>
                        </select>
                    </div>

                    <!-- Clear Filter Button -->
                    <div class="filter-group">
                        <button class="tool-btn tool-btn-danger" @click="clearFilter">
                            <i class="fas fa-times"></i> Clear Filter
                        </button>
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
                        PAPS List
                    </h4>
                    <div class="text-muted small">
                        Showing {{ data.from }} to {{ data.to }} of {{ data.total }} entries
                    </div>
                </div>

                <!-- Responsive Table Container -->
                  <!-- class="table-responsive" -->
                <div class="table-responsive">
                     <!-- class="table table-hover align-middle" -->
                    <table class="table table-hover align-middle">
                        <thead class="table-head-sticky">
                            <tr>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-file-alt me-2"></i>Major Final Output
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-file-contract me-2"></i>PAPS Description
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-check-circle me-2"></i>Description
                                </th>
                                <th class="border-0 fw-semibold text-primary text-center">
                                    <i class="fas fa-cogs me-2"></i>Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data" :key="dat.id">
                                <td>
                                    <div v-if="dat.m_f_o">{{ dat.m_f_o.mfo_desc }}</div>
                                </td>
                                <td>
                                    <!-- <div v-if="dat.type==='GAS'">General Administration and Support (GAS) - {{ dat.paps_desc }}</div> -->
                                    <div>{{ dat.paps_desc }}</div>
                                </td>
                                <td>{{ dat.MOV }}</td>
                                <td class="text-center">
                                    <div class="dropdown dropstart">
                                        <!-- <button
                                        class="btn btn-secondary btn-sm action-btn"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        data-bs-strategy="fixed"
                                        data-bs-offset="0,0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path
                                                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                            </svg>
                                        </button> -->
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
                                            <li>
                                                <Link class="dropdown-item"
                                                    :href="`/strategies/${dat.id}/${ismfo}/strat/mfo`">Strategies</Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/revision/${dat.id}`">PPA Profile</Link>
                                            </li>
                                            <li>
                                                <Button class="dropdown-item" @click="showModalSharedPaps(dat)">Share </Button>
                                            </li>
                                            <li v-if="Number(FFUNCCODE) === 4421">
                                                <Link class="dropdown-item" :href="`/hospitals/${dat.id}`">Hospital Output</Link>
                                            </li>
                                            <li v-else>
                                                <Link class="dropdown-item" :href="`/divisions/${dat.id}`">Division Output</Link>
                                            </li>
                                            <!-- <li>
                                                <Link class="dropdown-item" :href="`/divisions/${dat.id}`">Division Output</Link>
                                            </li> -->
                                            <li>
                                                <Link class="dropdown-item" :href="`/paps/${dat.id}/${dat.idmfo}/edit`">Edit
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="text-danger dropdown-item" @click="deleteMFO(dat.id)">Delete
                                                </Link>
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
        <!-- FFUNCCOD: {{ FFUNCCOD }} <br />
        mfosel: {{ mfosel }} -->
        <!-- {{ FFUNCCOD }} <br />
        {{ offices }} -->
         <Modal v-if="displayModal" @close-modal-event="hideModal">
            <div class="d-flex justify-content-center">

                <iframe :src="my_link" style="width:100%; height:500px" />
            </div>
        </Modal>
        <ModalSharedPaps v-if="displayModalSharedPaps" @close-modal-event="hideDisplayModalSharedPaps" :title="`Shared PAPS`">

            <h3>Shared PAPS</h3>
            <p><b>Title: </b><u>{{ paps_shared.paps_desc }}</u></p>
            <div>
                <!-- {{ paps_shared }} -->
            </div>
            <br>
            <div>
                <form @submit.prevent="submit">
                        <input type="hidden" v-model="form.idpaps" />
                        <!-- <input type="hidden" v-model="form.origin_department_code" /> -->
                        <input type="hidden" v-model="form.origin_pghead" />
                        <label for="">Destination Department Code </label>
                        <select v-model="form.destination_department_code" class="form-control"
                            @change="form.destination_pghead = offices_shared.find(office => office.department_code === form.destination_department_code).empl_id">
                            <option v-for="shared in offices_shared" :value="shared.department_code">
                                {{ shared.office }}
                            </option>
                        </select>
                        <!-- <label for="">Destination PG Head</label>
                        <input type="text" v-model="form.destination_pghead" class="form-control" /> -->
                        <button type="button" @click="submit" class="btn btn-primary mt-3 text-white">Share PAPS</button>
                    </form>
                    <!-- {{ shared_paps }} -->
                <div>
                    <br>
                    <table style="width: 100%;" class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr>
                                <th style="background-color: grey; color: white">Department Name</th>
                                <th style="background-color: grey; color: white">PG Head</th>
                                <th style="background-color: grey; color: white">Shared by</th>
                                <th style="background-color: grey; color: white">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- LENGTH: {{ shared_paps.length }} -->
                            <tr v-for="shared in shared_paps" :key="shared_paps.length">
                                <td>{{ shared.destination_department.office }}</td>
                                <td>{{ shared.destination_pghead.first_name }} {{ shared.destination_pghead.middle_name }} {{ shared.destination_pghead.last_name }}</td>
                                <td>{{ shared.added_by.FullName }}</td>
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

                                            <li>
                                                <Link class="text-danger dropdown-item" @click="deleteSharedPaps(shared.id, shared.destination_department.office)">
                                                    Delete Record
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </ModalSharedPaps>
        <!-- {{ divisions }} -->
    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";
import ModalSharedPaps from "@/Shared/ModalDynamicTitle";
import { useForm } from "@inertiajs/vue3";

export default {
    props: {
        data: Object,
        filters: Object,
        offices: Object,
        FFUNCCODE: Object,
        department_code: Object,
        office: Object,
        offices: Object,
        offices_shared: Object,
        // idinteroutcome: String,
        // idoutcome: String,
        // idmfo: String,
        can: Object,
        divisions: Object,
        mfos: Object
    },
    data() {
        return {
            displayModal: false,
            displayModalSharedPaps: false,
            shared_paps: [],//pertains to the departments the involved with the Shared PAPS other than the office that owns the PAPS
            paps_shared: [],//pertains to the PAPS being shared
            search: this.$props.filters.search,
            filter: false,
            ismfo: 0,
            mfos_data: [],
            mfosel: "",
            FFUNCCOD: "",
            func_code: "",
            func_name: "",
            filter_FFUNCTION: "",
            division_code: "",
            form: useForm({
                idpaps: "",
                origin_department_code: "",
                origin_pghead: "",
                destination_department_code: "",
                destination_pghead: "",
                user_id: this.$page.props.auth.user.id,
            })
        }
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/paps/direct",
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
        Pagination, Filtering, Modal, ModalSharedPaps
    },
    mounted() {
        this.office_function()
        this.func_name = this.office
        this.func_code = this.FFUNCCODE
        this.mfos_data = this.mfos;
    },
    methods: {
        office_function(){
            if(this.department_code === '04'){
                const selectedOffice = this.offices.find(office => office.FFUNCCOD === this.FFUNCCOD);
                this.func_code = this.FFUNCCOD
                this.func_name = selectedOffice ? selectedOffice.FFUNCTION : '';

                //  console.log(this.func_name)
            } else {
                this.func_code = this.FFUNCCODE
                this.func_name = this.office
            }
        },

        showModal(ffunccod, ffunction) {
            // alert("FFUNCCOD: " + ffunccod + "\n "
            //     + " FFUNCTION: " + ffunction + "\n " +
            //     "MOOE: " + MOOE + " \n" +
            //     "PS: " + PS
            // )
            console.log("test1: "+ffunccod);
            console.log("test2: "+ffunction);
            this.my_link = this.getToRep(ffunccod, ffunction);
            this.displayModal = true;
        },
        hideModal() {
            this.displayModal = false;
        },
        deleteMFO(id) {
            let text = "WARNING!\nAre you sure you want to delete the PAP?";
            if (confirm(text) == true) {
                this.$inertia.delete("/paps/" + id + "/");
            }
        },
        deleteSharedPaps(id, dept) {
            let text = `⚠️ WARNING!\nAre you sure you want to unshare this PAP with "${dept}"? This action cannot be undone. ${this.form.idpaps}`;
            if (confirm(text) == true) {
                // this.$inertia.delete("/sharedPAPS/" + id + "/");
                // this.getSharedPAPS(this.form.idpaps);
                this.form.delete("/sharedPAPS/" + id + "/", {
                    onSuccess: () => {
                        // this.hideDisplayModalSharedPaps();
                        // this.$inertia.reload();
                        this.getSharedPAPS(this.form.idpaps);
                    },
                    onError: (errors) => {
                        console.error("Error deleting PAPS:", errors);
                    }
                });
            }
        },
        showFilter() {
            //alert("show filter");
            this.filter = !this.filter
        },
        getToRep(ffunccod, ffunction) {
            // alert(data[0].FFUNCCOD);
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system%2FDPCR&reportUnit=%2Freports%2Fplanning_system%2FDPCR%2FDPCR_Standard&standAlone=true&decorate=no&output=pdf';
            var params = '&id=' + ffunccod + '&FUNCTION=' + ffunction;
            var link1 = linkt + jasper_ip + jasper_link + params;
            return link1;
        },
        async clearFilter() {
            this.mfosel = "";
            this.filterData();
        },
        async filterMFOs() {
            this.office_function();

            this.mfos_data = [];
            // await axios.post("/paps/major/final/outputs/filter", { FFUNCCOD: this.form.FFUNCCOD }).then((response) => {
            //     this.mfos_data = response.data.data
            // });
            try {
                var my_url = "/paps/major/final/outputs/filter/" + this.FFUNCCOD;
                // alert(my_url);
                const response = await axios.get(my_url, { FFUNCCOD: this.FFUNCCOD });
                this.mfos_data = response.data.data;
            } catch (error) {
                console.error("Error fetching MFOs:", error);
            }
        },
        async filterMFOsByDivision() {
            this.office_function();

            this.mfos_data = [];
            // await axios.post("/paps/major/final/outputs/filter", { FFUNCCOD: this.form.FFUNCCOD }).then((response) => {
            //     this.mfos_data = response.data.data
            // });
            try {
                var my_url = "/paps/major/final/outputs/filter/" + this.division_code  +"/filter/by/division";
                // alert(my_url);
                const response = await axios.get(my_url, { FFUNCCOD: this.FFUNCCOD });
                this.mfos_data = response.data.data;
            } catch (error) {
                console.error("Error fetching MFOs:", error);
            }
        },
        async filterData() {
            //alert(this.mfosel);

            this.$inertia.get(
                "/paps/direct",
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
        showModalSharedPaps(dat) {
            this.displayModalSharedPaps = true;
            this.shared_paps = [];
            this.paps_shared = dat;
            this.form.idpaps = dat.id;
            this.getSharedPAPS(dat.id);
            this.form.origin_department_code = dat.department_code;
            this.form.origin_pghead = this.offices_shared.find(office => office.department_code === dat.department_code).empl_id;
            // alert(this.form.origin_department_code);
            // console.log("shared_paps: " + this.shared_paps);
            // console.log("paps_shared: " + this.paps_shared);
        },
        hideDisplayModalSharedPaps(){
            this.displayModalSharedPaps = false;
            this.shared_paps = [];
            this.paps_shared = [];
        },
        async getSharedPAPS(idpaps) {
            this.shared_paps = [];
            // PAPS Shared
            try {
                var my_url = "/sharedPAPS/" + idpaps;
                const response = await axios.get(my_url, { idpaps: idpaps });
                console.log(response.data)
                this.shared_paps = response.data;
                this.shared_paps.splice(0, this.shared_paps.length, ...response.data);

                // this.$set(this, 'shared_paps', response.data);

            } catch (error) {
                console.error("Error fetching shared PAPS:", error);
            }
        },
        submit() {
            // alert("submit");
            // console.log(this.form);
            this.form.post("/sharedPAPS/create", {
                onSuccess: () => {
                    // this.hideDisplayModalSharedPaps();
                    // this.$inertia.reload();
                    this.getSharedPAPS(this.form.idpaps);
                },
                onError: (errors) => {
                    console.error("Error sharing PAPS:", errors);
                }
            });
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

/* .table-responsive {
    overflow: visible;  lets dropdowns escape
}

.bgc-white.p-20.bd {
    overflow: visible !important;
} */

/* Also cover the modal if dropdowns are hidden there too */
/* .modal-body,
.modal-content {
    overflow: visible !important;
} */
 /* .table-responsive {
    overflow-x: auto;
    overflow-y: visible;
}

.table-responsive .dropdown-menu.show {
    position: fixed !important;
} */

/* .dropdown-menu {
    z-index: 1051 !important;  /* slightly above Bootstrap's default 1050
} */
</style>
