<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Daily Accomplishment</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilterP()">Print</button>
                    <!-- <Link class="btn btn-primary btn-sm" :href="`/paps/direct/create`">Add Programs and Projects </Link> -->
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>

            <!-- <Link :href="`/inter_outcome/${idoutcome}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link> -->
        </div>
        <filtering v-if="filter" @closeFilter="filter=false">
            Filter by MFO
            <select v-model="mfosel" class="form-control" @change="filterData()">
                <option v-for="mfo in mfos" :value="mfo.id">
                    {{ mfo.mfo_desc }}
                </option>
            </select>
            <button class="btn btn-sm btn-danger mT-5 text-white" @click="clearFilter">Clear Filter</button>
        </filtering>
        <FilterPrinting v-if="filter_p" @closeFilter="filter_p=false">
            Date From
            <input type="date" v-model="date_from" class="form-control" />
            Date To
            <input type="date" v-model="date_to" class="form-control" />
            Offices
            <select v-model="FFUNCCOD" id="selectOffice" class="form-control" @change="filterData()">
                <option v-for="functional in functions" :value="functional.FFUNCCOD">
                    {{ functional.FFUNCTION }}
                </option>
            </select>
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="printSubmit">Print Report</button>
        </FilterPrinting>
        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>Major Final Output</th>
                                <th>PAPS Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data" :key="dat.id">
                                <td>{{ dat.mfo_desc }}</td>
                                <td>{{ dat.paps_desc }}</td>
                                <td>
                                    <div class="dropdown dropstart" >
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                            <li><Link class="dropdown-item" :href="`/AddAccomplishment/${dat.id}`">Add Accomplishment</Link></li>
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
                        <p >
                            {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries
                        </p>
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
import FilterPrinting from "@/Shared/FilterPrint";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";
export default {
    props: {
        data: Object,
        filters: Object,
        // idinteroutcome: String,
        // idoutcome: String,
        // idmfo: String,
        idpaps: Number,
        can: Object,
        mfos: Object,
        functions: Object
    },
    data() {
        return{
            search: this.$props.filters.search,
            filter: false,
            filter_p: false,
            date_from: "",
            date_to: "",
            FFUNCCOD: "",
            office: "",
            displayModal: false,
            my_link: "",
        }
    },
    watch: {
            search: _.debounce(function (value) {
            this.$inertia.get(
                "/DailyAccomplishment/direct",
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
        Pagination, Filtering,Modal, FilterPrinting
    },

    methods:{


        deleteMFO(id) {
            let text = "WARNING!\nAre you sure you want to delete the PAP?";
              if (confirm(text) == true) {
                this.$inertia.delete("/paps/" + id+"/");
            }
        },
        showFilter() {
            //alert("show filter");
            this.filter = !this.filter
        },
        showFilterP(){
            this.filter_p = !this.filter_p
        },
        printSubmit(){
            var office_ind = document.getElementById("selectOffice").selectedIndex;
            this.office =this.functions[office_ind].FFUNCTION;
            var pg_head = this.functions[office_ind].DEPTHEAD;

            this.my_link =this.viewlink(this.FFUNCCOD, this.date_from, this.date_to, this.office, pg_head);

            this.showModal();
        },

        viewlink(FFUNCCOD, date_from, date_to, office, pg_head){
            //var linkt ="abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-";
            var linkt="http://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FDaily_Accomplishment%2FAccomplishments_Main&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FDaily_Accomplishment&decorate=no&output=pdf';
            var params = '&FFUNCCOD=' + FFUNCCOD + '&date_from=' + date_from + '&date_to=' + date_to +
                '&office=' + office+'&pg_head='+pg_head;
            var linkl = linkt+jasper_ip + jasper_link + params;

            return linkl;
        },
        async clearFilter(){
            this.mfosel="";
            this.filterData();
        },
        async filterData(){
            //alert(this.mfosel);
            this.$inertia.get(
                "/DailyAccomplishment/direct",
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
        showModal() {

            this.displayModal = true;
        },
        hideModal() {
            this.displayModal = false;
        },
    }
};
</script>
<style>
            .row-centered {
                text-align:center;
            }
            .col-centered {
                display:inline-block;
                float:none;
                text-align:left;
                margin-right:-4px;
            }
            .pos{
                position: top;
                top: 240px;
            }
</style>
