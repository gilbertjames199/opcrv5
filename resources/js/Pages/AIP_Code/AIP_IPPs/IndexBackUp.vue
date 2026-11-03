<template>
    <Head>
        <title>Home</title>
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
                    <Link class="tool-btn tool-btn-primary" :href="`/AIP/create`">
                        <i class="fas fa-plus"></i>
                        AIP Codes
                    </Link>
                </div>
            </div>
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="bgc-white p-20 bd">
                <!-- Tabs Navigation -->
                <ul class="nav nav-tabs" id="aipTabs" role="tablist">
                    <li class="nav-item" role="presentation" v-for="tab in tabs" :key="tab.key">
                        <button
                            class="nav-link"
                            :class="{ active: activeTab === tab.key }"
                            @click="activeTab = tab.key"
                            type="button"
                            role="tab"
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
                                <th scope="col" rowspan="2">Project Title</th>
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
                                <tr class="main-row">
                                    <td><input v-model="item.aip_code" type="text" class="form-control form-control-sm" /></td>
                                    <td>
                                        <button @click="toggleRow(item.id)" class="btn btn-sm btn-link" style="text-align: left; padding: 0;">
                                            <i :class="expandedRows[item.id] ? 'fas fa-chevron-down' : 'fas fa-chevron-right'"></i>
                                            {{ item.project_title }}
                                        </button>
                                    </td>
                                    <td>{{ item.date_start }}</td>
                                    <td>{{ item.date_end }}</td>
                                    <td></td>
                                    <td>
                                        <select v-model="item.paps.source_of_funds" class="form-select form-select-sm">
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
                                        <select v-model="item.paps.sector" class="form-select form-select-sm">
                                            <option value="">-- Select --</option>
                                            <option value="Economic Services">Economic Services</option>
                                            <option value="General Public Services Sector">General Public Services Sector</option>
                                            <option value="Other Services">Other Services</option>
                                            <option value="Social Services Sector">Social Services Sector</option>
                                        </select>
                                    </td>
                                    <td>{{ item.paps.subsector }}</td>
                                </tr>
                                <tr
                                    v-if="expandedRows[item.id] && item.activity_project && item.activity_project.length"
                                    v-for="activity in item.activity_project"
                                    :key="`${item.id}-activity-${activity.id}`"
                                    class="sub-row"
                                >
                                    <td colspan="2" style="padding-left: 40px;">
                                        <strong>Activity:</strong> {{ activity.activity ? activity.activity.description : '' }}
                                    </td>
                                    <td colspan="2"></td>
                                    <td>{{ activity.expected_output ? activity.expected_output.description : '' }}</td>
                                    <td></td>
                                    <td>{{ calculatePS(activity).toFixed(2) }}</td>
                                    <td>{{ calculateMOOE(activity).toFixed(2) }}</td>
                                    <td>{{ calculateFE(activity).toFixed(2) }}</td>
                                    <td>{{ calculateCO(activity).toFixed(2) }}</td>
                                    <td>{{ calculateTotal(activity).toFixed(2) }}</td>
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
        year_props: String
    },
    data() {
        return {
            search: '',
            year: '',
            expandedRows: {},
            activeTab: 'gen_pub',
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
            ];
        },
        activeItems() {
            const tab = this.tabs.find(t => t.key === this.activeTab);
            if (!tab || !tab.data) return [];
            return Array.isArray(tab.data) ? tab.data : (tab.data.data ?? Object.values(tab.data));
        },
    },
    mounted() {
        this.year = this.year_props;
    },
    methods: {
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
        }
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
    background-color: #dc3545;
    color: white;
    font-weight: bold;
    border-radius: 50%;
    font-size: 14px;
}
</style>
