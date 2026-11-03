<template>

    <Head>
        <title>OPCR</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>OFFICE PERFORMANCE COMMITMENT AND RATING FORM </h3>

            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <!-- <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/ELA/create`">Add Agenda</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div> -->
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
        <!-- {{ opcr_date }} -->
        <div class="masonry-sizer col-md-6">
            <h5>PERIOD: <u>{{ opcr_date }}</u></h5>
        </div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <form @submit.prevent="submit()">
                        <table class="table table-hover table-bordered border-dark align-middle">
                            <thead class="table-head-sticky text-center">
                                <tr>
                                    <th scope="col" rowspan="2"><i class="fas fa-align-left"></i> Major Final Output</th>
                                    <th scope="col" rowspan="2"><i class="fas fa-bullseye"></i> Success Indicators</th>
                                    <th scope="col" rowspan="2"><i class="fas fa-money-bill"></i> Alloted Budget</th>
                                    <th scope="col" rowspan="2"><i class="fas fa-user-tie"></i> Accountable Division</th>
                                    <th scope="col" rowspan="2"><i class="fas fa-check-circle"></i> Actual Accomplishments</th>
                                    <th scope="col" colspan="4"><i class="fas fa-star"></i> Rating</th>
                                    <th scope="col" rowspan="2"><i class="fas fa-comment"></i> Remarks</th>
                                </tr>
                                <tr>
                                    <th scope="col">Q</th>
                                    <th scope="col">E</th>
                                    <th scope="col">T</th>
                                    <th scope="col">Ave</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!--v-if="index === 0 || opcr.mfo_desc !== opcrs[index - 1].mfo_desc"
                                        :rowspan="getRowspan(opcr.mfo_desc, index)"-->
                                <tr v-for="(opcr, index) in form.opcrs" :key="index">
                                    <td v-if="index === 0 || opcr.mfo_desc !== opcrs[index - 1].mfo_desc"
                                        :rowspan="getRowspan(opcr.mfo_desc, index)" style="vertical-align:middle">
                                        {{ opcr.mfo_desc }}
                                    </td>
                                    <td v-if="index === 0 || opcr.success_indicator !== opcrs[index - 1].success_indicator"
                                        :rowspan="getRowspanIndicator(opcr.success_indicator, index)"
                                        style="vertical-align:middle">
                                        <!-- {{ opcr.success_indicator }} -->
                                        {{ opcr.target_success_indicator }}
                                    </td>
                                    <!-- <td :rowspan="form.opcrs.length" v-if="index === 0" style="vertical-align:middle">
                                        PS = {{ halfSem(ps) }} <br>(annual={{ format_number_conv(ps) }}) <br><br>MOOE = {{
                                            halfSem(mooe) }} (annual={{ format_number_conv(mooe) }})
                                    </td> -->
                                    <td>
                                        <!-- {{ opcr }} -->
                                    </td>
                                    <td v-if="index === 0 || opcr.office_accountable !== opcrs[index - 1].office_accountable"
                                        :rowspan="getRowspan2(opcr.office_accountable, index)"
                                        style="vertical-align:middle">
                                        {{ opcr.office_accountable }}
                                    </td>
                                    <td>
                                        <!-- {{ opcr.id }} -->
                                        <textarea v-model="form.opcrs[index].accomplishments"
                                            style="height: inherit"></textarea>
                                    </td>
                                    <td>
                                        <input v-model="form.opcrs[index].rating_q" class="centered-input" type="number"
                                            min="0" max="5" step="1">
                                    </td>
                                    <td>
                                        <input v-model="form.opcrs[index].rating_e" class="centered-input" type="number"
                                            min="0" max="5" step="1">
                                    </td>
                                    <td>
                                        <input v-model="form.opcrs[index].rating_t" class="centered-input" type="number"
                                            min="0" max="5" step="1">
                                    </td>
                                    <td>
                                        {{ getAverage(index) }}
                                    </td>
                                    <td><textarea v-model="form.opcrs[index].remarks"
                                            style="height: inherit"></textarea></td>
                                </tr>
                                <tr>
                                    <td colspan="5"></td>
                                    <td colspan="3">TOTAL RATING</td>
                                    <td>{{ getTotalAverage() }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="5"></td>
                                    <td colspan="3">FINAL AVERAGE RATING</td>
                                    <td>{{ getAverageAll() }}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>

                </div>
                <div class="table-responsive">
                    <table class="table table-hover table-bordered border-dark align-middle">
                        <tbody>
                            <tr>
                                <td>Assessed by PMT Secretariat:</td>
                                <td>Reviewed by:</td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <br><br>
                                    <strong>ALICIA M. GRACIADAS</strong>
                                </td>
                                <td class="text-center font-weight-bold"><br><br>
                                    <!-- {{ opcr_date }} -->
                                    <span v-if="isPA(opcr_date, 'PA 1')"><strong>LEWIS JAKE G. CAIMAN</strong></span>
                                    <span v-else-if="isPA(opcr_date, 'PA 2')"><strong>IVAN KLEB N. ULGASAN</strong></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center" style="font-size: 12px">PMT Head Secretariat</td>
                                <td class="text-center" style="font-size: 12px">PMT Chairperson</td>
                            </tr>
                            <tr>
                                <td style="font-size: 12px">Date:</td>
                                <td style="font-size: 12px">Date:</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span class="text-danger font-weight-bold"><b>SAVE CHANGES THEN PRINT</b></span>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()"
                            :disabled="form.processing">
                            Save changes
                        </button>&nbsp;
                        <button type="button" class="btn btn-success mt-3 text-white" @click="showModal()"
                            :disabled="form.processing">
                            Print
                        </button>
                        <!-- <pagination :next="data.next_page_url" :prev="data.prev_page_url" /> -->
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p>
                            <!-- {{ opcrs[0].mfo_desc }} ** {{ opcrs[1].mfo_desc }} <br>
                            {{ opcrs[2].mfo_desc }} ** {{ opcrs[3].mfo_desc }} -->
                            <!-- {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries -->
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <Modal v-if="displayModal" @close-modal-event="hideModal">
            <div class="justify-content-center">
                <div style="text-align: center">
                    <h4>OFFICE PERFORMANCE COMMITMENT AND RATING FORM</h4>
                </div>

                <div class="masonry-item w-100">
                    <div class="bgc-white p-20 bd">
                        <div class="table-responsive">
                            <!-- {{ report_link }} -->
                            <iframe :src="report_link" style="width:100%; height:450px" />
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <!-- <button class="btn btn-primary text-white" @click="submitAction('1')" v-if="emp_status === '0'">
                        Review
                    </button>
                    <button class="btn btn-primary text-white" @click="submitAction('2')" v-if="emp_status === '1'">
                        Approve
                    </button>&nbsp;
                    <button class="btn btn-danger text-white" @click="showModal3()">
                        Return
                    </button> -->
                </div>
            </div>
        </Modal>
        <!-- <ModalPrint v-if="displayModalPrint" @close-modal-event="hideModalPrint">
            <div class="d-flex justify-content-center">
                {{ my_link }}
                <iframe :src="my_link" style="width:100%; height:400px" />
            </div>
        </ModalPrint> -->
    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";
// import ModalPrint from "@/Shared/PrintModalPrint";
export default {
    props: {
        opcr_id: String,
        FFUNCCOD: String,
        mooe: Number,
        ps: Number,
        opcr_date: String,
        ave: String,
        total: String,
        dept_head: String,
        opcrs: Object,
    },
    data() {
        return {
            total_ave: 0,
            total_comp: 0,
            displayModal: false,
            displayModalPrint: false,
            // total_divisor: 0,
            form: useForm({
                opcrs: [],
            }),
            my_link: ''
        }
    },
    computed: {

    },
    components: {
        Pagination, Filtering, Modal
        // , ModalPrint
    },
    // beforeMount() {
    //     this.form.opcrs = this.opcrs
    //     if (localStorage.getItem('reloaded')) {
    //         localStorage.removeItem('reloaded');
    //     } else {
    //         localStorage.setItem('reloaded', '1');
    //         location.reload();
    //     }
    // },
    mounted() {
        //this.adjustTextareaHeight();
        this.form.opcrs = this.opcrs
        if (localStorage.getItem('reloaded')) {
            // The page was just reloaded. Clear the value from local storage
            // so that it will reload the next time this page is visited.
            localStorage.removeItem('reloaded');
        } else {
            // Set a flag so that we know not to reload the page twice.

            localStorage.setItem('reloaded', '1');
            location.reload();

        }
    },
    methods: {
        halfSem(amount) {
            var ret = parseFloat(amount) / 2;
            return this.format_number_conv(ret, 2, true);
        },
        deleteEla(id) {
            let text = "WARNING!\nAre you sure you want to delete the Executive Legislative Agenda?" + id;
            if (confirm(text) == true) {
                this.$inertia.delete("/ELA/" + id);
            }
        },
        getRowspan(row, ind) {
            let count = 1;
            const index = ind;

            for (let i = parseFloat(index) + 1; i < this.opcrs.length; i++) {
                if (this.opcrs[i].mfo_desc === row) {
                    //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
                    count = parseFloat(count) + 1;
                } else {
                    break;
                }
            }
            return count;
        },
        getRowspan2(row, ind) {
            let count = 1;
            const index = ind;

            for (let i = parseFloat(index) + 1; i < this.opcrs.length; i++) {
                if (this.opcrs[i].office_accountable === row) {
                    //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
                    count = parseFloat(count) + 1;
                } else {
                    break;
                }
            }

            return count;
        },
        getRowspanIndicator(row, ind) {
            let count = 1;
            const index = ind;
            for (let i = parseFloat(index) + 1; i < this.opcrs.length; i++) {
                if (this.opcrs[i].success_indicator === row) {
                    //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
                    count = parseFloat(count) + 1;
                } else {
                    break;
                }
            }

            return count;
        },
        getTotalAverage() {
            var total = 0;
            for (let i = 0; i < this.form.opcrs.length; i++) {
                var rat_e = this.form.opcrs[i].rating_e;
                var rat_q = this.form.opcrs[i].rating_q;
                var rat_t = this.form.opcrs[i].rating_t;
                var avee = parseFloat(rat_e) + parseFloat(rat_q) + parseFloat(rat_t)
                // var ave = parseFloat(this.opcrs[ind].rating_e) + parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);
                var div = 0;
                if (parseFloat(rat_e) >= 1) {
                    div = div + 1;
                }
                if (parseFloat(rat_q) >= 1) {
                    div = div + 1;
                }
                if (parseFloat(rat_t) >= 1) {
                    div = div + 1;
                }
                if (div == 0) {
                    div = 1;
                }
                total = total + (avee / div);
            }
            // total = "44.44555555";
            // this.total_ave = total;
            return this.format_number_conv(total, 2, true);

        },
        getAverageAll() {
            var total_div = 0;
            var total = 0;
            for (let i = 0; i < this.form.opcrs.length; i++) {
                var rat_e = this.form.opcrs[i].rating_e;
                var rat_q = this.form.opcrs[i].rating_q;
                var rat_t = this.form.opcrs[i].rating_t;
                var avee = parseFloat(rat_e) + parseFloat(rat_q) + parseFloat(rat_t)
                var div = 0;
                if (parseFloat(rat_e) >= 1) {
                    div = div + 1;
                }
                if (parseFloat(rat_q) >= 1) {
                    div = div + 1;
                }
                if (parseFloat(rat_t) >= 1) {
                    div = div + 1;
                }
                if (div == 0) {
                    div = 1;
                }
                if (avee > 0) {
                    total_div = total_div + 1;
                }
                // total_div = total_div + div;
                total = total + (avee / div);
            }
            // this.total_divisor = this.form.opcrs.length;
            //this.total_comp

            var aver = parseFloat(total) / total_div
            //(parseFloat(this.form.opcrs.length));
            this.total_ave = aver;
            return this.format_number_conv(aver, 2, true)
        },
        numberInput(value) {
            if (value < 0) {
                this.numberInput = 0;
            } else if (value > 5) {
                this.numberInput = 5;
            }
        },
        disableTyping(event) {
            if (!event.metaKey && !event.ctrlKey) {
                event.preventDefault();
            }
        },
        getAverage(ind) {
            // alert("getAverage");
            if (parseFloat(this.opcrs[ind].rating_e) > 5) {
                this.opcrs[ind].rating_e = 5;
            }
            if (this.opcrs[ind].rating_e == "") {
                this.opcrs[ind].rating_e = 0;
            }
            if (this.opcrs[ind].rating_q == "") {
                this.opcrs[ind].rating_q = 0;
            }
            if (this.opcrs[ind].rating_t == "") {
                this.opcrs[ind].rating_t = 0;
            }
            if (parseFloat(this.opcrs[ind].rating_e) < 0) {
                this.opcrs[ind].rating_e = 0;
            }

            if (parseFloat(this.opcrs[ind].rating_q) > 5) {
                this.opcrs[ind].rating_q = 5;
            }
            if (parseFloat(this.opcrs[ind].rating_q) < 0) {
                this.opcrs[ind].rating_q = 0;
            }

            if (parseFloat(this.opcrs[ind].rating_t) > 5) {
                this.opcrs[ind].rating_t = 5;
            }
            if (parseFloat(this.opcrs[ind].rating_t) < 0) {
                this.opcrs[ind].rating_t = 0;
            }
            var div = 0;
            if (parseFloat(this.opcrs[ind].rating_e) >= 1) {
                div = div + 1;
            }
            if (parseFloat(this.opcrs[ind].rating_q) >= 1) {
                div = div + 1;
            }
            if (parseFloat(this.opcrs[ind].rating_t) >= 1) {
                div = div + 1;
            }
            if (div == 0) {
                div = 1;
            }
            var ave = parseFloat(this.opcrs[ind].rating_e) + parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);
            ave = this.format_number_conv(ave / div, 2, true);
            return ave;

        },
        submit() {
            if (isNaN(this.total_ave)) {
                alert('Some values are empty!');
            } else {
                let text = "WARNING!\nAre you sure you want to save changes to this OPCR?";
                if (confirm(text) == true) {
                    let jsonString = JSON.stringify(this.form.opcrs);
                    this.$inertia.post(
                        "/opcr/form/store",
                        {
                            opcrs: jsonString,
                            FFUNCCOD: this.FFUNCCOD,
                            opcr_id: this.opcr_id
                        },
                        {
                            preserveScroll: true,
                            preserveState: true,
                            replace: true,
                        }
                    )
                }

            }

        },
        showModal() {

            // alert("e_name: " + e_name);
            this.viewlink();
            this.displayModal = true;

        },
        viewlink() {
            var tot = this.getTotalAverage();
            var ave = this.getAverageAll();
            // var linkt = "abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-";
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            // var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2FOPCR_Rating&standAlone=true&fbclid=IwAR1PZD2108LiuvPwxw4IoCBioYDFnY-NdpOVtDe7XKRWoKYcR5bANaX7x1M&standAlone=true&decorate=no&output=pdf';
            // var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2Fopcr_rating_revised&standAlone=true&fbclid=IwAR1PZD2108LiuvPwxw4IoCBioYDFnY-NdpOVtDe7XKRWoKYcR5bANaX7x1M&standAlone=true&decorate=no&output=pdf';
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2Fopcr_ratings_revised_july2025%2Fopcr_ratings_july2025&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2Fopcr_ratings_revised_july2025&standAlone=true&decorate=no&output=pdf'
            var params = '&opcr_id=' + this.opcr_id + '&FFUNCCOD=' + this.FFUNCCOD +
                '&total=' + tot + '&average=' + ave;
            var linkl = linkt + jasper_ip + jasper_link + params;
            this.report_link = linkl;
            return linkl;
        },
        hideModal() {
            this.displayModal = false;
        },
        isPA(opcr_date, type) {
            if (!opcr_date || !type) return false;
            const year = parseInt(opcr_date.match(/\d{4}/)[0]);
            const isFirstSem = opcr_date.includes("JANUARY");
            console.log(opcr_date)
            console.log("Year: " + year + " isFirstSem: " + isFirstSem + " type: " + type);
            if (type === "PA 1") {
                return year < 2025 || (year === 2025 && isFirstSem);
            } else if (type === "PA 2") {
                return year > 2025 || (year === 2025 && !isFirstSem);
            }
            return false;
        }
        // adjustTextareaHeight() {
        //     const textarea = this.$refs.textarea;
        //     if (textarea) {
        //         const rowHeight = textarea.parentNode.offsetHeight; // Height of the table row
        //         textarea.style.height = rowHeight + 'px';
        //     }
        // }
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
