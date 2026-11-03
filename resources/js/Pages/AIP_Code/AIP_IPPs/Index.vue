<template>
    <Head>
        <title>AIP</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <h3>Annual Investment Plan ({{ year_props }})</h3>

        <div class="toolbar-card">
            <div class="toolbar-row">
                <div class="toolbar-left">
                    <div class="search-wrapper">
                        <i class="fas fa-search search-icon"></i>
                        <input v-model="search" type="text" class="filter-input" placeholder="Search...">
                    </div>
                    <select v-model="year" @change="filterByYear" class="form-select form-select-sm" style="width: 150px; margin-left: 10px;">
                        <option value="">-- Filter by Year --</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                    </select>
                </div>
                <div class="toolbar-right">
                    <button @click="expandAll" class="tool-btn tool-btn-secondary me-2">
                        <i class="fas fa-expand"></i>
                        Expand All
                    </button>
                    <button @click="collapseAll" class="tool-btn tool-btn-secondary me-2">
                        <i class="fas fa-compress"></i>
                        Collapse All
                    </button>

                    <button @click="inheritAipCodes" class="tool-btn tool-btn-secondary me-2">
                        <i class="fas fa-link"></i>
                        Inherit AIP Codes
                    </button>
                    <!-- <Link class="tool-btn tool-btn-primary" :href="`/AIP/create`">
                        <i class="fas fa-plus"></i>
                        AIP Codes
                    </Link> -->
                </div>
            </div>
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <!-- Legend / Instructions Card -->
            <div class="bgc-white bd mb-3">
                <!-- Header -->
                <div
                    class="px-20 py-2 d-flex align-items-center justify-content-between"
                    style="background-color: #612f03; border-radius: 2px 2px 0 0; cursor: pointer; padding-left: 20px !important; padding-right: 20px !important;"
                    @click="showGuide = !showGuide"
                >
                    <span class="fw-bold text-white" style="font-size: 14px;">
                        <i class="fas fa-info-circle me-2"></i>Guide
                    </span>
                    <i
                        class="fas text-white"
                        :class="showGuide ? 'fa-chevron-up' : 'fa-chevron-down'"
                    ></i>
                </div>

                <!-- Collapsible Body -->
                <div v-show="showGuide" class="p-20 row g-3">

                    <!-- Buttons -->
                    <div class="col-md-6">
                        <p class="fw-semibold mb-2 text-muted" style="font-size: 13px; text-transform: uppercase; letter-spacing: .5px;">Toolbar Buttons</p>
                        <ul class="list-unstyled mb-0" style="font-size: 13px;">
                            <li class="mb-2">
                                <span class="badge bg-secondary me-2"><i class="fas fa-calendar"></i></span>
                                <strong>Year Filter</strong> — Filters the entire table to show only records within the selected calendar year. Changing the value immediately reloads the page with updated data.
                            </li>
                            <li class="mb-2">
                                <span class="badge bg-secondary me-2"><i class="fas fa-expand"></i></span>
                                <strong>Expand All</strong> — Shows all activity rows under each project in the current tab.
                            </li>
                            <li class="mb-2">
                                <span class="badge bg-secondary me-2"><i class="fas fa-compress"></i></span>
                                <strong>Collapse All</strong> — Hides all activity rows, showing only the top-level project rows.
                            </li>
                            <li class="mb-2">
                                <span class="badge bg-secondary me-2"><i class="fas fa-link"></i></span>
                                <strong>Inherit AIP Codes</strong> — Copies AIP codes from the previous year's approved plan into the current year's records where no code has been assigned yet.
                            </li>
                            <li class="mb-2">
                                <span class="badge bg-secondary me-2"><i class="fas fa-eye"></i></span>
                                <strong>View Project Details</strong> — Opens a new tab to display detailed information about the selected project.
                            </li>
                        </ul>
                    </div>

                    <!-- Editable Columns -->
                    <div class="col-md-4">
                        <p class="fw-semibold mb-2 text-muted" style="font-size: 13px; text-transform: uppercase; letter-spacing: .5px;">Editable Columns</p>
                        <ul class="list-unstyled mb-0" style="font-size: 13px;">
                            <li class="mb-2">
                                <span class="badge bg-warning text-dark me-2">AIP Code</span>
                                Type directly into the field — changes are saved automatically on blur.
                            </li>
                            <li class="mb-2">
                                <span class="badge bg-warning text-dark me-2">Source of Fund</span>
                                Select from the dropdown — saved automatically on change.
                            </li>
                            <li class="mb-2">
                                <span class="badge bg-warning text-dark me-2">Sector</span>
                                Select from the dropdown — saved automatically on change.
                            </li>
                        </ul>
                    </div>

                    <!-- Search Bar -->
                    <div class="col-md-2">
                        <p class="fw-semibold mb-2 text-muted" style="font-size: 13px; text-transform: uppercase; letter-spacing: .5px;">Search Bar</p>
                        <p style="font-size: 13px;" class="mb-0">
                            Filters records across <strong>all tabs</strong> by AIP Code, Project Title, Office, Sector, Subsector, or Activity description. Results update automatically as you type.
                        </p>
                    </div>

                </div>
            </div>
            <!-- Tabs Navigation -->
            <div class="bgc-white p-20 bd">
                <!-- Tabs Navigation -->
                <ul class="nav nav-tabs" id="aipTabs" role="tablist">
                    <li class="nav-item" role="presentation" v-for="tab in filteredTabs" :key="tab.key" >
                        <button
                            class="nav-link"
                            :class="{ active: activeTab === tab.key }"
                            @click="activeTab = tab.key"
                            type="button"
                            role="tab"
                            v-if="getLength(tab.data) > 0"
                        >
                            {{ tab.label }}
                            <span class="badge-circle">{{ getLength(tab.data) }}</span>
                        </button>
                    </li>
                </ul>

                <!-- Single Shared Table -->
                <div class="table-responsive mt-3">
                    <table class="table table-hover align-middle table-sm">
                        <thead class="table-head-sticky">
                            <tr>
                                <th scope="col" rowspan="2">AIP Code</th>
                                <th scope="col" rowspan="2">Program/Project/Activity Title/Description</th>
                                <th scope="col" rowspan="2">Implementing Office</th>
                                <th scope="col" colspan="2">Schedule of Implementation</th>
                                <th scope="col" rowspan="2">Expected Outputs</th>
                                <th scope="col" rowspan="2">Source of Fund</th>
                                <th scope="col" colspan="5">Amount</th>
                                <th scope="col" rowspan="2">Sector</th>
                                <th scope="col" rowspan="2">Subsector</th>
                            </tr>
                            <tr>
                                <th scope="col">Date From</th>
                                <th scope="col">Date To</th>
                                <th scope="col">PS</th>
                                <th scope="col">MOOE</th>
                                <th scope="col">FE</th>
                                <th scope="col">CO</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="item in activeItems" :key="item.id">
                                <!-- MAIN ROWS -->
                                <tr class="main-row">
                                    <td>
                                        <!-- {{ item.aip_code }} -->
                                        <!-- <input v-model="item.aip_code" type="text" class="form-control form-control-sm" /> -->
                                        <input
                                            v-model="item.aip_code"
                                            type="text"
                                            class="form-control form-control-sm"
                                            style="min-width: 160px;"
                                            @blur="autosave(item.id, 'revision_plans', 'aip_code', item.aip_code)"
                                        />

                                    </td>
                                    <td>
                                        <button @click="toggleRow(item.id)" class="btn btn-sm btn-link" style="text-align: left; padding: 0;">
                                            <i :class="expandedRows[item.id] ? 'fas fa-chevron-down' : 'fas fa-chevron-right'"></i>
                                            {{ item.project_title }}
                                        </button>
                                        <a :href="`/revision/view/project/paps/${item.id}`"
                                            target="_blank"
                                            class="btn btn-sm btn-link text-success ms-1"
                                            title="View project details"
                                            style="padding: 0;"
                                        >
                                            <i class="fas fa-eye"></i>
                                        </a>
                                        <br /><br />
                                        <!-- <textarea v-model="item.paps.MOV" class="form-control form-control-sm overflow-hidden" rows="1"
                                            style="resize:none;"
                                            @input="autoResize($event)"
                                            @change="autosave(item.paps.id, 'program_and_projects', 'MOV', item.paps.MOV)"
                                            :ref="'mov_' + item.id"
                                        >
                                        </textarea> -->
                                        <textarea
                                            v-model="item.paps.MOV"
                                            class="form-control form-control-sm"
                                            style="resize:none; overflow:hidden; min-height:38px;"
                                            @input="autoResize($event)"
                                            @focus="autoResize($event)"
                                            @change="autosave(item.paps.id, 'program_and_projects', 'MOV', item.paps.MOV)"
                                            :ref="'mov_' + item.id"
                                        >
                                        </textarea>
                                        <!-- {{ item.paps }} -->
                                    </td>
                                    <td>{{ item?.paps?.office?.FFUNCTION }}</td>
                                    <td>{{ item.date_start }}</td>
                                    <td>{{ item.date_end }}</td>
                                    <td></td>
                                    <td>
                                        <!-- <select v-model="item.paps.source_of_funds" class="form-select form-select-sm"> -->
                                        <select
                                            v-model="item.paps.source_of_funds"
                                            class="form-select form-select-sm"
                                            @change="autosave(item.paps.id, 'program_and_projects', 'source_of_funds', item.paps.source_of_funds)"
                                        >
                                            <option value="">-- Select --</option>
                                            <option value="dev">20% Development Fund</option>
                                            <option value="gen_fund">General Fund</option>
                                            <option value="ldrrmf">LDRRMF</option>
                                            <option value="other">Other Sources</option>
                                        </select>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <!-- <select v-model="item.paps.sector" class="form-select form-select-sm"> -->
                                        <select
                                            v-model="item.paps.sector"
                                            class="form-select form-select-sm"
                                            @change="autosave(item.paps.id, 'program_and_projects', 'sector', item.paps.sector)"
                                        >
                                            <option value="">-- Select --</option>
                                            <option value="Economic Services">Economic Services</option>
                                            <option value="General Public Services Sector">General Public Services Sector</option>
                                            <option value="Other Services">Other Services</option>
                                            <option value="Social Services Sector">Social Services Sector</option>
                                        </select>
                                    </td>
                                    <td>{{ item.paps.subsector }}</td>
                                </tr>
                                <!-- CHILD ROWS -->
                                <tr
                                    v-if="expandedRows[item.id] && item.activity_project && item.activity_project.length"
                                    v-for="activity in item.activity_project"
                                    :key="`${item.id}-activity-${activity.id}`"
                                    class="sub-row"
                                >
                                    <!-- Col 1: AIP Code column — empty, acts as indent anchor -->
                                    <td>
                                        <input
                                            v-model="activity.aip_code"
                                            type="text"
                                            class="form-control form-control-sm"
                                            style="min-width: 160px;"
                                            @blur="autosave(activity.id, 'activity_projects', 'aip_code', activity.aip_code)"
                                        />
                                    </td>

                                    <!-- Col 2: Project Title column — activity description -->
                                    <td style="padding-left: 20px;">
                                        {{ activity.activity ? activity.activity.description : '' }}

                                    </td>

                                    <!-- Col 3-4: Date From / Date To -->
                                    <td></td>
                                    <td colspan="2"></td>

                                    <!-- Col 5: Expected Outputs — loop through sub-array -->
                                    <td>
                                        <template v-if="activity.expected_output && activity.expected_output.length">
                                            <div v-for="(output, idx) in activity.expected_output" :key="idx">
                                                <div>
                                                    <span v-if="expected_output_quantity(output)>0 && shouldDisplayQuantity(output.description)" >
                                                        <b>{{ expected_output_quantity(output) }}</b>
                                                    </span>

                                                    {{ output.description }}
                                                </div>
                                                <hr v-if="activity.expected_output.length>1 && idx !== activity.expected_output.length - 1" style="border-color: white; border-style: solid;" />
                                            </div>



                                            <!-- <br /> -->
                                        </template>
                                    </td>

                                    <!-- Col 6: Source of Fund -->
                                    <td></td>

                                    <!-- Col 7-11: Amounts — formatted -->
                                    <td>{{ format_number_conv(calculatePS(activity), 2, true) }}</td>
                                    <td>{{ format_number_conv(calculateMOOE(activity), 2, true) }}</td>
                                    <td>{{ format_number_conv(calculateFE(activity), 2, true) }}</td>
                                    <td>{{ format_number_conv(calculateCO(activity), 2, true) }}</td>
                                    <td>{{ format_number_conv(calculateTotal(activity), 2, true) }}</td>

                                    <!-- Col 12-13: Sector / Subsector -->
                                    <td colspan="2"></td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
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
        gen_pub: Object,
        econ: Object,
        soc: Object,
        ldrrmf: Object,
        others: Object,
        dev: Object,
        year_props: String,
        filters: Object,
    },
    data() {
        return {

            search: this.filters?.search ?? '',
            year: '',
            expandedRows: {},
            activeTab: 'gen_pub',
            showGuide: false,   // ← add this
        }
    },
    components: {
        Pagination, Filtering,
    },
    computed: {
        tabs() {
            return [
                { key: 'gen_pub',  label: 'General Public',    data: this.gen_pub },
                { key: 'econ',     label: 'Economic Services', data: this.econ },
                { key: 'soc',      label: 'Social Services',   data: this.soc },
                { key: 'ldrrmf',   label: 'LDRRMF',            data: this.ldrrmf },
                { key: 'others',   label: 'Other Sources',     data: this.others },
                { key: 'dev',      label: '20% Development Fund', data: this.dev },
            ];
        },
        activeItems() {
            const tab = this.tabs.find(t => t.key === this.activeTab);
            if (!tab || !tab.data) return [];
            return Array.isArray(tab.data) ? tab.data : (tab.data.data ?? Object.values(tab.data));
        },
        filteredTabs() {
            return this.tabs.filter(tab => this.getLength(tab.data) > 0);
        },
    },
    mounted() {
        this.resizeAllMOVTextareas();
        this.year = this.year_props;
        this.expandAll();
    },
    watch: {
        activeTab() {
            this.expandAll();
        },
        filteredTabs: {
            immediate: true,
            handler(tabs) {
                if (!tabs.length) {
                    this.activeTab = null;
                    return;
                }

                // If current tab is empty or invalid → switch to first available
                const exists = tabs.some(t => t.key === this.activeTab);
                if (!exists) {
                    this.activeTab = tabs[0].key;
                }
            }
        },
        search(value) {
            clearTimeout(this._searchTimeout);
            this._searchTimeout = setTimeout(() => {
                this.$inertia.get('/ipp_aip_codes', {
                    search: value,
                    year: this.year,
                }, {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                });
            }, 400);
        },
    },
    methods: {
        autoResize(event) {

            this.$nextTick(() => {

                const textarea = event.target;

                textarea.style.height = 'auto';

                textarea.style.height = textarea.scrollHeight + 'px';
            });
        },

        resizeAllMOVTextareas() {

            this.$nextTick(() => {

                Object.keys(this.$refs).forEach(refKey => {

                    if (!refKey.startsWith('mov_')) {
                        return;
                    }

                    let textarea = this.$refs[refKey];

                    if (Array.isArray(textarea)) {
                        textarea = textarea[0];
                    }

                    if (textarea) {

                        textarea.style.height = 'auto';

                        textarea.style.height =
                            textarea.scrollHeight + 'px';
                    }
                });
            });
        },

        getLength(prop) {
            if (!prop) return 0;
            if (Array.isArray(prop)) return prop.length;
            if (prop.data && Array.isArray(prop.data)) return prop.data.length;
            return Object.keys(prop).length;
        },
        filterByYear() {
            this.$inertia.get('/ipp_aip_codes', { year: this.year }, {
                preserveScroll: true,
                preserveState: false,
                replace: true,
            });
        },
        toggleRow(itemId) {
            this.expandedRows[itemId] = !this.expandedRows[itemId];
        },
        expandAll() {
            this.activeItems.forEach(item => {
                this.expandedRows[item.id] = true;
            });
        },
        collapseAll() {
            this.activeItems.forEach(item => {
                this.expandedRows[item.id] = false;
            });
        },
        calculatePS(activity_project) {
            return parseFloat(activity_project.ps_q1 || 0) +
                   parseFloat(activity_project.ps_q2 || 0) +
                   parseFloat(activity_project.ps_q3 || 0) +
                   parseFloat(activity_project.ps_q4 || 0);
        },
        calculateMOOE(activity_project) {
            return parseFloat(activity_project.mooe_q1 || 0) +
                   parseFloat(activity_project.mooe_q2 || 0) +
                   parseFloat(activity_project.mooe_q3 || 0) +
                   parseFloat(activity_project.mooe_q4 || 0);
        },
        calculateFE(activity_project) {
            return parseFloat(activity_project.fe_q1 || 0) +
                   parseFloat(activity_project.fe_q2 || 0) +
                   parseFloat(activity_project.fe_q3 || 0) +
                   parseFloat(activity_project.fe_q4 || 0);
        },
        calculateCO(activity_project) {
            return parseFloat(activity_project.co_q1 || 0) +
                   parseFloat(activity_project.co_q2 || 0) +
                   parseFloat(activity_project.co_q3 || 0) +
                   parseFloat(activity_project.co_q4 || 0);
        },
        calculateTotal(activity_project) {
            return this.calculatePS(activity_project) +
                   this.calculateMOOE(activity_project) +
                   this.calculateFE(activity_project) +
                   this.calculateCO(activity_project);
        },
        autosave(id, tableName, columnName, value) {
            this.$inertia.patch('/ipp_aip_codes/autosave', {
                id,
                table:  tableName,
                column: columnName,
                value,
            }, {
                preserveScroll: true,
                preserveState:  true,
            });
        },
        inheritAipCodes() {
            this.$inertia.patch('/ipp_aip_codes/inherit_aip_codes', {}, {
                preserveScroll: true,
                preserveState:  false, // false so the table refreshes with updated aip_codes
            });
        },
        expected_output_quantity(expected_output) {
            if (!expected_output) return 0;
            var q1 = expected_output.physical_q1;
            var q2 = expected_output.physical_q2;
            var q3 = expected_output.physical_q3;
            var q4 = expected_output.physical_q4;
            console.log(expected_output.description, q1, q2, q3, q4)
            var total = parseFloat(q1 || 0) + parseFloat(q2 || 0) + parseFloat(q3 || 0) + parseFloat(q4 || 0);
            return total;
        },
        shouldDisplayQuantity(description){
            if(!description) return false

            const text = description.trim()

            // 1. If description starts with a number → DO NOT display quantity
            if(/^\d+/.test(text)){
                return false
            }

            /*
                2. If description follows:
                <verb> <number> ...
                OR
                <verb1>, <verb2>, and <verbN> <number> ...

                Example matches:
                "Conduct 5 trainings"
                "Prepare, review, and submit 3 reports"
            */

            const verbNumberPattern = /^[A-Za-z,\s]+?\s\d+\b/

            if(verbNumberPattern.test(text)){
                return false
            }


            // 3. Ends with:
            //    - number
            //    - number + unit
            //    - "- number"
            //    - "- number unit"
            const endNumberPattern = /(-\s*)?\d+(\.\d+)?(\s+[A-Za-z]+)?\s*$/;

            if (endNumberPattern.test(text)) {
                return false;
            }

            // Otherwise, display quantity
            return true
        },
    },
};
</script>

<style>
.badge-circle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin-left: 8px;
    background-color: #c2026f;
    color: white;
    font-weight: bold;
    border-radius: 50%;
    font-size: 14px;
}
</style>
