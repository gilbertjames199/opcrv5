<template>
    <tr >
                                    <td @click="setVisibility(strategy.finance_visible, index)" style="cursor: pointer;">
                                        <input
                                            type="checkbox"
                                            :checked="Array.isArray(strategy.strategyProject) && strategy.strategyProject.length > 0 && strategy.is_active==='1'"
                                            @change="toggleStrategy(strategy.id, $event.target.checked, index)"
                                        />
                                    </td>
                                    <th @click="setVisibility(strategy.finance_visible, index)" style="cursor: pointer;">{{ strategy.description }}</th>
                                    <td><input class="form-control" type="text"
                                        v-model="strategy.target_indicator" @input="setUnsaved(true)"
                                        @change="updateStrategy(strategy)"
                                        v-if="strategy.is_active==1"/></td>
                                    <td><input class="form-control"
                                        type="date"
                                        v-model="strategy.date_from"
                                        @input="setUnsaved(true)"
                                        @change="updateStrategy(strategy)"
                                        v-if="strategy.is_active==1"/>
                                    </td>
                                    <td></td>
                                    <td>
                                        <span v-if="strategy.is_active==1">{{ format_number_conv(strategy.ps_total,2,true) }} </span>
                                    </td>
                                    <td>
                                        <span v-if="strategy.is_active==1">{{ format_number_conv(strategy.mooe_total,2,true) }}</span>
                                    </td>
                                    <td>
                                        <span v-if="strategy.is_active==1">{{ format_number_conv(strategy.co_total,2,true) }}</span>
                                    </td>
                                    <td>
                                        <span v-if="strategy.is_active==1">{{ format_number_conv(strategy.ps_total + strategy.mooe_total + strategy.co_total,2,true) }}</span>
                                    </td>
                                    <td><input class="form-control"
                                        type="text"
                                        v-model="strategy.gad_issue"
                                        @input="setUnsaved(true)"
                                        @change="updateStrategy(strategy)"
                                        v-if="strategy.is_active==1"/>

                                    </td>
                                    <td><input class="form-control"
                                        type="text"
                                        v-model="strategy.ccet_code"
                                        @input="setUnsaved(true)"
                                        @change="updateStrategy(strategy)"
                                        v-if="strategy.is_active==1"/>
                                    </td>
                                    <td><input class="form-control"
                                        type="text"
                                        v-model="strategy.responsible"
                                        @input="setUnsaved(true)"
                                        @change="updateStrategy(strategy)"
                                        v-if="strategy.is_active==1"/>
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
                                                    <button class="dropdown-item" @click="setVisibility(strategy.finance_visible, index)">
                                                        <span v-if="parseFloat(strategy.finance_visible)<1">Set Cost/Budget</span>
                                                        <span v-else>Hide Cost/Budget</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" :href="`/activities/${strategy.id}`">Activities</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <template v-if="strategy.finance_visible && strategy.is_active==1">
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
                                                            <td><input v-model="strategy.co_q1"
                                                                @input="setUnsaved(true)"
                                                                @change="calculateTotalStrategy(index, 'co')"
                                                                class="form-control"/></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Q2:&nbsp;&nbsp;</th>
                                                            <td><input v-model="strategy.ps_q2" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'ps')" class="form-control"/></td>
                                                            <td><input v-model="strategy.mooe_q2" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'mooe')" class="form-control"/></td>
                                                            <td><input v-model="strategy.co_q2" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'co')" class="form-control"/></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Q3:&nbsp;&nbsp;</th>
                                                            <td><input v-model="strategy.ps_q3" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'ps')" class="form-control"/></td>
                                                            <td><input v-model="strategy.mooe_q3" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'mooe')" class="form-control"/></td>
                                                            <td><input v-model="strategy.co_q3" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'co')" class="form-control"/></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Q4:&nbsp;&nbsp;</th>
                                                            <td><input v-model="strategy.ps_q4" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'ps')" class="form-control"/></td>
                                                            <td><input v-model="strategy.mooe_q4" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'mooe')" class="form-control"/></td>
                                                            <td><input v-model="strategy.co_q4" @input="setUnsaved(true)" @change="calculateTotalStrategy(index, 'co')" class="form-control"/></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Total:&nbsp;&nbsp;</th>
                                                            <td><input v-model="strategy.ps_total" class="form-control"/></td>
                                                            <td><input v-model="strategy.mooe_total" class="form-control"/></td>
                                                            <td><input v-model="strategy.co_total" class="form-control"/></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>

                                        </td>
                                    </tr>

                                </template>
</template>
