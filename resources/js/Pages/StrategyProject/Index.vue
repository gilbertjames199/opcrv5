<template>
    <Head>
        <title>Home</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Implementation Schedule/ Work Plan</h3>
            <!-- <Link :href="`/revision/${revision_plan.idpaps}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
            </Link> -->
            <a @click.prevent="goBack" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </a>
        </div>
        <div class="peers">
            <h6>PROJECT TITLE: </h6>&nbsp;
            <!-- {{ unsaved }} -->
            <span><u>{{ revision_plan.project_title }}</u></span>
        </div>
        <div>
            <span><u>{{ new Date(revision_plan.date_start).getFullYear() }}</u></span>
        </div>
        <!-- <div class="peers">
            <input type=checkbox v-model="show_inactive">&nbsp;Show Inactive
        </div> -->

        <!-- {{ revision_plan }} -->

        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <!-- style="border-color: #000; border-width: 2px;" -->
                     <!-- table-sm  table-bordered -->
                    <table class="table table-hover" >
                        <thead>
                            <tr class="bg-primary text-white">
                                <th rowspan="2" style="width: 3%;"></th>
                                <th rowspan="2" style="width: 10%;">Strategy</th>
                                <th rowspan="2 text-center" style="width: 10%;">Performance Target/Indicator</th>
                                <th rowspan="2" style="width: 10%;" >Timeline</th>
                                <th rowspan="2" style="width: 15%;">Expected Output/ Outcome</th>
                                <th colspan="5" class="text-center" style="width: 20%;">Cost/Budget</th>
                                <th rowspan="2" style="width: 12%;">GAD Issue</th>
                                <th rowspan="2" style="width: 8%;">CCET</th>
                                <th rowspan="2" style="width: 10%;">Office Responsible</th>
                                <th rowspan="2" style="width: 2%;">Actions</th>
                            </tr>
                            <tr class="bg-primary text-white">
                                <th style="width: 5%;">PS</th>
                                <th style="width: 5%;">MOOE</th>
                                <th style="width: 5%;">FE</th>
                                <th style="width: 5%;">Capital Outlay</th>
                                <th style="width: 5%;">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(strategy,index) in form.localData" :key="index">
                                <!-- v-if="strategy.is_active === '1' || (strategy.is_active === '0' && show_inactive)" -->
                                <tr >
                                    <td style="cursor: pointer;">
                                        <input
                                            type="checkbox"
                                            :checked="Array.isArray(strategy.strategyProject) && strategy.strategyProject.length > 0 && strategy.is_active==='1'"
                                            @change="toggleStrategy(strategy.id, $event.target.checked, index)"
                                        /><br><br>
                                        <!-- {{ strategy.activity }} -->
                                        <!-- {{ strategy.activity.length }}
                                        {{ strategy.activity_visible }}
                                        {{ revision_plan.is_strategy_based }} -->
                                        <!-- strategy.activity && strategy.activity.length > 0 && strategy.activity_visible && revision_plan.is_strategy_based -->
                                        <!-- <button v-if="revision_plan.is_strategy_based==0" class="btn btn-primary text-white" @click="setStrategyActivityVisibility(strategy.activity_visible, index)">
                                            Activities
                                        </button><br><br> -->
                                        <!-- <button class="dropdown-item" @click="setVisibility(strategy.finance_visible, index)">
                                            <span v-if="parseFloat(strategy.finance_visible)<1">Set Cost/Budget</span>
                                            <span v-else>Hide Cost/Budget</span>

                                            @click="setVisibility(strategy.finance_visible, index)"
                                        </button> -->
                                    </td>
                                    <th  @click="setStrategyActivityVisibility(strategy.activity_visible, index)" style="cursor: pointer;">
                                        <Link>{{ strategy.description }}</Link>
                                    </th>
                                    <td><textarea class="form-control" type="text"
                                        v-model="strategy.target_indicator" @input="setUnsaved(true)"
                                        @change="updateStrategy(strategy)"
                                        v-if="strategy.is_active==1 && revision_plan.is_strategy_based==1"></textarea>
                                    </td>
                                    <td>
                                        <tr v-if="strategy.is_active==1 && revision_plan.is_strategy_based==1" style="">
                                            <td><b>Date from:</b></td>
                                            <td>
                                                <input class="form-control"
                                                    type="date"
                                                    v-model="strategy.date_from"
                                                    @input="setUnsaved(true)"
                                                    @change="updateStrategy(strategy)"
                                                    />
                                            </td>
                                        </tr>
                                        <tr v-if="strategy.is_active==1 && revision_plan.is_strategy_based==1">
                                            <td><b>Date to:</b></td>
                                            <td>
                                                <input class="form-control"
                                                    type="date"
                                                    v-model="strategy.date_to"
                                                    @input="setUnsaved(true)"
                                                    @change="updateStrategy(strategy)"
                                                    />
                                                    <br>
                                            </td>
                                        </tr>
                                    </td>
                                    <td v-if="strategy.strategyProject[0] && revision_plan.is_strategy_based==1" >
                                        <div v-for="outcome in strategy.strategyProject[0]?.expected_output || []">{{ outcome.description }}<hr></div>
                                        <div v-for="outcome in strategy.strategyProject[0]?.expected_outcome || []">{{ outcome.description }}<hr></div>
                                    </td>
                                    <td v-else>
                                        <div v-if="revision_plan.is_strategy_based==1" v-for="outcome in strategy.expected_output || []">{{ outcome.description }}<hr></div>
                                        <div v-if="revision_plan.is_strategy_based==1" v-for="outcome in strategy.expected_outcome || []">{{ outcome.description }}<hr></div>
                                    </td>
                                    <td @click="setVisibility(strategy.finance_visible, index)" style="cursor: pointer;">
                                        <span v-if="strategy.is_active==1 && revision_plan.is_strategy_based==1">{{ format_number_conv(strategy.ps_total,2,true) }} </span>
                                    </td>
                                    <td @click="setVisibility(strategy.finance_visible, index)" style="cursor: pointer;">
                                        <span v-if="strategy.is_active==1 && revision_plan.is_strategy_based==1">{{ format_number_conv(strategy.mooe_total,2,true) }}</span>
                                    </td>
                                    <td @click="setVisibility(strategy.finance_visible, index)" style="cursor: pointer;">
                                        <span v-if="strategy.is_active==1 && revision_plan.is_strategy_based==1">{{ format_number_conv(strategy.co_total,2,true) }}</span>
                                    </td>
                                    <td @click="setVisibility(strategy.finance_visible, index)" style="cursor: pointer;">
                                        <span v-if="strategy.is_active==1 && revision_plan.is_strategy_based==1">{{ format_number_conv(strategy.fe_total,2,true) }}</span>
                                    </td>
                                    <td @click="setVisibility(strategy.finance_visible, index)" style="cursor: pointer;">
                                        <span v-if="strategy.is_active==1 && revision_plan.is_strategy_based==1">{{ format_number_conv(strategy.ps_total + strategy.mooe_total + strategy.co_total,2,true) }}</span>
                                    </td>
                                    <td><textarea class="form-control"
                                        type="text"
                                        v-model="strategy.gad_issue"
                                        @input="setUnsaved(true)"
                                        @change="updateStrategy(strategy)"
                                        v-if="strategy.is_active==1 && revision_plan.is_strategy_based==1">
                                        </textarea>
                                    </td>
                                    <td><textarea class="form-control"
                                        type="text"
                                        v-model="strategy.ccet_code"
                                        @input="setUnsaved(true)"
                                        @change="updateStrategy(strategy)"
                                        v-if="strategy.is_active==1 && revision_plan.is_strategy_based==1"></textarea>
                                    </td>
                                    <td><textarea class="form-control"
                                        type="text"
                                        v-model="strategy.responsible"
                                        @input="setUnsaved(true)"
                                        @change="updateStrategy(strategy)"
                                        v-if="strategy.is_active==1 && revision_plan.is_strategy_based==1"></textarea>
                                    </td>
                                    <td>
                                        <div class="dropdown dropstart">
                                            <button class="btn btn-secondary btn-sm action-btn" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                    <path
                                                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                </svg>
                                            </button>
                                            <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                                <li v-if="revision_plan.is_strategy_based==1">
                                                    <button class="dropdown-item" @click="setVisibility(strategy.finance_visible, index)">
                                                        <span v-if="parseFloat(strategy.finance_visible)<1">Set Cost/Budget</span>
                                                        <span v-else>Hide Cost/Budget</span>
                                                    </button>
                                                </li>
                                                <li v-if="revision_plan.is_strategy_based==1">
                                                    <Link class="dropdown-item" :href="`/expected-outcomes-revised/${strategy.strategy_id}/strategy`"
                                                    v-if="strategy.is_active==1">
                                                        Expected Outcome id
                                                    </Link>
                                                    <!-- : {{strategy.id}} -->
                                                </li>
                                                <li v-if="revision_plan.is_strategy_based==1">
                                                    <Link class="dropdown-item" :href="`/expected-outputs-revised/${strategy.strategy_id}/strategy`"
                                                    v-if="strategy.is_active==1">
                                                        Expected Outputs id
                                                    </Link>
                                                </li>
                                                <li v-if="revision_plan.is_strategy_based==0">
                                                    <button class="dropdown-item" @click="setStrategyActivityVisibility(strategy.activity_visible, index)">
                                                        <span v-if="parseFloat(strategy.activity_visible)<1">Activities</span>
                                                        <span v-else>Hide Activities</span>
                                                    </button>
                                                </li>
                                                <!-- <li>
                                                    <a class="dropdown-item" :href="`/activities/${strategy.id}`">Activities</a>
                                                </li> -->
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <template v-if="strategy.finance_visible && strategy.is_active==1 && revision_plan.is_strategy_based==1">
                                    <tr >
                                        <td></td>
                                        <td colspan="13">
                                            &nbsp;&nbsp;&nbsp;
                                            <div class="peers">
                                                <div>
                                                    <table class="table table-sm table-bordered table-hover" style="border-color: #000; border-width: 2px;">
                                                        <thead>
                                                        <tr class="bg-primary text-white">
                                                            <th>Quarter/Period&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                                            <th colspan="1">Personnel Services</th>
                                                            <th colspan="1">MOOE&nbsp;</th>
                                                            <th colspan="1">Financial Expenses</th>
                                                            <th colspan="1">Capital Outlay</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <th>Q1:&nbsp;&nbsp;</th>
                                                            <td><input v-model="strategy.ps_q1" @input="setUnsaved(true)"
                                                                @change="calculateTotalStrategy(index, 'ps')"
                                                                class="form-control"/></td>
                                                            <td><input v-model="strategy.mooe_q1"
                                                                @input="setUnsaved(true)"
                                                                @change="calculateTotalStrategy(index, 'mooe')"
                                                                class="form-control"/></td>
                                                            <td><input v-model="strategy.fe_q1"
                                                                @input="setUnsaved(true)"
                                                                @change="calculateTotalStrategy(index, 'fe')"
                                                                class="form-control"/></td>
                                                            <td><input v-model="strategy.co_q1"
                                                                @input="setUnsaved(true)"
                                                                @change="calculateTotalStrategy(index, 'co')"
                                                                class="form-control"/></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Q2:&nbsp;&nbsp;</th>
                                                            <td><input v-model="strategy.ps_q2" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'ps')" class="form-control"/></td>
                                                            <td><input v-model="strategy.mooe_q2" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'mooe')" class="form-control"/></td>
                                                            <td><input v-model="strategy.fe_q2" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'fe')" class="form-control"/></td>
                                                            <td><input v-model="strategy.co_q2" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'co')" class="form-control"/></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Q3:&nbsp;&nbsp;</th>
                                                            <td><input v-model="strategy.ps_q3" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'ps')" class="form-control"/></td>
                                                            <td><input v-model="strategy.mooe_q3" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'mooe')" class="form-control"/></td>
                                                            <td><input v-model="strategy.fe_q3" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'fe')" class="form-control"/></td>
                                                            <td><input v-model="strategy.co_q3" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'co')" class="form-control"/></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Q4:&nbsp;&nbsp;</th>
                                                            <td><input v-model="strategy.ps_q4" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'ps')" class="form-control"/></td>
                                                            <td><input v-model="strategy.mooe_q4" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'mooe')" class="form-control"/></td>
                                                            <td><input v-model="strategy.fe_q4" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'fe')" class="form-control"/></td>
                                                            <td><input v-model="strategy.co_q4" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'co')" class="form-control"/></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Total:&nbsp;&nbsp;</th>
                                                            <td>{{ strategy.ps_total }}</td>
                                                            <td>{{ strategy.mooe_total }}</td>
                                                            <td>{{ strategy.fe_total }}</td>
                                                            <td>{{ strategy.co_total }}</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>

                                        </td>
                                    </tr>

                                </template>
                                <template v-if="strategy.activity && strategy.activity.length > 0 && strategy.activity_visible && revision_plan.is_strategy_based==0">
                                    <!-- v-if="strategy.is_active === '1' || (strategy.is_active === '0' && show_inactive)" -->
                                    <tr >
                                        <td></td>
                                        <td colspan="13">
                                            <table class="table table-sm table-borderless table-striped table-hover" style="border-color: #000; border-width: 2px;">
                                                <thead>
                                                    <tr class="bg-secondary text-white">
                                                        <th rowspan="2" style="width: 3%;"></th>
                                                        <th rowspan="2" style="width: 10%;">Activity</th>
                                                        <th rowspan="2 text-center" style="width: 10%;">Performance Target/Indicator</th>
                                                        <th rowspan="2" style="width: 10%;">Timeline</th>
                                                        <th rowspan="2" style="width: 15%;">Expected Output/ Outcome</th>
                                                        <th colspan="5" class="text-center" style="width: 20%;">Cost/Budget</th>
                                                        <th rowspan="2" style="width: 12%;">GAD Issue</th>
                                                        <th rowspan="2" style="width: 8%;">CCET</th>
                                                        <th rowspan="2" style="width: 10%;">Office Responsible</th>
                                                        <th rowspan="2" style="width: 2%;">Actions</th>
                                                    </tr>
                                                    <tr class="bg-secondary text-white">
                                                        <th style="width: 5%;">PS</th>
                                                        <th style="width: 5%;">MOOE</th>
                                                        <th style="width: 5%;">FE</th>
                                                        <th style="width: 5%;">Capital Outlay</th>
                                                        <th style="width: 5%;">Total</th>
                                                    </tr>
                                                </thead>

                                                <template v-for="(activity, activity_index) in strategy.activity" :key="activity_index">
                                                    <!-- v-if="activity.is_active === '1' || (activity.is_active === '0' && show_inactive)" -->
                                                    <tr >

                                                        <td @click="setActivityVisibility(activity.finance_visible,index, activity_index)" style="cursor: pointer;">
                                                            <input
                                                                type="checkbox"
                                                                :checked="Array.isArray(activity.activityProject) && activity.activityProject.length > 0 && activity.is_active==='1'"
                                                                @change=" toggleActivity(activity.id, $event.target.checked, activity_index, index)"
                                                            />
                                                            <!-- {{ activity }} -->
                                                        </td>
                                                        <td @click="setActivityVisibility(activity.finance_visible,index, activity_index)" style="cursor: pointer;">{{ activity.description }}</td>
                                                        <td>
                                                            <div v-for="outcome in activity.activityProject[0]?.expected_output || []">{{ outcome.target_indicator }}<hr></div>
                                                        </td>
                                                        <td>
                                                            <div v-if="activity.is_active==1">
                                                                <div><b>Date from:</b>
                                                                    <input class="form-control"
                                                                        type="date"
                                                                        v-model="activity.date_from"
                                                                        @input="setUnsaved(true)"
                                                                        @change="updateActivity(activity, activity_index, index)"
                                                                        />
                                                                </div>
                                                                <div><b>Date to:</b>
                                                                    <input class="form-control"
                                                                        type="date"
                                                                        v-model="activity.date_to"
                                                                        @input="setUnsaved(true)"
                                                                        @change="updateActivity(activity, activity_index, index)"
                                                                        />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div v-for="outcome in activity.activityProject[0]?.expected_output || []">{{ outcome.description }}<hr></div>
                                                            <div v-for="outcome in activity.activityProject[0]?.expected_outcome || []">{{ outcome.description }}<hr></div>
                                                            <!-- {{ activity.activityProject[0].expected_output }} -->
                                                        </td>
                                                        <td @click="setActivityVisibility(activity.finance_visible,index, activity_index)">
                                                            <span v-if="activity.is_active==1">{{ format_number_conv(activity.ps_total,2,true) }} </span>
                                                        </td>
                                                        <td @click="setActivityVisibility(activity.finance_visible,index, activity_index)">
                                                            <span v-if="activity.is_active==1">{{ format_number_conv(activity.mooe_total,2,true) }}</span>
                                                        </td>
                                                        <td @click="setActivityVisibility(activity.finance_visible,index, activity_index)">
                                                            <span v-if="activity.is_active==1">{{ format_number_conv(activity.fe_total,2,true) }}</span>
                                                        </td>
                                                        <td @click="setActivityVisibility(activity.finance_visible,index, activity_index)">
                                                            <span v-if="activity.is_active==1">{{ format_number_conv(activity.co_total,2,true) }}</span>
                                                        </td>
                                                        <td>
                                                            <span v-if="activity.is_active==1">{{ format_number_conv(activity.ps_total + activity.mooe_total + activity.fe_total + activity.co_total,2,true) }}</span>
                                                        </td>
                                                        <td><textarea class="form-control"
                                                            type="text"
                                                            v-model="activity.gad_issue"
                                                            @input="setUnsaved(true)"
                                                            @change="updateActivity(activity, activity_index, index)"
                                                            v-if="activity.is_active==1"></textarea>

                                                        </td>
                                                        <td><textarea class="form-control"
                                                            type="text"
                                                            v-model="activity.ccet_code"
                                                            @input="setUnsaved(true)"
                                                            @change="updateActivity(activity, activity_index, index)"
                                                            v-if="activity.is_active==1"></textarea>
                                                        </td>
                                                        <td><textarea class="form-control"
                                                            type="text"
                                                            v-model="activity.responsible"
                                                            @input="setUnsaved(true)"
                                                            @change="updateActivity(activity, activity_index, index)"
                                                            v-if="activity.is_active==1"></textarea>
                                                        </td>
                                                        <td>
                                                            <div class="dropdown dropstart">
                                                                <button class="btn btn-secondary btn-sm action-btn" type="button"
                                                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                        fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                                    </svg>
                                                                </button>
                                                                <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                                                    <li>
                                                                        <button class="dropdown-item" @click="setActivityVisibility(activity.finance_visible,index, activity_index)">
                                                                            <span v-if="parseFloat(activity.finance_visible)<1">Set Cost/Budget</span>
                                                                            <span v-else>Hide Cost/Budget</span>
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <Link class="dropdown-item"
                                                                        :href="`/expected-outputs-revised/${activity.activity_id}/activity`"
                                                                        v-if="activity.is_active==1">
                                                                            Expected Output {{activity.activity_id}}
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link class="dropdown-item"
                                                                        :href="`/expected-outcomes-revised/${activity.activity_id}/activity`"
                                                                        v-if="activity.is_active==1">
                                                                            Expected Outcome {{activity.activity_id}}
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>


                                                    <template v-if="activity.finance_visible && activity.is_active==1">
                                                        <tr >
                                                            <td></td>
                                                            <td colspan="14">
                                                                &nbsp;&nbsp;&nbsp;
                                                                <div class="peers">
                                                                    <div>
                                                                        <table class="table table-sm table-bordered table-hover" style="border-color: #000; border-width: 2px;">
                                                                            <thead>
                                                                            <tr class="bg-primary text-white">
                                                                                <th>Quarter/Period&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                                                                <th colspan="1">Personnel Services</th>
                                                                                <th colspan="1">MOOE&nbsp;</th>
                                                                                <th colspan="1">FE&nbsp;</th>
                                                                                <th colspan="1">Capital Outlay</th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <tr>
                                                                                <th>Q1:&nbsp;&nbsp;</th>
                                                                                <td><input v-model="activity.ps_q1" @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'ps')"
                                                                                    class="form-control"/></td>
                                                                                <td><input v-model="activity.mooe_q1"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'mooe')"
                                                                                    class="form-control"/></td>
                                                                                <td><input v-model="activity.fe_q1"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'fe')"
                                                                                    class="form-control"/></td>
                                                                                <td><input v-model="activity.co_q1"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'co')"
                                                                                    class="form-control"/></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Q2:&nbsp;&nbsp;</th>
                                                                                <td><input v-model="activity.ps_q2"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'ps')"
                                                                                    class="form-control"/></td>
                                                                                <td><input v-model="activity.mooe_q2"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'mooe')"
                                                                                    class="form-control"/></td>
                                                                                <td><input v-model="activity.fe_q2"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'fe')"
                                                                                    class="form-control"/></td>
                                                                                <td><input v-model="activity.co_q2"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'co')"
                                                                                    class="form-control"/></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Q3:&nbsp;&nbsp;</th>
                                                                                <td><input v-model="activity.ps_q3"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'ps')"
                                                                                    class="form-control"/>
                                                                                </td>
                                                                                <td><input v-model="activity.mooe_q3"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'mooe')"
                                                                                    class="form-control"/>
                                                                                </td>
                                                                                <td><input v-model="activity.fe_q3"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'fe')"
                                                                                    class="form-control"/></td>
                                                                                <td><input v-model="activity.co_q3"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'co')"
                                                                                    class="form-control"/>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Q4:&nbsp;&nbsp;</th>
                                                                                <td><input v-model="activity.ps_q4"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'ps')"
                                                                                    class="form-control"/>
                                                                                </td>
                                                                                <td><input v-model="activity.mooe_q4"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'mooe')"
                                                                                    class="form-control"/>
                                                                                </td>
                                                                                <td><input v-model="activity.fe_q4"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'fe')"
                                                                                    class="form-control"/></td>
                                                                                <td><input v-model="activity.co_q4"
                                                                                    @input="setUnsaved(true)"
                                                                                    @change="calculateTotalActivity(activity, index, activity_index, 'co')"
                                                                                    class="form-control"/>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Total:&nbsp;&nbsp;</th>
                                                                                <td style="font-weight: bold">{{ format_number_conv(activity.ps_total,2,true) }}</td>
                                                                                <td style="font-weight: bold">{{ format_number_conv(activity.mooe_total,2,true) }}</td>
                                                                                <td style="font-weight: bold">{{ format_number_conv(activity.fe_total,2,true) }}</td>
                                                                                <td style="font-weight: bold">{{ format_number_conv(activity.co_total,2,true) }}</td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>

                                                                </div>

                                                            </td>
                                                        </tr>

                                                    </template>
                                                </template>

                                            </table>
                                        </td>
                                    </tr>

                                </template>

                            </template>

                        </tbody>
                    </table>
                </div>
                <!-- {{ form.localData[0] }} -->
            </div>
        </div>

    </div>

</template>
<script>
import { useForm } from "@inertiajs/vue3";
export default {
    props: {
        data: Object,
        revision_plan: Object
    },
    data() {
        return {
            form: useForm({
                localData: JSON.parse(JSON.stringify(this.data)),
            }),
            timeouts: {}, // Store timeouts for activities
            show_inactive: true,
            unsaved: false,

        };
    },
    watch: {
        data(newValue) {
            this.form.localData = JSON.parse(JSON.stringify(newValue)); // Keep local copy in sync
        }
    },
    mounted(){
        window.addEventListener('beforeunload', this.handleBeforeUnload);
    },
    beforeUnmount() {
        window.removeEventListener('beforeunload', this.handleBeforeUnload);
    },
    methods: {
        calculateTotalStrategy(index, allocation_type) {
            clearTimeout(this.timeouts[`strategy_${index}_${allocation_type}`]);
            this.form.localData[index][`${allocation_type}_total`] =
                (parseFloat(this.form.localData[index][`${allocation_type}_q1`]) || 0) +
                (parseFloat(this.form.localData[index][`${allocation_type}_q2`]) || 0) +
                (parseFloat(this.form.localData[index][`${allocation_type}_q3`]) || 0) +
                (parseFloat(this.form.localData[index][`${allocation_type}_q4`]) || 0);
            this.updateStrategy(this.form.localData[index]);
        },
        calculateTotalActivity(activity, strategyIndex, activityIndex, type) {
            clearTimeout(this.timeouts[`activity_${strategyIndex}_${activityIndex}_${type}`]);

            this.timeouts[`activity_${strategyIndex}_${activityIndex}_${type}`] = setTimeout(() => {
                this.form.localData[strategyIndex].activity[activityIndex][`${type}_total`] =
                    (parseFloat(this.form.localData[strategyIndex].activity[activityIndex][`${type}_q1`]) || 0) +
                    (parseFloat(this.form.localData[strategyIndex].activity[activityIndex][`${type}_q2`]) || 0) +
                    (parseFloat(this.form.localData[strategyIndex].activity[activityIndex][`${type}_q3`]) || 0) +
                    (parseFloat(this.form.localData[strategyIndex].activity[activityIndex][`${type}_q4`]) || 0);

                console.log(
                    `Activity Total updated for ${type}:`,
                    this.form.localData[strategyIndex].activity[activityIndex][`${type}_total`]
                );
                this.updateActivity(activity, activityIndex, strategyIndex)
            }, 1000);
        },
        setVisibility(is_visible, index) {
            // this.$set(this.form.monthly_ratings, index, { ...this.form.monthly_ratings[index], visible: !is_visible });
            // alert("is_visible: "+is_visible + " index: "+index)
            var act=is_visible;
            if(act<1){
                act=1;
            }else{
                act=0;
            }
            this.form.localData[index].finance_visible = !is_visible;
        },
        setStrategyActivityVisibility(activity_visible, index){
            // alert("activity_visible: "+activity_visible + " index: "+index)
            var act=activity_visible;
            if(act<1){
                act=1;
            }else{
                act=0;
            }
            this.form.localData[index].activity_visible = act;
        },
        setActivityVisibility(is_visible, strategyIndex, activityIndex) {
            // Toggle the visibility for the specific activity
            this.form.localData[strategyIndex].activity[activityIndex].finance_visible = !is_visible;
        },
        async toggleStrategy(strategyId, status, index) {

                const payload = {
                    id: strategyId,
                    type: "add or remove",
                    idrevplan: this.revision_plan.id
                };
                try{
                    if (status) {
                        this.form.localData[index].is_active='1';
                        await this.createStrategy(payload);
                        this.refreshData();
                    } else {
                        this.form.localData[index].is_active='0';
                        await this.deleteStrategy(payload);
                        this.refreshData();
                    }
                }catch(error){
                    console.log(error)
                }



        },
        async updateStrategy(strategy){
            if(strategy.is_active){
                const payload ={
                    id: strategy.id,
                    idrevplan: this.revision_plan.id,
                    // strategy_id: strategy.strategy_id,
                    project_id: strategy.project_id,
                    target_indicator: strategy.target_indicator,
                    date_from: strategy.date_from,
                    date_to: strategy.date_to,
                    ps_q1: strategy.ps_q1,
                    ps_q2: strategy.ps_q2,
                    ps_q3: strategy.ps_q3,
                    ps_q4: strategy.ps_q4,
                    mooe_q1: strategy.mooe_q1,
                    mooe_q2: strategy.mooe_q2,
                    mooe_q3: strategy.mooe_q3,
                    mooe_q4: strategy.mooe_q4,
                    co_q1: strategy.co_q1,
                    co_q2: strategy.co_q2,
                    co_q3: strategy.co_q3,
                    co_q4: strategy.co_q4,
                    fe_q1: strategy.fe_q1,
                    fe_q2: strategy.fe_q2,
                    fe_q3: strategy.fe_q3,
                    fe_q4: strategy.fe_q4,
                    gad_issue: strategy.gad_issue,
                    ccet_code: strategy.ccet_code,
                    responsible: strategy.responsible,
                    is_active: strategy.is_active,
                    type: "update",
                }
                clearTimeout(this.timeout);

                setTimeout(async () => {
                    await this.createStrategy(payload);
                    this.unsaved=false
                }, 2000);
            }else{
                this.unsaved=false
                alert("Strategy is inactive")
            }


        },
        async updateActivity(activity, activityIndex, strategyIndex) {
            if(activity.is_active){
                // const activity = this.form.localData[strategyIndex].activity[activityIndex];
                const payload = {
                    id: activity.id,
                    // strategy_id: this.form.localData[strategyIndex].id,
                    idrevplan: this.revision_plan.id,
                    project_id: activity.project_id,
                    target_indicator: activity.target_indicator,
                    date_from: activity.date_from,
                    date_to: activity.date_to,
                    ps_q1: activity.ps_q1,
                    ps_q2: activity.ps_q2,
                    ps_q3: activity.ps_q3,
                    ps_q4: activity.ps_q4,
                    mooe_q1: activity.mooe_q1,
                    mooe_q2: activity.mooe_q2,
                    mooe_q3: activity.mooe_q3,
                    mooe_q4: activity.mooe_q4,
                    co_q1: activity.co_q1,
                    co_q2: activity.co_q2,
                    co_q3: activity.co_q3,
                    co_q4: activity.co_q4,
                    fe_q1: activity.fe_q1,
                    fe_q2: activity.fe_q2,
                    fe_q3: activity.fe_q3,
                    fe_q4: activity.fe_q4,
                    gad_issue: activity.gad_issue,
                    ccet_code: activity.ccet_code,
                    responsible: activity.responsible,
                    is_active: activity.is_active,
                    type: "update",
                };

                // Clear existing timeout to prevent multiple calls
                clearTimeout(this.timeouts[`activity_${strategyIndex}_${activityIndex}`]);

                this.timeouts[`activity_${strategyIndex}_${activityIndex}`] = setTimeout(async () => {
                    try {
                        await this.createActivity(payload);
                        console.log(`Activity updated: ${activity.id}`);
                        this.unsaved = false; // Reset unsaved flag after successful save
                    } catch (error) {
                        console.error('Error updating activity:', error);
                    }
                }, 2000); // Wait 2 seconds before saving
            }else{
                this.unsaved=false
                alert("Activity is inactive")
            }
        },
        async toggleActivity(activityId, status, activity_index, strat_index) {
            const payload = {
                id: activityId,
                idrevplan: this.revision_plan.id
            };
            if (status) {
                this.form.localData[strat_index].activity[activity_index].is_active='1';
                await this.createActivity(payload);
                this.refreshData();
            } else {
                this.form.localData[strat_index].activity[activity_index].is_active='0';
                await this.deleteActivity(payload);
                this.refreshData();
            }
        },

        async createStrategy(payload) {
            try {
                const response = await axios.post(`/strategies-project/r/create`, payload);
                console.log(response.data);
                // this.refreshData();
            } catch (error) {
                console.error('Error creating strategy:', error);
            }
        },
        async deleteStrategy(payload) {
            try {
                const response = await axios.delete(`/strategies-project/r/delete`, { data: payload });
                console.log(response.data);
                this.refreshData();
            } catch (error) {
                console.error('Error deleting strategy:', error);
            }
        },
        async createActivity(payload) {
            // alert("naabiot");
            try {
                const response = await axios.post(`/activities-project/r/create`, payload);
                console.log(response.data);
                // this.refreshData();
            } catch (error) {
                console.error('Error creating activity:', error);
            }
        },
        async deleteActivity(payload) {
            try {
                const response = await axios.delete(`/activities-project/r/delete`, { data: payload });
                console.log(response.data);
                this.refreshData();
            } catch (error) {
                console.error('Error deleting activity:', error);
            }
        },
        async refreshData() {
            try {
                const response = await axios.get(`/strategies-and-activities/refresh/data/now/${this.revision_plan.id}`);
                // this.data = response.data;
                this.form.localData = response.data;
            } catch (error) {
                console.error('Error refreshing data:', error);
            }
        },
        setUnsaved(status){
            this.unsaved = status
        },
        handleBeforeUnload(event) {
            if (this.unsaved) {
                event.preventDefault();
                event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
            }
        }
    }
}

</script>
<style>
textarea {
	/* width: 100%;
    top: 0; left: 0; right: 0; bottom: 0;
    position: absolute;
	resize: none;
	-webkit-box-sizing: border-box; /* <=iOS4, <= Android  2.3 */
      /* -moz-box-sizing: border-box; /* FF1+ */
           /* box-sizing: border-box; Chrome, IE8, Opera, Safari 5.1 */

    width: 100%;
    top: 0; left: 0; right: 0; bottom: 0;
    position: absolute;
    resize: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    /* Hide scrollbar */
    overflow: hidden; /* Hides the scrollbar visually */
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none;

    /* Auto-resize height */
    height: auto;
    overflow: hidden;
    white-space: pre-wrap;
}
table {
    border-collapse: collapse;
}

table, th, td {
    position: relative;
    border: 1px solid black;
}

/* Adjust cell height based on content */
/* td { */
    /* padding: 0px;
    vertical-align: top; */
/* } */
</style>


