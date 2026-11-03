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
                    <h3>1.&nbsp;&nbsp;&nbsp;Title

                    </h3>
                    <table name="tabel" class="table table-hover table-bordered border-dark">
                        <tbody>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Title</th>
                                <td colspan="6" :class="{
                                    'text-danger': has_comment('Title', paps.project_title, paps.project_title, 'project_title', 'revision_plans', paps, paps.comments)
                                }">
                                    {{ paps.project_title }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)">*
                                    </button>


                                </td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Project Location</th>
                                <td colspan="6" :class="{
                                    'text-danger': has_comment('Title',paps.project_location,paps.project_location,'project_location','revision_plans', paps, paps.comments)
                                }">{{ paps.project_location }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.project_location,paps.project_location,'project_location','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.project_location,paps.project_location,'project_location','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.project_location,paps.project_location,'project_location','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Implementation Schedule</th>
                                <th colspan="1">Start</th>
                                <td colspan="2" :class="{
                                    'text-danger': has_comment('Title',paps.date_start,paps.date_start,'date_start','revision_plans', paps, paps.comments)
                                }">{{ formatMonthYear(paps.date_start) }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.date_start,paps.date_start,'date_start','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.date_start,paps.date_start,'date_start','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.date_start,paps.date_start,'date_start','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                                <th colspan="1">End</th>
                                <td colspan="2" :class="{
                                    'text-danger': has_comment('Title',paps.date_end,paps.date_end,'date_end','revision_plans', paps, paps.comments)
                                }"> {{ formatMonthYear(paps.date_end) }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.date_end,paps.date_end,'date_end','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.date_end,paps.date_end,'date_end','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.date_end,paps.date_end,'date_end','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Intended Beneficiaries</th>
                                <th colspan="1">Male</th>
                                <td colspan="1" :class="{
                                    'text-danger': has_comment('Title',paps.beneficiary_male,paps.beneficiary_male,'beneficiary_male','revision_plans', paps, paps.comments)
                                }">{{ format_number_conv(paps.beneficiary_male, 0, true) }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.beneficiary_male,paps.beneficiary_male,'beneficiary_male','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.beneficiary_male,paps.beneficiary_male,'beneficiary_male','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.beneficiary_male,paps.beneficiary_male,'beneficiary_male','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                                <th colspan="1">Female</th>
                                <td colspan="1" :class="{
                                    'text-danger': has_comment('Title',paps.beneficiary_female,paps.beneficiary_female,'beneficiary_female','revision_plans', paps, paps.comments)
                                }">{{ format_number_conv(paps.beneficiary_female, 0, true) }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.beneficiary_female,paps.beneficiary_female,'beneficiary_female','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.beneficiary_female,paps.beneficiary_female,'beneficiary_female','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.beneficiary_female,paps.beneficiary_female,'beneficiary_female','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                                <th colspan="1">Total</th>
                                <td colspan="1">{{ format_number_conv((paps.beneficiary_male +
                                    paps.beneficiary_female), 0, true) }}

                                </td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Baseline Disaggregated Data</th>
                                <th colspan="1">Male</th>
                                <td colspan="1" :class="{
                                    'text-danger': has_comment('Title',paps.baseline_male,paps.baseline_male,'baseline_male','revision_plans', paps, paps.comments)
                                }">{{ format_number_conv(paps.baseline_male, 0, true) }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.baseline_male,paps.baseline_male,'baseline_male','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.baseline_male,paps.baseline_male,'baseline_male','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.baseline_male,paps.baseline_male,'baseline_male','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                                <th colspan="1">Female</th>
                                <td colspan="1" :class="{
                                    'text-danger': has_comment('Title',paps.baseline_female,paps.baseline_female,'baseline_female','revision_plans', paps, paps.comments)
                                }">{{ format_number_conv(paps.baseline_female, 0, true) }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.baseline_female,paps.baseline_female,'baseline_female','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.baseline_female,paps.baseline_female,'baseline_female','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.baseline_female,paps.baseline_female,'baseline_female','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                                <th colspan="1">Total</th>
                                <td colspan="1">{{ format_number_conv(paps.baseline_male + paps.baseline_female, 0, true) }}
                                </td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Cost of Program</th>
                                <th colspan="1">Amount (Php)</th>
                                <td colspan="2" class="text-end" :class="{
                                    'text-danger': has_comment('Title','Amount',imp_amount,'amount','revision_plans', paps, paps.comments)
                                }">{{ format_number_conv(imp_amount, 2, true) }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title','Amount',imp_amount,'amount','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title','Amount',imp_amount,'amount','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title','Amount',imp_amount,'amount','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                                <th colspan="1">Attributed GAD Budget (Php) </th>
                                <td colspan="2" class="text-end" :class="{
                                    'text-danger': has_comment('Title','GAD Attributed Amount',imp_amount,'attributed_amount','revision_plans', paps, paps.comments)
                                }">{{ format_number_conv((imp_amount * (paps.hgdg_score/20)), 2, true) }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title','GAD Attributed Amount',format_number_conv((imp_amount * (paps.hgdg_score/20)), 2, true),'attributed_amount','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title','GAD Attributed Amount',format_number_conv((imp_amount * (paps.hgdg_score/20)), 2, true),'attributed_amount','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title','GAD Attributed Amount',format_number_conv((imp_amount * (paps.hgdg_score/20)), 2, true),'attributed_amount','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">HGDG Checklist</th>
                                <td colspan="3" :class="{
                                    'text-danger': has_comment('Title','HGDG Checklist',paps.checklist.box_number+' '+paps.checklist.sector,'HGDG Checklist','revision_plans', paps, paps.comments)
                                }">GAD {{ paps.checklist.box_number }} {{ paps.checklist.sector }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title','HGDG Checklist',paps.checklist.box_number+' '+paps.checklist.sector,'HGDG Checklist','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title','HGDG Checklist',paps.checklist.box_number+' '+paps.checklist.sector,'HGDG Checklist','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title','HGDG Checklist',paps.checklist.box_number+' '+paps.checklist.sector,'HGDG Checklist','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                                <th class="bg-secondary text-white" colspan="1">
                                    <Link :href="`/HGDGScore/${paps.id}`" style="color:white">HGDG Score </Link>
                                </th>
                                <td colspan="2" :class="{
                                    'text-danger': has_comment('Title','HGDG Score',paps.hgdg_score,'hgdg_score','revision_plans', paps, paps.comments)
                                }">{{ paps.hgdg_score }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title','HGDG Score',paps.hgdg_score,'hgdg_score','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title','HGDG Score',paps.hgdg_score,'hgdg_score','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title','HGDG Score',paps.hgdg_score,'hgdg_score','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <!-- RATIONALE -->
                     <span v-if="paps.rationale">
                        <h3 :class="{
                                    'text-danger': has_comment('Rationale','rationale',paps.rationale,'rationale','revision_plans', paps, paps.comments)
                                }">2. Rationale
                            <button v-if="can_view_comment()" class="superscript-btn"
                                @click="handleClick('Rationale','rationale',paps.rationale,'rationale','revision_plans', paps, paps.comments)">*
                            </button>
                            <button v-if="has_comment('Rationale','rationale',paps.rationale,'rationale','revision_plans', paps, paps.comments)" class="superscript-btn"
                                @click="handleClick('Rationale','rationale',paps.rationale,'rationale','revision_plans', paps, paps.comments)">*
                            </button>
                        </h3>
                        <br>
                        <div class="bgc-white p-20 bd">
                            <div v-html="paps.rationale" style="white-space: pre-line"></div>
                        </div>
                        <br>
                     </span>

                    <!-- OBJECTIVES -->
                    <span v-if="paps.objective">
                        <h3 :class="{
                                    'text-danger': has_comment('Objectives','objective',paps.objective,'objective','revision_plans', paps, paps.comments)
                                }"
                        >3. Objectives
                            <button v-if="can_view_comment()" class="superscript-btn"
                                @click="handleClick('Objectives','objective',paps.objective,'objective','revision_plans', paps, paps.comments)">*
                            </button>
                            <button v-if="has_comment('Objectives','objective',paps.objective,'objective','revision_plans', paps, paps.comments)" class="superscript-btn"
                                @click="handleClick('Objectives','objective',paps.objective,'objective','revision_plans', paps, paps.comments)">*
                            </button>
                        </h3>
                        <br>
                        <div  class="bgc-white p-20 bd">
                            <div v-html="paps.objective" style="white-space: pre-line"></div>
                        </div>
                        <br>
                    </span>

                    <!-- Target Beneficiaries -->
                    <span v-if="paps.beneficiaries" >
                    <h3 :class="{
                                    'text-danger': has_comment('Beneficiaries','beneficiaries',paps.beneficiaries,'beneficiaries','revision_plans', paps, paps.comments)
                                }">4. Target Beneficiaries
                        <button v-if="can_view_comment()" class="superscript-btn"
                            @click="handleClick('Beneficiaries','beneficiaries',paps.beneficiaries,'beneficiaries','revision_plans', paps, paps.comments)">*
                        </button>
                        <button v-if="has_comment('Beneficiaries','beneficiaries',paps.beneficiaries,'beneficiaries','revision_plans', paps, paps.comments)" class="superscript-btn"
                            @click="handleClick('Beneficiaries','beneficiaries',paps.beneficiaries,'beneficiaries','revision_plans', paps, paps.comments)">*
                        </button>
                    </h3>
                    <br>
                    <div class="bgc-white p-20 bd">
                        <div v-html="paps.beneficiaries" style="white-space: pre-line"></div>
                    </div>
                    <br>
                    </span>

                    <!--IMPLEMENTATION PLAN-->
                    <!-- <div v-if="implementation">

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
                                <template v-for="(dat, index) in implementation" :key="dat.id">
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

                                            </td>
                                            <td>{{ act.issue }}</td>
                                            <td>
                                                <div v-if="act.date_from">
                                                    {{ act.date_from }} - {{ act.date_to }}
                                                </div>
                                            </td>
                                            <td>

                                            </td>
                                            <td>

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
                    </div> -->
                    <div v-if="implementation">
                        <h3 >
                            <!-- /strategies-and-activities/${dat.id} -->
                            5. <Link :href="`/strategies-and-activities/${paps.id}`" target="_blank">Implementation Plan</Link>
                        </h3>

                        <table class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th style="width: 12%">Strategies/Activities</th>
                                    <th style="width: 8%">Performance Target Indicators</th>
                                    <th style="width: 8%">Gender Issues to be Addressed</th>
                                    <th style="width: 8%">Timeline</th>
                                    <th style="width: 8%">Expected Output</th>
                                    <th style="width: 8%">Personnel Services</th>
                                    <th style="width: 8%">MOOE</th>
                                    <th style="width: 8%">Financial Expenses</th>
                                    <th style="width: 8%">Capital Outlay</th>
                                    <th style="width: 8%">Budget</th>
                                    <th style="width: 8%">Climate Change Topology Code</th>
                                    <th style="width: 8%">Person Responsible</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(dat, index) in implementation" :key="dat.id">
                                    <tr style="background-color:lightgrey; font-weight: bold;">
                                        <td>
                                            <b>{{ dat.description }}</b>
                                        </td>
                                        <td >
                                            {{ dat.target_indicator }}
                                        </td>
                                        <td>{{ dat.gad_issue }}</td>
                                        <td>
                                            <span v-if="paps.is_strategy_based==1">
                                                <span v-if="dat.date_from">{{ formatMonthYear(dat.date_from) }}</span>
                                                <span v-if="dat.date_from && dat.date_to">&nbsp;to&nbsp;</span>
                                                <span v-if="dat.date_to">{{ formatMonthYear(dat.date_to) }}</span>
                                            </span>
                                        </td>
                                        <td>
                                            <span v-if="paps.is_strategy_based==1">
                                                <div v-if="dat.strategyProject[0]" v-for="eo in dat.strategyProject[0]?.expected_output || []">
                                                    <div>{{ eo.description }}</div>
                                                    <hr>
                                                </div>
                                                <div v-if="dat.strategyProject[0]" v-for="eo in dat.strategyProject[0]?.expected_outcome || []">
                                                    <div>{{ eo.description }}</div>
                                                    <hr>
                                                </div>
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

                                    <template v-if="dat.activity && paps.is_strategy_based==0">
                                        <tr v-for="(act, subIndex) in dat.activity" :key="subIndex">
                                            <!-- DESCRIPTION -->
                                            <td ><b>{{ act.description }}</b>

                                            </td>

                                            <!-- MERGED -->
                                            <td colspan="4" style="width: 36%;padding: 0;">
                                                <table class="table table-bordered border-dark w-100 m-0">
                                                    <template v-for="(pair, i) in getPairedOutputs(act.activityProject[0])" :key="i">
                                                        <tr >
                                                            <td class="align-top" style="width: 25%;">
                                                                <span v-if="paps.is_strategy_based==0">{{ pair.target_indicator }}
                                                                    --{{ pair.outcome_description }}
                                                                </span>
                                                                <br><br>
                                                            </td>

                                                            <td v-if="i === 0" class="align-top" style="width: 25%;" :rowspan="getPairedOutputs(act.activityProject[0]).length">
                                                                <span v-if="paps.is_strategy_based==0">{{ act.gad_issue }}

                                                                </span>
                                                            </td>

                                                            <td style="width: 25%;" class="align-top" v-if="i === 0" :rowspan="getPairedOutputs(act.activityProject[0]).length">
                                                                <!-- {{ act.activityProject[subIndex]?.expected_outcome || [] }} -->
                                                                <div>Date From: </div>
                                                                <div>Date To: </div>
                                                            </td>
                                                            <td class="align-top" style="width: 25%;">
                                                                {{ pair.outcome_description }}
                                                                <br><br>
                                                            </td>
                                                        </tr>
                                                    </template>
                                                </table>
                                            </td>
                                            <!-- PERSONNEL SERVICES -->
                                            <td :class="{
                                                'text-danger': has_comment('Implementation Plan','activity Personnel Services',act.ps_total,'ps_total','activity_projects', act, act.comments)
                                            }">
                                                <span v-if="paps.is_strategy_based==0">{{ format_number_conv(parseFloat(act.ps_total),2,true) }}</span>
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
                                            }">
                                                <span v-if="paps.is_strategy_based==0">{{ format_number_conv(parseFloat(act.mooe_total),2,true) }}</span>
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
                                            }"><span v-if="paps.is_strategy_based==0">{{ format_number_conv(parseFloat(act.fe_total),2,true) }}</span>
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
                                            }"><span v-if="paps.is_strategy_based==0">{{ format_number_conv(parseFloat(act.co_total),2,true) }}</span>
                                                <button v-if="can_view_comment()" class="superscript-btn"
                                                    @click="handleClick('Implementation Plan','activity Capital Outlay',act.co_total,'co_total','activity_projects', act, act.comments)">*
                                                </button>
                                                <button v-if="has_comment('Implementation Plan','activity Capital Outlay',act.co_total,'co_total','activity_projects', act, act.comments)" class="superscript-btn"
                                                    @click="handleClick('Implementation Plan','activity Capital Outlay',act.co_total,'co_total','activity_projects', act, act.comments)">*
                                                </button>
                                            </td>
                                            <!-- TOTAL -->
                                            <td><span v-if="paps.is_strategy_based==0">{{ format_number_conv(parseFloat(act.ps_total) + parseFloat(act.mooe_total)+ parseFloat(act.co_total),2,true) }}</span>
                                            </td>
                                            <!-- CCET Code -->
                                            <td :class="{
                                                'text-danger': has_comment('Implementation Plan','activity CCET Code',act.ccet_code,'ccet_code','activity_projects', act, act.comments)
                                            }"><span v-if="paps.is_strategy_based==0">{{ act.ccet_code }}</span>
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
                                            }"><span v-if="paps.is_strategy_based==0">{{ act.responsible }}</span>
                                                <button v-if="can_view_comment()" class="superscript-btn"
                                                    @click="handleClick('Implementation Plan','activity Person Responsible',act.responsible,'responsible','activity_projects', act, act.comments)">*
                                                </button>
                                                <button v-if="has_comment('Implementation Plan','activity Person Responsible',act.responsible,'responsible','activity_projects', act, act.comments)" class="superscript-btn"
                                                    @click="handleClick('Implementation Plan','activity Person Responsible',act.responsible,'responsible','activity_projects', act, act.comments)">*
                                                </button>
                                            </td>
                                        </tr>
                                    </template>

                                </template>
                                <tr>
                                        <td colspan="5">TOTAL</td>
                                        <td>{{ format_number_conv(v_imp_ps,2,true) }}</td>
                                        <td>{{ format_number_conv(v_imp_mooe,2,true) }}</td>
                                        <td>{{ format_number_conv(v_imp_fe,2,true) }}</td>
                                        <td>{{ format_number_conv(v_imp_co,2,true)}}</td>
                                        <td class="text-end">{{ format_number_conv(imp_amount,2,true) }}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                            </tbody>
                        </table>
                        <!-- {{ implementation }} -->
                    </div>
                    <br>
                    <!--BUDGETARY REQUIREMENTS-->
                    <!-- v-if="b_mooe.length>0 || b_capital.length>0 || b_ps.length>0" -->
                    <div>
                        <h3>
                            6. <Link :href="`/budget/${paps.id}`">Estimated Cost/Budgetary Requirements</Link>
                        </h3>
                        <!-- {{ capitalOutlay }}
                        showBudgetTable: {{ showBudgetTable() }} -->
                        <table v-if="showBudgetTable()" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th colspan="3">Particular</th>
                                    <th>Account Code</th>
                                    <th>GAD Amount (Php)</th>
                                    <th>Non-GAD Amount (Php)</th>
                                    <th>Amount (Php)</th>
                                    <th>Source</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- MOOE **************************************************************** -->
                                <tr v-if="(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non))>0"

                                >
                                    <td colspan="8"><b>MAINTENANCE, OPERATING, AND OTHER EXPENSES</b></td>
                                </tr>
                                <tr v-if="(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non))>0" v-for="mooe in maintenanceOperating">
                                    <td></td>
                                    <!-- MOOE -PARTICULARS -->
                                    <td colspan="2"
                                    :class="{
                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.particulars,'particulars','budget_requirements', mooe, mooe.comments)
                                            }"
                                    >{{ mooe.particulars }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.particulars,'particulars','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','MOOE',mooe.particulars,'particulars','budget_requirements', mooe, mooe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.particulars,'particulars','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                    </td>
                                    <!-- MOOE -ACCOUNT CODE -->
                                    <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.account_code,'account_code','budget_requirements', mooe, mooe.comments)
                                            }"
                                    >{{ mooe.account_code }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.account_code,'account_code','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','MOOE',mooe.account_code,'account_code','budget_requirements', mooe, mooe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.account_code,'account_code','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                    </td>
                                    <!-- MOOE GAD Attirbuted -->
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.GAD_amount,'GAD_amount','budget_requirements', mooe, mooe.comments)
                                            }">{{ format_number_conv(mooe.GAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.GAD_amount,'GAD_amount','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','MOOE',mooe.GAD_amount,'GAD_amount','budget_requirements', mooe, mooe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.GAD_amount,'GAD_amount','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                    </td>
                                    <!-- MOOE NON-GAD -->
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.NONGAD_amount,'NONGAD_amount','budget_requirements', mooe, mooe.comments)
                                            }">
                                        {{ format_number_conv(mooe.NONGAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.NONGAD_amount,'NONGAD_amount','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','MOOE',mooe.NONGAD_amount,'NONGAD_amount','budget_requirements', mooe, mooe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.NONGAD_amount,'NONGAD_amount','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                    </td>
                                    <!-- MOOE Total -->
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.Total,'Total','budget_requirements', mooe, mooe.comments)
                                            }">{{ format_number_conv(mooe.Total,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.Total,'Total','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','MOOE',mooe.Total,'Total','budget_requirements', mooe, mooe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.Total,'Total','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                    </td>
                                    <!-- MOOE Source -->
                                    <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.Source,'Source','budget_requirements', mooe, mooe.comments)
                                            }">{{ mooe.Source }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.Source,'Source','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','MOOE',mooe.Source,'Source','budget_requirements', mooe, mooe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.Source,'Source','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non))>0">
                                    <td></td>
                                    <td colspan="3">SUB-TOTAL (MOOE)</td>
                                    <td class="text-end">{{ format_number_conv(s_mooe_gad,2,true) }}</td>
                                    <td class="text-end">{{ format_number_conv(s_mooe_non,2,true) }}</td>
                                    <td class="text-end">{{ format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true) }}</td>
                                    <td></td>
                                </tr>
                                <!-- PERSONNEL SERVICES ****************************************************** -->
                                 <tr v-if="(parseFloat(s_ps_gad) + parseFloat(s_ps_non))>0">
                                    <td colspan="8"><b>PERSONNEL SERVICES</b></td>
                                </tr>
                                <tr  v-if="(parseFloat(s_ps_gad) + parseFloat(s_ps_non))>0" v-for="ps in personnelServices">
                                    <td></td>
                                    <!-- PS Particulars -->
                                    <td colspan="2" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.particulars,'particulars','budget_requirements', ps, ps.comments)
                                            }">{{ ps.particulars }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.particulars,'particulars','budget_requirements', ps, ps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Personnel Services',ps.particulars,'particulars','budget_requirements', ps, ps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.particulars,'particulars','budget_requirements', ps, ps.comments)">*
                                        </button>
                                    </td>
                                    <!-- PS Account Code -->
                                    <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.account_code,'account_code','budget_requirements', ps, ps.comments)
                                            }">{{ ps.account_code }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.account_code,'account_code','budget_requirements', ps, ps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Personnel Services',ps.account_code,'account_code','budget_requirements', ps, ps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.account_code,'account_code','budget_requirements', ps, ps.comments)">*
                                        </button>
                                    </td>
                                    <!-- PS GAD Amount -->
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.GAD_amount,'GAD_amount','budget_requirements', ps, ps.comments)
                                            }">{{ format_number_conv(ps.GAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.GAD_amount,'GAD_amount','budget_requirements', ps, ps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Personnel Services',ps.GAD_amount,'GAD_amount','budget_requirements', ps, ps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.GAD_amount,'GAD_amount','budget_requirements', ps, ps.comments)">*
                                        </button>
                                    </td>
                                    <!--  PS NONGAD Amount-->
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.NONGAD_amount,'NONGAD_amount','budget_requirements', ps, ps.comments)
                                            }">
                                        {{ format_number_conv(ps.NONGAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.NONGAD_amount,'NONGAD_amount','budget_requirements', ps, ps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Personnel Services',ps.NONGAD_amount,'NONGAD_amount','budget_requirements', ps, ps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.NONGAD_amount,'NONGAD_amount','budget_requirements', ps, ps.comments)">*
                                        </button>
                                    </td>
                                    <!-- PS Total -->
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.Total,'Total','budget_requirements', ps, ps.comments)
                                            }">{{ format_number_conv(ps.Total,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.Total,'Total','budget_requirements', ps, ps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Personnel Services',ps.Total,'Total','budget_requirements', ps, ps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.Total,'Total','budget_requirements', ps, ps.comments)">*
                                        </button>
                                    </td>
                                    <!-- PS Source -->
                                    <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.Source,'Source','budget_requirements', ps, ps.comments)
                                            }">{{ ps.Source }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.Source,'Source','budget_requirements', ps, ps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Personnel Services',ps.Source,'Source','budget_requirements', ps, ps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.Source,'Source','budget_requirements', ps, ps.comments)">*
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="(parseFloat(s_ps_gad) + parseFloat(s_ps_non))>0">
                                    <td></td>
                                    <td colspan="3">SUB-TOTAL (PS)</td>
                                    <td class="text-end">{{ format_number_conv(s_ps_gad,2,true) }}</td>
                                    <td class="text-end">{{ format_number_conv(s_ps_non,2,true) }}</td>
                                    <td class="text-end">{{ format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true) }}</td>
                                    <td></td>
                                </tr>
                                <!-- FINANCIAL EXPENSES ****************************************************** -->
                                <tr v-if="(parseFloat(s_fe_gad) + parseFloat(s_fe_non))>0">
                                    <td colspan="8"><b>FINANCIAL EXPENSES</b></td>
                                </tr>
                                <tr v-if="(parseFloat(s_fe_gad) + parseFloat(s_fe_non))>0" v-for="fe in financialExpenses">
                                    <td></td>
                                    <!-- Financial Expenses Particulars -->

                                    <td colspan="2" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.particulars,'particulars','budget_requirements', fe, fe.comments)
                                            }">{{ fe.particulars }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.particulars,'particulars','budget_requirements', fe, fe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Financial Expenses',fe.particulars,'particulars','budget_requirements', fe, fe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.particulars,'particulars','budget_requirements', fe, fe.comments)">*
                                        </button>
                                    </td>
                                    <!-- Financial Expenses Account Code -->
                                    <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.account_code,'account_code','budget_requirements', fe, fe.comments)
                                            }">{{ fe.account_code }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.account_code,'account_code','budget_requirements', fe, fe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Financial Expenses',fe.account_code,'account_code','budget_requirements', fe, fe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.account_code,'account_code','budget_requirements', fe, fe.comments)">*
                                        </button>
                                    </td>
                                    <!-- Financial Expenses GAD Attributed -->
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.GAD_amount,'GAD_amount','budget_requirements', fe, fe.comments)
                                            }">{{ format_number_conv(fe.GAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.GAD_amount,'GAD_amount','budget_requirements', fe, fe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Financial Expenses',fe.GAD_amount,'GAD_amount','budget_requirements', fe, fe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.GAD_amount,'GAD_amount','budget_requirements', fe, fe.comments)">*
                                        </button>
                                    </td>
                                    <!-- Financial Expenses NON-GAD Amount -->
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.NONGAD_amount,'NONGAD_amount','budget_requirements', fe, fe.comments)
                                            }">{{ format_number_conv(fe.NONGAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.NONGAD_amount,'NONGAD_amount','budget_requirements', fe, fe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Financial Expenses',fe.NONGAD_amount,'NONGAD_amount','budget_requirements', fe, fe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.NONGAD_amount,'NONGAD_amount','budget_requirements', fe, fe.comments)">*
                                        </button>
                                    </td>
                                    <!-- Financial Expenses Total -->
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.Total,'Total','budget_requirements', fe, fe.comments)
                                            }">{{ format_number_conv(fe.Total,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.Total,'Total','budget_requirements', fe, fe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Financial Expenses',fe.Total,'Total','budget_requirements', fe, fe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.Total,'Total','budget_requirements', fe, fe.comments)">*
                                        </button>
                                    </td>
                                    <!-- Financial Expenses Source -->
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.Source,'Source','budget_requirements', fe, fe.comments)
                                            }">{{ fe.Source }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.Source,'Source','budget_requirements', fe, fe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Financial Expenses',fe.Source,'Source','budget_requirements', fe, fe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.Source,'Source','budget_requirements', fe, fe.comments)">*
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="(parseFloat(s_fe_gad) + parseFloat(s_fe_non))>0">
                                    <td></td>
                                    <td colspan="3">SUB-TOTAL (Financial Expenses)</td>
                                    <td class="text-end">{{ format_number_conv(s_fe_gad,2,true) }}</td>
                                    <td class="text-end">{{ format_number_conv(s_fe_non,2,true) }}</td>
                                    <td class="text-end">{{ format_number_conv(parseFloat(s_fe_gad) + parseFloat(s_fe_non), 2,true) }}</td>
                                    <td></td>
                                </tr>
                                <!-- CAPITAL OUTLAY*********************************************************** -->
                                <tr v-if="(parseFloat(s_cap_gad) + parseFloat(s_cap_non))>0">
                                    <td colspan="8"><b>CAPITAL OUTLAY</b></td>
                                </tr>
                                <tr v-if="(parseFloat(s_cap_gad) + parseFloat(s_cap_non))>0" v-for="cap in capitalOutlay">
                                    <td></td>
                                    <!-- Capital Outlay Particulars -->
                                    <td colspan="2" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.particulars,'particulars','budget_requirements', cap, cap.comments)
                                            }">{{ cap.particulars }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.particulars,'particulars','budget_requirements', cap, cap.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Capital Outlay',cap.particulars,'particulars','budget_requirements', cap, cap.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.particulars,'particulars','budget_requirements', cap, cap.comments)">*
                                        </button>
                                    </td>
                                    <!-- Capital Outlay Account Code -->
                                    <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.account_code,'account_code','budget_requirements', cap, cap.comments)
                                            }">{{ cap.account_code }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.account_code,'account_code','budget_requirements', cap, cap.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Capital Outlay',cap.account_code,'account_code','budget_requirements', cap, cap.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.account_code,'account_code','budget_requirements', cap, cap.comments)">*
                                        </button>
                                    </td>
                                    <!-- Capital Outlay GAD Attributed -->
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.GAD_amount,'GAD_amount','budget_requirements', cap, cap.comments)
                                            }">{{ format_number_conv(cap.GAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.GAD_amount,'GAD_amount','budget_requirements', cap, cap.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Capital Outlay',cap.GAD_amount,'GAD_amount','budget_requirements', cap, cap.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.GAD_amount,'GAD_amount','budget_requirements', cap, cap.comments)">*
                                        </button>
                                    </td>
                                    <!-- Capital Outlay NON-GAD Amount -->
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.NONGAD_amount,'NONGAD_amount','budget_requirements', cap, cap.comments)
                                            }">{{ format_number_conv(cap.NONGAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.NONGAD_amount,'NONGAD_amount','budget_requirements', cap, cap.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Capital Outlay',cap.NONGAD_amount,'NONGAD_amount','budget_requirements', cap, cap.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.NONGAD_amount,'NONGAD_amount','budget_requirements', cap, cap.comments)">*
                                        </button>
                                    </td>
                                    <!-- Capital Outlay Total -->
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.Total,'Total','budget_requirements', cap, cap.comments)
                                            }">{{ format_number_conv(cap.Total,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.Total,'Total','budget_requirements', cap, cap.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Capital Outlay',cap.Total,'Total','budget_requirements', cap, cap.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.Total,'Total','budget_requirements', cap, cap.comments)">*
                                        </button>
                                    </td>
                                    <!-- Capital Outlay Source -->
                                    <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.Source,'Source','budget_requirements', cap, cap.comments)
                                            }">{{ cap.Source }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.Source,'Source','budget_requirements', cap, cap.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Capital Outlay',cap.Source,'Source','budget_requirements', cap, cap.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.Source,'Source','budget_requirements', cap, cap.comments)">*
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="(parseFloat(s_cap_gad) + parseFloat(s_cap_non))>0">
                                    <td></td>
                                    <td colspan="3">SUB-TOTAL (Capital Outlay)</td>
                                    <td class="text-end">{{ format_number_conv(s_cap_gad,2,true) }}</td>
                                    <td class="text-end">{{ format_number_conv(s_cap_non,2,true) }}</td>
                                    <td class="text-end">{{ format_number_conv(parseFloat(s_cap_gad) + parseFloat(s_cap_non), 2,true) }}</td>
                                    <td></td>
                                </tr>
                                <!-- CAPITAL OUTLAY*********************************************************** -->

                                <tr>

                                    <td colspan="4">TOTAL</td>
                                    <td class="text-end"></td>
                                    <td class="text-end"></td>
                                    <td class="text-end">{{ format_number_conv(parseFloat(s_cap_gad) + parseFloat(s_cap_non) + parseFloat(s_ps_gad)
                                    + parseFloat(s_ps_non) + parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true)
                                    }}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>

                        <br>
                    </div>
                    <!--IMPLEMENTING TEAM-->
                    <h3 v-if="team_members.length > 0 || paps.implementing_team !== null">
                        7. <Link :href="`/team/${paps.id}/revision/plan/team`">Implementing Team</Link>

                        <button v-if="can_view_comment()" class="superscript-btn"
                            @click="handleClick('Implementing Team','implementing team',paps.implementing_team,'implementing_team','revision_plans', paps, paps.comments)">*
                        </button>
                        <button v-if="has_comment('Implementing Team','implementing team',paps.implementing_team,'implementing_team','revision_plans', paps, paps.comments)" class="superscript-btn"
                            @click="handleClick('Implementing Team','implementing team',paps.implementing_team,'implementing_team','revision_plans', paps, paps.comments)">*
                        </button>
                    </h3>
                    <div align="justify" style="white-space: pre-line">
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
                                    <th>Has GAD-related trainings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="team_member in team_members">
                                    <td
                                    :class="{
                                                'text-danger': has_comment('Team Members','Name',team_member.name,'name','team_plans', team_member, team_member.comments)
                                            }">{{ team_member.name }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Team Plan','Name',team_member.name,'name','team_plans', team_member, team_member.comments)">*
                                        </button>
                                        <button v-if="has_comment('Team Plan','Name',team_member.name,'name','team_plans', team_member, team_member.comments)" class="superscript-btn"
                                            @click="handleClick('Team Plan','Name',team_member.name,'name','team_plans', team_member, team_member.comments)">*
                                        </button>
                                    </td>
                                    <td :class="{
                                                'text-danger': has_comment('Team Plan','Position',team_member.position,'position','team_plans', team_member, team_member.comments)
                                            }"
                                    >{{ team_member.position }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Team Plan','Position',team_member.position,'position','team_plans', team_member, team_member.comments)">*
                                        </button>
                                        <button v-if="has_comment('Team Plan','Position',team_member.position,'position','team_plans', team_member, team_member.comments)" class="superscript-btn"
                                            @click="handleClick('Team Plan','Position',team_member.position,'position','team_plans', team_member, team_member.comments)">*
                                        </button>
                                    </td>
                                    <td :class="{
                                                'text-danger': has_comment('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)
                                            }">{{ team_member.competency }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)">*
                                        </button>
                                        <button v-if="has_comment('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)" class="superscript-btn"
                                            @click="handleClick('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)">*
                                        </button>
                                    </td>
                                    <td :class="{
                                                'text-danger': has_comment('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)
                                            }">{{ team_member.role }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)">*
                                        </button>
                                        <button v-if="has_comment('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)" class="superscript-btn"
                                            @click="handleClick('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)">*
                                        </button>
                                    </td>
                                    <td :class="{
                                                'text-danger': has_comment('Team Plan','with_gad_training',team_member.with_gad_training,'with_gad_training','team_plans', team_member, team_member.comments)
                                            }">
                                        {{ team_member.with_gad_training === '1' ? 'Yes' : 'No' }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Team Plan','with_gad_training',team_member.with_gad_training,'with_gad_training','team_plans', team_member, team_member.comments)">*
                                        </button>
                                        <button v-if="has_comment('Team Plan','with_gad_training',team_member.with_gad_training,'with_gad_training','team_plans', team_member, team_member.comments)" class="superscript-btn"
                                            @click="handleClick('Team Plan','with_gad_training',team_member.with_gad_training,'with_gad_training','team_plans', team_member, team_member.comments)">*
                                        </button>
                                    </td>
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
                        8. <Link>Partnership and Sustainability</Link>
                    </h3>
                    <div align="justify" style="white-space: pre-line">
                        <div v-html="paps.partnership"></div>
                    </div>
                    <br>
                    <br>
                    <!--MONITORING & EVALUATION-->
                    <h3 v-if="monitors.length > 0 || paps.monitoring !== null">
                        9. <Link :href="`/EvaluationMechanismTool/${paps.id}`">Monitoring and Evaluation</Link>
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
                                    <!-- M&E Evaluation Mechanism Tool -->
                                    <td :class="{
                                                'text-danger': has_comment('Monitoring and Evaluation','Evaluation Mechanism Tool',monitor.evaluation_mechanism_tool,'evaluation_mechanism_tool','monitoring_and_evaluations', monitor, monitor.comments)
                                    }">
                                        {{ monitor.evaluation_mechanism_tool }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Monitoring and Evaluation','Evaluation Mechanism Tool',monitor.evaluation_mechanism_tool,'evaluation_mechanism_tool','monitoring_and_evaluations', monitor, monitor.comments)">*
                                        </button>
                                        <button v-if="has_comment('Monitoring and Evaluation','Evaluation Mechanism Tool',monitor.evaluation_mechanism_tool,'evaluation_mechanism_tool','monitoring_and_evaluations', monitor, monitor.comments)" class="superscript-btn"
                                            @click="handleClick('Monitoring and Evaluation','Evaluation Mechanism Tool',monitor.evaluation_mechanism_tool,'evaluation_mechanism_tool','monitoring_and_evaluations', monitor, monitor.comments)">*
                                        </button>
                                    </td>
                                    <!-- M&E OPR and their roles -->
                                    <td :class="{
                                                'text-danger': has_comment('Monitoring and Evaluation','OPCR & their roles',monitor.opr,'opr','monitoring_and_evaluations', monitor, monitor.comments)
                                    }">{{ monitor.opr }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Monitoring and Evaluation','OPCR & their roles',monitor.opr,'opr','monitoring_and_evaluations', monitor, monitor.comments)">*
                                        </button>
                                        <button v-if="has_comment('Monitoring and Evaluation','OPCR & their roles',monitor.opr,'opr','monitoring_and_evaluations', monitor, monitor.comments)" class="superscript-btn"
                                            @click="handleClick('Monitoring and Evaluation','OPCR & their roles',monitor.opr,'opr','monitoring_and_evaluations', monitor, monitor.comments)">*
                                        </button>
                                    </td>
                                    <!-- M&E Target Beneficiaries -->
                                    <td :class="{
                                                'text-danger': has_comment('Monitoring and Evaluation','Target Beneficiaries',monitor.target_beneficiaries,'target_beneficiaries','monitoring_and_evaluations', monitor, monitor.comments)
                                    }">
                                        {{ monitor.target_beneficiaries }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Monitoring and Evaluation','Target Beneficiaries',monitor.target_beneficiaries,'target_beneficiaries','monitoring_and_evaluations', monitor, monitor.comments)">*
                                        </button>
                                        <button v-if="has_comment('Monitoring and Evaluation','Target Beneficiaries',monitor.target_beneficiaries,'target_beneficiaries','monitoring_and_evaluations', monitor, monitor.comments)" class="superscript-btn"
                                            @click="handleClick('Monitoring and Evaluation','Target Beneficiaries',monitor.target_beneficiaries,'target_beneficiaries','monitoring_and_evaluations', monitor, monitor.comments)">*
                                        </button>
                                    </td>
                                    <!-- M&E GAD Expert/Consultant -->
                                    <td :class="{
                                                'text-danger': has_comment('Monitoring and Evaluation','Target Beneficiaries',monitor.gad,'gad','monitoring_and_evaluations', monitor, monitor.comments)
                                    }">{{ monitor.gad }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Monitoring and Evaluation','Target Beneficiaries',monitor.gad,'gad','monitoring_and_evaluations', monitor, monitor.comments)">*
                                        </button>
                                        <button v-if="has_comment('Monitoring and Evaluation','Target Beneficiaries',monitor.gad,'gad','monitoring_and_evaluations', monitor, monitor.comments)" class="superscript-btn"
                                            @click="handleClick('Monitoring and Evaluation','Target Beneficiaries',monitor.gad,'gad','monitoring_and_evaluations', monitor, monitor.comments)">*
                                        </button>
                                    </td>
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
                        10. <Link :href="`/RiskManagement/${paps.id}`">Risk Management</Link>
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
                                    <!-- Risk Management -Possible Risks -->
                                    <td :class="{
                                        'text-danger': has_comment('Risk Management','Possible Risks',risk.possible_risk,'possible_risk','risk_manangements', risk, risk.comments)
                                    }">{{ risk.possible_risk }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Risk Management','Possible Risks',risk.possible_risk,'possible_risk','risk_manangements', risk, risk.comments)">*
                                        </button>
                                        <button v-if="has_comment('Risk Management','Possible Risks',risk.possible_risk,'possible_risk','risk_manangements', risk, risk.comments)" class="superscript-btn"
                                            @click="handleClick('Risk Management','Possible Risks',risk.possible_risk,'possible_risk','risk_manangements', risk, risk.comments)">*
                                        </button>
                                    </td>
                                    <!-- Risk Management -Person Affected -->
                                    <td :class="{
                                        'text-danger': has_comment('Risk Management','Person Affected',risk.person_affected,'person_affected','risk_manangements', risk, risk.comments)
                                    }">{{ risk.person_affected }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Risk Management','Person Affected',risk.person_affected,'person_affected','risk_manangements', risk, risk.comments)">*
                                        </button>
                                        <button v-if="has_comment('Risk Management','Person Affected',risk.person_affected,'person_affected','risk_manangements', risk, risk.comments)" class="superscript-btn"
                                            @click="handleClick('Risk Management','Person Affected',risk.person_affected,'person_affected','risk_manangements', risk, risk.comments)">*
                                        </button>
                                    </td>
                                    <!-- Risk Management -Management -->
                                    <td :class="{
                                        'text-danger': has_comment('Risk Management','Management',risk.management,'management','risk_manangements', risk, risk.comments)
                                    }">{{ risk.management }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Risk Management','Management',risk.management,'management','risk_manangements', risk, risk.comments)">*
                                        </button>
                                        <button v-if="has_comment('Risk Management','Management',risk.management,'management','risk_manangements', risk, risk.comments)" class="superscript-btn"
                                            @click="handleClick('Risk Management','Management',risk.management,'management','risk_manangements', risk, risk.comments)">*
                                        </button>
                                    </td>
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
        <CommentModal v-if="show_comment_modal" @close-modal-event="closeCommentModal" title="COMMENTS">
            <div class="d-flex justify-content-center">

            </div>
            <div>
                <span v-if="auth.user.department_code==='04'">
                    <!-- {{ has_comment() }} -->
                    <div>
                    <textarea class="form-control" rows="5" v-model="comment"
                        placeholder="Write your comment here..."></textarea>
                    </div>
                    <div>
                        <button class="btn btn-primary mt-2 text-white" @click="saveComment">
                            Submit Comment
                        </button>
                    </div>
                </span>

                <div><b>Section: </b>{{ comment_section }}</div>
                <div><b>Subtitle:</b> <span v-html="comment_subtitle"></span></div>
                <div><b>Data:</b> <span v-html="comment_data"></span></div>
                <div><b>Column:</b> {{ comment_column }}</div>
                <div><b>Table:</b> {{ comment_table }}</div>
                <!-- <div>Reference Object: {{ comment_reference_object }}</div> -->

                <div class="col-9">
                    <table class="table table-hover table-bordered border-dark">
                        <thead>
                            <tr>
                                <th class="bg-secondary text-white">Comment</th>
                                <th class="bg-secondary text-white">Status&nbsp;&nbsp;</th>
                                <th class="bg-secondary text-white" v-if="auth.user.department_code==='04'">Actions&nbsp;&nbsp;</th>
                                <th class="bg-secondary text-white">Comment by&nbsp;&nbsp;</th>
                                <th class="bg-secondary text-white">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(comment,index) in comments">
                                <td>{{ comment.comment}}</td>
                                <td :style="{
                                    backgroundColor: comment.comment_status === '0' ? '#fecaca' : '#bbf7d0',
                                    color: comment.comment_status === '0' ? '#991b1b' : '#065f46'
                                }" class="px-2 py-1 rounded">
                                    <b>{{ comment.comment_status === '0' ? 'Unresolved' : 'OK' }}</b>
                                </td>

                                <td v-if="auth.user.department_code==='04'">
                                    <div >
                                        <button class="btn btn-success text-white"
                                        @click="submitAction('resolve', comment.id, index)"
                                        title="Mark comment as Resolved">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                            </svg>
                                        </button>&nbsp;
                                        <button class="btn btn-primary text-white"
                                        @click="submitAction('reset', comment.id, index)"
                                        title="Reset to Unresolved">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
                                                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
                                            </svg>

                                        </button>&nbsp;
                                        <button class="btn btn-danger text-white"
                                        @click="submitAction('delete', comment.id, index)"
                                        title="Delete this comment"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                            </svg>

                                        </button>&nbsp;


                                    </div>
                                </td>
                                <td>
                                    <span v-if="comment.user">{{ comment.user.FullName }}</span>
                                    <span v-else>Not recorded</span>
                                </td>
                                <td>{{ formatDate(comment.created_at) }}</td>
                                <!-- <td>{{ comment }}</td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <br>
        </CommentModal>
        <div class="d-flex justify-content-center">

        </div>
        {{ auth.user }}
        {{ paps.is_strategy_based }}
    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import CommentModal from "@/Shared/ModalDynamicTitle";

export default {
    components: { Filtering, Pagination, CommentModal },
    props: {
        auth: Object,
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

        // mooe_gad: Object,
        // mooe_non: Object,
        // cap_gad: Object,
        // cap_non: Object,
        // ps_gad: Object,
        // ps_non: Object,
        s_mooe_gad: Number,
        s_mooe_non: Number,
        s_cap_gad: Number,
        s_cap_non: Number,
        s_ps_gad: Number,
        s_ps_non: Number,
        s_fe_gad: Number,
        s_fe_non: Number,
        capitalOutlay: Object,
        maintenanceOperating: Object,
        personnelServices: Object,
        financialExpenses: Object,
    },
    computed: {},
    mounted() {
        this.isOne();
        this.calculateTotals(this.paps.is_strategy_based);
        if (!sessionStorage.getItem('reloaded')) {
            sessionStorage.setItem('reloaded', 'true');
            window.location.reload();
        } else {
            sessionStorage.removeItem('reloaded');
        }
    },
    data() {
        return {
            show_comment_modal: false,
            comment: '',
            comment_section: '',
            comment_subtitle: '',
            comment_data: '',
            comment_column: '',
            comment_table: '',
            comment_reference_object: [],
            comments: [],
            v_imp_fe: 0,
            v_imp_co: 0,
            v_imp_mooe: 0,
            v_imp_ps: 0,
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
            // if (this.mooe_gad.length > 0 || this.mooe_non.length > 0 ||
            //     this.cap_gad.length > 0 || this.cap_non.length > 0 ||
            //     this.ps_gad.length > 0 || this.ps_non.length > 0
            // ) {
            //     sb = true;
            // }
            if (this.maintenanceOperating.length > 0 ||
                this.capitalOutlay.length > 0 ||
                this.personnelServices.length > 0
            ) {
                sb = true;
            }
            return sb;
        },
        calculateTotals(revs_is_strat_based) {
            let ps_total = 0;
            let mooe_total = 0;
            let co_total = 0;
            let fe_total = 0;

            this.implementation.forEach(strategy => {
            if (revs_is_strat_based == 1) {
                // Sum from the main strategy level
                ps_total += parseFloat(strategy.ps_total) || 0;
                mooe_total += parseFloat(strategy.mooe_total) || 0;
                co_total += parseFloat(strategy.co_total) || 0;
                fe_total += parseFloat(strategy.fe_total) || 0;
            } else {
                // Sum from the activity child table
                if (Array.isArray(strategy.activity)) {
                strategy.activity.forEach(activity => {
                    ps_total += parseFloat(activity.ps_total) || 0;
                    mooe_total += parseFloat(activity.mooe_total) || 0;
                    co_total += parseFloat(activity.co_total) || 0;
                    fe_total += parseFloat(activity.fe_total) || 0;
                });
                }
            }
            });
            this.v_imp_ps = ps_total;
            this.v_imp_mooe = mooe_total;
            this.v_imp_co = co_total;
            this.v_imp_fe = fe_total;
            return {
                ps_total,
                mooe_total,
                co_total,
                fe_total,
            };
        },
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
        closeCommentModal() {
            this.show_comment_modal = false;
        },
        saveComment() {
            // Logic to save the comment
            // This is just a placeholder, implement your actual saving logic here
            var myurl = "/revision-plan-comments/store";
                    // await axios
            var table_row_id_l=0;
            // console.log(this.comment_table)
            if(this.comment_table==='revision_plans'){
                table_row_id_l = this.comment_reference_object.id
            }
            if(this.comment_table==='strategy_projects'){
                table_row_id_l = this.comment_reference_object.strategy_id
            }
            if(this.comment_table==='activity_projects'){
                table_row_id_l = this.comment_reference_object.activity_id
            }
            if(this.comment_table==='budget_requirements'){
                table_row_id_l = this.comment_reference_object.id
                // alert(table_row_id_l)
                // console.log(this.comment_reference_object)
            }
            if(this.comment_table==='team_plans'){
                table_row_id_l = this.comment_reference_object.id
            }
            if(this.comment_table==='monitoring_and_evaluations'){
                table_row_id_l = this.comment_reference_object.id
            }
            if(this.comment_table==='risk_manangements'){
                table_row_id_l = this.comment_reference_object.id
            }

            if(this.comment_table==='expected_revised_outputs'){
                table_row_id_l = this.comment_reference_object.id
            }
            // alert(table_row_id_l)
            this.$inertia.post(myurl, {
                params: {
                    table_row_id: table_row_id_l,
                    table_name: this.comment_table,
                    column_name: this.comment_column,
                    comment_status: 0,
                    comment: this.comment,
                }
            });
            this.closeCommentModal();
                        setTimeout(() => {
                this.comment = "";
            }, 1000); // 1000 milliseconds = 1 second
        },
        submitAction(type, comment_id, index){
            var myurl = "/revision-plan-comments/action/done";
            this.$inertia.post(myurl, {
                params: {
                    type: type,
                    id: comment_id
                }
            }, {
                preserveScroll: true,
                onSuccess: () => {
                    if (type === 'delete') {
                        this.comments.splice(index, 1);
                        alert("Comment deleted successfully.");
                    } else if (type === 'reset') {
                        this.comments[index].comment_status = '0';
                        alert("Comment status reset to unresolved.");
                    } else if (type === 'resolve') {
                        this.comments[index].comment_status = '1';
                        alert("Comment resolved successfully.");
                    }
                }
            });
        },
        getPairedOutputs(activityProject) {
            const output = activityProject?.expected_output || []
            const outcome = activityProject?.expected_outcome || []
            const max_output = Math.max(output.length)
            const max_outcome = Math.max(outcome.length)

            const rr1= Array.from({ length: max_output }, (_, i) => ({
                id: output[i]?.id||'',
                target_indicator: output[i]?.target_indicator || '',
                outcome_description: output[i]?.description || '',
                table: 'expected_revised_outputs',
                comments: output[i]?.comments || []
            }))
            // { length: max },
            const rr2= Array.from({ length: max_outcome },  (_, i) => ({
                id: outcome[i]?.id||'',
                target_indicator: '',
                outcome_description: outcome[i]?.description || '',
                table: 'expected_revised_outcomes',
                comments: outcome[i]?.comments || []
            }))
            return rr1.concat(rr2)
        }
    }
}
</script>
<style>
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
</style>
