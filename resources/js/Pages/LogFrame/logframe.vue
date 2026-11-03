<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h2>{{ office }}</h2>
            &nbsp;

            <!-- <div v-if="auth.user.office.ffunccod === '1031'">

                <button class="btn btn-primary mt-3 text-white" @click="showModalAd(ffunccod, office)"> Print Logframe
                </button>
            </div> -->
            <!-- <div v-else> -->
            <!-- FFUNCCOD: {{ FFUNCCOD }} <br>
                office: {{ office }} <br>
                auth.user.office.ffunccod: {{ auth.user.office.ffunccod }} <br>
                auth.user.office.office: {{ auth.user.office.office }}<br> -->
            <div>
                <button class="btn btn-primary mt-3 text-white" @click="showModal(FFUNCCOD, office)"> Print Logframe
                </button>

            </div>
            <Link :href="`/logframe`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>LOGICAL FRAMEWORK</h3>

            <!--
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>

                <div class="peer">

                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                    &nbsp;&nbsp;
                    <Link :href="`/mfos/direct`">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </Link>
                </div>
            </div>-->
            <!--
            <Link :href="`/mfos/${idinteroutcome}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link> -->
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-hover table-bordered border-dark">
                        <tbody>
                            <tr>
                                <td>SOCIETAL GOAL</td>
                                <td colspan="4">
                                    <div v-for="soc in societal">
                                        <div align="justify" v-html="soc.description"></div>
                                        <hr>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>SECTOR OUTCOMES </td>
                                <td colspan="4">
                                    <!-- <div v-if="FFUNCCOD === 1031">
                                        <div v-if="sec_econ">
                                            Economic Services Sector:
                                            {{ sec_econ }}
                                        </div>
                                        <div v-if="sec_social">
                                            Social Services Sector:
                                            <div v-for="soc in sec_social">
                                                {{ soc.goal_description }}
                                            </div>
                                        </div>
                                        <div v-if="sec_general">
                                            <b>General and Public Services Sector:</b>
                                            <div v-for="gen in sec_general">
                                                {{ gen.goal_description }}
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else> -->
                                    <div>
                                        <div v-for="sec in sec_goal">
                                            <!-- <QuillEditor v-model:content="sec.goal_description" contentType="html"
                                                toolbar="false" /> -->
                                            <div align="justify" v-html="sec.goal_description"></div>

                                            <!-- {{ sec.goal_description }} -->
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>ORGANIZATIONAL OUTCOME</td>
                                <td colspan="4">
                                    <div v-for="org in organizational">
                                        <!-- <div> {{ org.goal_description }}</div> -->
                                        <div align="justify" v-html="org.goal_description"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr v-for="(mfo, index) in mfos" :key="index">
                                <td :rowspan="mfo_rowspan" v-if="index == 0">MAJOR FINAL OUTPUTS</td>
                                <td>
                                    <Link :href="`/paps/${mfo.id}`" ><b>{{ mfo.mfo_desc }}</b></Link>
                                </td>
                                <td class="pL-2" colspan="2">
                                    <div v-for="pap in mfo.paps">
                                        <a :href="`/revision/${pap.id}`" target="_blank">{{ pap.paps_desc }}</a><br>
                                        <span v-if="pap.MOV !== '-' && pap.MOV">(<i>Description: {{ pap.MOV }}</i>)</span>
                                        <div style="color: white"> .</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!--
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
                -->
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
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";
export default {
    props: {
        data: Object,
        societal: Object,
        sec_econ: Object,
        sec_social: Object,
        sec_general: Object,
        organizational: Object,
        sec_goal: Object,
        mfos: Object,
        office: String,
        functional: Object,
        auth: Object,
        FFUNCCOD: String
        // idinteroutcome: String,
        // idmfo: String,
        // can: Object,
        // filters: Object,
    },
    data() {
        return {
            //search: this.$props.filters.search,
            mfo_rowspan: 0,
            displayModal: false,
        }
    },
    mounted() {
        //this.isOne();
        this.mfo_rowspan = this.mfos.length;
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/paps/" + this.idmfo,
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    computed: {
        officeCap() {
            var cap = this.office;
            return cap;
        }
    },
    components: {
        Pagination, Filtering, Modal,
    },

    methods: {

        getToRep(ffunccod, ffunction) {
            // alert(data[0].FFUNCCOD);
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            //var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system%2FLogFrame&reportUnit=%2Freports%2Fplanning_system%2FLogFrame%2FLogframe&standAlone=true&decorate=no&output=pdf';
            // var jasper_link = 'jasperserver/fow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FNLogFrame%2FLogframe&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FNLogFrame&standAlone=true&decorate=no&output=pdf'
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FLogFrame%2FLogframe&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FLogFrame&standAlone=true&decorate=no&output=pdf';
            var params = '&id=' + ffunccod + '&FUNCTION=' + ffunction;
            var link1 = linkt + jasper_ip + jasper_link + params;
            // alert('getToRep: ' + link1);
            return link1;
        },
        showModal(ffunccod, ffunction) {
            // alert(ffunccod+"\n"+ffunction);
            this.my_link = this.getToRep(ffunccod, ffunction);
            this.displayModal = true;
        },
        showModalAd(ffunccod, ffunction) {
            //alert("showModalAd\n"+ffunccod+"\n"+ffunction);
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            // var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FLogframe_spcl%2FMAIN_LOGFRAME&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FLogframe_spcl&decorate=no&output=pdf'
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FLogFrame%2FLogframe&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FLogFrame&standAlone=true&decorate=no&output=pdf';
            var params = '&id=' + ffunccod + '&FUNCTION=' + ffunction;
            var link1 = linkt + jasper_ip + jasper_link + params;
            // alert('showModalAd: ' + link1);
            this.displayModal = true;
            this.my_link = link1;

        },

        hideModal() {
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
