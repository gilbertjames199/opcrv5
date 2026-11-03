<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="toolbar-card">
            <div class="toolbar-row">
                <div class="toolbar-actions">
                    <h3>HGDG Checklist</h3>
                </div>
                <div class="toolbar-actions">
                    <div class="search-wrapper">
                        <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                    </div>
                    <Link class="tool-btn tool-btn-primary" :href="`/HGDGChecklist/create`">
                        <i class="fas fa-plus"></i> Add Checklist
                    </Link>
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
                                <th scope="col">
                                    <i class="fas fa-box"></i> Box Number
                                </th>
                                <th scope="col">
                                    <i class="fas fa-industry"></i> Sector
                                </th>
                                <th scope="col" class="text-end">
                                    <i class="fas fa-cogs"></i> Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data">
                                <td>{{ dat.box_number }}</td>
                                <td>{{ dat.sector }} <!-- - {{ printValue(dat.id, dat.box_number, dat.sector) }}--></td>
                                <td class="text-end">
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
                                                <Link class="dropdown-item" :href="`/HGDGQuestions/${dat.id}`">Add Questions
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/HGDGChecklist/${dat.id}/edit`">Edit
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="text-danger dropdown-item" @click="deleteSectoral(dat.id)">
                                                Delete</Link>
                                            </li>
                                            <li>
                                                <Link class="text-danger dropdown-item"
                                                    @click="printShow(dat.id, dat.box_number, dat.sector)">
                                                Print
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
        <Modal v-show="displayModal" @close-modal-event="hideModal">
            IFrame {{ displayModal }}
            {{ my_link }}
            <!-- <div class="d-flex justify-content-center">
                <iframe :src="my_link" style="width:100%; height:400px" />
            </div>-->
        </Modal>
        <!-- displayModal: {{ displayModal }} -->
        <!-- {{ print_link }} -->
    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";
export default {
    props: {
        data: Object
    },
    data() {
        return {
            displayModal: false,
            my_link: "",
        }
    },
    components: {
        Pagination, Filtering, Modal
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
            //  + id
            let text = "WARNING!\nAre you sure you want to delete the Checklist?";
            if (confirm(text) == true) {
                this.$inertia.delete("/HGDGChecklist/" + id);
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
        printShow(chk_id, bx_n, sec) {
            // alert("checklist_id: "+chk_id+
            //         "\nbox_number: "+bx_n+
            //         "\nsector"+sec+"\ndisplayModal: "+this.displayModal);
            this.my_link = this.printValue(chk_id, bx_n, sec);
            this.showModal();
        },
        printValue(chk_id, bx_n, sec) {
            var linkt = "http://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FHGDGChecklist%2FHGDGChecklist&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FHGDGChecklist&decorate=no&output=pdf';
            var params = '&checklist_id=' + chk_id + '&box_number=' + bx_n +
                '&sector=' + sec;
            var lnk = linkt + jasper_ip + jasper_link + params;
            return lnk;
        },
        showModal() {
            alert("displaymodal: true " + this.my_link);
            this.displayModal = true;
        },
        hideModal() {
            alert("displaymodal: falseqwdede " + this.my_link);
            this.displayModal = false;
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
