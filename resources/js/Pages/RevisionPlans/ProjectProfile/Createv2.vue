<template>
    <Head>
        <title>Edit Project Profile</title>
    </Head>
    <div class="relative row gap-20 masonry pos-r">
        <h4>v2</h4>
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }}
                <span v-if="editData.type === 'p'">Profile</span>
                <span v-if="editData.type === 'd'">Design</span>
                <span v-if="editData.type === 'sip'">Profile (SIP)</span>
            </h3>
            <Link :href="`/revision/0?source=direct`" v-if="source=='direct'">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
            </Link>
            <Link :href="`/revision/${idpaps}`" v-else>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
            </Link>
        </div>
        <!-- {{ form }}
        {{ selPaps }} -->
        <!-- {{editData}} -->
        <div class="col-md-12">
                <input type="hidden" required>
                <div class="d-none">
                    <label for="">ID</label>
                    <input type="text" v-model="form.id" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.id">{{ form.errors.idooe }}</div>
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
                        <Link>{{ office.office }}</Link>
                    </h3>
                </div>
                <div class="d-flex justify-content-center ">
                    <h4 class="fw-bold ">
                        <div v-if="editData.type === 'p'">PROJECT PROFILE</div>
                        <div v-else>PROJECT DESIGN</div>
                    </h4>
                </div>
                <div class="bgc-white p-20 bd">
                    <section id="revision_plans">
                        <h3>I.&nbsp;&nbsp;&nbsp;
                            <Link >Title</Link>
                        </h3>
                    </section>
                    <!-- I. TITLE************************************************************* -->
                    <table name="tabel" class="table table-sm table-borderless table-hover" style="border-color: #000; border-width: 2px;">
                        <tbody>
                            <!--TITLE*************************************************************************************************************************-->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Title
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',form.project_title,form.project_title,'project_title','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',form.project_title,form.project_title,'project_title','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',form.project_title,form.project_title,'project_title','revision_plans', paps, paps.comments)">*
                                    </button>
                                </th>
                                <td colspan="6"
                                    :class="{'text-danger': has_comment('Title', form.project_title, form.project_title, 'project_title', 'revision_plans', paps, paps.comments)}"
                                    :id="paps.id+'_revision_plans_project_title'"
                                >
                                    <textarea
                                        class="form-control transparent-bg "
                                        v-model="form.project_title"
                                        type="text"
                                        @input="setUnsaved(true)"
                                        @change="updateRevisionPlans('revision_plans', 'project_title', form.id, form.project_title)">
                                            {{ form.project_title }}
                                    </textarea>
                                </td>
                            </tr>
                            <!--PROJECT LOCATION*************************************************************************************************************************-->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Project Location
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.project_location,paps.project_location,'project_location','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.project_location,paps.project_location,'project_location','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.project_location,paps.project_location,'project_location','revision_plans', paps, paps.comments)">*
                                    </button>
                                </th>
                                <td colspan="6" :class="{
                                    'text-danger': has_comment('Title',paps.project_location,paps.project_location,'project_location','revision_plans', paps, paps.comments)
                                }" :id="paps.id+'_revision_plans_project_location'">
                                     <textarea
                                        class="form-control transparent-bg "
                                        v-model="form.project_location"
                                        type="text"
                                        @input="setUnsaved(true)"
                                        @change="updateRevisionPlans('revision_plans', 'project_location', form.id, form.project_location)">
                                            {{ form.project_location }}
                                    </textarea>

                                </td>
                            </tr>
                            <!--LIST OF LGUs Covered*************************************************************************************************************************-->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">List of LGUs Covered
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.list_of_lgu_covered,paps.list_of_lgu_covered,'list_of_lgu_covered','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.list_of_lgu_covered,paps.list_of_lgu_covered,'list_of_lgu_covered','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.list_of_lgu_covered,paps.list_of_lgu_covered,'list_of_lgu_covered','revision_plans', paps, paps.comments)">*
                                    </button>
                                </th>
                                <td colspan="6" :class="{
                                    'text-danger': has_comment('Title',paps.list_of_lgu_covered,paps.list_of_lgu_covered,'list_of_lgu_covered','revision_plans', paps, paps.comments)
                                }" :id="paps.id+'_revision_plans_list_of_lgu_covered'">
                                     <textarea
                                        class="form-control transparent-bg "
                                        v-model="form.list_of_lgu_covered"
                                        type="text"
                                        @input="setUnsaved(true)"
                                        @change="updateRevisionPlans('revision_plans', 'list_of_lgu_covered', form.id, form.list_of_lgu_covered)">
                                            {{ form.list_of_lgu_covered }}
                                    </textarea>

                                </td>
                            </tr>
                            <!--IMPLEMENTATION SCHEDULE*************************************************************************************************************************-->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Implementation Schedule</th>
                                 <th colspan="1">Start
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.date_start,paps.date_start,'date_start','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.date_start,paps.date_start,'date_start','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.date_start,paps.date_start,'date_start','revision_plans', paps, paps.comments)">*
                                    </button>
                                </th>
                                <td colspan="2" :id="paps.id+'_revision_plans_date_start'"
                                :class="{
                                    'text-danger': has_comment('Title',paps.date_start,paps.date_start,'date_start','revision_plans', paps, paps.comments)
                                }">
                                    <input class="form-control" type="date" v-model="form.date_start"
                                    @change="updateRevisionPlans('revision_plans', 'date_start', form.id, form.date_start)"/>
                                </td>
                                <th colspan="1">
                                    End
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.date_end,paps.date_end,'date_end','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.date_end,paps.date_end,'date_end','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.date_end,paps.date_end,'date_end','revision_plans', paps, paps.comments)">*
                                    </button>
                                </th>
                                <td colspan="2" :id="paps.id+'_revision_plans_date_end'"
                                :class="{
                                    'text-danger': has_comment('Title',paps.date_end,paps.date_end,'date_end','revision_plans', paps, paps.comments)
                                }">
                                    <input
                                        class="form-control" type="date" v-model="form.date_end"
                                        @change="updateRevisionPlans('revision_plans', 'date_end', form.id, form.date_end)"/>

                                </td>
                            </tr>
                            <!--INTENDED BENEFICIARIES******************************************************************************************************-->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Intended Beneficiaries</th>
                                <th colspan="1">
                                    Male
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.beneficiary_male,paps.beneficiary_male,'beneficiary_male','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.beneficiary_male,paps.beneficiary_male,'beneficiary_male','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.beneficiary_male,paps.beneficiary_male,'beneficiary_male','revision_plans', paps, paps.comments)">*
                                    </button>
                                </th>
                                <td colspan="1" :id="paps.id+'_revision_plans_beneficiary_male'" :class="{
                                    'text-danger': has_comment('Title',paps.beneficiary_male,paps.beneficiary_male,'beneficiary_male','revision_plans', paps, paps.comments)
                                }">

                                    <textarea
                                        class="form-control transparent-bg "
                                        v-model="form.beneficiary_male"
                                        type="text"
                                        @input="setUnsaved(true)"
                                        @change="updateRevisionPlans('revision_plans', 'beneficiary_male', form.id, form.beneficiary_male)">
                                            {{ form.beneficiary_male }}
                                    </textarea>

                                </td>
                                <th colspan="1">Female
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.beneficiary_female,paps.beneficiary_female,'beneficiary_female','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.beneficiary_female,paps.beneficiary_female,'beneficiary_female','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.beneficiary_female,paps.beneficiary_female,'beneficiary_female','revision_plans', paps, paps.comments)">*
                                    </button>
                                </th>
                                <td colspan="1" :id="paps.id+'_revision_plans_beneficiary_female'" :class="{
                                    'text-danger': has_comment('Title',paps.beneficiary_female,paps.beneficiary_female,'beneficiary_female','revision_plans', paps, paps.comments)
                                }">
                                    <textarea
                                        class="form-control transparent-bg "
                                        v-model="form.beneficiary_female"
                                        type="text"
                                        @input="setUnsaved(true)"
                                        @change="updateRevisionPlans('revision_plans', 'beneficiary_female', form.id, form.beneficiary_female)">
                                            {{ form.beneficiary_female }}
                                    </textarea>
                                </td>
                                <th colspan="1">Total</th>
                                <td colspan="1" :id="paps.id+'_revision_plans_beneficiary_total'" :class="{
                                    'text-danger': has_comment('Title',format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),'beneficiary_total','revision_plans', paps, paps.comments)
                                }">
                                    {{ format_number_conv((parseFloat(form.beneficiary_male) + parseFloat(form.beneficiary_female)), 0, true) }}
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),'beneficiary_total','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),'beneficiary_total','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),format_number_conv((paps.beneficiary_male + paps.beneficiary_female), 0, true),'beneficiary_total','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                            </tr>
                            <!--BASELINE DISAGGREGATED DATA******************************************************************************************************-->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Baseline Disaggregated Data</th>
                                <th colspan="1">Male
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.baseline_male,paps.baseline_male,'baseline_male','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.baseline_male,paps.baseline_male,'baseline_male','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.baseline_male,paps.baseline_male,'baseline_male','revision_plans', paps, paps.comments)">*
                                    </button>
                                </th>
                                <td colspan="1" :id="paps.id+'_revision_plans_baseline_male'" :class="{
                                    'text-danger': has_comment('Title',paps.baseline_male,paps.baseline_male,'baseline_male','revision_plans', paps, paps.comments)
                                }">
                                    <textarea
                                        class="form-control transparent-bg "
                                        v-model="form.baseline_male"
                                        type="text"
                                        @input="setUnsaved(true)"
                                        @change="updateRevisionPlans('revision_plans', 'baseline_male', form.id, form.baseline_male)">
                                            {{ form.baseline_male }}
                                    </textarea>

                                </td>
                                <th colspan="1">Female
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.baseline_female,paps.baseline_female,'baseline_female','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.baseline_female,paps.baseline_female,'baseline_female','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.baseline_female,paps.baseline_female,'baseline_female','revision_plans', paps, paps.comments)">*
                                    </button>
                                </th>
                                <td colspan="1" :id="paps.id+'_revision_plans_baseline_female'" :class="{
                                    'text-danger': has_comment('Title',paps.baseline_female,paps.baseline_female,'baseline_female','revision_plans', paps, paps.comments)
                                }">
                                    <textarea
                                        class="form-control transparent-bg "
                                        v-model="form.baseline_female"
                                        type="text"
                                        @input="setUnsaved(true)"
                                        @change="updateRevisionPlans('revision_plans', 'baseline_female', form.id, form.baseline_female)">
                                            {{ form.baseline_female }}
                                    </textarea>

                                </td>
                                <th colspan="1">Data Source
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.data_source,paps.data_source,'data_source','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.data_source,paps.data_source,'data_source','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.data_source,paps.data_source,'data_source','revision_plans', paps, paps.comments)">*
                                    </button>
                                </th>
                                <td colspan="1" :id="paps.id+'_revision_plans_data_source'"  :class="{
                                    'text-danger': has_comment('Title',paps.data_source,paps.data_source,'data_source','revision_plans', paps, paps.comments)
                                }">
                                    <textarea
                                        class="form-control transparent-bg "
                                        v-model="form.data_source"
                                        type="text"
                                        @input="setUnsaved(true)"
                                        @change="updateRevisionPlans('revision_plans', 'data_source', form.id, form.data_source)">
                                            {{ form.data_source }}
                                    </textarea>
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
                            <!--LIST OF LGUs Covered*************************************************************************************************************************-->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">List of LGUs Covered
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title',paps.list_of_lgu_covered,paps.list_of_lgu_covered,'list_of_lgu_covered','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title',paps.list_of_lgu_covered,paps.list_of_lgu_covered,'list_of_lgu_covered','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title',paps.list_of_lgu_covered,paps.list_of_lgu_covered,'list_of_lgu_covered','revision_plans', paps, paps.comments)">*
                                    </button>
                                </th>
                                <td colspan="6" :class="{
                                    'text-danger': has_comment('Title',paps.list_of_lgu_covered,paps.list_of_lgu_covered,'list_of_lgu_covered','revision_plans', paps, paps.comments)
                                }" :id="paps.id+'_revision_plans_list_of_lgu_covered'">
                                     <textarea
                                        class="form-control transparent-bg "
                                        v-model="form.list_of_lgu_covered"
                                        type="text"
                                        @input="setUnsaved(true)"
                                        @change="updateRevisionPlans('revision_plans', 'list_of_lgu_covered', form.id, form.list_of_lgu_covered)">
                                            {{ form.list_of_lgu_covered }}
                                    </textarea>

                                </td>
                            </tr>
                            <!--PROJECT COST*******************************************************************************************************************-->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">Cost of Program</th>
                                <th colspan="1">Amount (Php)</th>
                                <td colspan="2" class="text-end"  :id="paps.id+'_revision_plans_amount'" :class="{
                                    'text-danger': has_comment('Title','Amount',imp_amount,'amount','revision_plans', paps, paps.comments)
                                }">
                                    <!-- {{ format_number_conv(imp_amount, 2, true) }} -->
                                      ₱ {{ overallBudget.toLocaleString() }}
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
                                }">
                                <!-- {{ format_number_conv((imp_amount * (paps.hgdg_score/20)), 2, true) }} -->
                                    <span v-if="parseFloat(paps.hgdg_score)>4">
                                        {{ format_number_conv((overallBudget * (paps.hgdg_score/20)), 2, true) }}
                                        <!-- {{ format_number_conv(getGadAttributedAmount(overallBudget, paps.hgdg_score), 2, true) }} -->
                                    </span>
                                    <span v-else>0.00</span>
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title','GAD Attributed Amount',format_number_conv((imp_amount * (paps.hgdg_score/20)), 2, true),'attributed_amount','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title','GAD Attributed Amount',format_number_conv((imp_amount * (paps.hgdg_score/20)), 2, true),'attributed_amount','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title','GAD Attributed Amount',format_number_conv((imp_amount * (paps.hgdg_score/20)), 2, true),'attributed_amount','revision_plans', paps, paps.comments)">*
                                    </button>
                                </td>
                            </tr>
                            <!--HGDG*************************************************************************************************************-->
                            <tr>
                                <th class="bg-secondary text-white" colspan="1">
                                    <span v-if="paps.checklist">
                                        <span :class="{
                                            'text-danger': has_comment('Title','HGDG Checklist',paps.checklist.box_number+' '+paps.checklist.sector,'HGDG Checklist','revision_plans', paps, paps.comments)
                                        }">
                                            HGDG Checklist
                                            <button v-if="can_view_comment()" class="superscript-btn"
                                                @click="handleClick('Title','HGDG Checklist',paps.checklist.box_number+' '+paps.checklist.sector,'HGDG Checklist','revision_plans', paps, paps.comments)">*
                                            </button>
                                            <button v-if="has_comment('Title','HGDG Checklist',paps.checklist.box_number+' '+paps.checklist.sector,'HGDG Checklist','revision_plans', paps, paps.comments)" class="superscript-btn"
                                                @click="handleClick('Title','HGDG Checklist',paps.checklist.box_number+' '+paps.checklist.sector,'HGDG Checklist','revision_plans', paps, paps.comments)">*
                                            </button>
                                        </span>
                                    </span>
                                    <span v-else>
                                        HGDG Checklist (No Checklist selected)
                                    </span>
                                </th>
                                <td colspan="3" :id="paps.id+'_revision_plans_HGDG Checklist'">
                                    <select type="number" v-model="form.checklist_id" class="form-control" autocomplete="chrome-off"
                                        @change="updateRevisionPlans('revision_plans', 'checklist_id', form.id, form.checklist_id)"
                                    >
                                        <option v-for="hgdg in hgdgs" :value="hgdg.id">
                                            {{ hgdg.box_number }}. {{ hgdg.sector }}
                                        </option>
                                    </select>
                                </td>
                                <th class="bg-secondary text-white" colspan="1">
                                    <Link :href="`/HGDGScore/${paps.id}`" style="color:white">HGDG Score </Link>
                                     <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Title','HGDG Score',paps.hgdg_score,'hgdg_score','revision_plans', paps, paps.comments)">*
                                    </button>
                                    <button v-if="has_comment('Title','HGDG Score',paps.hgdg_score,'hgdg_score','revision_plans', paps, paps.comments)" class="superscript-btn"
                                        @click="handleClick('Title','HGDG Score',paps.hgdg_score,'hgdg_score','revision_plans', paps, paps.comments)">*
                                    </button>
                                </th>
                                <td colspan="2" :id="paps.id+'_revision_plans_hgdg_score'" :class="{
                                    'text-danger': has_comment('Title','HGDG Score',paps.hgdg_score,'hgdg_score','revision_plans', paps, paps.comments)
                                }">{{ editData.hgdg_score }}

                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- II. RATIONALE***************************************************************************************************************************** -->
                    <span >
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
                            <QuillEditor theme="snow" v-model:content="form.rationale" contentType="html"
                             @update:content="val => updateRevisionPlans('revision_plans', 'rationale', form.id, val)"
                            toolbar="essential" />
                        </div>
                        <br>
                     </span>
                     <!--III. OBJECTIVES ****************************************************************************************************************************-->
                     <span >
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
                            <QuillEditor theme="snow" v-model:content="form.objective" contentType="html"
                            @update:content="val => updateRevisionPlans('revision_plans', 'objective', form.id, val)"
                            toolbar="essential" />
                        </div>
                        <br>
                    </span>
                    <!--IV. TARGET BENEFICIARIES *******************************************************************************************************************-->
                    <span >
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
                        <QuillEditor theme="snow" v-model:content="form.beneficiaries" contentType="html"
                             @update:content="val => updateRevisionPlans('revision_plans', 'beneficiaries', form.id, val)"
                            toolbar="essential" />
                    </div>
                    <br>
                    </span>
                    <!--V. IMPLEMENTATION SCHEDULE/WORKPLAN *******************************************************************************************************************-->
                    <div>
                         <h3 id="implementation_workplan">
                            <!-- /strategies-and-activities/${dat.id} -->
                            V.
                            <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                            ? `/strategies-and-activities/${paps.id}`:null" target="_blank">
                                Implementation Schedule/Workplan
                            </Link>
                        </h3>
                        <div v-if="editData.type === 'd'">
                            <div v-if="strategy_requests && strategy_requests.length" class="accordion accordion-flush" id="strategyRequestsAccordion">
                                <div v-for="(request, index) in strategy_requests" :key="request.id ?? index" class="accordion-item border rounded mb-2">
                                    <h2 class="accordion-header d-flex align-items-center">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            :data-bs-target="`#strategy-request-${request.id ?? index}`" aria-expanded="false">
                                            <span class="fw-bold">Strategy Request {{ index + 1 }}</span>
                                        </button>
                                        <!-- status: {{ request.status}} -->
                                        <!-- <button
                                            type="button" class="btn btn-success btn-sm text-white mx-2 text-nowrap"
                                            @click="updateStrategyActivityRequestField(request.id, 'strategy_activity_requests', 'status', '0')">
                                            Submit Request</button>
                                        <br> -->
                                        <button type="button" class="btn btn-success btn-sm text-white mx-2 text-nowrap" @click="openStrategyOnlyModal(request.id)">Add Strategy</button>
                                        <!-- @click="submitStrategyActivityRequest(request)" -->
                                         <!-- @click="updateStrategyActivityRequestField(request.id, 'strategy_activity_requests', 'status', '0')" -->
                                        <!-- parseFloat(request.status):  {{parseFloat(request.status)}} -->
                                        <button v-if="parseFloat(request.status) < 0"
                                            type="button"
                                            class="btn btn-primary btn-sm text-white me-2 text-nowrap"
                                            @click="submitStrategyActivityRequest(request)"

                                        >
                                            Submit Request
                                        </button>
                                        <button type="button" class="btn btn-outline-primary btn-sm me-2 text-nowrap" @click.stop="showStrategyRequestFiles(request)">
                                            View File
                                        </button>
                                    </h2>
                                    <div :id="`strategy-request-${request.id ?? index}`" class="accordion-collapse collapse">
                                        <div class="accordion-body p-0">
                                            <table class="table table-bordered mb-0">
                                                <thead class="table-light">
                                                    <tr>
                                                        <th style="width: 50%;">Strategy</th>
                                                        <th style="width: 25%;">Status</th>
                                                        <th style="width: 25%;">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colspan="3" class="p-0">
                                                            <div v-if="!request.strategy || !request.strategy.length" class="p-3 text-muted">No strategy linked to this request.</div>
                                                            <div v-else v-for="(strategy, strategyIndex) in request.strategy" :key="strategy.id ?? strategyIndex" class="accordion accordion-flush" :id="`strategyDetailAccordion-${request.id ?? index}`">
                                                                <div class="accordion-item border-0">
                                                                    <h3 class="accordion-header">
                                                                        <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse"
                                                                            :data-bs-target="`#strategy-detail-${request.id ?? index}-${strategy.id ?? strategyIndex}`" aria-expanded="false">
                                                                            {{ strategy.name || strategy.description || 'Strategy' }}
                                                                        </button>
                                                                    </h3>
                                                                    <div :id="`strategy-detail-${request.id ?? index}-${strategy.id ?? strategyIndex}`" class="accordion-collapse collapse">
                                                                        <div class="accordion-body p-0">
                                                                            <div class="p-2 border-bottom d-flex justify-content-between align-items-center">
                                                                                <label class="fw-bold mb-0">Strategy Description</label>
                                                                                <button class="btn btn-danger btn-sm text-white" @click="deleteStrategyActivityRequest(strategy.id, 'strategies')">Delete Strategy</button>
                                                                            </div>
                                                                            <div class="p-2 border-bottom d-flex align-items-start gap-2">
                                                                                <textarea class="form-control" rows="2" v-model="strategy.description"
                                                                                    @change="updateStrategyActivityRequestField(strategy.id, 'strategies', 'description', strategy.description)"></textarea>
                                                                                <button type="button" class="btn btn-primary btn-sm text-white text-nowrap" @click="openActivityOnlyModal(strategy.id, strategy.description)">Add Activity</button>
                                                                            </div>

                                                                            <div class="table-responsive">
                                                                            <table class="table table-sm table-bordered mb-0" style="min-width: 1500px;">
                                                                                <thead class="table-light">
                                                                                    <tr>
                                                                                        <th>Activity</th>
                                                                                        <th>Timeline</th>
                                                                                        <th>GAD Issue</th>
                                                                                        <th>PS (Q1-Q4)</th>
                                                                                        <th>MOOE (Q1-Q4)</th>
                                                                                        <th>CO (Q1-Q4)</th>
                                                                                        <th>FE (Q1-Q4)</th>
                                                                                        <th>Responsible</th>
                                                                                        <th>CCET</th>
                                                                                        <th>Action</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr v-if="!(strategy.activity || []).length">
                                                                                        <td colspan="10" class="text-muted text-center py-3">No activities available.</td>
                                                                                    </tr>
                                                                                    <template v-else>
                                                                                        <tr v-for="(activity, activityIndex) in (strategy.activity || [])" :key="activity.id ?? activity.activity_id ?? `${request.id ?? index}-${strategyIndex}-${activityIndex}`">
                                                                                            <td>
                                                                                                <!-- {{activity}} -->
                                                                                                <textarea class="form-control" rows="2" v-model="activity.description"
                                                                                                    @change="updateStrategyActivityRequestField(activity.id, 'activities', 'description', activity.description)"></textarea>
                                                                                            </td>
                                                                                            <td v-if="activity.activity_project && activity.activity_project.length">
                                                                                                <input type="date" class="form-control mb-1" v-model="activity.activity_project[0].date_from"
                                                                                                    @change="updateStrategyActivityRequestField(activity.activity_project[0].id, 'activity_projects', 'date_from', activity.activity_project[0].date_from)">
                                                                                                <input type="date" class="form-control" v-model="activity.activity_project[0].date_to"
                                                                                                    @change="updateStrategyActivityRequestField(activity.activity_project[0].id, 'activity_projects', 'date_to', activity.activity_project[0].date_to)">
                                                                                            </td>
                                                                                            <td v-else class="text-muted">Project details unavailable</td>
                                                                                            <td v-if="activity.activity_project && activity.activity_project.length">
                                                                                                <textarea class="form-control" rows="2" v-model="activity.activity_project[0].gad_issue"
                                                                                                    @change="updateStrategyActivityRequestField(activity.activity_project[0].id, 'activity_projects', 'gad_issue', activity.activity_project[0].gad_issue)"></textarea>
                                                                                            </td>
                                                                                            <td v-else class="text-muted">—</td>
                                                                                            <template v-for="category in ['ps', 'mooe', 'co', 'fe']" :key="`${activity.id}-${category}`">
                                                                                                <td v-if="activity.activity_project && activity.activity_project.length">
                                                                                                    <div v-for="quarter in ['q1', 'q2', 'q3', 'q4']" :key="`${activity.id}-${category}-${quarter}`" class="mb-1">
                                                                                                        <input type="number" min="0" step="0.01" class="form-control form-control-sm"
                                                                                                            :aria-label="`${category.toUpperCase()} ${quarter.toUpperCase()}`"
                                                                                                            :placeholder="quarter.toUpperCase()"
                                                                                                            v-model.number="activity.activity_project[0][`${category}_${quarter}`]"
                                                                                                            @change="updateStrategyActivityRequestField(activity.activity_project[0].id, 'activity_projects', `${category}_${quarter}`, activity.activity_project[0][`${category}_${quarter}`])">
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td v-else class="text-muted">—</td>
                                                                                            </template>
                                                                                            <td v-if="activity.activity_project && activity.activity_project.length">
                                                                                                <input type="text" class="form-control" v-model="activity.activity_project[0].responsible"
                                                                                                    @change="updateStrategyActivityRequestField(activity.activity_project[0].id, 'activity_projects', 'responsible', activity.activity_project[0].responsible)">
                                                                                            </td>
                                                                                            <td v-else class="text-muted">—</td>
                                                                                            <td v-if="activity.activity_project && activity.activity_project.length">
                                                                                                <input type="text" class="form-control" v-model="activity.activity_project[0].ccet_code"
                                                                                                    @change="updateStrategyActivityRequestField(activity.activity_project[0].id, 'activity_projects', 'ccet_code', activity.activity_project[0].ccet_code)">
                                                                                            </td>
                                                                                            <td v-else class="text-muted">—</td>
                                                                                            <td>
                                                                                                <button class="btn btn-danger btn-sm text-white" @click="deleteStrategyActivityRequest(activity.id, 'activities')">Delete</button>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </template>
                                                                                </tbody>
                                                                            </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="alert alert-light border mt-2 mb-0">No strategy requests available.</div>
                        </div>
                        <!-- v-if="editData.type === 'p'" -->
                        <p >
                            <span v-if="editData.type === 'p'">
                                <button class="btn btn-success btn-sm text-white"

                                    @click="showStrategyModal()">
                                        Add Strategies
                                </button>
                            </span>
                            <span v-else>
                                <span v-if="strategy_requests && strategy_requests.length"></span>
                                <span v-else>
                                    <button class="btn btn-success btn-sm text-white"
                                        @click="showStrategyRequestModal()">
                                            Add Strategies
                                    </button>
                                </span>
                            </span>

                        </p>
                        <!-- class="table-responsive" style="max-height: 500px; overflow-y: auto;" -->
                        <div style="overflow-x: auto; width: 100%;">
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
                                        <tr  style="background-color:lightgrey; font-weight: bold;" v-if="paps.is_strategy_based==1">
                                            <td  :class="{
                                                'text-danger': has_comment('Implementation Plan','strategy_projects',dat.project_description,'strategy_projects','strategy_projects', dat, dat.comments)
                                            }" ><b>{{  }} </b>

                                                <!-- <button v-if="can_view_comment()" class="superscript-btn"
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
                                                </textarea> -->
                                                <button v-if="can_view_comment()" class="superscript-btn"
                                                    @click="handleClick('Implementation Plan','strategy_projects',dat.project_description,'strategy','strategy_projects', dat, dat.comments)">*
                                                </button>
                                                <button v-if="has_comment('Implementation Plan','strategy_projects',dat.project_description,'strategy','strategy_projects', dat, dat.comments)" class="superscript-btn"
                                                    @click="handleClick('Implementation Plan','strategies',dat.project_description,'strategy','strategy_projects', dat, dat.comments)">*
                                                </button>
                                                <textarea
                                                    class="form-control transparent-bg "
                                                    v-model="dat.project_description"
                                                    type="text"
                                                    @input="setUnsaved(true)"
                                                    @change="updateRevisionPlans('strategy_projects', 'project_description', dat.project_id, dat.project_description)">
                                                        {{ dat.project_description }}
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
                                        <!-- STRATEGIES (WORKPLAN NOT BASED ON STRATEGIES) -->
                                        <tr :id="dat.strategy_id + '_strategy_projects_strategy'" style="background-color:lightgrey; font-weight: bold;" v-if="paps.is_strategy_based==0">
                                            <!-- SEQUENCE NUMBER -->
                                            <td>
                                                <input
                                                    type="number" v-model="dat.seq_no" style="width: 8ch;"
                                                    @input="setUnsaved(true)"
                                                    @change="updateRevisionPlans('strategy_projects', 'seq_no', dat.strategy_id, dat.seq_no)">
                                            </td>
                                            <td :class="{
                                                'text-danger': has_comment('Implementation Plan','strategy_projects',dat.project_description,'strategy','strategy_projects', dat, dat.comments)
                                            }" colspan="12"><b>
                                                    <!-- {{ dat.is_active }} -->
                                                <div class="d-flex justify-content-between align-items-center w-100">

                                                    <textarea
                                                        class="form-control transparent-bg "
                                                        v-model="dat.project_description"
                                                        type="text"
                                                        @input="setUnsaved(true)"
                                                        @change="updateRevisionPlans('strategy_projects', 'description', dat.id, dat.project_description)">
                                                            {{ dat.description }}
                                                    </textarea>
                                                </div>
                                                </b>
                                                <button v-if="can_view_comment()" class="superscript-btn"
                                                    @click="handleClick('Implementation Plan','strategy_projects',dat.project_description,'strategy','strategy_projects', dat, dat.comments)">*
                                                </button>
                                                <button v-if="has_comment('Implementation Plan','strategy_projects',dat.project_description,'strategy','strategy_projects', dat, dat.comments)" class="superscript-btn"
                                                    @click="handleClick('Implementation Plan','strategy_projects',dat.project_description,'strategy','strategy_projects', dat, dat.comments)">*
                                                </button>
                                            </td>

                                            <td>
                                                <!-- v-if="editData.type === 'p'" -->
                                                <button class="btn btn-primary btn-sm text-white"

                                                @click="showActivityModal(dat.id)">
                                                    Add Activities
                                                </button>
                                                <button class="btn btn-danger btn-sm text-white"
                                                    @click="deleteDataActivityOrStrat(dat.id, 'strategies', dat.description, this.form.id)">

                                                    <!-- @click="deleteData(dat.id, 'strategies', dat.description)" -->
                                                    🗑 Delete Strategy
                                                </button>
                                            </td>
                                        </tr>
                                        <!-- ACTIVITIES **************************************************************************************************** -->
                                        <template v-for="(act, subIndex) in dat.activity" :key="subIndex" >
                                            <tr v-if="dat.activity && paps.is_strategy_based==0 && act.is_active==='1'" style="height: 100%">
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
                                                                        <span v-if="paps.is_strategy_based==0 && pair.target_indicator"

                                                                        >
                                                                            <!-- {{ pair.target_indicator }} -->
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
                                                                        <span v-if="paps.is_strategy_based==0">
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
                                                                        <span v-if="paps.is_strategy_based==0">
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

                                                                    </td>
                                                                    <!-- GAD Issue -->
                                                                    <td class="align-top" :class="{
                                                                        'text-danger': has_comment('Implementation Plan','activity GAD issue',act.gad_issue,'gad_issue','activity_projects', act, act.comments)
                                                                    }" :id="dat.id + '_activity_projects_gad_issue'" style="width: 25%; border: 1px solid #000; padding: 4px;" :rowspan="getPairedOutputs(act.activityProject[0]).length">
                                                                        <span v-if="paps.is_strategy_based==0">
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
                                                                        <span v-if="paps.is_strategy_based==0">
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
                                                    <span v-if="paps.is_strategy_based==0">
                                                        <p>Q1:<input class="form-control"
                                                                type="number"
                                                                v-model="act.ps_q1"
                                                                @input="setUnsaved(true)"
                                                                @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'ps_q1', act.activity_id, act.ps_q1, act) : updateRevisionPlans('activity_projects', 'ps_q1', act.activity_id, act.ps_q1)"
                                                            />
                                                        </p>
                                                        <p>Q2:<input class="form-control"
                                                                type="number"
                                                                v-model="act.ps_q2"
                                                                @input="setUnsaved(true)"
                                                                @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'ps_q2', act.activity_id, act.ps_q2, act) : updateRevisionPlans('activity_projects', 'ps_q2', act.activity_id, act.ps_q2)"
                                                            />
                                                        </p>
                                                        <p>Q3:<input class="form-control"
                                                                type="number"
                                                                v-model="act.ps_q3"
                                                                @input="setUnsaved(true)"
                                                                @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'ps_q3', act.activity_id, act.ps_q3, act) : updateRevisionPlans('activity_projects', 'ps_q3', act.activity_id, act.ps_q3)"
                                                            />
                                                        </p>
                                                        <p>Q4:<input class="form-control"
                                                                type="number"
                                                                v-model="act.ps_q4"
                                                                @input="setUnsaved(true)"
                                                                @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'ps_q4', act.activity_id, act.ps_q4, act) : updateRevisionPlans('activity_projects', 'ps_q4', act.activity_id, act.ps_q4)"
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
                                                    <span v-if="paps.is_strategy_based==0">
                                                        <p>Q1:<input class="form-control"
                                                                type="number"
                                                                v-model="act.mooe_q1"
                                                                @input="setUnsaved(true)"
                                                                @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'mooe_q1', act.activity_id, act.mooe_q1, act) : updateRevisionPlans('activity_projects', 'mooe_q1', act.activity_id, act.mooe_q1)"
                                                            />
                                                        </p>
                                                        <p>Q2:<input class="form-control"
                                                                type="number"
                                                                v-model="act.mooe_q2"
                                                                @input="setUnsaved(true)"
                                                                @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'mooe_q2', act.activity_id, act.mooe_q2, act) : updateRevisionPlans('activity_projects', 'mooe_q2', act.activity_id, act.mooe_q2)"
                                                            />
                                                        </p>
                                                        <p>Q3:<input class="form-control"
                                                                type="number"
                                                                v-model="act.mooe_q3"
                                                                @input="setUnsaved(true)"
                                                                @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'mooe_q3', act.activity_id, act.mooe_q3, act) : updateRevisionPlans('activity_projects', 'mooe_q3', act.activity_id, act.mooe_q3)"
                                                            />
                                                        </p>
                                                        <p>Q4:<input class="form-control"
                                                                type="number"
                                                                v-model="act.mooe_q4"
                                                                @input="setUnsaved(true)"
                                                                @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'mooe_q4', act.activity_id, act.mooe_q4, act) : updateRevisionPlans('activity_projects', 'mooe_q4', act.activity_id, act.mooe_q4)"
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
                                                    <span v-if="paps.is_strategy_based==0">
                                                        {{ act_}}
                                                        <p>Q1:<input class="form-control"
                                                                type="number"
                                                                v-model="act.fe_q1"
                                                                @input="setUnsaved(true)"
                                                                @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'fe_q1', act.activity_id, act.fe_q1, act) : updateRevisionPlans('activity_projects', 'fe_q1', act.activity_id, act.fe_q1)"
                                                            />
                                                        </p>
                                                        <p>Q2:<input class="form-control"
                                                                type="number"
                                                                v-model="act.fe_q2"
                                                                @input="setUnsaved(true)"
                                                                @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'fe_q2', act.activity_id, act.fe_q2, act) : updateRevisionPlans('activity_projects', 'fe_q2', act.activity_id, act.fe_q2)"
                                                            />
                                                        </p>
                                                        <p>Q3:<input class="form-control"
                                                                type="number"
                                                                v-model="act.fe_q3"
                                                                @input="setUnsaved(true)"
                                                                @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'fe_q3', act.activity_id, act.fe_q3, act) : updateRevisionPlans('activity_projects', 'fe_q3', act.activity_id, act.fe_q3)"
                                                            />
                                                        </p>
                                                        <p>Q4:<input class="form-control"
                                                                type="number"
                                                                v-model="act.fe_q4"
                                                                @input="setUnsaved(true)"
                                                                @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'fe_q4', act.activity_id, act.fe_q4, act) : updateRevisionPlans('activity_projects', 'fe_q4', act.activity_id, act.fe_q4)"
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
                                                        <span v-if="paps.is_strategy_based==0">
                                                            <p>Q1:<input class="form-control"
                                                                    type="number"
                                                                    v-model="act.co_q1"
                                                                    @input="setUnsaved(true)"
                                                                    @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'co_q1', act.activity_id, act.co_q1, act) : updateRevisionPlans('activity_projects', 'co_q1', act.activity_id, act.co_q1)"
                                                                />
                                                            </p>
                                                            <p>Q2:<input class="form-control"
                                                                    type="number"
                                                                    v-model="act.co_q2"
                                                                    @input="setUnsaved(true)"
                                                                    @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'co_q2', act.activity_id, act.co_q2, act) : updateRevisionPlans('activity_projects', 'co_q2', act.activity_id, act.co_q2)"
                                                                />
                                                            </p>
                                                            <p>Q3:<input class="form-control"
                                                                    type="number"
                                                                    v-model="act.co_q3"
                                                                    @input="setUnsaved(true)"
                                                                    @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'co_q3', act.activity_id, act.co_q3, act) : updateRevisionPlans('activity_projects', 'co_q3', act.activity_id, act.co_q3)"
                                                                />
                                                            </p>
                                                            <p>Q4:<input class="form-control"
                                                                    type="number"
                                                                    v-model="act.co_q4"
                                                                    @input="setUnsaved(true)"
                                                                    @change="editData.type === 'd' ? updateImplementationAmount('activity_projects', 'co_q4', act.activity_id, act.co_q4, act) : updateRevisionPlans('activity_projects', 'co_q4', act.activity_id, act.co_q4)"
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
                                                    <span v-if="paps.is_strategy_based==0">
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
                                                    <!-- {{act.description}} -->
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
                                                    <!-- <button class="btn btn-primary btn-sm text-white"
                                                    @click="showExpectedOutcomesModal(act.id)">
                                                        Edit Activity
                                                    </button><hr > -->
                                                    <button class="btn btn-primary btn-sm text-white"
                                                    @click="showEditActivityModal(act)">
                                                        Edit Activity
                                                    </button><hr >
                                                    <!-- form: {{ form.id}} -- {{ act.is_active }} -->
                                                    <button class="btn btn-danger btn-sm text-white"
                                                        @click="deleteDataActivityOrStrat(act.id, 'activities', dat.description, this.form.id)">
                                                        🗑 Delete Activity
                                                    </button><hr>
                                                </td>
                                            </tr>
                                        </template>
                                    </template>
                                    <!-- TOTALS*********************************************************************************** -->
                                    <!-- <template> -->
                                    <tr>
                                        <td></td>
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
                                        }"
                                        :id="paps.id+'_revision_plans_imp_ps'">
                                            <!-- {{ format_number_conv(v_imp_ps,2,true) }} -->
                                            <!-- {{ paps.id+'_revision_plans_imp_ps' }} -->
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
                                        }"
                                        :id="paps.id+'_revision_plans_imp_mooe'"
                                        >
                                        <!-- {{ format_number_conv(v_imp_mooe,2,true) }} -->
                                        ₱ {{ totalImplementationMOOE.toLocaleString() }}
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
                                        }"
                                        :id="paps.id+'_revision_plans_imp_fe'"
                                        >
                                        <!-- {{ format_number_conv(v_imp_fe,2,true) }} -->
                                        ₱ {{ totalImplementationFE.toLocaleString() }}
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
                                        }"
                                        :id="paps.id+'_revision_plans_imp_fe'"
                                        >
                                        <!-- {{ format_number_conv(v_imp_co,2,true)}} -->
                                        ₱ {{ totalImplementationCO.toLocaleString() }}
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
                                        >
                                        <!-- {{ format_number_conv(imp_amount,2,true) }} -->
                                        ₱ {{ totalImplementationAll.toLocaleString() }}
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
                                        <td></td>
                                    </tr>
                                    <!-- </template> -->

                                </tbody>
                            </table>
                        </div>

                    </div>
                    <!--VI. BUDGETARY REQUIREMENTS************************************************** -->
                    <div>
                        <!-- {{ editData.type }} -- {{ source }} -->
                        <h3 id="budgetary_requirements">
                            VI. <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                            ? `/budget/${paps.id}`:null">
                                Estimated Cost/Budgetary Requirements
                            </Link>
                            <!-- editData.type: {{ editData.type }} -->
                        </h3>
                        <!--  -->
                        <table class="table table-hover table-bordered border-dark" v-if="editData.type==='d' && (budgetaryRequirementsProjectDesign.projects || []).length > 0">
                            <thead>
                                <tr>
                                    <th colspan="3">Particulars</th>
                                    <th>Account Code</th>
                                    <th v-if="editData.type == 'sip'">SIP Number</th>
                                    <th>Amount</th>
                                    <th>Source</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                            <tbody>
                                <template
                                    v-for="project in (budgetaryRequirementsProjectDesign.projects || [])"
                                    :key="project.id"
                                >
                                    <template
                                        v-for="category in (project.categories || [])"
                                        :key="project.id + '-' + category.category"
                                    >
                                        <!-- Category heading -->
                                        <tr class="table-secondary">
                                            <td
                                                :colspan="editData.type == 'sip' ? 8 : 7"
                                                class="fw-bold"
                                            >
                                                {{ category.category_label }}
                                            </td>
                                        </tr>

                                        <!-- Rows under the category -->
                                        <tr
                                            v-for="(row, rowIndex) in (category.rows || [])"
                                            :key="project.id + '-' + category.category + '-' + rowIndex"
                                        >
                                            <td colspan="3">
                                                {{ row.object_of_expenditure }}
                                            </td>

                                            <td>{{ row.account_code }}</td>

                                            <td v-if="editData.type == 'sip'">
                                                -
                                            </td>

                                            <td class="text-end">
                                                {{ Number(row.budget_year || 0).toLocaleString('en-PH', {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                }) }}
                                            </td>

                                            <td>General Fund</td>

                                            <td>-</td>
                                        </tr>

                                        <!-- Category subtotal -->
                                        <tr class="fw-bold">
                                            <td
                                                :colspan="editData.type == 'sip' ? 5 : 4"
                                                class="text-end"
                                            >
                                                {{ category.category_label }} Subtotal
                                            </td>

                                            <td class="text-end">
                                                {{ Number(
                                                    category.rows?.reduce((total, row) => {
                                                        return total + (parseFloat(row.budget_year) || 0);
                                                    }, 0) || 0
                                                ).toLocaleString('en-PH', {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                }) }}
                                            </td>

                                            <td :colspan="editData.type == 'sip' ? 2 : 1"></td>
                                            <!-- <td></td> -->
                                        </tr>
                                    </template>
                                </template>

                                <!-- Overall Budget Preparation Total -->
                                <tr class="table-primary fw-bold">
                                    <td
                                        :colspan="editData.type == 'sip' ? 5 : 4"
                                        class="text-end"
                                    >
                                        Budget Prep Total
                                    </td>

                                    <td class="text-end">
                                        <!-- budget_prep_total: {{budget_prep_total}} -->
                                        {{ Number(budget_prep_total || 0).toLocaleString('en-PH', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        }) }}
                                    </td>

                                    <td :colspan="editData.type == 'sip' ? 3 : 2"></td>
                                    <!-- <td></td> -->
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-bordered" v-if="editData.type==='p' || (budgetaryRequirementsProjectDesign.projects || []).length < 1">
                            <thead>
                                <tr>
                                    <th colspan="3">Particulars</th>
                                    <th>Account Code</th>
                                    <th v-if="editData.type=='sip'">SIP Number</th>
                                    <th>Amount</th>
                                    <th>Source</th>
                                    <!-- <th>Edit</th> -->
                                    <th>Delete</th>
                                </tr>
                            </thead>

                            <tbody v-for="(rows, category) in groupedBudget" :key="category">

                                <!-- CATEGORY HEADER -->
                                <tr class="table-primary">
                                    <td colspan="8" class="fw-bold text-uppercase">

                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            {{ formatCategory(category) }}
                                            <button class="btn btn-success btn-sm text-white"
                                                @click="showBudgetModal(paps.id,'N/A',formatCategory(category))">
                                                ADD NEW
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <!-- GAD + NON-GAD GROUPS -->
                                <!-- <template v-for="rows in gadGroups" :key="gadType"> -->

                                    <!-- SUB HEADER (GAD / NON-GAD) -->
                                    <!-- <tr class="table-secondary">
                                        <td></td>
                                        <td colspan="7" class="fw-bold">
                                            <div class="d-flex justify-content-between align-items-center w-100">
                                                {{ gadType }}
                                                <button class="btn btn-success btn-sm text-white"
                                                    @click="showBudgetModal(paps.id,'',formatCategory(category))">
                                                    ADD NEW
                                                </button>
                                            </div>

                                        </td>
                                    </tr> -->

                                    <!-- DATA ROWS -->
                                     <tr v-for="row in rows" :key="row.id">
                                        <td></td>
                                        <td>
                                            <!-- {{row}} -->
                                        </td>
                                        <!-- BUDGET PARTICULARS -->
                                        <td
                                            :class="{
                                                'text-danger': has_comment('Budgetary Requirements',
                                                    'Particulars',row.particulars,
                                                    'particulars','budget_requirements', row, row.comments)
                                            }"
                                            :id="row.id + '_budget_requirements_particulars'"
                                        >
                                            <textarea
                                                class="form-control transparent-bg "
                                                type="text"
                                                v-model="row.particulars"
                                                @input="setUnsaved(true)"
                                                @change="updateRevisionPlans('budget_requirements', 'particulars', row.id, row.particulars)">
                                                    {{ row.particulars }}
                                            </textarea>
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
                                            :id="row.id + '_budget_requirements_account_code'">
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
                                        <!-- SIP Number -->
                                         <td v-if="editData.type==='sip'">
                                            {{ row.sip_number }}
                                         </td>
                                        <!-- AMOUNT -->
                                        <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements',
                                                    'Amount',row.amount,
                                                    'amount','budget_requirements', row, row.comments)
                                            }"
                                            :id="row.id + '_budget_requirements_amount'"
                                        >
                                            <!-- amount -->
                                             <!-- {{editData.type}} -->
                                            <textarea v-if="editData.type=='d'"
                                                class="form-control transparent-bg "
                                                type="text"
                                                v-model="row.amount"
                                                @input="setUnsaved(true)"
                                                @change="updateRevisionPlansBudgetAmount('budget_requirements', 'amount', row.id, row.amount, row)">
                                                    {{ row.amount }}
                                            </textarea>
                                            <textarea v-if="editData.type=='p'"
                                                class="form-control transparent-bg "
                                                type="text"
                                                v-model="row.amount"
                                                @input="setUnsaved(true)"
                                                @change="updateRevisionPlans('budget_requirements', 'amount', row.id, row.amount)">
                                                    {{ row.amount }}
                                            </textarea>
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
                                        <!-- SOURCE OF FUND -->
                                        <td :class="{
                                                'text-danger': has_comment('Budgetary Requirements',
                                                    'Source',row.source,
                                                    'source','budget_requirements', row, row.comments)
                                            }"
                                            :id="row.id + '_budget_requirements_source'">
                                            <textarea
                                                class="form-control transparent-bg "
                                                type="text"
                                                v-model="row.source"
                                                @input="setUnsaved(true)"
                                                @change="updateRevisionPlans('budget_requirements', 'source', row.id, row.source)">
                                                    {{ row.source }}
                                            </textarea>
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
                                            No entries under {{ formatCategory(category)  }}
                                        </td>
                                    </tr>

                                    <!-- TOTAL ROW -->
                                    <tr class="fw-bold bg-light">
                                        <td></td>
                                        <td colspan="2">TOTAL {{ gadType }}</td>
                                        <td></td>
                                        <td v-if="source==='sip'"></td>
                                        <td>
                                            ₱ {{ budgetSum(category, gadType).toLocaleString() }}
                                        </td>
                                        <td colspan="3"></td>
                                    </tr>
                                <!-- </template> -->
                            </tbody>
                            <!-- <tr >
                                <td colspan="4"><h5>GAD TOTAL</h5></td>
                                <td v-if="source==='sip'"></td>
                                <td :class="{
                                            'text-danger': has_comment('Budgetary Requirements',
                                            'GAD Grand Total',
                                            format_number_conv(tot_gad,2,true),
                                            'gad_total', 'revision_plans',
                                            paps, paps.comments)
                                        }"
                                        :id="paps.id + '_revision_plans_gad_total'">
                                        ₱ {{ gadBudgetTotal.toLocaleString() }}
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
                                <td colspan="3"></td>
                            </tr> -->
                            <tfoot>
                                <tr>
                                        <td colspan="4"><h4>TOTAL</h4></td>
                                        <td v-if="source==='sip'"></td>
                                        <td>₱ {{ overallBudget.toLocaleString() }}</td>
                                        <td colspan="3"></td>
                                </tr>
                            </tfoot>
                        </table>
                        <!-- type: {{editData.type}} -->

                        <!-- {{ budgetaryRequirementsProjectDesign}} -->
                    </div>
                    <!--VI. IMPLEMENTING TEAM************************************************** -->
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
                    <p>
                        <button class="btn btn-success btn-sm text-white"
                            @click="showTeamModal()">
                                Add Team Members
                        </button>
                    </p>
                    <div align="justify" style="white-space: pre-line">
                        <!-- {{ paps.implementing_team }} -->
                        <QuillEditor theme="snow" v-model:content="form.implementing_team" contentType="html"
                            @update:content="val => updateRevisionPlans('revision_plans', 'implementing_team', form.id, val)"
                            placeholder="Introductory paragraph for the implementing team ..."
                            toolbar="essential" />
                    </div>
                    <div >
                        <table table name="tabel" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Position</th>
                                    <th>Employment Status</th>
                                    <th>GAD-related trainings</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(team_member, index) in implementing_team" :key="index">
                                    <td>{{ index+1 }}</td>
                                    <td
                                        :class="{
                                                'text-danger': has_comment('Team Members','Name',team_member.name,'name','team_plans', team_member, team_member.comments)
                                            }"
                                        :id="team_member.id + '_team_plans_name'"
                                    >
                                        {{ team_member.name }}
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
                                    <!--Actions-->
                                    <td>
                                        <Button
                                            class="btn btn-primary btn-sm text-white"
                                            @click="showTeamModalEdit(team_member)"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </Button>&nbsp;
                                        <Button class="btn btn-danger btn-sm text-white"
                                            @click="deleteData(team_member.id, 'team_plans', team_member.name)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                            </svg>
                                        </Button>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                    </div>
                    <!--VIII. PARTNERSHIP & SUSTAINABILITY-->
                    <h3 id="partnership_sustainability">
                        VIII. <Link
                            :class="{
                                'text-danger': has_comment('Partnership and Sustainability','Partnership and Sustainability',paps.partnership,'partnership','revision_plans', paps, paps.comments)
                            }"
                            :id="paps.id + '_revision_plans_partnership'"
                        >Partnership and Sustainability</Link>
                    </h3>
                    <div align="justify" style="white-space: pre-line">
                        <QuillEditor theme="snow" v-model:content="form.partnership" contentType="html"
                            @update:content="val => updateRevisionPlans('revision_plans', 'partnership', form.id, val)"
                            placeholder="Introductory paragraph for partnership and sustainability ..."
                            toolbar="essential" />
                    </div>
                    <!--XI. MONITORING & EVALUATION-->
                    <h3 id="monitoring_evaluation">
                        IX. <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                            ? `/EvaluationMechanismTool/${paps.id}`:null"
                            :id="paps.id + '_revision_plans_monitoring'"
                            :class="{
                                'text-danger': has_comment('Monitoring and Evaluation','Monitoring and Evaluation',paps.monitoring,'monitoring','revision_plans', paps, paps.comments)
                            }"
                        >Monitoring and Evaluation</Link>
                    </h3>
                    <p>
                        <button class="btn btn-success btn-sm text-white"
                            @click="showMonitoringModal()">
                                Add Monitoring and Evaluation Details
                        </button>
                    </p>
                    <div align="justify" style="white-space: pre-line">
                        <!-- <div v-html="paps.monitoring"></div> -->
                        <QuillEditor theme="snow" v-model:content="form.monitoring" contentType="html"
                            @update:content="val => updateRevisionPlans('revision_plans', 'monitoring', form.id, val)"
                            placeholder="Introductory paragraph for monitoring and evaluation ..."
                            toolbar="essential" />
                    </div>
                    <div >
                        <table table name="tabel" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th>Evaluation Mechanism/Tools</th>
                                    <th>OPR and their Roles</th>
                                    <th>Target Beneficiaries</th>
                                    <th>Need for External M&E Team or GAD Expert/Consultant</th>
                                    <th>Actions</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr v-for="monitor in monitoring_and_avaluation">
                                    <!-- M&E Evaluation Mechanism Tool -->
                                    <td style="padding: 0;" :id="monitor.id + '_monitoring_and_evaluations_evaluation_mechanism_tool'">
                                        <textarea
                                            :class="{
                                                'text-danger': has_comment('Monitoring and Evaluation','Evaluation Mechanism Tool',monitor.evaluation_mechanism_tool,'evaluation_mechanism_tool','monitoring_and_evaluations', monitor, monitor.comments)
                                            }"
                                            style="padding: 0;"
                                            class="form-control transparent-bg "
                                            type="text"
                                            v-model="monitor.evaluation_mechanism_tool"
                                            @input="setUnsaved(true)"
                                            @change="updateRevisionPlans('monitoring_and_evaluations', 'evaluation_mechanism_tool', monitor.id, monitor.evaluation_mechanism_tool)">
                                                {{ monitor.evaluation_mechanism_tool }}
                                        </textarea>
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Monitoring and Evaluation','Evaluation Mechanism Tool',monitor.evaluation_mechanism_tool,'evaluation_mechanism_tool','monitoring_and_evaluations', monitor, monitor.comments)">*
                                        </button>
                                        <button v-if="has_comment('Monitoring and Evaluation','Evaluation Mechanism Tool',monitor.evaluation_mechanism_tool,'evaluation_mechanism_tool','monitoring_and_evaluations', monitor, monitor.comments)" class="superscript-btn"
                                            @click="handleClick('Monitoring and Evaluation','Evaluation Mechanism Tool',monitor.evaluation_mechanism_tool,'evaluation_mechanism_tool','monitoring_and_evaluations', monitor, monitor.comments)">*
                                        </button>
                                    </td>
                                    <!-- M&E OPR and their roles -->
                                    <td style="padding: 0;"
                                    :id="monitor.id + '_monitoring_and_evaluations_opr'"
                                    >
                                        <textarea
                                            :class="{
                                                'text-danger': has_comment('Monitoring and Evaluation','OPCR & their roles',monitor.opr,'opr','monitoring_and_evaluations', monitor, monitor.comments)
                                            }"
                                            class="form-control transparent-bg "
                                            type="text"
                                            v-model="monitor.opr"
                                            @input="setUnsaved(true)"
                                            @change="updateRevisionPlans('monitoring_and_evaluations', 'opr', monitor.id, monitor.opr)">
                                                {{ monitor.opr }}
                                        </textarea>
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Monitoring and Evaluation','OPCR & their roles',monitor.opr,'opr','monitoring_and_evaluations', monitor, monitor.comments)">*
                                        </button>
                                        <button v-if="has_comment('Monitoring and Evaluation','OPCR & their roles',monitor.opr,'opr','monitoring_and_evaluations', monitor, monitor.comments)" class="superscript-btn"
                                            @click="handleClick('Monitoring and Evaluation','OPCR & their roles',monitor.opr,'opr','monitoring_and_evaluations', monitor, monitor.comments)">*
                                        </button>
                                    </td>
                                    <!-- M&E Target Beneficiaries -->
                                    <td style="padding: 0;" :class="{
                                                'text-danger': has_comment('Monitoring and Evaluation','Target Beneficiaries',monitor.target_beneficiaries,'target_beneficiaries','monitoring_and_evaluations', monitor, monitor.comments)
                                    }"
                                    :id="monitor.id + '_monitoring_and_evaluations_target_beneficiaries'"
                                    >
                                        <textarea
                                            class="form-control transparent-bg "
                                            type="text"
                                            v-model="monitor.target_beneficiaries"
                                            @input="setUnsaved(true)"
                                            @change="updateRevisionPlans('monitoring_and_evaluations', 'target_beneficiaries', monitor.id, monitor.target_beneficiaries)">
                                                {{ monitor.target_beneficiaries }}
                                        </textarea>
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
                                    >
                                        <select v-model="monitor.gad" class="form-select"
                                            @change="updateRevisionPlans('monitoring_and_evaluations', 'gad', monitor.id, monitor.gad)">
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Monitoring and Evaluation','Target Beneficiaries',monitor.gad,'gad','monitoring_and_evaluations', monitor, monitor.comments)">*
                                        </button>
                                        <button v-if="has_comment('Monitoring and Evaluation','Target Beneficiaries',monitor.gad,'gad','monitoring_and_evaluations', monitor, monitor.comments)" class="superscript-btn"
                                            @click="handleClick('Monitoring and Evaluation','Target Beneficiaries',monitor.gad,'gad','monitoring_and_evaluations', monitor, monitor.comments)">*
                                        </button>
                                    </td>
                                    <td>
                                        <button class="btn btn-danger btn-sm text-white"
                                            @click="deleteData(monitor.id, 'monitoring_and_evaluations', monitor.evaluation_mechanism_tool)">
                                            🗑 Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                    </div>
                    <!--RISK MANAGEMENT-->
                    <h3 id="risk_management">
                        X. <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                            ? `/RiskManagement/${paps.id}`:null"
                            :class="{
                                'text-danger': has_comment('Risk Management','Risk Management',paps.risk_management,'risk_management','revision_plans', paps, paps.comments)
                            }"
                            :id="paps.id + '_revision_plans_risk_management'"
                        >Risk Management</Link>
                    </h3>
                    <p>
                        <button class="btn btn-success btn-sm text-white"
                            @click="showRiskManagementModal()">
                                Add Risk Management Details
                        </button>
                    </p>
                    <div align="justify" style="white-space: pre-line">
                        <QuillEditor theme="snow" v-model:content="form.risk_management" contentType="html"
                            @update:content="val => updateRevisionPlans('revision_plans', 'risk_management', form.id, val)"
                            placeholder="Introductory paragraph for risk management ..."
                            toolbar="essential" />
                    </div>

                    <div >
                        <table table name="tabel" class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th>Prospective Possible Risks</th>
                                    <th>Preventive Measures</th>
                                    <th>Mechanisms to monitor</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="risk in risk_manangement">
                                    <!-- Risk Management -Possible Risks -->
                                    <td style="padding: 0;" :class="{
                                        'text-danger': has_comment('Risk Management','Possible Risks',risk.possible_risk,'possible_risk','risk_manangements', risk, risk.comments)
                                    }"
                                    :id="risk.id + '_risk_manangements_possible_risk'"
                                    >
                                        <QuillEditor theme="snow" v-model:content="risk.possible_risk" contentType="html"
                                        @update:content="val => updateRevisionPlans('risk_manangements', 'possible_risk', risk.id, risk.possible_risk)"
                                        placeholder="Mechanisms to monitor ..."
                                        toolbar="essential" />
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Risk Management','Possible Risks',risk.possible_risk,'possible_risk','risk_manangements', risk, risk.comments)">*
                                        </button>
                                        <button v-if="has_comment('Risk Management','Possible Risks',risk.possible_risk,'possible_risk','risk_manangements', risk, risk.comments)" class="superscript-btn"
                                            @click="handleClick('Risk Management','Possible Risks',risk.possible_risk,'possible_risk','risk_manangements', risk, risk.comments)">*
                                        </button>
                                    </td>
                                    <!-- Risk Management -Person Affected -->
                                    <td style="padding: 0;" :class="{
                                        'text-danger': has_comment('Risk Management','Person Affected',risk.person_affected,'person_affected','risk_manangements', risk, risk.comments)
                                    }"
                                    :id="risk.id + '_risk_manangements_person_affected'"
                                    >
                                        <QuillEditor theme="snow" v-model:content="risk.person_affected" contentType="html"
                                        @update:content="val => updateRevisionPlans('risk_manangements', 'person_affected', risk.id, risk.person_affected)"
                                        placeholder="Mechanisms to monitor ..."
                                        toolbar="essential" />
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Risk Management','Person Affected',risk.person_affected,'person_affected','risk_manangements', risk, risk.comments)">*
                                        </button>
                                        <button v-if="has_comment('Risk Management','Person Affected',risk.person_affected,'person_affected','risk_manangements', risk, risk.comments)" class="superscript-btn"
                                            @click="handleClick('Risk Management','Person Affected',risk.person_affected,'person_affected','risk_manangements', risk, risk.comments)">*
                                        </button>
                                    </td>
                                    <!-- Risk Management -Management -->
                                    <td style="padding: 0;" :class="{
                                            'text-danger': has_comment('Risk Management','Management',risk.management,'management','risk_manangements', risk, risk.comments)
                                        }"
                                        :id="risk.id + '_risk_manangements_management'"
                                    >
                                        <QuillEditor theme="snow" v-model:content="risk.management" contentType="html"
                                        @update:content="val => updateRevisionPlans('risk_manangements', 'management', risk.id, risk.management)"
                                        placeholder="Mechanisms to monitor ..."
                                        toolbar="essential" />
                                        <button v-if="can_view_comment()" class="superscript-btn"
                                            @click="handleClick('Risk Management','Management',risk.management,'management','risk_manangements', risk, risk.comments)">*
                                        </button>
                                        <button v-if="has_comment('Risk Management','Management',risk.management,'management','risk_manangements', risk, risk.comments)" class="superscript-btn"
                                            @click="handleClick('Risk Management','Management',risk.management,'management','risk_manangements', risk, risk.comments)">*
                                        </button>
                                    </td>
                                    <!-- Remove-->
                                    <td>
                                        <button class="btn btn-danger btn-sm text-white"
                                            @click="deleteData(risk.id, 'risk_manangements', risk.possible_risk)">
                                            🗑 Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                    </div>
                    <br>
                    <br>
                    <!--SIGNATORIES-->
                    <h3 id="signatories">
                        XI. <Link :href="(department_code_user === '04' || department_code_user === department_code_project)
                            ? `/RiskManagement/${paps.id}`:null">Signatories</Link>
                    </h3>
                    <p>
                        <button class="btn btn-success btn-sm text-white"
                            @click="showSignatoryModal()">
                                Add Signatories
                        </button>
                    </p>
                    <!-- {{signatoriesProps }} -->
                    <div id="signatories" class="signatory-grid">
                        <div v-for="(signatory, index) in signatoriesprops" :key="index"
                             :class="['signatory-card', (signatory.acted !== 'Prepared' && signatory.acted !== 'Reviewed') ? 'signatory-card-full' : 'signatory-card']"
                        >
                            <!-- SIGNATORY ACTED ************************************************************************** -->
                            <strong>

                                <select v-model="signatory.acted" class="form-select" autocomplete="chrome-off"
                                    @change="updateRevisionPlans('signatories', 'acted', signatory.id, signatory.acted)"
                                    :class="{'text-danger':
                                        has_comment('Signatories','Acted',signatory.acted,'acted','signatories', signatory, signatory.comments)
                                        }" :id="signatory.id + '_signatories_acted'"
                                >
                                    <option>Prepared</option>
                                    <option>Reviewed</option>
                                    <option>Noted</option>
                                    <option>Approved</option>
                                    <option >Recommending Approval</option>
                                    <option v-if="editData.type !== 'p'">As to AIP Inclusion</option>
                                    <option v-if="editData.type !== 'p'">As to AIP Appropriation</option>
                                </select>
                                <span v-if="signatory.acted==='Prepared' || signatory.acted==='Reviewed'
                                    || signatory.acted==='Noted' || signatory.acted==='Approved'
                                "
                                >by:

                                </span>
                                <button v-if="can_view_comment()" class="superscript-btn"
                                    @click="handleClick('Signatories','Acted',signatory.acted,'acted','signatories', signatory, signatory.comments)">*
                                </button>
                                <button v-if="has_comment('Signatories','Acted',signatory.acted,'acted','signatories', signatory, signatory.comments)" class="superscript-btn"
                                    @click="handleClick('Signatories','Acted',signatory.acted,'acted','signatories', signatory, signatory.comments)">*
                                </button>
                            </strong>
                            <br><br>

                            <!-- SIGNATORY ACTED ************************************************************************** -->
                            <span class="text-decoration-underline" :id="signatory.id + '_signatories_name'">
                                <b>
                                    <input
                                        class="form-control"
                                        :class="{'text-danger': has_comment('Signatories','Name',signatory.name,'name','signatories', signatory, signatory.comments)}"
                                        v-model="signatory.name"
                                        type="text"
                                        :id="signatory.id + '_signatories_name'"
                                        @input="setUnsaved(true)"
                                        @change="updateRevisionPlans('signatories', 'name', signatory.id, signatory.name)" />
                                    <button v-if="can_view_comment()" class="superscript-btn"
                                        @click="handleClick('Signatories','Name',signatory.name,'name','signatories', signatory, signatory.comments)">*
                                    </button>
                                    <button v-if="has_comment('Signatories','Name',signatory.name,'name','signatories', signatory, signatory.comments)" class="superscript-btn"
                                        @click="handleClick('Signatories','Name',signatory.name,'name','signatories', signatory, signatory.comments)">*
                                    </button>
                                    <!-- </input> -->
                                </b>
                            </span>
                            <br>
                            <span :id="signatory.id + '_signatories_position'">
                                <input
                                class="form-control transparent-bg "
                                :class="{'text-danger':
                                    has_comment('Signatories','Position',signatory.position,'position','signatories', signatory, signatory.comments)
                                    }"

                                v-model="signatory.position"
                                type="text"
                                @input="setUnsaved(true)"
                                @change="updateRevisionPlans('signatories', 'position', signatory.id, signatory.position)" />
                                <button v-if="can_view_comment()" class="superscript-btn"
                                    @click="handleClick('Signatories','Position',signatory.position,'position','signatories', signatory, signatory.comments)">*
                                </button>
                                <button v-if="has_comment('Signatories','Position',signatory.position,'position','signatories', signatory, signatory.comments)" class="superscript-btn"
                                    @click="handleClick('Signatories','Position',signatory.position,'position','signatories', signatory, signatory.comments)">*
                                </button>
                            </span>

                            <br><br><br><br>
                            <button class="btn btn-danger btn-sm text-white"
                                @click="deleteData(signatory.id, 'signatories', signatory.name)">
                                🗑 Delete
                            </button>
                        </div>
                    </div>
                </div>
        </div>
        <div class="col-3">
                <!-- ALL YOUR EXISTING COMMENT PANEL HTML HERE -->
                <div class="sticky-comments" v-if="!showComments">
                        <button class="close-btn text-danger" @click="toggleShowCommentPanel">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                            </svg>
                            &nbsp;
                            <span v-if="countUnresolvedComments>0" style="color: red;" class="blink">
                                <b>
                                    {{ countUnresolvedComments }} unresolved {{ countUnresolvedComments > 1 ? 'updates' : 'update' }} — click to review
                                </b>
                            </span>
                        </button>

                </div>
                <div class="p-20 bd sticky-comments" v-if="showComments" style="background: rgba(255, 255, 255, 0.7);">
                        <div class="d-flex justify-content-end">
                            <button class="close-btn text-danger" @click="toggleShowCommentPanel">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                </svg>
                            </button>
                        </div>

                        <div class="tab">
                            <button class="button" :class="{ active: open_tab === 'Navigation' }" @click="openTab('Navigation')">Navigation</button>
                            <button class="button" :class="{ active: open_tab === 'Comments' }" @click="openTab('Comments')">Comments
                                <span v-if="countUnresolvedComments>0" style="color: red;" class="blink">
                                    <b>
                                        ({{ countUnresolvedComments }} unresolved)
                                    </b>
                                </span>
                            </button>
                        </div>

                        <div v-if="open_tab==='Comments'">
                            <div class="comments-header">
                                <h4>COMMENTS ...</h4>

                            </div>
                            <div><i>Click a comment and follow the <span style="color: red">red</span> arrow</i></div>
                            <hr>
                            <div class="scrollable-text">
                                <ul class="list-unstyled">
                                    <li v-for="(comment, index) in all_comments" :key="index" class="mb-2" >
                                        <span
                                            class="clickable-comment"
                                            @click="scrollToSection(
                                                ['beneficiaries', 'objective', 'rationale'].includes(comment.column_name)
                                                    ? comment.column_name
                                                        : (
                                                        ['expected_revised_outputs', 'expected_revised_outcomes'].includes(comment.table_name)
                                                            ? `${comment.table_row_id}_${comment.table_name}`
                                                            : `${comment.table_row_id}_${comment.table_name}_${comment.column_name}`
                                                    )
                                            )"
                                            :class="comment.comment_status == 1 ? 'comment-approved' : 'comment-rejected'"
                                            style="cursor: pointer; "
                                        >
                                            <!-- IF UNRESOLVED -->
                                            <svg v-if="comment.comment_status == 0"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                                            </svg>
                                            <!-- IF RESOLVED -->
                                             <svg v-if="comment.comment_status == 1"
                                             xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
                                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                            </svg>
                                            {{ comment.comment }}
                                            <!-- {{
                                                ['beneficiaries', 'objective', 'rationale'].includes(comment.column_name)
                                                    ? comment.column_name
                                                        : (
                                                        ['expected_revised_outputs', 'expected_revised_outcomes'].includes(comment.table_name)
                                                            ? `${comment.table_row_id}_${comment.table_name}`
                                                            : `${comment.table_row_id}_${comment.table_name}_${comment.column_name}`
                                                    )
                                            }} -->
                                        </span>
                                        <div v-html="comment.reply"></div>
                                        <hr>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div v-if="open_tab==='Navigation'">
                            <div class="comments-header">
                                <h4>NAVIGATION ...</h4>

                            </div>
                            <div class="scrollable-text" style="cursor: pointer;">
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
                                            IX.     Monitoring and Evaluation
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
            <!-- </div> -->

        </div>
        <CommentModal v-if="show_comment_modal" @close-modal-event="closeCommentModal" title="COMMENTS">

            <div class="d-flex justify-content-center">

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
    </div>
    <BudgetModal v-if="BudgetModalVisible" @close-modal-event="closeBudgetModal" title="BUDGETARY REQUIREMENTS">
        <div class="p-3">

            <div class="mb-3">
                <label for="">CHART OF ACCOUNTS </label>
                <multiselect ref="AccountCodeInput" :options="chart_of_accounts" :searchable="true" v-model="budget_new.selected_chart_of_account"
                    label="label" track-by="label" @close="selectChartOfAccount"
                    >
                </multiselect>
            </div>
            <div class="mb-3">
                <label class="form-label">Particulars</label>
                <input v-model="budget_new.particulars" type="text" class="form-control" placeholder="Enter particulars">
            </div>

            <div class="mb-3">
                <label class="form-label" >Account Code</label>
                <input v-model="budget_new.account_code" type="text" class="form-control" placeholder="Enter account code">
            </div>
            <div class="mb-3">
                <label class="form-label">Amount</label>
                <input v-model.number="budget_new.amount" type="number" class="form-control" placeholder="Enter amount">
            </div>



            <div class="mb-3">
                <label class="form-label" >Category</label>
                <select v-model="budget_new.category" class="form-select" disabled>
                    <option value="">Select category</option>
                    <option>Personnel Services</option>
                    <option>Maintenance, Operating, and Other Expenses</option>
                    <option>Financial Expenses</option>
                    <option>Capital Outlay</option>
                </select>
            </div>

            <!-- <div class="mb-3">
                <label class="form-label">GAD Type</label>
                <select v-model="budget_new.category_gad" class="form-select" disabled>
                    <option value="">Select type</option>
                    <option value="GAD">GAD</option>
                    <option value="NON-GAD">NON-GAD</option>
                </select>
            </div> -->

            <div class="mb-3">
                <label class="form-label">Source</label>
                <input v-model="budget_new.source" type="text" class="form-control" placeholder="Enter source">
            </div>


            <button type="button" class="btn btn-danger mt-3 text-white " @click="closeBudgetModal">Cancel</button>&nbsp;
            <button type="button" class="btn btn-primary mt-3 text-white " @click="saveBudgetRequirement()">Save</button>
        </div>
    </BudgetModal>
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
                <td><button @click="removeStrategy(index)" class="btn btn-danger btn-sm" style="background-color: #dc3545; color: #fff; border: none;">
                    X</button>
                </td>
            </tr>
        </table>

        <!-- v-if="editData.type === 'p'" -->
        <button @click="addStrategy" class="btn btn-primary mt-2">Add Strategy</button>
        <button @click="saveStrategies" class="btn btn-success mt-2" v-if="editData.type === 'p'">Save</button>
        <button @click="saveStrategiesProjectDesign" class="btn btn-success mt-2" v-if="editData.type === 'd'">Save</button>
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
    <TeamModal v-if="TeamModalVisible" @close-modal-event="closeTeamModal" title="IMPLEMENTING TEAM">
        <!-- {{ team_members }} -->
        <input type="hidden" required>
        <input type="hidden" v-model="team_members.revision_plan_id" class="form-control" autocomplete="chrome-off">
        <label for="">ASSIGN PERSON</label>
        <!-- team_members.implementing_team_id: {{ team_members.implementing_team_id }} -->
        <multiselect
            :options="employees_computed"
            :searchable="true"
            label="label"
            track-by="label"
            :reduce="emp => emp.empl_id"
            v-model="team_members.implementing_team_id"
            @input="updateEmployee($event)"
        />

        <label for="">NAME</label>
        <input type="text" v-model="team_members.name" class="form-control" autocomplete="chrome-off">


        <label for="">GENDER</label>
        <select class="form-select" v-model="team_members.gender" autocomplete="chrome-off">
            <!-- <options> -->
                <option value="M">Male</option>
                <option value="F">Female</option>
            <!-- </options> -->
        </select>

        <label for="">ROLE IN THE PROJECT</label>
        <input type="text" v-model="team_members.role" class="form-control" autocomplete="chrome-off">

        <label for="">JOB STATUS</label>
        <!-- <input type="text" v-model="team_members.status" class="form-control" autocomplete="chrome-off"> -->
        <select v-model="team_members.status" class="form-control" autocomplete="chrome-off">
            <option>Job Order</option>
            <option>Regular</option>
            <option>Casual</option>
            <!-- <option>Regular</options>
            <option>Job Order</option>
            <option>Casual</option> -->
        </select>

        <input type="checkbox"
        v-model="team_members.with_gad_training"
        :true-value="1"
        :false-value="0">
            &nbsp;With GAD training
        <br>

        <span>
            <label for="">Specify GAD Training</label>
            <input type="text" v-model="team_members.specify_GAD_training" class="form-control" autocomplete="chrome-off">
        </span>
        <input type="hidden" v-model="team_members.id" class="form-control" autocomplete="chrome-off">


        <label for="">POSITION</label>
        <input type="text" v-model="team_members.position" class="form-control" autocomplete="chrome-off">

        <button class="btn btn-primary text-white" @click="saveTeamMembers()">Save</button>
    </TeamModal>
    <RiskManagementModal v-if="RiskManagementModalVisible" @close-modal-event="closeRiskManagementModal" title="RISK MANAGEMENT">

        <!-- TABLE -->
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Possible Risk</th>
                    <th>Preventive Measures</th>
                    <th>Mechanisms to monitor</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(row, index) in risk_managements" :key="index">
                    <td>
                        <textarea class="form-control"
                            v-model="row.possible_risk">
                        </textarea>
                    </td>

                    <td>
                        <input type="text" class="form-control"
                            v-model="row.person_affected">
                    </td>

                    <td>
                        <textarea class="form-control"
                            v-model="row.management">
                        </textarea>
                    </td>

                    <td class="text-center">
                        <button class="btn btn-danger" @click="removeRiskManagementRow(index)">
                            Remove
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!--ADD RISK MANAGEMENT ROW-->
        <button class="btn btn-primary mb-2 text-white" @click="addRiskManagementRow">
            + Add Risk Management
        </button>
        &nbsp;&nbsp;
        <!-- SAVE BUTTON -->
        <button class="btn btn-success mb-2 text-white" @click="saveRiskManagements">
            Save Risk Managements
        </button>
    </RiskManagementModal>
    <MonitoringModal v-if="MonitoringModalVisible" @close-modal-event="closeMonitoringModal" title="MONITORING AND EVALUATION">
        <h3 class="modal-title">{{ title }}</h3>

            <!-- TABLE FOR INPUT -->
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Evaluation Mechanism/Tools</th>
                        <th>OPR and their Roles	</th>
                        <th>Target Beneficiaries</th>
                        <th>Need for External M&E Team or GAD Expert/Consultant</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(item, index) in monitoring_and_evaluations" :key="index">
                        <td>
                            <textarea class="form-control" v-model="item.evaluation_mechanism_tool"></textarea>
                        </td>
                        <td>
                            <textarea class="form-control" v-model="item.opr"></textarea>
                        </td>
                        <td>
                            <textarea class="form-control" v-model="item.target_beneficiaries"></textarea>
                        </td>
                        <td>
                            <select type="text" class="form-select" v-model="item.gad">
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </td>
                        <td class="text-center">
                            <button class="btn btn-danger btn-sm" @click="removeMonitoringAndEvaluationRow(index)">
                                Remove
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- BUTTONS -->
            <div class="my-3">
                <button class="btn btn-primary text-white" @click="addMonitoringAndEvaluationRow()">Add Row</button>
                <button class="btn btn-success text-white float-end" @click="saveMonitoringAndEvaluation()">Save</button>
            </div>
    </MonitoringModal>
    <SignatoryModal v-if="SignatoryModalVisible" @close-modal-event="closeSignatoryModal" title="SIGNATORIES">
        <!-- ADD SIGNATORY BUTTON -->
      <button @click="addSignatoryRow"
              class="btn btn-primary mb-3">
        + Add Signatory
      </button>

      <!-- SIGNATORIES TABLE -->
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Acted</th>
            <th>Sequence</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(row, index) in signatories" :key="index">
            <td>
              <input type="text" v-model="row.name" class="form-control">
            </td>

            <td>
              <input type="text" v-model="row.position" class="form-control">
            </td>

            <td>

              <select v-model="row.acted" class="form-select" autocomplete="chrome-off">
                    <option>Prepared</option>
                    <option>Reviewed</option>
                    <option>Noted</option>
                    <option>Approved</option>
                    <option>Recommending Approval</option>
                    <option>As to AIP Inclusion</option>
                    <option>As to AIP Appropriation</option>
                </select>
            </td>

            <td>
              <input type="number" v-model="row.sequence" class="form-control">
            </td>

            <td>
              <button @click="removeSignatoryRow(index)"
                      class="btn btn-danger btn-sm">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="saveSignatories()" class="btn btn-success text-white">Save</button>
    </SignatoryModal>
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
        <!-- <p><b>Parent Activity: </b><u>{{activity_description_current}}</u></p> -->
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
    <ExpectedOutcomeModal v-if="ExpectedOutcomeModalVisible" @close-modal-event="hideExpectedOutcomeModal" title="EXPECTED OUTCOMES">
        <!-- {{ expected_outputs_current }} -->
        <!-- Table for Expected Outcomes -->
        <table class="table table-bordered w-100" style="width: 100%;" v-if="expected_outcomes_new.length > 0" >
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(outcome, index) in expected_outcomes_new" :key="index">
                    <td>
                        <textarea v-model="outcome.description" class="form-control"></textarea>
                    </td>
                    <td>
                        <button @click="removeOutcome(index)" class="btn btn-danger btn-sm">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Add & Save Buttons -->
        <div class="mt-2">
            <button @click="addOutcome" class="btn btn-primary">Add Outcome</button>
            <button @click="saveExpectedOutcomes" class="btn btn-success" v-if="expected_outcomes_new.length > 0">Save All</button>
        </div>
        <table class="table table-bordered w-100" style="width: 100%;">
            <!-- <tr> -->
            <thead>
                <tr class="table thead-dark">
                    <th rowspan="2">Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="exp in expected_outcomes_current">
                    <td>
                        <textarea
                            class="form-control transparent-bg "
                            v-model="exp.description"
                            type="text"
                            @input="setUnsaved(true)"
                            @change="updateRevisionPlans('expected_revised_outcomes', 'description', exp.id, exp.description)">

                        </textarea>
                    </td>
                    <td>
                        <button class="btn btn-danger btn-sm text-white"
                            @click="deleteExpectedOutcome(exp.id, 'expected_revised_outcomes', exp.description, index)">
                            🗑 Delete
                        </button>
                    </td>
                </tr>
            </tbody>
            <!-- </tr> -->
        </table>
    </ExpectedOutcomeModal>
    <ActivityModalEdit v-if="ActivityModalVisibleEdit" @close-modal-event="closeActivityModalEdit" title="ACTIVITIES MODAL">

        <table>
            <tbody>
                <tr>
                    <td style="background-color: #2b1402; color: #fff;">&nbsp;<h5>Activity Description</h5>&nbsp;</td>
                    <td colspan="5" style="background-color: #2b1402;">
                        <textarea
                            class="form-control"
                            v-model="activity_active.description"
                            type="text"
                            @input="setUnsaved(true)"
                            @blur="updateRevisionPlans('activities', 'description', activity_active.id, activity_active.description)">
                                {{ activity_active.description }}
                        </textarea>
                    </td>
                </tr>
                <tr >
                    <!-- GAD Issue -->
                    <td style="background-color: #703a13; color: #fff;" rowspan="2">
                        <b>&nbsp;GAD Issue&nbsp;</b>
                    </td>
                    <td rowspan="2">
                        <textarea
                            class="form-control transparent-bg "
                            v-model="activity_active.gad_issue"
                            type="text"
                            @input="setUnsaved(true)"
                            @change="updateRevisionPlans('activity_projects', 'gad_issue', activity_active.activity_id, activity_active.gad_issue)">
                                {{ activity_active.gad_issue }}
                        </textarea>
                    </td>
                    <td style="background-color: #703a13; color: #fff; text-align: center;" colspan="4"><b>&nbsp;TIMELINE&nbsp;</b></td>
                </tr>
                <tr>
                    <!-- Timeline -->
                    <td style="background-color: #703a13; color: #fff;">
                        <b>&nbsp;FROM&nbsp;</b>
                    </td>
                    <td >
                        <input class="form-control" type="date" v-model="activity_active.date_from" :id="activity_active.activity_id + '_activity_projects_date_from'"
                            @change="updateRevisionPlans('activity_projects', 'date_from', activity_active.activity_id, activity_active.date_from)"/>
                    </td>
                    <td style="background-color: #703a13; color: #fff;">
                        <b>&nbsp;TO&nbsp;</b>
                    </td>
                    <td>
                        <input class="form-control" type="date" v-model="activity_active.date_to"
                            @change="updateRevisionPlans('activity_projects', 'date_to', activity_active.activity_id, activity_active.date_to)"
                            :id="activity_active.activity_id + '_activity_projects_date_to'"/>
                    </td>
                </tr>
                <!-- COLUMN HEADERS -->
                <tr style="background-color: #2b1402; color: #fff;">
                    <th></th>
                    <th><b>Quarter 1</b></th>
                    <th><b>Quarter 2</b></th>
                    <th><b>Quarter 3</b></th>
                    <th><b>Quarter 4</b></th>
                    <th><b>Total</b></th>
                </tr>
                <!-- PERSONNEL SERVICES -->
                <tr >
                    <td style="background-color: #703a13; color: #fff;">
                        <b>&nbsp;Personnel Services&nbsp;</b>
                    </td>
                    <td>
                        <input class="form-control"
                            type="number"
                            v-model="activity_active.ps_q1"
                            @input="setUnsaved(true)"
                            @blur="updateRevisionPlans('activity_projects', 'ps_q1', activity_active.activity_id, activity_active.ps_q1)"
                        />
                    </td>
                    <td><input class="form-control"
                            type="number"
                            v-model="activity_active.ps_q2"
                            @input="setUnsaved(true)"
                            @blur="updateRevisionPlans('activity_projects', 'ps_q2', activity_active.activity_id, activity_active.ps_q2)"
                        />
                    </td>
                    <td><input class="form-control"
                            type="number"
                            v-model="activity_active.ps_q3"
                            @input="setUnsaved(true)"
                            @blur="updateRevisionPlans('activity_projects', 'ps_q3', activity_active.activity_id, activity_active.ps_q3)"
                        />
                    </td>
                    <td><input class="form-control"
                            type="number"
                            v-model="activity_active.ps_q4"
                            @input="setUnsaved(true)"
                            @blur="updateRevisionPlans('activity_projects', 'ps_q4', activity_active.activity_id, activity_active.ps_q4)"
                        />
                    </td>
                    <td>
                        {{ format_number_conv((parseFloat(activity_active.ps_q1)+parseFloat(activity_active.ps_q2)+parseFloat(activity_active.ps_q3)+parseFloat(activity_active.ps_q4)),2,true) }}
                    </td>
                </tr>
                <!-- MOOE -->
                <tr>
                    <td style="background-color: #703a13; color: #fff;">
                        <b>&nbsp;MOOE&nbsp;</b>
                    </td>
                    <td><input class="form-control"
                            type="number"
                            v-model="activity_active.mooe_q1"
                            @input="setUnsaved(true)"
                            @blur="updateRevisionPlans('activity_projects', 'mooe_q1', activity_active.activity_id, activity_active.mooe_q1)"
                        />
                    </td>
                    <td><input class="form-control"
                            type="number"
                            v-model="activity_active.mooe_q2"
                            @input="setUnsaved(true)"
                            @blur="updateRevisionPlans('activity_projects', 'mooe_q2', activity_active.activity_id, activity_active.mooe_q2)"
                        />
                    </td>
                    <td><input class="form-control"
                            type="number"
                            v-model="activity_active.mooe_q3"
                            @input="setUnsaved(true)"
                            @blur="updateRevisionPlans('activity_projects', 'mooe_q3', activity_active.activity_id, activity_active.mooe_q3)"
                        />
                    </td>
                    <td><input class="form-control"
                            type="number"
                            v-model="activity_active.mooe_q4"
                            @input="setUnsaved(true)"
                            @blur="updateRevisionPlans('activity_projects', 'mooe_q4', activity_active.activity_id, activity_active.mooe_q4)"
                        />
                    </td>
                    <td>{{ format_number_conv((parseFloat(activity_active.mooe_q1)+parseFloat(activity_active.mooe_q2)+parseFloat(activity_active.mooe_q3)+parseFloat(activity_active.mooe_q4)),2,true) }}</td>
                </tr>
                <!-- FINANCIAL EXPENSES -->
                <tr>
                    <td style="background-color: #703a13; color: #fff;">
                        <b>&nbsp;Financial Expenses&nbsp;</b>
                    </td>
                    <td><input class="form-control"
                            type="number"
                            v-model="activity_active.fe_q1"
                            @input="setUnsaved(true)"
                            @blur="updateRevisionPlans('activity_projects', 'fe_q1', activity_active.activity_id, activity_active.fe_q1)"
                        />
                    </td>
                    <td><input class="form-control"
                            type="number"
                            v-model="activity_active.fe_q2"
                            @input="setUnsaved(true)"
                            @blur="updateRevisionPlans('activity_projects', 'fe_q2', activity_active.activity_id, activity_active.fe_q2)"
                        />
                    </td>
                    <td><input class="form-control"
                            type="number"
                            v-model="activity_active.fe_q3"
                            @input="setUnsaved(true)"
                            @blur="updateRevisionPlans('activity_projects', 'fe_q3', activity_active.activity_id, activity_active.fe_q3)"
                        />
                    </td>
                    <td><input class="form-control"
                            type="number"
                            v-model="activity_active.fe_q4"
                            @input="setUnsaved(true)"
                            @blur="updateRevisionPlans('activity_projects', 'fe_q4', activity_active.activity_id, activity_active.fe_q4)"
                        />
                    </td>
                    <td>{{ format_number_conv((parseFloat(activity_active.fe_q1)+parseFloat(activity_active.fe_q2)+parseFloat(activity_active.fe_q3)+parseFloat(activity_active.fe_q4)),2,true) }}</td>
                </tr>
                <!-- CAPITAL OUTLAY -->
                <tr>
                    <td style="background-color: #703a13; color: #fff;">
                        <b>&nbsp;Capital Outlay&nbsp;</b>
                    </td>
                    <td><input class="form-control"
                        type="number"
                        v-model="activity_active.co_q1"
                        @input="setUnsaved(true)"
                        @change="updateRevisionPlans('activity_projects', 'co_q1', activity_active.activity_id, activity_active.co_q1)"
                    />
                    </td>
                    <td><input class="form-control"
                            type="number"
                            v-model="activity_active.co_q2"
                            @input="setUnsaved(true)"
                            @change="updateRevisionPlans('activity_projects', 'co_q2', activity_active.activity_id, activity_active.co_q2)"
                        />
                    </td>
                    <td><input class="form-control"
                            type="number"
                            v-model="activity_active.co_q3"
                            @input="setUnsaved(true)"
                            @change="updateRevisionPlans('activity_projects', 'co_q3', activity_active.activity_id, activity_active.co_q3)"
                        />
                    </td>
                    <td><input class="form-control"
                            type="number"
                            v-model="activity_active.co_q4"
                            @input="setUnsaved(true)"
                            @change="updateRevisionPlans('activity_projects', 'co_q4', activity_active.activity_id, activity_active.co_q4)"
                        />
                    </td>
                    <td>{{ format_number_conv((parseFloat(activity_active.co_q1)+parseFloat(activity_active.co_q2)+parseFloat(activity_active.co_q3)+parseFloat(activity_active.co_q4)),2,true) }}</td>

                </tr>
                <!-- CCET Code/Respoinsible Person -->
                <tr>
                    <!-- Climate Change Expenditure Tagging -->
                    <td style="background-color: #703a13; color: #fff;">
                        <b>&nbsp;CCET Code&nbsp;</b>
                    </td>
                    <td colspan="2">
                        <multiselect
                            class="form-select dynamic-width"
                            style="width: 100%;"
                            :options="ccet_computed"
                            :searchable="true"
                            label="label"
                            track-by="label"
                            :reduce="act => activity_active.ccet_code"
                            v-model="activity_active.ccet_code"
                            @input="newVal => updateRevisionPlans('activity_projects', 'ccet_code', activity_active.activity_id, newVal)"
                        />
                    </td>
                    <!-- PERSON Responsible -->
                    <td style="background-color: #703a13; color: #fff;">
                        <b>&nbsp;Person Responsible&nbsp;</b>
                    </td>
                    <td colspan="2">
                        <input class="form-control"
                            type="text"
                            v-model="activity_active.responsible"
                            @input="setUnsaved(true)"
                            @blur="updateRevisionPlans('activity_projects', 'responsible', activity_active.activity_id, activity_active.responsible)"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- {{activity_active}} -->
    </ActivityModalEdit>
    <NewActivityStrategyRequestModal v-if="NewActivityStrategyRequestModalVisible" @close-modal-event="closeNewActivityStrategyRequestModal" title="NEW ACTIVITY/STRATEGY REQUEST">
        <div class="mb-3">
            <label class="form-label" for="strategy-request-files">Supporting files</label>
            <input id="strategy-request-files" ref="strategyRequestFiles" type="file" class="form-control" accept=".pdf,.doc,.docx,image/*" multiple @change="handleStrategyRequestFiles">
            <small class="text-muted">PDF, DOC, DOCX, or image files. Maximum 2 files and 1 MB total.</small>
            <div v-if="strategy_request_files.length" class="table-responsive mt-2">
                <table class="table table-sm table-bordered mb-0">
                    <thead>
                        <tr class="bg-light">
                            <th>File name</th>
                            <th>Type</th>
                            <th>Size</th>
                            <th style="width: 60px;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(file, index) in strategy_request_files" :key="file.file_name + index">
                            <td>{{ file.file_name }}</td>
                            <td>{{ file.file_type }}</td>
                            <td>{{ formatFileSize(file.file_size) }}</td>
                            <td><button type="button" class="btn btn-danger btn-sm" @click="removeStrategyRequestFile(index)">X</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="table-responsive">
            <!-- {{ strategy_request_array}} -->
            <table class="table table-sm table-bordered table-hover" style="min-width: 1200px;">
                <thead>
                    <tr class="bg-secondary text-white">
                        <th style="width: 80px;">ID</th>
                        <th style="width: 220px;">Description</th>
                        <th>Activities </th>
                        <th style="width: 60px;">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(strategyRow, strategyIndex) in strategy_request_array" :key="strategyIndex">
                        <tr>
                            <td>
                                <!-- id: {{ strategyRow.id ?? 'null' }}
                                strategy_activity_request_id:{{ strategyRow.strategy_activity_request_id ?? 'null' }} -->
                            </td>
                            <!-- <td></td> -->
                            <td>
                                <textarea v-model="strategyRow.description" class="form-control" rows="2" placeholder="Enter strategy description"></textarea>
                            </td>
                            <td>
                                <button class="btn btn-primary btn-sm text-white" @click="addActivityRequest(strategyIndex)">Add Activity</button>
                            </td>
                            <td>
                                <button class="btn btn-danger btn-sm" @click="removeStrategyRequest(strategyIndex)">X</button>
                            </td>
                        </tr>
                        <tr v-if="strategyRow.activities && strategyRow.activities.length">
                            <td colspan="5" class="p-0 bg-light">
                                <div class="p-2">
                                    <table class="table table-sm table-bordered mb-0">
                                        <thead>
                                            <tr class="bg-light">
                                                <th style="width: 90px;">Ids:</th>
                                                <th>Description</th>
                                                <th>GAD Issue</th>
                                                <th>Timeline</th>
                                                <th>PS</th>
                                                <th>MOOE</th>
                                                <th>CO</th>
                                                <th>FE</th>
                                                <th>CCET</th>
                                                <th>Responsible</th>
                                                <th style="width: 60px;">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(activityRow, activityIndex) in strategyRow.activities" :key="activityIndex">
                                                <td>
                                                    <!-- activity_id: {{ activityRow.activity_id ?? 'null' }}
                                                    strategy_id: {{ activityRow.strategy_id ?? 'null' }}
                                                    strategy_activity_request_id: {{ activityRow.strategy_activity_request_id ?? 'null' }}-->
                                                </td>
                                                <!-- <td></td>
                                                <td></td> -->
                                                <td>
                                                    <textarea v-model="activityRow.description" class="form-control" rows="2"></textarea>
                                                </td>
                                                <td>
                                                    <textarea v-model="activityRow.gad_issue" class="form-control" rows="2"></textarea>
                                                </td>
                                                <td>
                                                    <input v-model="activityRow.date_from" type="date" class="form-control mb-1" />
                                                    <input v-model="activityRow.date_to" type="date" class="form-control" />
                                                </td>
                                                <td>
                                                    <input v-model.number="activityRow.ps_q1" type="number" class="form-control mb-1" />
                                                    <input v-model.number="activityRow.ps_q2" type="number" class="form-control mb-1" />
                                                    <input v-model.number="activityRow.ps_q3" type="number" class="form-control mb-1" />
                                                    <input v-model.number="activityRow.ps_q4" type="number" class="form-control" />
                                                </td>
                                                <td>
                                                    <input v-model.number="activityRow.mooe_q1" type="number" class="form-control mb-1" />
                                                    <input v-model.number="activityRow.mooe_q2" type="number" class="form-control mb-1" />
                                                    <input v-model.number="activityRow.mooe_q3" type="number" class="form-control mb-1" />
                                                    <input v-model.number="activityRow.mooe_q4" type="number" class="form-control" />
                                                </td>
                                                <td>
                                                    <input v-model.number="activityRow.co_q1" type="number" class="form-control mb-1" />
                                                    <input v-model.number="activityRow.co_q2" type="number" class="form-control mb-1" />
                                                    <input v-model.number="activityRow.co_q3" type="number" class="form-control mb-1" />
                                                    <input v-model.number="activityRow.co_q4" type="number" class="form-control" />
                                                </td>
                                                <td>
                                                    <input v-model.number="activityRow.fe_q1" type="number" class="form-control mb-1" />
                                                    <input v-model.number="activityRow.fe_q2" type="number" class="form-control mb-1" />
                                                    <input v-model.number="activityRow.fe_q3" type="number" class="form-control mb-1" />
                                                    <input v-model.number="activityRow.fe_q4" type="number" class="form-control" />
                                                </td>
                                                <td>
                                                    <input v-model="activityRow.ccet_code" type="text" class="form-control" />
                                                </td>
                                                <td>
                                                    <input v-model="activityRow.responsible" type="text" class="form-control" />
                                                </td>
                                                <td>
                                                    <button class="btn btn-danger btn-sm" @click="removeActivityRequest(strategyIndex, activityIndex)">X</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <!-- {{ strategy_requests}} -->
        <div class="d-flex justify-content-between mt-3">
            <button class="btn btn-primary text-white" @click="addStrategyRequestRow">Add Strategy</button>
            <button class="btn btn-success text-white" @click="saveStrategyRequestArray">Done</button>
        </div>
    </NewActivityStrategyRequestModal>

    <NewActivityStrategyRequestModal v-if="strategyOnlyModalVisible" @close-modal-event="closeStrategyOnlyModal" title="NEW STRATEGY">
        <div class="mb-3">
            <label class="form-label">Strategy description</label>
            <textarea v-model="strategy_only_form.description" class="form-control" rows="4" placeholder="Enter strategy description"></textarea>
        </div>

        <div class="mb-3">
            <label class="form-label">Year period</label>
            <input v-model.number="strategy_only_form.year_period" type="number" class="form-control" min="2024" />
        </div>

        <div class="d-flex justify-content-end gap-2 mt-3">
            <button type="button" class="btn btn-outline-secondary" @click="closeStrategyOnlyModal">Cancel</button>
            <button type="button" class="btn btn-primary text-white" @click="saveStrategyOnly">Save Strategy</button>
        </div>
    </NewActivityStrategyRequestModal>

    <NewActivityStrategyRequestModal v-if="activityOnlyModalVisible" @close-modal-event="closeActivityOnlyModal" title="NEW ACTIVITY">
        <div class="mb-3">
            <label class="form-label">Parent strategy</label>
            <div class="form-control bg-light" aria-readonly="true">{{ activity_only_form.parent_strategy_description }}</div>
        </div>

        <div class="mb-3">
            <label class="form-label">Activity description</label>
            <textarea v-model="activity_only_form.description" class="form-control" rows="3" placeholder="Enter activity description"></textarea>
        </div>

        <div class="row g-2 mb-3">
            <div class="col-md-6">
                <label class="form-label">Date from</label>
                <input v-model="activity_only_form.date_from" type="date" class="form-control" />
            </div>
            <div class="col-md-6">
                <label class="form-label">Date to</label>
                <input v-model="activity_only_form.date_to" type="date" class="form-control" />
            </div>
        </div>

        <div class="mb-3">
            <label class="form-label">GAD issue</label>
            <textarea v-model="activity_only_form.gad_issue" class="form-control" rows="2"></textarea>
        </div>

        <div class="row g-2 mb-3">
            <div class="col-md-6">
                <label class="form-label">CCET code</label>
                <input v-model="activity_only_form.ccet_code" type="text" class="form-control" />
            </div>
            <div class="col-md-6">
                <label class="form-label">Responsible</label>
                <input v-model="activity_only_form.responsible" type="text" class="form-control" />
            </div>
        </div>

        <div class="row g-2 mb-3">
            <div v-for="category in ['ps', 'mooe', 'co', 'fe']" :key="category" class="col-md-6">
                <fieldset class="border rounded p-2">
                    <legend class="float-none w-auto px-1 fs-6 text-uppercase">{{ category }}</legend>
                    <div class="row g-2">
                        <div v-for="quarter in ['q1', 'q2', 'q3', 'q4']" :key="`${category}_${quarter}`" class="col-3">
                            <label class="form-label">{{ quarter.toUpperCase() }}</label>
                            <input v-model.number="activity_only_form[`${category}_${quarter}`]" type="number" min="0" step="0.01" class="form-control" />
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>

        <div class="d-flex justify-content-end gap-2 mt-3">
            <button type="button" class="btn btn-outline-secondary" @click="closeActivityOnlyModal">Cancel</button>
            <button type="button" class="btn btn-primary text-white" @click="saveActivityOnly">Save Activity</button>
        </div>
    </NewActivityStrategyRequestModal>

    <NewActivityStrategyRequestModal v-if="strategyRequestFilesModalVisible" @close-modal-event="closeStrategyRequestFilesModal" title="STRATEGY REQUEST FILES">
        <div class="mb-3 d-flex align-items-end gap-2">
            <div class="flex-grow-1">
                <label class="form-label" for="strategy-request-extra-file">Add a file</label>
                <input id="strategy-request-extra-file" ref="strategyRequestFileInput" type="file" class="form-control" accept=".pdf,.doc,.docx,image/*" @change="handleAdditionalStrategyRequestFile">
            </div>
            <button type="button" class="btn btn-primary text-white" :disabled="!strategyRequestFileToUpload" @click="addStrategyRequestFile">Upload</button>
        </div>
        <div v-if="strategyRequestFiles.length" class="table-responsive">
            <table class="table table-sm table-bordered align-middle mb-0">
                <thead class="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Strategy Activity Request ID</th>
                        <th>File name</th>
                        <th>File path</th>
                        <th>File type</th>
                        <th>File size</th>
                        <th>Uploaded by</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(file, fileIndex) in strategyRequestFiles" :key="file.id ?? fileIndex">
                        <tr>
                            <td>{{ file.id }}</td>
                            <td>{{ file.strategy_activity_request_id }}</td>
                            <td>{{ file.file_name }}</td>
                            <td>{{ file.file_path }}</td>
                            <td>{{ file.file_type }}</td>
                            <td>{{ formatFileSize(file.file_size) }}</td>
                            <td>{{ file.uploaded_by }}</td>
                            <td>{{ file.created_at }}</td>
                            <td>{{ file.updated_at }}</td>
                            <td>
                                <button type="button" class="btn btn-outline-primary btn-sm" data-bs-toggle="collapse"
                                    :data-bs-target="`#strategy-request-file-${file.id ?? fileIndex}`" aria-expanded="false"
                                    :aria-controls="`strategy-request-file-${file.id ?? fileIndex}`">
                                    Preview
                                </button>
                                <button type="button" class="btn btn-danger btn-sm text-white ms-1" @click="deleteStrategyRequestFile(file.id)">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="10" class="p-0">
                                <div :id="`strategy-request-file-${file.id ?? fileIndex}`" class="accordion-collapse collapse">
                                    <div class="p-3 text-center">
                                        <img v-if="isStrategyRequestImage(file)" :src="getStrategyRequestFileUrl(file)" :alt="file.file_name" class="img-fluid" style="max-height: 70vh;" />
                                        <iframe v-else-if="isStrategyRequestPdf(file)" :src="getStrategyRequestFileUrl(file)" :title="file.file_name" class="w-100 border" style="height: 70vh;"></iframe>
                                        <a v-else :href="getStrategyRequestFileUrl(file)" target="_blank" rel="noopener">Open {{ file.file_name }}</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <div v-else class="text-muted p-3">No files attached to this request.</div>
    </NewActivityStrategyRequestModal>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Places from "@/Shared/PlacesShared";
import QuillEditorC from '@/Shared/QuillEditorShared'
import CommentModal from "@/Shared/ModalDynamicTitle";
import BudgetModal from "@/Shared/ModalDynamicTitleSmall";
import StrategyModal from "@/Shared/ModalDynamicTitle";
import ActivityModal from "@/Shared/ModalDynamicTitle";
import ActivityModalEdit from "@/Shared/ModalDynamicTitle";
import TeamModal from "@/Shared/ModalDynamicTitle";
import RiskManagementModal from "@/Shared/ModalDynamicTitle";
import MonitoringModal from "@/Shared/ModalDynamicTitle";
import SignatoryModal from "@/Shared/ModalDynamicTitle";
import ExpectedOutputModal from "@/Shared/ModalDynamicTitle";
import ExpectedOutcomeModal from "@/Shared/ModalDynamicTitle";
import NewActivityStrategyRequestModal from "@/Shared/ModalDynamicTitleLarge";
import axios from 'axios';
import debounce from 'lodash/debounce';

//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        source: String,
        auth: Object,
        editData: Object,
        // paps: Object,
        duplicate: Object,
        idpaps: Number,
        paps_all: Object,
        paps_specific: Object,
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
        account_code: Object,

        //************IMPLEMENTATION SCHEDULE/WORKPLAN */
        implementation: Object,

        // OTHERS
        monitoring_and_avaluation: Object,
        implementing_team: Object,
        signatoriesprops: Object,
        risk_manangement: Object,

        // SOURCE
        source: String,

        // CCET CODE
        ccet_codes: Object,

        // STRATEGY REQUESTS
        strategy_requests: Object,

        // PROJECT DESIGN
        budgetaryRequirementsProjectDesign: Object,
    },
    components: {

        Places: () => new Promise((resolve) => {
            setTimeout(() => {
                resolve(Places)
            }, 2000)
        }),
        QuillEditorC,
        BudgetModal,
        CommentModal,
        StrategyModal,
        ActivityModal,
        ActivityModalEdit,
        TeamModal,
        RiskManagementModal,
        MonitoringModal,
        SignatoryModal,
        ExpectedOutputModal,
        ExpectedOutcomeModal,
        NewActivityStrategyRequestModal

    },
    data() {
        return {
            paps: [],
            submitted: false,
            maxWords: 200,
            act_words: 0,
            open_tab: "Navigation",
            //FORM for Revision Plans
            form: useForm({
                idpaps: "",
                project_title:"",
                project_location: "",
                list_of_lgu_covered: "",
                date_start: "",
                date_end: "",
                beneficiary_male: 0,
                beneficiary_female: 0,
                baseline_male: 0,
                baseline_female: 0,
                baseline_total: 0,
                data_source: "",
                rationale: "",
                objective: "",
                beneficiaries: "",
                checklist_id: "",
                implementing_team: "",
                partnership: "",
                monitoring: "",
                risk_management: "",
                is_strategy_based: "",
                aip_code: "",
                agency_name: "",
                source: "",
                id: null,
                selPaps: "",
                year_period: "",
            }),
            total_intended: 0,
            pageTitle: "",

            //COMMENTS*******************
            showComments: false,
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
            //********************************* */

            //EDITS*****************************
            unsaved: false,

            //BUDGET MODAL***********************
            BudgetModalVisible: false,
            budget_new: {
                id: null,
                revision_plan_id: null,
                particulars: "",
                account_code: "",
                amount: null,
                proposed_budget: null,
                category: "",
                category_gad: "",
                source: "",
                selected_chart_of_account: "",

            },

            //STRATEGIES**************
            StrategyModalVisible: false,
            strategies: [],
            // ACTIVITIES****************
            strategy_id: 0, /*Parent strategy of the activity */
            ActivityModalVisible: false,
            ActivityModalVisibleEdit: false,
            activities: [],
            activity_description_current: '',
            activity_active: [],
            //IMPLEMENTING TEAM *******************************
            TeamModalVisible: false,
            team_members: [],
            all_employees: [],
            action_type_team: '',
            //RISK MANAGEEMENT *******************************
            RiskManagementModalVisible: false,
            risk_managements: [],
            // MONITORING AND EVALUATION*******************************
            MonitoringModalVisible: false,
            monitoring_and_evaluations: [],
            // SIGNATORIES*******************************
            SignatoryModalVisible: false,
            signatories: [],


            //EXPECTED OUTPUTS *******************************
            ExpectedOutputModalVisible: false,
            expected_outputs_current: [],
            expected_outputs_new: [],
            activity_id: 0,
            activity_project_id: 0,

            //EXPECTED OUTCOMES *******************************
            ExpectedOutcomeModalVisible: false,
            expected_outcomes_current: [],
            expected_outcomes_new: [],

            // NewActivityStrategyRequestModal ****************
            NewActivityStrategyRequestModalVisible: false,
            strategy_request_array: [],
            activity_request_array: [],
            strategy_request_files: [],
            strategyOnlyModalVisible: false,
            activityOnlyModalVisible: false,
            strategyRequestFilesModalVisible: false,
            strategyRequestFiles: [],
            strategyRequestId: null,
            strategyRequestFileToUpload: null,
            strategy_only_form: {
                description: '',
                strategy_activity_request_id: null,
                project_id: null,
                idpaps: null,
                idmfo: null,
                FFUNCCOD: null,
                year_period: new Date().getFullYear() + 1,
            },
            activity_only_form: {
                strategy_id: null,
                parent_strategy_description: '',
                description: '',
                project_id: null,
                date_from: '',
                date_to: '',
                gad_issue: '',
                ccet_code: '',
                responsible: '',
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
                fe_q1: 0,
                fe_q2: 0,
                fe_q3: 0,
                fe_q4: 0,
            },

            // BUDGET PREP VARIABLES
            budget_prep_total: 0,

        };
    },
    computed: {
        strategyRequestOptions() {
            const rows = Array.isArray(this.strategy_requests) ? this.strategy_requests : [];
            const strategies = [];

            rows.forEach((request) => {
                const list = Array.isArray(request?.strategy) ? request.strategy : [];
                list.forEach((strategy) => {
                    if (strategy?.id) {
                        strategies.push(strategy);
                    }
                });
            });

            return strategies;
        },
        wordsRemaining() {
            const wordCount = this.form.rationale.trim().split(/\s+/).length;
            var returner = this.maxWords - wordCount;

            if (this.form.rationale === "") {
                returner = 200;
            }
            return returner;
        },
        wordCount() {
            var rtn = this.form.rationale.trim().split(/\s+/).length;
            if (this.form.rationale === "") {
                rtn = 0;
            }
            return rtn;
        },
        chart_of_accounts(){
            let accts = this.account_code;
            return accts.map((dat) => ({
                // value: dat.individual_final_output_id,
                // "[id: "+ dat.individual_final_output_id+ ", type: " + dat.pcr_type + "]",
                value: dat.recid,
                // "[id: "+ dat.individual_final_output_id+ ", type: " + dat.pcr_type + "]",
                label: dat.FACTCODE  + " - " + dat.FTITLE,
            }));
        },

        groupedBudget() {
            const result = {
                maintenanceOperating: [],
                personnelServices: [],
                financialExpenses: [],
                capitalOutlay: [],
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
                result[catKey].push(item);   // push directly, no GAD / NON-GAD classification
            });

            return result;
        },
        budgetSum() {
            // return (category, gadType) => {
            //     const group = this.groupedBudget[category]?.[gadType];
            //     if (!group) return 0;

            //     return group.reduce((total, item) => {
            //         const amount = parseFloat(item.amount || 0);
            //         return total + (isNaN(amount) ? 0 : amount);
            //     }, 0);
            // };
            return (category) => {
                const items = this.groupedBudget[category];
                if (!Array.isArray(items)) return 0;

                return items.reduce((total, item) => {
                    const amount = parseFloat(item.amount || 0);
                    return total + (isNaN(amount) ? 0 : amount);
                }, 0);
            };
        },
        overallBudget() {
            let total = 0;

            for (const category in this.groupedBudget) {
                const rows = this.groupedBudget[category];

                rows.forEach(item => {
                    const amount = parseFloat(item.amount || 0);
                    if (!isNaN(amount)) {
                        total += amount;
                    }
                });
            }

            return total;
        },
        gadBudgetTotal() {
            let total = 0;

            for (const category in this.groupedBudget) {
                const gadGroups = this.groupedBudget[category];

                for (const gadType in gadGroups) {
                    const rows = gadGroups[gadType];

                    rows.forEach(item => {
                        const amount = parseFloat(item.amount || 0);

                        // Only include rows with category_gad === "GAD"
                        if (!isNaN(amount) && item.category_gad === "GAD") {
                            total += amount;
                        }
                    });
                }
            }

            return total;
        },
        totalImplementationPS() {
            return this.computeCategory("ps");
        },
        totalImplementationMOOE() {
            return this.computeCategory("mooe");
        },
        totalImplementationCO() {
            return this.computeCategory("co");
        },
        totalImplementationFE() {
            return this.computeCategory("fe");
        },

        totalImplementationAll() {
            return this.computeCategory("total");
        },

        employees_computed() {
            // ALWAYS ensure it's an array
            const emps = Array.isArray(this.all_employees)
                ? this.all_employees
                : [];

            return emps.map(emp => ({
                value: emp.empl_id,
                label: `${emp.empl_id} - ${emp.employee_name}`,
                _raw: emp
            }));
        },
        countUnresolvedComments() {
            // alert('unresolved')
            return this.all_comments.filter(c => c.comment_status !== "1").length;
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
        // Restore scroll position after page reload
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        if (scrollPosition !== null) {
            setTimeout(() => {
                window.scrollTo(0, parseInt(scrollPosition));
                sessionStorage.removeItem('scrollPosition');
            }, 100);
        }

        window.addEventListener('beforeunload', this.handleBeforeUnload);
        this.form.idpaps = this.idpaps;
        if(this.source!==undefined){
            this.form.source =this.source
        }
        //this.form.idinteroutcome=this.idinteroutcome
        if (this.editData !== undefined) {
            this.paps = this.editData;
            this.pageTitle = "Edit"
            this.form.idpaps = this.editData.idpaps
            this.form.project_title = this.editData.project_title
            this.form.project_location = this.editData.project_location
            this.form.list_of_lgu_covered = this.editData.list_of_lgu_covered
            this.form.date_start = this.editData.date_start
            this.form.date_end = this.editData.date_end
            this.form.beneficiary_male = this.editData.beneficiary_male
            this.form.beneficiary_female = this.editData.beneficiary_female
            this.total_intended = parseFloat(this.form.beneficiary_male)+parseFloat(this.form.beneficiary_female)
            this.form.baseline_male = this.editData.baseline_male
            this.form.baseline_female = this.editData.baseline_female
            this.form.baseline_total = this.editData.baseline_total
            this.form.data_source = this.editData.data_source
            this.form.rationale = this.editData.rationale
            this.form.objective = this.editData.objective
            this.form.checklist_id = this.editData.checklist_id
            this.form.beneficiaries = this.editData.beneficiaries
            this.form.implementing_team = this.editData.implementing_team
            this.form.partnership = this.editData.partnership
            this.form.monitoring = this.editData.monitoring
            this.form.risk_management = this.editData.risk_management
            this.form.is_strategy_based = this.editData.is_strategy_based
            this.form.id = this.editData.id
            this.form.aip_code = this.editData.aip_code
            this.form.year_period = this.editData.year_period
            if(this.form.checklist_id=='0'){
                this.form.checklist_id =null;
            }
            if(this.editData.type=="d"){
                this.getOverallTotal()
            }
        } else {
            this.pageTitle = "Create"
            this.form.is_strategy_based=0
            //this.form.idpaps=this.idpaps
            //this.form.aip_code=this.paps[0].aip_code
            if(this.paps[0]!==undefined){
                this.form.aip_code=this.paps[0].aip_code
                this.form.agency_name =this.paps[0].agency_name
            }
            if (this.duplicate !== undefined) {
                this.form.idpaps = this.duplicate[0].idpaps
                this.form.project_title = this.duplicate[0].project_title
                this.form.project_location = this.duplicate[0].project_location
                this.form.list_of_lgu_covered = this.duplicate[0].list_of_lgu_covered
                this.form.date_start = this.duplicate[0].date_start
                this.form.date_end = this.duplicate[0].date_end
                this.form.beneficiary_male = this.duplicate[0].beneficiary_male
                this.form.beneficiary_female = this.duplicate[0].beneficiary_female
                this.form.baseline_male = this.duplicate[0].baseline_male
                this.form.baseline_female = this.duplicate[0].baseline_female
                this.form.baseline_total = this.duplicate[0].baseline_total
                this.form.data_source = this.duplicate[0].data_source
                this.form.rationale = this.duplicate[0].rationale
                this.form.objective = this.duplicate[0].objective
                this.form.checklist_id = this.duplicate[0].checklist_id
                this.form.beneficiaries = this.duplicate[0].beneficiaries
                this.form.implementing_team = this.duplicate[0].implementing_team
                this.form.partnership = this.duplicate[0].partnership
                this.form.monitoring = this.duplicate[0].monitoring
                this.form.risk_management = this.duplicate[0].risk_management
                this.is_strategy_based = this.duplicate[0].is_strategy_based
            } else {
                // this.form.project_title = this.paps[0].paps_desc
                //alert('undefined si idpaps!');
            }
        }




        //TEXTAREA -Set Sizes ***********************************************************************************************************
        // const applyAutosize = (el) => {
        //     el.style.overflow = 'hidden';
        //     el.style.resize = 'none';

        //     const resize = () => {
        //         el.style.height = 'auto';
        //         el.style.height = el.scrollHeight + 'px';
        //     };

        //     el.addEventListener('input', resize);
        //     resize(); // initial
        // };

        // Apply to all textareas inside this page
        // this.$nextTick(() => {
        //     this.$el.querySelectorAll('textarea').forEach(applyAutosize);
        // });

    },
    beforeUnmount() {
        window.removeEventListener('beforeunload', this.handleBeforeUnload);
    },
    methods: {
        //this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4);
        //alert(this.form.target_qty);
        // if (this.act_words > this.maxWords) {
        //     alert("Rationale exceeds 200 words limit")
        // } else {
        //
        openTab(tab_name){
            this.open_tab=tab_name
        },
        submit() {

                if (this.editData !== undefined) {
                    //alert('patch');
                    this.form.patch("/revision/update", this.form);
                } else {
                    this.form.id = null;
                    //alert('store');
                    this.form.post("/revision/store", this.form);
                }
            // }

        },
        limitWords() {
            const words = this.form.rationale.trim().split(/\s+/);
            this.act_words = words.length;
            if (words.length > this.maxWords) {
                //alert("Rationale has already 200 words!")
                //this.form.rationale = words.slice(0, this.maxWords).join(' ');
            }
        },
        setTotal(){
            var male =parseFloat(this.form.baseline_male);
            var female =parseFloat(this.form.baseline_female);
            var tot = male + female;
            this.form.baseline_total =tot
        },
        setIntendedTotal(){
            var male =parseFloat(this.form.beneficiary_male);
            var female =parseFloat(this.form.beneficiary_female);
            var tot = male + female;
            this.total_intended =tot
        },
        updateProjectTitle() {

            var selectedPap = this.paps_all.find(pap => String(pap.id) === String(this.form.idpaps));
            // alert("fsdfsdf")
            console.log(this.form.idpaps)
            this.form.project_title = selectedPap ? selectedPap.paps_desc : '';
            this.form.aip_code = selectedPap ? selectedPap.aip_code : '';
            this.form.agency_name = selectedPap ? selectedPap.agency_name : '';
            this.selPaps = selectedPap
        },
        toggleShowCommentPanel() {
            this.showComments = !this.showComments;
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
            if(this.comment_table==='signatories'){
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
                },
                preserveScroll: true
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

            this.showArrow(el);
        },
        showArrow(el) {
            // Remove previous arrow
            const oldArrow = document.querySelector(".jump-arrow");
            if (oldArrow) oldArrow.remove();

            // Create container div
            const arrow = document.createElement("div");
            arrow.classList.add("jump-arrow");
            arrow.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
            `;
            document.body.appendChild(arrow);

            // Get target element position
            const rect = el.getBoundingClientRect();
            const scrollTop = window.scrollY || window.pageYOffset;

            // Position arrow at the **top of the target element**
            const arrowX = rect.left - 40; // offset left from element
            const arrowY = scrollTop + rect.top; // align with element top

            arrow.style.position = "absolute";
            arrow.style.left = arrowX + "px";
            arrow.style.top = arrowY + "px";
            arrow.style.zIndex = 9999;
            arrow.style.transition = "opacity 0.3s";

            // Fade out after 2.5 seconds
            setTimeout(() => {
                arrow.style.opacity = 0;
                setTimeout(() => arrow.remove(), 500);
            }, 2500);
        },
        // END OF COMMENTS*************************************************

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
        //*************************************************************** */

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
                    window.location.reload(); // Reload to revert the change in UI
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
        updateRevisionPlansBudgetAmount(table_name, column_name, id, new_data, row) {
            const amount = parseFloat(new_data);
            const ceiling = parseFloat(row.reference_budget_ceiling);
            // alert("Amount: " + amount + ", Ceiling: " + ceiling); // Debugging alert
            if (isNaN(amount) || amount < 0) {
                alert("Amount must be a valid number greater than or equal to 0.");
                row.amount = 0;
                this.setUnsaved(false);
                return;
            }

            if (!isNaN(ceiling) && amount > ceiling) {
                alert(
                    "Amount cannot exceed the approved budget ceiling of " +
                    ceiling.toLocaleString('en-PH', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }) + "."
                );

                // Restore the amount to the budget ceiling
                row.amount = ceiling;
                this.setUnsaved(false);
                return;
            }

            // Valid amount: call the existing debounced method
            this.updateRevisionPlans(
                table_name,
                column_name,
                id,
                new_data
            );
        },
        updateImplementationAmount(table_name, column_name, id, new_data, row) {
            // Match quarterly columns: ps_q1, mooe_q2, co_q3, fe_q4, etc.
            const match = column_name.match(/^(ps|mooe|co|fe)_q([1-4])$/);
            // alert("has_reference_activity_project: " + row.has_reference_activity_project);
            // Only validate quarterly disaggregated amounts
            if (!match) {
                this.updateRevisionPlans(table_name, column_name, id, new_data);
                return;
            }
            if(!row.has_reference_activity_project){
                this.updateRevisionPlans(table_name, column_name, id, new_data);
                return;
            }
            const category = match[1];
            const quarter = match[2];

            // Get the category total, e.g. ps_total
            const categoryTotal = parseFloat(row[`${category}_total`]) || 0;

            // Sum the four quarterly amounts for this category.
            // Use new_data for the edited quarter to ensure the latest input is checked.
            const quarterlyTotal = [1, 2, 3, 4].reduce((sum, q) => {
                const column = `${category}_q${q}`;

                const value = q === Number(quarter)
                    ? parseFloat(new_data)
                    : parseFloat(row[column]);

                return sum + (isNaN(value) ? 0 : value);
            }, 0);

            // If the quarterly sum exceeds the category total, revert the edited value
            if (quarterlyTotal > categoryTotal) {
                alert(
                    `The total of ${category.toUpperCase()} quarterly amounts ` +
                    `(${quarterlyTotal.toLocaleString('en-PH', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}) cannot exceed the category total of ` +
                    `${categoryTotal.toLocaleString('en-PH', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}.`
                );

                // Restore the previous allowed value for the edited quarter
                const ceilingColumn = `${category}_q${quarter}_ceiling`;
                const ceiling = parseFloat(row[ceilingColumn]);

                if (!isNaN(ceiling)) {
                    row[column_name] = ceiling;
                }

                this.setUnsaved(false);
                return;
            }

            // Validation passed; use the existing shared update method
            this.updateRevisionPlans(table_name, column_name, id, new_data);
        },
        // updateRevisionPlansBudgetAmount(table_name, column_name, id, new_data, row) {
        //     const amount = parseFloat(new_data);
        //     const ceiling = parseFloat(row.budget_ceiling);

        //     if (!isNaN(amount) && !isNaN(ceiling) && amount > ceiling) {
        //         alert("Amount cannot exceed the approved budget ceiling of " + ceiling + ".");

        //         // row.amount = ceiling;
        //         // this.setUnsaved(false);
        //         // return;
        //     }

        //     // If valid, call the existing update method
        //     this.updateRevisionPlans(table_name, column_name, id, new_data);
        // },
        // async updateRevisionPlans(table_name, column_name, id, new_data){
        //     const payload = {
        //         table_name: table_name,
        //         column_name: column_name,
        //         id: id,
        //         new_data: encodeURIComponent(new_data)
        //     };

        //     const debouncedCall = debounce(async () => {
        //         try {
        //             const response = await axios.patch(`/revision/streamlined/${id}/update`, payload);
        //             console.log(response.data);
        //             this.setUnsaved(false);
        //             // this.refreshData();
        //         } catch (error) {
        //             console.error('Error updating ' + table_name + ' (' + column_name + ')', error);
        //         }
        //     }, 1000);

            // call the debounced function
            // debouncedCall();
            // try {
            //     const response = await axios.patch(`/revision/streamlined/${id}/update`, payload);
            //     console.log(response.data);
            //     this.setUnsaved(false)
            //     // this.refreshData();
            // } catch (error) {
            //     console.error('Error updating '+table_name+' ('+column_name+')', error);
            // }
        // },

        // GENERAL DELETION ************************************************
        deleteData(id, table, title){

            //alert(this.idpaps);
            let text = "WARNING!\nAre you sure you want to delete a row from "+table+" with title "+title+"?";
              if (confirm(text) == true) {
                this.$inertia.delete("/revision/streamlined/" + id+"/"+table, {
                    preserveScroll: true
                });
            }

        },
        // DELETE STRATEGY OR ACTIVITY
        deleteDataActivityOrStrat(id, table, title, project_id){

            //alert(this.idpaps);
            let text = "WARNING!\nAre you sure you want to delete a row from "+table+" with title "+title+"?";
              if (confirm(text) == true) {
                this.$inertia.delete("/revision/streamlined/" + id+"/"+table+"/"+project_id, {
                    preserveScroll: true
                });
            }

        },
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
            // alert(revision_plan_id)
            this.budget_new.revision_plan_id = revision_plan_id;
            this.budget_new.category_gad = gadType;
            this.budget_new.category = category;
            this.budget_new.proposed_budget=0;
            this.BudgetModalVisible=true;
            console.log('Edit row', revision_plan_id, gadType, category);
        },

        selectChartOfAccount(){
            setTimeout(() => {
                if (this.budget_new.selected_chart_of_account !== null && this.budget_new.selected_chart_of_account !== undefined) {
                    const index = this.account_code.findIndex(data => String(data.recid) === String(this.budget_new.selected_chart_of_account));
                    this.budget_new.particulars = this.account_code[index].FTITLE;
                    this.budget_new.account_code = this.account_code[index].FACTCODE;
                    console.log(this.account_code[index]);

                } else {
                    // Handle case when no option is selected (form.ipcr_code is null or undefined)
                    return -1; // Return -1 to indicate no option is selected
                }
            }, 300);
        },
        async saveBudgetRequirement(){

             if (!this.budget_new.particulars || this.budget_new.particulars.trim() === "") {
                alert("Particulars cannot be empty.");
                return;
            }
            if (this.budget_new.amount === null || this.budget_new.amount === 0) {
                alert("Amount cannot be empty or zero.");
                return;
            }
            if (!this.budget_new.source || this.budget_new.source.trim() === "") {
                alert("Source cannot be empty.");
                return;
            }
            const confirmed = window.confirm("Are you sure you want to save this budget requirement?");
            if (!confirmed) return; // stop if user cancels
            try {
                // Set the revision_plan_id dynamically if needed
                this.budget_new.revision_plan_id = this.paps.id;

                const response = await axios.post('/budget/store/budget', this.budget_new);

                // Add the returned budget to your array (optional)
                this.budget_requirements.push(response.data);

                // Close modal and reset
                this.BudgetModalVisible = false;
                this.budget_new = {
                    id: null,
                    revision_plan_id: this.paps.id,
                    particulars: "",
                    account_code: "",
                    amount: null,
                    proposed_budget: null,
                    category: "Personnel Services",
                    category_gad: "GAD",
                    source: "",
                    selected_chart_of_account: ""
                };

                alert("Budget saved successfully!");
            } catch (error) {
                console.error(error);
                alert("Failed to save budget.");
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

        //SHOW STRATEGIES MODAL
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
            const scrollPosition = window.scrollY;
            sessionStorage.setItem('scrollPosition', scrollPosition);
            // Proceed to save (e.g., emit event or call API)
            axios.post('/implementation-workplan/strategies', {
                strategies: this.strategies,
                paps_id: this.paps_specific.id,
                project_id: this.editData.id
            },
            {
                preserveScroll: true,
                preserveState: true,
            })
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

        //ACTIVITIES************************************************************
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
                project_id: this.editData.id,
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
                    window.location.reload()
                }));

                alert('Activities saved successfully!');
                this.closeActivityModal();
            } catch (error) {
                console.error(error);
                alert('Error saving activities.');
            }
        },
        showEditActivityModal(activity){
            this.activity_active = activity;
            this.ActivityModalVisibleEdit=true;
        },
        closeActivityModalEdit(){
            this.ActivityModalVisibleEdit=false;
             this.activity_active = [];
        },

        // STRATEGY/ACTIVITY REQUESTS *********************
        showStrategyRequestModal(){
            this.strategy_request_array = [];
            this.activity_request_array = [];
            this.strategy_request_files = [];
            this.addStrategyRequestRow();
            this.NewActivityStrategyRequestModalVisible = true;
        },
        closeNewActivityStrategyRequestModal(){
            this.NewActivityStrategyRequestModalVisible = false;
        },
        getDefaultActivityRequestRow() {
            return {
                activity_id: null,
                strategy_id: null,
                strategy_activity_request_id: null,
                description: '',
                gad_issue: '',
                date_from: '',
                date_to: '',
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
                fe_q1: 0,
                fe_q2: 0,
                fe_q3: 0,
                fe_q4: 0,
                ccet_code: null,
                responsible: '',
            };
        },
        getDefaultStrategyRequestRow() {
            return {
                id: null,
                strategy_activity_request_id: null,
                description: '',
                activities: [],
            };
        },
        addStrategyRequestRow() {
            this.strategy_request_array.push(this.getDefaultStrategyRequestRow());
        },
        removeStrategyRequest(index) {
            this.strategy_request_array.splice(index, 1);
            this.syncActivityRequestArray();
        },
        addActivityRequest(strategyIndex) {
            if (!this.strategy_request_array[strategyIndex]) {
                return;
            }

            const newActivity = this.getDefaultActivityRequestRow();
            newActivity.strategy_id = this.strategy_request_array[strategyIndex].id;
            newActivity.strategy_activity_request_id = this.strategy_request_array[strategyIndex].strategy_activity_request_id;

            if (!this.strategy_request_array[strategyIndex].activities) {
                this.strategy_request_array[strategyIndex].activities = [];
            }

            this.strategy_request_array[strategyIndex].activities.push(newActivity);
            this.syncActivityRequestArray();
        },
        removeActivityRequest(strategyIndex, activityIndex) {
            if (!this.strategy_request_array[strategyIndex]) {
                return;
            }

            if (!Array.isArray(this.strategy_request_array[strategyIndex].activities)) {
                return;
            }

            this.strategy_request_array[strategyIndex].activities.splice(activityIndex, 1);
            this.syncActivityRequestArray();
        },
        syncActivityRequestArray() {
            const flatActivities = [];

            this.strategy_request_array.forEach((strategyRow) => {
                const activities = Array.isArray(strategyRow.activities) ? strategyRow.activities : [];

                activities.forEach((activityRow) => {
                    flatActivities.push({
                        ...activityRow,
                        strategy_id: strategyRow.id ?? activityRow.strategy_id ?? null,
                        strategy_activity_request_id: strategyRow.strategy_activity_request_id ?? activityRow.strategy_activity_request_id ?? null,
                    });
                });
            });

            this.activity_request_array = flatActivities;
        },
        // STRATEGY/ACTIVITY REQUEST -ACTIVITY REQUESTSTS ONLY!!!!
        showStrategyRequestModalForActivityOnly(parent_strategy_object){
            this.strategy_request_array = [];
            this.activity_request_array = [];
            this.strategy_request_files = [];
            this.addStrategyRequestRow();
            this.NewActivityStrategyRequestModalVisible = true;
        },
        passedStrategyRow(parent_strategy_object){
            return {
                id: null,
                strategy_activity_request_id: null,
                description: '',
                activities: [],
            };
        },
        // STRATEGY/ACTIVITY REQUEST FILES *********************
        formatFileSize(size) {
            return `${(size / 1024).toFixed(1)} KB`;
        },


        handleStrategyRequestFiles(event) {
            const selectedFiles = Array.from(event.target.files || []);
            const files = [...this.strategy_request_files.map(file => file.file), ...selectedFiles];
            const allowedFile = /^(application\/pdf|application\/msword|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document|image\/)/i;
            const totalSize = files.reduce((total, file) => total + file.size, 0);

            if (files.length > 2) {
                alert('You can upload a maximum of 2 files.');
            } else if (files.some(file => !allowedFile.test(file.type))) {
                alert('Only PDF, DOC, DOCX, or image files are allowed.');
            } else if (totalSize > 1024 * 1024) {
                alert('The total file size must not exceed 1 MB.');
            } else {
                this.strategy_request_files = files.map(file => ({
                    file,
                    file_name: file.name,
                    file_path: '',
                    file_type: file.type,
                    file_size: file.size,
                }));
            }

            event.target.value = '';
        },
        removeStrategyRequestFile(index) {
            this.strategy_request_files.splice(index, 1);
        },
        showStrategyRequestFiles(request) {
            this.strategyRequestId = request?.id ?? null;
            this.strategyRequestFiles = Array.isArray(request?.files) ? [...request.files] : [];
            this.strategyRequestFileToUpload = null;
            this.strategyRequestFilesModalVisible = true;
        },
        closeStrategyRequestFilesModal() {
            this.strategyRequestFilesModalVisible = false;
            this.strategyRequestFiles = [];
            this.strategyRequestId = null;
            this.strategyRequestFileToUpload = null;
        },
        handleAdditionalStrategyRequestFile(event) {
            const file = event.target.files?.[0] ?? null;
            const allowedFile = /^(application\/pdf|application\/msword|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document|image\/)/i;

            if (file && !allowedFile.test(file.type)) {
                alert('Only PDF, DOC, DOCX, or image files are allowed.');
                event.target.value = '';
                return;
            }

            if (file && file.size > 1024 * 1024) {
                alert('The file size must not exceed 1 MB.');
                event.target.value = '';
                return;
            }

            this.strategyRequestFileToUpload = file;
        },
        async addStrategyRequestFile() {
            if (!this.strategyRequestId || !this.strategyRequestFileToUpload) {
                return;
            }

            const formData = new FormData();
            formData.append('strategy_activity_request_id', this.strategyRequestId);
            formData.append('file', this.strategyRequestFileToUpload);

            try {
                const response = await axios.post('/strategy-and-activity-request/files/store', formData);
                this.strategyRequestFiles.push(response.data.file);
                this.strategyRequestFileToUpload = null;
                if (this.$refs.strategyRequestFileInput) {
                    this.$refs.strategyRequestFileInput.value = '';
                }
            } catch (error) {
                console.error('Failed to upload strategy request file:', error);
                alert('Failed to upload the selected file.');
            }
        },
        async deleteStrategyRequestFile(id) {
            if (!id || !confirm('Are you sure you want to delete this file?')) {
                return;
            }

            try {
                await axios.delete(`/strategy-and-activity-request/files/delete/${id}`);
                this.strategyRequestFiles = this.strategyRequestFiles.filter(file => file.id !== id);
            } catch (error) {
                console.error('Failed to delete strategy request file:', error);
                alert('Failed to delete the selected file.');
            }
        },
        getStrategyRequestFileUrl(file) {
            const directory = String(file?.file_path || '')
                .replace(/\\/g, '/')
                .replace(/^\/+|\/+$/g, '')
                .replace(/^public\//, '');
            const fileName = encodeURIComponent(file?.file_name || '');

            return `/${directory}/${fileName}`;
        },
        isStrategyRequestImage(file) {
            return String(file?.file_type || '').toLowerCase().startsWith('image/');
        },
        isStrategyRequestPdf(file) {
            return String(file?.file_type || '').toLowerCase() === 'application/pdf';
        },
        saveStrategyRequestArray() {
            // this.strategy_request_array.forEach((strategyRow) => {
            //     if (!Array.isArray(strategyRow.activities)) {
            //         strategyRow.activities = [];
            //     }

            //     strategyRow.activities.forEach((activityRow) => {
            //         activityRow.strategy_id = strategyRow.id ?? activityRow.strategy_id ?? null;
            //         activityRow.strategy_activity_request_id = strategyRow.strategy_activity_request_id ?? activityRow.strategy_activity_request_id ?? null;
            //     });
            // });

            // this.syncActivityRequestArray();

            const formData = new FormData();
            formData.append('strategy_request_array', JSON.stringify(this.strategy_request_array));
            formData.append('activity_request_array', JSON.stringify(this.activity_request_array));
            formData.append('revision_plan_id', this.editData?.id ?? '');
            formData.append('program_and_project_id', this.paps_specific?.id ?? this.paps?.id ?? '');
            formData.append('idpaps', this.editData?.idpaps ?? this.paps_specific?.id ?? '');
            formData.append('created_by', this.auth?.user?.id ?? '');
            formData.append('strategy_activity_request_files', JSON.stringify(this.strategy_request_files.map(file => ({
                strategy_activity_request_id: null,
                file_name: file.file_name,
                file_path: file.file_path,
                file_type: file.file_type,
                file_size: file.file_size,
            }))));
            this.strategy_request_files.forEach(file => formData.append('strategy_request_uploads[]', file.file));

            this.$inertia.post('/strategy-and-activity-request/create', formData, {
                forceFormData: true,
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    this.closeNewActivityStrategyRequestModal();
                    alert('Strategy and activity request saved successfully.');
                },
                onError: () => {
                    alert('Failed to save strategy and activity request.');
                }
            });
        },
        saveStrategiesProjectDesign(){
            alert("strategy Project Design")
        },
        updateStrategyActivityRequestField(id, tableName, columnName, newValue) {
            if (!id || !tableName || !columnName) {
                return Promise.resolve();
            }

            return axios.patch('/strategy-and-activity-request/update', {
                id: id,
                table_name: tableName,
                column_name: columnName,
                new_value: newValue ?? ''
            }, {
                preserveScroll: true,
                preserveState: true
            })
            .then((response) => {
                this.unsaved = false;
                return response;
            })
            .catch((error) => {
                console.error('Failed to update strategy/activity row:', error);
                alert('Failed to update the selected row.');
                return false;
            });
        },
        submitStrategyActivityRequest(request) {
            const confirmed = window.confirm(
                'Are you sure you want to submit this strategy activity request?'
            );

            if (!confirmed) {
                return Promise.resolve(false);
            }
            return this.updateStrategyActivityRequestField(
                request.id,
                'strategy_activity_request',
                'status',
                0
            ).then((response) => {
                if (response) {
                    request.status = 0;
                }
            });
        },
        deleteStrategyActivityRequest(id, tableName) {
            if (!id || !tableName) {
                return;
            }

            const confirmed = confirm('Are you sure you want to delete this record?');
            if (!confirmed) {
                return;
            }

            axios.delete(`/strategy-and-activity-request/delete/${id}/${tableName}`)
            .then(() => {
                this.$inertia.reload({ preserveScroll: true });
            })
            .catch((error) => {
                console.error('Failed to delete strategy/activity row:', error);
                alert('Failed to delete the selected row.');
            });
        },

        openStrategyOnlyModal(strategyActivityRequestId) {
            this.strategy_only_form = {
                description: '',
            strategy_activity_request_id: strategyActivityRequestId ?? null,
                project_id: this.editData?.id ?? this.paps?.id ?? this.paps_specific?.id ?? null,
                idpaps: this.paps_specific?.id ?? this.paps?.id ?? null,
                idmfo: this.paps_specific?.idmfo ?? null,
                FFUNCCOD: this.paps_specific?.FFUNCCOD ?? null,
                year_period: new Date().getFullYear() + 1,
            };
            this.strategyOnlyModalVisible = true;
        },
        closeStrategyOnlyModal() {
            this.strategyOnlyModalVisible = false;
        },
        saveStrategyOnly() {
            if (!this.strategy_only_form.description || !this.strategy_only_form.description.trim()) {
                alert('Strategy description is required.');
                return;
            }

            axios.post('/strategy-and-activity-request/strategy/store', {
                ...this.strategy_only_form,
                idpaps: this.editData?.idpaps,
                project_id: this.editData?.id,
            })
                .then(() => {
                    this.closeStrategyOnlyModal();
                    this.$inertia.reload({ preserveScroll: true });
                    alert('Strategy saved successfully.');
                })
                .catch((error) => {
                    console.error('Failed to save strategy:', error);
                    alert('Failed to save strategy.');
                });
        },
        openActivityOnlyModal(strategyId, strategyDescription) {
            this.activity_only_form = {
            strategy_id: strategyId ?? null,
            parent_strategy_description: strategyDescription ?? '',
                description: '',
                project_id: this.editData?.id ?? this.paps?.id ?? this.paps_specific?.id ?? null,
                date_from: '',
                date_to: '',
                gad_issue: '',
                ccet_code: '',
                responsible: '',
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
                fe_q1: 0,
                fe_q2: 0,
                fe_q3: 0,
                fe_q4: 0,
            };
            this.activityOnlyModalVisible = true;
        },
        closeActivityOnlyModal() {
            this.activityOnlyModalVisible = false;
        },
        saveActivityOnly() {
            if (!this.activity_only_form.strategy_id) {
                alert('Please select a strategy first.');
                return;
            }

            if (!this.activity_only_form.description || !this.activity_only_form.description.trim()) {
                alert('Activity description is required.');
                return;
            }

            axios.post('/strategy-and-activity-request/activity/store', {
                ...this.activity_only_form,
                idpaps: this.editData?.idpaps,
                project_id: this.editData?.id,
            })
                .then(() => {
                    this.closeActivityOnlyModal();
                    this.$inertia.reload({ preserveScroll: true });
                    alert('Activity saved successfully.');
                })
                .catch((error) => {
                    console.error('Failed to save activity:', error);
                    alert('Failed to save activity.');
                });
        },

        //IMPLEMENTING TEAM *******************************
        showTeamModal(){
            this.action_type_team = 'store'
            this.all_employees=[];
            this.addTeamRow()
            axios.get('/get_employees_all')
                .then(response => {
                    this.all_employees = response.data;   // store employees
                    this.TeamModalVisible=true;
                })
                .catch(error => {
                    console.error("Error loading employees:", error);
                });
        },
        closeTeamModal(){
            this.TeamModalVisible=false;
            this.all_employees=[];
            // this.team_members=[];
        },
        showTeamModalEdit(emp){
            this.action_type_team = 'update'
            this.TeamModalVisible=true;
            this.all_employees=[];
            this.team_members=({
                id: emp.id,
                revision_plan_id: this.editData.id,
                implementing_team_id: emp.empl_id,
                role:  emp.role,
                empl_id: emp.empl_id,
                name:  emp.name,
                competency:  emp.competency,
                position:  emp.position,
                with_gad_training: emp.with_gad_training,
                specify_GAD_training:  emp.specify_GAD_training,
                gender:  emp.gender,
                status: emp.status
            });
            axios.get('/get_employees_all')
                .then(response => {
                    this.all_employees = response.data;   // store employees
                })
                .catch(error => {
                    console.error("Error loading employees:", error);
                });
        },
        // TEAM MEMBERS *********************************************
        addTeamRow() {
            this.team_members=({
                id: 0,
                revision_plan_id: this.editData.id,
                implementing_team_id: 0,
                role: '',
                empl_id: 0,
                name: '',
                competency: '',
                position: '',
                with_gad_training: 1,
                specify_GAD_training: '',
                gender: '',
                status: ''
            });
        },
        removeTeamRow(index) {
            this.team_members.splice(index, 1);
        },
        saveTeamMembers() {
            if(this.action_type_team==='store'){
                axios.post('/implementation-workplan/implementing/team/plans', {
                    'rows': this.team_members
                })
                .then(res => {
                    // optionally clear or close modal
                    alert('Successfully saved team member!')
                    this.team_members=[]
                    this.TeamModalVisible = false;
                    sessionStorage.setItem('scrollPosition', window.scrollY);
                    window.location.reload()
                });
            }else if(this.action_type_team==='update'){
                axios.patch('/implementation-workplan/implementing/team/plans/update', {
                    'rows': this.team_members
                })
                .then(res => {
                    // optionally clear or close modal
                    alert('Successfully saved team member!')
                    this.team_members=[]
                    this.TeamModalVisible = false;
                    sessionStorage.setItem('scrollPosition', window.scrollY);
                    window.location.reload()
                });
            }


        },
        // updateEmployee(){
        //     var selectedEmp = this.all_employees.find(peop => String(peop.empl_id) === String(this.team_members.implementing_team_id));
        //     // alert("fsdfsdf")
        //     console.log(this.team_members.implementing_team_id)
        //     console.log(selectedEmp)
        //     this.team_members.name = selectedEmp ? selectedEmp.employee_name : '';
        //     this.team_members.gender = selectedEmp ? selectedEmp.gender : '';
        //     this.team_members.position = selectedEmp ? selectedEmp.position_long_title : '';
        // },
        updateEmployee(emplId) {
            const selectedEmp = this.all_employees.find(
                peop => String(peop.empl_id) === String(emplId)
            );

            this.team_members.name     = selectedEmp?.employee_name || '';
            this.team_members.gender   = selectedEmp?.gender || '';
            this.team_members.position = selectedEmp?.position_long_title || '';
            this.team_members.empl_id  = emplId;
            this.team_members.status = selectedEmp?.employment_type_descr || '';
            // this.team_members=({
            //     id: selectedEmp?.employee_name || 0,
            //     revision_plan_id: this.editData.id,
            //     implementing_team_id: selectedEmp?.empl_id || '',
            //     role: selectedEmp?.role || '',
            //     empl_id: selectedEmp?.empl_id || '',
            //     name: selectedEmp?.name || '',
            //     competency: selectedEmp?.competency || '',
            //     position: selectedEmp?.position || '',
            //     with_gad_training: selectedEmp?.with_gad_training || '',
            //     specify_GAD_training: selectedEmp?.specify_GAD_training || '',
            //     gender: selectedEmp?.gender || '',
            //     status: selectedEmp?.status || ''
            // });
        },
        // CCET CODES *********************************************\
        updateCCET(code_ccet) {
            const selectedEmp = this.ccet_codes.find(
                ccet => String(ccet.ccet_code) === String(code_ccet)
            );


        },
        //RISK MANAGEEMENT *******************************
        showRiskManagementModal(){
            this.RiskManagementModalVisible=true;
        },
        closeRiskManagementModal(){
            this.RiskManagementModalVisible=false;
            this.risk_managements=[];
        },
        addRiskManagementRow() {
            this.risk_managements.push({
                id: null,
                possible_risk: '',
                person_affected: '',
                management: '',
                revision_plan_id: this.editData.id
            });
        },
        removeRiskManagementRow(index) {
            this.risk_managements.splice(index, 1);
        },
        saveRiskManagements() {
            axios.post('/revision/streamlined/subtables/save/risk/management', {
                risk_managements: this.risk_managements
            })
            .then(res => {
                console.log("Saved:", res.data);
                window.location.reload()
                // Optional success message or close modal
            })
            .catch(err => {
                console.error(err);
            });
        },
        // MONITORING AND EVALUATION*******************************
        closeMonitoringModal(){
            this.MonitoringModalVisible=false;
            this.monitoring_and_evaluations=[];
        },
        showMonitoringModal(){
            this.MonitoringModalVisible=true;
        },
        addMonitoringAndEvaluationRow() {
            this.monitoring_and_evaluations.push({
                evaluation_mechanism_tool: "",
                opr: "",
                target_beneficiaries: "",
                gad: "No",
                revision_plan_id: this.editData.id, // automatically attach
            });
        },

        removeMonitoringAndEvaluationRow(index) {
            this.monitoring_and_evaluations.splice(index, 1);
        },

        saveMonitoringAndEvaluation() {
            axios.post('/revision/streamlined/subtables/save/monitoring/and/evaluation', {
                rows: this.monitoring_and_evaluations,
            })
            .then(res => {
                // console.log("Saved:", res.data);
                this.MonitoringModalVisible = false;
                window.location.reload()
            })
            .catch(err => {
                console.error(err);
            });
        },
        // SIGNATORIES*******************************
        closeSignatoryModal(){
            this.SignatoryModalVisible=false;
        },
        showSignatoryModal(){
            this.SignatoryModalVisible=true;
        },
        addSignatoryRow() {
            this.signatories.push({
                id: null,
                name: "",
                position: "",
                acted: "",
                sequence: "",
                revision_plan_id: this.editData.id,
            });
        },
        removeSignatoryRow(index) {
            this.signatories.splice(index, 1);
        },
        async saveSignatories() {
            await axios.post("/revision/streamlined/subtables/save/signatories", {
            signatories: this.signatories,
            revision_plan_id: this.editData.id
            })
            .then(res => {
                console.log("Signatories saved successfully:", res.data);
                this.closeSignatoryModal();
                window.location.reload()
            })
            .catch(err => {
                console.error("Error saving signatories:", err);
            });
        },

        //IMPLEMENTATION
        computeCategory(type) {
            if (!this.implementation) return 0;

            const categories = ["ps", "mooe", "co", "fe"];
            const activeCats = type === "total" ? categories : [type];

            let sum = 0;

            this.implementation.forEach(item => {
                if (item.activity && Array.isArray(item.activity)) {
                    item.activity.forEach(act => {
                        activeCats.forEach(cat => {
                            sum += this.sumQuarterValues(act, cat);
                        });
                    });
                }
            });

            return sum;
        },

        sumQuarterValues(act, category) {
            const quarters = ["q1", "q2", "q3", "q4"];
            let total = 0;

            quarters.forEach(q => {
                const key = `${category}_${q}`;
                // ex: "mooe_q1"
                let val = act[key];
                total += parseFloat(val) || 0;
            });

            return total;
        },

        //FIT WIDTH TO VISIBLE AREA ****************************
        fitWidthToVisibleArea() {
            const table = document.querySelector('.table.table-hover.table-bordered.border-dark');
            const tableContainer = document.querySelector('div[id="implementation_workplan"]')?.parentElement?.querySelector('div > div');

            if (!table) return;

            if (this.implementationTableFitted) {
                // Reset to original state
                table.style.width = 'auto';
                table.style.tableLayout = 'auto';
                table.style.whiteSpace = 'normal';
                table.querySelectorAll('td, th').forEach(cell => {
                    cell.style.whiteSpace = 'normal';
                    cell.style.width = '';
                });
                this.implementationTableFitted = false;
            } else {
                // Fit to visible area
                const windowWidth = window.innerWidth;
                const padding = 40; // Account for margins and scrollbar
                const availableWidth = windowWidth - padding;

                table.style.width = availableWidth + 'px';
                table.style.tableLayout = 'fixed';
                table.style.whiteSpace = 'nowrap';

                // Make cells preserve space for text
                const cells = table.querySelectorAll('td, th');
                const numCols = table.querySelectorAll('th').length;
                const colWidth = availableWidth / numCols;

                cells.forEach(cell => {
                    cell.style.whiteSpace = 'normal';
                    cell.style.wordWrap = 'break-word';
                    cell.style.overflowWrap = 'break-word';
                });

                this.implementationTableFitted = true;
            }
        },


        //EXPECTED OUTPUT ******************************************
        showExpectedOutputModal(activity, activity_id, activity_project_id, activity_desc){
            this.activity_id=activity_id
            this.activity_project_id=activity_project_id
            this.expected_outputs_new = [];
            this.expected_outputs_current = activity
            this.ExpectedOutputModalVisible=true;
            this.activity_description_current=activity_desc
        },
        hideExpectedOutputModal(){
            this.ExpectedOutputModalVisible=false;
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
                },
            {
                preserveScroll: true,
                preserveState: true,
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
        //EXPECTED OUTCOMES ******************************************
        showExpectedOutcomeModal(activity, activity_id, activity_project_id){
            this.expected_outcomes_new=[];
            this.activity_id=activity_id
            this.activity_project_id=activity_project_id
            this.expected_outputs_new = [];
            this.expected_outcomes_current = activity
            this.ExpectedOutcomeModalVisible=true;
        },
        hideExpectedOutcomeModal(){
            // alert('outcome')
            this.ExpectedOutcomeModalVisible=false;
            window.location.reload()
        },
        addOutcome() {
            this.expected_outcomes_new.push({
                id: null,
                description: '',
                strategy_id: null,
                strategy_project_id: null,
                activity_id: this.activity_id,
                activity_project_id: this.activity_project_id,
                is_strategy_outcome: 0
            });
        },
        removeOutcome(index) {
            this.expected_outcomes_new.splice(index, 1);
        },
        async saveExpectedOutcomes() {
            try {
                const payload = this.expected_outcomes_new.map(item => ({
                    ...item,
                    activity_id: this.activity_id,
                    activity_project_id: this.activity_project_id,
                    project_id: this.project_id
                }));

                const response = await axios.post('/revision/streamlined/expected/outcomes', { rows: payload });

                if (response.data.success) {
                    // Push saved outcomes to current list
                    this.expected_outcomes_current.push(...this.expected_outcomes_new);
                    // Clear new outcomes
                    this.expected_outcomes_new = [];
                    // this.hideExpectedOutcomeModal();
                } else {
                    alert('Failed to save expected outcomes');
                }
            } catch (error) {
                console.error(error);
                alert('Error saving expected outcomes');
            }
        },
        deleteExpectedOutcome(id, table, title, index){
            // this.deleteData(id,table,title)
            let text = "WARNING!\nAre you sure you want to delete a row from "+table+" with title "+title+"?";
            if (confirm(text) == true) {
                this.$inertia.delete(`/revision/streamlined/${id}/${table}`, {
                    onSuccess: () => {
                        // Only runs if backend deletion succeeds
                        this.expected_outcomes_current.splice(index, 1);
                    },
                    onError: () => {
                        alert("Delete failed! Please try again.");
                    },
                });
            }
        },

        // ATTRIBUTED AMOUNT**********************************************************
        getGadAttributedAmount(overallBudget, hgdg_score) {
            const score = parseFloat(hgdg_score) || 0;
            const budget = parseFloat(overallBudget) || 0;

            if (score < 4) {
                return budget * 0;
            } else if (score < 8) {
                return budget * 0.25;
            } else if (score < 15) {
                return budget * 0.50;
            } else if (score < 20) {
                return budget * 0.75;
            } else {
                return budget * 1.00;
            }
        },

        // PROJECT DESIGN -BUDGET PREP ******************************************
        getOverallTotal() {
            const projects = this.budgetaryRequirementsProjectDesign?.projects || [];

            this.budget_prep_total = projects.reduce((total, project) => {
                return total + (project.categories || []).reduce((categoryTotal, category) => {
                    return categoryTotal + (category.rows || []).reduce((rowTotal, row) => {
                        return rowTotal + (parseFloat(row.budget_year) || 0);
                    }, 0);
                }, 0);
            }, 0);
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


</style>
