<template>
    <Head>
        <title>PROGRAMS</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <div class="peers">
                <h3 v-if="my_source=='budget'">Budget Proposal </h3>
                <h3 v-if="my_source=='direct'">Programs</h3>
                <h3 v-if="my_source=='rev_app'">Review/Approve Project Profile</h3>
            </div>
            <div class="peers">
                <Link :href="`/paps/direct`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Link>
            </div>
        </div>
        <!-- FILTERING SECTION -->
        <div class="masonry-item w-100">
            <div class="toolbar-card">
                <!-- Top Row: Actions -->
                <div class="toolbar-row toolbar-actions">
                    <div class="toolbar-left">
                        <span class="toolbar-label">
                            <i class="fas fa-sliders-h"></i> FILTER PANEL
                        </span>
                    </div>
                    <div class="toolbar-right">
                        <button class="tool-btn tool-btn-primary" @click="showPrint()">
                            <i class="fas fa-print"></i> Print
                        </button>
                        <button class="tool-btn tool-btn-primary" @click="showAIPModalMethod()">
                            <i class="fas fa-file-alt"></i> AIP
                        </button>
                        <button class="tool-btn tool-btn-primary" @click="showIppListModal()">
                            <i class="fas fa-list"></i> IPP List
                        </button>
                        <button class="tool-btn tool-btn-outline" @click="showFilter()">
                            <i class="fas fa-filter"></i> Filter
                        </button>
                    </div>
                </div>

                <!-- Divider -->
                <div class="toolbar-divider"></div>

                <!-- Bottom Row: Filters -->
                <div class="toolbar-row toolbar-filters">
                    <!-- Search -->
                    <div class="filter-group filter-group-grow">
                        <label class="filter-label">
                            <i class="fas fa-search"></i> Search
                        </label>
                        <div class="search-wrapper">
                            <i class="fas fa-search search-icon"></i>
                            <input v-model="search" type="text" class="filter-input" placeholder="Search programs...">
                        </div>
                    </div>

                    <!-- Comments Filter -->
                    <div class="filter-group">
                        <label class="filter-label">
                            <i class="fas fa-comment"></i> Comments
                        </label>
                        <select v-model="has_comments_filtering" class="filter-select" @change="filterPrograms(search, filter_FFUNCCOD)">
                            <option value="">All Plans</option>
                            <option value="1">Plans with comments</option>
                            <option value="0">Plans with no comments</option>
                        </select>
                    </div>

                    <!-- Year Filter -->
                    <div class="filter-group">
                        <label class="filter-label">
                            <i class="fas fa-calendar-alt"></i> Year
                        </label>
                        <select v-model="year_filtering_d" class="filter-select" @change="filterPrograms(search, filter_FFUNCCOD)">
                            <option value="">All Years</option>
                            <option v-for="year in pcr_years" :value="year">{{ year }}</option>
                        </select>
                    </div>

                    <!-- Office Filter -->
                    <div class="filter-group">
                        <label class="filter-label">
                            <i class="fas fa-building"></i> Office
                        </label>
                        <select class="filter-select" v-model="filter_FFUNCCOD" @change="filterPrograms(search, filter_FFUNCCOD)">
                            <option value=""></option>
                            <option v-for="office in offices" :value="office.FFUNCCOD">{{ office.FFUNCTION }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="peers fxw-nw jc-sb ai-c">
            <!-- <h5>Program/Project: <u>{{ paps.paps_desc }}</u></h5> -->
        </div>
        <div class="masonry-sizer col-md-6"></div>
        <modal-right-align v-if="showModalRightAlign" @closeFilter="showModalRightAlign = false"
            :title="'Budget Details'">
            <h3>Project Title: <u>{{ project_title }}</u></h3>
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="add_budget_prep">Add Budget Prep</button>
            <!-- {{ budget_data }} -->
            <div class="table-responsive">
                <table class="table table-sm table-borderless table-striped table-hover" v-if="budget_data.length > 0">
                    <thead>
                        <tr class="bg-secondary text-white">
                            <th>OOE</th>
                            <th>Account Code</th>
                            <th>Particular</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="dat in budget_data">
                            <td>{{ dat.idooe }}</td>
                            <td>{{ dat.account_code }}</td>
                            <td>{{ dat.particulars }}</td>
                            <td class="text-end">{{ format_number_conv(dat.amount,2,true) }}</td>
                            <td >
                                <Button
                                    class="btn btn-primary btn-sm text-white"
                                    @click="editBudgetPrep(dat.id)"
                                    title="Edit Budget"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                    </svg>
                                </Button>&nbsp;
                                <Button
                                    class="btn btn-danger btn-sm text-white"
                                    @click="deleteBudgetPrep(dat.id)"
                                    title="Delete Budget"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                    </svg>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"></td>
                            <td><b>TOTAL (Planned Amount)</b></td>
                            <td class="text-end"><u>{{ format_number_conv(budget_sum,2,true) }}</u></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="2"></td>
                            <td><b>TOTAL</b></td>
                            <td class="text-end"><u>{{ format_number_conv(total_budget,2,true) }}</u></td>
                            <td></td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </modal-right-align>
        <ModalRightAlignCRUD v-if="showModalRightAlignCRUD" @closeFilter="closeCRUD"
            :title="'Budget Details'">
            <h3>Project Title: <u>{{ project_title }}</u></h3>
            <form @submit.prevent="submit()">
                <div class="mb-3">
                    <label for="idooe" class="form-label">OOE</label>
                    <!-- <input type="text" class="form-control" id="idooe" v-model="form.idooe">
                    <select class="form-select mt-2" id="idooe" v-model="form.idooe">
                        <option value="">Select OOE</option>
                        <option v-for="ooe in ooes" :value="ooe.id">{{ ooe.description }}</option>
                    </select> -->
                    <multiselect :options="ooe_options" :searchable="true" v-model="form.idooe" label="label"
                        track-by="label" @close="setCode">
                    </multiselect>
                    <!-- <div @keyup.enter="addOOE($event)">
                        <multiselect :options="ooe_description" :searchable="true" v-model="form.idooe" @select="setCode"
                            :value="ooe_id" @search-change="typed = $event">
                        </multiselect>
                    </div> -->
                </div>
                <div class="mb-3">
                    <label for="account_code" class="form-label">Account Code</label>
                    <input type="text" class="form-control" id="account_code" v-model="form.account_code">
                </div>
                <div class="mb-3">
                    <label for="particulars" class="form-label">Particulars</label>
                    <input type="text" class="form-control" id="particulars" v-model="form.particulars">
                </div>
                <div class="mb-3">
                    <label for="amount" class="form-label">Amount</label>
                    <input type="number" class="form-control" id="amount" v-model="form.amount">
                </div>
                <div class="mb-3">
                    <label for="category" class="form-label">Category</label>
                    <select class="form-select" id="category" v-model="form.category">
                        <option value="Maintenance, Operating, and Other Expenses">Maintenance, Operating, and Other Expenses</option>
                        <option value="Capital Outlay">Capital Outlay</option>
                        <option value="Financial Expenses">Financial Expenses</option>
                        <option value="Personnel Services">Personnel Services</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="source" class="form-label">Source</label>
                    <input type="text" class="form-control" id="source" v-model="form.source" placeholder="e.g. General Fund, Regular MOOE, etc.">
                </div>
                <div class="mb-3">
                    <label for="category_gad" class="form-label">Category GAD</label>
                    <select class="form-select" id="category_gad" v-model="form.category_gad">
                        <option value="GAD">GAD</option>
                        <option value="NON-GAD">NON-GAD</option>
                    </select>
                </div>
                <input type="hidden" v-model="form.revision_plan_id" >
                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
                <button type="button" class="btn btn-danger mt-3 text-white" @click="" :disabled="form.processing">
                    Cancel
                </button>
            </form>
        </ModalRightAlignCRUD>
        <ModalRightAppropriation v-if="showModalAppropriation" @closeFilter="showModalAppropriation=false" :title="'Budget Proposed'">
            <h3>Project Title: <u>{{ project_title }}</u></h3>
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="add_budget_proposal">Add Budget</button>&nbsp;
            <!-- <button class="btn btn-sm btn-primary mT-5 text-white" @click="add_budget_proposal">Add Budget</button> -->
            <div class="table-responsive">
                <table class="table table-sm table-borderless table-striped table-hover" v-if="budget_data.length > 0">
                    <thead>
                        <tr class="bg-secondary text-white">
                            <th>Object of Expenditure</th>
                            <th>Account Code</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="dat in budget_data">
                            <td>{{ dat.object_of_expenditure }}</td>
                            <td>{{ dat.account_code }}</td>
                            <td class="text-end">{{ format_number_conv(dat.budget_year,2,true) }}</td>
                            <td>
                                <Button
                                    class="btn btn-primary btn-sm text-white"
                                    @click="editBudgetApprop(dat.id)"
                                    title="Edit Budget"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                    </svg>
                                </Button>&nbsp;
                                <Button
                                    class="btn btn-danger btn-sm text-white"
                                    @click="deleteBudgetApprop(dat.id)"
                                    title="Delete Budget"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                    </svg>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1"></td>
                            <td><b>TOTAL (Budget Amount)</b></td>
                            <td class="text-end"><u>{{ format_number_conv(budget_sum,2,true) }}</u></td>
                            <td></td>
                        </tr>
                         <tr>
                            <td colspan="1"></td>
                            <td><b>TOTAL (IPP Amount)</b></td>
                            <td class="text-end"><u>{{ format_number_conv(total_budget,2,true) }}</u></td>
                            <td></td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </ModalRightAppropriation>
        <ModalRightAppropriationCrud v-if="showModalAppropriationCrud" @closeFilter="closeCRUDApprop"
            :title="'Budget Proposed'">showModalAppropriationCrud: {{ showModalAppropriationCrud }}
            <h3>Project Title: <u>{{ project_title }}</u></h3>
            <form @submit.prevent="submitBudgetProposal()">
                <!--&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&-->
                <input type="hidden" required>
                <input type="hidden" v-model="form.idpaps" class="form-control" autocomplete="positionchrome-off">
                <input type="hidden" v-model="form.id" class="form-control" autocomplete="positionchrome-off">
                <input type="hidden" v-model="form.revision_plan_id" class="form-control" autocomplete="positionchrome-off">

                <div>
                    revision_plan_id: {{ form.revision_plan_id }}
                    idpaps: {{ form.idpaps }}
                </div>
                <div hidden>
                    <!-- <label for="">Chart of Accounts *</label>
                    <div @keyup.enter="addAccount($event)">
                        <multiselect :options="accounts" :searchable="true" v-model="chart_selected" @select="setCode"
                            :value="chart_selected" @search-change="typed = $event">
                        </multiselect>
                    </div> -->

                    <!-- <label>ACCOUNT CODE </label>
                    <input type="number" class="form-control" v-model="form.account_code" @change="searchByAccountCode" />
                    <div class="fs-6 c-red-500" v-if="form.errors.account_code">{{ form.errors.account_code }}</div> -->

                    <label for="">Object of Expenditure</label>
                    <input type="text" v-model="form.object_of_expenditure" class="form-control"
                        autocomplete="positionchrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.object_of_expenditure">{{
                        form.errors.object_of_expenditure }}</div>
                </div>
                <!--*****************************-->
                <label>YEAR</label>
                <input type="number" class="form-control" v-model="form.year" />
                <div class="fs-6 c-red-500" v-if="form.errors.year">{{ form.errors.year }}</div>

                <label>OFFICE</label>
                <!-- {{ form.FFUNCCOD }} -->
                <select class="form-control" v-model="form.FFUNCCOD">
                    <option></option>
                    <option v-for="functione in functions" :value="functione.FFUNCCOD">{{ functione.FFUNCTION }}</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.FFUNCCOD">{{ form.errors.FFUNCCOD }}</div>

                <label>RAAO TYPE</label>
                <!-- {{ form.raaotype }} -->
                <select class="form-control" v-model="form.raaotype" ref="raaoSelect" @click="filterProgram">
                    <option></option>
                    <option value="1">Personnel Services</option>
                    <option value="2">Maintenance, Operating, and Other Expenses</option>
                    <option value="3">Capital Outlay</option>
                    <option value="4">Programs</option>
                    <option value="5">Projects</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.raaotype">{{ form.errors.raaotype }}</div>

                <label>PROGRAM</label>&nbsp;
                <div>
                    <multiselect :options="formattedPrograms" :searchable="true" v-model="form.idprogram" label="label"
                        track-by="label" @close="loadOOE">
                    </multiselect>
                </div>
                <div class="fs-6 c-red-500" v-if="form.errors.raaotype">{{ form.errors.raaotype }}</div>
                <!-- <br>{{ form.idprogram }} -->
                <!-- {{ form }} @keyup.enter="searchPrograms($event)"-->
                <!--******************************-->
                <label>Objects of Expenditure</label>&nbsp;
                <!-- idooe: {{ form.idooe }} -->

                <div>
                    <multiselect :options="formattedOOEs" :searchable="true" v-model="form.idooe" label="label"
                    :disabled="no_ooe == true"
                        track-by="label" @close="setOOEValue">
                    </multiselect>
                </div>
                <!-- {{ formattedOOEs }} -->
                <div>
                    <input
                        type="checkbox"
                        v-model="no_ooe"
                        @change="setOOEAndChartCheckBox(no_ooe)"
                    />
                    <i>Check this box if the Object of Expenditure you're looking for is missing. </i>
                </div>

                <label>Account Code</label>&nbsp;{{ form.account_code }}
                <div>
                    <!-- selected_pcr_option: {{ selected_pcr_option }} -->
                    <multiselect ref="Accounts" :options="accounts" :searchable="true" v-model="form.account_code"
                        label="label" track-by="label" :disabled="no_ooe == false"
                        @close="selected_ccountcode"
                    >
                    </multiselect>
                </div>
                <div class="fs-6 c-red-500" v-if="form.errors.GAD">{{ form.errors.GAD }}</div>
                <label>PAST YEAR </label>
                <input type="text" class="form-control" v-model="computed_pastyear" :disabled="no_ooe == false" />
                <div class="fs-6 c-red-500" v-if="form.errors.past_year">{{ form.errors.past_year }}</div>

                <label>FIRST SEMESTER (Actual) </label>
                <input type="text" class="form-control" :value="computed_sem1" :disabled="no_ooe == false" />
                <div class="fs-6 c-red-500" v-if="form.errors.first_sem">{{ form.errors.first_sem }}</div>

                <label>SECOND SEMESTER (Estimate) </label>
                <input type="text" class="form-control" :value="computed_sem2" :disabled="no_ooe == false" />
                <div class="fs-6 c-red-500" v-if="form.errors.second_sem">{{ form.errors.second_sem }}</div>

                <label>TOTAL </label>
                <input type="text" class="form-control" :value="getTotal12" readonly />

                <label>BUDGET YEAR PROPOSED </label>
                <input type="number" class="form-control" v-model="form.budget_year" />
                <div class="fs-6 c-red-500" v-if="form.errors.budget_year">{{ form.errors.budget_year }} OR the budget year
                    value is greater than the value recorded at the LBP Form No. 2</div>

                <label>CATEGORY</label>
                <!-- <input type="text" class="form-control" v-model="form.category" /> -->
                <select class="form-control" v-model="form.category" >
                    <option></option>
                    <option value="Personnel Services">Personnel Services</option>
                    <option value="Maintenance, Operating, and Other Expenses">Maintenance, Operating, and Other Expenses</option>
                    <option value="Capital Outlay">Capital Outlay</option>
                    <option value="Financial Expenses">Financial Expenses</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.category">{{ form.errors.category }}</div>

                <label>GAD CATEGORY</label>
                <select class="form-control" v-model="form.GAD">
                    <option>NON-GAD</option>
                    <option>GAD</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.GAD">{{ form.errors.GAD }}</div>
                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">


                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn text-white btn-primary mt-3 text-white" @click="submit()"
                    :disabled="form.processing">
                    Save changes
                </button>
                <!--&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&-->
            </form>
        </ModalRightAppropriationCrud>
        <Printing v-if="print" @closeFilter="print = false">
            Select Form
            <select v-model="lbp_version" class="form-control">
                <option value="0"></option>
                <option value="2">LBP Form 2</option>
                <option value="4">LBP Form 4</option>
            </select>
            <br>
            <div v-if="lbp_version > 2">
                Target Fiscal Year
                <br>
                <input v-model="dates" class="form-control" type="number" name="year" min="1900" max="2099" step="1"
                    oninput="javascript: if (this.value.length > 4) this.value = this.value.slice(0, 4);" />
                <br>
                <br>
            </div>

            <button class="btn btn-primary btn-sm mL-2 text-white"
                @click="showModal(FFUNCCOD2.FFUNCCOD, FFUNCCOD2.FFUNCTION, dates)">Print</button>
            <!-- <button class="btn btn-primary btn-sm mL-2 text-white"
                @click="showModal(data.data[0].FFUNCCOD, data.data[0].FFUNCTION, dates)">Print</button> -->
        </Printing>
        <LBP2Modal v-if="displaylbp2" @close-modal-event="hideLBP2Modal">
            <div class="d-flex justify-content-center">

                <iframe :src="my_link" style="width:100%; height:500px" />
            </div>
        </LBP2Modal>
        <AIPModal v-if="showAIPModal" @close-modal-event="hideAIPModal">
            <div class="d-flex justify-content-center">
                <!-- {{ aip_printLink }} -->
                <iframe :src="aip_printLink" style="width:100%; height:500px" />
            </div>
            <br>
            <button class="btn btn-primary btn-sm mL-2 text-white" @click="exportAIP()">Export to Excel</button>
            <button class="btn btn-primary btn-sm mL-2 text-white" @click="updateAIPStatus('LDC0')"
                v-if="my_source==='rev_app'"
            >
                Submit AIP for LDC Review
            </button>
            <button class="btn btn-primary btn-sm mL-2 text-white" v-if="my_source==='rev_app'"
            @click="updateAIPStatus('SP0', year_period)">
                Submit AIP for SP Review
            </button>

            <!-- LDC0 -Submitted for LDC Review;
            LDC-1 -Returned by LDC;
            LCD1 -Approved by LDC;
            SP0 -Submitted for SP Review;
            SP-1 -Returned by SP;
            SP1 -Approved by SP -->
        </AIPModal>
        <div class="masonry-item w-100">
            <div class="bgc-white p-20 bd">
                <!-- Table Header with Title and Stats -->
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h4 class="text-primary mb-0">
                        <i class="fas fa-list-ul me-2"></i>
                        Programs
                    </h4>
                    <button @click="fitTableWidth"
                            class="btn btn-sm btn-outline-primary"
                            title="Adjust zoom to fit table width">
                        <i class="fas fa-compress me-2"></i>
                        Fit Width to Visible Area
                    </button>
                </div>

                <!-- Responsive Table Container -->
                <div class="table-responsive" ref="tableResponsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-head-sticky">
                            <tr>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-hashtag me-2"></i>AIP Code
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-file-alt me-2"></i>Program Title
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-calendar me-2"></i>Date Submitted
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-code-branch me-2"></i>Version
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-tag me-2"></i>Type
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-building me-2"></i>Implementing Offices
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-dollar-sign me-2"></i>Planned Amount
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-star me-2"></i>HGDG Score
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-calendar-alt me-2"></i>Year
                                </th>
                                <th class="border-0 fw-semibold text-primary text-center">
                                    <i class="fas fa-eye me-2"></i>View
                                </th>
                                <th class="border-0 fw-semibold text-primary text-center" v-if="my_source=='rev_app'">
                                    <i class="fas fa-check me-2"></i>Approve
                                </th>
                                <th class="border-0 fw-semibold text-primary text-center" v-if="my_source=='rev_app'">
                                    <i class="fas fa-edit me-2"></i>Full Edit
                                </th>
                                <th class="border-0 fw-semibold text-primary text-center" v-if="my_source=='rev_app' || my_source=='approved'">
                                    <i class="fas fa-undo me-2"></i>Return
                                </th>
                                <th class="border-0 fw-semibold text-primary text-center" v-if="my_source=='budget'">
                                    <i class="fas fa-cogs me-2"></i>Budget Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data">
                                <td></td>
                                <td>{{ dat.project_title }}
                                    <!-- {{dat.budget_sum}} vs {{ dat.imp_amount }} -->
                                    <span style="color:red; font-weight: bold" >
                                        {{ amountStatus(dat.budget_sum, dat.imp_amount) }}
                                    </span >
                                    <span v-if="dat.comments_count" style="color: red; font-weight: bold" class="blink">
                                        Review the project for comments
                                    </span>
                                </td>
                                <td>
                                    <!-- {{ formatDate(dat.project_profile_tracking.created_at) }} -- {{ dat.project_profile_tracking.created_at }}
                                       -->
                                    <span v-if="dat.project_profile_tracking?.created_at">
                                    {{ formatDateTime(dat.project_profile_tracking.created_at) }}
                                    </span>
                                </td>
                                <td>{{ dat.version }}</td>
                                <td>{{ formatProjectType(dat.type) }}</td>
                                <td>{{ dat.FFUNCTION }}</td>
                                <th class="text-end">
                                    {{ format_number_conv(dat.budget_sum,2,true) }}
                                </th>
                                <td>{{ dat.hgdg_score }}</td>
                                <td>{{ dat.year }}</td>
                                <!-- View -->
                                <td>
                                    <Link
                                        class="btn btn-success btn-sm"
                                        :href="`/revision/view/project/paps/${dat.id}?source=${my_source}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                        </svg>
                                    </Link>
                                    <!-- {{ dat }} -->
                                </td>
                                <!-- Review/Approve -->
                                <td v-if="my_source=='rev_app'">
                                    <!-- Review -->
                                     <!-- {{ dat.id }}<br>
                                    {{ dat.budget_sum }}, {{ dat.imp_amount }} {{  dat.comments_count }}
                                    sttus:  {{ dat.status }} -gad status: {{ dat.gad_status }}
                                    --return_request_status: {{ dat.return_request_status }} <br> -->
                                     <!-- -{{ dat }} -->
                                      <!-- :disabled="!canReviewApproveGAD()" -->
                                       <!-- backgroundColor: canReviewApproveGAD() ? 'blue' : '#a0c4ff', -->
                                    <span v-if="my_source=='rev_app'">
                                        <button
                                            v-if="dat.gad_status=='0'"
                                            @click="statusAction(dat, 1, 'gad_status')"

                                            :style="{
                                            padding: '4px 10px',
                                            border: 'none',
                                            borderRadius: '4px',
                                            backgroundColor: 'blue' ,
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontWeight: 'bold',
                                            marginRight: '4px'
                                            }"
                                        >
                                            GAD Review
                                        </button>
                                        <button
                                            v-if="dat.status == '0' && dat.gad_status=='1'"

                                            @click="statusAction(dat, 1, 'status')"
                                            :style="{
                                                padding: '4px 10px',
                                                border: 'none',
                                                borderRadius: '4px',
                                                backgroundColor: 'blue',
                                                color: 'white',
                                                cursor: 'pointer',
                                                fontWeight: 'bold',
                                                marginRight: '4px'
                                            }"
                                        >
                                            Approve
                                        </button>
                                    </span>
                                    <span v-else>
                                        <button
                                            v-if="dat.status == '1' && parseInt(dat.number_of_clones)<1 && dat.type==='p'"
                                            :style="{
                                            padding: '4px 10px',
                                            border: 'none',
                                            borderRadius: '4px',
                                            backgroundColor: 'darkgreen',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontWeight: 'bold',
                                            marginRight: '4px'
                                            }"
                                        >
                                            Generate Project Design
                                        </button>
                                    </span>
                                    <!-- {{ reviewers }}
                                    reviewers
                                    {{ auth.user.recid }}
                                    canReviewApproveGAD: {{ canReviewApproveGAD() }}<br>
                                    comments count: {{ dat.comments_count }}<br>
                                    imp_amount: {{ Math.round(parseFloat(dat.imp_amount)) }} <br>
                                    budget_sum: {{ Math.round(parseFloat(dat.budget_sum)) }} <br> -->
                                    <!-- :disabled="canReviewApproveGAD() ||
                                                    dat.comments_count > 0 ||
                                                    Math.round(parseFloat(dat.imp_amount)) !== Math.round(parseFloat(dat.budget_sum))" -->
                                    <!-- backgroundColor: canReviewApproveGAD() ||
                                                    dat.comments_count > 0 ||
                                                    Math.round(parseFloat(dat.imp_amount)) !== Math.round(parseFloat(dat.budget_sum))
                                                    ? '#a0c4ff' : 'blue', -->


                                    <!-- Approve -->

                                    <!-- @click="statusAction(dat, 2)" -->
                                     <!-- {{dat.number_of_clones}} -->

                                </td>
                                <!-- Full Edit -->
                                <!-- source: {{ my_source }} -->
                                <td v-if="my_source=='rev_app'">
                                    <!-- /revision/streamlined/create/{{dat.idpaps}}?source={{source}}&idrevplan={{dat.id}} -->
                                    <Link v-if="dat.idpaps"
                                        class="btn btn-success btn-sm"
                                        :href="`/revision/streamlined/create/${dat.idpaps}?source=${my_source}&idrevplan=${dat.id}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </Link>
                                </td>
                                <!--  -->
                                <!-- Return -->
                                <td v-if="my_source=='rev_app' || my_source=='approved'">
                                    <button
                                        v-if="['0','1'].includes(dat.status)"
                                        @click="statusAction(dat, -2)"
                                        :style="{
                                        padding: '4px 10px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        backgroundColor: '#fc00d7',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontWeight: 'bold'
                                        }"
                                    >
                                        Return
                                    </button>
                                    <button
                                        v-if="['0'].includes(dat.return_request_status)"
                                        @click="statusAction(dat, 7)"
                                        :style="{
                                        padding: '4px 10px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontWeight: 'bold'
                                        }"
                                    >
                                        Approve Return Request
                                    </button>
                                    <!-- <button
                                        v-if="['1','2'].includes(dat.status)"
                                        @click="returnWithAmmendments(dat, -2)"
                                        :style="{
                                        padding: '4px 10px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontWeight: 'bold'
                                        }"
                                    >
                                        Return with Ammendments
                                    </button> -->
                                </td>
                                <!-- BUDGET********************************************** -->
                                <td v-if="my_source=='budget'">
                                     <button
                                        class="btn btn-primary btn-sm text-white"
                                        @click="openAppropriationRightModal('budget', dat.id, dat.project_title,dat.budget_sum, dat.idpaps)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-richtext" viewBox="0 0 16 16">
                                            <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                                        </svg>
                                    </button>
                                    <!-- <Button
                                        class="btn btn-primary btn-sm text-white"
                                        @click="openRightAlignModal('budget', dat.id, dat.project_title,dat.budget_sum)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-richtext" viewBox="0 0 16 16">
                                            <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                                        </svg>
                                    </Button> -->
                                </td>
                                <!-- <td><Link
                                        class="btn btn-primary btn-sm"
                                        :href="`/revision/edit/${dat.id}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </Link>
                                </td> -->
                                <!-- <td>
                                    <div class="dropdown dropstart" >
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-start"  aria-labelledby="dropdownMenuButton1">
                                            <li><Link class="dropdown-item" :href="`/HGDGScore/${dat.id}`">HGDG Score</Link></li>
                                            <li><Link class="dropdown-item" :href="`/strategies-and-activities/${dat.id}`">Implementation Schedule/ Workplan</Link></li>
                                            <li><Link class="dropdown-item" :href="`/budget/${dat.id}`">Budget Requirements </Link></li>
                                            <li><Link class="dropdown-item" :href="`/team/${dat.id}/revision/plan/team`">Implementing Team</Link></li>
                                            <li><Link class="dropdown-item" :href="`/EvaluationMechanismTool/${dat.id}`">Monitoring and Evaluation</Link></li>
                                            <li><Link class="dropdown-item" :href="`/RiskManagement/${dat.id}`">Risk Management</Link></li>
                                            <li><Link class="dropdown-item" :href="`/Signatories/${dat.id}`">Signatories</Link></li>
                                        </ul>
                                    </div>
                                </td> -->
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
        <IppListModal v-if="IppListModalVisible" @close-modal-event="toggleIppListModal" title="IPP List">
            <div class="d-flex align-items-center mb-2">
                <label class="me-2" style="width: 80px;">Office:</label>
                <select v-model="ipp_list_office" class="form-select w-auto">
                    <option></option>
                    <option v-for="office in offices" :value="office.FFUNCCOD">
                        {{ office.FFUNCTION }}
                    </option>
                </select>
            </div>

            <div class="d-flex align-items-center mb-2">
                <label class="me-2" style="width: 80px;">Sector:</label>
                <select v-model="ipp_list_sector" class="form-select w-auto">
                    <option></option>
                    <option>Other Services</option>
                    <option>General Public Services Sector</option>
                    <option>Social Services Sector</option>
                    <option>Economic Services</option>
                </select>
            </div>
            <div class="d-flex align-items-center mb-2">
                <label class="me-2" style="width: 80px;">Year:</label>
                <select v-model="ipp_list_year" class="form-select w-auto">
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>

                </select>
            </div>
            <!-- {{ list_link }} -->
            <div class="d-flex justify-content-center">

                <iframe :src="list_link" style="width:100%; height:500px" />
            </div>
            <br>
        </IppListModal>
        <ReturnWithAmmendmentsModal v-if="ReturnWithAmmendmentsModalVisible" @close-modal-event="hideReturnWithAmmendmentsModal" title="RETURN WITH AMMENDMENTS">
            <div class="peers mb-12">
                <table class="table">
                    <tbody>
                        <tr>
                            <td><h6>Project Title: <u>{{selected_plan.project_title }}</u></h6></td>
                            <td><h6>Office: <u>{{selected_plan.FFUNCTION }}</u></h6></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="col-md-5">
                                <!-- Warnings -->
                                <!-- <div v-if="show_warnings">
                                    <div v-if="!isWithinLimit()" class="text-danger mt-2">
                                    ❌ Total file size must not exceed 10 MB.
                                    </div>
                                    <div v-if="!isWithinCount()" class="text-danger mt-2">
                                    ❌ You can only upload a maximum of 2 files.
                                    </div>
                                </div> -->

                                <!-- :disabled="!(isWithinLimit() && isWithinCount())" -->
                                <input
                                    type="file"
                                    multiple
                                    @change="handleFiles"
                                    accept="application/pdf"
                                    ref="fileInput"
                                />
                                <!-- :disabled="!(isWithinLimit() && isWithinCount())" -->
                                <div>
                                    <button type="button" @click="uploadFiles" class="btn btn-primary text-white" >Upload</button>
                                    <button type="button" @click="cancelFiles" class="btn btn-danger text-white">Cancel </button>
                                </div>
                                <p>

                                    <div v-if="files.length>0">
                                        <h3>Selected Files (Pending Upload)</h3>
                                        <table >
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>File Name</th>
                                                    <th>File Type</th>
                                                    <th>File Size</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(file, index) in files" :key="index">
                                                    <td>
                                                        <img :src="getPreUploadFileIcon(file.name.split('.').pop())" alt="file preview" style="width:30px; height:30px; object-fit:cover;"/>
                                                    </td>
                                                    <td>{{ file.name }}&nbsp;</td>
                                                    <td>{{ file.name.split('.').pop() }}&nbsp;</td>
                                                    <td>{{ formatFileSize(file.size) }}&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </p>
                            </div>

                            </td>
                            <td>
                                <div class="col-md-7">
                                <div class="peers">
                                    <h5>Justification Letters Uploaded</h5>&nbsp;
                                    <button
                                        @click="deleteFiles"
                                        class="btn btn-danger btn-sm mL-2 text-white"
                                        :disabled="!file_ids.length"
                                        >
                                        Delete Selected
                                    </button>
                                </div>
                                <!-- <button @click="previewFile(file)" class="btn btn-primary text-white">Preview</button>&nbsp; -->
                                <!-- /files/proxy-download -->
                                <!-- target="_blank" rel="noopener noreferrer" -->
                                <!-- <a :href="`http://122.53.120.18:8067/images/${file.filename}`" class="btn btn-success">Download</a>&nbsp; -->
                                <!-- http://122.53.120.18:8067/images/{{file.filename}} - /file-upload/download/ -->
                                <!-- <p> http://192.168.80.89:8073//file-upload/download/{{file.id}}</p> -->
                                <table name="tabel" class="table table-hover table-striped">
                                    <thead>
                                        <tr>
                                        <th>
                                            <input
                                            type="checkbox"
                                            :checked="allSelected"
                                            v-model="allSelected"
                                            @change="toggleSelectAll($event)"
                                            />
                                        </th>
                                        <th></th>
                                        <th>File Name</th>
                                        <th>File Size</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                        <th>Return No.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="file in docs" :key="file.id">
                                            <td>
                                                <input
                                                type="checkbox"
                                                :value="file.id"
                                                @change="toggleFileSelection(file.id, $event)"
                                                v-model="file_ids"
                                                />

                                                <!-- {{ file }} -->
                                            </td>
                                            <!-- <p>http://122.53.120.18:8067/images/{{file.filepath}}</p> -->
                                            <td><img :src="getFileIcon(file)" alt="file preview" style="width:30px; height:30px; object-fit:cover;"/></td>
                                            <td>{{ file.filename }} </td>
                                            <td>{{ format_number((file.file_size/1024),2,true) }} KB </td>
                                            <th
                                                :style="{
                                                    backgroundColor: file.return_executed === '0' ? '#d4f8d4' : '#f8d4d4'
                                                }"
                                            >
                                                {{ file.return_executed === "0" ? 'New' : 'Used' }}
                                            </th>
                                            <td>
                                                <button
                                                    @click="previewFile(file)"
                                                    class="p-1 rounded bg-transparent hover:bg-blue-100 border-0"
                                                    title="Preview"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        fill="blue"
                                                        class="bi bi-eye-fill"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                                    </svg>
                                                </button>&nbsp;
                                                <!-- download -->
                                                <a
                                                    :href="`/movs/download/${file.id}`"

                                                    class="inline-flex items-center"
                                                    title="Download"
                                                    target="_blank"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        fill="green"
                                                        class="bi bi-cloud-arrow-down-fill"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708"/>
                                                    </svg>
                                                </a>&nbsp;

                                                <!-- <button
                                                    @click="deleteFile(file.id)"
                                                    class="p-1 rounded-full bg-transparent hover:bg-red-100 border-0"
                                                    data-toggle="tooltip"
                                                    title="Delete"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        fill="red"
                                                        class="bi bi-trash-fill"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                                    </svg>
                                                </button> -->

                                            </td>
                                            <td>0{{  file.return_batch }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="table table-hover ">
                                    <tbody>
                                        <tr>
                                            <td>Remarks:</td>
                                            <td><textarea class="form-control" v-model="remarks"></textarea></td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <button
                                                        @click="returnWithAmmendmentsActual()"
                                                        :style="{
                                                        padding: '4px 10px',
                                                        border: 'none',
                                                        borderRadius: '4px',
                                                        backgroundColor: 'red',
                                                        color: 'white',
                                                        cursor: 'pointer',
                                                        fontWeight: 'bold'
                                                        }"
                                                    >
                                                        Return with ammendments
                                                    </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </ReturnWithAmmendmentsModal>
        <SideModal v-if="displaySideModal"  @close-modal-event="displaySideModal = false" style="z-index: 9999;  ">
            <h2 class="text-lg font-semibold">Preview SideModal</h2>
            <!-- file_extension: {{ file_extension }} -- {{ view_link }} -- {{ disk }} -->
            <div v-if="disk==='public'">
                <!-- <iframe v-if="file_extension === 'pdf'"
                    :src="`/storage/${current_filepath}`"
                    width="100%"
                    height="500px">
                </iframe> -->
                <div v-if="file_extension === 'pdf'">
                    <iframe
                        :src="view_link"
                        width="100%"
                        height="500px">
                    </iframe>
                </div>
                <!-- .toLowerCase() -->
                <div v-else-if="imageTypes.includes(file_extension)">
                    Image siya
                    <img
                        :src="view_link"
                        alt="preview"
                        class="max-w-full max-h-[500px] cursor-pointer"
                        @click="openModal"
                    />
                </div>
                <div v-else>
                    <iframe
                        :src="`https://docs.google.com/gview?url=${encodeURIComponent(view_link)}&embedded=true`"
                        width="100%"
                        height="600">
                    </iframe>
                </div>
            </div>
            <div v-else>
                <div v-if="file_extension === 'pdf'">
                    <iframe
                        :src="view_link"
                        width="100%"
                        height="500px">
                    </iframe>
                </div>
                <div v-else-if="imageTypes.includes(file_extension.toLowerCase())">
                    Image siya
                    <img
                        :src="view_link"
                        alt="preview"
                        class="max-w-full max-h-[500px] cursor-pointer"
                        @click="openModal"
                    />
                </div>
                <div v-else>
                    <iframe
                        :src="`https://docs.google.com/gview?url=${encodeURIComponent(view_link)}&embedded=true`"
                        width="100%"
                        height="600">
                    </iframe>
                </div>


            </div>

            <!-- <br>
            <iframe :src="`/storage/${current_filepath}`"></iframe>
            <br>
            <a :href="`/storage/${current_filepath}`" target="_blank">
                Open File
            </a> -->
        </SideModal>
        <!-- {{ my_source }} -->
    </div>
    <!-- uccrent user: {{ current_user_id }} <br>
    {{ auth }} -->
    <!-- {{ ooe_description }}
    {{ ooe_id }} -->
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import ModalRightAlign from "../../Shared/ModalRightAlign.vue";
import ModalRightAlignCRUD from "../../Shared/ModalRightAlign.vue";
import ModalRightAppropriation from "../../Shared/ModalRightAlign.vue";
import ModalRightAppropriationCrud from "../../Shared/ModalRightAlign.vue";
import ReturnWithAmmendmentsModal from "@/Shared/ModalDynamicTitle";
import IppListModal from "@/Shared/ModalDynamicTitle";
import { useForm } from "@inertiajs/vue3";
import Printing from "@/Shared/FilterPrint";
import LBP2Modal from "@/Shared/PrintModal";
import AIPModal from "@/Shared/PrintModal";
import { Button } from "bootstrap";
import { router } from '@inertiajs/vue3';
import SideModal from "@/Shared/PrintModal";

export default {
    props: {
        auth: Object,
        data: Object,
        FFUNCCOD: String,
        FFUNCCOD2: Object,
        offices: Object,
        ooes: Object,
        ooe_description: Array,
        ooe_id: Array,
        ooe_codes: Array,
        acc: Object,
        //idstrat: String,
        my_source: String,
        dept_id: String,
        // idpaps: String,
        filters: Object,
        paps: Object,
        monitors: Object,
        functions: Object,
        programs: Object,
        totals: Object,
        pgHead: String,
        fileBaseUrl: String,
        disk: String,
        // HAS COMMENTS
        has_comments: String,
        reviewers: Object,
        year_filtering: String,
    },
    data() {
        return{
            filter_FFUNCCOD: "",
            filter: false,
            search: this.$props.filters.search,
            showModalRightAlign: false,
            showModalRightAlignCRUD: false,
            showModalAppropriation: false,
            showModalAppropriationCrud: false,
            showAIPModal: false,
            aip_printLink: "",
            rev_id: null,
            project_title: "",
            total_budget: 0,
            budget_sum: 0,
            edit_amount: 0,
            budget_data: [],
            editData: undefined,

            idpaps: null,
            form: useForm({
                // id: null,
                // idooe: "",
                // particulars: "",
                // account_code: "",
                // amount: "",
                // category: "",
                // source: "",
                // revision_plan_id: "",
                // category_gad: "",
                idooe: "",
                year: "",
                FFUNCCOD: "",
                raaotype: "",
                idprogram: "",
                revision_plan_id: "",
                object_of_expenditure: "",
                account_code: "",
                past_year: 0,
                first_sem: 0,
                second_sem: 0,
                budget_year: "",
                idpaps: "",
                category: "",
                GAD: "",
                CCET: "",
                AIP_CODE: "",
                id: null
            }),
            dates: "",
            dt_ooes: [],
            crud_type: "create",
            print: false,
            lbp_version: "",
            displaylbp2: false,

            no_ooe: false,

            ccet: 'no',       // This is the main variable bound by v-model
            checked: false,

            formAction: '',
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),

            //IPP List
            IppListModalVisible: false,
            list_link: "",
            ipp_list_office: "",
            ipp_list_sector: "",
            ipp_list_year: "",

            //For Project Design
            ReturnWithAmmendmentsModalVisible: false,
            //Justification Uploads
            file: null,
            files: [],
            file_ids: [],
            current_filepath: null,
            allSelected: false,
            selected_plan: [],
            selected_status: 0,
            selected_label: '',
            docs: [],
            remarks: '',
            //Document Display
            displaySideModal: false,
            showImageModal: false,

            // COMMENTS FILTERING
            has_comments_filtering: '',

            // YEAR PERIOD SELECTED
            year_period: 0,
            gad_reviewers: [684, 545],
            reviewers: [681,685],
            approvers: [682],
            current_user_id: '',
            year_filtering_d: ''
        }
    },
    computed: {
        ooe_options(){
            return this.ooes.map((ooe) => ({
                value: ooe.recid,
                label: ooe.FOOEDESC,
                code: ooe.FACTCODE,
            }));
        },
        formattedOOEs() {
            let dataOoes = this.dt_ooes;
            return this.dt_ooes.map((dataOoes) => ({
                value: dataOoes.recid,
                label: dataOoes.FOOEDESC,
                FACTCODE: dataOoes.FACTCODE,
                program_id: dataOoes.idprogram,
                FFUNCCOD: dataOoes.FFUNCCOD,
                sem1: dataOoes.sem1,
                sem2: dataOoes.sem2,
                past_year: dataOoes.past_year
            }));
        },
        formattedPrograms() {
            let dataPrograms = this.programs;
            if (this.form.raaotype) {
                dataPrograms = dataPrograms.filter((program) => program.ftype === this.form.raaotype);
            }
            if (this.form.FFUNCCOD) {
                dataPrograms = dataPrograms.filter((program) => program.FFUNCCOD === this.form.FFUNCCOD);
            }

            return dataPrograms.map((program) => ({
                value: program.recid,
                label: program.FPROGRAM,
                raaotype: program.ftype,
                FFUNCCOD: program.FFUNCCOD,
                raohsid: program.raohsid
            }));

        },
        getTotal12() {
            var f1 = parseFloat(this.form.first_sem);
            var f2 = parseFloat(this.form.second_sem);
            var tot = f1 + f2;
            var tat = this.format_number_conv(tot, 2, true);
            return tat;
        },
        computed_pastyear() {
            // var p_year = this.format_number_conv(this.form.past_year,2,true);
            // if(isNaN(p_year)){
            //     return "0.00"
            // }else{
            //     return this.format_number_conv(this.form.past_year,2,true);
            // }
            return this.format_number_conv(this.form.past_year, 2, true);
        },
        computed_sem1() {
            //var s1 = parseFloat(this.form.sem1);
            return this.format_number_conv(this.form.first_sem, 2, true);
            //return this.format_number_conv(s1,2,true);
            //return isNaN(s1) ? '0.00' : s1;

        },
        computed_sem2() {
            return this.format_number_conv(this.form.second_sem, 2, true);
        },
        accounts() {
            let accs = this.acc;
            return accs.map((dat) => ({
                // value: dat.individual_final_output_id,
                // "[id: "+ dat.individual_final_output_id+ ", type: " + dat.pcr_type + "]",
                value: dat.FACTCODE,
                // "[id: "+ dat.individual_final_output_id+ ", type: " + dat.pcr_type + "]",
                label: dat.FTITLE ,
                // pcr_type: dat.pcr_type, // include for easier access later
                original: dat           // optional: include full object if needed
            }));
        },

    },
    mounted() {
        this.setCurrentYear()
        this.current_user_id=this.auth.user.recid
        //FOR FILE UPLOADS
        if (localStorage.getItem('reloaded')) {
            // The page was just reloaded. Clear the value from local storage
            // so that it will reload the next time this page is visited.
            localStorage.removeItem('reloaded');
        } else {
            // Set a flag so that we know not to reload the page twice.

            localStorage.setItem('reloaded', '1');
            location.reload();

        }
        window.addEventListener("keydown", this.handleKeydown);
        this.has_comments_filtering=this.has_comments
        this.year_filtering_d=this.year_filtering
        this.fitTableWidth();
    },
    beforeUnmount() {
        window.removeEventListener("keydown", this.handleKeydown);
    },
    components: {
        Pagination, Filtering, ModalRightAlign,
        ModalRightAlignCRUD, ModalRightAppropriation, ModalRightAppropriationCrud,
        Printing, LBP2Modal, AIPModal, IppListModal, ReturnWithAmmendmentsModal, SideModal
    },
    watch: {
        // search: _.debounce(function (value) {
        //     this.filterPrograms(value, this.filter_FFUNCCOD)
        // }, 300),
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/revision_plans",
                { search: value,
                    source: this.my_source
                 },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
        ipp_list_office(newVal) {
            this.updateReportLink();
        },
        ipp_list_sector(newVal) {
            this.updateReportLink();
        }
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
        // deleteStrat(id) {
        //     //alert(this.idpaps);
        //     let text = "WARNING!\nAre you sure you want to delete the strategy?"+id;
        //       if (confirm(text) == true) {
        //         this.$inertia.delete("/strategies/" + id+"/"+this.idpaps);
        //     }
        // },
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
        amountStatus(budget, imp_amount){
            var status_now="";
            var showAmount ="";
            var bdg = parseFloat(budget);
            var imp = parseFloat(imp_amount);
            //showAmount ="Budget is "+budget+" \n imp amount is "+imp_amount + " "
            if(bdg>imp){
                //alert('budget is greater than impamount');
                status_now=showAmount+"Warning: total amount of budgetary requirement is greater than the total implementation plans amount."
            }
            if(bdg<imp){
                status_now=showAmount+"Warning: total amount of implementation plans is greater than the total  amount of budgetary requirement."
            }
            return status_now;
        },
        showFilter() {
            this.filter = !this.filter;
        },
        filterPrograms(search, office_code){
            this.$inertia.get(
                "/revision_plans",
                {
                    search: search,
                    FFUNCCOD: office_code,
                    source: this.my_source,
                    has_comments: this.has_comments_filtering,
                    year: this.year_filtering_d
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        fitTableWidth() {
            const container = this.$refs.tableResponsive;
            if (container) {
                const table = container.querySelector('table');
                if (table) {
                    const tableWidth = table.scrollWidth;
                    const containerWidth = container.clientWidth;
                    if (tableWidth > containerWidth) {
                        const zoomFactor = (containerWidth / tableWidth) * 100;
                        table.style.transform = `scale(${zoomFactor / 100})`;
                        table.style.transformOrigin = 'top left';
                        table.style.width = '100%';
                    } else {
                        table.style.transform = 'scale(1)';
                    }
                }
            }
        },
        isExpanded(id) {
            return this.expandedRows.includes(id);
        },
        toggleExpand(id) {
            if (this.isExpanded(id)) {
                this.expandedRows = this.expandedRows.filter(item => item !== id);
            } else {
                this.expandedRows.push(id);
            }
        },
        // BUDGET PREP
        async openRightAlignModal(source, id, title,sum_budget) {
            // this.$modal.show(ModalRightAlign, {
            //     title: "Budget Details",
            //     source: source,
            //     id: id,
            //     title: title,
            //     my_source: this.my_source,
            //     dept_id: this.dept_id,
            //     idpaps: this.idpaps,
            //     monitors: this.monitors
            // });
            var url= `/revision_plans/budget/${id}`;
            await axios.get(url).then((response) => {
                this.budget_data = response.data;
            }).finally(() => {
                this.isLoading = false;
            });
            this.showModalRightAlign = true;
            this.rev_id = id;
            this.form.revision_plan_id = id;
            this.project_title = title;
            this.total_budget = sum_budget;
            this.budget_sum = this.calculateTotalAmount();
        },
        add_budget_prep() {
            this.form.revision_plan_id = this.rev_id;
            this.form.idooe = "";
            this.form.particulars = "";
            this.form.account_code = "";
            this.form.amount = "";
            this.form.category = "";
            this.form.source = "";
            this.form.category_gad = "";
            this.showModalRightAlign=false;
            this.showModalRightAlignCRUD = true;
        },
        setCode() {
            //alert(this.form.particulars);
            var ind = this.ooes.findIndex(ooe => ooe.recid === this.form.idooe);
            console.log("Index of selected OOE("+this.form.idooe+"): " + ind);
            this.form.account_code = this.ooes[ind].FACTCODE.toString();
            this.form.particulars = this.ooes[ind].FOOEDESC.toString();
            console.log("particulars"+this.form.particulars)
            // this.budget_code = this.budgets.indexOf(this.form.account_code.toString());
            // this.form.particulars = this.chart_selected
            //alert(this.budget_code+" code: "+ this.codes[ind]);
        },
        submit() {
            var total_project_budget = this.budget_sum+this.form.budget_year;
            if(this.editData!==undefined){
                total_project_budget = total_project_budget - this.editData.budget_year;
            }
            if (total_project_budget > this.total_budget) {
                alert("Total budget for this project is " + this.total_budget + ". You cannot exceed this amount." +total_project_budget);
                return;
            }
            // console.log("budget_sum: "+this.budget_sum);
            // console.log("total_project_budget: "+this.budget_sum);
            // console.log("this.editData.budget_year: "+this.editData.budget_year);
            if (this.editData !== undefined) {
                // alert('patch');
                var url =`/appropriation-budget/${this.form.id}`;
                this.form.patch(url,{
                    onSuccess: () => {
                        this.showModalAppropriationCrud = false;
                        this.showModalAppropriation = true;
                        this.openAppropriationRightModal('budget', this.rev_id, this.project_title, this.total_budget, this.idpaps);
                        this.editData = undefined; // Reset editData after successful submission
                        // this.form.id = null; // Reset form id after successful submission
                        // this.form.revision_plan_id = this.rev_id; // Ensure revision_plan_id is set
                        // this.form.idooe = "";
                        // this.form.particulars = "";
                        // this.form.account_code = "";
                        // this.form.amount = "";
                        // this.form.category = "";
                        // this.form.source = "";
                        // this.form.category_gad = "";
                        // this.form.processing = false; // Reset processing state
                    },
                    onError: () => {
                        console.log("Error in submitting form");
                    },
                    // finally: () => {
                    //     this.isLoading = false; // Reset loading state
                    //     this.closeCRUDApprop();
                    // }
                });
            } else {
                this.form.id = null;
                var url='/appropriation-budget';
                //alert('store') /revision_plans/store;
                this.form.post(url,{
                    onSuccess: () => {
                        this.showModalAppropriationCrud = false;
                        this.showModalAppropriation = true;
                        this.openAppropriationRightModal('budget', this.rev_id, this.project_title, this.total_budget, this.idpaps);
                    },
                    onError: () => {
                        console.log("Error in submitting form");
                    }
                });

                // this.showModalAppropriationCrud = false;
                // this.showModalAppropriation = true;
                // this.openRightAlignModal('budget', this.rev_id, this.project_title, this.total_budget);
            }

        },
        async editBudgetPrep(id) {
                // this.$modal.show(ModalRightAlign, {
                //     title: "Budget Details",
                //     source: source,
                //     id: id,
                //     title: title,
                //     my_source: this.my_source,
                //     dept_id: this.dept_id,
                //     idpaps: this.idpaps,
                //     monitors: this.monitors
                // });/budget/edit/{id}
                var url= `/revision_plans/budget/edit/${id}`;
                await axios.get(url).then((response) => {
                    console.log("response data in edit budget prep");
                    console.log(response.data);
                    this.editData = response.data;
                    console.log(this.editData.id);
                }).catch((error) => {
                    console.log("Error in fetching budget data", error);
                }).finally(() => {
                    this.form.id = this.editData.id;
                    this.form.idooe = this.editData.idooe;
                    this.form.particulars = this.editData.particulars;
                    this.form.account_code = this.editData.account_code;
                    this.form.amount = this.editData.amount;
                    this.form.category = this.editData.category;
                    this.form.source = this.editData.source;
                    this.form.category_gad = this.editData.category_gad;
                    this.form.revision_plan_id = this.rev_id;
                    this.showModalRightAlignCRUD = true;
                });

        },
        deleteBudgetPrep(id){
            let text = "WARNING!\nAre you sure you want to delete the budget prep?"+id;
            if (confirm(text) == true) {
                this.$inertia.delete("/revision_plans/" + id, {
                    onSuccess: () => {
                        this.budget_data = [];
                        this.openRightAlignModal('budget', this.rev_id, this.project_title, this.total_budget);
                    },
                });
                this.budget_data=[];
                this.openRightAlignModal('budget', this.rev_id, this.project_title, this.total_budget);
            }
        },
        calculateTotalAmount() {
            return this.budget_data.reduce((sum, item) => {
                // alert("Calculating total amount for item:", item);
                // alert("Budget year:", item.budget_year);
                return sum + parseFloat(item.budget_year);
            }, 0);
        },
        closeCRUD(){
            this.showModalRightAlignCRUD = false;
            this.showModalRightAlign = true;
            this.openRightAlignModal('budget', this.rev_id, this.project_title, this.total_budget);
            this.editData = undefined; // Reset editData after closing the modal
            this.form.id = null; // Reset form id after closing the modal
            this.form.revision_plan_id = this.rev_id; // Ensure revision_plan_id is set
            this.form.idooe = "";
            this.form.particulars = "";
            this.form.account_code = "";
            this.form.amount = "";
            this.form.category = "";
            this.form.source = "";
            this.form.category_gad = "";
        },

        //PROPOSED BUDGET
        async openAppropriationRightModal(source, id, title,sum_budget,paps_id){
            this.rev_id = id;
            this.form.revision_plan_id = id;
            this.project_title = title;
            this.total_budget = sum_budget;
            this.form.idpaps = paps_id;
            this.idpaps = paps_id;


            var url= `/appropriation-budget/get/${id}/budget/appropriations`;
            await axios.get(url).then((response) => {
                this.budget_data = response.data;
            }).finally(() => {
                this.isLoading = false;
                this.budget_sum = this.calculateTotalAmount();
                // alert(this.budget_sum);
            });
            this.showModalAppropriation = true;

        },
        async add_budget_proposal(){
            this.showModalAppropriationCrud = true;
            var url= `/appropriation-budget/get/${this.idpaps}/ooes`;
            await axios.get(url).then((response) => {
                this.budget_data = response.data;
            }).finally(() => {
                this.isLoading = false;
            });
        },
        calculateTotalAmountProposed() {
            return this.budget_data.reduce((sum, item) => {
                return sum + parseFloat(item.budget_year);
            }, 0);
        },
        setCurrentYear() {
            var yr = new Date().getFullYear()
            this.form.year = parseFloat(yr) + 1;
            this.dates = parseFloat(yr) + 1;
            this.year_period=this.form.year;
        },
        filterProgram() {
            // this.form.idprogram=null;
            // this.form.idooe=null;
            const selectElement = this.$refs.raaoSelect;
            this.form.category = selectElement.options[selectElement.selectedIndex].text;

        },
        loadOOE() {
            this.dt_ooes = [];
            var year1 = parseFloat(this.form.year) - 1;
            axios.get("/ooes/filtered/ooes", {
                params: {
                    idprogram: this.form.idprogram,
                    FFUNCCOD: this.form.FFUNCCOD,
                    raaotype: this.form.raaotype,
                    year: year1
                }
            }).then((response) => {
                this.dt_ooes = response.data;
            }).catch((error) => {
                console.error(error);
            });
        },
        setOOEValue() {
            var prog_sel = this.dt_ooes.filter(ooes => ooes.recid === this.form.idooe);
            this.form.account_code = prog_sel[0].FACTCODE;
            console.log(prog_sel[0]);
            // this.searchByAccountCode();
            this.form.object_of_expenditure = prog_sel[0].FOOEDESC;
            this.form.first_sem = this.format_number_conv(prog_sel[0].sem1, 2, false);
            this.form.second_sem = this.format_number_conv(prog_sel[0].sem2, 2, false);
            this.form.past_year = this.format_number_conv(prog_sel[0].past_year, 2, false);
        },
        setOOEAndChartCheckBox(no_ooe_data){
            if(no_ooe_data==true){
                // this.form.account
                this.form.idooe=false
            }
        },
        async editBudgetApprop(id){
            this.dt_ooes = [];
            var url= `/appropriation-budget/${id}/edit`;
                await axios.get(url).then((response) => {
                    console.log("response data in edit budget prep");
                    console.log(response.data);
                    this.editData = response.data.editData;
                    this.dt_ooes = response.data.ooes;
                    this.edit_amount = this.editData.budget_year;
                    console.log(this.dt_ooes);
                }).catch((error) => {
                    console.log("Error in fetching budget data", error);
                }).finally(() => {
                    this.form.idooe = this.editData.idooe;
                    this.form.year = this.editData.year;
                    this.form.FFUNCCOD = this.editData.FFUNCCOD;
                    this.form.raaotype = this.editData.raaotype;
                    this.form.idprogram = this.editData.idprogram;
                    this.form.revision_plan_id = this.editData.revision_plan_id;
                    this.form.object_of_expenditure = this.editData.object_of_expenditure;
                    this.form.account_code = this.editData.account_code;
                    this.form.past_year = this.editData.past_year;
                    this.form.first_sem = this.editData.first_sem;
                    this.form.second_sem = this.editData.second_sem;
                    this.form.budget_year = this.editData.budget_year;
                    this.form.idpaps = this.editData.idpaps;
                    this.form.category = this.editData.category;
                    this.form.GAD = this.editData.GAD;
                    this.form.CCET = this.editData.CCET;
                    this.form.AIP_CODE = this.editData.AIP_CODE;
                    this.form.id = this.editData.id;
                    this.showModalAppropriationCrud = true;
                });
        },
        closeCRUDApprop(){
            this.showModalAppropriationCrud = false;
            this.showModalAppropriation = true;
            this.openAppropriationRightModal('budget', this.rev_id, this.project_title, this.total_budget, this.idpaps);
            this.editData = undefined; // Reset editData after closing the modal
            this.form.id = null; // Reset form id after closing the modal
            this.form.revision_plan_id = this.rev_id; // Ensure revision_plan_id is set
            this.form.idooe = "";
            // this.form.year = "";
            this.form.FFUNCCOD = "";
            this.form.raaotype = "";
            this.form.idprogram = "";
            this.form.object_of_expenditure = "";
            this.form.account_code = "";
            this.form.past_year = 0;
            this.form.first_sem = 0;
            this.form.second_sem = 0;
            this.form.budget_year = "";
            // this.form.idpaps = "";
            this.form.category = "";
            this.form.GAD = "";
            this.form.CCET = "";
            this.form.AIP_CODE = "";
            this.form.id = null; // Reset form id after closing the modal
            this.form.processing = false; // Reset processing state
        },
        deleteBudgetApprop(id){
            let text = "WARNING!\nAre you sure you want to delete the budget?"+id;
            if (confirm(text) == true) {
                this.$inertia.delete("/appropriation-budget/" + id, {
                    onSuccess: () => {
                        this.budget_data = [];
                        this.openAppropriationRightModal('budget', this.rev_id, this.project_title, this.total_budget, this.idpaps);
                    },
                });
                // this.budget_data=[];
                // this.openAppropriationRightModal('budget', this.rev_id, this.project_title, this.total_budget, this.idpaps);
            }
        },
        selected_ccountcode(){
            var ind='';
            setTimeout(() => {

                // alert(this.form.account_code);
                if(this.form.account_code !==null && this.form.account_code !==undefined && this.form.account_code !==''){
                    ind = this.acc.findIndex(data => String(data.FACTCODE) === String(this.form.account_code));
                    this.form.object_of_expenditure = this.acc[ind].FTITLE
                    // alert(ind);
                }
            }, 300);

        },
        //PRINTING
        showPrint() {
            //alert("show filter");
            this.print = !this.print
        },
        showModal(ffunccod, ffunction, dates) {
            // alert(ffunction,ffunccod);
            // alert(this.lbp_version);
            if (this.lbp_version > 2) {
                this.displaylbp2 = true;
                this.my_link = this.getToRep(ffunccod, ffunction, dates);
                console.log(ffunccod+" - "+ffunction+" - "+dates)
            } else {
                this.displaylbp2 = true;
                this.my_link = this.goToRepPrintLBP2();
            }

        },
        getToRep(ffunccod, ffunction, dates) {
            // alert(data[0].FFUNCCOD);
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FBudget%2FLBP_Form_4&reportUnit=%2Freports%2FBudget%2FLBP_Form_4%2FLBPFORM4&standAlone=true&decorate=no&output=pdf';
            var params = '&id=' + ffunccod + '&FUNCTION=' + ffunction + '&Date=' + dates;
            var link1 = linkt + jasper_ip + jasper_link + params;
            return link1;
        },
        goToRepPrintLBP2() {
            //http://122.53.120.27:8080/jasperserver/flow.html?_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FLBP_Form2%2FAppropMAIN&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FLBP_Form2
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2FLBP_Form2%2FAppropMAIN&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2FLBP_Form2&standAlone=true&decorate=no&output=pdf';
            var params = '&department_code=' + this.auth.user.department_code +
                '&office=' + this.auth.user.office.office +
                '&department_head=' + this.pgHead +
                '&budget_officer=EVA JEAN S. LICAYAN' +
                '&local_chief=ENGR.RAUL G. MABANGLO' +
                '&total_past_year=' + this.totals.past_year +
                '&total_first_sem=' + this.totals.first_sem +
                '&total_second_sem=' + this.totals.second_sem +
                '&total_total=' + this.totals.total +
                '&total_budget_year=' + this.totals.budget_year;
            // alert(params)
            var link1 = linkt + jasper_ip + jasper_link + params;
            return link1;
        },
        hideLBP2Modal() {
            this.displaylbp2 = false;
        },
        showAIPModalMethod(){
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link ='jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FAIP_Print&standAlone=true&decorate=no&output=pdf';
            this.aip_printLink = linkt+jasper_ip+jasper_link;
            this.showAIPModal=true;
        },
        hideAIPModal(){
            this.showAIPModal=false;
        },
        updateValue() {
            this.ccet = this.checked ? 'yes' : 'no'
        },
        exportAIP() {
            // This opens the Laravel route in a new tab and triggers download
            // window.open(route('export.users'), '_blank');
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var short_link='jasperserver/rest_v2/reports/reports/OPCR_AIP/AIP_Print.xlsx?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FAIP_Print&standAlone=true&decorate=no'
            var link_final = linkt+jasper_ip+short_link;
            // '/revision/export/aip'
            window.open(link_final, '_blank');
        },

        // statusAction(revision_plan, newStatus) {
        //     const actions = {
        //         0: "Submit",
        //         1: "Review",
        //         2: "Approve",
        //         "-2": "Return"
        //     };

        //     const actionLabel = actions[newStatus];
        //     const typeLabel = revision_plan.type === 'p' ? 'project profile' : 'project design';

        //     // Build confirmation message
        //     const confirmMessage = `Are you sure you want to ${actionLabel} the ${typeLabel} entitled "${revision_plan.project_title}"?`;

        //     if (!confirm(confirmMessage)) return;

        //     axios.post(`/status/revision/update/${revision_plan.id}/${actionLabel}/${newStatus}`)
        //         .then(response => {
        //             // revision_plan.status = String(newStatus);
        //             window.location.href = response.request.responseURL;
        //         })
        //         .catch(error => {
        //             console.error(error);
        //         });
        // }
        statusAction(revision_plan, newStatus, column) {
            const actions = {
                0: "Submit",
                "-1": "Recall",
                1: "Review",
                2: "Approve",
                "-2": "Return",
                5: "Request for Return",
                7: "Approve the request for return for"
            };
            const actionLabel = actions[newStatus];
            const typeLabel = revision_plan.type === 'p' ? 'Project Profile' : 'Project Design';

            const confirmMessage = `Are you sure you want to ${actionLabel} the ${typeLabel} entitled "${revision_plan.project_title}"?`;
            const actionlabelcomplete = actionLabel + ' ' + typeLabel;
            if (!confirm(confirmMessage)) return;

            router.post(
                `/status/revision/update/${revision_plan.id}/${actionlabelcomplete}/${newStatus}`,
                {
                    remarks: this.remarks,   // ← SEND IT HERE
                    column: column
                },
                {
                    preserveScroll: true,
                    preserveState: true   // ⭐ keeps pagination page
                }
            );
        },
        // PRINT IPP List
        showIppListModal(){
            this.toggleIppListModal()
            // http://reports.dvodeoro.local:8080/jasperserver/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2FList_IPP&standAlone=true
            this.list_link = this.ippListLink()
        },
        updateReportLink() {
            this.list_link = this.ippListLink();
        },
        ippListLink(){
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2FList_IPP&standAlone=true&decorate=no&output=pdf';
            var params = '&sector=' + this.ipp_list_sector + '&office=' + this.ipp_list_office+'&year'+this.ipp_list_year;
            var link1 = linkt + jasper_ip + jasper_link+params;
            return link1;
        },
        toggleIppListModal(){
            this.IppListModalVisible = !this.IppListModalVisible

        },

        //Return with Ammendments/PROJECT DESIGN
        toggleReturnWithAmmendmentsModal(){
            this.ReturnWithAmmendmentsModalVisible=true
        },
        hideReturnWithAmmendmentsModal(){
            this.ReturnWithAmmendmentsModalVisible=false
        },
        async returnWithAmmendments(revision_plan, newStatus){
            const actions = {
                0: "Submit",
                "-1": "Recall",
                1: "Review",
                2: "Approve",
                "-2": "Return"
            };

            const actionLabel = actions[newStatus];
            const typeLabel = revision_plan.type === 'p' ? 'Project Profile' : 'Project Design';
            const actionlabelcomplete = actionLabel + ' ' + typeLabel;
            this.selected_label=actionlabelcomplete
            this.selected_plan = revision_plan
            this.selected_status = newStatus

            // this.opcr_rating_id=id;
            let url = '/revison_plan_documents/' + revision_plan.id;
            // let url = '/monthly-details/monthly/accomplishments/object/' + empl_id + '/' + sem + '/' + e_year + '/' + idsemestral + '/' + my_month;
            // alert(empl_id);
            await axios.get(url).then((response) => {
                this.docs = response.data;
            }).finally(() => {
                this.isLoading = false;
            });
            this.toggleReturnWithAmmendmentsModal()
        },
        formatFileSize(size) {
            if (size < 1024) return size + ' B';
            else if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB';
            else return (size / (1024 * 1024)).toFixed(2) + ' MB';
        },
        isWithinCount() {
            return (this.files.length + this.movs.length) <= 2;
        },
        isWithinLimit() {
            const maxSize = 10 * 1024 * 1024; // 10 MB in bytes

            // Sum size of selected files
            const newFilesSize = this.files.reduce((sum, f) => parseFloat(sum) + parseFloat(f.size), 0);

            // Sum size of already uploaded movs
            const existingFilesSize = this.movs.reduce((sum, f) => parseFloat(sum) + parseFloat(f.file_size), 0);

            const totalSize = parseFloat(newFilesSize) + parseFloat(existingFilesSize);
            console.log("newFilesSize: "+newFilesSize);
            console.log("existingFilesSize: "+existingFilesSize);
            console.log("totalSize: "+totalSize);
            console.log("maxSize: "+maxSize);
            return totalSize <= maxSize;
        },
        async uploadFiles() {
            if (this.files && this.files.length < 1) {
                alert("No file chosen.")
                return
            }
            if (!confirm("Are you sure you want to upload selected files?")) {
                return;
            }
            this.show_warnings=true;
            let formData = new FormData();

            // Single file (optional)
            if (this.file) {
                formData.append("file", this.file);
            }

            // Multiple files
            if (this.files && this.files.length > 0) {
                // this.files.forEach((f, i) => {
                //     formData.append("files[]", f); // use files[] so Laravel can treat it as an array
                // });
                this.files.forEach((f) => {
                    formData.append("files[]", f);
                });
            }
            // `/status/revision/update/${revision_plan.id}/${actionlabelcomplete}/${newStatus}`,
            // /update/{id}/{type}/{new_status}/upload/justification
            await axios.post(
                `/status/revision/update/${this.selected_plan.id}/${this.selected_label}/${this.selected_status}/upload/justification`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )
            .then(response => {
                console.log("Upload success:", response.data);
                this.returnWithAmmendments(this.selected_plan, this.selected_status);
                this.files=[]
            })
            .finally(response=> {
                this.cancelFiles();
            })
            .catch(error => {
                console.error("Upload error:", error.response?.data || error);
            });
        },
        cancelFiles() {
            // this.show_warnings=false;
            this.files = [];                  // Clear the files array
            this.$refs.fileInput.value = null;    // Reset the file input visually
        },
        handleFiles(event) {
            const filesArray = Array.from(event.target.files);

            // Filter only PDF files AND size <= 1 MB
            const pdfFiles = filesArray.filter(file => {
                const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
                const isSmallEnough = file.size <= 1024 * 1024; // 1 MB in bytes
                return isPdf && isSmallEnough;
            });

            // Alert user for invalid files
            if (pdfFiles.length !== filesArray.length) {
                alert("Only PDF files under 1 MB are allowed! Invalid files will be ignored.");
            }

            this.files = pdfFiles;

            console.log("Selected PDF files under 1 MB:", this.files);

            // Optional: reset input if no valid files
            if (this.files.length === 0) {
                this.$refs.fileInput.value = null;
            }


            //**********ORIGINAL UNCHANGED */
            // this.form.files = Array.from(event.target.files); // Store selected files
            // const filesArray = Array.from(event.target.files);
            console.log(filesArray); // check if files are here
            this.files = Array.from(event.target.files);
            console.log(this.files); // check if files are here
        },
        //ICON
        getFileIcon(file) {
            if (!file?.file_type) {
                return '/images/icons/file.png'; // default if missing type
            }

            const type = file.file_type.toLowerCase();
            const excelTypes = ['xls', 'xlsx', 'xlsm', 'xlsb', 'xlt', 'xltx', 'xltm'];
            const wordTypes = ['doc', 'docx', 'dot', 'dotx', 'dotm'];
            const imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
            const pptTypes = ['ppt', 'pptx', 'pptm', 'pot', 'potx', 'potm'];
            const multimediaTypes = ['mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv', 'mp3'];

            if (excelTypes.includes(type)) {
                return '/images/icons/excel.png';
            }
            else if (type === 'pdf') {
                return '/images/icons/pdf.png';
            }
            else if (wordTypes.includes(type)) {
                return '/images/icons/word.png';
            }
            else if (pptTypes.includes(type)) {
                return '/images/icons/ppt.png';
            }
            else if (multimediaTypes.includes(type)) {
                return '/images/icons/video.png';
            }
            else if (imageTypes.includes(type)) {
                if(this.disk==='public'){
                    return window.location.origin + "/storage/" + file.filepath;
                }else{
                    // return `http://122.53.120.18:8067/images/${file.filepath}`;
                    return `/images/icons/images.png`;
                }

            }
            else {
                return '/images/icons/file.png'; // default icon
            }
        },
        // FOIR PREVIEWS
        previewFile(file) {
            const imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
            const multimediaTypes = ['mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv', 'mp3'];
            // alert("previewFile " + this.disk + " "+file.file_type)
            // console.log(this.fileBaseUrl)
            this.current_filepath = file.filepath
            if(this.disk==='public'){
                // alert("PUBLIC")
                this.view_link = window.location.origin + "/storage/" + file.filepath;
                if (imageTypes.includes(file.file_type?.toLowerCase()) || multimediaTypes.includes(file.file_type?.toLowerCase())) {
                    // Directly open images in a new tab
                    // this.openImageModal()
                    // this.displaySideModal = true
                    window.open(this.view_link, '_blank');
                    //
                    return;
                }

                if (this.isPreviewable(file.file_type)) {
                    this.displaySideModal = true
                    this.file_extension = file.file_type
                    // this.view_link = "http://122.53.120.18:8067/images/"+file.filepath
                    // window.open(file.file_url, '_blank')
                } else {
                    alert('This file type cannot be previewed.')
                }

            }else{

                if (imageTypes.includes(file.file_type?.toLowerCase()) || multimediaTypes.includes(file.file_type?.toLowerCase())) {
                    // Directly open images in a new tab
                    window.open(`http://122.53.120.18:8067/images/${file.filepath}`, '_blank');
                    return;
                }

                if (this.isPreviewable(file.file_type)) {
                    // this.displaySideModal = true
                    this.view_link = "http://122.53.120.18:8067/images/"+file.filepath
                    window.open(this.view_link, '_blank');
                    this.file_extension = file.file_type

                    // window.open(file.file_url, '_blank')
                } else {
                    alert('This file type cannot be previewed.')
                }
            }

        },
        // TOGGLE SELECT
        toggleSelectAll(event) {
            if (event.target.checked) {
                // Add all file IDs
                this.file_ids = this.docs.map(file => file.id);
            } else {
                // Remove all file IDs
                this.file_ids = [];
            }
        },
        // DELETE MULTIPLE
        toggleFileSelection(fileId, event) {
            if (event.target.checked) {
                if (!this.file_ids.includes(fileId)) {
                    this.file_ids.push(fileId);
                }
            } else {
                this.file_ids = this.file_ids.filter(id => id !== fileId);
            }
        },
        async deleteFile(id) {
            var ids=[];
            if (confirm('Are you sure you want to delete this file?')) {
                ids.push(id);
                await axios.delete("/revison_plan_documents/delete-multiple/many", {
                        data: { file_ids: ids }
                    }).then(response => {
                        console.log("Files deleted successfully", response.data);
                        // this.showModalMOV(this.opcr_rating_id);
                    })
                    .catch(error => {
                        console.error("Failed to delete files", error.response?.data || error);
                    });
            }


        },

        async deleteFiles() {
            // alert("/movs/delete-multiple/many")
            if (!this.file_ids.length) {
                alert("No files selected for deletion");
                return;
            }

            if (!confirm("Are you sure you want to delete selected files?")) {
                return;
            }

            try {
                await axios.delete("/revison_plan_documents/delete-multiple/many", {
                    data: { file_ids: this.file_ids }
                }).then(response => {
                    console.log("Files deleted successfully", response.data);
                    this.returnWithAmmendments(this.selected_plan, this.selected_status);
                }).finally(response=>{
                    this.file_ids = [];
                    this.allSelected=false;
                })
                .catch(error => {
                    console.error("Failed to delete files", error.response?.data || error);
                });
            } catch (error) {
                console.error(error);
                alert("Failed to delete files");
            }
        },

        returnWithAmmendmentsActual(){
            // const unexecuted = this.docs.filter(doc => doc.return_executed === "0");
            const unexecuted = this.docs.filter(doc => doc.return_executed == 0);

            var confirm_message="";
            if (unexecuted.length < 1) {
                alert("You need to attach a new justification letter!.");
                return;
            }

            // 2. Validate: remarks must not be empty
            if (!this.remarks || this.remarks.trim() === '') {
                alert("Remarks are required before returning the plan.");
                return;
            }

            // 3. Confirm action
            confirm_message = `Are you sure you want to ${this.selected_label}?`;

            if (!confirm(confirm_message)) {
                return;
            }
            confirm_message = `Are you sure you want to ${this.selected_label}?`;

            if (!confirm(confirm_message)) {
                return;
            }

            // Call the original method again and pass stored parameters
            this.statusAction(this.selected_plan, this.selected_status);
            this.ReturnWithAmmendmentsModalVisible=false;

        },

        // GAD Reviewers
        canReviewApproveGAD(){
            const reviewers = this.gad_reviewers ?? [];
            const userId = this.auth.user.recid;
            // alert(userId);
            return reviewers.includes(userId);
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
            .blink {
                color: red;
                animation: blinker 1s linear infinite;
            }

            @keyframes blinker {
                0%, 100% { color: red; }
                50% { color: #f8d823; }
            }
</style>
