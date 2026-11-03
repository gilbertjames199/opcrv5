<template>
    <Head>
        <title>View PAPS</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
    <div class="row gap-5">
        <!--class="peers fxw-nw jc-sb ai-c"-->
        <div class="peers fxw-nw jc-sb ai-c justify-content-end" v-if="src !== 'budget'">
            <Link v-if="paps.scope === 'GAS'" :href="(src !== 'direct' || department_code_user === department_code_project)
                            ? `/revision/general/administration/services/${paps.FFUNCCOD}/plan`:`/revision_plans`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
            </Link>

            <Link v-if="paps.idmfo == 0 && paps.scope !== 'GAS' && src !== 'rev_app'" :href="(src !== 'direct' || department_code_user === department_code_project)
                            ? `/revision/${paps.idpaps}`:`/revision_plans`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
            </Link>
            <Link v-if="paps.idpaps == 0 && paps.scope !== 'GAS' " :href="(src !== 'direct' || department_code_user === department_code_project)
                            ? `/mforevision/${paps.idmfo}`:`/revision_plans`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
            </Link>
            <!--REVApp-->
            <!-- {{ paps }} -->
            <Link v-if="paps.scope !== 'GAS' && src === 'rev_app'" :href="`/revision_plans?source=rev_app`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
            </Link>
        </div>
        <div class="peers fxw-nw jc-sb ai-c justify-content-end" v-if="src==='budget'">
            <Link v-if="paps.scope === 'GAS'" :href="`/revision_plans?source=budget`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
            </Link>

            <Link v-if="paps.idmfo == 0 && paps.scope !== 'GAS'" :href="`/revision_plans?source=budget`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
            </Link>
            <Link v-if="paps.idpaps == 0 && paps.scope !== 'GAS'" :href="`/revision_plans?source=budget`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
            </Link>
        </div>

        <div class="col-9">
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
        </div>


        <div class="col-9">
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <!--MAIN TABLE-->
                    <section id="revision_plans">
                        <h3>I.&nbsp;&nbsp;&nbsp;
                            <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                                ? `/revision/edit/${paps.id}`:null" target="_blank">
                                Title</Link>
                        </h3>
                    </section>
                    <table name="tabel" class="table table-hover table-bordered border-dark">
                        <tbody>
                            <!-- TITLE -->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Title</th>
                                <td colspan="6" :class="{
                                    'text-danger': has_comment('Title', paps.project_title, paps.project_title, 'project_title', 'revision_plans', paps, paps.comments)
                                }" :id="paps.id+'_revision_plans_project_title'">
                                    {{ paps.project_title }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)">*
                                    </button>


                                </td>
                            </tr>
                            <!-- PROJECT LOCATION -->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Project Location</th>
                                <td colspan="6" :class="{
                                    'text-danger': has_comment('Title',paps.project_location,paps.project_location,'project_location','revision_plans', paps, paps.comments)
                                }" :id="paps.id+'_revision_plans_project_location'">{{ paps.project_location }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.project_location,paps.project_location,'project_location','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.project_location,paps.project_location,'project_location','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.project_location,paps.project_location,'project_location','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                            </tr>
                            <!-- IMPLEMENTATION SCHEDULE -FROM-TO -->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Implementation Schedule</th>
                                <th colspan="1">Start</th>
                                <td colspan="2" :id="paps.id+'_revision_plans_date_start'"
                                :class="{
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
                                <td colspan="2" :id="paps.id+'_revision_plans_date_end'"
                                :class="{
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
                            <!-- INTENDED BENEFICIARIES -->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Intended Beneficiaries</th>
                                <th colspan="1">Male</th>
                                <td colspan="1" :id="paps.id+'_revision_plans_beneficiary_male'" :class="{
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
                                <td colspan="1" :id="paps.id+'_revision_plans_beneficiary_female'" :class="{
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
                                <td colspan="1" :id="paps.id+'_revision_plans_beneficiary_total'" :class="{
                                    'text-danger': has_comment('Title',format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),'beneficiary_total','revision_plans', paps, paps.comments)
                                }">
                                {{ format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true) }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),'beneficiary_total','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),'beneficiary_total','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),'beneficiary_total','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                            </tr>
                            <!-- BASELINE DISAGGREGATED DATA -->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Baseline Disaggregated Data</th>
                                <th colspan="1">Male</th>
                                <td colspan="1" :id="paps.id+'_revision_plans_baseline_male'" :class="{
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
                                <td colspan="1" :id="paps.id+'_revision_plans_baseline_female'" :class="{
                                    'text-danger': has_comment('Title',paps.baseline_female,paps.baseline_female,'baseline_female','revision_plans', paps, paps.comments)
                                }">{{ format_number_conv(paps.baseline_female, 0, true) }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.baseline_female,paps.baseline_female,'baseline_female','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.baseline_female,paps.baseline_female,'baseline_female','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.baseline_female,paps.baseline_female,'baseline_female','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                                <th colspan="1">Data Source</th>
                                <td colspan="1" :id="paps.id+'_revision_plans_data_source'"  :class="{
                                    'text-danger': has_comment('Title',paps.data_source,paps.data_source,'data_source','revision_plans', paps, paps.comments)
                                }">{{ paps.data_source }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.data_source,paps.data_source,'data_source','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.data_source,paps.data_source,'data_source','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.data_source,paps.data_source,'data_source','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                                <!-- <th colspan="1">Total</th>
                                <td colspan="1" :class="{
                                    'text-danger': has_comment('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)
                                }">{{ format_number_conv(paps.baseline_male + paps.baseline_female, 0, true) }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td> -->
                            </tr>
                            <!-- COST OF PROGRAM -->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Cost of Program</th>
                                <th colspan="1">Amount (Php)</th>
                                <td colspan="2" class="text-end"  :id="paps.id+'_revision_plans_amount'" :class="{
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
                                <td colspan="2" :id="paps.id+'_revision_plans_attributed_amount'" class="text-end" :class="{
                                    'text-danger': has_comment('Title','GAD Attributed Amount',imp_amount,'attributed_amount','revision_plans', paps, paps.comments)
                                }"><span v-if="parseFloat(paps.hgdg_score)>4">{{ format_number_conv((imp_amount * (paps.hgdg_score/20)), 2, true) }}</span>
                                    <span v-else>0.00</span>
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title','GAD Attributed Amount',format_number_conv((imp_amount * (paps.hgdg_score/20)), 2, true),'attributed_amount','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title','GAD Attributed Amount',format_number_conv((imp_amount * (paps.hgdg_score/20)), 2, true),'attributed_amount','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title','GAD Attributed Amount',format_number_conv((imp_amount * (paps.hgdg_score/20)), 2, true),'attributed_amount','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                            </tr>
                            <!-- HGDG CHECKLIST -->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">HGDG Checklist</th>
                                <td colspan="3" :id="paps.id+'_revision_plans_HGDG Checklist'" :class="{
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
                                <td colspan="2" :id="paps.id+'_revision_plans_hgdg_score'" :class="{
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
                        <section id="rationale">
                            <h3 :class="{
                                        'text-danger': has_comment('Rationale','rationale',paps.rationale,'rationale','revision_plans', paps, paps.comments)
                                    }">II. <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                                ? `/revision/edit/${paps.id}`:null" target="_blank" :class="{
                                        'text-danger': has_comment('Rationale','rationale',paps.rationale,'rationale','revision_plans', paps, paps.comments)
                                    }">
                                    Rationale
                                </Link>
                                <button v-if="can_view_comment()" class="superscript-btn"
                                    @click="handleClick('Rationale','rationale',paps.rationale,'rationale','revision_plans', paps, paps.comments)">*
                                </button>
                                <button v-if="has_comment('Rationale','rationale',paps.rationale,'rationale','revision_plans', paps, paps.comments)" class="superscript-btn"
                                    @click="handleClick('Rationale','rationale',paps.rationale,'rationale','revision_plans', paps, paps.comments)">*
                                </button>
                            </h3>
                        </section>
                        <br>
                        <div class="bgc-white p-20 bd" >
                            <div v-html="paps.rationale" style="white-space: pre-line"></div>
                        </div>
                        <br>
                     </span>

                    <!-- OBJECTIVES -->
                    <span v-if="paps.objective">
                        <section id="objective">
                            <h3 :class="{
                                        'text-danger': has_comment('Objectives','objective',paps.objective,'objective','revision_plans', paps, paps.comments)
                                    }"
                                >III.
                                <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                                        ? `/revision/edit/${paps.id}`:null" target="_blank"
                                        :class="{
                                        'text-danger': has_comment('Objectives','objective',paps.objective,'objective','revision_plans', paps, paps.comments)
                                    }">
                                    Objectives
                                </Link>
                                <button v-if="can_view_comment()" class="superscript-btn"
                                    @click="handleClick('Objectives','objective',paps.objective,'objective','revision_plans', paps, paps.comments)">*
                                </button>
                                <button v-if="has_comment('Objectives','objective',paps.objective,'objective','revision_plans', paps, paps.comments)" class="superscript-btn"
                                    @click="handleClick('Objectives','objective',paps.objective,'objective','revision_plans', paps, paps.comments)">*
                                </button>
                            </h3>
                        </section>

                        <br>
                        <div  class="bgc-white p-20 bd">
                            <div v-html="paps.objective" style="white-space: pre-line"></div>
                        </div>
                        <br>
                    </span>

                    <!-- Target Beneficiaries -->
                    <span v-if="paps.beneficiaries" >
                        <section id="beneficiaries">
                            <h3 :class="{
                                    'text-danger': has_comment('Beneficiaries','beneficiaries',paps.beneficiaries,'beneficiaries','revision_plans', paps, paps.comments)
                                    }">IV.
                                    <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                                        ? `/revision/edit/${paps.id}`:null"
                                        :class="{
                                            'text-danger': has_comment('Beneficiaries','beneficiaries',paps.beneficiaries,'beneficiaries','revision_plans', paps, paps.comments)
                                        }"
                                        target="_blank">
                                            Target Beneficiaries
                                    </Link>
                                <button v-if="can_view_comment()" class="superscript-btn"
                                    @click="handleClick('Beneficiaries','beneficiaries',paps.beneficiaries,'beneficiaries','revision_plans', paps, paps.comments)">*
                                </button>
                                <button v-if="has_comment('Beneficiaries','beneficiaries',paps.beneficiaries,'beneficiaries','revision_plans', paps, paps.comments)" class="superscript-btn"
                                    @click="handleClick('Beneficiaries','beneficiaries',paps.beneficiaries,'beneficiaries','revision_plans', paps, paps.comments)">*
                                </button>
                            </h3>
                        </section>
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

                        <h3 id="implementation_workplan">
                            <!-- /strategies-and-activities/${dat.id} -->
                            V.
                            <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                            ? `/strategies-and-activities/${paps.id}`:null" target="_blank">
                                Implementation Plan
                            </Link>
                        </h3>

                        <table class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white" >
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
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(dat, index) in implementation" :key="dat.id">

                                    <tr  style="background-color:lightgrey; font-weight: bold;" v-if="paps.is_strategy_based==1">
                                        <td  :class="{
                                            'text-danger': has_comment('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)
                                        }" ><b>{{ dat.description }} </b>
                                            <button v-if="can_view_comment()" class="superscript-btn"
                                                @click="handleClick('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)">*
                                            </button>
                                            <button v-if="has_comment('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)" class="superscript-btn"
                                                @click="handleClick('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)">*
                                            </button>

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
                                    <tr :id="dat.id + '_strategy_projects_strategy'" style="background-color:lightgrey; font-weight: bold;" v-if="paps.is_strategy_based==0">
                                        <td :class="{
                                            'text-danger': has_comment('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)
                                        }" colspan="12"><b>{{ dat.description }}</b>
                                            <button v-if="can_view_comment()" class="superscript-btn"
                                                @click="handleClick('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)">*
                                            </button>
                                            <button v-if="has_comment('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)" class="superscript-btn"
                                                @click="handleClick('Implementation Plan','strategies',dat.description,'strategy','strategy_projects', dat, dat.comments)">*
                                            </button>
                                        </td>
                                    </tr>
                                    <template v-if="dat.activity && paps.is_strategy_based==0">
                                        <tr  v-for="(act, subIndex) in dat.activity" :key="subIndex" style="height: 100%">
                                            <!-- DESCRIPTION -->
                                            <td :class="{
                                                'text-danger': has_comment('Implementation Plan','activities',act.description,'activities','activity_projects', act, act.comments)
                                            }" :id="act.activity_id + '_activity_projects_activities'"><b>{{ act.description }}</b>

                                                <button v-if="can_view_comment()" class="superscript-btn"
                                                    @click="handleClick('Implementation Plan','activities',act.description,'activities','activity_projects', act, act.comments)">*
                                                </button>
                                                <button v-if="has_comment('Implementation Plan','activities',act.description,'activities','activity_projects', act, act.comments)" class="superscript-btn"
                                                    @click="handleClick('Implementation Plan','activities',act.description,'activities','activity_projects', act, act.comments)">*
                                                </button>
                                            </td>
                                            <!-- TARGET INDICATOR -->
                                            <!-- <td :class="{
                                                'text-danger': has_comment('Implementation Plan','activity target indicator',act.target_indicator,'activity target indicator','activity_projects', act, act.comments)
                                            }">
                                                    <div v-if="act.activityProject[0]" v-for="(eo,index) in act.activityProject[0].expected_output" :key="index">
                                                        <div>{{ eo.target_indicator }}
                                                            <span v-if="paps.is_strategy_based==0">{{ act.target_indicator }}
                                                                <button v-if="can_view_comment()" class="superscript-btn"
                                                                    @click="handleClick('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)">*
                                                                </button>
                                                                <button v-if="has_comment('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)" class="superscript-btn"
                                                                    @click="handleClick('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)">*
                                                                </button>
                                                                <hr>
                                                            </span>
                                                        </div>
                                                        <hr>
                                                    </div>
                                                    <tr v-if="act.activityProject[0]" v-for="eo in act.activityProject[0].expected_outcome">
                                                        <div>{{ eo.description }} </div>
                                                        <hr>
                                                    </tr>
                                            </td> -->
                                            <!-- GAD ISSUE -->
                                            <!-- <td :class="{
                                                'text-danger': has_comment('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)
                                            }">
                                                <span v-if="paps.is_strategy_based==0">{{ act.gad_issue }}
                                                    <button v-if="can_view_comment()" class="superscript-btn"
                                                        @click="handleClick('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)">*
                                                    </button>
                                                    <button v-if="has_comment('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)" class="superscript-btn"
                                                        @click="handleClick('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)">*
                                                    </button>
                                                </span>
                                            </td> -->
                                            <!-- DATE FROM/DATE TO -->
                                            <!-- <td :class="{
                                                'text-danger': has_comment('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments) ||
                                                has_comment('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)
                                            }">
                                                <span v-if="paps.is_strategy_based==0">
                                                    <span v-if="act.date_from">{{ formatMonthYear(act.date_from) }}
                                                        <button v-if="can_view_comment()" class="superscript-btn"
                                                            @click="handleClick('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)">*
                                                        </button>
                                                        <button v-if="has_comment('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)" class="superscript-btn"
                                                            @click="handleClick('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)">*
                                                        </button>
                                                    </span>
                                                    <span v-if="act.date_from && act.date_to">&nbsp;to&nbsp;</span>
                                                    <span v-if="act.date_to">{{ formatMonthYear(act.date_to) }}
                                                        <button v-if="can_view_comment()" class="superscript-btn"
                                                            @click="handleClick('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)">*
                                                        </button>
                                                        <button v-if="has_comment('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)" class="superscript-btn"
                                                            @click="handleClick('Implementation Plan','activity Date To',act.date_to,'date_to','activity_projects', act, act.comments)">*
                                                        </button>
                                                    </span>
                                                </span>
                                            </td> -->
                                            <!-- EXPECTED OUTPUT/OUTCOME -->
                                            <!-- <td>
                                                <span v-if="paps.is_strategy_based==0">
                                                    <div v-if="act.activityProject[0]" v-for="(eo,index) in act.activityProject[0].expected_output" :key="index">

                                                        <div>{{ act.activityProject[0].expected_output[index]?.description }} </div>
                                                        <hr>

                                                    </div>
                                                    <tr v-if="act.activityProject[0]" v-for="eo in act.activityProject[0].expected_outcome">
                                                        <div>{{ eo }} **</div>

                                                        <hr>
                                                    </tr>
                                                </span>

                                            </td> -->
                                            <!-- MERGED -->
                                             <!-- <td>
                                                <span v-if="getPairedOutputs(act.activityProject[0]) && getPairedOutputs(act.activityProject[0]).length">
                                                    Dsadasdasdasdasdads
                                                </span>
                                                <span v-else>Empty siya</span>
                                             </td> -->
                                            <td colspan="4" style="width: 32%; padding: 0; border: 1px solid #000; vertical-align: top;">
                                                <div style="display: flex; flex-direction: column; height: 100%; min-height: 100%;">
                                                    <!-- style="border-collapse: collapse; width: 100%; height: 100%; table-layout: fixed;" -->
                                                    <table class="m-0"
                                                    style="border-collapse: collapse; width: 100%; height: 100%; table-layout: fixed; flex: 1 1 auto;"
                                                    v-if="getPairedOutputs(act.activityProject[0]) && getPairedOutputs(act.activityProject[0]).length">
                                                        <template v-for="(pair, i) in getPairedOutputs(act.activityProject[0])" :key="i" >
                                                            <tr style="height: 100%;">
                                                                <!-- Target Indicator -->
                                                                <td class="align-top" style="width: 25%; height: 100%; border: 1px solid #000; padding: 4px;" :id="pair.id + '_expected_revised_outputs_target_indicator'">
                                                                    <span v-if="paps.is_strategy_based==0 && pair.target_indicator"
                                                                            :class="{
                                                                        'text-danger': has_comment('Implementation Plan','Target/Indicator',pair.target_indicator,'target_indicator','expected_revised_outputs', pair, pair.comments) ||
                                                                        has_comment('Implementation Plan','Target/Indicator',pair.target_indicator,'target_indicator','expected_revised_outputs', pair, pair.comments)
                                                                    }"
                                                                    >{{ pair.target_indicator }}
                                                                        <span v-if="pair.quantity>0"> - {{ pair.quantity }}</span>
                                                                        <button v-if="can_view_comment()" class="superscript-btn"
                                                                            @click="handleClick('Implementation Plan','Target/Indicator',pair.target_indicator,'target_indicator',pair.table, pair, pair.comments)">*
                                                                        </button>
                                                                        <button v-if="has_comment('Implementation Plan','Target/Indicator',pair.target_indicator,'target_indicator',pair.table, pair, pair.comments)" class="superscript-btn"
                                                                            @click="handleClick('Implementation Plan','Target/Indicator',pair.target_indicator,'target_indicator',pair.table, pair, pair.comments)">*
                                                                        </button>

                                                                    </span>
                                                                    <br><br>
                                                                </td>
                                                                <!-- GAD Issue -->
                                                                <td v-if="i === 0" class="align-top" :id="act.activity_id + '_activity_projects_gad_issue'" :class="{
                                                                    'text-danger': has_comment('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)
                                                                }"  style="width: 25%; border: 1px solid #000; padding: 4px;" :rowspan="getPairedOutputs(act.activityProject[0]).length"

                                                                >
                                                                    <span v-if="paps.is_strategy_based==0">{{ act.gad_issue }}
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
                                                                    <span v-if="paps.is_strategy_based==0">
                                                                        <span v-if="act.date_from" :id="act.activity_id + '_activity_projects_date_from'">{{ formatMonthYear(act.date_from) }}
                                                                            <button v-if="can_view_comment()" class="superscript-btn"
                                                                                @click="handleClick('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)">*
                                                                            </button>
                                                                            <button v-if="has_comment('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)" class="superscript-btn"
                                                                                @click="handleClick('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)">*
                                                                            </button>
                                                                        </span>
                                                                        <span v-if="act.date_from && act.date_to">&nbsp;to&nbsp;</span>
                                                                        <span v-if="act.date_to" :id="dat.id + '_activity_projects_date_to'">{{ formatMonthYear(act.date_to) }}
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
                                                                    }" :id="pair.id + '_expected_revised_outputs_output_description'"
                                                                    ><span v-if="pair.quantity>0" > {{ pair.quantity }} </span> {{ pair.output_description }}
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
                                                                        {{ pair.outcome_description }}
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
                                                    <table class="m-0" style="border-collapse: collapse; width: 100%; height: 100%; table-layout: fixed;"
                                                    v-else>
                                                        <tbody>
                                                        <!-- <template > -->
                                                            <tr >
                                                                <td >

                                                                </td>
                                                                <!-- GAD Issue -->
                                                                <td class="align-top" :class="{
                                                                    'text-danger': has_comment('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)
                                                                }" :id="act.activity_id + '_activity_projects_gad_issue'" style="width: 25%; border: 1px solid #000; padding: 4px;" :rowspan="getPairedOutputs(act.activityProject[0]).length">
                                                                    <span v-if="paps.is_strategy_based==0">{{ act.gad_issue }}
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
                                                                    <span v-if="paps.is_strategy_based==0">
                                                                        <span v-if="act.date_from" :id="act.activity_id + '_activity_projects_date_from'">{{ formatMonthYear(act.date_from) }}
                                                                            <button v-if="can_view_comment()" class="superscript-btn"
                                                                                @click="handleClick('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)">*
                                                                            </button>
                                                                            <button v-if="has_comment('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)" class="superscript-btn"
                                                                                @click="handleClick('Implementation Plan','activity Date From',act.date_from,'date_from','activity_projects', act, act.comments)">*
                                                                            </button>
                                                                        </span>
                                                                        <span v-if="act.date_from && act.date_to">&nbsp;to&nbsp;</span>
                                                                        <span v-if="act.date_to" :id="act.activity_id + '_activity_projects_date_to'">{{ formatMonthYear(act.date_to) }}
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
                                                        <!-- </template> -->
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </td>
                                            <!-- PERSONNEL SERVICES -->
                                            <td :class="{
                                                'text-danger': has_comment('Implementation Plan','activity Personnel Services',act.ps_total,'ps_total','activity_projects', act, act.comments)
                                            }" :id="act.activity_id + '_activity_projects_ps_total'">
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
                                            }" :id="act.activity_id + '_activity_projects_mooe_total'">
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
                                            }" :id="act.activity_id + '_activity_projects_fe_total'"><span v-if="paps.is_strategy_based==0">{{ format_number_conv(parseFloat(act.fe_total),2,true) }}</span>
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
                                            }" :id="act.activity_id + '_activity_projects_co_total'"><span v-if="paps.is_strategy_based==0">{{ format_number_conv(parseFloat(act.co_total),2,true) }}</span>
                                                <button v-if="can_view_comment()" class="superscript-btn"
                                                    @click="handleClick('Implementation Plan','activity Capital Outlay',act.co_total,'co_total','activity_projects', act, act.comments)">*
                                                </button>
                                                <button v-if="has_comment('Implementation Plan','activity Capital Outlay',act.co_total,'co_total','activity_projects', act, act.comments)" class="superscript-btn"
                                                    @click="handleClick('Implementation Plan','activity Capital Outlay',act.co_total,'co_total','activity_projects', act, act.comments)">*
                                                </button>
                                            </td>
                                            <!-- TOTAL -->
                                            <td>
                                                <span v-if="paps.is_strategy_based==0">{{ format_number_conv(parseFloat(act.ps_total) + parseFloat(act.mooe_total)+ parseFloat(act.co_total),2,true) }}</span>
                                            </td>
                                            <!-- CCET Code -->
                                            <td :class="{
                                                'text-danger': has_comment('Implementation Plan','activity CCET Code',act.ccet_code,'ccet_code','activity_projects', act, act.comments)
                                            }" :id="act.activity_id + '_activity_projects_ccet_code'"><span v-if="paps.is_strategy_based==0">{{ act.ccet_code }}</span>
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
                                            }" :id="act.activity_id + '_activity_projects_responsible'"><span v-if="paps.is_strategy_based==0">{{ act.responsible }}</span>
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
                                        <!-- PS TOTAL -->
                                        <td :class="{
                                            'text-danger': has_comment('Implementation Plan',
                                            format_number_conv(v_imp_ps,2,true),
                                            format_number_conv(v_imp_ps,2,true),
                                            'imp_ps',
                                            'revision_plans',
                                            paps,
                                            paps.comments)
                                        }">{{ format_number_conv(v_imp_ps,2,true) }}
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
                                        </td>
                                        <!-- MOOE TOTAL -->
                                        <td :class="{
                                            'text-danger': has_comment('Implementation Plan',
                                            format_number_conv(v_imp_mooe,2,true),
                                            format_number_conv(v_imp_mooe,2,true),
                                            'imp_mooe',
                                            'revision_plans',
                                            paps,
                                            paps.comments)
                                        }">{{ format_number_conv(v_imp_mooe,2,true) }}
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
                                        </td>
                                        <!-- FE TOTAL -->
                                        <td :class="{
                                            'text-danger': has_comment('Implementation Plan',
                                            format_number_conv(v_imp_fe,2,true),
                                            format_number_conv(v_imp_fe,2,true),
                                            'imp_fe',
                                            'revision_plans',
                                            paps,
                                            paps.comments)
                                        }">{{ format_number_conv(v_imp_fe,2,true) }}
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
                                        </td>
                                        <!-- CO TOTAL -->
                                        <td :class="{
                                            'text-danger': has_comment('Implementation Plan',
                                            format_number_conv(v_imp_co,2,true),
                                            format_number_conv(v_imp_co,2,true),
                                            'imp_co',
                                            'revision_plans',
                                            paps,
                                            paps.comments)
                                        }">{{ format_number_conv(v_imp_co,2,true)}}
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
                                        </td>
                                        <td class="text-end"
                                            :class="{
                                                'text-danger': has_comment('Implementation Plan',
                                                format_number_conv(imp_amount,2,true),
                                                format_number_conv(imp_amount,2,true),
                                                'total_imp_amount',
                                                'revision_plans',
                                                paps,
                                                paps.comments)
                                            }"
                                        >{{ format_number_conv(imp_amount,2,true) }}
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
                                </tr>
                            </tbody>
                        </table>
                        <!-- {{ implementation }} -->
                    </div>
                    <br>
                    <!--BUDGETARY REQUIREMENTS-->
                    <!-- v-if="b_mooe.length>0 || b_capital.length>0 || b_ps.length>0" -->
                    <div>
                        <h3 id="budgetary_requirements">
                            VI. <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                            ? `/budget/${paps.id}`:null">
                                Estimated Cost/Budgetary Requirements
                            </Link>
                        </h3>
                        <!-- {{ capitalOutlay }}
                        showBudgetTable: {{ showBudgetTable() }} -->
                        <!-- <table v-if="showBudgetTable()" class="table table-hover table-bordered border-dark">
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
                                <tr v-if="(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non))>0"

                                >
                                    <td colspan="8"><b>MAINTENANCE, OPERATING, AND OTHER EXPENSES</b></td>
                                </tr>
                                <tr v-if="(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non))>0" v-for="mooe in maintenanceOperating">
                                    <td ></td>
                                    MOOE -PARTICULARS
                                    <td colspan="2"
                                    :class="{
                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.particulars,'particulars','budget_requirements', mooe, mooe.comments)
                                            }" :id="mooe.id + '_budget_requirements_particulars'"
                                    >{{ mooe.particulars }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.particulars,'particulars','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','MOOE',mooe.particulars,'particulars','budget_requirements', mooe, mooe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.particulars,'particulars','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                    </td>
                                    MOOE -ACCOUNT CODE
                                    <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.account_code,'account_code','budget_requirements', mooe, mooe.comments)
                                            }" :id="mooe.id + '_budget_requirements_account_code'"
                                    >{{ mooe.account_code }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.account_code,'account_code','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','MOOE',mooe.account_code,'account_code','budget_requirements', mooe, mooe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.account_code,'account_code','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                    </td>
                                    MOOE GAD Attirbuted
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.GAD_amount,'GAD_amount','budget_requirements', mooe, mooe.comments)
                                            }" :id="mooe.id + '_budget_requirements_GAD_amount'">{{ format_number_conv(mooe.GAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.GAD_amount,'GAD_amount','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','MOOE',mooe.GAD_amount,'GAD_amount','budget_requirements', mooe, mooe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.GAD_amount,'GAD_amount','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                    </td>
                                     MOOE NON-GAD
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.NONGAD_amount,'NONGAD_amount','budget_requirements', mooe, mooe.comments)
                                            }" :id="mooe.id + '_budget_requirements_NONGAD_amount'">
                                        {{ format_number_conv(mooe.NONGAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.NONGAD_amount,'NONGAD_amount','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','MOOE',mooe.NONGAD_amount,'NONGAD_amount','budget_requirements', mooe, mooe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.NONGAD_amount,'NONGAD_amount','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                    </td>
                                     MOOE Total
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.Total,'Total','budget_requirements', mooe, mooe.comments)
                                            }" :id="mooe.id + '_budget_requirements_Total'">{{ format_number_conv(mooe.Total,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.Total,'Total','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','MOOE',mooe.Total,'Total','budget_requirements', mooe, mooe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.Total,'Total','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                    </td>
                                    MOOE Source
                                    <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.Source,'Source','budget_requirements', mooe, mooe.comments)
                                            }" :id="mooe.id + '_budget_requirements_Source'">{{ mooe.Source }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.Source,'Source','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','MOOE',mooe.Source,'Source','budget_requirements', mooe, mooe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','MOOE',mooe.Source,'Source','budget_requirements', mooe, mooe.comments)">*
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non))>0">
                                    <td ></td>
                                    <td colspan="3">
                                        SUB-TOTAL (MOOE)
                                    </td>
                                    MOOE GAD ******************************************************************************************************************
                                    <td class="text-end" :class="{
                                        'text-danger': has_comment('Budgetary Requirements', format_number_conv(s_mooe_gad,2,true), format_number_conv(s_mooe_gad,2,true), 'budgetary_mooe_gad', 'revision_plans', paps, paps.comments)
                                    }">
                                        {{ format_number_conv(s_mooe_gad,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',format_number_conv(s_mooe_gad,2,true),format_number_conv(s_mooe_gad,2,true),'budgetary_mooe_gad','revision_plans', paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements',format_number_conv(s_mooe_gad,2,true),format_number_conv(s_mooe_gad,2,true),'budgetary_mooe_gad','revision_plans', paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',format_number_conv(s_mooe_gad,2,true),format_number_conv(s_mooe_gad,2,true),'budgetary_mooe_gad','revision_plans', paps, paps.comments)">*
                                        </button>
                                    </td>
                                    MOOE NON-GAD ******************************************************************************************************************
                                    <td class="text-end" :class="{
                                        'text-danger': has_comment('Budgetary Requirements', format_number_conv(s_mooe_non,2,true), format_number_conv(s_mooe_non,2,true), 'budgetary_mooe_non', 'revision_plans', paps, paps.comments)
                                    }">
                                        {{ format_number_conv(s_mooe_non,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements', format_number_conv(s_mooe_non,2,true), format_number_conv(s_mooe_non,2,true), 'budgetary_mooe_non', 'revision_plans', paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements', format_number_conv(s_mooe_non,2,true), format_number_conv(s_mooe_non,2,true), 'budgetary_mooe_non', 'revision_plans', paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements', format_number_conv(s_mooe_non,2,true), format_number_conv(s_mooe_non,2,true), 'budgetary_mooe_non', 'revision_plans', paps, paps.comments)">*
                                        </button>
                                    </td>
                                    MOOE TOTAL ******************************************************************************************************************
                                    <td class="text-end" :class="{
                                        'text-danger': has_comment('Budgetary Requirements', format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true), format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true),
                                        'budgetary_mooe_total', 'revision_plans', paps, paps.comments)
                                    }">
                                        {{ format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements', format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true), format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true),
                                        'budgetary_mooe_total', 'revision_plans', paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements', format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true), format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true),
                                        'budgetary_mooe_total', 'revision_plans', paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements', format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true), format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true),
                                        'budgetary_mooe_total', 'revision_plans', paps, paps.comments)">*
                                        </button>
                                    </td>
                                    <td></td>
                                </tr>
                                 <tr v-if="(parseFloat(s_ps_gad) + parseFloat(s_ps_non))>0">
                                    <td colspan="8"><b>PERSONNEL SERVICES</b></td>
                                </tr>
                                <tr  v-if="(parseFloat(s_ps_gad) + parseFloat(s_ps_non))>0" v-for="ps in personnelServices">
                                    <td :id="ps.id + '_budget_requirements'"></td>
                                    PS Particular
                                    <td colspan="2" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.particulars,'particulars','budget_requirements', ps, ps.comments)
                                            }" :id="ps.id + '_budget_requirements_particulars'">{{ ps.particulars }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.particulars,'particulars','budget_requirements', ps, ps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Personnel Services',ps.particulars,'particulars','budget_requirements', ps, ps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.particulars,'particulars','budget_requirements', ps, ps.comments)">*
                                        </button>
                                    </td>
                                    PS Account Code
                                    <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.account_code,'account_code','budget_requirements', ps, ps.comments)
                                            }" :id="ps.id + '_budget_requirements_account_code'">{{ ps.account_code }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.account_code,'account_code','budget_requirements', ps, ps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Personnel Services',ps.account_code,'account_code','budget_requirements', ps, ps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.account_code,'account_code','budget_requirements', ps, ps.comments)">*
                                        </button>
                                    </td>
                                     PS GAD Amount
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.GAD_amount,'GAD_amount','budget_requirements', ps, ps.comments)
                                            }" :id="ps.id + '_budget_requirements_GAD_amount'">{{ format_number_conv(ps.GAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.GAD_amount,'GAD_amount','budget_requirements', ps, ps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Personnel Services',ps.GAD_amount,'GAD_amount','budget_requirements', ps, ps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.GAD_amount,'GAD_amount','budget_requirements', ps, ps.comments)">*
                                        </button>
                                    </td>
                                    PS NONGAD Amount
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.NONGAD_amount,'NONGAD_amount','budget_requirements', ps, ps.comments)
                                            }" :id="ps.id + '_budget_requirements_NONGAD_amount'">
                                        {{ format_number_conv(ps.NONGAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.NONGAD_amount,'NONGAD_amount','budget_requirements', ps, ps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Personnel Services',ps.NONGAD_amount,'NONGAD_amount','budget_requirements', ps, ps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.NONGAD_amount,'NONGAD_amount','budget_requirements', ps, ps.comments)">*
                                        </button>
                                    </td>
                                     PS Total
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.Total,'Total','budget_requirements', ps, ps.comments)
                                            }" :id="ps.id + '_budget_requirements_Total'">{{ format_number_conv(ps.Total,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.Total,'Total','budget_requirements', ps, ps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Personnel Services',ps.Total,'Total','budget_requirements', ps, ps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.Total,'Total','budget_requirements', ps, ps.comments)">*
                                        </button>
                                    </td>
                                     PS Source
                                    <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.Source,'Source','budget_requirements', ps, ps.comments)
                                            }" :id="ps.id + '_budget_requirements_Source'">{{ ps.Source }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.Source,'Source','budget_requirements', ps, ps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Personnel Services',ps.Source,'Source','budget_requirements', ps, ps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Personnel Services',ps.Source,'Source','budget_requirements', ps, ps.comments)">*
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="(parseFloat(s_ps_gad) + parseFloat(s_ps_non))>0">
                                    <td ></td>
                                    <td colspan="3">SUB-TOTAL (PS)</td>
                                     PS GAD ******************************************************************************************************************
                                    <td class="text-end" :class="{
                                        'text-danger': has_comment('Budgetary Requirements',
                                        format_number_conv(s_ps_gad,2,true),
                                        format_number_conv(s_ps_gad,2,true),
                                        'budgetary_ps_gad', 'revision_plans',
                                        paps, paps.comments)
                                    }">{{ format_number_conv(s_ps_gad,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            format_number_conv(s_ps_gad,2,true),
                                            format_number_conv(s_ps_gad,2,true),
                                            'budgetary_ps_gad', 'revision_plans',
                                        paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements',
                                            format_number_conv(s_ps_gad,2,true),
                                            format_number_conv(s_ps_gad,2,true),
                                            'budgetary_ps_gad', 'revision_plans',
                                            paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            format_number_conv(s_ps_gad,2,true),
                                            format_number_conv(s_ps_gad,2,true),
                                            'budgetary_ps_gad', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                    </td>
                                    PS NON-GAD ******************************************************************************************************************
                                    <td class="text-end" :class="{
                                        'text-danger': has_comment('Budgetary Requirements',
                                        format_number_conv(s_ps_non,2,true),
                                        format_number_conv(s_ps_non,2,true),
                                        'budgetary_ps_non', 'revision_plans',
                                        paps, paps.comments)
                                    }">{{ format_number_conv(s_ps_non,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            format_number_conv(s_ps_non,2,true),
                                            format_number_conv(s_ps_non,2,true),
                                            'budgetary_ps_non', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements',
                                            format_number_conv(s_ps_non,2,true),
                                            format_number_conv(s_ps_non,2,true),
                                            'budgetary_ps_non', 'revision_plans',
                                            paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            format_number_conv(s_ps_non,2,true),
                                            format_number_conv(s_ps_non,2,true),
                                            'budgetary_ps_non', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                    </td>
                                    PS TOTAL ******************************************************************************************************************
                                    <td class="text-end" :class="{
                                        'text-danger': has_comment('Budgetary Requirements',
                                        format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),
                                        format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),
                                        'budgetary_ps_total', 'revision_plans',
                                        paps, paps.comments)
                                    }"
                                    >{{ format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),
                                            format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),
                                            'budgetary_ps_total', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements',
                                            format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),
                                            format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),
                                            'budgetary_ps_total', 'revision_plans',
                                            paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),
                                            format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),
                                            'budgetary_ps_total', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr v-if="(parseFloat(s_fe_gad) + parseFloat(s_fe_non))>0">
                                    <td colspan="8"><b>FINANCIAL EXPENSES</b></td>
                                </tr>
                                <tr v-if="(parseFloat(s_fe_gad) + parseFloat(s_fe_non))>0" v-for="fe in financialExpenses">
                                    <td :id="fe.id + '_budget_requirements'"></td>
                                    Financial Expenses Particulars

                                    <td colspan="2" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.particulars,'particulars','budget_requirements', fe, fe.comments)
                                            }" :id="fe.id + '_budget_requirements_particulars'">{{ fe.particulars }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.particulars,'particulars','budget_requirements', fe, fe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Financial Expenses',fe.particulars,'particulars','budget_requirements', fe, fe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.particulars,'particulars','budget_requirements', fe, fe.comments)">*
                                        </button>
                                    </td>
                                     Financial Expenses Account Code
                                    <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.account_code,'account_code','budget_requirements', fe, fe.comments)
                                            }" :id="fe.id + '_budget_requirements_account_code'">{{ fe.account_code }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.account_code,'account_code','budget_requirements', fe, fe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Financial Expenses',fe.account_code,'account_code','budget_requirements', fe, fe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.account_code,'account_code','budget_requirements', fe, fe.comments)">*
                                        </button>
                                    </td>
                                     Financial Expenses GAD Attributed
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.GAD_amount,'GAD_amount','budget_requirements', fe, fe.comments)
                                            }" :id="fe.id + '_budget_requirements_GAD_amount'">{{ format_number_conv(fe.GAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.GAD_amount,'GAD_amount','budget_requirements', fe, fe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Financial Expenses',fe.GAD_amount,'GAD_amount','budget_requirements', fe, fe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.GAD_amount,'GAD_amount','budget_requirements', fe, fe.comments)">*
                                        </button>
                                    </td>
                                     Financial Expenses NON-GAD Amount
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.NONGAD_amount,'NONGAD_amount','budget_requirements', fe, fe.comments)
                                            }" :id="fe.id + '_budget_requirements_NONGAD_amount'">{{ format_number_conv(fe.NONGAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.NONGAD_amount,'NONGAD_amount','budget_requirements', fe, fe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Financial Expenses',fe.NONGAD_amount,'NONGAD_amount','budget_requirements', fe, fe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.NONGAD_amount,'NONGAD_amount','budget_requirements', fe, fe.comments)">*
                                        </button>
                                    </td>
                                    Financial Expenses Total
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.Total,'Total','budget_requirements', fe, fe.comments)
                                            }" :id="fe.id + '_budget_requirements_Total'">{{ format_number_conv(fe.Total,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.Total,'Total','budget_requirements', fe, fe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Financial Expenses',fe.Total,'Total','budget_requirements', fe, fe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.Total,'Total','budget_requirements', fe, fe.comments)">*
                                        </button>
                                    </td>
                                    Financial Expenses Source
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.Source,'Source','budget_requirements', fe, fe.comments)
                                            }" :id="fe.id + '_budget_requirements_Source'">{{ fe.Source }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.Source,'Source','budget_requirements', fe, fe.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Financial Expenses',fe.Source,'Source','budget_requirements', fe, fe.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Financial Expenses',fe.Source,'Source','budget_requirements', fe, fe.comments)">*
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="(parseFloat(s_fe_gad) + parseFloat(s_fe_non))>0">
                                    <td ></td>
                                    <td colspan="3">SUB-TOTAL (Financial Expenses)</td>
                                     FE GAD ******************************************************************************************************************
                                    <td class="text-end" :class="{
                                        'text-danger': has_comment('Budgetary Requirements',
                                        format_number_conv(s_fe_gad,2,true),
                                        format_number_conv(s_fe_gad,2,true),
                                        'budgetary_fe_gad', 'revision_plans',
                                        paps, paps.comments)
                                    }">
                                        {{ format_number_conv(s_fe_gad,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            format_number_conv(s_fe_gad,2,true),
                                            format_number_conv(s_fe_gad,2,true),
                                            'budgetary_fe_gad', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements',
                                            format_number_conv(s_fe_gad,2,true),
                                            format_number_conv(s_fe_gad,2,true),
                                            'budgetary_fe_gad', 'revision_plans',
                                            paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            format_number_conv(s_fe_gad,2,true),
                                            format_number_conv(s_fe_gad,2,true),
                                            'budgetary_fe_gad', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                    </td>
                                    FE NON-GAD ******************************************************************************************************************
                                    <td class="text-end" :class="{
                                        'text-danger': has_comment('Budgetary Requirements',
                                        format_number_conv(s_fe_non,2,true),
                                        format_number_conv(s_fe_non,2,true),
                                        'budgetary_fe_non', 'revision_plans',
                                        paps, paps.comments)
                                    }">{{ format_number_conv(s_fe_non,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            format_number_conv(s_fe_non,2,true),
                                            format_number_conv(s_fe_non,2,true),
                                            'budgetary_fe_non', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements',
                                            format_number_conv(s_fe_non,2,true),
                                            format_number_conv(s_fe_non,2,true),
                                            'budgetary_fe_non', 'revision_plans',
                                            paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            format_number_conv(s_fe_non,2,true),
                                            format_number_conv(s_fe_non,2,true),
                                            'budgetary_fe_non', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                    </td>
                                     FE TOTAL ******************************************************************************************************************
                                    <td class="text-end" :class="{
                                        'text-danger': has_comment('Budgetary Requirements',
                                            'TOTAL FINANCIAL EXPENSES',
                                            format_number_conv(parseFloat(s_fe_gad) + parseFloat(s_fe_non), 2,true),
                                            'budgetary_fe_totl', 'revision_plans',
                                            paps, paps.comments)
                                        }">{{ format_number_conv(parseFloat(s_fe_gad) + parseFloat(s_fe_non), 2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            'TOTAL FINANCIAL EXPENSES',
                                            format_number_conv(parseFloat(s_fe_gad) + parseFloat(s_fe_non), 2,true),
                                            'budgetary_fe_totl', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements',
                                            'TOTAL FINANCIAL EXPENSES',
                                            format_number_conv(parseFloat(s_fe_gad) + parseFloat(s_fe_non), 2,true),
                                            'budgetary_fe_totl', 'revision_plans',
                                        paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            'TOTAL FINANCIAL EXPENSES',
                                            format_number_conv(parseFloat(s_fe_gad) + parseFloat(s_fe_non), 2,true),
                                            'budgetary_fe_totl', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr v-if="(parseFloat(s_cap_gad) + parseFloat(s_cap_non))>0">
                                    <td colspan="8"><b>CAPITAL OUTLAY</b></td>
                                </tr>
                                <tr v-if="(parseFloat(s_cap_gad) + parseFloat(s_cap_non))>0" v-for="cap in capitalOutlay">
                                    <td ></td>
                                     Capital Outlay Particulars
                                    <td colspan="2" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.particulars,'particulars','budget_requirements', cap, cap.comments)
                                            }" :id="cap.id + '_budget_requirements_particulars'">{{ cap.particulars }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.particulars,'particulars','budget_requirements', cap, cap.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Capital Outlay',cap.particulars,'particulars','budget_requirements', cap, cap.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.particulars,'particulars','budget_requirements', cap, cap.comments)">*
                                        </button>
                                    </td>
                                     Capital Outlay Account Code
                                    <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.account_code,'account_code','budget_requirements', cap, cap.comments)
                                            }" :id="cap.id + '_budget_requirements_account_code'">{{ cap.account_code }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.account_code,'account_code','budget_requirements', cap, cap.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Capital Outlay',cap.account_code,'account_code','budget_requirements', cap, cap.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.account_code,'account_code','budget_requirements', cap, cap.comments)">*
                                        </button>
                                    </td>
                                     Capital Outlay GAD Attributed
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.GAD_amount,'GAD_amount','budget_requirements', cap, cap.comments)
                                            }" :id="cap.id + '_budget_requirements_GAD_amount'">{{ format_number_conv(cap.GAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.GAD_amount,'GAD_amount','budget_requirements', cap, cap.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Capital Outlay',cap.GAD_amount,'GAD_amount','budget_requirements', cap, cap.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.GAD_amount,'GAD_amount','budget_requirements', cap, cap.comments)">*
                                        </button>
                                    </td>
                                     Capital Outlay NON-GAD Amount
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.NONGAD_amount,'NONGAD_amount','budget_requirements', cap, cap.comments)
                                            }" :id="cap.id + '_budget_requirements_NONGAD_amount'">{{ format_number_conv(cap.NONGAD_amount,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.NONGAD_amount,'NONGAD_amount','budget_requirements', cap, cap.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Capital Outlay',cap.NONGAD_amount,'NONGAD_amount','budget_requirements', cap, cap.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.NONGAD_amount,'NONGAD_amount','budget_requirements', cap, cap.comments)">*
                                        </button>
                                    </td>
                                    Capital Outlay Total
                                    <td class="text-end" :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.Total,'Total','budget_requirements', cap, cap.comments)
                                            }" :id="cap.id + '_budget_requirements_Total'">{{ format_number_conv(cap.Total,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.Total,'Total','budget_requirements', cap, cap.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Capital Outlay',cap.Total,'Total','budget_requirements', cap, cap.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.Total,'Total','budget_requirements', cap, cap.comments)">*
                                        </button>
                                    </td>
                                     Capital Outlay Source
                                    <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.Source,'Source','budget_requirements', cap, cap.comments)
                                            }" :id="cap.id + '_budget_requirements_Source'">{{ cap.Source }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.Source,'Source','budget_requirements', cap, cap.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements','Capital Outlay',cap.Source,'Source','budget_requirements', cap, cap.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements','Capital Outlay',cap.Source,'Source','budget_requirements', cap, cap.comments)">*
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="(parseFloat(s_cap_gad) + parseFloat(s_cap_non))>0">
                                    <td ></td>
                                    <td colspan="3">SUB-TOTAL (Capital Outlay)</td>
                                    CAPITAL OUTLAY GAD ******************************************************************************************************************--
                                    <td class="text-end" :class="{
                                        'text-danger': has_comment('Budgetary Requirements',
                                        'Capital Outlay GAD -Total',
                                        format_number_conv(s_cap_gad,2,true),
                                        'budgetary_cap_gad', 'revision_plans',
                                        paps, paps.comments)
                                    }">{{ format_number_conv(s_cap_gad,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            'Capital Outlay GAD -Total',
                                            format_number_conv(s_cap_gad,2,true),
                                            'budgetary_cap_gad', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements',
                                            'Capital Outlay GAD -Total',
                                            format_number_conv(s_cap_gad,2,true),
                                            'budgetary_cap_gad', 'revision_plans',
                                            paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            'Capital Outlay GAD -Total',
                                            format_number_conv(s_cap_gad,2,true),
                                            'budgetary_cap_gad', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                    </td>
                                    -- CAPITAL OUTLAY NON-GAD ******************************************************************************************************************--
                                     <td class="text-end" :class="{
                                        'text-danger': has_comment('Budgetary Requirements',
                                        'Capital Outlay Non-GAD -Total',
                                        format_number_conv(s_cap_non,2,true),
                                        'budgetary_cap_non', 'revision_plans',
                                        paps, paps.comments)
                                    }">{{ format_number_conv(s_cap_non,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            'Capital Outlay Non-GAD -Total',
                                            format_number_conv(s_cap_non,2,true),
                                            'budgetary_cap_non', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements',
                                            'Capital Outlay Non-GAD -Total',
                                            format_number_conv(s_cap_non,2,true),
                                            'budgetary_cap_non', 'revision_plans',
                                            paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            'Capital Outlay Non-GAD -Total',
                                            format_number_conv(s_cap_non,2,true),
                                            'budgetary_cap_non', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                    </td>
                                     -- CAPITAL OUTLAY TOTAL ******************************************************************************************************************-
                                    <td class="text-end" :class="{
                                            'text-danger': has_comment('Budgetary Requirements',
                                            'Capital Outlay -Total',
                                            format_number_conv(parseFloat(s_cap_gad) + parseFloat(s_cap_non), 2,true),
                                            'budgetary_cap_total', 'revision_plans',
                                            paps, paps.comments)
                                        }">{{ format_number_conv(parseFloat(s_cap_gad) + parseFloat(s_cap_non), 2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            'Capital Outlay -Total',
                                            format_number_conv(parseFloat(s_cap_gad) + parseFloat(s_cap_non), 2,true),
                                            'budgetary_cap_total', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements',
                                            'Capital Outlay -Total',
                                            format_number_conv(parseFloat(s_cap_gad) + parseFloat(s_cap_non), 2,true),
                                            'budgetary_cap_total', 'revision_plans',
                                            paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            'Capital Outlay -Total',
                                            format_number_conv(parseFloat(s_cap_gad) + parseFloat(s_cap_non), 2,true),
                                            'budgetary_cap_total', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="4">TOTAL</td>
                                    <td class="text-end"
                                        :class="{
                                            'text-danger': has_comment('Budgetary Requirements',
                                            'GAD Grand Total',
                                            format_number_conv(tot_gad,2,true),
                                            'gad_total', 'revision_plans',
                                            paps, paps.comments)
                                        }"
                                        :id="paps.id + '_revision_plans_gad_total'"
                                    >{{  format_number_conv(tot_gad,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            'GAD Grand Total',
                                            format_number_conv(tot_gad,2,true),
                                            'gad_total', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements',
                                            'GAD Grand Total',
                                            format_number_conv(tot_gad,2,true),
                                            'gad_total', 'revision_plans',
                                            paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            'GAD Grand Total',
                                            format_number_conv(tot_gad,2,true),
                                            'gad_total', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                    </td>
                                    <td class="text-end"
                                        :class="{
                                            'text-danger': has_comment('Budgetary Requirements',
                                            'Non-GAD Grand Total',
                                            format_number_conv(tot_non,2,true),
                                            'non_total', 'revision_plans',
                                            paps, paps.comments)
                                        }"
                                        :id="paps.id + '_revision_plans_non_total'"
                                    >{{ format_number_conv(tot_non,2,true) }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            'Non-GAD Grand Total',
                                            format_number_conv(tot_non,2,true),
                                            'non_total', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements',
                                            'Non-GAD Grand Total',
                                            format_number_conv(tot_non,2,true),
                                            'non_total', 'revision_plans',
                                            paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            'Non-GAD Grand Total',
                                            format_number_conv(tot_non,2,true),
                                            'non_total', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                    </td>
                                    <td class="text-end"
                                        :class="{
                                            'text-danger': has_comment('Budgetary Requirements',
                                            'Overall Grand Total',
                                            format_number_conv(grand_total,2,true),
                                            'grand_total', 'revision_plans',
                                            paps, paps.comments)
                                        }"
                                        :id="paps.id + '_revision_plans_grand_total'"
                                    >{{ format_number_conv((parseFloat(s_cap_gad) + parseFloat(s_cap_non) + parseFloat(s_ps_gad)
                                    + parseFloat(s_ps_non) + parseFloat(s_mooe_gad) + parseFloat(s_mooe_non) + parseFloat(s_fe_gad) + parseFloat(s_fe_non))
                                    , 2,true)
                                    }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            'Overall Grand Total',
                                            format_number_conv(grand_total,2,true),
                                            'grand_total', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                        <button v-if="has_comment('Budgetary Requirements',
                                            'Overall Grand Total',
                                            format_number_conv(grand_total,2,true),
                                            'grand_total', 'revision_plans',
                                            paps, paps.comments)" class="superscript-btn"
                                            @click="handleClick('Budgetary Requirements',
                                            'Overall Grand Total',
                                            format_number_conv(grand_total,2,true),
                                            'grand_total', 'revision_plans',
                                            paps, paps.comments)">*
                                        </button>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table> -->
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th colspan="3">Particulars</th>
                                    <th>Account Code</th>
                                    <th>Amount</th>
                                    <th>Source</th>
                                    <!-- <th>Edit</th> -->
                                </tr>
                            </thead>

                            <tbody v-for="(gadGroups, category) in groupedBudget" :key="category">

                                <!-- CATEGORY HEADER -->
                                <tr v-if="hasAnyRows(gadGroups)" class="table-primary">
                                    <td colspan="8" class="fw-bold text-uppercase">
                                        {{ formatCategory(category) }}
                                    </td>
                                </tr>

                                <!-- GAD + NON-GAD GROUPS -->
                                <template v-for="(rows, gadType) in gadGroups" :key="gadType" >

                                    <!-- SUB HEADER (GAD / NON-GAD) -->
                                    <tr v-if="hasRows(rows)" class="table-secondary" >
                                        <td></td>
                                        <td colspan="7" class="fw-bold">
                                            <div class="d-flex justify-content-between align-items-center w-100">
                                                {{ gadType }}

                                            </div>

                                        </td>
                                    </tr>

                                    <!-- DATA ROWS -->
                                     <tr v-if="hasRows(rows)"  v-for="row in rows" :key="row.id">
                                        <td></td>
                                        <td></td>
                                        <!-- PARTICULARS -->
                                        <td
                                            :class="{
                                                'text-danger': has_comment('Budgetary Requirements',
                                                    'Particulars',row.particulars,
                                                    'particulars','budget_requirements', row, row.comments)
                                            }"
                                            :id="row.id + '_budget_requirements_particulars'"
                                        >
                                            {{ row.particulars }}
                                            <button v-if="can_view_comment()" class="superscript-btn"
                                                @click="handleClick('Budgetary Requirements',
                                                    'Particulars',row.particulars,
                                                    'particulars','budget_requirements', row, row.comments)">*
                                            </button>
                                            <button v-if="has_comment('Budgetary Requirements',
                                                    'Particulars',row.particulars,
                                                    'particulars','budget_requirements', row, row.comments)" class="superscript-btn"
                                                @click="handleClick('Budgetary Requirements',
                                                    'Particulars',row.particulars,
                                                    'particulars','budget_requirements', row, row.comments)">*
                                            </button>
                                        </td>
                                        <!-- ACCOUNT CODE -->
                                        <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements',
                                                    'Account Code',row.account_code,
                                                    'account_code','budget_requirements', row, row.comments)
                                            }"
                                            :id="row.id + '_budget_requirements_account_code'"
                                        >
                                            <!-- <textarea
                                                class="form-control transparent-bg "
                                                type="text"
                                                v-model="row.account_code"
                                                @input="setUnsaved(true)"
                                                @change="updateRevisionPlans('budget_requirements', 'account_code', row.id, row.account_code)" disabled>
                                                    {{ row.account_code }}
                                            </textarea> -->
                                            {{ row.account_code }}
                                            <button v-if="can_view_comment()" class="superscript-btn"
                                                @click="handleClick('Budgetary Requirements',
                                                    'Account Code',row.account_code,
                                                    'account_code','budget_requirements', row, row.comments)">*
                                            </button>
                                            <button v-if="has_comment('Budgetary Requirements',
                                                    'Account Code',row.account_code,
                                                    'account_code','budget_requirements', row, row.comments)" class="superscript-btn"
                                                @click="handleClick('Budgetary Requirements',
                                                    'Account Code',row.account_code,
                                                    'account_code','budget_requirements', row, row.comments)">*
                                            </button>
                                        </td>
                                        <!-- AMOUNT -->
                                        <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements',
                                                    'Amount',row.amount,
                                                    'amount','budget_requirements', row, row.comments)
                                            }"
                                            :id="row.id + '_budget_requirements_amount'">
                                            {{ row.amount }}
                                            <button v-if="can_view_comment()" class="superscript-btn"
                                                @click="handleClick('Budgetary Requirements',
                                                    'Amount',row.amount,
                                                    'amount','budget_requirements', row, row.comments)">*
                                            </button>
                                            <button v-if="has_comment('Budgetary Requirements',
                                                    'Amount',row.amount,
                                                    'amount','budget_requirements', row, row.comments)" class="superscript-btn"
                                                @click="handleClick('Budgetary Requirements',
                                                    'Amount',row.amount,
                                                    'amount','budget_requirements', row, row.comments)">*
                                            </button>
                                        </td>
                                        <!-- SOURCE OF FUND -->
                                        <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements',
                                                    'Source',row.source,
                                                    'source','budget_requirements', row, row.comments)
                                            }"
                                            :id="row.id + '_budget_requirements_source'">
                                            <!-- <textarea
                                                class="form-control transparent-bg "
                                                type="text"
                                                v-model="row.source"
                                                @input="setUnsaved(true)"
                                                @change="updateRevisionPlans('budget_requirements', 'source', row.id, row.source)">
                                                    {{ row.source }}
                                            </textarea> -->
                                            {{ row.source }}
                                            <button v-if="can_view_comment()" class="superscript-btn"
                                                @click="handleClick('Budgetary Requirements',
                                                    'Source',row.source,
                                                    'source','budget_requirements', row, row.comments)">*
                                            </button>
                                            <button v-if="has_comment('Budgetary Requirements',
                                                    'Source',row.source,
                                                    'source','budget_requirements', row, row.comments)" class="superscript-btn"
                                                @click="handleClick('Budgetary Requirements',
                                                    'Source',row.source,
                                                    'source','budget_requirements', row, row.comments)">*
                                            </button>
                                        </td>

                                        <!-- EDIT -->
                                        <!-- <td>
                                            <button class="btn btn-primary btn-sm text-white"
                                                @click="showBudgetModal(form.id,gadType,category)">
                                                ✏ Edit
                                            </button>
                                        </td> -->


                                    </tr>

                                    <!-- NO DATA ROW -->
                                    <!-- <tr v-if="rows.length === 0">
                                        <td colspan="8" class="text-center text-muted">
                                            No entries under {{ gadType }} {{ formatCategory(category)  }}
                                        </td>
                                    </tr> -->

                                    <!-- TOTAL ROW -->
                                     <!-- <tfoot> -->
                                    <tr v-if="hasRows(rows)"  class="fw-bold bg-light">
                                        <td></td>
                                        <td colspan="2">TOTAL {{ gadType }}</td>
                                        <td></td>
                                        <td>
                                            ₱ {{ budgetSum(category, gadType).toLocaleString() }}
                                        </td>
                                        <td colspan="3"></td>
                                    </tr>
                                     <!-- </tfoot> -->

                                </template>


                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="4"><h4>TOTAL</h4></td>
                                    <td>₱ {{ overallBudget.toLocaleString() }}</td>
                                    <td colspan="3"></td>
                                </tr>
                            </tfoot>
                            <!-- <tr>
                                    <td colspan="4"><h4>TOTAL</h4></td>
                                    <td>₱ {{ overallBudget.toLocaleString() }}</td>
                                    <td colspan="3"></td>
                                </tr> -->
                        </table>
                        <!-- <table v-if="showBudgetTable()" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th colspan="3">Particular</th>
                                    <th>Account Code</th>
                                    <th>Amount (Php)</th>
                                    <th>Source</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="mooe_gad.length > 0 || mooe_non.length > 0">
                                    <th colspan="3">Maintenance, Operating, and Other Expenses</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
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
                                    <td class="text-end">{{ format_number_conv(dat.amount, 2, true) }}</td>
                                    <td>{{ dat.source }}</td>
                                </tr>
                                <tr v-if="mooe_gad.length > 0">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2">SUB TOTAL (GAD) </th>
                                    <th class="text-end">{{ format_number_conv(s_mooe_gad, 2, true) }}</th>
                                    <td></td>
                                </tr>
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
                                    <td class="text-end">{{ format_number_conv(dat.amount, 2, true) }}</td>
                                    <td>{{ dat.source }}</td>
                                </tr>
                                <tr v-if="mooe_non.length > 0" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2">SUB TOTAL (NON-GAD) </th>
                                    <th class="text-end">{{ format_number_conv(s_mooe_non, 2, true) }}</th>
                                    <td></td>
                                </tr>
                                <tr v-if="mooe_gad.length > 0 || mooe_non.length > 0">
                                    <td></td>
                                    <th colspan="3">SUB TOTAL (MOOE) </th>
                                    <th class="text-end">{{ getSum(s_mooe_gad, s_mooe_non) }}</th>
                                    <td></td>
                                </tr>
                                <tr v-if="cap_gad.length > 0 || cap_non.length > 0">
                                    <th colspan="3">Capital Outlay</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
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
                                    <td class="text-end">{{ format_number_conv(dat.amount, 2, true) }}</td>
                                    <td>{{ dat.source }}</td>
                                </tr>
                                <tr v-if="cap_gad.length > 0" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2">SUB TOTAL (GAD) </th>
                                    <th class="text-end">{{ format_number_conv(s_cap_gad, 2, true) }}</th>
                                    <td></td>
                                </tr>
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
                                    <td class="text-end">{{ format_number_conv(dat.amount, 2, true) }}</td>
                                    <td>{{ dat.source }}</td>
                                </tr>
                                <tr v-if="cap_non.length > 0" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2">SUB TOTAL (NON-GAD) </th>
                                    <th class="text-end">{{ format_number_conv(s_cap_non, 2, true) }}</th>
                                    <td></td>
                                </tr>
                                <tr v-if="cap_gad.length > 0 || cap_non.length > 0">
                                    <td></td>
                                    <th colspan="3">SUB TOTAL (Capital Outlay) </th>
                                    <th class="text-end">{{ getSum(s_cap_gad, s_cap_non) }}</th>
                                    <td></td>
                                </tr>
                                <tr v-if="ps_gad.length > 0 || ps_non.length > 0">
                                    <th colspan="3">Personnel Services</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
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
                                    <td class="text-end">{{ format_number_conv(dat.amount, 2, true) }}</td>
                                    <td>{{ dat.source }}</td>
                                </tr>
                                <tr v-if="ps_gad.length > 0" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2">SUB TOTAL (GAD) </th>
                                    <th class="text-end">{{ format_number_conv(s_ps_gad, 2, true) }}</th>
                                    <td></td>
                                </tr>
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
                                    <td class="text-end">{{ format_number_conv(dat.amount, 2, true) }}</td>
                                    <td>{{ dat.source }}</td>
                                </tr>
                                <tr v-if="ps_non.length > 0" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2">SUB TOTAL (NON-GAD) </th>
                                    <th class="text-end">{{ format_number_conv(s_ps_non, 2, true) }}</th>
                                    <td></td>
                                </tr>
                                <tr v-if="ps_gad.length > 0 || ps_non.length > 0">
                                    <td></td>
                                    <th colspan="3">SUB TOTAL (Personnel Services) </th>
                                    <th class="text-end">{{ getSum(s_ps_gad, s_ps_non) }}</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th colspan="4">GRAND TOTAL</th>
                                    <th class="text-end">{{ getBudgetTotal() }}</th>
                                    <th></th>
                                </tr>
                            </tbody>
                        </table> -->
                        <!-- <div v-else>
                            <span style="color:red; font-weight: bold;">
                                This Project has no budgetary requirements! <br>
                                Click
                                <Link :href="`/budget/${paps.id}`">here</Link> to edit budgetary requirements.
                            </span>
                        </div> -->
                        <br>
                    </div>
                    <!--IMPLEMENTING TEAM v-if="team_members.length > 0 || paps.implementing_team !== null"-->
                    <h3 id='implementing_team'>
                        VII. <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                            ? `/team/${paps.id}/revision/plan/team`:null"
                        :class="{
                            'text-danger': has_comment('Implementing Team','implementing team',paps.rationale,'implementing_team','revision_plans', paps, paps.comments)
                        }"
                        :id="paps.id + '_revision_plans_implementing_team'"
                        >Implementing Team</Link>

                        <button v-if="can_view_comment()" class="superscript-btn"
                            @click="handleClick('Implementing Team','implementing team',paps.implementing_team,'implementing_team','revision_plans', paps, paps.comments)">*
                        </button>
                        <button v-if="has_comment('Implementing Team','implementing team',paps.implementing_team,'implementing_team','revision_plans', paps, paps.comments)" class="superscript-btn"
                            @click="handleClick('Implementing Team','implementing team',paps.implementing_team,'implementing_team','revision_plans', paps, paps.comments)">*
                        </button>
                    </h3>
                    <div align="justify" style="white-space: pre-line">
                        <!-- {{ paps.implementing_team }} -->
                        <div v-html="paps.implementing_team"></div>
                        <!-- <td colspan="6" :class="{
                            'text-danger': has_comment('Title', paps.project_title, paps.project_title, 'project_title', 'revision_plans', paps, paps.comments)
                        }">
                            {{ paps.project_title }}
                            <button v-if="can_view_comment()" class="superscript-btn"
                                @click="handleClick('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)">*
                            </button>
                            <button v-if="has_comment('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)" class="superscript-btn"
                                @click="handleClick('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)">*
                            </button>
                        </td> -->
                    </div>
                    <div v-if="team_members.length > 0">
                        <table table name="tabel" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Position</th>
                                    <th>Employment Status</th>
                                    <!-- <th>Role</th> -->
                                    <th>GAD-related trainings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(team_member, index) in team_members" :key="index">
                                    <td>{{ index+1 }}</td>
                                    <!-- Name -->
                                    <td
                                        :class="{
                                                'text-danger': has_comment('Team Members','Name',team_member.name,'name','team_plans', team_member, team_member.comments)
                                            }"
                                        :id="team_member.id + '_team_plans_name'"
                                    >{{ team_member.name }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Team Plan','Name',team_member.name,'name','team_plans', team_member, team_member.comments)">*
                                        </button>
                                        <button v-if="has_comment('Team Plan','Name',team_member.name,'name','team_plans', team_member, team_member.comments)" class="superscript-btn"
                                            @click="handleClick('Team Plan','Name',team_member.name,'name','team_plans', team_member, team_member.comments)">*
                                        </button>
                                    </td>
                                    <!-- Gender -->
                                     <td>
                                        {{ team_member.gender }}
                                     </td>
                                    <!-- Position -->
                                    <td :id="team_member.id + '_team_plans_position'"
                                        :class="{
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
                                    <!-- Employment Status -->
                                    <td :id="team_member.id + '_team_plans_status'"
                                        :class="{
                                                'text-danger': has_comment('Team Plan','status',team_member.status,'status','team_plans', team_member, team_member.comments)
                                            }">
                                            <span v-if="team_member.status==='Regular'">Permanent</span>
                                            <span v-else>{{ team_member.status }}</span>
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Team Plan','status',team_member.status,'status','team_plans', team_member, team_member.comments)">*
                                        </button>
                                        <button v-if="has_comment('Team Plan','status',team_member.status,'status','team_plans', team_member, team_member.comments)" class="superscript-btn"
                                            @click="handleClick('Team Plan','status',team_member.status,'status','team_plans', team_member, team_member.comments)">*
                                        </button>
                                    </td>
                                    <!-- Competency -->
                                    <!-- <td :class="{
                                                'text-danger': has_comment('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)
                                            }">{{ team_member.competency }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)">*
                                        </button>
                                        <button v-if="has_comment('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)" class="superscript-btn"
                                            @click="handleClick('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)">*
                                        </button>
                                    </td> -->
                                    <!-- <td :class="{
                                                'text-danger': has_comment('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)
                                            }">{{ team_member.role }}
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)">*
                                        </button>
                                        <button v-if="has_comment('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)" class="superscript-btn"
                                            @click="handleClick('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)">*
                                        </button>
                                    </td> -->
                                    <td :class="{
                                                'text-danger': has_comment('Team Plan','with_gad_training',team_member.with_gad_training,'with_gad_training','team_plans', team_member, team_member.comments)
                                            }" :id="team_member.id + '_team_plans_with_gad_training'" >
                                        {{ team_member.with_gad_training === '1' ?  team_member.specify_GAD_training  : 'No' }}
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
                    <h3 id="partnership_sustainability" v-if="paps.partnership !== null">
                        VIII. <Link>Partnership and Sustainability</Link>
                    </h3>
                    <div align="justify" style="white-space: pre-line">
                        <div v-html="paps.partnership"></div>
                    </div>
                    <br>
                    <br>
                    <!--MONITORING & EVALUATION-->
                    <h3 id="monitoring_evaluation" v-if="monitors.length > 0 || paps.monitoring !== null">
                        IX. <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                            ? `/EvaluationMechanismTool/${paps.id}`:null">Monitoring and Evaluation</Link>
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
                                    }" :id="monitor.id + '_monitoring_and_evaluations_evaluation_mechanism_tool'" >
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
                                    }"
                                    :id="monitor.id + '_monitoring_and_evaluations_opr'"
                                    >{{ monitor.opr }}
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
                                    }"
                                    :id="monitor.id + '_monitoring_and_evaluations_target_beneficiaries'"
                                    >
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
                                    }"
                                    :id="monitor.id + '_monitoring_and_evaluations_gad'"
                                    >{{ monitor.gad }}
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
                    <h3 id="risk_management" v-if="risks.length > 0 || paps.risk_management !== null">
                        X. <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                            ? `/RiskManagement/${paps.id}`:null">Risk Management</Link>
                    </h3>
                    <div align="justify" style="white-space: pre-line">
                        <div v-html="paps.risk_management"></div>
                    </div>

                    <div v-if="risks.length > 0">
                        <table table name="tabel" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th>Prospective Possible Risks</th>
                                    <th>Preventive Measures</th>
                                    <th>Mechanisms to monitor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="risk in risks">
                                    <!-- Risk Management -Possible Risks -->
                                    <td :class="{
                                        'text-danger': has_comment('Risk Management','Possible Risks',risk.possible_risk,'possible_risk','risk_manangements', risk, risk.comments)
                                    }"
                                    :id="risk.id + '_risk_manangements_possible_risk'"
                                    ><span v-html="risk.possible_risk"></span>
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
                                    }"
                                    :id="risk.id + '_risk_manangements_person_affected'"
                                    ><span v-html="risk.person_affected"></span>
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
                                    }"
                                    :id="risk.id + '_risk_manangements_management'"
                                    ><div v-html="risk.management"></div>
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
                    <!--SIGNATORIES class="signatory-card"-->
                    <div id="signatories" class="signatory-grid">
                        <div v-for="(signatory, index) in signatories" :key="index"
                            :class="['signatory-card', (signatory.acted !== 'Prepared' && signatory.acted !== 'Reviewed') ? 'signatory-card-full' : 'signatory-card']">

                            <div v-if="signatory.acted !== 'Prepared' && signatory.acted !== 'Reviewed'"></div>
                            <strong>{{ signatory.acted }} by: </strong><br><br>
                            <span class="text-decoration-underline"><b>{{ signatory.name
                                                                    }}</b></span>
                                                                    <br>{{ signatory.position }}<br><br><br><br>
                        </div>
                    </div>

                    <!-- <div v-if="paps.type === 'p'">
                        <table class="table table-borderless no-border-table">
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
                    </div> -->


                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="sticky-comments" v-if="!showComments">
                    <button class="close-btn text-danger" @click="toggleShowCommentPanel">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                        </svg>
                    </button>
            </div>
            <div class="bgc-white p-20 bd sticky-comments" v-if="showComments">
                    <div class="d-flex justify-content-end">
                        <button class="close-btn text-danger" @click="toggleShowCommentPanel">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                            </svg>
                        </button>
                    </div>

                    <div class="tab">
                        <button style="color: red;" @click="openTab('Comments')">Comments</button>
                        <button style="color: red;" @click="openTab('Navigation')">Navigation</button>
                    </div>

                    <div v-if="open_tab==='Comments'">
                        <div class="comments-header">
                            <h4>COMMENTS ...</h4>

                        </div>

                        <div class="scrollable-text">
                            <ul class="list-unstyled">
                                <li v-for="(comment, index) in all_comments" :key="index" class="mb-2">

                                    <span
                                        class="clickable-comment"
                                        @click="scrollToSection(
                                            ['beneficiaries', 'objective', 'rationale'].includes(comment.column_name)
                                                ? comment.column_name
                                                    : (
                                                    ['expected_revised_outputs', 'expected_revised_outcomes'].includes(comment.table_name)
                                                        ? `${comment.table_row_id}_${comment.table_name}_${comment.column_name}`
                                                        : `${comment.table_row_id}_${comment.table_name}_${comment.column_name}`
                                                )

                                        )"
                                        :class="comment.comment_status == 1 ? 'comment-approved' : 'comment-rejected'"
                                    >
                                        {{ comment.comment }}
                                        {{
                                            ['beneficiaries', 'objective', 'rationale'].includes(comment.column_name)
                                                ? comment.column_name
                                                    : (
                                                    ['expected_revised_outputs', 'expected_revised_outcomes'].includes(comment.table_name)
                                                        ? `${comment.table_row_id}_${comment.table_name}_${comment.column_name}`
                                                        : `${comment.table_row_id}_${comment.table_name}_${comment.column_name}`
                                                )
                                        }}
                                    </span>

                                    <hr>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div v-if="open_tab==='Navigation'">
                        <div class="comments-header">
                            <h4>NAVIGATION ...</h4>

                        </div>
                        <div class="scrollable-text">
                            <ul class="list-unstyled">
                                <li class="mb-2" style="color: blue">
                                    <span class="clickable-comment"  @click="scrollToSection('revision_plans')">
                                        I.      Title
                                    </span>
                                </li>
                            </ul>
                            <ul class="list-unstyled">
                                <li class="mb-2" style="color: blue">
                                    <span class="clickable-comment"  @click="scrollToSection('rationale')">
                                        II.     Rationale
                                    </span>
                                </li>
                            </ul>
                            <ul class="list-unstyled">
                                <li class="mb-2" style="color: blue">
                                    <span class="clickable-comment"  @click="scrollToSection('objective')">
                                        III.    Objectives
                                    </span>
                                </li>
                            </ul>
                            <ul class="list-unstyled">
                                <li class="mb-2" style="color: blue">
                                    <span class="clickable-comment"  @click="scrollToSection('beneficiaries')">
                                        IV.     Target Beneficiaries
                                    </span>
                                </li>
                            </ul>
                            <ul class="list-unstyled">
                                <li class="mb-2" style="color: blue">
                                    <span class="clickable-comment"  @click="scrollToSection('implementation_workplan')">
                                        V.      Implementation Schedule/Workplan
                                    </span>
                                </li>
                            </ul>
                            <ul class="list-unstyled">
                                <li class="mb-2" style="color: blue">
                                    <span class="clickable-comment"  @click="scrollToSection('budgetary_requirements')">
                                        VI.     Estimated Cost/Budgetary Requirements
                                    </span>
                                </li>
                            </ul>
                            <ul class="list-unstyled">
                                <li class="mb-2" style="color: blue">
                                    <span class="clickable-comment"  @click="scrollToSection('implementing_team')">
                                        VII.    Implementing Team
                                    </span>
                                </li>
                            </ul>
                            <!-- partnership_sustainability -->
                            <ul class="list-unstyled">
                                <li class="mb-2" style="color: blue">
                                    <span class="clickable-comment"  @click="scrollToSection('partnership_sustainability')">
                                        VIII.   Partnership and Sustainability
                                    </span>
                                </li>
                            </ul>

                            <ul class="list-unstyled">
                                <li class="mb-2" style="color: blue">
                                    <span class="clickable-comment"  @click="scrollToSection('monitoring_evaluation')">
                                        XI.     Monitoring and Evaluation
                                    </span>
                                </li>
                            </ul>
                            <ul class="list-unstyled">
                                <li class="mb-2" style="color: blue">
                                    <span class="clickable-comment"  @click="scrollToSection('risk_management')">
                                        X.      Risk Management
                                    </span>
                                </li>
                            </ul>
                            <ul class="list-unstyled">
                                <li class="mb-2" style="color: blue">
                                    <span class="clickable-comment"  @click="scrollToSection('signatories')">
                                        XI.     Signatories
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

            </div>
        </div>
        <CommentModal v-if="show_comment_modal" @close-modal-event="closeCommentModal" title="COMMENTS">
            <div class="d-flex justify-content-center">
                <!-- {{ comment_reference_object }} -->
            </div>
            <div>
                <span v-if="auth.user.department_code==='04'">
                    <div>
                        <textarea class="form-control" rows="5" v-model="comment"
                            placeholder="Write your comment here..."></textarea>
                    </div>
                    <div>
                        <button class="btn btn-primary mt-2 text-white" @click="saveComment()">
                            Submit Comment
                        </button>
                    </div>
                </span>

                <div><b>Section: </b>{{ comment_section }}</div>
                <div><b>Subtitle:</b> <span v-html="comment_subtitle"></span></div>
                <div><b>Data:</b> <span v-html="comment_data"></span></div>
                <div><b>Column:</b> {{ comment_column }}
                    <span v-if="comment_column=='Person Affected'">Preventive Measures</span>
                    <span v-else-if="comment_column=='Management'">Mechanisms to monitor</span>
                    <span v-else>{{ comment_colun }}</span>
                </div>
                <div><b>Table:</b> {{ comment_table }}</div>
                <!-- <div>Reference Object: {{ comment_reference_object.id }}</div> -->

                <div class="col-9">
                    <table class="table table-hover table-bordered border-dark">
                        <thead>
                            <tr>
                                <th class="bg-secondary text-white">Comment</th>
                                <th class="bg-secondary text-white">Status&nbsp;&nbsp;</th>
                                <th class="bg-secondary text-white" v-if="auth.user.department_code==='04'">Actions&nbsp;&nbsp;</th>
                                <!-- <th class="bg-secondary text-white" v-if="auth.user.department_code==='04'">Actions&nbsp;&nbsp;</th> -->
                                <!-- <th class="bg-secondary text-white">Comment by&nbsp;&nbsp;</th> -->

                                <th class="bg-secondary text-white">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(comment,index) in comments">
                                <td>
                                    <h6 v-if="comment.user">{{ comment.user.FullName }}&nbsp;commented:&nbsp;&nbsp;</h6>
                                    <h5 class="bg-white p-3 rounded border"><i>{{ comment.comment}}</i></h5>
                                    <br>
                                    <div v-html="comment.reply"></div>
                                    <button class="btn btn-link p-0" v-if="comment.show_comment_box==false" @click="showCommentBox(index)">reply</button>
                                    <textarea class="form-control"
                                        type="text"
                                        v-if="comment.show_comment_box"
                                        v-model="reply_concat"
                                    >
                                    </textarea>
                                    <button :disabled="!reply_concat || reply_concat.trim() === ''" class="btn btn-primary text-white" v-if="comment.show_comment_box" @click="updateComment(comment.id, comment, index)" >Send</button>
                                    <button class="btn btn-danger text-white" v-if="comment.show_comment_box" @click="showCommentBox(index)">Cancel</button>
                                </td>
                                <td :style="{ backgroundColor: comment.comment_status === '0' ? '#fecaca' : '#bbf7d0',
                                    color: comment.comment_status === '0' ? '#991b1b' : '#065f46' }" class="px-2 py-1 rounded">
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
                                <!-- <td>
                                    <span v-if="comment.user">{{ comment.user.FullName }}</span>
                                    <span v-else>Not recorded</span>
                                </td> -->

                                <td>{{ formatDate(comment.created_at) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <br>
        </CommentModal>
        <div class="d-flex justify-content-center">

        </div>
        <!-- {{paps}} -->
        <!-- {{ department_code_project }}
        {{ department_code_user }} -->
        <!-- {{ auth.user }} -->
        <!-- {{ auth.user }}
        {{ paps.is_strategy_based }} -->
    </div> <!--Sa class="row gap-10" ni-->
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
        all_comments: Object,
        team_members: Object,
        monitors: Object,
        risks: Object,
        sig_rev: Object,
        sig_prep: Object,
        sig_app: Object,
        signatories: Object,
        data: Object,
        imp_amount: Number,
        budget_requirements: Object,
        department_code_project: String,
        department_code_user: String,
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

        src: Object,

    },
    computed: {
        groupedBudget() {
            const result = {
                maintenanceOperating: { GAD: [], "NON-GAD": [] },
                personnelServices: { GAD: [], "NON-GAD": [] },
                financialExpenses: { GAD: [], "NON-GAD": [] },
                capitalOutlay: { GAD: [], "NON-GAD": [] },
            };

            const map = {
                'Maintenance, Operating, and Other Expenses': 'maintenanceOperating',
                'Personnel Services': 'personnelServices',
                'Financial Expenses': 'financialExpenses',
                'Capital Outlay': 'capitalOutlay',
            };

            this.budget_requirements.forEach(item => {
            const catKey = map[item.category];
            if (!catKey) return;
                const gadKey = item.category_gad.toUpperCase() === 'GAD' ? 'GAD' : 'NON-GAD';
                result[catKey][gadKey].push(item);
            });

            return result;
        },
        budgetSum() {
            return (category, gadType) => {
                const group = this.groupedBudget[category]?.[gadType];
                if (!group) return 0;

                return group.reduce((total, item) => {
                    const amount = parseFloat(item.amount || 0);
                    return total + (isNaN(amount) ? 0 : amount);
                }, 0);
            };
        },
        overallBudget() {
            let total = 0;

            for (const category in this.groupedBudget) {
                const gadGroups = this.groupedBudget[category];

                for (const gadType in gadGroups) {
                    const rows = gadGroups[gadType];

                    rows.forEach(item => {
                        const amount = parseFloat(item.amount || 0);
                        if (!isNaN(amount)) {
                            total += amount;
                        }
                    });
                }
            }

            return total;
        },
    },

    data() {
        return {
            unsaved: false,
            show_comment_modal: false,
            comment: '',
            comment_section: '',
            comment_subtitle: '',
            comment_data: '',
            comment_column: '',
            comment_table: '',
            comment_reference_object: [],
            comments: [],

            reply_concat: "",
            is_replying: false,
            reply_index: -1,
            v_imp_fe: 0,
            v_imp_co: 0,
            v_imp_mooe: 0,
            v_imp_ps: 0,
            has: 0,
            tot_gad: 0,
            tot_non:0,
            grand_total: 0,
            showComments: false,
            open_tab: 'Navigation',
        }
    },
    mounted() {
        this.isOne();
        this.calculateTotals(this.paps.is_strategy_based);
        if (!sessionStorage.getItem('reloaded')) {
            sessionStorage.setItem('reloaded', 'true');
            window.location.reload();
        } else {
            sessionStorage.removeItem('reloaded');
        }
        window.addEventListener('beforeunload', this.handleBeforeUnload);
        this.tot_gad = parseFloat(this.s_cap_gad) + parseFloat(this.s_mooe_gad) + parseFloat(this.s_ps_gad) + parseFloat(this.s_fe_gad);
        this.tot_non = parseFloat(this.s_cap_non) + parseFloat(this.s_mooe_non) + parseFloat(this.s_ps_non) + parseFloat(this.s_fe_non);
        this.grand_total = this.tot_gad + this.tot_non;
    },

    beforeUnmount() {
        window.removeEventListener('beforeunload', this.handleBeforeUnload);
    },
    watch: {},
    methods: {
        openTab(tab_name){
            this.open_tab=tab_name
        },
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

            if(this.comment_table==='expected_revised_outcomes'){
                table_row_id_l = this.comment_reference_object.id
            }
            //alert(table_row_id_l)
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
            let actionText = {
                delete: "delete this comment",
                reset: "reset the status of this comment to unresolved",
                resolve: "mark this comment as resolved"
            };

            if (!confirm(`Are you sure you want to ${actionText[type]}?`)) {
                return; // User cancelled
            }
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

        async updateComment(id, comment, index){
            // const payload = {
            //         id: id,
            //         // strategy_id: this.form.localData[strategyIndex].id,
            //         reply: reply,
            //         type: "update",
            //     };

            // Clear existing timeout to prevent multiple calls
            // clearTimeout(this.timeouts[`activity_${strategyIndex}_${activityIndex}`]);
            var myurl = "/revision-plan-comments/"+id;
            if (!this.reply_concat.trim()) {
                return; // Don't send empty reply
            }
            try {
                    this.$inertia.patch(myurl, {
                        params: {
                            reply: this.reply_concat,
                            id: id
                        }
                    }, {
                        preserveScroll: true,
                        onSuccess: () => {
                            // $uname . ' replied: ' . $reply . '<br>';
                            var comment_init ="";
                            if(this.comments[index].reply){
                                comment_init = this.comments[index].reply;
                            }
                            this.comments[index].reply = comment_init +" <b>"+this.auth.user.FullName+"</b> replied: <i>"
                                + this.reply_concat+"</i> <br><br>";
                            this.comments[index].show_comment_box = false; // Hide the comment box after replying
                            this.reply_concat = ""; // Clear the reply input after saving
                            this.is_replying = false; // Reset the replying state
                        }
                    });
                    // console.log(payload);
                    this.unsaved = false; // Reset unsaved flag after successful save
                } catch (error) {
                    console.error('Error updating comment:', error);
                }
        },
        // async saveComment(payload) {
        //     // alert("naabiot");
        //     try {
        //         const response = await axios.post(`/activities-project/r/create`, payload);
        //         console.log(response.data);
        //         // this.refreshData();
        //     } catch (error) {
        //         console.error('Error creating activity:', error);
        //     }
        // },
        setUnsaved(status){
            this.unsaved = status
        },
        showCommentBox(index) {
            // Toggle the show_comment_box property for the comment at the given index
            if(this.is_replying==false || this.reply_index == index) {
                this.comments[index].show_comment_box = !this.comments[index].show_comment_box;
                this.reply_index = index; // Set the reply index to the current comment
                this.reply_concat = ""; // Clear the reply input when showing the comment box
                this.is_replying = !this.is_replying; // Set replying state to true
            }

        },
        toggleShowCommentPanel() {
            this.showComments = !this.showComments;
        },
        /*scrollToSection(target) {
            // const el = document.getElementById(target);
            // alert(target);
            // if (el) {
            //     el.scrollIntoView({
            //         behavior: "smooth",
            //         block: "start"
            //     });
            // }
            const el = document.getElementById(target);
            if (!el) return;

            const navbarHeight = 90; // adjust to your real navbar height

            const topPos = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: topPos,
                behavior: "smooth"
            });
        }*/
       scrollToSection(target) {
            const el = document.getElementById(target);
            if (!el) return;
            // alert(target);
            const navbarHeight = 90;
            const targetPos = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPos,
                behavior: "smooth"
            });

            // Highlight effect
            el.classList.add("highlight-target");
            setTimeout(() => el.classList.remove("highlight-target"), 2000);
        },

        //BUDGETARY
        formatCategory(key) {
            const map = {
                maintenanceOperating: 'Maintenance, Operating, and Other Expenses',
                personnelServices: 'Personnel Services',
                financialExpenses: 'Financial Expenses',
                capitalOutlay: 'Capital Outlay'
            };
            return map[key] || key;
        },
        hasRows(rows) {
            return rows && rows.length > 0;
        },

        hasAnyRows(gadGroupsForCategory) {
            return Object.values(gadGroupsForCategory).some(r => r.length > 0);
        }

    }
}
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
    0% { background-color: #c1fb3a; }
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
</style>
