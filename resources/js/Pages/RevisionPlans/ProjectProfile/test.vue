<template>
    <Head>
        <title>Edit Project Profile</title>
    </Head>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Profile/Design </h3>

        </div>
        <div class="col-md-9">




                <div class="bgc-white p-20 bd">


                    <!-- BUDGETARY REQUIREMENTS************************************************** -->
                    <div>
                        <h3>
                            VI. <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                            ? `/budget/${paps.id}`:null">
                                Estimated Cost/Budgetary Requirements
                            </Link>
                        </h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th colspan="3">Particulars</th>
                                    <th>Account Code</th>
                                    <th>Amount</th>
                                    <th>Source</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                            <tbody v-for="(gadGroups, category) in groupedBudget" :key="category">

                                <!-- CATEGORY HEADER -->
                                <tr class="table-primary">
                                    <td colspan="8" class="fw-bold text-uppercase">
                                        {{ formatCategory(category) }}
                                    </td>
                                </tr>

                                <!-- GAD + NON-GAD GROUPS -->
                                <template v-for="(rows, gadType) in gadGroups" :key="gadType">

                                    <!-- SUB HEADER (GAD / NON-GAD) -->
                                    <tr class="table-secondary">
                                        <td></td>
                                        <td colspan="7" class="fw-bold">
                                            <div class="d-flex justify-content-between align-items-center w-100">
                                                {{ gadType }}
                                                <button class="btn btn-success btn-sm text-white"
                                                    @click="showBudgetModal(paps.id,gadType,category)">
                                                    ADD NEW
                                                </button>
                                            </div>

                                        </td>
                                    </tr>

                                    <!-- DATA ROWS -->
                                     <tr v-for="row in rows" :key="row.id">
                                        <td></td>
                                        <td></td>
                                        <td>{{ row.particulars }}</td>
                                        <td>{{ row.account_code }}</td>
                                        <td>{{ row.amount?.toLocaleString() }}</td>
                                        <td>{{ row.source }}</td>

                                        <!-- EDIT -->
                                        <td>
                                            <button class="btn btn-primary btn-sm text-white"
                                                @click="showBudgetModal(form.id,gadType,category)">
                                                ✏ Edit
                                            </button>
                                        </td>

                                        <!-- DELETE -->
                                        <td>
                                            <button class="btn btn-danger btn-sm text-white"
                                                @click="deleteData(row.id, 'budget_requirements', row.particulars)">
                                                🗑 Delete
                                            </button>
                                        </td>
                                    </tr>

                                    <!-- NO DATA ROW -->
                                    <tr v-if="rows.length === 0">
                                        <td colspan="8" class="text-center text-muted">
                                            No entries under {{ gadType }}
                                        </td>
                                    </tr>



                                </template>

                            </tbody>
                        </table>

                    </div>
                </div>

        </div>



    </div>
    <BudgetModal v-if="BudgetModalVisible" @close-modal-event="closeBudgetModal" title="BUDGETARY REQUIREMENTS">
        dsadasdasd
    </BudgetModal>
    {{ form }}

</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Places from "@/Shared/PlacesShared";
import QuillEditorC from '@/Shared/QuillEditorShared'
import CommentModal from "@/Shared/ModalDynamicTitle";
import BudgetModal from "@/Shared/ModalDynamicTitle";
//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        auth: Object,
        editData: Object,
        // paps: Object,
        duplicate: Object,
        idpaps: Number,
        paps_all: Object,
        source: String,
        hgdgs: Object,
        popsp_agencies: Object,
        office: Object,
        all_comments: Object,

        //***********BUDGETARY REQUIREMENTS TOTAL */
        s_mooe_gad: Number,
        s_mooe_non: Number,
        s_cap_gad: Number,
        s_cap_non: Number,
        s_ps_gad: Number,
        s_ps_non: Number,
        s_fe_gad: Number,
        s_fe_non: Number,
        budget_requirements: Object,
    },
    components: {

        Places: () => new Promise((resolve) => {
            setTimeout(() => {
                resolve(Places)
            }, 2000)
        }),
        QuillEditorC

    },
    data() {
        return {
            paps: [],
            submitted: false,
            maxWords: 200,
            act_words: 0,
            //FORM for Revision Plans
            form: useForm({

            }),
            budget_modal: [],
            total_intended: 0,
            pageTitle: "",



            //EDITS*****************************
            unsaved: false,

            //BUDGET MODAL***********************
            BudgetModalVisible: false
        };
    },
    computed: {


    },

    methods: {
        //BUDGETARY REQUIREMENTS
        formatCategory(key) {
            const map = {
                maintenanceOperating: 'Maintenance, Operating, and Other Expenses',
                personnelServices: 'Personnel Services',
                financialExpenses: 'Financial Expenses',
                capitalOutlay: 'Capital Outlay'
            };
            return map[key] || key;
        },
        closeBudgetModal(){
            this.BudgetModalVisible=false;
        },
        showBudgetModal(revision_plan_id, gadType, category) {
            // open edit modal with row data
            alert(revision_plan_id)
            this.BudgetModalVisible=true;
            console.log('Edit row', revision_plan_id, gadType, category);
        },
        deleteData(id, table, particulars) {
            // perform delete
            console.log('Delete', id, table, particulars);
        }
    },
};
</script>


