<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <h3>OPCR Standard</h3>

        <div class="toolbar-card" v-if="auth.user.department_code === '04'">
            <!-- Top Row: Actions -->
            <div class="toolbar-row toolbar-actions">
                <div class="toolbar-left">
                    <span class="toolbar-label">
                        <i class="fas fa-sliders-h"></i> FILTER PANEL
                    </span>
                </div>
                <div class="toolbar-right">
                    <div class="search-wrapper">
                        <i class="fas fa-search search-icon"></i>
                        <input v-model="search" type="text" class="filter-input" placeholder="Search MFO...">
                    </div>
                    <div style="min-width: 200px;">
                        <select v-model="FFUNCCOD" class="filter-select" @change="filterMFOs()">
                            <option value="">-- Select Office --</option>
                            <option v-for="func in functions" :value="func.FFUNCCOD">
                                {{ func.FFUNCTION }}
                            </option>
                        </select>
                    </div>
                    <button class="tool-btn tool-btn-primary" @click="showModal(filter_FFUNCCOD, filter_FFUNCTION, filter_mooe, filter_Ps)">
                        <i class="fas fa-print"></i> Print OPCR Standard
                    </button>
                    <button class="tool-btn tool-btn-outline" @click="showFilter()">
                        <i class="fas fa-filter"></i> Filter
                    </button>
                </div>
            </div>

            <!-- Divider -->
            <div class="toolbar-divider"></div>

            <!-- Bottom Row: Filters -->
            <div class="toolbar-row toolbar-filters" v-if="filter">
                <!-- MFO Filter -->
                <div class="filter-group">
                    <label class="filter-label">
                        <i class="fas fa-layer-group"></i> Filter by MFO
                    </label>
                    <select v-model="mfosel" class="filter-select" @change="filterData()">
                        <option value="">-- Select MFO --</option>
                        <option v-for="mfo in mfos_data" :value="mfo.id">
                            {{ mfo.mfo_desc }}
                        </option>
                    </select>
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; gap: 10px; align-items: flex-end; margin-left: auto;">
                    <button class="tool-btn tool-btn-primary" @click="filterData()">
                        <i class="fas fa-search"></i> Search
                    </button>
                    <button class="tool-btn tool-btn-outline" @click="filter = false">
                        <i class="fas fa-times"></i> Close
                    </button>
                </div>
            </div>
        </div>

        <div class="toolbar-card" v-else>
            <!-- Top Row: Actions -->
            <div class="toolbar-row toolbar-actions">
                <div class="toolbar-left">
                    <span class="toolbar-label">
                        <i class="fas fa-sliders-h"></i> FILTER PANEL
                    </span>
                </div>
                <div class="toolbar-right">
                    <div class="search-wrapper">
                        <i class="fas fa-search search-icon"></i>
                        <input v-model="search" type="text" class="filter-input" placeholder="Search...">
                    </div>
                    <button class="tool-btn tool-btn-primary" @click="showModal(filter_FFUNCCOD, filter_FFUNCTION, filter_mooe, filter_Ps)">
                        <i class="fas fa-print"></i> Print OPCR Standard
                    </button>
                    <button class="tool-btn tool-btn-outline" @click="showFilter()">
                        <i class="fas fa-filter"></i> Filter
                    </button>
                </div>
            </div>

            <!-- Divider -->
            <div class="toolbar-divider"></div>

            <!-- Bottom Row: Filters -->
            <div class="toolbar-row toolbar-filters" v-if="filter">
                <!-- MFO Filter -->
                <div class="filter-group">
                    <label class="filter-label">
                        <i class="fas fa-layer-group"></i> Filter by MFO
                    </label>
                    <select v-model="mfosel" class="filter-select" @change="filterData()">
                        <option value="">-- Select MFO --</option>
                        <option v-for="mfo in mfos_data" :value="mfo.id">
                            {{ mfo.mfo_desc }}
                        </option>
                    </select>
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; gap: 10px; align-items: flex-end; margin-left: auto;">
                    <button class="tool-btn tool-btn-primary" @click="filterData()">
                        <i class="fas fa-search"></i> Search
                    </button>
                    <button class="tool-btn tool-btn-outline" @click="filter = false">
                        <i class="fas fa-times"></i> Close
                    </button>
                </div>
            </div>
        </div>
        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-head-sticky">
                            <tr>
                                <th v-if="auth.user.department_code == '04'" scope="col">
                                    <i class="fas fa-building"></i> Office
                                </th>
                                <th scope="col">
                                    <i class="fas fa-layer-group"></i> Major Final Output
                                </th>
                                <th scope="col">
                                    <i class="fas fa-file-alt"></i> PAPS Description
                                </th>
                                <th scope="col">
                                    <i class="fas fa-align-left"></i> Description
                                </th>
                                <th scope="col" class="text-end">
                                    <i class="fas fa-cogs"></i> Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data" :key="dat.id">
                                <td v-if="auth.user.department_code == '04'">{{ dat.office.FFUNCTION }}</td>
                                <td>
                                    <div v-if="dat.m_f_o">{{ dat.m_f_o.mfo_desc }}</div>
                                </td>
                                <td>{{ dat.paps_desc }}</td>
                                <td>{{ dat.MOV }}</td>
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

                                            <li>
                                                <Link v-if="isEmptyObject(dat.opcr_stardard)" class="dropdown-item"
                                                    :href="`/OPCRpaps/create/${dat.id}`">Add Standard</Link>
                                            </li>
                                            <li>
                                                <Link v-if="isNotEmptyObject(dat.opcr_stardard)" class="dropdown-item"
                                                    :href="`/OPCRpaps/edit/${dat.id}`">Edit Standard</Link>
                                            </li>
                                            <li>
                                                <Link v-if="isNotEmptyObject(dat.opcr_stardard)" class="text-danger dropdown-item"
                                                    @click="deleteStandard(dat.id)">Delete Standard</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- {{ auth }} -->
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <pagination v-if="FFUNCCOD" :next="make_url(data.next_page_url)"
                            :prev="make_url(data.prev_page_url)" />
                        <pagination v-else :next="data.next_page_url" :prev="data.prev_page_url" />
                        <!-- {{ make_url(data.prev_page_url) }} -->
                        <!-- <Pagination_Preserved :links="data.links" /> -->
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
        <Modal v-if="displayModal" @close-modal-event="hideModal">
            <div class="d-flex justify-content-center">

                <iframe :src="my_link" style="width:100%; height:500px" />
            </div>
        </Modal>
        <!-- {{ functions }} -->
        <!-- {{ mfos_data }} -->
    </div>
</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Pagination_Preserved from "../../Shared/Pagination_Preserved.vue";
import Modal from "@/Shared/PrintModal";
export default {
    props: {
        auth: Object,
        data: Object,
        filters: Object,
        functions: Object,
        MOOE: Object,
        PS: Object,
        // idinteroutcome: String,
        // idoutcome: String,
        // idmfo: String,
        idpaps: Number,
        can: Object,
        mfos: Object,
        FFUNCCODVAL: String,
    },

    data() {
        return {
            my_link: "",
            displayModal: false,
            search: this.$props.filters.search,
            filter: false,
            FFUNCCOD: "",
            FFUNCCOD: this.$props.filters.FFUNCOD,
            mfos_data: [],
            filter_FFUNCCOD: "",
            filter_mooe: "",
            filter_FFUNCTION: "",
            filter_Ps: "",
        }
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/OPCRpaps/direct",
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
        Pagination, Filtering, Modal, Pagination_Preserved
    },
    mounted() {
        if (this.FFUNCCODVAL != undefined) {
            this.FFUNCCOD = this.FFUNCCODVAL
        }
        if (this.auth.user.department_code !== '04') {
            this.filter_FFUNCCOD = this.functions[0].FFUNCCOD
            this.filter_FFUNCTION = this.functions[0].FFUNCTION
            this.filter_mooe = this.functions[0].MOOE
            this.filter_Ps = this.functions[0].PS
        }
        this.mfos_data = this.mfos;
    },
    methods: {
        deleteStandard(id) {
            let text = "WARNING!\nAre you sure you want to delete this Standard?";
            if (confirm(text) == true) {
                this.$inertia.delete("/OPCRpaps/" + id + "/");
            }
        },
        showFilter() {
            //alert("show filter");
            this.filter = !this.filter
        },
        async filterMFOs() {
            this.mfos_data = [];
            var dataFFUNCCOD = this.functions.filter((func) => func.FFUNCCOD === this.FFUNCCOD);
            this.filter_FFUNCCOD = dataFFUNCCOD[0].FFUNCCOD;
            this.filter_FFUNCTION = dataFFUNCCOD[0].FFUNCTION;
            this.filter_Ps = dataFFUNCCOD[0].PS;
            this.filter_mooe = dataFFUNCCOD[0].MOOE;
            try {
                var my_url = "/paps/major/final/outputs/filter/" + this.FFUNCCOD;
                const response = await axios.get(my_url, { FFUNCCOD: this.FFUNCCOD });
                this.mfos_data = response.data.data;
            } catch (error) {
                console.error("Error fetching MFOs:", error);
            }
            this.filterData();
        },
        async clearFilter() {
            this.mfosel = "";
            this.FFUNCCOD = "";
            this.filterData();
        },
        async filterData() {
            //alert(this.mfosel);
            this.$inertia.get(
                "/OPCRpaps/direct",
                {
                    mfosel: this.mfosel,
                    FFUNCCOD: this.FFUNCCOD
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        getToRep(ffunccod, ffunction, MOOE, PS) {
            // alert(data[0].FFUNCCOD);
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2Fopcr_standard&standAlone=true&decorate=no&output=pdf';
            var params = '&id=' + ffunccod + '&FUNCTION=' + ffunction;
            var link1 = linkt + jasper_ip + jasper_link + params;
            return link1;
        },

        showModal(ffunccod, ffunction, MOOE, PS) {
            // alert("FFUNCCOD: " + ffunccod + "\n "
            //     + " FFUNCTION: " + ffunction + "\n " +
            //     "MOOE: " + MOOE + " \n" +
            //     "PS: " + PS
            // )
            this.my_link = this.getToRep(ffunccod, ffunction, MOOE, PS);
            this.displayModal = true;
        },

        hideModal() {
            this.displayModal = false;
        },
        isEmptyObject(obj) {
            // Check if the object is empty
            return obj === null
        },
        isNotEmptyObject(obj) {
            return obj !== null
        },
        pageChange(direction, limit_local) {
            var num = 0;
            if (direction === 'next') {
                num = this.data.current_page + 1;
            } else {
                if (this.data.current_page === 1) {
                    num = 1;
                } else {
                    num = this.data.current_page - 1;
                }
            }
            this.$inertia.get(
                "/OPCRpaps/direct",
                {
                    page: num,
                    mfosel: this.mfosel,
                    FFUNCCOD: this.FFUNCCOD
                    // mun: this.select_mun,
                    // bar: this.select_bar,
                    // pur: this.select_pur,
                    // gender: this.gender,
                    // curr_school: this.curr_school,
                    // tab_sel: this.tab_selected,
                    // my_table_data: this.my_table_data
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                });


        },
        make_url(my_url) {
            if (my_url === null)
                return null
            else
                return my_url + "&FFUNCCOD=" + this.FFUNCCOD;
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
