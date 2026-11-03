<template>
    <Head>
        <title>Budgetary Requirements</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h2><u>{{ revs[0].project_title }}</u></h2>
            <div>
                <!-- <Link v-if="revs[0].scope==='GAS'" :href="`/revision/general/administration/services/${revs[0].FFUNCCOD}/plan`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Link>
                <Link v-if="revs[0].idmfo==0 && revs[0].scope!=='GAS'" :href="`/revision/${revs[0].idpaps}`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Link>
                <Link v-if="revs[0].idpaps==0 && revs[0].scope!=='GAS'" :href="`/mforevision/${revs[0].idmfo}`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Link> -->
                <a @click.prevent="goBack" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </a>
            </div>
        </div>
        <div>
            <b>GAD Version:</b>&nbsp;<u>{{ gad_version }}</u>
        </div>
        <div class="peers fxw-nw jc-sb ai-c">
            <h4>Budgetary Requirements </h4>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/budget/create/${idrev}`">Add Budget Requirement</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>


        </div>

        <div class="masonry-sizer col-md-12" v-if="revs[0].scope!=='GAS'">
            <table class="table table-hover table-bordered border-dark">
                <thead>
                    <tr class="bg-secondary text-white">
                        <td>Description</td>
                        <td>Total Amount (from Implementation Plan)</td>
                        <td>Total Amount in Budgetary Requirements</td>
                        <td>Remarks</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Capital Outlay</td>
                        <td>{{ format_number_conv(imp_co,2,true) }}</td>
                        <td>{{ format_number(parseFloat(s_cap_gad)+parseFloat(s_cap_non),2,true) }}</td>
                        <td>
                            <span v-if="imp_co!=(parseFloat(s_cap_gad)+parseFloat(s_cap_non))" style="color:red">
                                WARNING: Total capital outlay amount (of project) is not equal to total capital outlay amount in budgetary requirements!
                                <span v-if="imp_co>(parseFloat(s_cap_gad)+parseFloat(s_cap_non))">
                                    <br>Add {{ getDifference(imp_co,(parseFloat(s_cap_gad)+parseFloat(s_cap_non))) }} to budgetary requirements
                                </span>
                                <span v-if="imp_co<(parseFloat(s_cap_gad)+parseFloat(s_cap_non))">
                                    <br>Remove {{ getDifference((parseFloat(s_cap_gad)+parseFloat(s_cap_non)),imp_co)  }} from budgetary requirements for capital outlay
                                </span>
                            </span>
                            <span v-else>OK</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Maintenance and Other Operating Expenses</td>
                        <td>{{ format_number_conv(imp_mooe,2,true) }}</td>
                        <td>{{ format_number(parseFloat(s_mooe_gad)+parseFloat(s_mooe_non),2,true) }}</td>
                        <td>
                            <span v-if="imp_mooe!=(parseFloat(s_mooe_gad)+parseFloat(s_mooe_non))" style="color:red">
                                WARNING: Total MOOE amount (of project) is not equal to total MOOE amount in budgetary requirements!
                                <span v-if="imp_mooe>(parseFloat(s_mooe_gad)+parseFloat(s_mooe_non))">
                                    <br>Add {{ getDifference(imp_mooe,(parseFloat(s_mooe_gad)+parseFloat(s_mooe_non))) }} to budgetary requirements
                                </span>
                                <span v-if="imp_mooe<(parseFloat(s_mooe_gad)+parseFloat(s_mooe_non))">
                                    <br>Remove {{ getDifference((parseFloat(s_mooe_gad)+parseFloat(s_mooe_non)),imp_mooe)  }} from budgetary requirements for MOOE
                                </span>
                            </span>
                            <span v-else>OK</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Personnel Services</td>
                        <td>{{ format_number_conv(imp_ps,2,true) }}</td>
                        <td>{{ format_number(parseFloat(s_ps_gad)+parseFloat(s_ps_non),2,true) }}</td>
                        <td>
                            <span v-if="imp_ps!=(parseFloat(s_ps_gad)+parseFloat(s_ps_non))" style="color:red">
                                WARNING: Total personnel services amount (of project) is not equal to total personnel services amount in budgetary requirements!
                                <span v-if="imp_ps>(parseFloat(s_ps_gad)+parseFloat(s_ps_non))">
                                    <br>Add {{ getDifference(imp_ps,(parseFloat(s_ps_gad)+parseFloat(s_ps_non))) }} to budgetary requirements
                                </span>
                                <span v-if="imp_ps<(parseFloat(s_ps_gad)+parseFloat(s_ps_non))">
                                    <br>Remove {{ getDifference((parseFloat(s_ps_gad)+parseFloat(s_ps_non)),imp_ps)  }} from budgetary requirements for personnel services
                                </span>
                            </span>
                            <span v-else>OK</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Financial Expenses</td>
                        <td>{{ format_number_conv(imp_fe,2,true) }}</td>
                        <td>{{ format_number(parseFloat(s_fe_gad)+parseFloat(s_fe_non),2,true) }}</td>
                        <td>
                            <span v-if="imp_fe!=(parseFloat(s_fe_gad)+parseFloat(s_fe_non))" style="color:red">
                                WARNING: Total financial expenses amount (of project) is not equal to total financial expenses amount in budgetary requirements!
                                <span v-if="imp_fe>(parseFloat(s_fe_gad)+parseFloat(s_fe_non))">
                                    <br>Add {{ getDifference(imp_fe,(parseFloat(s_fe_gad)+parseFloat(s_fe_non))) }} to budgetary requirements
                                </span>
                                <span v-if="imp_fe<(parseFloat(s_fe_gad)+parseFloat(s_fe_non))">
                                    <br>Remove {{ getDifference((parseFloat(s_fe_gad)+parseFloat(s_fe_non)),imp_fe)  }} from budgetary requirements for financial expenses
                                </span>
                            </span>
                            <span v-else>OK</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Total Amount</th>
                        <th>{{ format_number_conv(implementation_plan,2,true) }}</th>
                        <th>{{ format_number_conv(BUD_total,2,true) }}</th>
                        <th>
                            <span v-if="implementation_plan!=BUD_total" style="color:red">
                                WARNING: Total amount (of project) is not equal to total amount in budgetary requirements!
                                <span v-if="implementation_plan>BUD_total">
                                    <br>Add {{ getDifference(implementation_plan,BUD_total) }} to budgetary requirements
                                </span>
                                <span v-if="implementation_plan<BUD_total">
                                    <br>Remove {{ getDifference(BUD_total,implementation_plan)  }} from budgetary requirements
                                </span>
                            </span>
                            <span v-else>OK</span>
                        </th>
                    </tr>
                    <tr v-if="gad_version=='1'">
                        <td>GAD Attributed Amount {{gad_version}}</td>
                        <td>{{ format_number_conv(revs_attributed,2,true) }}</td>
                        <td>{{ format_number_conv(GAD_total,2,true) }}</td>
                        <td>
                            <!-- <span v-if="revs_attributed!=GAD_total" style="color:red"></span> -->
                            <span v-if="parseFloat(format_number_conv(revs_attributed,2,false))!=parseFloat(format_number_conv(GAD_total,2,false))" style="color:red">
                                <!-- {{ revs_attributed }} is not equal to {{ GAD_total }}! -->
                                WARNING: Total GAD Attributed amount is not equal to Total GAD Attributed Budget!

                                <span v-if="((parseFloat(revs[0].hgdg_score)/20) * parseFloat(implementation_plan))>GAD_total">
                                    <br>Add {{ getDifference(revs_attributed,GAD_total) }} to total GAD Amount in budgetary requirements
                                </span>
                                <span v-if="((parseFloat(revs[0].hgdg_score)/20) * parseFloat(implementation_plan))<GAD_total">
                                    <br>Remove {{ getDifference(GAD_total,revs_attributed)  }} from total GAD Amount in budgetary requirements
                                </span>
                            </span>
                            <span v-else>OK</span>
                        </td>
                    </tr>
                </tbody>

            </table>
            <!-- {{ format_number_conv(GAD_total,2,true) }} /
            {{ format_number_conv(revs[0].attributed_amount,2,true) }} -->
        </div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">

                        <table class="table table-hover table-bordered border-dark">
                            <thead>
                                <tr class="bg-secondary text-white">
                                    <th colspan="3">Particular</th>
                                    <th>Account Code</th>
                                    <th>Amount (Php)</th>
                                    <th>Source</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!--MOOE-->
                                <tr v-if="(mooe_gad.length>0 || mooe_non.length>0) ">
                                    <th colspan="3" >Maintenance, Operating, and Other Expenses</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--MOOE-GAD-->
                                <tr v-if="mooe_gad.length>0 & gad_version=='1'" >
                                    <td></td>
                                    <th colspan="2" >GAD </th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="mooe_gad.length>0  & gad_version=='1'" v-for="dat in mooe_gad">
                                    <td></td>
                                    <td></td>
                                    <td>{{ dat.particulars }}</td>
                                    <td>{{ dat.account_code }}</td>
                                    <td class="text-end">{{ format_number_conv(dat.amount,2,true) }}</td>
                                    <td >{{ dat.source }}</td>
                                    <td>
                                        <div class="dropdown dropstart" >
                                            <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                </svg>
                                            </button>
                                            <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                                <li><Link class="dropdown-item" :href="`/budget/${dat.id}`">Budget Requirements</Link></li>
                                                <li><Link class="dropdown-item" :href="`/implementation/${dat.id}`">Implementation Plan</Link></li>
                                                <li><Link class="dropdown-item" :href="`/budget/edit/${dat.id}`">Edit</Link></li>
                                                <li><Link class="text-danger dropdown-item" @click="deleteBudget(dat.id)">Delete</Link></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="mooe_gad.length>0  & gad_version=='1'" >
                                    <td></td>
                                    <td></td>
                                    <th colspan="2" >SUB TOTAL (GAD) </th>
                                    <th class="text-end">{{ format_number_conv(s_mooe_gad,2,true) }}</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--MOOE-NON-GAD-->
                                <tr v-if="mooe_non.length>0  & gad_version=='1'" >
                                    <td></td>
                                    <th colspan="2" >NON-GAD </th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="mooe_non.length>0" v-for="dat in mooe_non">
                                    <td></td>
                                    <td></td>
                                    <td>{{ dat.particulars }}</td>
                                    <td>{{ dat.account_code }}</td>
                                    <td class="text-end">{{ format_number_conv(dat.amount,2,true) }}</td>
                                    <td>{{ dat.source }}</td>
                                    <td>
                                        <div class="dropdown dropstart" >
                                            <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                </svg>
                                            </button>
                                            <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                                <li><Link class="dropdown-item" :href="`/budget/${dat.id}`">Budget Requirements</Link></li>
                                                <li><Link class="dropdown-item" :href="`/implementation/${dat.id}`">Implementation Plan</Link></li>
                                                <li><Link class="dropdown-item" :href="`/budget/edit/${dat.id}`">Edit</Link></li>
                                                <li><Link class="text-danger dropdown-item" @click="deleteBudget(dat.id)">Delete</Link></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="mooe_non.length>0  & gad_version=='1'" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2" >SUB TOTAL (NON-GAD) </th>
                                    <th class="text-end">{{ format_number_conv(s_mooe_non,2,true) }}</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--TOTAL MOOE-->
                                <tr v-if="mooe_gad.length>0 || mooe_non.length>0" >
                                    <td></td>
                                    <th colspan="3" >SUB TOTAL (MOOE) </th>
                                    <th class="text-end">{{ getSum(s_mooe_gad,s_mooe_non) }}</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--CAPITAL OUTLAY-->
                                <tr v-if="cap_gad.length>0 || cap_non.length>0">
                                    <th colspan="3" >Capital Outlay</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--Capital Outlay GAD-->
                                <tr v-if="cap_gad.length>0  & gad_version=='1'" >
                                    <td></td>
                                    <th colspan="2" >GAD </th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="cap_gad.length>0  & gad_version=='1'" v-for="dat in cap_gad">
                                    <td></td>
                                    <td></td>
                                    <td>{{ dat.particulars }}</td>
                                    <td>{{ dat.account_code }}</td>
                                    <td class="text-end">{{ format_number_conv(dat.amount,2,true) }}</td>
                                    <td>{{ dat.source }}</td>
                                    <td>
                                        <div class="dropdown dropstart" >
                                            <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                </svg>
                                            </button>
                                            <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                                <li><Link class="dropdown-item" :href="`/budget/${dat.id}`">Budget Requirements</Link></li>
                                                <li><Link class="dropdown-item" :href="`/implementation/${dat.id}`">Implementation Plan</Link></li>
                                                <li><Link class="dropdown-item" :href="`/budget/edit/${dat.id}`">Edit</Link></li>
                                                <li><Link class="text-danger dropdown-item" @click="deleteBudget(dat.id)">Delete</Link></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="cap_gad.length>0  & gad_version=='1'" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2" >SUB TOTAL (GAD) </th>
                                    <th class="text-end">{{ format_number_conv(s_cap_gad,2,true) }}</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--Capital Outlay NON-GAD-->
                                <tr v-if="cap_non.length>0  & gad_version=='1'" >
                                    <td></td>
                                    <th colspan="2" >NON-GAD </th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="cap_non.length>0" v-for="dat in cap_non">
                                    <td></td>
                                    <td></td>
                                    <td>{{ dat.particulars }}</td>
                                    <td>{{ dat.account_code }}</td>
                                    <td class="text-end">{{ format_number_conv(dat.amount,2,true) }}</td>
                                    <td>{{ dat.source }}</td>
                                    <td>
                                        <div class="dropdown dropstart" >
                                            <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                </svg>
                                            </button>
                                            <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                                <li><Link class="dropdown-item" :href="`/budget/${dat.id}`">Budget Requirements</Link></li>
                                                <li><Link class="dropdown-item" :href="`/implementation/${dat.id}`">Implementation Plan</Link></li>
                                                <li><Link class="dropdown-item" :href="`/budget/edit/${dat.id}`">Edit</Link></li>
                                                <li><Link class="text-danger dropdown-item" @click="deleteBudget(dat.id)">Delete</Link></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="cap_non.length>0  & gad_version=='1'" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2" >SUB TOTAL (NON-GAD) </th>
                                    <th class="text-end">{{ format_number_conv(s_cap_non,2,true) }}</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--TOTAL CAPITAL-->
                                <tr v-if="cap_gad.length>0 || cap_non.length>0" >
                                    <td></td>
                                    <th colspan="3" >SUB TOTAL (Capital Outlay) </th>
                                    <th class="text-end">{{ getSum(s_cap_gad,s_cap_non) }}</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--Personnel Services-->
                                <tr v-if="ps_gad.length>0 || ps_non.length>0">
                                    <th colspan="3" >Personnel Services</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--Personnel Services GAD-->
                                <tr v-if="ps_gad.length>0  & gad_version=='1'" >
                                    <td></td>
                                    <th colspan="2" >GAD </th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="ps_gad.length>0" v-for="dat in ps_gad">
                                    <td></td>
                                    <td></td>
                                    <td>{{ dat.particulars }}</td>
                                    <td>{{ dat.account_code }}</td>
                                    <td class="text-end">{{ format_number_conv(dat.amount,2,true) }}</td>
                                    <td>{{ dat.source }}</td>
                                    <td>
                                        <div class="dropdown dropstart" >
                                            <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                </svg>
                                            </button>
                                            <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                                <li><Link class="dropdown-item" :href="`/budget/${dat.id}`">Budget Requirements</Link></li>
                                                <li><Link class="dropdown-item" :href="`/implementation/${dat.id}`">Implementation Plan</Link></li>
                                                <li><Link class="dropdown-item" :href="`/budget/edit/${dat.id}`">Edit</Link></li>
                                                <li><Link class="text-danger dropdown-item" @click="deleteBudget(dat.id)">Delete</Link></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="ps_gad.length>0  & gad_version=='1'" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2" >SUB TOTAL (GAD) </th>
                                    <th class="text-end">{{ format_number_conv(s_ps_gad,2,true) }}</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--Personnel Services NON-GAD-->
                                <tr v-if="ps_non.length>0  & gad_version=='1'" >
                                    <td></td>
                                    <th colspan="2" >NON-GAD</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="ps_non.length>0" v-for="dat in ps_non">
                                    <td></td>
                                    <td></td>
                                    <td>{{ dat.particulars }}</td>
                                    <td>{{ dat.account_code }}</td>
                                    <td class="text-end">{{ format_number_conv(dat.amount,2,true) }}</td>
                                    <td>{{ dat.source }}</td>
                                    <td>
                                        <div class="dropdown dropstart" >
                                            <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                </svg>
                                            </button>
                                            <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                                <li><Link class="dropdown-item" :href="`/budget/${dat.id}`">Budget Requirements</Link></li>
                                                <li><Link class="dropdown-item" :href="`/implementation/${dat.id}`">Implementation Plan</Link></li>
                                                <li><Link class="dropdown-item" :href="`/budget/edit/${dat.id}`">Edit</Link></li>
                                                <li><Link class="text-danger dropdown-item" @click="deleteBudget(dat.id)">Delete</Link></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="ps_non.length>0  & gad_version=='1'" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2" >SUB TOTAL (NON-GAD) </th>
                                    <th class="text-end">{{ format_number_conv(s_ps_non,2,true) }}</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--TOTAL PERSONNEL SERVICES-->
                                <tr v-if="ps_gad.length>0 || ps_non.length>0" >
                                    <td></td>
                                    <th colspan="3" >SUB TOTAL (Personnel Services) </th>
                                    <th class="text-end">{{ getSum(s_ps_gad,s_ps_non) }}</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--Financial Expenses-->
                                <tr v-if="fe_gad.length>0 || fe_non.length>0">
                                    <th colspan="3" >Financial Expenses</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--Financial Expenses GAD-->
                                <tr v-if="fe_gad.length>0" >
                                    <td></td>
                                    <th colspan="2" >GAD </th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="fe_gad.length>0" v-for="dat in fe_gad">
                                    <td></td>
                                    <td></td>
                                    <td>{{ dat.particulars }}</td>
                                    <td>{{ dat.account_code }}</td>
                                    <td class="text-end">{{ format_number_conv(dat.amount,2,true) }}</td>
                                    <td>{{ dat.source }}</td>
                                    <td>
                                        <div class="dropdown dropstart" >
                                            <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                </svg>
                                            </button>
                                            <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                                <li><Link class="dropdown-item" :href="`/budget/${dat.id}`">Budget Requirements</Link></li>
                                                <li><Link class="dropdown-item" :href="`/implementation/${dat.id}`">Implementation Plan</Link></li>
                                                <li><Link class="dropdown-item" :href="`/budget/edit/${dat.id}`">Edit</Link></li>
                                                <li><Link class="text-danger dropdown-item" @click="deleteBudget(dat.id)">Delete</Link></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="fe_gad.length>0" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2" >SUB TOTAL (GAD) </th>
                                    <th class="text-end">{{ format_number_conv(s_fe_gad,2,true) }}</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--Financial Expenses NON-GAD-->
                                <tr v-if="fe_non.length>0" >
                                    <td></td>
                                    <th colspan="2" >NON-GAD</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr v-if="fe_non.length>0" v-for="dat in fe_non">
                                    <td></td>
                                    <td></td>
                                    <td>{{ dat.particulars }}</td>
                                    <td>{{ dat.account_code }}</td>
                                    <td class="text-end">{{ format_number_conv(dat.amount,2,true) }}</td>
                                    <td>{{ dat.source }}</td>
                                    <td>
                                        <div class="dropdown dropstart" >
                                            <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                </svg>
                                            </button>
                                            <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                                <li><Link class="dropdown-item" :href="`/budget/${dat.id}`">Budget Requirements</Link></li>
                                                <li><Link class="dropdown-item" :href="`/implementation/${dat.id}`">Implementation Plan</Link></li>
                                                <li><Link class="dropdown-item" :href="`/budget/edit/${dat.id}`">Edit</Link></li>
                                                <li><Link class="text-danger dropdown-item" @click="deleteBudget(dat.id)">Delete</Link></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="fe_non.length>0" class="text-bg-dark">
                                    <td></td>
                                    <td></td>
                                    <th colspan="2" >SUB TOTAL (NON-GAD) </th>
                                    <th class="text-end">{{ format_number_conv(s_fe_non,2,true) }}</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--GRAND TOTAL-->
                                <tr>
                                    <th colspan="4">GRAND TOTAL</th>
                                    <th class="text-end">{{ format_number_conv(BUD_total,2,true) }}</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tbody>
                        </table>

                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!--<pagination :next="data.next_page_url" :prev="data.prev_page_url" />-->
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p >
                            <!--
                                {{ data.from }} to {{ data.to }} of
                                {{ data.total }} entries
                            -->
                        </p>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
export default {
    props: {
        //data: Object,
        mooe_gad: Object,
        mooe_non: Object,
        cap_gad: Object,
        cap_non: Object,
        ps_gad: Object,
        ps_non: Object,
        fe_gad: Object,
        fe_non: Object,
        revs: Object,
        idrev: String,
        filters: Object,
        GAD_total: Number,
        BUD_total: Number,
        implementation_plan: Number,
        imp_mooe: Number,
        imp_ps: Number,
        imp_co: Number,
        imp_fe: Number,
        s_mooe_gad: Number,
        s_mooe_non: Number,
        s_cap_gad: Number,
        s_cap_non: Number,
        s_ps_gad: Number,
        s_ps_non: Number,
        s_fe_gad: Number,
        s_fe_non: Number,
        gad_version: String,
    },
    data() {
        return{
            revs_amount: 0,
            revs_attributed: 0,
            budg_total: 0,
            gadg_total: 0,
            //search: this.$props.filters.search,
        }
    },
    components: {
        Pagination, Filtering,
    },
    mounted(){
        // this.revs_amount = parseFloat(this.revs[0].amount);
        // this.revs_attributed = parseFloat(this.revs[0].hgdg_percent)*parseFloat(this.implementation_plan);
        // this.budg_total=parseFloat(this.BUD_total);
        // this.gadg_total=parseFloat(this.GAD_total);
        this.revs_amount = parseFloat(this.revs[0].amount).toFixed(2);
        this.revs_attributed = ((parseFloat(this.revs[0].hgdg_score)/20) * parseFloat(this.implementation_plan)).toFixed(2);
        this.budg_total = parseFloat(this.BUD_total).toFixed(2);
        this.gadg_total = parseFloat(this.GAD_total).toFixed(2);
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
        deleteBudget(id) {
            //alert(this.idpaps);
            let text = "WARNING!\nAre you sure you want to delete the Budget Requirement?"+id;
              if (confirm(text) == true) {
                this.$inertia.delete("/budget/" + id+"/"+this.idrev);
            }
        },
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
</style>
