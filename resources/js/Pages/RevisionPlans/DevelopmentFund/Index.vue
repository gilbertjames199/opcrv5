<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <h3>{{ source === 'dev' ? 'Engineering PPAs' : 'Other Sources' }}</h3>


        <div class="toolbar-card">
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
                    <Link class="tool-btn tool-btn-primary" :href="`/development-fund/create/${id}`">
                        <i class="fas fa-plus"></i>
                        {{ source === 'dev' ? 'Add Engineering PPAs' : 'Add Other Sources' }}
                    </Link>
                    <button class="tool-btn tool-btn-outline" @click="expandAll()">
                        <i class="fas fa-expand"></i> Expand All
                    </button>
                    <button class="tool-btn tool-btn-outline" @click="collapseAll()">
                        <i class="fas fa-compress"></i> Collapse All
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
                <!-- Search Filter -->
                <div class="filter-group">
                    <label class="filter-label">
                        <i class="fas fa-search"></i> Search Filter
                    </label>
                    <input type="text" class="filter-input" placeholder="Filter by keyword">
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; gap: 10px; align-items: flex-end; margin-left: auto;">
                    <button class="tool-btn tool-btn-primary" @click="">
                        <i class="fas fa-search"></i> Search
                    </button>
                    <button class="tool-btn tool-btn-outline" @click="filter = false">
                        <i class="fas fa-times"></i> Clear
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
                                <th rowspan="2">AIP Code</th>
                                <th rowspan="2" colspan="2">
                                    <i class="fas fa-building"></i> Program/Project/Activity Title/Description
                                </th >
                                <th scope="col" rowspan="2">
                                    <i class="fas fa-align-left"></i> Implementing Office
                                </th>
                                <th rowspan="1" colspan="2" class="text-center">
                                    SCHEDULE OF IMPLEMENTATION
                                </th>
                                <th rowspan="2">
                                    EXPECTED OUTPUTS
                                </th>
                                <th rowspan="2">FUNDING SOURCE</th>
                                <th rowspan="1" colspan="5" class="align-middle text-center">AMOUNT</th>
                                <!-- <th rowspan="1" colspan="2" class="text-center">
                                    AMOUNT OF CLIMATE CHANGE EXPENDITURES
                                </th> -->
                                <!-- <th scope="col">
                                    <i class="fas fa-industry"></i> Sector
                                </th> -->
                                <th rowspan="2" scope="col" class="text-end">
                                    <i class="fas fa-cogs"></i> Action
                                </th>
                            </tr>
                            <tr>
                                <th>Date From</th>
                                <th>Date To</th>
                                <th>PS</th>
                                <th>MOOE</th>
                                <th>FE</th>
                                <th>Capital Outlay</th>
                                <th>Total</th>

                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="dat in data">
                                <tr >
                                    <td>{{dat.aip_code}}</td>
                                    <td>
                                        <button class="btn btn-sm btn-link" @click="toggleExpanded(dat.id)" style="padding: 0; margin-right: 8px;">
                                            <i :class="expanded[dat.id] ? 'fas fa-chevron-down' : 'fas fa-chevron-right'"></i>
                                        </button>

                                    </td>
                                    <td>
                                        <b>{{ dat.project_title }}</b>
                                    </td>
                                    <td>
                                        <!-- {{dat.paps.office.FFUNCTION }}
                                        -->
                                        {{ dat.paps?.office?.FFUNCTION ?? '' }}

                                        <!-- <div align="justify" v-html="dat.goal_description"></div> -->
                                        <!-- {{ truncateText(getPlainTextWithoutTags(dat.goal_description), 10) }} -->
                                    </td>
                                    <!-- DATE FROM -->
                                    <td>{{ dat.date_start }}</td>
                                    <!-- DATE TO -->
                                    <td>{{ dat.date_end }}</td>
                                    <!-- EXPECTED OUTPUTS -->
                                    <td></td>
                                    <!-- FUNDING SOURCE-->
                                    <td>{{ sourceOfFundsText(dat.paps?.source_of_funds) }}</td>
                                    <!-- PS -->
                                    <td></td>
                                    <!-- MOOE -->
                                    <td></td>
                                    <!-- FE -->
                                    <td></td>
                                    <!-- CAPITAL OUTLAY -->
                                    <td></td>
                                    <!-- TOTAL -->
                                    <td></td>
                                    <!-- <td></td> -->
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
                                                    <Link class="dropdown-item" :href="`/development-fund/create/${dat.id}`">Edit</Link>
                                                </li>
                                                <li>
                                                    <Link class="text-danger dropdown-item" @click="deleteSectoral(dat.id, dat.project_title)">
                                                    Delete</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="expanded[dat.id]" v-for="act in dat.activity_project" class="table-secondary">
                                    <td>{{ act.aip_code }}</td>
                                    <td></td>
                                    <td>{{ act.activity?.description }}</td>
                                    <td>{{ dat.paps?.office?.FFUNCTION ?? '' }}</td>
                                    <td>{{ dat.date_start }}</td>
                                    <td>{{ dat.date_end }}</td>
                                    <td>
                                        <p v-for="exp in act.expected_output">{{ exp.description }}</p>
                                    </td>
                                    <td></td>
                                    <td>{{ format_number_conv(parseFloat(act.ps_q1??0)+parseFloat(act.ps_q2??0)+parseFloat(act.ps_q3??0)+parseFloat(act.ps_q4??0),2,true) }}</td>
                                    <td>{{ format_number_conv(parseFloat(act.mooe_q1??0)+parseFloat(act.mooe_q2??0)+parseFloat(act.mooe_q3??0)+parseFloat(act.mooe_q4??0),2,true) }}</td>
                                    <td>{{ format_number_conv(parseFloat(act.fe_q1??0)+parseFloat(act.fe_q2??0)+parseFloat(act.fe_q3??0)+parseFloat(act.fe_q4??0),2,true) }}</td>
                                    <td>{{ format_number_conv(parseFloat(act.co_q1??0)+parseFloat(act.co_q2??0)+parseFloat(act.co_q3??0)+parseFloat(act.co_q4??0),2,true) }}</td>
                                    <td>{{ format_number_conv(parseFloat(act.ps_q1??0)+parseFloat(act.ps_q2??0)+parseFloat(act.ps_q3??0)+parseFloat(act.ps_q4??0) +
                                     parseFloat(act.mooe_q1??0)+parseFloat(act.mooe_q2??0)+parseFloat(act.mooe_q3??0)+parseFloat(act.mooe_q4??0) +
                                     parseFloat(act.fe_q1??0)+parseFloat(act.fe_q2??0)+parseFloat(act.fe_q3??0)+parseFloat(act.fe_q4??0) +
                                     parseFloat(act.co_q1??0)+parseFloat(act.co_q2??0)+parseFloat(act.co_q3??0)+parseFloat(act.co_q4??0),2, true) }}
                                    </td>
                                    <td></td>
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
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p>
                            <!-- {{ data.from }} to {{ data.to }} of -->
                            <!-- {{ data.total }} entries -->
                        </p>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
export default {
    props: {
        auth: Object,
        data: Object,
        id: String,
        source: String
    },
    data() {
        return {
            search: this.$props.filters?.search || '',
            filter: false,
            expanded: {}
        }
    },
    components: {
        Pagination, Filtering,
    },

    methods: {
        toggleExpanded(rowId) {
            this.expanded[rowId] = !this.expanded[rowId];
        },
        expandAll() {
            this.data.data.forEach((dat) => {
                this.expanded[dat.id] = true;
            });
        },
        collapseAll() {
            this.expanded = {};
        },
        showCreate() {
            this.$inertia.get(
                "/targets/create",
                {
                    raao_id: this.raao_id
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    // replace: true,
                }
            );
        },
        deleteSectoral(id, title) {
            let text = "WARNING!\nAre you sure you want to delete the PPA with thte title: " + title + "?";
            if (confirm(text) == true) {
                this.$inertia.delete("/development-fund/" + id+"/delete", {
                    preserveScroll: true,
                    preserveState: true,
                });
            }
        },
        // getAccomplishment(tar_id) {
        //     this.$inertia.get(
        //         "/accomplishments",
        //         {
        //             idtarget: tar_id
        //         },
        //         {
        //             preserveScroll: true,
        //             preserveState: true,
        //             // replace: true,
        //         }
        //     );
        // },
        getPercent(accomp, targqty) {
            var accSum = 0;
            accomp.forEach(myFunction);
            function myFunction(item) {
                accSum += parseFloat(item.accomplishment_qty)

            }
            var percentt = (accSum / targqty) * 100
            percentt = this.format_number(percentt, 2, true)
            return percentt;
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
