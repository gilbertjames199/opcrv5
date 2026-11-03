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
                    <h3>Cash Disbursement Forecast</h3>
                </div>
                <div class="toolbar-actions">
                    <div class="search-wrapper">
                        <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                    </div>
                    <button class="tool-btn tool-btn-primary" @click="printCDF()">
                        <i class="fas fa-print"></i> Print
                    </button>
                    <Link class="tool-btn tool-btn-secondary" :href="`/OPCRpaps/direct`">
                        <i class="fas fa-times"></i>
                    </Link>
                </div>
            </div>
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <!-- <tr class="bg-secondary text-white">
                                <th>Monitoring</th>
                                <th>Action</th>
                            </tr> -->
                            <tr class="bg-success text-white">
                                <th colspan="15">Project Title</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            <template v-for="dat in data">
                                <tr >
                                    <td colspan="14"><h5>{{ dat.project_title.toUpperCase() }}</h5></td>
                                    <td class="text-end">
                                        <button class="btn btn-primary btn-sm mL-2 text-white" @click="printCDF(dat.revision_plan_id)">Print</button>
                                    </td>
                                    <td >
                                        <div class="dropdown dropstart" >
                                            <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                </svg>
                                            </button>
                                            <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                                <li><Link class="dropdown-item" :href="`/Monitoring/${dat.id}/edit`">Edit</Link></li>
                                                <li><Link class="text-danger dropdown-item" @click="deleteOutput(dat.id)">Delete</Link></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="bg-secondary text-white">
                                    <th></th>
                                    <th>Particulars</th>
                                    <th>Appropriations</th>
                                    <th>January</th>
                                    <th>February</th>
                                    <th>March</th>
                                    <th>April</th>
                                    <th>May</th>
                                    <th>June</th>
                                    <th>July</th>
                                    <th>August</th>
                                    <th>September</th>
                                    <th>October</th>
                                    <th>November</th>
                                    <th>December</th>
                                    <th>Total</th>
                                </tr>
                                <template v-for="cash in dat.cash_disbursement_forecast_accounts">
                                    <tr v-if="cash.items.length>0">
                                        <td colspan="16" style="font-weight: bold;">
                                            {{  cash.category.toUpperCase() }}

                                        </td>
                                    </tr>
                                    <tr v-for="item in cash.items" v-if="cash.items.length>0">
                                        <td></td>
                                        <td >
                                            {{ item.particulars }}
                                        </td>
                                        <td style="text-align: right">
                                            {{ format_number_conv(item.amount, 2, true) }}
                                        </td>
                                        <td>
                                            <input type="number"
                                                class="form-control form-control-sm"
                                                :disabled="isQuarterDisabled(dat.implementation, 'q1', cash.category)"
                                                v-model="item.january" @change="saveAmounts(item.id, item.january,'january')">
                                        </td>
                                        <td>
                                            <input type="number"
                                                class="form-control form-control-sm"
                                                :disabled="isQuarterDisabled(dat.implementation, 'q1', cash.category)"
                                                v-model="item.february" @change="saveAmounts(item.id, item.february,'february')">
                                        </td>
                                        <td>
                                            <input type="number"
                                                class="form-control form-control-sm"
                                                :disabled="isQuarterDisabled(dat.implementation, 'q1', cash.category)"
                                                v-model="item.march" @change="saveAmounts(item.id, item.march,'march')">
                                        </td>
                                        <td>
                                            <input type="number" class="form-control form-control-sm"
                                            :disabled="isQuarterDisabled(dat.implementation, 'q2', cash.category)"
                                            v-model="item.april" @change="saveAmounts(item.id, item.april,'april')">
                                        </td>
                                        <td>
                                            <input type="number" class="form-control form-control-sm"
                                            :disabled="isQuarterDisabled(dat.implementation, 'q2', cash.category)"
                                            v-model="item.may" @change="saveAmounts(item.id, item.may,'may')">
                                        </td>
                                        <td>
                                            <input type="number" class="form-control form-control-sm"
                                            :disabled="isQuarterDisabled(dat.implementation, 'q2', cash.category)"
                                            v-model="item.june" @change="saveAmounts(item.id, item.june,'june')">
                                        </td>
                                        <td>
                                            <input type="number" class="form-control form-control-sm"
                                            :disabled="isQuarterDisabled(dat.implementation, 'q3', cash.category)"
                                            v-model="item.july" @change="saveAmounts(item.id, item.july,'july')">
                                        </td>
                                        <td>
                                            <input type="number" class="form-control form-control-sm"
                                            :disabled="isQuarterDisabled(dat.implementation, 'q3', cash.category)"
                                                v-model="item.august" @change="saveAmounts(item.id, item.august,'august')">
                                        </td>
                                        <td>
                                            <input type="number" class="form-control form-control-sm"
                                                :disabled="isQuarterDisabled(dat.implementation, 'q3', cash.category)"
                                            v-model="item.september" @change="saveAmounts(item.id, item.september,'september')">
                                        </td>
                                        <td>
                                            <input type="number" class="form-control form-control-sm"
                                            :disabled="isQuarterDisabled(dat.implementation, 'q4', cash.category)"
                                            v-model="item.october" @change="saveAmounts(item.id, item.october,'october')">
                                        </td>
                                        <td>
                                            <input type="number" class="form-control form-control-sm"
                                            :disabled="isQuarterDisabled(dat.implementation, 'q4', cash.category)"
                                            v-model="item.november" @change="saveAmounts(item.id, item.november,'november')">
                                        </td>
                                        <td>
                                            <input type="number" class="form-control form-control-sm"
                                            :disabled="isQuarterDisabled(dat.implementation, 'q4', cash.category)"
                                            v-model="item.december" @change="saveAmounts(item.id, item.december,'december')">
                                        </td>
                                        <td>
                                            {{ getTotalPerAccountCode(item) }}
                                            <p class="text-danger"
                                            v-if="getTotalPerAccountCode(item)!==format_number_conv(item.amount, 2, true)">
                                                Total disbursement does not equal to Appropriation.
                                                <span>
                                                    (Difference:
                                                    {{ format_number_conv(parseFloat(item.amount) - parseFloat(getTotalPerAccountCode(item).replace(/,/g, '')), 2, true) }})
                                                </span>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr v-if="cash.items.length>0">
                                        <td></td>
                                        <td><b>TOTAL</b></td>
                                        <td>{{ format_number_conv(getTotalAmount(), 2, true) }}</td>
                                        <td colspan="2">
                                            1st Quarter Total
                                        </td>
                                        <td>{{ format_number_conv(computeCategoryTotals(cash.items,'q1'),2,true) }}</td>
                                        <td colspan="2">
                                            2nd Quarter Total
                                        </td>
                                        <td>{{ format_number_conv(computeCategoryTotals(cash.items,'q2'),2,true) }}</td>
                                        <td colspan="2">
                                            3rd Quarter Total
                                        </td>
                                        <td>{{ format_number_conv(computeCategoryTotals(cash.items,'q3'),2,true) }}</td>
                                        <td colspan="2">
                                            4th Quarter Total
                                        </td>
                                        <td>{{ format_number_conv(computeCategoryTotals(cash.items,'q4'),2,true) }}</td>
                                    </tr>
                                    <tr v-if="cash.items.length>0">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td colspan="2">
                                            <!-- {{ dat.implementation }} -->
                                            1st Quarter Wokplan Total
                                        </td>
                                        <td>
                                            {{ format_number_conv(getQuarterlyTotal(dat.implementation, 'q1', cash.category, cash.category), 2, true) }}
                                            <p class="text-danger"
                                            v-if="computeCategoryTotals(cash.items,'q1')!==getQuarterlyTotal(dat.implementation, 'q1', cash.category)">
                                                First Quarter CDF total is not equal to first quarter Workplan total.
                                                (Difference:
                                                {{ format_number_conv(computeCategoryTotals(cash.items,'q1') - getQuarterlyTotal(dat.implementation, 'q1', cash.category), 2, true) }})
                                            </p>
                                        </td>
                                        <td colspan="2">
                                            <!-- {{ dat.implementation }} -->
                                            2nd Quarter Wokplan Total
                                        </td>
                                        <td colspan="2">
                                            {{ format_number_conv(getQuarterlyTotal(dat.implementation, 'q2', cash.category), 2, true) }}
                                            <p class="text-danger"
                                            v-if="computeCategoryTotals(cash.items,'q2')!==getQuarterlyTotal(dat.implementation, 'q2', cash.category)">
                                                Second Quarter CDF total is not equal to second quarter Workplan total.
                                                (Difference:
                                                {{ format_number_conv(computeCategoryTotals(cash.items,'q2') - getQuarterlyTotal(dat.implementation, 'q2', cash.category), 2, true) }})
                                            </p>
                                        </td>
                                        <td>3rd Quarter Wokplan Total  </td>
                                        <td >{{ format_number_conv(getQuarterlyTotal(dat.implementation, 'q3', cash.category), 2, true) }}
                                            <p class="text-danger"
                                            v-if="computeCategoryTotals(cash.items,'q3')!==getQuarterlyTotal(dat.implementation, 'q3', cash.category)">
                                                Third Quarter CDF total is not equal to third quarter Workplan total.
                                                (Difference:
                                                {{ format_number_conv(computeCategoryTotals(cash.items,'q3') - getQuarterlyTotal(dat.implementation, 'q3', cash.category), 2, true) }})
                                            </p>
                                        </td>
                                        <td colspan="2">4th Quarter Wokplan Total  </td>
                                        <td>{{ format_number_conv(getQuarterlyTotal(dat.implementation, 'q4', cash.category), 2, true) }}
                                            <p class="text-danger"
                                            v-if="computeCategoryTotals(cash.items,'q4')!==getQuarterlyTotal(dat.implementation, 'q4', cash.category)">
                                                Fourth Quarter CDF total is not equal to fourth quarter Workplan total.
                                                (Difference:
                                                {{ format_number_conv(computeCategoryTotals(cash.items,'q4') - getQuarterlyTotal(dat.implementation, 'q4', cash.category), 2, true) }})
                                            </p>
                                        </td>
                                    </tr>
                                </template>
                                <tr>
                                    <td colspan="2"></td>
                                    <td colspan="2"><b>Prepared by:</b></td>
                                    <td colspan="5">
                                        <input type="text" v-model="dat.prepared_by" @change="saveSignatories(dat.id, dat.prepared_by,'prepared_by', dat.revision_plan_id)">
                                    </td>
                                    <td colspan="2"><b>Approved by:</b></td>
                                    <td colspan="5">
                                        <input type="text" v-model="dat.approved_by" @change="saveSignatories(dat.id, dat.approved_by,'approved_by', dat.revision_plan_id)">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2"></td>
                                    <td colspan="2"><b>Position:</b></td>
                                    <td colspan="5">
                                        <input type="text" v-model="dat.position_prepared_by" @change="saveSignatories(dat.id, dat.position_prepared_by,'position_prepared_by', dat.revision_plan_id)">
                                    </td>
                                    <td colspan="2"><b>Position:</b></td>
                                    <td colspan="5">
                                        <input type="text" v-model="dat.position_approved_by" @change="saveSignatories(dat.id, dat.position_approved_by,'position_approved_by', dat.revision_plan_id)">
                                    </td>
                                </tr>

                            </template>

                        </tbody>
                    </table>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <pagination :next="data.next_page_url" :prev="data.prev_page_url" />
                    </div>
                </div>
                <!-- <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p >
                            {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries
                        </p>
                    </div>
                </div> -->

            </div>
        </div>
        <PrintModal v-if="PrintModalVisible" @close-modal-event="PrintModalVisible = false" title="CASH DISBUREMENT FORECAST PRINTING">
            <div class="d-flex justify-content-center">
                <!-- {{ aip_printLink }} -->
                <!-- {{ printLink }} -->
                <iframe :src="printLink" style="width:100%; height:500px" />
            </div>
        </PrintModal>
    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import PrintModal from "@/Shared/ModalDynamicTitle";
export default {
    props: {
        data: Object,
        revid: Number,
    },
    data() {
        return{
            PrintModalVisible: false,
            printLink: ''
        }
    },
    components: {
        Pagination, Filtering, PrintModal
    },

    methods:{

        showCreate(){
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
        deleteOutput(id) {
            let text = "WARNING!\nAre you sure you want to delete the Monitoring?"+id;
              if (confirm(text) == true) {
                this.$inertia.delete("/Monitoring/" + id);
            }
        },
        getAccomplishment(tar_id){
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
        getPercent(accomp, targqty){
            var accSum=0;
            accomp.forEach(myFunction);
            function myFunction(item){
                accSum += parseFloat(item.accomplishment_qty)

            }
            var percentt = (accSum/targqty)*100
            percentt=this.format_number(percentt,2,true)
            return percentt;
        },
        saveAmounts(id, data, column, rev_id){
            axios.patch(`/cdf/${rev_id}`, {
                id: id,
                data: data,
                column: column
            })
            .then(res => {
                console.log("Updated", res.data);
            })
            .catch(err => {
                console.error(err);
            });
        },
        saveSignatories(id, data,column){
            axios.patch(`/cdf/signatories/${this.revision_plan_id}`, {
                id: id,
                data: data,
                column: column
            })
            .then(res => {
                console.log("Updated", res.data);
            })
            .catch(err => {
                console.error(err);
            });
        },
        getQuarterlyTotal(implementation, quarter_period, category){
            const prefixes = {
                'Capital Outlay': 'co_',
                'Financial Expenses': 'fe_',
                'Maintenance, Operating, and Other Expenses': 'mooe_',
                'Personnel Services': 'ps_'
            };

            // Determine prefix based on category
            const prefix = prefixes[category];
            if (!prefix) return 0;

            const field = `${prefix}${quarter_period}`;
            // console.log("category:", category, "prefix:", prefix);
            // console.log("Calculating total for field:", field);
            // Sum all values under the field
            return implementation.reduce((sum, item) => {
                console.log("Item value for", field, ":", item[field]);
                console.log("Current sum:", sum);
                const value = parseFloat(item[field] ?? 0);
                return sum + (isNaN(value) ? 0 : value);
            }, 0);
        },
        isQuarterDisabled(implementation, quarter, category) {
            const total = this.getQuarterlyTotal(implementation, quarter, category);
            return total < 1;
        },
        computeCategoryTotals(items,quarter){
            if (!items || items.length === 0) return 0;

            const monthsMap = {
            q1: ['january', 'february', 'march'],
            q2: ['april', 'may', 'june'],
            q3: ['july', 'august', 'september'],
            q4: ['october', 'november', 'december'],
            };

            const months = monthsMap[quarter];
            if (!months) return 0;

            let total = 0;

            items.forEach(item => {
            months.forEach(month => {
                const val = parseFloat(item[month]) || 0; // ← strictly month values
                total += val;
            });
            });

            return total;
        },
        getTotalPerAccountCode(item){
            const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
            let total = 0;
            months.forEach(month => {
                const val = parseFloat(item[month]) || 0;
                total += val;
            });
            return this.format_number_conv(total, 2, true);
        },
        printCDF(revid){
            this.PrintModalVisible = true;
            var params="&revision_plan_id="+revid;
            this.printLink = 'https://'+
            this.jasper_ip+
            `jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2FCash_Disbursement_Forecast&standAlone=true&decorate=no&output=pdf`
            + params;
        },
        getTotalAmount() {
            let total = 0;

            this.data.forEach(dat => {
                dat.cash_disbursement_forecast_accounts?.forEach(cash => {
                    cash.items?.forEach(item => {
                        total += Number(item.amount) || 0;
                    });
                });
            });

            return total;
        }
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
