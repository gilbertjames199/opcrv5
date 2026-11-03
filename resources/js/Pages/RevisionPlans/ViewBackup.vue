<template>
    <Head>
        <title>View PAPS</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
        <!--class="peers fxw-nw jc-sb ai-c"-->
        <div class="peers fxw-nw jc-sb ai-c justify-content-end">
            <Link v-if="paps.scope === 'GAS'" :href="`/revision/general/administration/services/${paps.FFUNCCOD}/plan`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>

            <Link v-if="paps.idmfo == 0 && paps.scope !== 'GAS'" :href="`/revision/${paps.idpaps}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
            <Link v-if="paps.idpaps == 0 && paps.scope !== 'GAS'" :href="`/mforevision/${paps.idmfo}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>
        <div class="d-flex justify-content-center">
            <img :src="getImagePath('logo.png')" alt="" class="img-fluid" style="width:100px; height:100px">

        </div>
        <div class="d-flex justify-content-center">
            REPUBLIC OF THE PHILIPPINES <br>
            PROVINCE OF DAVAO DE ORO
        </div>
        <div class="d-flex justify-content-center">

            <h3>
                <Link>{{ office }}</Link>
            </h3>
        </div>
        <div class="d-flex justify-content-center ">
            <h4 class="fw-bold ">
                <div v-if="paps.type === 'p'">PROJECT PROFILE</div>
                <div v-else>PROJECT DESIGN</div>
            </h4>
        </div>

        <div class="col-12">
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <!--MAIN TABLE-->
                    <table name="tabel" class="table table-hover table-bordered border-dark">
                        <tbody>
                            <!--<tr class="bg-secondary text-white"><td colspan="7"></td></tr>-->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Title</th>
                                <td colspan="6">{{ paps.project_title }}</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Project Location</th>
                                <td colspan="6">{{ paps.project_location }}</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Implementation Schedule</th>
                                <th colspan="1">Start</th>
                                <td colspan="2">{{ formatMonthYear(paps.date_start) }}</td>
                                <th colspan="1">End</th>
                                <td colspan="2"> {{ formatMonthYear(paps.date_end) }}</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Intended Beneficiaries</th>
                                <th colspan="1">Male</th>
                                <td colspan="1">{{ format_number_conv(paps.beneficiary_male, 0, true) }}</td>
                                <th colspan="1">Female</th>
                                <td colspan="1">{{ format_number_conv(paps.beneficiary_female, 0, true) }}</td>
                                <th colspan="1">Total</th>
                                <td colspan="1">{{ format_number_conv((paps.beneficiary_male +
                                    paps.beneficiary_female), 0, true) }}</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Baseline Disaggregated Data</th>
                                <th colspan="1">Male</th>
                                <td colspan="1">{{ format_number_conv(paps.baseline_male, 0, true) }}</td>
                                <th colspan="1">Female</th>
                                <td colspan="1">{{ format_number_conv(paps.baseline_female, 0, true) }}</td>
                                <th colspan="1">Total</th>
                                <td colspan="1">{{ format_number_conv(paps.baseline_male + paps.baseline_female, 0, true) }}
                                </td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Cost of Program</th>
                                <th colspan="1">Amount (Php)</th>
                                <td colspan="2">{{ format_number_conv(paps.amount, 2, true) }} </td>
                                <th colspan="1">Attributed GAD Budget (Php) </th>
                                <td colspan="2">{{ format_number_conv((paps.amount * paps.hgdg_percent), 2, true) }}</td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">HGDG Checklist</th>
                                <td colspan="3">GAD {{ paps.checklist.box_number }} {{ paps.checklist.sector }}</td>
                                <th class="bg-secondary text-white" colspan="1">
                                    <Link :href="`/HGDGScore/${paps.id}`" style="color:white">HGDG Score </Link>
                                </th>
                                <td colspan="2">{{ paps.hgdg_score }}
                                    <!-- -<b>{{ GAD_remark(paps.hgdg_score) }}</b>
                                    <br>({{ paps.hgdg_percent * 100 }}%) -->
                                </td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Rationale</th>
                                <td colspan="6" align="justify" style="white-space: pre-line">
                                    <div v-html="paps.rationale"></div>
                                </td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Objectives</th>
                                <td colspan="6" align="justify" style="white-space: pre-line">
                                    <div v-html="paps.objective"></div>
                                </td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Beneficiaries</th>
                                <td colspan="6" align="justify" style="white-space: pre-line">
                                    <div v-html="paps.beneficiaries"></div>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                    <br>
                    <!--IMPLEMENTATION PLAN-->
                    <div v-if="data.length > 0">
                        <h3>
                            <Link :href="`/implementation/${paps.id}`">Implementation Plan</Link>
                        </h3>
                        <table class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">

                                    <th>Strategies/Activities</th>
                                    <th>Performance Target Indicators</th>
                                    <th>Gender Issues to be Addressed</th>
                                    <th>Timeline</th>
                                    <th>Expected Output</th>
                                    <th>Budget</th>
                                    <th>Climate Change Topology Code</th>
                                    <th>Person Responsible</th>

                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(dat, index) in data" :key="dat.id">
                                    <tr style="background-color:lightgrey; font-weight: bold;">

                                        <td><b>{{ dat.strategy }}</b></td>
                                        <td>
                                            <div v-for="target in dat.targets.data">
                                                {{ target.indicator_description }}
                                            </div>
                                        </td>
                                        <td>{{ dat.issue }}</td>
                                        <td>

                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>{{ dat.cc_topology }}</td>
                                        <td>{{ dat.person_responsible }}</td>

                                    </tr>
                                    <template v-if="dat.activity_implementation">
                                        <tr v-for="(act, subIndex) in dat.activity_implementation" :key="act.id">

                                            <td>{{ act.activity }}</td>
                                            <td>
                                                <div v-for="target in act.targets">
                                                    {{ target.indicator_description }}
                                                </div>
                                            </td>
                                            <td>{{ act.issue }}</td>
                                            <td>
                                                <div v-if="act.date_from">
                                                    {{ act.date_from }} - {{ act.date_to }}
                                                </div>
                                            </td>
                                            <td>
                                                <div v-for="target in act.targets">
                                                    {{ target.target_description }}
                                                </div>
                                            </td>
                                            <td>
                                                <div v-for="target in act.targets">
                                                    <div v-if="target.budget > 0">
                                                        {{ format_number_conv(target.budget, 2, true) }}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{{ act.cc_topology }}</td>
                                            <td>{{ act.person_responsible }}</td>

                                        </tr>
                                    </template>

                                </template>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td colspan="2"><b>TOTAL BUDGET/COST</b> (Php)</td>
                                    <td>{{ format_number_conv(imp_amount, 2, true) }}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br>
                    <!--BUDGETARY REQUIREMENTS-->
                    <!-- v-if="b_mooe.length>0 || b_capital.length>0 || b_ps.length>0" -->
                    <div>
                        <h3>
                            <Link :href="`/budget/${paps.id}`">Estimated Cost/Budgetary Requirements</Link>
                        </h3>
                        <table v-if="showBudgetTable()" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th colspan="3">Particular</th>
                                    <th>Account Code</th>
                                    <th>Amount (Php)</th>
                                    <th>Source</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!--MOOE-->
                                <tr v-if="mooe_gad.length > 0 || mooe_non.length > 0">
                                    <th colspan="3">Maintenance, Operating, and Other Expenses</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--MOOE-GAD-->
                                <tr v-if="mooe_gad.length > 0">
                                    <td></td>
                                    <th colspan="2">GAD </th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="mooe_gad.length > 0" v-for="dat in mooe_gad">
                                    <td></td>
                                    <td></td>
                                    <td>{{ dat.particulars }}</td>
                                    <td>{{ dat.account_code }}</td>
                                    <td>{{ format_number_conv(dat.amount, 2, true) }}</td>
                                    <td>{{ dat.source }}</td>
                                </tr>
                                <tr v-if="mooe_gad.length > 0">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2">SUB TOTAL (GAD) </th>
                                    <th>{{ format_number_conv(s_mooe_gad, 2, true) }}</th>
                                    <td></td>
                                </tr>
                                <!--MOOE-NON-GAD-->
                                <tr v-if="mooe_non.length > 0">
                                    <td></td>
                                    <th colspan="2">NON-GAD </th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="mooe_non.length > 0" v-for="dat in mooe_non">
                                    <td></td>
                                    <td></td>
                                    <td>{{ dat.particulars }}</td>
                                    <td>{{ dat.account_code }}</td>
                                    <td>{{ format_number_conv(dat.amount, 2, true) }}</td>
                                    <td>{{ dat.source }}</td>
                                </tr>
                                <tr v-if="mooe_non.length > 0" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2">SUB TOTAL (NON-GAD) </th>
                                    <th>{{ format_number_conv(s_mooe_non, 2, true) }}</th>
                                    <td></td>
                                </tr>
                                <!--TOTAL MOOE-->
                                <tr v-if="mooe_gad.length > 0 || mooe_non.length > 0">
                                    <td></td>
                                    <th colspan="3">SUB TOTAL (MOOE) </th>
                                    <th>{{ getSum(s_mooe_gad, s_mooe_non) }}</th>
                                    <td></td>
                                </tr>
                                <!--CAPITAL OUTLAY-->
                                <tr v-if="cap_gad.length > 0 || cap_non.length > 0">
                                    <th colspan="3">Capital Outlay</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--Capital Outlay GAD-->
                                <tr v-if="cap_gad.length > 0">
                                    <td></td>
                                    <th colspan="2">GAD </th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="cap_gad.length > 0" v-for="dat in cap_gad">
                                    <td></td>
                                    <td></td>
                                    <td>{{ dat.particulars }}</td>
                                    <td>{{ dat.account_code }}</td>
                                    <td>{{ format_number_conv(dat.amount, 2, true) }}</td>
                                    <td>{{ dat.source }}</td>
                                </tr>
                                <tr v-if="cap_gad.length > 0" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2">SUB TOTAL (GAD) </th>
                                    <th>{{ format_number_conv(s_cap_gad, 2, true) }}</th>
                                    <td></td>
                                </tr>
                                <!--Capital Outlay NON-GAD-->
                                <tr v-if="cap_non.length > 0">
                                    <td></td>
                                    <th colspan="2">NON-GAD </th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="cap_non.length > 0" v-for="dat in cap_non">
                                    <td></td>
                                    <td></td>
                                    <td>{{ dat.particulars }}</td>
                                    <td>{{ dat.account_code }}</td>
                                    <td>{{ format_number_conv(dat.amount, 2, true) }}</td>
                                    <td>{{ dat.source }}</td>
                                </tr>
                                <tr v-if="cap_non.length > 0" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2">SUB TOTAL (NON-GAD) </th>
                                    <th>{{ format_number_conv(s_cap_non, 2, true) }}</th>
                                    <td></td>
                                </tr>
                                <!--TOTAL CAPITAL-->
                                <tr v-if="cap_gad.length > 0 || cap_non.length > 0">
                                    <td></td>
                                    <th colspan="3">SUB TOTAL (Capital Outlay) </th>
                                    <th>{{ getSum(s_cap_gad, s_cap_non) }}</th>
                                    <td></td>
                                </tr>
                                <!--Personnel Services-->
                                <tr v-if="ps_gad.length > 0 || ps_non.length > 0">
                                    <th colspan="3">Personnel Services</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--Personnel Services GAD-->
                                <tr v-if="ps_gad.length > 0">
                                    <td></td>
                                    <th colspan="2">GAD </th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="ps_gad.length > 0" v-for="dat in ps_gad">
                                    <td></td>
                                    <td></td>
                                    <td>{{ dat.particulars }}</td>
                                    <td>{{ dat.account_code }}</td>
                                    <td>{{ format_number_conv(dat.amount, 2, true) }}</td>
                                    <td>{{ dat.source }}</td>
                                </tr>
                                <tr v-if="ps_gad.length > 0" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2">SUB TOTAL (GAD) </th>
                                    <th>{{ format_number_conv(s_ps_gad, 2, true) }}</th>
                                    <td></td>
                                </tr>
                                <!--Personnel Services NON-GAD-->
                                <tr v-if="ps_non.length > 0">
                                    <td></td>
                                    <th colspan="2">NON-GAD</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="ps_non.length > 0" v-for="dat in ps_non">
                                    <td></td>
                                    <td></td>
                                    <td>{{ dat.particulars }}</td>
                                    <td>{{ dat.account_code }}</td>
                                    <td>{{ format_number_conv(dat.amount, 2, true) }}</td>
                                    <td>{{ dat.source }}</td>
                                </tr>
                                <tr v-if="ps_non.length > 0" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2">SUB TOTAL (NON-GAD) </th>
                                    <th>{{ format_number_conv(s_ps_non, 2, true) }}</th>
                                    <td></td>
                                </tr>
                                <!--TOTAL PERSONNEL SERVICES-->
                                <tr v-if="ps_gad.length > 0 || ps_non.length > 0">
                                    <td></td>
                                    <th colspan="3">SUB TOTAL (Personnel Services) </th>
                                    <th>{{ getSum(s_ps_gad, s_ps_non) }}</th>
                                    <td></td>
                                </tr>

                                <!--GRAND TOTAL-->
                                <tr>
                                    <th colspan="4">GRAND TOTAL</th>
                                    <th>{{ getBudgetTotal() }}</th>
                                    <th></th>
                                </tr>
                            </tbody>
                        </table>
                        <div v-else>
                            <span style="color:red; font-weight: bold;">
                                This Project has no budgetary requirements! <br>
                                Click
                                <Link :href="`/budget/${paps.id}`">here</Link> to edit budgetary requirements.
                            </span>
                        </div>
                        <br>
                    </div>
                    <!--IMPLEMENTING TEAM-->
                    <h3 v-if="team_members.length > 0 || paps.implementing_team !== null">
                        <Link :href="`/team/${paps.id}/revision/plan/team`">Implementing Team</Link>
                    </h3>
                    <div align="justify" style="white-space: pre-line">
                        <!-- {{ paps.implementing_team }} -->
                        <div v-html="paps.implementing_team"></div>
                    </div>
                    <div v-if="team_members.length > 0">

                        <table table name="tabel" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th>Name</th>
                                    <th>Position/Designation</th>
                                    <th>Competency</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="team_member in team_members">
                                    <td>{{ team_member.name }}</td>
                                    <td>{{ team_member.position }}</td>
                                    <td>{{ team_member.competency }}</td>
                                    <td>{{ team_member.role }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                    </div>
                    <div v-else>
                        <span style="color:red; font-weight: bold;">
                            This Project has no recorded members of the implementation team! <br>
                            Click
                            <Link :href="`/team/${paps.id}/revision/plan/team`">here</Link> to edit implementation team.
                        </span>
                        <br>
                    </div>
                    <br>
                    <!--PARTNERSHIP & SUSTAINABILITY-->
                    <h3 v-if="paps.partnership !== null">
                        <Link>Partnership and Sustainability</Link>
                    </h3>
                    <div align="justify" style="white-space: pre-line">
                        <div v-html="paps.partnership"></div>
                    </div>
                    <br>
                    <br>
                    <!--MONITORING & EVALUATION-->
                    <h3 v-if="monitors.length > 0 || paps.monitoring !== null">
                        <Link :href="`/EvaluationMechanismTool/${paps.id}`">Monitoring and Evaluation</Link>
                    </h3>
                    <div align="justify" style="white-space: pre-line">
                        <div v-html="paps.monitoring"></div>
                    </div>
                    <div v-if="monitors.length > 0">

                        <table table name="tabel" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th>Evaluation Mechanism/Tools</th>
                                    <th>OPR and their Roles</th>
                                    <th>Target Beneficiaries</th>
                                    <th>Need for External M&E Team or GAD Expert/Consultant</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr v-for="monitor in monitors">
                                    <td>{{ monitor.evaluation_mechanism_tool }}</td>
                                    <td>{{ monitor.opr }}</td>
                                    <td>{{ monitor.target_beneficiaries }}</td>
                                    <td>{{ monitor.gad }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                    </div>
                    <div v-else>
                        <span style="color:red; font-weight: bold;">
                            The project has no recorded data for monitoring and evaluation! <br>
                            Click
                            <Link :href="`/EvaluationMechanismTool/${paps.id}`">here</Link> to edit monitoring and
                            evaluation.
                        </span>
                        <br><br>
                    </div>
                    <!--RISK MANAGEMENT-->
                    <h3 v-if="risks.length > 0 || paps.risk_management !== null">
                        <Link :href="`/RiskManagement/${paps.id}`">Risk Management</Link>
                    </h3>
                    <div align="justify" style="white-space: pre-line">
                        <div v-html="paps.risk_management"></div>
                    </div>

                    <div v-if="risks.length > 0">
                        <table table name="tabel" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th>Prospective Possible Risks</th>
                                    <th>Person Affected</th>
                                    <th>Management</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="risk in risks">
                                    <td>{{ risk.possible_risk }}</td>
                                    <td>{{ risk.person_affected }}</td>
                                    <td>{{ risk.management }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                    </div>
                    <div v-else>
                        <span style="color:red; font-weight: bold;">
                            The project has no recorded data for risk management! <br>
                            Click
                            <Link :href="`/RiskManagement/${paps.id}`">here</Link> to edit risk management.
                        </span>
                        <br><br>
                    </div>
                    <!--SIGNATORIES-->
                    <div v-if="paps.type === 'p'">
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>
                                        <span v-if="sig_prep">
                                            Prepared by:<br><br>
                                            <span v-if="sig_prep" class="text-decoration-underline"><b>{{ sig_prep.name
                                            }}</b></span>
                                            <br>{{ sig_prep.position }}
                                        </span>
                                    </td>
                                    <td>
                                        <span v-if="sig_rev">
                                            Reviewed by:<br><br>
                                            <span v-if="sig_rev" class="text-decoration-underline"><b>{{ sig_rev.name
                                            }}</b></span>
                                            <br>{{ sig_rev.position }}
                                        </span>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <span v-if="Object.keys(sig_app).length > 0">
                                            <br><br>
                                            Approved by:<br><br>
                                            <span v-if="sig_app" class="text-decoration-underline"><b>{{ sig_app[0].name
                                            }}</b>
                                            </span>
                                            <br>{{ sig_app[0].position }}
                                        </span>
                                    </td>
                                    <td>
                                        <span v-if="Object.keys(sig_app).length > 1">
                                            <br><br>
                                            <span v-if="Object.keys(sig_app).length > 1">
                                                Approved by:<br><br>
                                                <span v-if="sig_app" class="text-decoration-underline"><b>{{ sig_app[1].name
                                                }}</b></span>
                                                <br>{{ sig_app[1].position }}
                                            </span>
                                        </span>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">

        </div>

    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";

export default {
    components: { Filtering, Pagination },
    props: {
        paps: Object,
        office: String,
        implementation: Object,

        team_members: Object,
        monitors: Object,
        risks: Object,
        sig_rev: Object,
        sig_prep: Object,
        sig_app: Object,
        data: Object,
        imp_amount: Number,

        mooe_gad: Object,
        mooe_non: Object,
        cap_gad: Object,
        cap_non: Object,
        ps_gad: Object,
        ps_non: Object,
        s_mooe_gad: Number,
        s_mooe_non: Number,
        s_cap_gad: Number,
        s_cap_non: Number,
        s_ps_gad: Number,
        s_ps_non: Number,
    },
    computed: {},
    mounted() {
        this.isOne();
    },
    data() {
        return {
            has: 0
        }
    },
    watch: {},
    methods: {
        isOne() {
            // var mooe=this.b_mooe.length;
            // var co=this.b_capital.length;
            // var ps=this.b_ps.length;
            // var has=0;
            // if(mooe>0){
            //     has+=1;
            // }
            // if(ps>0){        has+=1;
            // }
            // if(co>0){
            //     has+=1;
            // }
            // this.has=has;
        },
        getBudgetTotal() {
            var total = parseFloat(this.s_cap_gad) + parseFloat(this.s_cap_non);
            total = total + parseFloat(this.s_mooe_gad) + parseFloat(this.s_mooe_non);
            total = total + parseFloat(this.s_ps_gad) + parseFloat(this.s_ps_non);
            return this.format_number_conv(total, 2, true);
        },
        showBudgetTable() {
            var sb = false;
            if (this.mooe_gad.length > 0 || this.mooe_non.length > 0 ||
                this.cap_gad.length > 0 || this.cap_non.length > 0 ||
                this.ps_gad.length > 0 || this.ps_non.length > 0
            ) {
                sb = true;
            }
            return sb;
        }
    }
}
</script>
<style>
.th {
    background-color: #929292 !important;
}
</style>
