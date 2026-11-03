<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <!-- Flying Paper Plane Animation -->
        <div v-if="showFlyingPlane" class="flying-plane-container">
            <i class="fas fa-paper-plane flying-plane"></i>
        </div>
        <!-- {{ year_filtering_d }} -->
        <div class="peers fxw-nw jc-sb ai-c">
            <div class="peers">
                <h3 v-if="source==='sip'">SIP Profile</h3>
                <h3 v-else>PPA Profile </h3>
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
        <!-- FILTERING SECTION************************************** -->
         <!-- FILTERING SECTION -->
        <div class="masonry-item w-100">
            <div class="toolbar-card">

                <!-- Top Row: Actions -->
                <div class="toolbar-row toolbar-actions">
                    <div class="toolbar-left">
                        <span class="toolbar-label">
                            <!-- <i class="fas fa-sliders-h"></i> FILTER PANEL -->
                        </span>
                    </div>
                    <div class="toolbar-right">
                        <!-- /revision/create/${idpaps} -->
                        <Link class="tool-btn tool-btn-primary" :href="`/revision/create/${idpaps}`" v-if="source==undefined">
                            <i class="fas fa-plus"></i> Add Project Profile
                        </Link>
                        <Button class="tool-btn tool-btn-primary" @click="showSIPModal" v-if="source=='sip'">
                            <i class="fas fa-plus"></i> Add SIP Profile
                        </Button>
                        <!-- /revision/create/0?source=direct -->
                        <Link class="tool-btn tool-btn-primary" :href="`/paps/direct`" v-if="source=='direct'">
                            <i class="fas fa-plus"></i> Add Project Profile
                        </Link>
                        <!-- tool-btn-outline -->
                        <button class="tool-btn tool-btn-primary" @click="showAIPModalMethod()">
                            <i class="fas fa-file-alt"></i> AIP
                        </button>
                        <button @click="exportUsers" class="tool-btn tool-btn-success">
                            <i class="fas fa-file-excel"></i> Export to Excel
                        </button>
                        <button @click="downloadExcel('sim')" class="tool-btn tool-btn-success">
                            <i class="fas fa-file-excel"></i> Export Excel Validation (Simple)
                        </button>
                        <button @click="downloadExcel('aip')" class="tool-btn tool-btn-success">
                            <i class="fas fa-file-excel"></i> Export Excel Validation (With Expected Outputs)
                        </button>
                        <button @click="downloadExcel('single_sheet')" class="tool-btn tool-btn-success">
                            <i class="fas fa-file-excel"></i> Export Excel Validation (Single Sheet)
                        </button>
                        <button class="tool-btn tool-btn-outline" @click="showFilter()">
                            <i class="fas fa-filter"></i> Filter
                        </button>
                        <button v-if="auth.user.department_code === '04'" class="tool-btn tool-btn-info" @click="showAllowSubmissionModal()">
                            <i class="fas fa-lock"></i> Disable/Enable Annual Submissions
                        </button>
                        <!-- {{ auth.user.recid }} -->
                        <button v-if="auth.user.recid === 545" class="tool-btn btn-success text-white" @click="syncOOEs()">
                            <i class="fas fa-filter"></i> Sync OOEs
                        </button>
                        <button v-if="auth.user.recid === 545" class="tool-btn btn-primary text-white" @click="generatePrograms()">
                            <i class="fas fa-cogs"></i> Generate Programs
                        </button>
                    </div>
                </div>

                <!-- Divider -->
                <div class="toolbar-divider"></div>

                <!-- Bottom Row: Filters -->
                <div class="toolbar-row toolbar-filters">

                    <!-- Year Filter -->
                    <div class="filter-group">
                        <label class="filter-label">
                            <i class="fas fa-calendar-alt"></i> Year
                        </label>
                        <select v-model="year_filtering_d" class="filter-select" @change="filterProjects()">
                            <option value="">All Years</option>
                            <option v-for="year in pcr_years" :value="year">{{ year }}</option>
                        </select>
                    </div>

                    <!-- Type Filter -->
                    <div class="filter-group">
                        <label class="filter-label">
                            <i class="fas fa-tag"></i> Type
                        </label>
                        <select v-model="type_filter" class="filter-select" @change="filterProjects">
                            <option value="">All Types</option>
                            <option value="p">Project Profile</option>
                            <option value="d">Project Design</option>
                        </select>
                    </div>

                    <!-- Sector/Source of Funds Filtering -->
                    <div class="filter-group">
                        <label class="filter-label">
                            <i class="fas fa-tag"></i> Sector/Source of Funds
                        </label>
                        <select v-model="ssf_filter" class="filter-select" @change="filterProjects">
                            <!-- <option value="">All Types</option>
                            <option value="p">Project Profile</option>
                            <option value="d">Project Design</option> -->


                            <option value="General Public Services Sector">General Public Services Sector</option>
                            <option value="Economic Services">Economic Services</option>
                            <option value="Other Services">Other Services</option>
                            <option value="Social Services Sector">Social Services Sector</option>
                            <option value="gen_fund">General Fund</option>
                            <option value="ldrrmf">Local Disaster Risk Reduction and Management Fund</option>
                            <option value="other">Other Sources</option>
                            <option value="dev">20% Development Fund</option>
                            <option></option>
                        </select>
                    </div>
                    <!-- Search -->
                    <div class="filter-group filter-group-grow">
                        <label class="filter-label">
                            <i class="fas fa-search"></i> Search
                        </label>
                        <div class="search-wrapper">
                            <i class="fas fa-search search-icon"></i>
                            <input v-model="search" type="text" class="filter-input" placeholder="Search projects...">
                        </div>
                    </div>

                    <!-- Climate Change Checkbox -->
                    <div class="filter-group filter-group-checkbox">
                        <label class="checkbox-label">
                            <input type="checkbox" v-model="checked" @change="updateValue" class="checkbox-input" />
                            <span class="checkbox-box"></span>
                            <span class="checkbox-text">No Climate Change Expenditure</span>
                        </label>
                        <span class="checkbox-hint">Check if your LGU has no climate change expenditure</span>
                    </div>

                </div>
            </div>
        </div>

        <!-- <div class="peers fxw-nw jc-sb ai-c"> -->


        <!-- </div> -->
        <!-- END OF FILTERING SECTION******************************* -->


        <!-- FILTERING SECTION END -->
        <div class="peers fxw-nw jc-sb ai-c" v-if="paps.paps_desc">
            <h5>Program/Project: <u>{{ paps.paps_desc }}</u></h5>
        </div>
        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="bgc-white p-20 bd">
                <!-- Table Header with Title and Stats -->
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <!-- <h4 class="text-primary mb-0">
                        <i class="fas fa-list-ul me-2"></i>
                        Project Profiles
                    </h4> -->
                    <button @click="fitTableWidth"
                            class="btn btn-sm btn-outline-primary"
                            title="Adjust zoom to fit table width">
                        <i class="fas fa-compress me-2"></i>
                        Fit Width to Visible Area
                    </button>
                    <!-- <div class="text-muted small">
                        Showing {{ data.from }} to {{ data.to }} of {{ data.total }} entries
                    </div> -->
                </div>

                <!-- Responsive Table Container -->
                <div class="table-responsive" ref="tableResponsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-head-sticky">
                            <tr>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-file-alt me-2"></i>Project Title
                                </th>
                                <th class="border-0 fw-semibold text-primary" v-if="source !== 'direct'">
                                    <i class="fas fa-calendar me-2"></i>Date Submitted
                                </th>
                                <th class="border-0 fw-semibold text-primary" >
                                    <i class="fas fa-building me-2"></i>Office
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-info-circle me-2"></i>Status
                                </th>
                                <th class="border-0 fw-semibold text-primary text-center" colspan="3">
                                    <i class="fas fa-edit me-2"></i>Actions
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-forward me-2"></i>Forward
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-code-branch me-2"></i>Version
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-calendar-alt me-2"></i>Year
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-tag me-2"></i>Type
                                </th>
                                <th class="border-0 fw-semibold text-primary text-center">
                                    <i class="fas fa-play me-2"></i>Actions
                                </th>
                                <th class="border-0 fw-semibold text-primary text-center">
                                    <i class="fas fa-cogs me-2"></i>More
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data" :key="dat.id" class="border-bottom border-light">
                                <!-- PROJECT TITLE -->
                                <td class="fw-medium">
                                    <div class="d-flex flex-column">
                                        <span class="text-dark">{{ dat.project_title }}</span>
                                        <!-- budget_ceiling: {{ dat.budget_ceiling }} <br>
                                        openWarningsRow: {{ openWarningsRow }} -->
                                        <span
                                            v-if="hasAnyWarning(dat)"
                                            class="mt-1"
                                            style="cursor:pointer; text-decoration:underline; color:red;"
                                            @click="toggleWarnings(dat.id)"
                                        >
                                            <i
                                                class="fas fa-exclamation-triangle me-1"
                                                style="color:#b8860b;"
                                            ></i>
                                            View Errors
                                        </span>
                                        <!-- budgetCeilingStatus: {{ budgetCeilingStatus(parseFloat(dat.budget_sum), parseFloat(dat.imp_amount), parseFloat(dat.budget_ceiling)) }} ***
                                        id: {{ dat.id }} <br>
                                        budget_sum{{ parseFloat(dat.budget_sum) }} <br>
                                        imp_amount{{ parseFloat(dat.imp_amount) }} <br>
                                        budget_ceiling{{ parseFloat(dat.budget_ceiling) }} <br> -->

                                        <div v-if="parseFloat(dat.status)<1">
                                            <div v-if="openWarningsRow === dat.id" class="mt-2">
                                                <ul class="text-danger" style="padding-left: 1.2em;">
                                                    <li v-if="amountStatus(dat.budget_sum, dat.imp_amount)">
                                                        <!-- <i class="fas fa-exclamation-triangle me-1"></i> -->
                                                        {{ amountStatus(dat.budget_sum, dat.imp_amount) }}
                                                    </li>
                                                    <li v-if="budgetCeilingStatus(dat.budget_sum, dat.imp_amount, dat.budget_ceiling) && dat.type=='d'">
                                                        <div v-html="budgetCeilingStatus(dat.budget_sum, dat.imp_amount, dat.budget_ceiling)"></div>
                                                    </li>
                                                    <li v-if="categoryAmountStatus(dat.budget_ps_total, dat.imp_ps_total, 'ps')">
                                                        <!-- <i class="fas fa-exclamation-triangle me-1"></i> -->
                                                        <!-- {{ categoryAmountStatus(dat.budget_ps_total, dat.imp_ps_total, 'ps') }} -->
                                                        <div v-html="categoryAmountStatus(dat.budget_ps_total, dat.imp_ps_total, 'ps')"></div>
                                                    </li>
                                                    <li v-if="categoryAmountStatus(dat.budget_mooe_total, dat.imp_mooe_total, 'mooe')">
                                                        <!-- <i class="fas fa-exclamation-triangle me-1"></i> -->
                                                        <!-- {{ categoryAmountStatus(dat.budget_mooe_total, dat.imp_mooe_total, 'mooe') }} -->
                                                        <div v-html="categoryAmountStatus(dat.budget_mooe_total, dat.imp_mooe_total, 'mooe')"></div>
                                                    </li>
                                                    <li v-if="categoryAmountStatus(dat.budget_co_total, dat.imp_co_total, 'co')">
                                                        <!-- <i class="fas fa-exclamation-triangle me-1"></i> -->
                                                        <div v-html="categoryAmountStatus(dat.budget_co_total, dat.imp_co_total, 'co')"></div>
                                                    </li>
                                                    <li v-if="categoryAmountStatus(dat.budget_fe_total, dat.imp_fe_total, 'fe')">
                                                        <!-- <i class="fas fa-exclamation-triangle me-1"></i> -->
                                                        <div v-html="categoryAmountStatus(dat.budget_fe_total, dat.imp_fe_total, 'fe')"></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <!-- DATE SUBMITTED -->
                                <td v-if="source !== 'direct'" class="text-muted">
                                    <span v-if="source=='direct'"></span>
                                    <span v-else>{{ dat.created_at ? new Date(dat.created_at).toLocaleDateString() : ' ' }}</span>
                                </td>

                                <!-- OFFICE -->
                                <td>
                                    <span class="badge bg-light text-dark border">
                                        <i class="fas fa-building me-1"></i>{{ dat.FFUNCTION }}
                                    </span>
                                </td>

                                <!-- STATUS -->
                                <td>
                                    <div :class="['status-oval', getStatusOvalClass(dat.status)]" class="d-inline-flex align-items-center">
                                        <span :class="`badge fw-medium ${getStatusBadgeClass(dat.status)}`">
                                            <i :class="[getStatusIcon(dat.status), 'me-1']"></i>
                                            {{ getStatusLabel(dat.status) }}
                                        </span>
                                    </div>
                                    <div v-if="parseFloat(dat.status)>-1 && parseFloat(dat.status) !== 1" class="mt-1">
                                        <small class="text-muted">

                                            <i :class="dat.gad_status==1 ? 'fas fa-check-circle text-success me-1' : 'fas fa-hourglass-half text-warning me-1'"></i>
                                            {{ dat.gad_status==1 || dat.gad_status==='1' ? 'GAD Approved' : 'GAD Not Yet Evaluated' }}
                                        </small>
                                    </div>
                                </td>

                                <!-- VIEW / EDIT / FULL EDIT ACTIONS -->
                                <td class="text-center" colspan="3">
                                    <div class="d-flex flex-column gap-2 align-items-center">
                                        <!-- VIEW ACTION -->
                                        <div class="d-flex align-items-center gap-2" style="min-width: 160px;">
                                            <Link :href="`/revision/view/project/paps/${dat.id}`"
                                                  class="btn btn-sm btn-primary btn-icon"
                                                  title="View Project">
                                                <i class="fas fa-eye"></i>
                                            </Link>
                                            <small class="text-muted">View</small>
                                        </div>

                                        <!-- EDIT ACTION -->
                                        <div v-if="paps" class="d-flex align-items-center gap-2" style="min-width: 160px;">
                                            <Link :href="`/revision/edit/${dat.id}`"
                                                  class="btn btn-sm btn-secondary btn-icon"
                                                  title="Edit Project">
                                                <i class="fas fa-edit"></i>
                                            </Link>
                                            <small class="text-muted">Edit</small>
                                        </div>
                                        <div v-else class="d-flex align-items-center gap-2" style="min-width: 160px;">
                                            <Link :href="`/revision/edit/${dat.id}?source=direct`"
                                                  class="btn btn-sm btn-secondary btn-icon"
                                                  title="Edit Project">
                                                <i class="fas fa-edit"></i>
                                            </Link>
                                            <small class="text-muted">Edit</small>
                                        </div>

                                        <!-- FULL EDIT ACTION -->
                                        <div v-if="dat.idpaps" class="d-flex align-items-center gap-2" style="min-width: 160px;">
                                            <Link :href="`/revision/streamlined/create/${dat.idpaps}?source=${source}&idrevplan=${dat.id}`"
                                                  class="btn btn-sm btn-success btn-icon"
                                                  title="Full Edit">
                                                <i class="fas fa-edit me-1"></i><i class="fas fa-plus"></i>
                                            </Link>
                                            <small class="text-muted">Full Edit</small>
                                        </div>
                                        <div v-else class="d-flex align-items-center gap-2" style="min-width: 160px;">
                                            <Link :href="`/revision/streamlined/create/0?source=${source}&idrevplan=${dat.id}`"
                                                  class="btn btn-sm btn-success btn-icon"
                                                  title="Full Edit">
                                                <i class="fas fa-edit me-1"></i><i class="fas fa-plus"></i>
                                            </Link>
                                            <small class="text-muted">Full Edit</small>
                                        </div>

                                        <!-- DELETE ACTION -->
                                        <div v-if="dat.year == '2027' && dat.status !== '1'" class="d-flex align-items-center gap-2" style="min-width: 160px;">
                                            <button @click="deleteRevisionPlan(dat.id)"
                                                    class="btn btn-sm btn-danger btn-icon text-white"
                                                    title="Delete Project">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                            <small class="text-muted">Delete</small>
                                        </div>
                                    </div>
                                </td>

                                <!-- FORWARD NEXT YEAR -->
                                <td class="text-center">
                                    <!-- {{ (parseInt(dat.year) + 1 == new Date().getFullYear()+1) }}  -- {{  dat.status }} -->
                                    <!-- (parseInt(dat.status == 0 || dat.status == 1) -->
                                     <!-- {{dat.id }} - {{ dat.type }} - dat.number_of_clones: {{ dat.number_of_clones }} - dat.year: {{ dat.year }} - new Date().getFullYear()+1: {{ new Date().getFullYear()+1 }} - dat.status: {{ dat.status }} -->
                                    <button v-if="dat.type==='p' && (
                                                (parseInt(dat.id) === 657 && parseInt(dat.number_of_clones) < 11) ||
                                                (parseInt(dat.id) !== 657 && parseInt(dat.number_of_clones) < 1)
                                            )"
                                            @click="generateProjectDesign(dat.id, 'ny')"
                                            :disabled="!((parseInt(dat.year) + 1 == new Date().getFullYear()+1) && ([0,1].includes(parseInt(dat.status))))"
                                            :class="getForwardButtonClass(dat)"
                                            :title="getForwardButtonTitle(dat)">
                                        <i class="fas fa-arrow-right"></i>
                                        {{ parseInt(dat.year)+1}}
                                    </button>
                                    <br />
                                    <!-- :disabled="!((parseInt(dat.year) + 1 == new Date().getFullYear()+1) && ([0,1].includes(parseInt(dat.status))))" -->

                                    <!-- :title="getForwardButtonTitle(dat)" -->
                                    <!-- <button v-if="parseInt(dat.number_of_clones)>0 && dat.type==='p'"
                                            @click="generateProjectDesign(dat.id, 'ly')"
                                            class="btn btn-sm btn-success">
                                        <i class="fas fa-arrow-right"></i>
                                        {{ parseInt(dat.year)-1}}
                                    </button> -->
                                    <!-- {{ dat.status }} -->
                                </td>

                                <!-- VERSION -->
                                <td>
                                    <span class="badge bg-info text-white">{{ dat.version }}</span>
                                </td>

                                <!-- YEAR -->
                                <td class="fw-medium text-primary">{{ dat.year }}</td>

                                <!-- TYPE -->
                                <td>
                                    <span :class="getTypeBadgeClass(dat.type)" class="badge">
                                        {{ formatProjectType(dat.type) }}
                                    </span>
                                </td>

                                <!-- ACTIONS COLUMN (Submit/Recall/Generate buttons) -->
                                <td class="text-center">
                                    <div class="d-flex gap-1 justify-content-center flex-wrap">
                                        <!-- Submit button when status = -1 or -2 v-if="hasAnyWarning(dat)"
                                        :disabled="!can_submit(dat.budget_sum, dat.imp_amount)"
                                        :class="can_submit(dat.budget_sum, dat.imp_amount) ? 'btn btn-success btn-sm btn-icon text-white' : 'btn btn-secondary btn-sm btn-icon'"
                                        -->
                                        <!-- {{ hasAnyWarning(dat) }} -->

                                        <!-- SUBMIT*************************************** -->
                                        <!-- {{dat.status}} {{ hasAnyWarning(dat) }} {{ isSubmissionAllowed(dat.year) }} {{ allowed }} -->
                                        <button v-if="(dat.status == '-1' || dat.status == '-2') &&
                                                !hasAnyWarning(dat) &&
                                                isSubmissionAllowed(dat.year)"
                                                @click="submitItem(dat, 0)"
                                                :disabled="hasAnyWarning(dat) || !isSubmissionAllowed(dat.year)"
                                                :class="!hasAnyWarning(dat) && isSubmissionAllowed(dat.year) ? 'btn btn-success btn-sm btn-icon text-white' : 'btn btn-secondary btn-sm btn-icon'"
                                                :title="!isSubmissionAllowed(dat.year) ? 'Submissions are disabled for year ' + dat.year : 'Submit Project'">
                                            <i class="fas fa-paper-plane"></i>
                                            <span class="ms-1">Submit</span>
                                        </button>

                                        <!-- PROJECT DESIGN -->
                                        <button v-if="dat.type==='d'"
                                            @click="generateBudgetPrep(dat.id)"
                                            class="btn btn-info btn-sm btn-icon text-white">
                                            Sync Budget Prep
                                        </button>
                                        <!-- budget_prep_count: {{ dat.budget_prep_count }} -->
                                        <!-- Recall button when status = 0 *****************-->
                                        <button v-if="dat.status == '0'"
                                                @click="submitItem(dat, -1)"
                                                class="btn btn-warning btn-sm btn-icon"
                                                title="Recall Project">
                                            <i class="fas fa-undo"></i>
                                            <span class="ms-1">Recall</span>
                                        </button>

                                        <!-- Generate Project Design button -->
                                         <!-- dat.type==='p' && (
                                                (parseInt(dat.id) === 657 && parseInt(dat.number_of_clones) < 11) ||
                                                (parseInt(dat.id) !== 657 && parseInt(dat.number_of_clones) < 1)
                                            )
                                        dat.status == 1 && parseInt(dat.number_of_clones_design)<1 && dat.type==='p' -->
                                        <button v-if=" dat.type==='p' && (
                                                (parseInt(dat.id) === 657 && parseInt(dat.number_of_clones) < 11) ||
                                                (parseInt(dat.id) !== 657 && parseInt(dat.number_of_clones) < 1)
                                            ) && parseInt(dat.year) <= 2027"
                                                @click="generateProjectDesign(dat.id, 'd')"
                                                class="btn btn-info btn-sm btn-icon text-white"
                                                title="Generate Project Design">
                                            <i class="fas fa-plus-circle"></i>
                                            <span class="ms-1">Generate Project Design</span>
                                        </button>
                                        <!-- {{ dat.status }} {{ parseInt(dat.number_of_clones_design) }} {{ dat.type }} {{ parseInt(dat.year) }} -->
                                        <!-- Generate SIP Profile button -->
                                        <button v-if="dat.status == 1 && parseInt(dat.number_of_clones)<1 && source==='sip'"
                                                @click="generateProjectDesign(dat.id, 'sip')"
                                                class="btn btn-info btn-sm btn-icon"
                                                title="Generate SIP Profile">
                                            <i class="fas fa-plus-circle"></i>
                                            <span class="ms-1">Generate SIP</span>
                                        </button>

                                        <!-- Request for Return button -->
                                        <button v-if="['1','2'].includes(dat.status) && dat.return_request_status=='-1'"
                                                @click="returnWithAmmendments(dat, 5)"
                                                class="btn btn-danger btn-sm btn-icon text-white"
                                                title="Request for Return">
                                            <i class="fas fa-reply"></i>
                                            <span class="ms-1">Request for Return</span>
                                        </button>
                                    </div>
                                </td>

                                <!-- MORE ACTIONS DROPDOWN -->
                                <td class="text-center">
                                    <div class="dropdown">
                                        <button class="btn btn-sm btn-dark dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                title="More Actions">
                                            <i class="fas fa-ellipsis-h"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end shadow">
                                            <li>
                                                <Link class="dropdown-item" :href="`/HGDGScore/${dat.id}`">
                                                    <i class="fas fa-chart-line me-2"></i>HGDG Score
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/strategies-and-activities/${dat.id}`">
                                                    <i class="fas fa-tasks me-2"></i>Implementation Schedule
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/budget/${dat.id}`">
                                                    <i class="fas fa-dollar-sign me-2"></i>Budget Requirements
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/team/${dat.id}/revision/plan/team`">
                                                    <i class="fas fa-users me-2"></i>Implementing Team
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/EvaluationMechanismTool/${dat.id}`">
                                                    <i class="fas fa-chart-bar me-2"></i>Monitoring & Evaluation
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/RiskManagement/${dat.id}`">
                                                    <i class="fas fa-exclamation-triangle me-2"></i>Risk Management
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/Signatories/${dat.id}`">
                                                    <i class="fas fa-signature me-2"></i>Signatories
                                                </Link>
                                            </li>
                                            <li v-if="dat.type==='d'">
                                                <Button class="dropdown-item" @click="setLinkModal(dat.id)">
                                                    <i class="fas fa-print me-2"></i>Print Comprehensive Workplan
                                                </Button>
                                            </li>
                                            <li>
                                                <Button class="dropdown-item" @click="openPrintProfile(dat.id)">
                                                    <i class="fas fa-print me-2"></i>Print Project {{ dat.type==='p' ? 'Profile' : 'Design' }}
                                                </Button>
                                            </li>
                                            <li v-if="dat.type==='d'">
                                                <Link class="dropdown-item" :href="`/cdf/${dat.id}`">
                                                    <i class="fas fa-file-invoice-dollar me-2"></i>Cash Disbursements Forecast
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/budget/ooes/${dat.id}`">
                                                    <i class="fas fa-file-invoice-dollar me-2"></i>Objects of Expenditure
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" @click="openLBPForm4(dat.id)">
                                                    <i class="fas fa-file-invoice-dollar me-2"></i>Print LBPForm 4
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Pagination -->
                <!-- <div class="d-flex justify-content-center mt-3">
                    <pagination :next="data.next_page_url" :prev="data.prev_page_url" />
                </div> -->
            </div>
        </div>
    </div>
    <AIPModal v-if="showAIPModal" @close-modal-event="hideAIPModal">
        <div class="d-flex justify-content-center">
            <!-- {{ aip_printLink }} -->
            <iframe :src="aip_printLink" style="width:100%; height:500px" />
        </div>
        <button class="btn btn-primary btn-sm mL-2 text-white" @click="updateAIPStatus('LDC0', year_filtering_d)"
            v-if="auth.user.department_code==='04'"
        >
            Submit AIP for LDC Review
        </button>
        <button class="btn btn-primary btn-sm mL-2 text-white" v-if="auth.user.department_code==='04'"
        @click="updateAIPStatus('SP0', year_filtering_d)">
            Submit AIP for SP Review
        </button>
        {{ AIPInstitutional }}
        <!-- {{ auth.user.department_code }} -->
        <!-- <Link :href="aip_printLink_excel" class="btn btn-primary text-white">
                Export to Excel
            </Link> {{ aip_printLink_excel }}
            <br>
            {{ aip_printLink }}<br>
        <button @click="exportUsers" class="btn btn-primary text-white">
                Export to Excel
        </button> -->
    </AIPModal>
    <WorkPlanModal v-if="WorkPlanModalVisible" @close-modal-event="toggleWorkPlanModal" title="Comprehensive Workplan/Schedule">
        <div class="d-flex justify-content-center">
            <!-- {{ cmp_link }} -->
            <iframe :src="cmp_link" style="width:100%; height:500px" />

        </div>
    </WorkPlanModal>
    <SIPModal v-if="SIPModalVisible" @close-modal-event="SIPModalVisible=false" title="SIP Profile">
        Select PAPS: {{ selected_sip_paps }}
        <select v-model="selected_sip_paps" class="form-select">
            <option></option>
            <option v-for="pap in paps" :value="pap.id" >
                {{ pap.paps_desc }}
            </option>
        </select>
        <Link class="btn btn-primary btn-sm"
                :href="`/revision/streamlined/create/${selected_sip_paps}?source=sip`"
                :disabled="!selected_sip_paps"
                v-if="source=='sip'">
                    Add SIP Profile
        </Link>&nbsp;
    </SIPModal>
    <ProjectPrintModal v-if="printProfileVIsible" @close-modal-event="printProfileVIsible=false" title="Printed Output">
        <h1>Project Profile</h1>

        <div class="d-flex justify-content-center">
            <!-- {{ aip_printLink }} -->
            <iframe :src="ppa_link" style="width:100%; height:500px" />

        </div>

        <!-- {{ppa_link}} -->
    </ProjectPrintModal>

    <LBPPrintModal v-if="printLBPForm4" @close-modal-event="printLBPForm4=false" title="Printed Output">
        <h1>LBP Form 4</h1>

        <div class="d-flex justify-content-center">
            <!-- {{ aip_printLink }} -->
            <iframe :src="ppa_link" style="width:100%; height:500px" />

        </div>

        <!-- {{ppa_link}} -->
    </LBPPrintModal>
    <ReturnWithAmmendmentsModal v-if="ReturnWithAmmendmentsModalVisible" @close-modal-event="hideReturnWithAmmendmentsModal" title="REQUEST FOR RETURN">
        <div class="peers mb-12">

            <table class="table">
                <thead>
                <tr>
                    <td><h6>PROJECT TITLE: </h6></td>
                    <td><u>{{selected_plan.project_title }}</u></td>
                    <td><h6>OFFICE: </h6></td>
                    <td><u>{{selected_plan.FFUNCTION }}</u></td>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="2">
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
                        <td colspan="2">
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
                                            <div>
                                                Type:
                                                <select v-model="return_request_type">
                                                    <option></option>
                                                    <option value="a">
                                                        Administrative Order (New strategies/activities/ not included in approved project profile)
                                                    </option>
                                                    <option>
                                                        Appropriation Ordinance
                                                    </option>
                                                    <option>Justification</option>
                                                </select>
                                            </div>
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
                                                    REQUEST FOR RETURN
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
    <ModalAllowSubmission v-if="showAllowSubmissionModalVisible" @close-modal-event="hideAllowSubmissionModal" :allowed="allowed" @submission-updated="refreshPage" />
    <!-- src: {{source}} fdfsdf -->
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import AIPModal from "@/Shared/PrintModal";
import SIPModal from "@/Shared/ModalDynamicTitle";
import HgdgModal from "@/Shared/ModalDynamicTitle";
import ProjectPrintModal from "@/Shared/ModalDynamicTitle";
import LBPPrintModal from "@/Shared/ModalDynamicTitle";
import { router } from '@inertiajs/vue3';
import WorkPlanModal from "@/Shared/ModalDynamicTitle";
import ReturnWithAmmendmentsModal from "@/Shared/ModalDynamicTitle";
import ModalAllowSubmission from "@/Shared/ModalAllowSubmission";

export default {
    props: {

        auth: Object,
        data: Object,
        //idstrat: String,
        idpaps: String,
        filters: Object,
        paps: Object,
        monitors: Object,
        source: String,
        year_filtering: String,
        allowed: Object,
        AIPInstitutional: Object
        // search: String,
        // type_f: String,
    },
    data() {
        return{
            search: this.$props.filters.search,
            openWarningsRow: null,
            showAIPModal: false,
            aip_printLink: "",
            ccet: 'no',       // This is the main variable bound by v-model
            checked: false,    // Internal boolean to control the checkbox
            aip_printLink_excel: "",
            rev_plan_selected: [],
            WorkPlanModalVisible: "",
            cmp_link: "",
            SIPModalVisible: false,
            paps: [],
            selected_sip_paps: null,
            type_filter: this.$props.filters.type_filter,
            paps_id_here: 0,
            printProfileVIsible: false,
            printLBPForm4: false,
            // /Project id
            rev_plan_id: 0,
            ppa_link: "",

            // RETURN REQUEST**********************
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
            return_request_type: '',
            //Document Display
            displaySideModal: false,
            showImageModal: false,
            // END OF RETURN REQUEST***************
            year_filtering_d: '',
            ssf_filter: '',
            showFlyingPlane: false,
            showAllowSubmissionModalVisible: false
        }
    },
    components: {
        Pagination, Filtering, AIPModal, WorkPlanModal, SIPModal, ProjectPrintModal, ReturnWithAmmendmentsModal, HgdgModal, LBPPrintModal, ModalAllowSubmission
    },
    watch: {
        search: _.debounce(function (value) {

            this.$inertia.get(
                "/revision/"+this.paps_id_here,
                {
                    search: value,
                    type_filter: this.type_filter,
                    source:this.source
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    mounted(){
        if(this.paps.id){
            this.paps_id_here=this.paps.id
        }
        this.updateValue(); // Initialize ccet based on the initial state of checked
        this.fitTableWidth();
    },
    methods:{
        toggleWarnings(id) {
            this.openWarningsRow = this.openWarningsRow === id ? null : id;
        },
        showAllowSubmissionModal() {
            this.showAllowSubmissionModalVisible = true;
        },
        hideAllowSubmissionModal() {
            this.showAllowSubmissionModalVisible = false;
        },
        refreshPage() {
            this.$inertia.get(
                "/revision/"+this.paps_id_here,
                {
                    search: this.search,
                    type_filter: this.type_filter,
                    ssf_filter: this.ssf_filter,
                    source:this.source,
                    year: this.year_filtering_d
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        isSubmissionAllowed(year) {
            if (!this.allowed) return true;

            // Handle if allowed is an object with array values
            let allowedArray = Array.isArray(this.allowed) ? this.allowed : Object.values(this.allowed);

            const allowedItem = allowedArray.find(item => item.year === year || item.year === String(year));
            if (!allowedItem) return true; // If no restriction found, allow submission

            return allowedItem.allow_submission === '1' || allowedItem.allow_submission === 1;
        },
        hasAnyWarning(dat) {
            return !!(
                this.amountStatus(dat.budget_sum, dat.imp_amount) ||
                this.categoryAmountStatus(dat.budget_ps_total, dat.imp_ps_total, 'ps') ||
                this.categoryAmountStatus(dat.budget_mooe_total, dat.imp_mooe_total, 'mooe') ||
                this.categoryAmountStatus(dat.budget_co_total, dat.imp_co_total, 'co') ||
                this.categoryAmountStatus(dat.budget_fe_total, dat.imp_fe_total, 'fe')
            );
        },
        syncOOEs() {

            this.$inertia.post("/revision/sync-ooes",
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        generatePrograms() {
            if (!confirm("Are you sure you want to generate programs from revision plans with NULL program_id_2?")) {
                return;
            }

            this.$inertia.post("/revision/generate-programs",
                {},
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        printProfileVisible($rev_print_id){
            this.printProfileVIsible=true
        },
        printLBPForm4s($rev_print_id){
            this.printLBPForm4=true
        },
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
        deleteStrat(id) {
            //alert(this.idpaps);
            let text = "WARNING!\nAre you sure you want to delete the strategy?"+id;
              if (confirm(text) == true) {
                this.$inertia.delete("/strategies/" + id+"/"+this.idpaps);
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
        amountStatus(budget, imp_amount){
            var status_now="";
            var showAmount ="";
            var bdg = parseFloat(parseFloat(budget).toFixed(2));
            var imp = parseFloat(parseFloat(imp_amount).toFixed(2));
            //showAmount ="Budget is "+budget+" \n imp amount is "+imp_amount + " "
            if(bdg>imp){
                //alert('budget is greater than impamount');
                status_now=showAmount+"Total amount of budgetary requirement is greater than the total implementation plans amount."
            }
            if(bdg<imp){
                status_now=showAmount+"Total amount of implementation schedule/workplan is greater than the total  amount of budgetary requirement."
            }
            return status_now;
        },
        budgetCeilingStatus(budget, imp_amount, budget_ceiling){
            var status_now_b="";
            var status_now_i="";
            var showAmount ="";
            var bdg = parseFloat(parseFloat(budget).toFixed(2));
            var imp = parseFloat(parseFloat(imp_amount).toFixed(2));
            var ceiling = parseFloat(parseFloat(budget_ceiling).toFixed(2));
            //showAmount ="Budget is "+budget+" \n imp amount is "+imp_amount + " "
            if(bdg>ceiling){
                //alert('budget is greater than impamount');
                status_now_b=showAmount+"Total amount of budgetary requirement is greater than the approved budget ceiling amount."
            }
            if(imp>ceiling){
                status_now_i=showAmount+"Total amount of implementation schedule/workplan is greater than the total  amount of budgetary requirement."
            }
            // return status_now_b + status_now_i;
            if (status_now_b !== "" && status_now_i !== "") {
                return status_now_b + "\n" + status_now_i;
            } else if (status_now_b !== "") {
                return status_now_b;
            } else if (status_now_i !== "") {
                return status_now_i;
            } else {
                return "";
            }
        },
        categoryAmountStatus(budget, imp_amount, category) {

            var status_now = "";
            var showAmount = "";

            var bdg = parseFloat(parseFloat(budget || 0).toFixed(2));
            var imp = parseFloat(parseFloat(imp_amount || 0).toFixed(2));

            // Category labels
            const categoryLabels = {
                mooe: "Maintenance, Operating, and Other Expenses",
                co: "Capital Outlay",
                ps: "Personnel Services",
                fe: "Financial Expenses"
            };

            var categoryLabel = categoryLabels[category] || "Unknown Category";

            if (imp > bdg) {
                status_now =
                    showAmount +
                    "Total amount of <b>" +
                    categoryLabel +
                    "</b> in implementation schedule/workplan is greater than the total amount of <b>" +
                    categoryLabel +
                    "</b> in budgetary requirements.";
            }

            if (imp < bdg) {
                status_now =
                    showAmount +
                    "Total amount of <b>" +
                    categoryLabel +
                    "</b> in implementation schedule/workplan is lesser than the total amount of <b>" +
                    categoryLabel +
                    " in budgetary requirements.";
            }

            return status_now;
        },
        can_submit(budget, imp_amount){
            // var status_now="";
            // var showAmount ="";
            var bdg = Number((parseFloat(budget) || 0).toFixed(2));
            var imp = Number((parseFloat(imp_amount) || 0).toFixed(2));
            return bdg >= 1 && imp >= 1 && bdg === imp;
            // if(bdg>imp){
            //     return false;
            // }
            // if(bdg<imp){
            //     return false;
            // }
            // if(bdg<1){
            //     return false;
            // }
            // if(imp<1){
            //     return false;
            // }
        },
        showAIPModalMethod(){
            if(this.year_filtering_d === ''){
                alert('Please select year first before printing.');
                return;
            }
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link ='jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FAIP_Print&standAlone=true&decorate=no&output=pdf';
            var params ='&ccet='+this.ccet+'&year='+this.year_filtering_d+'&ssf_filter='+this.ssf_filter
            // console.log(params);
            this.aip_printLink = linkt+jasper_ip+jasper_link+params;
            // this.aip_printLink_excel = this.aip_printLink.replace('&output=pdf', '&output=csv');

            // this.aip_printLink_excel =linkt+jasper_ip+'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FAIP_Print&standAlone=true&decorate=no&output=xlsx&ccet='+this.ccet;
            this.showAIPModal=true;
        },
        hideAIPModal(){
            this.showAIPModal=false;
        },
        updateValue() {
            this.ccet = this.checked ? '1' : '0'
        },
        exportUsers() {
            // This opens the Laravel route in a new tab and triggers download
            // window.open(route('export.users'), '_blank');
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var short_link='jasperserver/rest_v2/reports/reports/OPCR_AIP/AIP_Print.xlsx?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FAIP_Print&standAlone=true&decorate=no'
            var params ='&ccet='+this.ccet
            var link_final = linkt+jasper_ip+short_link+params;
            // '/revision/export/aip'
            window.open(link_final, '_blank');
        },
        submitItem(revision_plan, newStatus){
            // let projectTypeLabel = '';
            // if (revision_plan.type === 'p') {
            //     projectTypeLabel = type === 0 ? 'Submit Project Profile' : 'Recall Project Profile';
            // } else if (revision_plan.type === 'd') {
            //     projectTypeLabel = type === 0 ? 'Submit Project Design' : 'Recall Project Design';
            // }

            // // Build confirmation message
            // const confirmMessage = `Are you sure you want to ${type === 0 ? 'Submit' : 'Recall'} the project ${revision_plan.type === 'p' ? 'profile' : 'design'} entitled "${revision_plan.project_title}"?`;

            // // Ask user for confirmation
            // if (!confirm(confirmMessage)) {
            //     return; // Stop if user clicks "Cancel"
            // }
            // const id = revision_plan.id;
            // const new_status = type; // 0 or -1

            // axios.post(`/status/revision/update/${id}/${projectTypeLabel}/${new_status}`)
            //     .then(response => {
            //         // Update local status
            //         revision_plan.status = String(new_status);
            //         console.log(`${projectTypeLabel} successful`);
            //     })
            //     .catch(error => {
            //         console.error(`${projectTypeLabel} failed:`, error);
            //     });
            const actions = {
                0: "Submit",
                "-1": "Recall",
                1: "Review",
                2: "Approve",
                "-2": "Return"
            };

            const actionLabel = actions[newStatus];
            const typeLabel = revision_plan.type === 'p' ? 'Project Profile' : 'Project Design';

            const confirmMessage = `Are you sure you want to ${actionLabel} the ${typeLabel} entitled "${revision_plan.project_title}"?`;
            const actionlabelcomplete = actionLabel + ' ' + typeLabel;
            if (!confirm(confirmMessage)) return;

            router.post(
                `/status/revision/update/${revision_plan.id}/${actionlabelcomplete}/${newStatus}`,
                {},
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        if (newStatus === 0) { // Only animate on Submit (status 0)
                            this.triggerPaperPlaneAnimation();
                        }
                    }
                }
            );
        },
        //WORKPLAN
        setLinkModal(id){
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link ='/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2FComprehensive_WorkPlan&standAlone=true&output=pdf';
            var params ='&id='+id
            // console.log(params);
            this.cmp_link = linkt+jasper_ip+jasper_link+params;
            this.toggleWorkPlanModal()
        },
        toggleWorkPlanModal(){
            this.WorkPlanModalVisible =!this.WorkPlanModalVisible
        },
        // GENERATE PROJECT DEISGN
        generateProjectDesign(id, type){
            if (!id) return;
            // alert(type);
            // Browser confirmation
            if (!confirm("Are you sure you want to generate the Project Design for this project?")) {
                return; // User canceled
            }
            if(type=='d'){
                // Make the Inertia POST request
                router.post(`/project/design/generate/${id}`, {
                    'type': type
                }, {
                    onSuccess: () => {
                        // optional: anything you want to run after success
                        console.log("Project Design generated.");
                    },
                    onError: (errors) => {
                        console.error(errors);
                    }
                });
            }else if(type=='ny'){
                // alert(type)
                router.post(`/project/next_year/${id}`, {
                    'type': type
                }, {
                    onSuccess: () => {
                        // optional: anything you want to run after success
                        console.log("Project Design generated.");
                    },
                    onError: (errors) => {
                        console.error(errors);
                    }
                });
            }else if(type=='ly'){
                // alert(type)
                router.post(`/project/last/year/${id}`, {
                    'type': type
                }, {
                    onSuccess: () => {
                        // optional: anything you want to run after success
                        console.log("Project Design generated.");
                    },
                    onError: (errors) => {
                        console.error(errors);
                    }
                });
            }else{
                alert("Invalid type specified for project design generation.");
            }


        },
        // NEW SIP GENERATION
        showSIPModal(){

            axios.get('/get/PAPS')
                .then(res => {
                    this.paps = res.data;
                    this.SIPModalVisible=true;
                })
                .catch(err => {
                    console.error('Failed to load PAPS:', err);
                });
        },
        // FILTER BY TYPE
        filterProjects(){
            this.$inertia.get(
                "/revision/"+this.paps_id_here,
                {
                    search: this.search,
                    type_filter: this.type_filter,
                    ssf_filter: this.ssf_filter,
                    source:this.source,
                    year: this.year_filtering_d
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        // OPEN PPA
        openPrintProfile(rev_plan_id_p){
            this.rev_plan_id=rev_plan_id_p
            this.printProfileVIsible=true

            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link ='/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system%2FIndividual_Output&reportUnit=%2Freports%2Fplanning_system%2FIndividual_Output%2FProject_Profile&standAlone=true&standAlone=true&output=pdf';
            var params ='&id='+rev_plan_id_p
            // console.log(params);
            this.ppa_link = linkt+jasper_ip+jasper_link+params;
        },

        openLBPForm4(rev_plan_id_p){
            this.rev_plan_id=rev_plan_id_p
            this.printLBPForm4=true

            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            var jasper_link ='/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system%2FIndividual_Output&reportUnit=%2Freports%2Fplanning_system%2FIndividual_Output%2FProject_Profile&standAlone=true&standAlone=true&output=pdf';
            var params ='&id='+rev_plan_id_p
            // console.log(params);
            this.ppa_link = linkt+jasper_ip+jasper_link+params;
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
                "-2": "Return",
                5: "Request for Return"
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
            // if (unexecuted.length < 1) {
            //     alert("You need to attach a new justification letter!.");
            //     return;
            // }

            // 2. Validate: remarks must not be empty
            if (!this.remarks || this.remarks.trim() === '') {
                alert("Remarks are required before returning the plan.");
                return;
            }
            if(!this.return_request_type || this.return_request_type.trim()==''){
                alert("You have to select a return type!")
                return;
            }
            // 3. Confirm action
            // confirm_message = `Are you sure you want to ${this.selected_label}?`;

            // if (!confirm(confirm_message)) {
            //     return;
            // }
            //confirm_message = `Are you sure you want to ${this.selected_label}?`;

            //if (!confirm(confirm_message)) {
            //   return;
            //}

            // Call the original method again and pass stored parameters
            // alert(this.selected_status);
            this.statusAction(this.selected_plan, this.selected_status);

            this.ReturnWithAmmendmentsModalVisible=false;

        },
        statusAction(revision_plan, newStatus, column) {
            const actions = {
                0: "Submit",
                "-1": "Recall",
                1: "Review",
                2: "Approve",
                "-2": "Return",
                5: "request for the return of the"
            };
            // alert(revision_plan.type)
            const actionLabel = actions[newStatus];
            const typeLabel = revision_plan.type === 'p' ? 'Project Profile' : 'Project Design';

            const confirmMessage = `Are you sure you want to ${actionLabel} the ${typeLabel} entitled "${revision_plan.project_title}"?`;
            const actionlabelcomplete = actionLabel + ' ' + typeLabel;
            if (!confirm(confirmMessage)) return;

            router.post(
                `/status/revision/update/${revision_plan.id}/${actionlabelcomplete}/${newStatus}`,
                {
                    remarks: this.remarks,   // ← SEND IT HERE
                    column: column,
                    return_request_type: this.return_request_type
                },
                {
                    preserveScroll: true
                }
            );
        },
        // New helper methods for improved UI
        getStatusBadgeClass(status) {
            const classes = {
                '-2': 'text-white',
                '-1': 'text-white',
                '0': 'text-dark',
                '1': 'ext-white',
                '2': 'text-white',
                '7': 'text-white'
            };
            return classes[status] || 'bg-secondary text-white';
            // '-2': 'bg-danger text-white',
            //     '-1': 'bg-secondary text-white',
            //     '0': 'bg-warning text-dark',
            //     '1': 'bg-info text-white',
            //     '2': 'bg-success text-white',
            //     '7': 'bg-danger text-white'
        },
        getStatusIcon(status) {
            const icons = {
                '-2': 'fas fa-undo',
                '-1': 'fas fa-save',
                '0': 'fas fa-paper-plane',
                '1': 'fas fa-search',
                '2': 'fas fa-check',
                '7': 'fas fa-exclamation-triangle'
            };
            return icons[status] || 'fas fa-question';
        },
        getStatusLabel(status) {
            const labels = {
                '-2': 'Returned',
                '-1': 'Saved',
                '0': 'Submitted',
                '1': 'Reviewed',
                '2': 'Approved',
                '7': 'Request for Return'
            };
            return labels[status] || 'Unknown';
        },
        getStatusOvalClass(status) {
            const classes = {
                '-2': 'status-oval-danger',
                '-1': 'status-oval-secondary',
                '0': 'status-oval-warning',
                '1': 'status-oval-info',
                '2': 'status-oval-success',
                '7': 'status-oval-danger'
            };
            return classes[status] || 'status-oval-secondary';
        },
        getForwardButtonClass(dat) {
            const isEnabled = (parseInt(dat.year) + 1 == new Date().getFullYear() + 1) && (dat.status == 0 || dat.status==1);
            return `btn btn-sm ${isEnabled ? 'btn-success' : 'btn-secondary'} ${isEnabled ? '' : 'disabled'}`;
        },
        getForwardButtonTitle(dat) {
            const isEnabled = (parseInt(dat.year) + 1 == new Date().getFullYear() + 1) && dat.status == 0;
            return isEnabled ? `Forward to ${parseInt(dat.year) + 1}` : 'Cannot forward this project';
        },
        triggerPaperPlaneAnimation() {
            console.log('🎉 Flying plane animation triggered!');
            this.showFlyingPlane = true;
            setTimeout(() => {
                this.showFlyingPlane = false;
            }, 4500); // Hide after 2.5 seconds to match animation duration
        },
        getTypeBadgeClass(type) {
            return type === 'p' ? 'badge bg-primary' : 'badge bg-info text-white';
        },
        deleteRevisionPlan(id) {
            const confirmMessage = `Are you sure you want to delete this revision plan? This action cannot be undone.`;
            if (!confirm(confirmMessage)) {
                return;
            }

            router.delete(
                `/revision/${id}/delete`,
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        console.log('Revision plan deleted successfully');
                    },
                    onError: (errors) => {
                        console.error('Failed to delete revision plan:', errors);
                        alert('Failed to delete revision plan. Please try again.');
                    }
                }
            );
        },
        fitTableWidth() {
            const tableContainer = this.$refs.tableResponsive;
            if (!tableContainer) return;

            const table = tableContainer.querySelector('table');
            if (!table) return;

            // Get the container width (the visible area)
            const containerWidth = tableContainer.parentElement.offsetWidth;

            // Get the table's full content width
            const tableWidth = (table.scrollWidth)+35;

            // Calculate the zoom ratio needed
            const zoomRatio = containerWidth / tableWidth;

            // Apply zoom to fit (minimum 0.5, maximum 1)
            const zoomLevel = Math.min(1, Math.max(0.5, zoomRatio));

            // Apply CSS zoom
            table.style.transform = `scale(${zoomLevel})`;
            table.style.transformOrigin = 'left top';
            table.style.width = `${100 / zoomLevel}%`;
            table.parentElement.style.display = 'flex';

            // Collapse the sidebar
            // const sidebar = document.querySelector('.sidebar');
            // if (sidebar) {
                // sidebar.classList.add('collapsed');
            // }
        },

        // EXPORT EXCEL
        // DOWNLOAD EXCEL
        async downloadExcel(format_type) {
            // Use the same filename logic you already have, or customize as needed
            // Use the same filename logic you already have, or customize as needed
            // const file_name = this.opcr_current.semester + " - " + this.opcr_current.year + " - " + this.opcr_current.office.FFUNCTION + ".xlsx";
            if(this.year_filtering_d === ''){
                alert('Please select year first before generating.');
                return;
            }
            if(this.ssf_filter === ''){
                alert('Please select sector/source of funds first before generating.');
                return;
            }
            const file_name = this.year_filtering_d+ " "+this.ssf_filter+" AIP Test "+format_type+".xlsx"
            try {
                const response = await axios.get('/api/api_ppa/print/aip/excel/version', {
                    params: {
                        ccet: this.ccet,
                        year: this.year_filtering_d,
                        ssf_filter: this.ssf_filter,
                        format_type: format_type
                    },
                    responseType: 'blob'   // required for file download
                });

                // Create a blob URL and trigger the download
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', file_name);
                document.body.appendChild(link);
                link.click();

                // Clean up
                link.remove();
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Download failed:', error);
                // Show user feedback (e.g., toast notification)
            }
        },

        // BUDGET PREP
        generateBudgetPrep(revisionPlanId){
            if (!revisionPlanId) {
                return;
            }

            if (!confirm('Generate Budget Prep for this project?')) {
                return;
            }

            this.$inertia.post('/budget_prep/sync/' + revisionPlanId, {
                revision_plan_id: revisionPlanId
            }, {
                onSuccess: (page) => {
                    // Optional: handle success
                },
                onError: (errors) => {
                    console.error(errors);
                }
            });
        }
    }
};
</script>

