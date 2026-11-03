<template>
    <Head><title>OOEs</title></Head>

    <div class="row gap-20 masonry pos-r">
        <h2>Objects of Expenditure</h2>
        <h5>PROJECT TITLE: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>{{ rev.project_title }}</u></h5>
        <h5>IMPLEMENTATION SCHEDULE: <u>{{ formatMonthDayYear(rev.date_start) }} to {{ formatMonthDayYear(rev.date_end) }}</u></h5>
        <!-- Toolbar (unchanged) -->
        <div class="toolbar-card">...</div>

        <!-- Unsaved changes banner -->
        <div v-if="hasUnsavedChanges" class="alert alert-warning d-flex align-items-center gap-2 py-2 px-3 mb-0" role="alert">
            <i class="ti-alert-circle"></i>
            <span>You have unsaved changes being processed…</span>
        </div>

        <div class="bgc-white p-20 bd">
            <div class="table-responsive">
                <table class="table table-hover align-middle">
                    <!-- Standard column headers -->
                    <thead class="table-head-sticky">
                        <tr>
                            <th>Account Code</th>
                            <th>Particulars</th>
                            <th>Amount</th>
                            <th>Objects of Expenditure</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>

                    <!-- GAD Version 1: category_gad → category → rows -->
                    <template v-if="gad_version == 1">
                        <tbody v-for="(categories, categoryGad) in data" :key="categoryGad">
                            <tr class="table-secondary">
                                <th colspan="5" class="text-start">
                                    <h3>{{ categoryGad }}</h3>
                                </th>
                            </tr>
                            <template v-for="(items, category) in categories" :key="category">
                                <tr class="table-light">
                                    <th colspan="5" class="text-start ps-3">
                                        <h4>{{ category }}</h4>
                                    </th>
                                </tr>
                                <tr v-for="item in items" :key="item.id">
                                    <td>{{ item.account_code }}</td>
                                    <td>{{ item.particulars }}</td>
                                    <td>{{ format_number_conv(item.amount, 2, true) }}</td>
                                    <td>
                                        <select class="form-select" :value="item.idooe" @change="updateField(item.id, 'idooe', $event.target.value)">
                                            <option :value="null"></option>
                                            <option v-for="opt in item.ooe_options" :key="opt.recid" :value="opt.recid">
                                                {{ opt.FOOEDESC }}
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <input class="form-control" type="text" :value="item.remarks" @blur="updateField(item.id, 'remarks', $event.target.value)" />
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </template>

                    <!-- GAD Version 2: category → rows -->
                    <template v-else-if="gad_version == 2">
                        <tbody v-for="(items, category) in data" :key="category">
                            <tr class="table-secondary">
                                <th colspan="5" class="text-start">
                                    <h4>{{ category }}</h4>
                                </th>
                            </tr>
                            <tr v-for="item in items" :key="item.id">
                                <td>{{ item.account_code }}</td>
                                <td>{{ item.particulars }}</td>
                                <td>{{ format_number_conv(item.amount, 2, true) }}</td>
                                <td>
                                    <select class="form-select" :value="item.idooe" @change="updateField(item.id, 'idooe', $event.target.value)">
                                        <option :value="null"></option>
                                        <option v-for="opt in item.ooe_options" :key="opt.recid" :value="opt.recid">
                                            {{ opt.FOOEDESC }}
                                        </option>
                                    </select>
                                </td>
                                <td>
                                    <input class="form-control" type="text" :value="item.remarks" @blur="updateField(item.id, 'remarks', $event.target.value)" />
                                </td>
                            </tr>
                        </tbody>
                    </template>

                    <!-- Fallback: flat list (no grouping) -->
                    <template v-else>
                        <tbody>
                            <tr v-for="item in data" :key="item.id">
                                <td>{{ item.account_code }}</td>
                                <td>{{ item.particulars }}</td>
                                <td>{{ item.amount }}</td>
                                <td>
                                    <select :value="item.idooe" @change="updateField(item.id, 'idooe', $event.target.value)">
                                        <option :value="null">Select OOE</option>
                                        <option v-for="opt in item.ooe_options" :key="opt.id" :value="opt.id">
                                            {{ opt.name || opt.description }}
                                        </option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" :value="item.remarks" @blur="updateField(item.id, 'remarks', $event.target.value)" />
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object,
        rev: Object,
        gad_version: String
    },

    data() {
        return {
            pendingRequests: 0,  // counts in-flight PATCH requests
        };
    },

    computed: {
        hasUnsavedChanges() {
            return this.pendingRequests > 0;
        }
    },

    mounted() {
        window.addEventListener('beforeunload', this.handleBeforeUnload);
    },

    beforeUnmount() {
        window.removeEventListener('beforeunload', this.handleBeforeUnload);
    },

    methods: {
        handleBeforeUnload(event) {
            if (this.hasUnsavedChanges) {
                // Standard way to trigger the browser's built-in "Leave site?" dialog
                event.preventDefault();
                event.returnValue = '';
            }
        },

        updateField(id, column, value) {
            this.pendingRequests++;

            this.$inertia.patch(`/budget/update-field/${id}`, {
                column: column,
                value: value
            }, {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    this.pendingRequests--;
                },
                onError: (errors) => {
                    this.pendingRequests--;
                    if (errors.idooe) {
                        alert(`Update failed: ${errors.idooe}`);
                    } else {
                        console.error(errors);
                        alert('Update failed. Please check your input and try again.');
                    }
                }
            });
        }
    }
};
</script>
