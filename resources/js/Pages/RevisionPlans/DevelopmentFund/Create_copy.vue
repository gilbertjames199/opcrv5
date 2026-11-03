<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Engineering PPAs</h3>
            <div v-if="from_mfo == true">
                <Link @click="goBack">
                    <!-- :href="`/paps/${idmfo}`" -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                        <path fill-rule="evenodd"
                            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                    </svg>
                </Link>
            </div>
            <div v-else>
                <Link :href="`/development-fund/${form.id}`">
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

        <div class="peers">
            <form @submit.prevent="submit()">
                <!-- PROGRAMS AND PROJECTS (PAPS) ******************-->
                <div class="row">
                    <!-- FIRST COLUMN -->
                    <div class="col-md-6">
                        <input type="hidden" required>
                        <div class="d-none">
                            <label for="">ID</label>
                            <input type="text" v-model="form.id" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.id">{{ form.errors.idooe }}</div>
                        </div>
                        <label for="">Office</label>
                        <!--<input type="number" v-model="form.FFUNCCOD" class="form-control" autocomplete="chrome-off">-->
                        <select class="form-control" v-model="form.FFUNCCOD" @change="filterMFOs">
                            <option value=""></option>
                            <option v-for="functional in functions" :value="functional.FFUNCCOD">
                                {{ functional.FFUNCTION }}
                            </option>
                        </select>
                        <div class="fs-6 c-red-500" v-if="form.errors.FFUNCCOD">{{ form.errors.FFUNCCOD }}</div>
                        <!-- MFOs -->
                        <label for="">Major Final Outputs </label>
                        <select class="form-control form-select" v-model="form.idmfo" @change="loadPAPS">
                            <option></option>
                            <option v-for="mfo in mfos_data" :value="mfo.id">
                                {{ mfo.mfo_desc }}
                            </option>
                        </select>
                        <div class="fs-6 c-red-500" v-if="form.errors.idmfo">{{ form.errors.idmfo }}</div>

                        <!-- Program and Projects (PAPS) -->
                        <label for="">Parent Program and Projects (if any -0{{ form.mother_program_id }})</label>
                        <select class="form-control form-select" v-model="form.mother_program_id">
                            <option></option>
                            <option v-for="mfo in motherPAPS" :value="mfo.id">
                                {{ mfo.paps_desc }}
                            </option>
                        </select>
                        <div class="fs-6 c-red-500" v-if="form.errors.mother_program_id">{{ form.errors.mother_program_id }}</div>


                        <!-- AIP COde -->
                        <label for="">AIP Code </label>
                        <input type="text" v-model="form.aip_code" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.aip_code">{{ form.errors.aip_code }}</div>
                        <!-- POPSP Agency -->
                        <label for="">Agency (For POPSP Programs Only)</label>
                        <select class="form-control form-select" v-model="form.agency_name">
                            <option></option>
                            <option v-for="popsp in popsp_agencies" :value="popsp.agency_code">
                                {{ popsp.agency_name }}
                            </option>
                        </select>
                        <div class="fs-6 c-red-500" v-if="form.errors.agency_name">{{ form.errors.agency_name }}</div>
                        <input type="checkbox"
                            v-model="form.is_mother_program"
                            :true-value="1"
                            :false-value="0">
                                &nbsp;Is Mother PAPS
                        <br>
                        <div class="fs-6 c-red-500" v-if="form.errors.with_gad_training">{{ form.errors.with_gad_training }}</div>

                        <label for="">Program and Projects (PAPS) Description </label>
                        <input type="text" v-model="form.paps_desc" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.paps_desc">{{ form.errors.paps_desc }}</div>

                        <label for="">Description</label>
                        <textarea rows="4" v-model="form.MOV" class="form-control" autocomplete="chrome-off" />
                        <div class="fs-6 c-red-500" v-if="form.errors.MOV">{{ form.errors.MOV }}</div>

                        <label for="">Date Start</label>
                        <input type="date" v-model="form.date_start" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.date_start">{{ form.errors.date_start }}</div>

                        <label for="">Date End</label>
                        <input type="date" v-model="form.date_end" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.date_end">{{ form.errors.date_end }}</div>
                    </div>
                    <!-- SECOND COLUMN -->
                    <div class="col-md-6">
                        <label for="">Type</label>
                        <select class="form-control form-select" v-model="form.type">
                            <option>GAS</option>
                            <option>Activity</option>
                            <option>Program</option>
                            <option>Project</option>
                        </select>
                        <div class="fs-6 c-red-500" v-if="form.errors.type">{{ form.errors.type }}</div>


                        <label for="">Sectors</label>
                        <select v-model="form.sector" class="form-control form-select">
                            <option v-for="(subsectors, sector) in sectors" :key="sector" :value="sector">
                                {{ sector }}
                            </option>
                        </select>
                        <div class="fs-6 c-red-500" v-if="form.errors.sector">{{ form.errors.sector }}</div>

                        <!-- {{ sectors }} -->
                        <label for="">Sub-sectors</label>
                        <select v-model="form.subsector" class="form-control form-select">
                            <option v-for="subsector in sectors[form.sector]" :key="subsector">
                                {{ subsector }}
                            </option>
                        </select>
                        <div class="fs-6 c-red-500" v-if="form.errors.subsector">{{ form.errors.subsector }}</div>

                        <!-- SOURCE OF FUNDS -->
                        <label for="">Source of Funds</label>
                        <!-- {{ form.source_of_funds }} -->
                        <select class="form-control form-select" v-model="form.source_of_funds">
                            <!-- <option value=""></option> -->
                            <option value="gen_fund">General Fund</option>
                            <option value="ldrrmf">Local Disaster Risk Reduction Management Fund (LDRRMF)</option>
                            <option value="dev">20% Development Fund</option>
                            <option value="other">Other Sources</option>
                        </select>
                        <div class="fs-6 c-red-500" v-if="form.errors.source_of_funds">{{ form.errors.source_of_funds }}</div>

                        <!--SOURCE OF FUNDS OTHERS SPECIFY -->
                        <div v-if="form.source_of_funds==='other'">
                            <label for="">Please Specify Other Source of Funds</label>
                            <input type="text" v-model="form.source_others_specify" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.source_others_specify">{{ form.errors.source_others_specify }}</div>
                        </div>
                        <!-- FUNDING AGENCY -->
                        <!-- <label for="">Funding Agency</label>
                        <input type="text" v-model="form.funding_agency" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.funding_agency">{{ form.errors.funding_agency }}</div> -->

                        <!-- POPSP SECTORS-->
                        <div v-if="form.sector==='General Public Services Sector'">
                            <input type="checkbox" v-model="form.popsp" :true-value="1" :false-value="0" />
                            <label for="popsp">POPSP</label>
                            <label for="">Focus Area (POPSP)</label>
                            <select class="form-control form-select" v-model="form.focus_area">
                                <option>Crime and Disorder</option>
                                <option>Conflict</option>
                                <option>Threat to environment and human security</option>
                                <option>Public Safety</option>
                            </select>
                            <div class="fs-6 c-red-500" v-if="form.errors.focus_area">{{ form.errors.focus_area }}</div>
                        </div>

                        <!-- <label for="">Chief Executive Agenda</label>
                        <select class="form-control form-select" v-model="form.chief_executive_agenda">
                            <option value=""></option>
                            <option v-for="chief_agenda in chief_agenda" :value="chief_agenda.id">
                                {{ chief_agenda.agenda_description }}
                            </option>
                        </select>
                        <div class="fs-6 c-red-500" v-if="form.errors.chief_executive_agenda">{{ form.errors.chief_executive_agenda
                        }}</div>

                        <label for="">Socio-Economic Agenda</label>
                        <select class="form-control form-select" v-model="form.socio_economic_agenda">
                            <option value=""></option>
                            <option v-for="socio_economic in socio_economic" :value="socio_economic.id">
                                {{ socio_economic.agenda_description }}
                            </option>
                        </select>
                        <div class="fs-6 c-red-500" v-if="form.errors.socio_economic_agenda">{{ form.errors.socio_economic_agenda }}
                        </div>

                        <label for="">Sustainable Development Goals</label>
                        <select class="form-control form-select" v-model="form.sust_devt_goal">
                            <option value=""></option>
                            <option v-for="sustainable in sustainable" :value="sustainable.id">
                                {{ sustainable.goal_description }}
                            </option>
                        </select>
                        <div class="fs-6 c-red-500" v-if="form.errors.sust_devt_goal">{{ form.errors.sust_devt_goal }}</div>

                        <label for="">Executive Legislative Agenda</label>
                        <select class="form-control form-select" v-model="form.executive_legislative_agenda">
                            <option value=""></option>
                            <option v-for="executive_legislative in executive_legislative" :value="executive_legislative.id">
                                {{ executive_legislative.agenda_description }}
                            </option>
                        </select>
                        <div class="fs-6 c-red-500" v-if="form.errors.executive_legislative_agenda">{{
                            form.errors.executive_legislative_agenda }}</div>

                        <label for="">Research Agenda</label>
                        <select class="form-control form-select" v-model="form.research_agenda">
                            <option value=""></option>
                            <option v-for="research in research" :value="research.id">
                                {{ research.agenda_description }}
                            </option>
                        </select>
                        <div class="fs-6 c-red-500" v-if="form.errors.research_agenda">{{ form.errors.research_agenda }}</div>

                        <label for="">AIP Code</label>
                        <input type="text" v-model="form.aip_code" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.aip_code">{{ form.errors.aip_code }}</div> -->

                        <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">
                    </div>
                    <!-- THIRD COLUMN -ACTIVITIES -->
                    <!-- <div class="col-md-6">
                        {{ form.activity}}
                        <label for="">Personnel Services </label>
                        <input type="text" v-model="form.activity.ps_q1" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.ps_q1">{{ form.errors.activity?.ps_q1 }}</div>

                        <label for="">Personnel Services Q2</label>
                        <input type="text" v-model="form.activity.ps_q2" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.ps_q2">{{ form.errors.activity?.ps_q2 }}</div>

                        <label for="">Personnel Services Q3</label>
                        <input type="text" v-model="form.activity.ps_q3" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.ps_q3">{{ form.errors.activity?.ps_q3 }}</div>

                        <label for="">Personnel Services Q4</label>
                        <input type="text" v-model="form.activity.ps_q4" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.ps_q4">{{ form.errors.activity?.ps_q4 }}</div>

                        <label for="">MOOE </label>
                        <input type="text" v-model="form.activity.mooe_q1" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.mooe_q1">{{ form.errors.activity?.mooe_q1 }}</div>

                        <label for="">MOOE Q2</label>
                        <input type="text" v-model="form.activity.mooe_q2" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.mooe_q2">{{ form.errors.activity?.mooe_q2 }}</div>

                        <label for="">MOOE Q3</label>
                        <input type="text" v-model="form.activity.mooe_q3" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.mooe_q3">{{ form.errors.activity?.mooe_q3 }}</div>

                        <label for="">MOOE Q4</label>
                        <input type="text" v-model="form.activity.mooe_q4" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.mooe_q4">{{ form.errors.activity?.mooe_q4 }}</div>

                        <label for="">Financial Expenses </label>
                        <input type="text" v-model="form.activity.fe_q1" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.fe_q1">{{ form.errors.activity?.fe_q1 }}</div>

                        <label for="">Financial Expenses Q2</label>
                        <input type="text" v-model="form.activity.fe_q2" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.fe_q2">{{ form.errors.activity?.fe_q2 }}</div>

                        <label for="">Financial Expenses Q3</label>
                        <input type="text" v-model="form.activity.fe_q3" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.fe_q3">{{ form.errors.activity?.fe_q3 }}</div>

                        <label for="">Financial Expenses  Q4</label>
                        <input type="text" v-model="form.activity.fe_q4" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.fe_q4">{{ form.errors.activity?.fe_q4 }}</div>

                        <label for="">Capital Outlay</label>
                        <input type="text" v-model="form.activity.co_q1" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.co_q1">{{ form.errors.activity?.co_q1 }}</div>

                        <label for="">Capital Outlay Q2</label>
                        <input type="text" v-model="form.activity.co_q2" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.co_q2">{{ form.errors.activity?.co_q2 }}</div>

                        <label for="">Capital Outlay Q3</label>
                        <input type="text" v-model="form.activity.co_q3" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.co_q3">{{ form.errors.activity?.co_q3 }}</div>

                        <label for="">Capital Outlay Q4</label>
                        <input type="text" v-model="form.activity.co_q4" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.co_q4">{{ form.errors.activity?.co_q4 }}</div>
                    </div> -->
                    <!-- FOURTH COLUMN -EXPECTED REVISED OUTPUTS -->
                    <div class="col-md-6">
                        <label for="">Expected Revised Outputs</label>
                        <textarea rows="4" v-model="form.activity.expected_revised_outputs.description" class="form-control" autocomplete="chrome-off" />
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.expected_revised_outputs?.description">
                            {{ form.errors.activity?.expected_revised_outputs?.description }}
                        </div>

                        <label for="">Expected Revised Outputs</label>
                        <textarea rows="4" v-model="form.activity.expected_revised_outputs.ccet_code" class="form-control" autocomplete="chrome-off" />
                        <div class="fs-6 c-red-500" v-if="form.errors.activity?.expected_revised_outputs?.ccet_code">
                            {{ form.errors.activity?.expected_revised_outputs?.ccet_code }}
                        </div>
                    </div>
                </div>

                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>
        <div class="col-md-12">
            <!-- IMPLEMENTATION SCHEDULE/WORKPLAN -STRATEGIES AND ACTIVITIES ************************************-->
            <span v-if="paps">
                <h3 id="implementation_workplan">
                    <!-- /strategies-and-activities/${dat.id} -->

                    <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                    ? `/strategies-and-activities/${paps.id}`:null" target="_blank">
                        Implementation Schedule/Workplan
                    </Link>
                </h3>
                <p>
                    <button type="button" class="btn btn-success btn-sm text-white"
                        @click="showStrategyModal()">
                            Add Strategies
                    </button>
                </p>
            </span>

            <div style="overflow-x: auto; width: 100%;" v-if="paps">
                <p><em>Use the <strong>numeric SEQ#</strong> to order strategies and activities from lowest to highest. After making changes, click outside the field and refresh the page (<strong>Ctrl+R</strong>) to apply them.</em></p>
                <table class="table table-hover table-bordered border-dark">
                    <thead >
                        <tr class="bg-secondary text-white" >
                            <th style="text-align: center;">SEQ#</th>
                            <th style="width: 12%; text-align: center;">Strategies/Activities</th>
                            <th style="width: 8%; text-align: center;" >Performance Target Indicators</th>
                            <th style="width: 8%; text-align: center;" >Gender Issues to be Addressed</th>
                            <th style="width: 8%; text-align: center;" >Timeline</th>
                            <th style="width: 8%; text-align: center;" >Expected Output</th>
                            <th style="width: 8%; text-align: center;" >Personnel Services</th>
                            <th style="width: 8%; text-align: center;" >MOOE</th>
                            <th style="width: 8%; text-align: center;" >Financial Expenses</th>
                            <th style="width: 8%; text-align: center;" >Capital Outlay</th>
                            <th style="width: 8%; text-align: center;" >Budget</th>
                            <th style="width: 8%; text-align: center;" >Climate Change Topology Code</th>
                            <th style="width: 8%; text-align: center;" >Person Responsible</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(dat, index) in implementation" :key="dat.id">
                            <!-- STRATEGIES***************************************************************************************************** -->
                            <tr  style="background-color:lightgrey; font-weight: bold;" v-if="rev.is_strategy_based==1">
                                <td  :class="{
                                    'text-danger': has_comment('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)
                                }" ><b>{{  }} </b>
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)">*
                                    </button>
                                    <button v-if="has_comment('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)" class="superscript-btn"
                                        @click="handleClick('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)">*
                                    </button>
                                    <textarea
                                        class="form-control transparent-bg "
                                        v-model="dat.description"
                                        type="text"
                                        @input="setUnsaved(true)"
                                        @change="updateRevisionPlans('strategies', 'description', dat.id, dat.description)">
                                            {{ dat.description }}
                                    </textarea>
                                </td>
                                <td :class="{
                                    'text-danger': has_comment('Implementation Plan','strategies',dat.description,'target_indicator','strategy_projects', dat, dat.comments)
                                }">
                                    <span v-if="paps.is_strategy_based==1">{{ dat.target_indicator }}</span>

                                </td>
                                <td><span v-if="paps.is_strategy_based==1">{{ dat.gad_issue }}</span></td>
                                <td>
                                    <span v-if="paps.is_strategy_based==1">
                                        <span v-if="dat.date_from">{{ formatMonthYear(dat.date_from) }}</span>
                                        <span v-if="dat.date_from && dat.date_to">&nbsp;to&nbsp;</span>
                                        <span v-if="dat.date_to">{{ formatMonthYear(dat.date_to) }}</span>
                                    </span>


                                </td>
                                <td>
                                    <span v-if="paps.is_strategy_based==1">
                                        <template v-if="dat.strategyProject[0]">
                                            <div v-for="eo in dat.strategyProject[0]?.expected_output || []">
                                                <div>{{ eo.description }}</div>
                                                <hr>
                                            </div>
                                            <div v-for="eo in dat.strategyProject[0]?.expected_outcome || []">
                                                <div>{{ eo.description }}</div>
                                                <hr>
                                            </div>
                                        </template>
                                    </span>

                                </td>
                                <td><span v-if="paps.is_strategy_based==1">{{ format_number_conv(parseFloat(dat.ps_total),2,true) }}</span></td>
                                <td><span v-if="paps.is_strategy_based==1">{{ format_number_conv(parseFloat(dat.ps_total),2,true) }}</span></td>
                                <td><span v-if="paps.is_strategy_based==1">{{ format_number_conv(parseFloat(dat.ps_total),2,true) }}</span></td>
                                <td><span v-if="paps.is_strategy_based==1"></span></td>
                                <td class="text-end"><span v-if="paps.is_strategy_based==1">
                                    {{ format_number_conv(parseFloat(dat.ps_total) + parseFloat(dat.mooe_total)+ parseFloat(dat.co_total),2,true) }}
                                </span>
                                </td>
                                <td><span v-if="paps.is_strategy_based==1">{{ dat.ccet_code }}</span></td>
                                <td><span v-if="paps.is_strategy_based==1">{{ dat.responsible }}</span> </td>
                            </tr>
                            <tr :id="dat.strategy_id + '_strategy_projects_strategy'" style="background-color:lightgrey; font-weight: bold;" v-if="rev.is_strategy_based==0">
                                <!-- SEQUENCE NUMBER -->
                                <td>
                                    <input
                                        type="number" v-model="dat.seq_no" style="width: 8ch;"
                                        @input="setUnsaved(true)"
                                        @change="updateRevisionPlans('strategy_projects', 'seq_no', dat.strategy_id, dat.seq_no)">
                                </td>
                                <td :class="{
                                    'text-danger': has_comment('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)
                                }" colspan="12"><b>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <textarea
                                            class="form-control transparent-bg "
                                            v-model="dat.description"
                                            type="text"
                                            @input="setUnsaved(true)"
                                            @change="updateRevisionPlans('strategies', 'description', dat.id, dat.description)">
                                                {{ dat.description }}
                                        </textarea>
                                    </div>
                                    </b>
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)">*
                                    </button>
                                    <button v-if="has_comment('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)" class="superscript-btn"
                                        @click="handleClick('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)">*
                                    </button>
                                </td>

                                <td>
                                    <button class="btn btn-primary btn-sm text-white"
                                    @click="showActivityModal(dat.id)">
                                        Add Activities
                                    </button>
                                    <!-- @click="deleteData(dat.id, 'strategies', dat.description)" -->
                                    <button class="btn btn-danger btn-sm text-white"
                                    @click="deleteDataActivityOrStrat(dat.id, 'strategies', dat.description, this.form.id)"
                                        >
                                        🗑 Delete Strategy
                                    </button>
                                </td>
                            </tr>
                            <!-- ACTIVITIES **************************************************************************************************** -->
                            <template v-for="(act, subIndex) in (dat.activity || []).filter(a => a)" :key="subIndex" >
                                <!-- <tr>
                                    <td>{{ dat.activity }} ----- {{ rev.is_strategy_based }}  ----- {{ act.is_active }} ---  {{ act }}</td>
                                </tr> -->
                                <tr v-if="dat.activity && rev.is_strategy_based==0 && act.is_active==='1'" style="height: 100%">
                                    <!-- SEQUENCE NUMBER -->
                                    <td>
                                        <input
                                            type="number" v-model="act.seq_no" style="width: 8ch;"
                                            @input="setUnsaved(true)"
                                            @change="updateRevisionPlans('activity_projects', 'seq_no', act.activity_id, act.seq_no)">
                                    </td>
                                    <!-- DESCRIPTION -->
                                    <td :class="{
                                        'text-danger': has_comment('Implementation Plan','activities',act.description,'activities','activity_projects', act, act.comments)
                                    }" :id="act.activity_id + '_activity_projects_activities'">
                                        <!-- {{act}}
                                        {{ act.id }}_activity_projects_activities -->
                                        <textarea
                                            class="form-control transparent-bg "
                                            v-model="act.description"
                                            type="text"
                                            @input="setUnsaved(true)"
                                            @change="updateRevisionPlans('activities', 'description', act.id, act.description)">
                                                {{ act.description }}
                                        </textarea>
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Implementation Plan','activities',act.description,'activities','activity_projects', act, act.comments)">*
                                        </button>
                                        <button v-if="has_comment('Implementation Plan','activities',act.description,'activities','activity_projects', act, act.comments)" class="superscript-btn"
                                            @click="handleClick('Implementation Plan','activities',act.description,'activities','activity_projects', act, act.comments)">*
                                        </button>
                                    </td>
                                    <!-- TARGET/INDICATORs, EXPECTED OUTPUTS, GAD ISSUE, IMPLEMENTATION DATES-->
                                    <td colspan="4" style="width: 32%; padding: 0; border: 1px solid #000; vertical-align: top;">
                                        <div style="display: flex; flex-direction: column; height: 100%; min-height: 100%;">
                                            <!-- IF THE ACTIVITY HAS OUTCOMES OR OUTPUTS -->
                                            <table class="m-0"
                                            style="border-collapse: collapse; width: 100%; height: 100%; table-layout: fixed; flex: 1 1 auto;"
                                            v-if="getPairedOutputs(act.activityProject[0]) && getPairedOutputs(act.activityProject[0]).length">
                                                <template v-for="(pair, i) in getPairedOutputs(act.activityProject[0])" :key="i" >
                                                    <tr style="height: 100%;">
                                                        <!-- Target Indicator -->
                                                        <td class="align-top" style="width: 25%; height: 100%; border: 1px solid #000; padding: 4px;" :id="pair.id + '_activity_projects_target_indicator'">
                                                            <span v-if="rev.is_strategy_based==0">
                                                                <textarea :id="pair.id + '_target_indicator'"
                                                                    class="form-control transparent-bg "
                                                                    v-model="pair.target_indicator"
                                                                    type="text"
                                                                    @input="setUnsaved(true)"
                                                                    @change="updateRevisionPlans('expected_revised_outputs', 'target_indicator', pair.id, pair.target_indicator)">
                                                                </textarea>
                                                                <span v-if="pair.quantity>0"> - {{ pair.quantity }}</span>


                                                            </span>
                                                            <br><br>
                                                            <button v-if="can_view_comment()" class="superscript-btn"
                                                                @click="handleClick('Implementation Plan','Target/Indicator',pair.target_indicator,'target_indicator',pair.table, pair, pair.comments)">*
                                                            </button>
                                                            <button v-if="has_comment('Implementation Plan','Target/Indicator',pair.target_indicator,'target_indicator',pair.table, pair, pair.comments)" class="superscript-btn"
                                                                @click="handleClick('Implementation Plan','Target/Indicator',pair.target_indicator,'target_indicator',pair.table, pair, pair.comments)">*
                                                            </button>
                                                        </td>
                                                        <!-- GAD Issue -->
                                                        <td v-if="i === 0" class="align-top" :id="act.activity_id + '_activity_projects_gad_issue'" :class="{
                                                            'text-danger': has_comment('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)
                                                        }"  style="width: 25%; border: 1px solid #000; padding: 4px;" :rowspan="getPairedOutputs(act.activityProject[0]).length">
                                                            <span v-if="rev.is_strategy_based==0">
                                                                <textarea
                                                                    class="form-control transparent-bg "
                                                                    v-model="act.gad_issue"
                                                                    type="text"
                                                                    @input="setUnsaved(true)"
                                                                    @change="updateRevisionPlans('activity_projects', 'gad_issue', act.activity_id, act.gad_issue)">
                                                                        {{ act.gad_issue }}
                                                                </textarea>
                                                                <button v-if="can_view_comment()" class="superscript-btn"
                                                                    @click="handleClick('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)">*
                                                                </button>
                                                                <button v-if="has_comment('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)" class="superscript-btn"
                                                                    @click="handleClick('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)">*
                                                                </button>
                                                            </span>
                                                        </td>

                                                        <!-- Timeline -->
                                                        <td style="width: 25%; border: 1px solid #000; padding: 4px;" class="align-top" v-if="i === 0" :rowspan="getPairedOutputs(act.activityProject[0]).length" :class="{
                                                            'text-danger': has_comment('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments) ||
                                                            has_comment('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)
                                                        }" >
                                                            <span v-if="rev.is_strategy_based==0">
                                                                <!-- v-if="act.date_from"  -->
                                                                <span >
                                                                    <input class="form-control" type="date" v-model="act.date_from" :id="act.activity_id + '_activity_projects_date_from'"
                                                                        @change="updateRevisionPlans('activity_projects', 'date_from', act.activity_id, act.date_from)"/>
                                                                    <button v-if="can_view_comment()" class="superscript-btn"
                                                                        @click="handleClick('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)">*
                                                                    </button>
                                                                    <button v-if="has_comment('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)" class="superscript-btn"
                                                                        @click="handleClick('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)">*
                                                                    </button>
                                                                </span>
                                                                <!-- v-if="act.date_from && act.date_to" -->
                                                                <span >&nbsp;to&nbsp;</span>
                                                                <!-- v-if="act.date_to" -->
                                                                <span  >
                                                                    <input class="form-control" type="date" v-model="act.date_to"
                                                                        @change="updateRevisionPlans('activity_projects', 'date_to', act.activity_id, act.date_to)"
                                                                        :id="act.activity_id + '_activity_projects_date_to'"/>
                                                                    <button v-if="can_view_comment()" class="superscript-btn"
                                                                        @click="handleClick('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)">*
                                                                    </button>
                                                                    <button v-if="has_comment('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)" class="superscript-btn"
                                                                        @click="handleClick('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)">*
                                                                    </button>
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <!-- Expected Outputs/Outcomes -->
                                                        <td class="align-top" style="width: 25%; border: 1px solid #000; padding: 4px;"

                                                        >
                                                            <!-- OUTPUTS*********************************************************************** -->
                                                            <div :class="{
                                                                'text-danger': has_comment('Implementation Plan','output_description',pair.output_description,'output_description','expected_revised_outputs', pair, pair.comments) ||
                                                                has_comment('Implementation Plan','output_description',pair.output_description,'output_description','expected_revised_outputs', pair, pair.comments)
                                                            }"  v-if="pair.output_description"
                                                            >       <textarea :id="pair.id + '_expected_revised_outputs'"
                                                                        class="form-control transparent-bg "
                                                                        v-model="pair.output_description"
                                                                        type="text"
                                                                        @input="setUnsaved(true)"
                                                                        @change="updateRevisionPlans('expected_revised_outputs', 'description', pair.id, pair.output_description)">
                                                                    </textarea>
                                                                    <!-- <span v-if="pair.quantity>0" > {{ pair.quantity }} </span> {{ pair.output_description }} gfhfghfghgfhgfh -->
                                                                    <button v-if="can_view_comment()" class="superscript-btn"
                                                                        @click="handleClick('Implementation Plan','output_description',pair.output_description,'output_description','expected_revised_outputs', pair, pair.comments)">*
                                                                    </button>
                                                                    <button v-if="has_comment('Implementation Plan','output_description',pair.output_description,'output_description','expected_revised_outputs', pair, pair.comments)" class="superscript-btn"
                                                                        @click="handleClick('Implementation Plan','output_description',pair.output_description,'output_description','expected_revised_outputs', pair, pair.comments)">*
                                                                    </button>
                                                            </div>
                                                            <!-- OUTCOMES*********************************************************************** -->
                                                            <div :class="{
                                                                    'text-danger': has_comment('Implementation Plan','outcome_description',pair.outcome_description,'outcome_description','expected_revised_outcomes', pair, pair.comments) ||
                                                                    has_comment('Implementation Plan','outcome_description',pair.output_description,'outcome_description','expected_revised_outcomes', pair, pair.comments)
                                                                }" v-if="pair.outcome_description" :id="pair.id + '_expected_revised_outcomes'"
                                                            >
                                                                <textarea
                                                                        class="form-control transparent-bg "
                                                                        v-model="pair.outcome_description"
                                                                        type="text"
                                                                        @input="setUnsaved(true)"
                                                                        @change="updateRevisionPlans('expected_revised_outcomes', 'description', pair.id, pair.outcome_description)">
                                                                </textarea>
                                                                <button v-if="can_view_comment()" class="superscript-btn"
                                                                    @click="handleClick('Implementation Plan','outcome_description',pair.outcome_description,'outcome_description','expected_revised_outcomes', pair, pair.comments)">*
                                                                </button>
                                                                <button v-if="has_comment('Implementation Plan','outcome_description',pair.outcome_description,'outcome_description','expected_revised_outcomes', pair, pair.comments)" class="superscript-btn"
                                                                    @click="handleClick('Implementation Plan','outcome_description',pair.outcome_description,'outcome_description','expected_revised_outcomes', pair, pair.comments)">*
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </template>

                                            </table>
                                            <!-- IF THE ACTIVITY HAS NO OUTCOMES OR OUTPUTS -->
                                            <table class="m-0" style="border-collapse: collapse; width: 100%; height: 100%; table-layout: fixed;"
                                            v-else>
                                                <tbody >
                                                    <tr >
                                                        <td >
                                                            <!-- {{act}} -->
                                                        </td>
                                                        <!-- GAD Issue -->
                                                        <td class="align-top" :class="{
                                                            'text-danger': has_comment('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)
                                                        }" :id="dat.id + '_activity_projects_gad_issue'" style="width: 25%; border: 1px solid #000; padding: 4px;" :rowspan="getPairedOutputs(act.activityProject[0]).length">
                                                            <span v-if="rev.is_strategy_based==0">
                                                                    <textarea
                                                                        class="form-control transparent-bg "
                                                                        v-model="act.gad_issue"
                                                                        type="text"
                                                                        @input="setUnsaved(true)"
                                                                        @change="updateRevisionPlans('activity_projects', 'gad_issue', act.activity_id, act.gad_issue)">
                                                                            {{ act.gad_issue }}
                                                                    </textarea>
                                                                <button v-if="can_view_comment()" class="superscript-btn"
                                                                    @click="handleClick('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)">*
                                                                </button>
                                                                <button v-if="has_comment('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)" class="superscript-btn"
                                                                    @click="handleClick('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)">*
                                                                </button>
                                                            </span>
                                                        </td>

                                                        <!-- Timeline -->
                                                        <td style="width: 25%; border: 1px solid #000; padding: 4px;" class="align-top" :rowspan="getPairedOutputs(act.activityProject[0]).length" :class="{
                                                            'text-danger': has_comment('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments) ||
                                                            has_comment('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)
                                                        }" >
                                                            <span v-if="rev.is_strategy_based==0">
                                                                <span v-if="act.date_from" :id="dat.id + '_activity_projects_date_from'">
                                                                    <input class="form-control" type="date" v-model="act.date_from"
                                                                        @change="updateRevisionPlans('activity_projects', 'date_from', act.activity_id, act.date_from)"/>
                                                                    <button v-if="can_view_comment()" class="superscript-btn"
                                                                        @click="handleClick('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)">*
                                                                    </button>
                                                                    <button v-if="has_comment('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)" class="superscript-btn"
                                                                        @click="handleClick('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)">*
                                                                    </button>
                                                                </span>
                                                                <span v-if="act.date_from && act.date_to">&nbsp;to&nbsp;</span>
                                                                <span v-if="act.date_to" :id="dat.id + '_activity_projects_date_to'">
                                                                    <input class="form-control" type="date" v-model="act.date_to"
                                                                        @change="updateRevisionPlans('activity_projects', 'date_to', act.activity_id, act.date_to)"/>
                                                                    <button v-if="can_view_comment()" class="superscript-btn"
                                                                        @click="handleClick('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)">*
                                                                    </button>
                                                                    <button v-if="has_comment('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)" class="superscript-btn"
                                                                        @click="handleClick('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)">*
                                                                    </button>
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <!-- Expected Outcome -->
                                                        <td >

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </td>
                                    <!-- PERSONNEL SERVICES -->
                                    <td :class="{
                                        'text-danger': has_comment('Implementation Plan','activity Personnel Services',act.ps_total,'ps_total','activity_projects', act, act.comments)
                                    }" :id="act.activity_id + '_activity_projects_ps_total'">
                                        <span v-if="rev.is_strategy_based==0">
                                            <p>Q1:<input class="form-control"
                                                    type="number"
                                                    v-model="act.ps_q1"
                                                    @input="setUnsaved(true)"
                                                    @change="updateRevisionPlans('activity_projects', 'ps_q1', act.activity_id, act.ps_q1)"
                                                />
                                            </p>
                                            <p>Q2:<input class="form-control"
                                                    type="number"
                                                    v-model="act.ps_q2"
                                                    @input="setUnsaved(true)"
                                                    @change="updateRevisionPlans('activity_projects', 'ps_q2', act.activity_id, act.ps_q2)"
                                                />
                                            </p>
                                            <p>Q3:<input class="form-control"
                                                    type="number"
                                                    v-model="act.ps_q3"
                                                    @input="setUnsaved(true)"
                                                    @change="updateRevisionPlans('activity_projects', 'ps_q3', act.activity_id, act.ps_q3)"
                                                />
                                            </p>
                                            <p>Q4:<input class="form-control"
                                                    type="number"
                                                    v-model="act.ps_q4"
                                                    @input="setUnsaved(true)"
                                                    @change="updateRevisionPlans('activity_projects', 'ps_q4', act.activity_id, act.ps_q4)"
                                                />
                                            </p>
                                            {{ format_number_conv((parseFloat(act.ps_q1)+parseFloat(act.ps_q2)+parseFloat(act.ps_q3)+parseFloat(act.ps_q4)),2,true) }}
                                        </span>
                                        <!-- {{ dat.id + '_activity_projects_ps_total' }} -->
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Implementation Plan','activity Personnel Services',act.ps_total,'ps_total','activity_projects', act, act.comments)">*
                                        </button>
                                        <button v-if="has_comment('Implementation Plan','activity Personnel Services',act.ps_total,'ps_total','activity_projects', act, act.comments)" class="superscript-btn"
                                            @click="handleClick('Implementation Plan','activity Personnel Services',act.ps_total,'ps_total','activity_projects', act, act.comments)">*
                                        </button>
                                    </td>
                                    <!-- MAINTENANCE, OPERATING, AND OTHER EXPENSES -->
                                    <td :class="{
                                        'text-danger': has_comment('Implementation Plan','activity MOOE',act.mooe_total,'mooe_total','activity_projects', act, act.comments)
                                    }" :id="dat.id + '_activity_projects_mooe_total'">
                                        <span v-if="rev.is_strategy_based==0">
                                            <p>Q1:<input class="form-control"
                                                    type="number"
                                                    v-model="act.mooe_q1"
                                                    @input="setUnsaved(true)"
                                                    @change="updateRevisionPlans('activity_projects', 'mooe_q1', act.activity_id, act.mooe_q1)"
                                                />
                                            </p>
                                            <p>Q2:<input class="form-control"
                                                    type="number"
                                                    v-model="act.mooe_q2"
                                                    @input="setUnsaved(true)"
                                                    @change="updateRevisionPlans('activity_projects', 'mooe_q2', act.activity_id, act.mooe_q2)"
                                                />
                                            </p>
                                            <p>Q3:<input class="form-control"
                                                    type="number"
                                                    v-model="act.mooe_q3"
                                                    @input="setUnsaved(true)"
                                                    @change="updateRevisionPlans('activity_projects', 'mooe_q3', act.activity_id, act.mooe_q3)"
                                                />
                                            </p>
                                            <p>Q4:<input class="form-control"
                                                    type="number"
                                                    v-model="act.mooe_q4"
                                                    @input="setUnsaved(true)"
                                                    @change="updateRevisionPlans('activity_projects', 'mooe_q4', act.activity_id, act.mooe_q4)"
                                                />
                                            </p>
                                            {{ format_number_conv((parseFloat(act.mooe_q1)+parseFloat(act.mooe_q2)+parseFloat(act.mooe_q3)+parseFloat(act.mooe_q4)),2,true) }}

                                        </span>
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Implementation Plan','activity MOOE',act.mooe_total,'mooe_total','activity_projects', act, act.comments)">*
                                        </button>
                                        <button v-if="has_comment('Implementation Plan','activity MOOE',act.mooe_total,'mooe_total','activity_projects', act, act.comments)" class="superscript-btn"
                                            @click="handleClick('Implementation Plan','activity MOOE',act.mooe_total,'mooe_total','activity_projects', act, act.comments)">*
                                        </button>
                                    </td>
                                    <!-- FINANCIAL EXPENSES -->
                                    <td :class="{
                                        'text-danger': has_comment('Implementation Plan','activity Financial Expenses',act.fe_total,'fe_total','activity_projects', act, act.comments)
                                    }" :id="dat.id + '_activity_projects_fe_total'">
                                        <span v-if="rev.is_strategy_based==0">
                                            <p>Q1:<input class="form-control"
                                                    type="number"
                                                    v-model="act.fe_q1"
                                                    @input="setUnsaved(true)"
                                                    @change="updateRevisionPlans('activity_projects', 'fe_q1', act.activity_id, act.fe_q1)"
                                                />
                                            </p>
                                            <p>Q2:<input class="form-control"
                                                    type="number"
                                                    v-model="act.fe_q2"
                                                    @input="setUnsaved(true)"
                                                    @change="updateRevisionPlans('activity_projects', 'fe_q2', act.activity_id, act.fe_q2)"
                                                />
                                            </p>
                                            <p>Q3:<input class="form-control"
                                                    type="number"
                                                    v-model="act.fe_q3"
                                                    @input="setUnsaved(true)"
                                                    @change="updateRevisionPlans('activity_projects', 'fe_q3', act.activity_id, act.fe_q3)"
                                                />
                                            </p>
                                            <p>Q4:<input class="form-control"
                                                    type="number"
                                                    v-model="act.fe_q4"
                                                    @input="setUnsaved(true)"
                                                    @change="updateRevisionPlans('activity_projects', 'fe_q4', act.activity_id, act.fe_q4)"
                                                />
                                            </p>
                                            {{ format_number_conv((parseFloat(act.fe_q1)+parseFloat(act.fe_q2)+parseFloat(act.fe_q3)+parseFloat(act.fe_q4)),2,true) }}
                                        </span>
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Implementation Plan','activity Financial Expenses',act.fe_total,'fe_total','activity_projects', act, act.comments)">*
                                        </button>
                                        <button v-if="has_comment('Implementation Plan','activity Financial Expenses',act.fe_total,'fe_total','activity_projects', act, act.comments)" class="superscript-btn"
                                            @click="handleClick('Implementation Plan','activity Financial Expenses',act.fe_total,'fe_total','activity_projects', act, act.comments)">*
                                        </button>
                                    </td>
                                    <!-- CAPITAL OUTLAY -->
                                    <td :class="{
                                        'text-danger': has_comment('Implementation Plan','activity Capital Outlay',act.co_total,'co_total','activity_projects', act, act.comments)
                                    }" :id="act.activity_id + '_activity_projects_co_total'">
                                            <span v-if="rev.is_strategy_based==0">
                                                <p>Q1:<input class="form-control"
                                                        type="number"
                                                        v-model="act.co_q1"
                                                        @input="setUnsaved(true)"
                                                        @change="updateRevisionPlans('activity_projects', 'co_q1', act.activity_id, act.co_q1)"
                                                    />
                                                </p>
                                                <p>Q2:<input class="form-control"
                                                        type="number"
                                                        v-model="act.co_q2"
                                                        @input="setUnsaved(true)"
                                                        @change="updateRevisionPlans('activity_projects', 'co_q2', act.activity_id, act.co_q2)"
                                                    />
                                                </p>
                                                <p>Q3:<input class="form-control"
                                                        type="number"
                                                        v-model="act.co_q3"
                                                        @input="setUnsaved(true)"
                                                        @change="updateRevisionPlans('activity_projects', 'co_q3', act.activity_id, act.co_q3)"
                                                    />
                                                </p>
                                                <p>Q4:<input class="form-control"
                                                        type="number"
                                                        v-model="act.co_q4"
                                                        @input="setUnsaved(true)"
                                                        @change="updateRevisionPlans('activity_projects', 'co_q4', act.activity_id, act.co_q4)"
                                                    />
                                                </p>
                                                {{ format_number_conv((parseFloat(act.co_q1)+parseFloat(act.co_q2)+parseFloat(act.co_q3)+parseFloat(act.co_q4)),2,true) }}

                                            </span>
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Implementation Plan','activity Capital Outlay',act.co_total,'co_total','activity_projects', act, act.comments)">*
                                        </button>
                                        <button v-if="has_comment('Implementation Plan','activity Capital Outlay',act.co_total,'co_total','activity_projects', act, act.comments)" class="superscript-btn"
                                            @click="handleClick('Implementation Plan','activity Capital Outlay',act.co_total,'co_total','activity_projects', act, act.comments)">*
                                        </button>
                                    </td>
                                    <!-- TOTAL -->
                                    <td>
                                        <!-- <span v-if="paps.is_strategy_based==0">{{ format_number_conv(parseFloat(act.ps_total) + parseFloat(act.mooe_total)+ parseFloat(act.co_total),2,true) }}</span> -->
                                        <p>Q1:
                                            <input class="form-control"
                                                type="number"
                                                :value="parseFloat(act.ps_q1) + parseFloat(act.mooe_q1) + parseFloat(act.fe_q1) + parseFloat(act.co_q1)"
                                                disabled
                                            />
                                        </p>

                                        <p>Q2:
                                            <input class="form-control"
                                                type="number"
                                                :value="parseFloat(act.ps_q2) + parseFloat(act.mooe_q2) + parseFloat(act.fe_q2) + parseFloat(act.co_q2)"
                                                disabled
                                            />
                                        </p>

                                        <p>Q3:
                                            <input class="form-control"
                                                type="number"
                                                :value="parseFloat(act.ps_q3) + parseFloat(act.mooe_q3) + parseFloat(act.fe_q3) + parseFloat(act.co_q3)"
                                                disabled
                                            />
                                        </p>

                                        <p>Q4:
                                            <input class="form-control"
                                                type="number"
                                                :value="parseFloat(act.ps_q4) + parseFloat(act.mooe_q4) + parseFloat(act.fe_q4) + parseFloat(act.co_q4)"
                                                disabled
                                            />
                                        </p>

                                        <!-- SUM OF ALL 16 VALUES -->
                                        {{
                                            format_number_conv(
                                                (
                                                    parseFloat(act.ps_q1) + parseFloat(act.mooe_q1) + parseFloat(act.fe_q1) + parseFloat(act.co_q1) +
                                                    parseFloat(act.ps_q2) + parseFloat(act.mooe_q2) + parseFloat(act.fe_q2) + parseFloat(act.co_q2) +
                                                    parseFloat(act.ps_q3) + parseFloat(act.mooe_q3) + parseFloat(act.fe_q3) + parseFloat(act.co_q3) +
                                                    parseFloat(act.ps_q4) + parseFloat(act.mooe_q4) + parseFloat(act.fe_q4) + parseFloat(act.co_q4)
                                                ),
                                                2,
                                                true
                                            )
                                        }}

                                    </td>
                                    <!-- CCET Code -->
                                    <td :class="{
                                        'text-danger': has_comment('Implementation Plan','activity CCET Code',act.ccet_code,'ccet_code','activity_projects', act, act.comments)
                                    }" :id="act.activity_id + '_activity_projects_ccet_code'">
                                        <span v-if="rev.is_strategy_based==0">
                                            <multiselect
                                                class="form-select dynamic-width"
                                                :options="ccet_computed"
                                                :searchable="true"
                                                label="label"
                                                track-by="label"
                                                :reduce="act => act.ccet_code"
                                                v-model="act.ccet_code"
                                                @input="newVal => updateRevisionPlans('activity_projects', 'ccet_code', act.activity_id, newVal)"
                                            />
                                            <!-- <textarea
                                                class="form-control transparent-bg "
                                                v-model="act.ccet_code"
                                                type="text"
                                                @input="setUnsaved(true)"
                                                @input="updateCCET($event)"
                                                @change="updateRevisionPlans('activity_projects', 'ccet_code', act.activity_id, act.ccet_code)">
                                                    {{ act.ccet_code }}
                                            </textarea> -->
                                        </span>
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Implementation Plan','activity CCET Code',act.ccet_code,'ccet_code','activity_projects', act, act.comments)">*
                                        </button>
                                        <button v-if="has_comment('Implementation Plan','activity CCET Code',act.ccet_code,'ccet_code','activity_projects', act, act.comments)" class="superscript-btn"
                                            @click="handleClick('Implementation Plan','activity CCET Code',act.ccet_code,'ccet_code','activity_projects', act, act.comments)">*
                                        </button>
                                    </td>
                                    <!-- RESPONSIBLE INDIVIDUAL -->
                                    <td :class="{
                                        'text-danger': has_comment('Implementation Plan','activity Person Responsible',act.responsible,'responsible','activity_projects', act, act.comments)
                                    }" :id="act.activity_id + '_activity_projects_responsible'">
                                        <span v-if="paps.is_strategy_based==0">
                                            <textarea
                                                class="form-control transparent-bg "
                                                v-model="act.responsible"
                                                type="text"
                                                @input="setUnsaved(true)"
                                                @change="updateRevisionPlans('activity_projects', 'responsible', act.activity_id, act.responsible)">
                                                    {{ act.ccet_code }}
                                            </textarea>
                                        </span>
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Implementation Plan','activity Person Responsible',act.responsible,'responsible','activity_projects', act, act.comments)">*
                                        </button>
                                        <button v-if="has_comment('Implementation Plan','activity Person Responsible',act.responsible,'responsible','activity_projects', act, act.comments)" class="superscript-btn"
                                            @click="handleClick('Implementation Plan','activity Person Responsible',act.responsible,'responsible','activity_projects', act, act.comments)">*
                                        </button>
                                    </td>
                                    <!--Actions-->
                                    <td>
                                        <!-- activity_id {{ act.activityProject[0].activity_id }}
                                        activity_project_id: {{ act.activityProject[0].id }} -->
                                        <button class="btn btn-primary btn-sm text-white"
                                        @click="showExpectedOutputModal(act.activityProject[0].expected_output,act.activityProject[0].activity_id,
                                            act.activityProject[0].id, act.description)
                                            ">
                                                Expected Outputs
                                        </button><hr >
                                        <button class="btn btn-primary btn-sm text-white"
                                        @click="showExpectedOutcomeModal(act.activityProject[0].expected_outcome,act.activityProject[0].activity_id,
                                            act.activityProject[0].id)">
                                            Expected Outcomes
                                        </button><hr >
                                        <button class="btn btn-primary btn-sm text-white"
                                        @click="showExpectedOutcomesModal(act.id)">
                                            Edit Activity
                                        </button><hr >
                                        <button class="btn btn-danger btn-sm text-white"
                                            @click="deleteDataActivityOrStrat(act.id, 'activities', dat.description, this.form.id)">
                                            🗑 Delete Activity
                                        </button><hr>
                                    </td>
                                </tr>
                            </template>
                        </template>
                        <!-- TOTALS*********************************************************************************** -->
                        <tr>
                                <!-- <td></td>
                                <td colspan="5">TOTAL</td> -->
                                <!-- PS TOTAL -->
                                <!-- <td :class="{
                                    'text-danger': has_comment('Implementation Plan',
                                    format_number_conv(v_imp_ps,2,true),
                                    format_number_conv(v_imp_ps,2,true),
                                    'imp_ps',
                                    'revision_plans',
                                    paps,
                                    paps.comments)
                                }"
                                :id="paps.id+'_revision_plans_imp_ps'">
                                    ₱ {{ totalImplementationPS.toLocaleString() }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Implementation Plan',
                                        format_number_conv(v_imp_ps,2,true),
                                        format_number_conv(v_imp_ps,2,true),
                                        'imp_ps',
                                        'revision_plans',
                                        paps,
                                        paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Implementation Plan',
                                            format_number_conv(v_imp_ps,2,true),
                                            format_number_conv(v_imp_ps,2,true),
                                            'imp_ps',
                                            'revision_plans',
                                            paps,
                                            paps.comments)" class="superscript-btn"
                                        @click="handleClick('Implementation Plan',
                                            format_number_conv(v_imp_ps,2,true),
                                            format_number_conv(v_imp_ps,2,true),
                                            'imp_ps',
                                            'revision_plans',
                                            paps,
                                            paps.comments)">*
                                    </button>
                                </td> -->
                                <!-- MOOE TOTAL -->
                                <!-- <td :class="{
                                    'text-danger': has_comment('Implementation Plan',
                                    format_number_conv(v_imp_mooe,2,true),
                                    format_number_conv(v_imp_mooe,2,true),
                                    'imp_mooe',
                                    'revision_plans',
                                    paps,
                                    paps.comments)
                                }"
                                :id="paps.id+'_revision_plans_imp_mooe'"
                                > -->
                                <!-- ₱ {{ totalImplementationMOOE.toLocaleString() }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Implementation Plan',
                                            format_number_conv(v_imp_mooe,2,true),
                                            format_number_conv(v_imp_mooe,2,true),
                                            'imp_mooe',
                                            'revision_plans',
                                            paps,
                                            paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Implementation Plan',
                                            format_number_conv(v_imp_mooe,2,true),
                                            format_number_conv(v_imp_mooe,2,true),
                                            'imp_mooe',
                                            'revision_plans',
                                            paps,
                                            paps.comments)" class="superscript-btn"
                                        @click="handleClick('Implementation Plan',
                                            format_number_conv(v_imp_mooe,2,true),
                                            format_number_conv(v_imp_mooe,2,true),
                                            'imp_mooe',
                                            'revision_plans',
                                            paps,
                                            paps.comments)">*
                                    </button>
                                </td> -->
                                <!-- FE TOTAL -->
                                <!-- <td :class="{
                                    'text-danger': has_comment('Implementation Plan',
                                    format_number_conv(v_imp_fe,2,true),
                                    format_number_conv(v_imp_fe,2,true),
                                    'imp_fe',
                                    'revision_plans',
                                    paps,
                                    paps.comments)
                                }"
                                :id="paps.id+'_revision_plans_imp_fe'"
                                > -->
                                <!-- {{ format_number_conv(v_imp_fe,2,true) }} -->
                                <!-- ₱ {{ totalImplementationFE.toLocaleString() }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Implementation Plan',
                                            format_number_conv(v_imp_fe,2,true),
                                            format_number_conv(v_imp_fe,2,true),
                                            'imp_fe',
                                            'revision_plans',
                                            paps,
                                            paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Implementation Plan',
                                            format_number_conv(v_imp_fe,2,true),
                                            format_number_conv(v_imp_fe,2,true),
                                            'imp_fe',
                                            'revision_plans',
                                            paps,
                                            paps.comments)" class="superscript-btn"
                                        @click="handleClick('Implementation Plan',
                                            format_number_conv(v_imp_fe,2,true),
                                            format_number_conv(v_imp_fe,2,true),
                                            'imp_fe',
                                            'revision_plans',
                                            paps,
                                            paps.comments)">*
                                    </button>
                                </td> -->
                                <!-- CO TOTAL -->
                                <!-- <td :class="{
                                    'text-danger': has_comment('Implementation Plan',
                                    format_number_conv(v_imp_co,2,true),
                                    format_number_conv(v_imp_co,2,true),
                                    'imp_co',
                                    'revision_plans',
                                    paps,
                                    paps.comments)
                                }"
                                :id="paps.id+'_revision_plans_imp_fe'"
                                > -->
                                <!-- {{ format_number_conv(v_imp_co,2,true)}} -->
                                <!-- ₱ {{ totalImplementationCO.toLocaleString() }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Implementation Plan',
                                            format_number_conv(v_imp_co,2,true),
                                            format_number_conv(v_imp_co,2,true),
                                            'imp_co',
                                            'revision_plans',
                                            paps,
                                            paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Implementation Plan',
                                            format_number_conv(v_imp_co,2,true),
                                            format_number_conv(v_imp_co,2,true),
                                            'imp_co',
                                            'revision_plans',
                                            paps,
                                            paps.comments)" class="superscript-btn"
                                        @click="handleClick('Implementation Plan',
                                            format_number_conv(v_imp_co,2,true),
                                            format_number_conv(v_imp_co,2,true),
                                            'imp_co',
                                            'revision_plans',
                                            paps,
                                            paps.comments)">*
                                    </button>
                                </td> -->
                                <!-- <td class="text-end"
                                    :class="{
                                        'text-danger': has_comment('Implementation Plan',
                                        format_number_conv(imp_amount,2,true),
                                        format_number_conv(imp_amount,2,true),
                                        'total_imp_amount',
                                        'revision_plans',
                                        paps,
                                        paps.comments)
                                    }"
                                > -->
                                <!-- {{ format_number_conv(imp_amount,2,true) }} -->
                                <!-- ₱ {{ totalImplementationAll.toLocaleString() }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Implementation Plan',
                                            format_number_conv(imp_amount,2,true),
                                            format_number_conv(imp_amount,2,true),
                                            'total_imp_amount',
                                            'revision_plans',
                                            paps,
                                            paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Implementation Plan',
                                            format_number_conv(imp_amount,2,true),
                                            format_number_conv(imp_amount,2,true),
                                            'total_imp_amount',
                                            'revision_plans',
                                            paps,
                                            paps.comments)" class="superscript-btn"
                                        @click="handleClick('Implementation Plan',
                                            format_number_conv(imp_amount,2,true),
                                            format_number_conv(imp_amount,2,true),
                                            'total_imp_amount',
                                            'revision_plans',
                                            paps,
                                            paps.comments)">*
                                    </button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- {{ paps }} -->
        <!-- {{  form }} -->
        <!-- mfos_data: {{ mfos_data }}
        <br /><br /><br />
        FFUNCCOD: {{ form.FFUNCCOD }}<br />
        dataMFO: {{ formattedMFOs }}
        <br />
        <br />
        <br />
        {{ mfos }} -->

        <StrategyModal v-if="StrategyModalVisible" @close-modal-event="closeStrategyModal" title="STRATEGIES MODAL">
            <table class="table table-sm table-borderless table-hover" style="border-color: #000; border-width: 2px;">
                <tr v-for="(strategy, index) in strategies" :key="index" class="strategy-item mb-2">
                    <td >
                        <input
                            v-model="strategy.description"
                            placeholder="Description"
                            type="text"
                            class="form-control mb-1"
                        />
                    </td>
                    <td>
                        <input
                            v-model="strategy.year_period"
                            placeholder="Year Period"
                            type="number"
                            class="form-control mb-1"
                        />
                    </td>
                    <td><button @click="removeStrategy(index)"
                                class="btn btn-danger btn-sm"
                                style="background-color: #dc3545; color: #fff; border: none;"
                        >
                        X</button>
                    </td>
                </tr>
            </table>


            <button @click="addStrategy" class="btn btn-primary mt-2">Add Row</button>&nbsp;
            <button @click="saveStrategies" class="btn btn-success mt-2">Save</button>
            <!-- {{strategies}} -->
        </StrategyModal>
        <ActivityModal v-if="ActivityModalVisible" @close-modal-event="closeActivityModal" title="ACTIVITIES MODAL">

            <table class="table table-sm table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Gender Issues</th>

                        <th>Timeline</th>
                        <th>Period</th>
                        <!-- PS -->
                        <th class="text-center bg-light">PS</th>

                        <!-- MOOE -->
                        <th class="text-center bg-light">MOOE</th>

                        <!-- CO -->
                        <th class="text-center bg-light">CO</th>

                        <!-- FE -->
                        <th class="text-center bg-light">FE</th>
                        <th>CCET</th>
                        <th>Responsible</th>
                        <th></th>
                    </tr>

                </thead>

                <tbody>
                    <tr v-for="(act, index) in activities" :key="index">

                        <td><textarea v-model="act.description" class="form-control" ></textarea></td>
                        <td><textarea v-model="act.gad_issue" class="form-control" ></textarea></td>


                        <td><input v-model="act.date_from" type="date" class="form-control" /><p>to</p>
                            <p><input v-model="act.date_to" type="date" class="form-control" /></p>
                        </td>
                        <td>
                            <div><input type="text" value="Q1" class="form-control" disabled/></div>
                            <div><input type="text" value="Q2" class="form-control" disabled/></div>
                            <div><input type="text" value="Q3" class="form-control" disabled/></div>
                            <div><input type="text" value="Q4" class="form-control" disabled/></div>
                        </td>
                        <!-- PS -->
                        <td>
                            <div><input v-model.number="act.ps_q1" type="number" class="form-control" /></div>
                            <div><input v-model.number="act.ps_q2" type="number" class="form-control" /></div>
                            <div><input v-model.number="act.ps_q3" type="number" class="form-control" /></div>
                            <div><input v-model.number="act.ps_q4" type="number" class="form-control" /></div>
                            <div>Total ({{  format_number_conv(parseFloat(act.ps_q1) + parseFloat(act.ps_q2) + parseFloat(act.ps_q3) + parseFloat(act.ps_q4), 2, true)  }})</div>
                        </td>


                        <!-- MOOE -->
                        <td>
                            <div><input v-model.number="act.mooe_q1" type="number" class="form-control" /></div>
                            <div><input v-model.number="act.mooe_q2" type="number" class="form-control" /></div>
                            <div><input v-model.number="act.mooe_q3" type="number" class="form-control" /></div>
                            <div><input v-model.number="act.mooe_q4" type="number" class="form-control" /></div>
                            <div>Total ({{ format_number_conv(parseFloat(act.mooe_q1) + parseFloat(act.mooe_q2) + parseFloat(act.mooe_q3) + parseFloat(act.mooe_q4), 2, true)  }})</div>
                        </td>


                        <!-- CO -->
                        <td>
                            <div><input v-model.number="act.co_q1" type="number" class="form-control" /></div>
                            <div><input v-model.number="act.co_q2" type="number" class="form-control" /></div>
                            <div><input v-model.number="act.co_q3" type="number" class="form-control" /></div>
                            <div><input v-model.number="act.co_q4" type="number" class="form-control" /></div>
                            <div>Total ({{  format_number_conv(parseFloat(act.co_q1) + parseFloat(act.co_q2) + parseFloat(act.co_q3) + parseFloat(act.co_q4), 2, true)  }})</div>
                        </td>


                        <!-- FE -->
                        <td>
                            <div><input v-model.number="act.fe_q1" type="number" class="form-control" /></div>
                            <div><input v-model.number="act.fe_q2" type="number" class="form-control" /></div>
                            <div><input v-model.number="act.fe_q3" type="number" class="form-control" /></div>
                            <div><input v-model.number="act.fe_q4" type="number" class="form-control" /></div>

                            <div>Total ({{  format_number_conv(parseFloat(act.fe_q1) + parseFloat(act.fe_q2) + parseFloat(act.fe_q3) + parseFloat(act.fe_q4), 2, true)  }})</div>
                        </td>
                        <!-- CCET -->
                        <td>
                            <!-- <input v-model="act.ccet_code" class="form-control" /> -->
                            <!-- <select v-model="act.ccet_code" class="form-select" >
                                <option value="">Select CCET</option>
                                <option v-for="ccet in ccet_codes" :key="ccet.ccet_code" :value="ccet.ccet_code">
                                    {{ ccet.ccet_code }} - {{ ccet.description }}
                                </option>
                            </select> -->
                            <multiselect
                                class="form-select dynamic-width"
                                :options="ccet_computed"
                                :searchable="true"
                                label="label"
                                track-by="label"
                                :reduce="act => act.ccet_code"
                                v-model="act.ccet_code"
                                @input="updateCCET($event)"
                            />
                        </td>
                        <!-- PERSON RESPONSIBLE -->
                        <td><input v-model="act.responsible" class="form-control" /></td>
                        <td>
                            <button class="btn btn-danger btn-sm" @click="removeActivity(index)">
                                X
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="mt-3 d-flex justify-content-between">
                <button class="btn btn-primary text-white" @click="addActivity">Add Row</button>
                <button class="btn btn-success text-white" @click="saveActivities">Save</button>
            </div>



        </ActivityModal>
        <ExpectedOutputModal v-if="ExpectedOutputModalVisible" @close-modal-event="hideExpectedOutputModal" title="EXPECTED OUTPUTS">
            <!-- <h3><p><b>Activity: </b><u>{{activity_description_current}}</u></p></h3> -->
            <table style="border: none !important; border-collapse: collapse !important;">
                <tbody>
                    <tr>
                        <td style="border: none !important;"><b>Activity: </b></td>
                        <td style="border: none !important;"><u>{{activity_description_current}}</u></td>
                    </tr>
                </tbody>
            </table>
            <h4>Expected Outputs</h4>

            <!-- {{ expected_outputs_current }}
            activity_id: {{ activity_id }}
            activity_project_id: {{ activity_project_id }} -->
            <div v-if="expected_outputs_new.length > 0" >
                <div class="mb-3">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="table table-secondary text-center align-middle">
                                <th rowspan="3">Expected Output Description</th>
                                <th rowspan="3">Target/Indicator</th>
                                <th colspan="4">Physical</th>
                                <th rowspan="3">Actions</th>
                            </tr>
                            <tr class="table table-secondary text-center align-middle">
                                <th colspan="4">Timeline/Duration</th>
                            </tr>
                            <tr class="table table-secondary text-center align-middle">
                                <th>1st Quarter</th>
                                <th>2nd Quarter</th>
                                <th>3rd Quarter</th>
                                <th>4th Quarter</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(output, index) in expected_outputs_new" :key="index">
                            <td><textarea v-model="output.description" class="form-control"></textarea></td>
                            <td><textarea type="text" v-model="output.target_indicator" class="form-control"></textarea></td>
                            <td><input type="number" v-model="output.physical_q1" class="form-control"></td>
                            <td><input type="number" v-model="output.physical_q2" class="form-control"></td>
                            <td><input type="number" v-model="output.physical_q3" class="form-control"></td>
                            <td><input type="number" v-model="output.physical_q4" class="form-control"></td>
                            <td>
                                <button @click="removeExpectedOutput(index)" class="btn btn-danger btn-sm">Remove</button>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="mt-3">
                <button @click="addExpectedOutput" class="btn btn-primary">Add Row</button>
                <button @click="saveExpectedOutputs" class="btn btn-success" v-if="expected_outputs_new.length > 0">Save</button>
            </div>
            <table class="table table-bordered">

                <!-- <tr> -->
                    <thead>
                        <tr class="table table-secondary text-center align-middle">
                            <th rowspan="3">Description</th>
                            <th rowspan="3">Target/Indicator</th>
                            <th colspan="4">Physical</th>
                            <th rowspan="3">Actions</th>
                        </tr>
                        <tr class="table table-secondary text-center align-middle">
                            <th colspan="4">Timeline/Duration</th>
                        </tr>
                        <tr class="table table-secondary text-center align-middle">
                            <th>1st Quarter</th>
                            <th>2nd Quarter</th>
                            <th>3rd Quarter</th>
                            <th>4th Quarter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="exp in expected_outputs_current">
                            <td>
                                <textarea
                                    class="form-control transparent-bg "
                                    v-model="exp.description"
                                    type="text"
                                    @input="setUnsaved(true)"
                                    @change="updateRevisionPlans('expected_revised_outputs', 'description', exp.id, exp.description)">

                                </textarea>
                            </td>
                            <td>
                                <textarea
                                    class="form-control transparent-bg "
                                    v-model="exp.target_indicator"
                                    type="text"
                                    @input="setUnsaved(true)"
                                    @change="updateRevisionPlans('expected_revised_outputs', 'target_indicator', exp.id, exp.target_indicator)">

                                </textarea>
                            </td>
                            <td>
                                <textarea
                                    class="form-control transparent-bg "
                                    v-model="exp.physical_q1"
                                    type="text"
                                    @input="setUnsaved(true)"
                                    @change="updateRevisionPlans('expected_revised_outputs', 'physical_q1', exp.id, exp.physical_q1)">
                                </textarea>
                            </td>
                            <td>
                                <textarea
                                    class="form-control transparent-bg "
                                    v-model="exp.physical_q2"
                                    type="text"
                                    @input="setUnsaved(true)"
                                    @change="updateRevisionPlans('expected_revised_outputs', 'physical_q2', exp.id, exp.physical_q2)">
                                </textarea>
                            </td>
                            <td>
                                <textarea
                                    class="form-control transparent-bg "
                                    v-model="exp.physical_q3"
                                    type="text"
                                    @input="setUnsaved(true)"
                                    @change="updateRevisionPlans('expected_revised_outputs', 'physical_q3', exp.id, exp.physical_q3)">
                                </textarea>
                            </td>
                            <td>
                                <textarea
                                    class="form-control transparent-bg "
                                    v-model="exp.physical_q4"
                                    type="text"
                                    @input="setUnsaved(true)"
                                    @change="updateRevisionPlans('expected_revised_outputs', 'physical_q4', exp.id, exp.physical_q4)">
                                </textarea>
                            </td>
                            <td>
                                <button class="btn btn-danger btn-sm text-white"
                                    @click="deleteExpectedOutput(exp.id, 'expected_revised_outputs', exp.description, index)">
                                    🗑 Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                <!-- </tr> -->
            </table>
        </ExpectedOutputModal>
        <!-- id:{{ id }}
        <br />
        editData: {{editData}}
        <br />
        form: {{form}} -->

        <!-- {{id}}
        {{ rev }} -->
        <!-- {{ implementation }} -->
          <!-- {{ ccet_codes }} -->
    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Places from "@/Shared/PlacesShared";
import StrategyModal from "@/Shared/ModalDynamicTitle";
import ActivityModal from "@/Shared/ModalDynamicTitle";
import ExpectedOutputModal from "@/Shared/ModalDynamicTitle";
import debounce from 'lodash/debounce';
//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        auth: Object,
        editData: Object,
        paps: Object,
        mfos: Object,
        chief_agenda: Object,
        socio_economic: Object,
        sustainable: Object,
        executive_legislative: Object,
        research: Object,
        idmfo: String,
        functions: Object,
        popsp_agencies: Object,
        comments: Object,
        implementation: Object,
        id: String,
        rev: Object,
        ccet_codes: Object
    },
    components: {
        Places: () => new Promise((resolve) => {
            setTimeout(() => {
                resolve(Places)
            }, 2000)
        }),
        StrategyModal,
        ActivityModal,
        ExpectedOutputModal,
    },
    data() {
        return {
            filter: false,
            from_mfo: false,
            submitted: false,
            form: useForm({
                paps_desc: "",
                type: "",
                FFUNCCOD: "",
                idmfo: "",
                MOV: "",
                sector: "",
                chief_executive_agenda: "",
                socio_economic_agenda: "",
                sust_devt_goal: "",
                executive_legislative_agenda: "",
                research_agenda: "",
                sector: "",
                subsector: "",
                source_of_funds: "",
                source_others_specify: "",
                funding_agency: "",
                popsp: 0,
                focus_area: "",
                is_mother_program: 0,
                mother_program_id: null,
                aip_code: "",
                agency_name: "",
                date_start: "",
                date_end: "",
                aip_code: "",
                id: null,
                activity: {
                    description: "",
                    ps_q1: 0,
                    ps_q2: 0,
                    ps_q3: 0,
                    ps_q4: 0,
                    mooee_q1: 0,
                    mooee_q2: 0,
                    mooee_q3: 0,
                    mooee_q4: 0,
                    co_q1: 0,
                    co_q2: 0,
                    co_q3: 0,
                    co_q4: 0,
                    fe_q1: 0,
                    fe_q2: 0,
                    fe_q3: 0,
                    fe_q4: 0,
                    ccet_code: "",
                    responsible: "",
                    expected_revised_outputs: {
                        description: "",
                        ccet_code: "",
                    }
                }
            }),
            year_values: ["2000",
                "2001",
                "2002",
                "2003",
                "2004",
                "2005",
                "2006",
                "2007",
                "2008",
                "2009",
                "2010",
                "2011",
                "2012",
                "2013",
                "2014",
                "2015",
                "2016",
                "2017",
                "2018",
                "2019",
                "2020",
                "2021",
                "2022",
                "2023",
                "2024",
                "2025",
                "2026",
                "2027",
                "2028",
                "2029",
                "2030",
                "2031",
                "2032",
                "2033",
                "2034",
                "2035",
                "2036",
                "2037",
                "2038",
                "2039",
                "2040",
                "2041",
                "2042",
                "2043",
                "2044",
                "2045",
                "2046",
                "2047",
                "2048",
                "2049",
                "2050",
                "2051",
                "2052",
                "2053",
                "2054",
                "2055",
                "2056",
                "2057",
                "2058",
                "2059",
                "2060",
                "2061",
                "2062",
                "2063",
                "2064",
                "2065",
                "2066",
                "2067",
                "2068",
                "2069",
                "2070",
                "2071",
                "2072",
                "2073",
                "2074",
                "2075",
                "2076",
                "2077",
                "2078",
                "2079",
                "2080",
                "2081",
                "2082",
                "2083",
                "2084",
                "2085",
                "2086",
                "2087",
                "2088",
                "2089",
                "2090",
                "2091",
                "2092",
                "2093",
                "2094",
                "2095",
                "2096",
                "2097",
                "2098",
                "2099",
                "2100",
            ],
            mfos_data: [],
            motherPAPS: [],
            pageTitle: "",

            //STRATEGIES**************
            StrategyModalVisible: false,
            strategies: [],

            // ACTIVITIES****************
            strategy_id: 0, /*Parent strategy of the activity */
            ActivityModalVisible: false,
            activities: [],
            activity_description_current: '',

            // PAPS Specific **************
            paps_specific: [],

            //EXPECTED OUTPUTS *******************************
            ExpectedOutputModalVisible: false,
            expected_outputs_current: [],
            expected_outputs_new: [],
            activity_id: 0,
            activity_project_id: 0,

            // EDITS
            unsaved: false,

        };
    },
    computed: {
        formattedMFOs() {
            let dataMFO = this.mfos;
            const selectedFFUNCCOD = this.form.FFUNCCOD;
            console.log('Selected FFUNNCOD: ', selectedFFUNCCOD);
            if (this.form.FFUNCCOD) {
                dataMFO = this.mfos.filter((mfo) => mfo.FFUNCCOD === selectedFFUNCCOD);
            }
            console.log('Filtered Data:', dataMFO);
            // if (this.form.FFUNCCOD) {
            //     dataMFO = dataMFO.filter((mfo) => mfo.FFUNCCOD === this.form.FFUNCCOD);
            // }
            // value: program.recid,
            //     label: program.FPROGRAM,
            return dataMFO.map((mfo) => ({

                mfo_desc: mfo.mfo_desc,
                FFUNCCOD: mfo.FFUNCCOD,
                id: mfo.id
            }));
            // return dataPrograms.map((program) => ({
            //     value: program.recid,
            //     label: program.FPROGRAM,
            //     raaotype: program.ftype,
            //     FFUNCCOD: program.FFUNCCOD,
            //     raohsid: program.raohsid
            // }));
            // get() {

            // },
            // set() { }

        },
        ccet_computed(){
            const ccet_code_c = Array.isArray(this.ccet_codes)
                ? this.ccet_codes
                : [];

            // return ccet_code_c.map(ccet => ({
            //     value: ccet.ccet_code,
            //     label: `${ccet.ccet_code} - ${ccet.description}`,
            //     _raw: ccet
            // }));
            // Map existing options
            const options = ccet_code_c.map(ccet => ({
                value: ccet.ccet_code,
                label: `${ccet.ccet_code} - ${ccet.description}`,
                _raw: ccet
            }));

            // Prepend default "Select CCET Code" option
            options.unshift({
                value: null,
                label: "Select CCET Code",
                _raw: null
            });

            return options;
        },
    },
    mounted() {
        if (this.idmfo !== undefined) {
            this.from_mfo = true
        }
        if(this.form.id == null) {
            this.form.source_of_funds = 'dev'
        }
        this.paps_specific = this.paps;
        this.form.idmfo = this.idmfo
        if (this.editData && Object.keys(this.editData).length > 0) {
            this.pageTitle = "Edit"
            this.form.paps_desc = this.editData.paps_desc
            this.form.MOV = this.editData.MOV
            this.form.type = this.editData.type
            this.form.FFUNCCOD = this.editData.FFUNCCOD
            this.form.idmfo = this.editData.idmfo
            this.form.chief_executive_agenda = this.editData.chief_executive_agenda
            this.form.socio_economic_agenda = this.editData.socio_economic_agenda
            this.form.sust_devt_goal = this.editData.sust_devt_goal
            this.form.executive_legislative_agenda = this.editData.executive_legislative_agenda
            this.form.research_agenda = this.editData.research_agenda
            this.form.sector = this.editData.sector
            this.form.subsector = this.editData.subsector
            this.form.source_of_funds = this.editData.source_of_funds
            this.form.source_others_specify = this.editData.source_others_specify
            this.form.funding_agency = this.editData.funding_agency
            this.form.popsp = this.editData.popsp
            this.form.focus_area = this.editData.focus_area
            this.form.is_mother_program = this.editData.is_mother_program
            this.form.aip_code =this.editData.aip_code
            this.form.agency_name = this.editData.agency_name
            this.form.id = this.editData.id
            this.form.activity = this.editData.activity || this.form.activity
            this.filterMFOs()
            this.loadPAPS();
            this.form.mother_program_id = this.editData.mother_program_id
        } else {
            this.pageTitle = "Create"
            if (this.idmfo != undefined) {
                this.form.idmfo = this.idmfo
                this.from_mfo = true
            }
            this.setselect();
        }
    },
    methods: {
        limitWordCount() {
            // Get the words from the input text
            const words = this.form.MOV.split(/\s+/);

            // Limit the input to 50 words
            if (words.length > 50) {
                // If the word count exceeds 50, truncate the input
                this.form.MOV = words.slice(0, 50).join(' ');
            }
        },
        submit() {
            if (this.form.type == "GAS") {
                this.form.idmfo = "0";
            } else {
                if (this.form.idmfo == "0") {
                    this.form.idmfo = null
                }
            }
            this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
            if (this.editData !== undefined && this.id!=0) {
                if (this.from_mfo == true) {
                    this.form.patch("/paps/update/" + this.form.id, this.form);
                } else {
                    this.form.patch("/paps/" + this.form.id, this.form);
                }

            } else {
                this.form.id = null;
                // alert(this.from_mfo);
                // if (this.from_mfo == true) {
                //     this.form.post("/paps/save", this.form);
                // } else {
                this.form.post("/development-fund/store", this.form);
                // }

            }
        },
        setselect() {
            const now = new Date();
            var year_now = now.getFullYear();
            this.form.plan_period_from = year_now;
            this.form.plan_period_to = year_now;
        },
        async filterMFOs() {
            this.mfos_data = [];
            this.motherPAPS = [];
            // await axios.post("/paps/major/final/outputs/filter", { FFUNCCOD: this.form.FFUNCCOD }).then((response) => {
            //     this.mfos_data = response.data.data
            // });
            try {
                var my_url = "/paps/major/final/outputs/filter/" + this.form.FFUNCCOD;

                const response = await axios.get(my_url, { FFUNCCOD: this.form.FFUNCCOD });
                this.mfos_data = response.data.data;
            } catch (error) {
                console.error("Error fetching MFOs:", error);
            }
        },
        async loadPAPS() {
            this.motherPAPS = [];
            // await axios.post("/paps/mother/paps/filter", { idmfo: this.form.idmfo }).then((response) => {
            //     this.motherPAPS = response.data.data
            // });
            try {
                var my_url = "/paps/mother/paps/filter/" + this.form.idmfo;
                // alert(my_url);
                const response = await axios.get(my_url, { idmfo: this.form.idmfo });
                this.motherPAPS = response.data.data;
            } catch (error) {
                console.error("Error fetching PAPS:", error);
            }
        },
        goBack() {
            // Navigate back to the previous page
            window.history.back();
        },
        // **************************COMMENTS******************************************************//
        can_view_comment() {
            var can_comment_here=false;
            if(this.auth.user.department_code=='04'){
                can_comment_here=true;
            }
            return can_comment_here;
        },
        has_comment(section, subtitle, data, column, table, obj, comments_obj){
            var has_comm =false;
            console.log("comments object ************")
            console.log(comments_obj)
            console.trace()
            // if(this.auth.user.department_code==='04'){
            //     has_comm=false
            // }else{
                const count = Array.isArray(comments_obj)
                ? comments_obj.filter(comment =>
                    comment.table_name === table && comment.column_name === column && comment.comment_status === "0"
                    ).length
                : 0;
                if(count>0){
                    has_comm=true;
                }
            // }

            return has_comm;
        },
        handleClick(section, subtitle, data, column, table, obj, comments_obj) {
            this.comment_section = section;
            this.comment_subtitle = subtitle;
            this.comment_data = data;
            this.comment_column = column;
            this.comment_table = table;
            this.comment_reference_object = obj;
            // this.comments = comments_obj;

            this.comments = comments_obj.filter(comment =>
                comment.table_name === table && comment.column_name === column
            );
            this.show_comment_modal = true;
        },


        // STRATEGIES ***************************************************************************************************
        showStrategyModal(){
            this.StrategyModalVisible=true
            this.addStrategy();
        },
        closeStrategyModal(){
            this.StrategyModalVisible=false;
            this.strategies=[];
        },
        addStrategy() {
            const nextYear = new Date().getFullYear() + 1; // current year + 1
            // Create a new sub-object with default values
            const newStrategy = {
                id: null, // will be auto-generated by backend
                description: null,
                idpaps: this.paps_specific.id,      // inherit from paps_specific
                idmfo: this.paps_specific.idmfo,    // inherit from paps_specific
                FFUNCCOD: this.paps_specific.FFUNCCOD, // inherit from paps_specific
                year_period: nextYear,
            };

            this.strategies.push(newStrategy);
        },
        removeStrategy(index) {
            this.strategies.splice(index, 1);
        },
        saveStrategies() {
            // Validation: ensure description and year_period are not null
            const invalid = this.strategies.some(
                s => !s.description || !s.year_period
            );

            if (invalid) {
                alert("Please fill out all Description and Year Period fields before saving.");
                return;
            }
            // Save current scroll position before reload
            const scrollPosition = window.scrollY;
            sessionStorage.setItem('scrollPosition', scrollPosition);

            // Proceed to save (e.g., emit event or call API)
            axios.post('/implementation-workplan/strategies', {
                strategies: this.strategies,
                project_id: this.id,
                paps_id: this.paps_specific.id,
            },
            {
                preserveScroll: true,
                preserveState: true,
            }
            )
            .then(response => {
                console.log('Saved successfully:', response.data);
                // ✅ Save scroll position
                // sessionStorage.setItem('scrollPosition', window.scrollY);
                window.location.reload();
                // Optionally clear the strategies array or show a success message
            })
            .catch(error => {
                console.error('Error saving strategies:', error);
            });

            // Optionally, close modal after save
            this.closeStrategyModal();
        },

        // ACTIVITIES ***************************************************************************************************
        showActivityModal(strategy_id){
            this.strategy_id=strategy_id;
            this.ActivityModalVisible=true;
        },
        closeActivityModal(){
            this.ActivityModalVisible=false;
            this.activities=[];
        },
        getDefaultActivityRow() {
            return {
                // activities table fields
                description: '',
                strategy_id: this.strategy_id,

                // activity_projects fields (NO ID)
                project_id: this.rev.id,
                target_indicator: '',
                date_from: `${new Date().getFullYear()}-01-01`,
                date_to: `${new Date().getFullYear()}-12-31`,

                ps_q1: 0, ps_q2: 0, ps_q3: 0, ps_q4: 0,
                mooe_q1: 0, mooe_q2: 0, mooe_q3: 0, mooe_q4: 0,
                co_q1: 0, co_q2: 0, co_q3: 0, co_q4: 0,
                fe_q1: 0, fe_q2: 0, fe_q3: 0, fe_q4: 0,

                gad_issue: null,
                ccet_code: null,
                responsible: null,
                is_active: 1,
            };
        },
        addActivity() {
            this.activities.push(this.getDefaultActivityRow());
        },
        removeActivity(index) {
            this.activities.splice(index, 1);
        },
        async saveActivities() {
            try {
                const response = await axios.post(
                    '/implementation-workplan/strategies/activities',
                    {
                        activities: this.activities,
                        strategy_id: this.strategy_id
                    },
                    {
                        preserveScroll: true,
                        preserveState: true,
                    }
                ).then((response=>{
                    // ✅ Save scroll position
                    sessionStorage.setItem('scrollPosition', window.scrollY);
                    window.location.reload({
                        preserveScroll: true,
                        preserveState: true,
                    });
                }));

                alert('Activities saved successfully!');
                this.closeActivityModal();
            } catch (error) {
                console.error(error);
                alert('Error saving activities.');
            }
        },
        //IMPLEMENTATION SCHEDULE/WORKPLAN
        getPairedOutputs(activityProject) {
            const output = activityProject?.expected_output || []
            const outcome = activityProject?.expected_outcome || []
            const max_output = Math.max(output.length)
            const max_outcome = Math.max(outcome.length)
            const q1 = activityProject?.physical_q1 || 0
            const q2 = activityProject?.physical_q2 || 0
            const q3 = activityProject?.physical_q3 || 0
            const q4 = activityProject?.physical_q4 || 0
            var quant = parseFloat(q1) + parseFloat(q2) + parseFloat(q3) + parseFloat(q4)
            const rr1= Array.from({ length: max_output }, (_, i) => ({
                id: output[i]?.id||'',
                target_indicator: output[i]?.target_indicator || '',
                outcome_description: '',
                output_description: output[i]?.description || '',
                table: 'expected_revised_outputs',
                quantity: parseFloat(output[i]?.physical_q1 || 0) +
                    parseFloat(output[i]?.physical_q2 || 0) +
                    parseFloat(output[i]?.physical_q3 || 0) +
                    parseFloat(output[i]?.physical_q4 || 0),
                comments: output[i]?.comments || []
            }))
            // { length: max },
            const rr2= Array.from({ length: max_outcome },  (_, i) => ({
                id: outcome[i]?.id||'',
                target_indicator: '',
                outcome_description: outcome[i]?.description || '',
                output_description: '',
                table: 'expected_revised_outcomes',
                quantity: 0,
                comments: outcome[i]?.comments || []
            }))
            return rr1.concat(rr2)
        },

        // CCET CODES *********************************************\
        updateCCET(code_ccet) {
            const selectedEmp = this.ccet_codes.find(
                ccet => String(ccet.ccet_code) === String(code_ccet)
            );


        },

        //EXPECTED OUTPUT ******************************************
        showExpectedOutputModal(activity, activity_id, activity_project_id, activity_desc){
            this.activity_id=activity_id
            this.activity_project_id=activity_project_id
            this.expected_outputs_new = [];
            this.expected_outputs_current = activity
            this.ExpectedOutputModalVisible=true;
            this.activity_description_current=activity_desc;
        },
        hideExpectedOutputModal(){
            // this.ExpectedOutputModalVisible=false;
            // window.location.reload()
            this.ExpectedOutputModalVisible = false;

            // Save scroll position
            localStorage.setItem('scrollPosition', window.scrollY);

            window.location.reload({
                preserveScroll: true,
                preserveState: true,
            });
        },
        addExpectedOutput() {
            this.expected_outputs_new.push({
                id: null,
                description: '',
                strategy_id: null,
                strategy_project_id: null,
                activity_id: this.activity_id,
                activity_project_id: this.activity_project_id,
                is_strategy_outcome: 0,
                project_id: this.activity_project_id,
                target_indicator: '',
                date_from: null,
                date_to: null,
                physical_q1: 0,
                physical_q2: 0,
                physical_q3: 0,
                physical_q4: 0,
                ps_q1: 0,
                ps_q2: 0,
                ps_q3: 0,
                ps_q4: 0,
                mooe_q1: 0,
                mooe_q2: 0,
                mooe_q3: 0,
                mooe_q4: 0,
                co_q1: 0,
                co_q2: 0,
                co_q3: 0,
                co_q4: 0,
                gad_issue: '',
                ccet_code: '',
                responsible: '',
                is_active: 1,
                is_strategy_output: 0,
            });
        },
        removeExpectedOutput(index) {
            this.expected_outputs_new.splice(index, 1);
        },
        async saveExpectedOutputs() {
            try {
                const response = await axios.post('/revision/streamlined/expected/revised/outputs', {
                    expected_outputs: this.expected_outputs_new
                });
                alert('Saved successfully!');
                 this.expected_outputs_current.push(...this.expected_outputs_new);

                this.expected_outputs_new = []; // Clear table after save
                this.$emit('close-modal-event'); // Close modal
            } catch (error) {
                console.error(error);
                alert('Error saving expected outputs.');
            }
        },
        deleteExpectedOutput(id, table, title, index){
            let text = "WARNING!\nAre you sure you want to delete a row from "+table+" with title "+title+"?";
            if (confirm(text) == true) {
                this.$inertia.delete(`/revision/streamlined/${id}/${table}`, {
                    onSuccess: () => {
                        // Only runs if backend deletion succeeds
                        this.expected_outputs_current.splice(index, 1);
                    },
                    onError: () => {
                        alert("Delete failed! Please try again.");
                    },
                });
            }
        },

        // *********************************************************
        // UPDATE Revision Plans*******************************************/
        updateRevisionPlans: debounce(async function(table_name, column_name, id, new_data) {
            // Columns that must be >= 0
            const nonNegativeColumns = [
                'ps_q1','ps_q2','ps_q3','ps_q4',
                'mooe_q1','mooe_q2','mooe_q3','mooe_q4',
                'fe_q1','fe_q2','fe_q3','fe_q4',
                'co_q1','co_q2','co_q3','co_q4'
            ];

            // Validate value
            if (nonNegativeColumns.includes(column_name)) {
                const value = parseFloat(new_data);

                if (isNaN(value) || value < 0) {
                    alert("Value must be greater than or equal to 0.");
                    return; // stop execution
                }
            }
            // If the column is ccet_code and new_data is empty, ask for confirmation
            if (column_name === 'ccet_code' && (!new_data || new_data.trim() === '')) {
                const confirmed = confirm("Are you sure you want to remove the CCET code?");
                if (!confirmed) {
                    // User canceled, stop here
                    return;
                }
            }
            const payload = {
                table_name: table_name,
                column_name: column_name,
                id: id,
                new_data: encodeURIComponent(new_data)
            };

            try {
                const response = await axios.patch(`/revision/streamlined/${id}/update`, payload);
                console.log(response.data);
                this.setUnsaved(false);
            } catch (error) {
                console.error(`Error updating ${table_name} (${column_name})`, error);
            }
        }, 1000), // 🔥 Delay here (1s or 300ms)


        //EDITS***********************************************************
        setUnsaved(status){
            this.unsaved = status
        },

        handleBeforeUnload(event) {
            if (this.unsaved) {
                event.preventDefault();
                event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
            }
        },
    },
};
</script>
<style>


td, th {
  border: 1px solid #000 !important;
}

table {
  border-collapse: collapse !important;
}

.th {
    background-color: #929292 !important;
}
.superscript-btn {
  /* font-size: 0.6em; */
  /* vertical-align: super; */
  border: none;
  background: none;
  padding: 0;
  margin-left: 4px;
  cursor: pointer;
  color: #df280c;
}

.action-btn {
  width: 100%;
}

.no-border-table td,
.no-border-table th {
  border: none !important;
}

.no-border-table {
  border-collapse: collapse !important;
}

.signatory-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* space between cards */
}

.signatory-card {
  flex: 0 0 calc(50% - 0.5rem); /* 2 per row with spacing */
  border: 0px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
}
.signatory-card-full {
  width: 100%; /* each card full width */
  margin-bottom: 1rem;
}
.sticky-comments {
    position: fixed;
    top: 70px;
    right: 20px;
    width: 450px;
    z-index: 10;
}

.scrollable-text {
    height: 300px;           /*define the height you want*/
    overflow-y: auto;        /*vertical scrollbar if content exceeds height*/
    /*padding: 0px;           optional padding*/
    /*border: 1px solid #ccc;  optional border*/
    background-color: #fff;  /*optional background*/
    /*line-height: 1.6;        improve readability*/
}

.sticky-comments .comments-header {
    display: flex;
    justify-content: space-between; /* Push h4 left and button right */
    align-items: center;            /* Vertical alignment */
    margin-bottom: 10px;            /* Space below the header */
}

.sticky-comments .close-btn {
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    line-height: 1;
    padding: 0;
    color: #333;
}

.highlight-target {
    animation: highlightFlash 2s ease-out;
}

@keyframes highlightFlash {
    0% { background-color: #46ff18ff; }
    100% { background-color: transparent; }
}

.comment-approved {
    color: darkgreen;
    padding: 3px 6px;
    border-radius: 4px;
    transition: color .2s;
}

.comment-approved:hover {
    color: #00AEEF; /* sky blue */
}

.comment-rejected {
    color: red;
    padding: 3px 6px;
    border-radius: 4px;
    transition: color .2s;
}

.comment-rejected:hover {
    color: #CC7722; /* golden ochre */
}

.transparent-bg {
    background-color: transparent !important;
}
/* TAB DESIGN *******************************************************************************************************************/
/* Style the tab */
/* .tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  color: #000 !important
} */

/* Style the buttons that are used to open the tab content */
/* .tab button {
  background-color: inherit;
  color: red;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
/* .tab button:hover {
  background-color: #ddd;
} */

/* Create an active/current tablink class */
/* .tab button.active {
  background-color: #ccc;
  color: #df280c
} */

/* Style the tab content */
/*.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

.tablinks {
    color: red;

} */
 .comment-rejected:hover {
    color: #CC7722; /* golden ochre */
}

.blink {
    color: red;
    animation: blinker 1s linear infinite;
}

@keyframes blinker {
    0%, 100% { color: red; }
    50% { color: #f8d823; } /* paler red */
}

/* HIDING QUILL EDITOR */
/* Hide only the .ql-editor inside this wrapper */
:deep([ref="beneficiariesEditorWrapper"]) .ql-editor {
  display: none;
}
/* .jump-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-right: 18px solid red;
    z-index: 9999;
    animation: fadeOut 2s forwards;
}

@keyframes fadeOut {
    0% { opacity: 1; }
    70% { opacity: 1; }
    100% { opacity: 0; }
} */


</style>


