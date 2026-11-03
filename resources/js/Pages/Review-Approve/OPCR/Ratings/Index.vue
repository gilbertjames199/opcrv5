<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <!-- <p class="text-center"> -->
        <h4 class="text-center">Review/Approve </h4>
        <!-- </p> -->
        <div class="peers fxw-nw jc-sb ai-c">
            <div class="peers">
                <h3>OPCR (Rating)</h3>
            </div>
            <!-- <Link :href="'/Sectoral'">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link> -->
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
                        <!-- <Link class="tool-btn tool-btn-primary" :href="`/Societal/create`">
                            <i class="fas fa-plus"></i> Add Societal Goals
                        </Link> -->
                        test displayModal: {{ displayModal }}
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
                            <input v-model="search" type="text" class="filter-input" placeholder="Search ratings...">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100" v-if="!displayModal">
            <div class="bgc-white p-20 bd">
                <!-- Table Header with Title and Stats -->
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h4 class="text-primary mb-0">
                        <i class="fas fa-list-ul me-2"></i>
                        OPCR Ratings List
                    </h4>
                    <div class="text-muted small">
                        Showing {{ data.from }} to {{ data.to }} of {{ data.total }} entries
                    </div>
                </div>

                <!-- Responsive Table Container -->
                <div class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-head-sticky">
                            <tr>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-building me-2"></i>Office
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-calendar me-2"></i>Semester
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-calendar-alt me-2"></i>Period Covered
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-info-circle me-2"></i>Status
                                </th>
                                <th class="border-0 fw-semibold text-primary text-center">
                                    <i class="fas fa-cogs me-2"></i>Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data">
                                <td>
                                    {{ dat.office.FFUNCTION }}
                                    <!-- {{ dat.id }} -->
                                </td>
                                <td>
                                    {{ dat.semester }}

                                    <!-- {{ dat.rating_status }} -->
                                </td>
                                <td>
                                    {{ dat.opcr_date }}
                                </td>
                                <td>
                                    {{ getStatus(dat.rating_status) }}


                                </td>
                                <td class="text-center">
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
                                                <!-- <Link class="dropdown-item" :href="`/Societal/${dat.id}/edit`">Edit</Link> -->
                                                <button
                                                    class="dropdown-item"
                                                    @click="viewModal(dat.id, dat.rating_status, dat)">
                                                        View
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    class="dropdown-item"
                                                    @click="viewPrintModal(dat.id, dat.office.FFUNCCOD)">
                                                        Print
                                                </button>
                                                <!-- <Link class="text-danger dropdown-item" @click="deleteSectoral(dat.id)">
                                                Delete</Link> -->
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12" >
                        <pagination :next="data.next_page_url" :prev="data.prev_page_url" v-bind="source === 'ppdo_approval' ? { source: source } : {}"/>
                    </div>
                </div>

            </div>
            <!-- {{ data }} -->
        </div>
        <!-- </div> -->
        <Modal v-if="displayModal" @close-modal-event="hideModal" :title="`${mode_1}`" :z-index="1055">
            <!-- <div class="masonry-item w-100" v-if="displayModal">
            <div class="bgc-white p-20 bd">

            <div class="d-flex justify-content-end">
                <button
                    type="button"
                    class="btn-close"
                    aria-label="Close"
                    @click="hideModal">
                </button>
            </div> -->

            <!-- {{ opcr_current }} -->
            <!-- LABEL CARD  -->
            <div class="sticky-header modal-summary-card">
                <div class="d-flex justify-content-end mb-2">
                    <button
                        type="button"
                        class="btn btn-success text-white shadow-sm"
                        @click="downloadExcel(opcrListId)">
                        <i class="fas fa-file-excel me-2"></i>
                        Export to Excel
                    </button>
                </div>
                <div><b>OFFICE:&nbsp;</b><u>{{ opcr_current?.office?.FFUNCTION ?? '-' }}</u></div>
                <div><b>SEMESTER:&nbsp;</b><u>{{ opcr_current.semester }}</u></div>
                <div><b>PERIOD COVERED:&nbsp;</b><u>{{ opcr_current.opcr_date }}</u></div>
                <div><b>STATUS:&nbsp;</b><u>{{ getStatus(opcr_current.rating_status) }}</u></div>
            </div>

            <!-- <button @click="downloadExcel(opcrListId)">Export Excel</button> -->

            <div v-if="mode_1==='Review'">
                <button @click="toggleAllMovVisibility(false)" v-if="!show_all_not_clicked" class="btn btn-link p-0">
                    Collapse All
                </button>
                <button @click="toggleAllMovVisibility(true)" v-else class="btn btn-link p-0">
                    Expand all
                </button>
                <div class="d-flex justify-content-center" >
                    <!-- <iframe :src="my_link" style="width:100%; height:500px" /> -->
                    <!-- {{ opcr_data }} -->
                    <!-- d-flex justify-content-center  -->
                    <div class="table-responsive w-100" style="max-width:100%; overflow-x:auto;">
                        <table class="table table-sm table-bordered border-dark table-striped table-hover modern-rating-table" style="table-layout: fixed;">
                            <!-- class="sticky-header" -->
                            <thead >
                                <tr class="text-white" style="background-color: #026673">
                                    <th rowspan="2" ><h5>MFO</h5></th>
                                    <th rowspan="2" ><h5>PAPS</h5></th>
                                    <th rowspan="2" ><h5>Accomplishments</h5></th>
                                    <th colspan="7" rowspan="1" style="text-align: center" ><h5>Rating</h5></th>
                                    <th rowspan="2" ><h5>Remarks</h5></th>
                                    <th rowspan="2" ><h5>MOVs</h5></th>
                                </tr>
                                <tr class="text-white" style="background-color: #026673">
                                    <th><h5>Q1</h5></th>
                                    <th><h5>Q2</h5></th>
                                    <th><h5>Q3</h5></th>
                                    <th><h5>E1</h5></th>
                                    <th><h5>E2</h5></th>
                                    <th><h5>E3</h5></th>
                                    <th><h5>T1</h5></th>
                                    <!-- <th></th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(dat, index) in opcr_data" :key="index">
                                    <!-- MFO, PAPS, ACCOMPLISHMENTS -->
                                    <tr :style="{
                                            backgroundColor: opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
                                            '--bs-table-accent-bg': opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
                                            fontWeight: opcr_data[index].mov_is_visible ? 'bold' : 'normal',
                                        }">
                                        <!-- MFO -->
                                        <td rowspan="3" class="review-col-mfo">
                                            <!-- {{ dat }} -->
                                            {{ dat.mfo_desc }}
                                        </td>
                                        <!-- PAPS -->
                                        <td rowspan="3" class="review-col-paps">
                                            {{ dat.paps_desc }}
                                        </td>
                                        <!-- Actual Accomplishments -->
                                        <td rowspan="3" class="review-col-accomplishment">
                                            {{ dat.accomplishments }}
                                            <hr>
                                            <div><b>DPCR Score:&nbsp;</b>{{ computeAverageScore(dat.monthly_targets) }}</div>
                                        </td>

                                        <!-- Q1 -->
                                        <td class="review-col-rating">
                                            <!-- width: 2.5em;  -->
                                            <div>{{ dat.q1_standard }}</div>
                                        </td>
                                        <!-- Q2 -->
                                        <td class="review-col-rating">
                                            <!-- {{  dat }} -->
                                            <!-- width: 2.5em;  -->
                                            <div>{{ dat.q2_standard }}</div>
                                        </td>
                                        <!-- Q3 -->
                                        <td class="review-col-rating">
                                            <!-- width: 2.5em;  -->
                                            <div>{{ dat.q3_standard }}</div>
                                        </td>
                                        <!-- E1 -->
                                        <td class="review-col-rating">
                                            <!--  width: 2.5em; -->
                                            <div>Standard Response Time</div>
                                            <!-- <select v-model="opcr_data[index].e1" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].e1, opcr_data[index].opcr_rating_id, 'e1')"
                                                :disabled="dat.e1_standard === 'No'"
                                                :style="dat.e1_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''"
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && dat.e1_standard === 'Yes' && !dat.e1" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div> -->
                                        </td>
                                        <!-- E2 -->
                                        <td class="review-col-rating">
                                            <!-- width: 2.5em;  -->
                                            <div>Quantity Based</div>
                                            <!-- <select v-model="opcr_data[index].e2" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].e2, opcr_data[index].opcr_rating_id, 'e2')"
                                                :disabled="dat.e2_standard === 'No'"
                                                :style="dat.e2_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''"
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && dat.e2_standard === 'Yes' && !dat.e2" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div> -->
                                        </td>
                                        <!-- E3 -->
                                        <td class="review-col-rating">
                                            <!-- style="width: 2.5em; text-align: center;"   -->
                                            <div>Optimum use of resources</div>
                                            <!-- <select v-model="opcr_data[index].e3" class="form-select" style="width: 4.2em; text-align: center;" type="number"
                                                @change="saveRating(opcr_data[index].e3, opcr_data[index].opcr_rating_id, 'e3')"
                                                :disabled="dat.e3_standard === 'No'"
                                                :style="dat.e3_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''"
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && dat.e3_standard === 'Yes' && !dat.e3" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div> -->
                                        </td>
                                        <!-- T1 -->
                                        <td class="review-col-rating">
                                            <div>Timeliness (Deadline)</div>
                                            <!-- t1_standard: {{ dat.t1_standard }} -->
                                            <!-- :disabled="dat.t1_standard !== 'Yes'"
                                                :style="dat.t1_standard !== 'Yes' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''" -->
                                            <!-- <select v-model="opcr_data[index].t1" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].t1, opcr_data[index].opcr_rating_id, 't1')"

                                                :disabled="
                                                    dat.t1_standard === 'No' ||
                                                    dat.t1_standard === null ||
                                                    dat.t1_standard === undefined ||
                                                    Number.isNaN(dat.t1_standard)
                                                "
                                                :style="
                                                    dat.t1_standard === 'No' ||
                                                    dat.t1_standard === null ||
                                                    dat.t1_standard === undefined ||
                                                    Number.isNaN(dat.t1_standard)
                                                        ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;'
                                                        : ''
                                                "
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && dat.t1_standard === 'Yes' && !dat.t1" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div> -->
                                        </td>
                                        <!-- <td></td> -->
                                        <!-- REMARKS -->
                                        <td rowspan="2" class="review-col-remarks">
                                            <!-- @input="autoResize($event)" ref="remarksTextarea"-->
                                            <p><b>Office Remarks</b></p>
                                            <textarea class="form-control"
                                                v-model="opcr_data[index].remarks"
                                                @change="saveRating(opcr_data[index].remarks, opcr_data[index].opcr_rating_id,'remarks')"
                                                style="background-color: #ABB3BFFF; color: #212427FF;"
                                                disabled
                                            />
                                        </td>
                                        <!-- MOVS -->
                                        <td rowspan="2" class="review-col-mov">
                                            <!--opcr_data[index].mov_is_visible: {{ opcr_data[index].mov_is_visible }}
                                            count_movs: {{ opcr_data[index].count_movs }}
                                            :disabled="!dat.movs"
                                                :style="!dat.movs ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''" -->
                                            <button
                                                v-if="!opcr_data[index].mov_is_visible"
                                                @click="updateMOVisVisible(opcr_data[index].mov_is_visible, index)"
                                                class="p-1 rounded bg-transparent hover:bg-blue-100 border-0"
                                                title="View MOVs"
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
                                            </button>
                                            <button
                                                v-else
                                                @click="updateMOVisVisible(opcr_data[index].mov_is_visible, index)"
                                                class="p-1 rounded bg-transparent hover:bg-blue-100 border-0"
                                                title="View MOVs"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-eye-slash-fill"
                                                    viewBox="0 0 16 16">
                                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <!-- SELF RATING -->
                                    <tr :style="{
                                            backgroundColor: opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
                                            '--bs-table-accent-bg': opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
                                            fontWeight: opcr_data[index].mov_is_visible ? 'bold' : 'normal',
                                        }">
                                        <!-- Q1 -->
                                        <td class="review-col-rating">
                                            <!-- width: 2.5em;  -->
                                            <select v-model="opcr_data[index].q1" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].q1, opcr_data[index].opcr_rating_id, 'q1')" disabled>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && !dat.q1" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div>
                                        </td>
                                        <!-- Q2 -->
                                        <td class="review-col-rating">
                                            <!-- {{  dat }} -->
                                            <!-- width: 2.5em;  -->
                                            <select v-model="opcr_data[index].q2" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].q2, opcr_data[index].opcr_rating_id, 'q2')"
                                            disabled>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && !dat.q2" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div>
                                        </td>
                                        <!-- Q3 -->
                                        <td class="review-col-rating">
                                            <!-- width: 2.5em;  -->
                                            <select v-model="opcr_data[index].q3" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].q3, opcr_data[index].opcr_rating_id, 'q3')" disabled
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && !dat.q3" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div>
                                        </td>
                                        <!-- E1 -->
                                        <td class="review-col-rating">
                                            <!--  width: 2.5em; -->
                                            <select v-model="opcr_data[index].e1" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].e1, opcr_data[index].opcr_rating_id, 'e1')"
                                                disabled
                                                :style="dat.e1_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''"
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && dat.e1_standard === 'Yes' && !dat.e1" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div>
                                        </td>
                                        <!-- E2 -->
                                        <td class="review-col-rating">
                                            <!-- width: 2.5em;  -->
                                            <select v-model="opcr_data[index].e2" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].e2, opcr_data[index].opcr_rating_id, 'e2')"
                                                disabled
                                                :style="dat.e2_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''"

                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && dat.e2_standard === 'Yes' && !dat.e2" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div>
                                        </td>
                                        <!-- E3 -->
                                        <td class="review-col-rating">
                                            <!-- style="width: 2.5em; text-align: center;"   -->
                                            <select v-model="opcr_data[index].e3" class="form-select" style="width: 4.2em; text-align: center;" type="number"
                                                @change="saveRating(opcr_data[index].e3, opcr_data[index].opcr_rating_id, 'e3')"
                                                disabled
                                                :style="dat.e3_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''"
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && dat.e3_standard === 'Yes' && !dat.e3" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div>
                                        </td>
                                        <!-- T1 -->
                                        <td class="review-col-rating">
                                            <!-- t1_standard: {{ dat.t1_standard }} -->
                                            <!-- :disabled="dat.t1_standard !== 'Yes'"
                                                :style="dat.t1_standard !== 'Yes' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''" -->
                                                <!-- :disabled="
                                                    dat.t1_standard === 'No' ||
                                                    dat.t1_standard === null ||
                                                    dat.t1_standard === undefined ||
                                                    Number.isNaN(dat.t1_standard)
                                                " -->
                                            <select v-model="opcr_data[index].t1" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].t1, opcr_data[index].opcr_rating_id, 't1')"
                                                :style="
                                                    dat.t1_standard === 'No' ||
                                                    dat.t1_standard === null ||
                                                    dat.t1_standard === undefined ||
                                                    Number.isNaN(dat.t1_standard)
                                                        ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;'
                                                        : ''
                                                "
                                                disabled
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && dat.t1_standard === 'Yes' && !dat.t1" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- PPDO Ratings -->
                                    <tr :style="{
                                            backgroundColor: opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
                                            '--bs-table-accent-bg': opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
                                            fontWeight: opcr_data[index].mov_is_visible ? 'bold' : 'normal',
                                        }">

                                        <!-- PPDO Q1 -->
                                        <td class="review-col-rating">

                                            <select v-model="opcr_data[index].ppdo_q1" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].ppdo_q1, opcr_data[index].opcr_rating_id, 'ppdo_q1')">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && !dat.ppdo_q1" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div>
                                        </td>
                                        <!-- PPDO Q2 -->
                                        <td class="review-col-rating">
                                            <select v-model="opcr_data[index].ppdo_q2" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].ppdo_q2, opcr_data[index].opcr_rating_id, 'ppdo_q2')">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && !dat.ppdo_q2" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div>
                                        </td>
                                        <!-- PPDO Q3 -->
                                        <td class="review-col-rating">
                                            <select v-model="opcr_data[index].ppdo_q3" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].ppdo_q3, opcr_data[index].opcr_rating_id, 'ppdo_q3')">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && !dat.ppdo_q3" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div>
                                        </td>
                                        <!-- PPDO E1 -->
                                        <td class="review-col-rating">
                                            <select v-model="opcr_data[index].ppdo_e1" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].ppdo_e1, opcr_data[index].opcr_rating_id, 'ppdo_e1')"
                                                :disabled="dat.e1_standard === 'No'"
                                                :style="dat.e1_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && dat.e1_standard === 'Yes' && !dat.ppdo_e1" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div>
                                        </td>
                                        <!-- PPDO E2 -->
                                        <td class="review-col-rating">
                                            <select v-model="opcr_data[index].ppdo_e2" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].ppdo_e2, opcr_data[index].opcr_rating_id, 'ppdo_e2')"
                                                :disabled="dat.e2_standard === 'No'"
                                                :style="dat.e2_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>


                                            <div v-if="submit_attempt==true &&
                                                dat.e2_standard === 'Yes' &&
                                                !dat.ppdo_e2"
                                                style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div>
                                        </td>
                                        <!-- PPDO E3 -->
                                        <td class="review-col-rating">
                                            <!-- rating e3: {{ dat.rating_e }} -->
                                            <select v-model="opcr_data[index].ppdo_e3" class="form-select" style="width: 4.2em; text-align: center;" type="number"
                                                @change="saveRating(opcr_data[index].ppdo_e3, opcr_data[index].opcr_rating_id, 'ppdo_e3')"
                                                :disabled="dat.e3_standard === 'No'"
                                                :style="dat.e3_standard === 'No' ?
                                                'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && dat.e3_standard === 'Yes' && !dat.ppdo_e3" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div>
                                        </td>
                                        <!-- PPDO T1 -->
                                        <td class="review-col-rating">
                                            <!-- dat.ppdo_t1_standard: {{ dat.ppdo_t1_standard }} --
                                            dat.t1_standard: {{ dat.t1_standard }} -->
                                            <select v-model="opcr_data[index].ppdo_t1" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                                @change="saveRating(opcr_data[index].ppdo_t1, opcr_data[index].opcr_rating_id, 'ppdo_t1')"
                                                :disabled="
                                                    dat.t1_standard === 'No' ||
                                                    dat.t1_standard === null ||
                                                    dat.t1_standard === undefined ||
                                                    Number.isNaN(dat.ppdo_t1_standard)
                                                "
                                                :style="
                                                    dat.t1_standard === 'No' ||
                                                    dat.t1_standard === null ||
                                                    dat.t1_standard === undefined ||
                                                    Number.isNaN(dat.ppdo_t1_standard)
                                                        ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;'
                                                        : ''
                                                ">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <div v-if="submit_attempt==true && dat.t1_standard === 'Yes' && !dat.ppdo_t1" style="color: red; font-weight: bold">
                                                Rating for this field is required to proceed with submission.
                                            </div>
                                        </td>
                                        <!-- REMARKS -->
                                        <td rowspan="1" class="review-col-remarks">
                                            <p><b>PPDO Remarks</b></p>
                                            <!-- @input="autoResize($event)" ref="remarksTextarea"-->
                                            <textarea class="form-control"
                                                v-model="opcr_data[index].ppdo_remarks"
                                                @input="markPpdoRemarksUnsaved(opcr_data[index].opcr_rating_id)"
                                                @change="saveRating(opcr_data[index].ppdo_remarks, opcr_data[index].opcr_rating_id,'ppdo_remarks')"
                                            />
                                        </td>
                                        <!-- MOVS -->
                                        <td rowspan="1" class="review-col-mov">
                                            <div class="d-flex justify-content-center px-2">
                                                <button
                                                    @click="showModalAccomplishmentMOV(dat.idpaps, dat.department_code, dat.year, dat.sem, dat)"
                                                    class="btn btn-sm btn-primary mov-btn text-white"
                                                    title="View MOVs"
                                                >
                                                    <i class="fas fa-folder-open me-1"></i>
                                                    SHOW MOV
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-if="opcr_data[index].mov_is_visible && parseFloat(opcr_data[index].count_movs)>0" >
                                        <th class="bg-secondary text-white">
                                            <!-- class="no-stripe-bg" -->
                                        </th>
                                        <!-- FILES LABEL -->
                                        <th class="bg-secondary text-white">
                                            <span v-if="parseFloat(opcr_data[index].count_movs)>1">Files</span>
                                            <span v-else>File</span>
                                        </th>
                                        <!-- DOWNLOAD LABEL -->
                                        <th class="bg-secondary text-white">
                                            Download
                                        </th>
                                        <!-- VIEW LABEL -->
                                        <th class="bg-secondary text-white">
                                            View
                                        </th>
                                        <th colspan="7" class="bg-secondary text-white"></th>
                                        <th class="bg-secondary text-white"></th>
                                    </tr>
                                    <tr v-if="opcr_data[index].mov_is_visible && parseFloat(opcr_data[index].count_movs)>0" v-for="file in dat.movs">
                                        <td class="no-stripe-bg">

                                        </td>
                                        <!-- FILENAME -->
                                        <td>
                                            <img :src="getPreUploadFileIcon(file.filename.split('.').pop())" alt="file preview" style="width:30px; height:30px; object-fit:cover;"/>&nbsp;
                                            {{ file.filename }}
                                        </td>
                                        <!-- MOV ICON -->
                                        <td>
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
                                        </td>
                                        <!-- PREVIEW -->
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
                                        </td>
                                        <td colspan="7"></td>
                                        <td></td>
                                    </tr>
                                    <tr v-if="opcr_data[index].mov_is_visible && parseFloat(opcr_data[index].count_movs)<1">
                                        <td></td>
                                        <td colspan="11">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div class="d-inline-block px-3 py-2 bg-danger bg-opacity-10 border border-danger rounded">
                                                <span class="text-danger fw-bold">No MOVs uploaded!!!</span>
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                                <tr class="table-summary-row">
                                    <td colspan="1"></td>
                                    <td colspan="3">TOTAL RATING (Office)</td>
                                    <td>
                                        {{ getTotalAverage2() }}
                                    </td>
                                    <td colspan="3">TOTAL RATING (PPDO)</td>
                                    <td>
                                        {{ calculatePpdoTotal()}}
                                    </td>

                                    <!-- <td colspan="3">TOTAL RATING (DPCR)</td>
                                    <td>{{ computeDPCRTotal(opcr_data) }}</td> -->
                                    <td colspan="3"></td>
                                    <!-- <td></td> -->
                                </tr>
                                <tr class="table-summary-row">
                                    <td colspan="2"></td>
                                    <td colspan="3">FINAL AVERAGE RATING (Office)</td>
                                    <td>{{ getAverageAll2() }}</td>
                                    <td colspan="3">FINAL AVERAGE RATING (PPDO)</td>
                                    <td>{{ calculatePpdoAverage() }} </td>
                                    <!-- <td colspan="3">FINAL AVERAGE RATING (DPCR)</td>
                                    <td>{{ computeDPCRAverage(opcr_data) }}</td> -->
                                    <td></td>
                                    <td></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <div v-if="mode_1==='Approve'">
                <div class="d-flex justify-content-center" >
                    <div class="table-responsive w-100" style="max-width:100%; overflow-x:auto;">
                        <!-- <table class="table table-hover table-bordered border-dark"> -->
                        <table class="table table-sm table-bordered border-dark table-striped table-hover modern-rating-table" style="table-layout: fixed;">
                            <!-- class="sticky-header" -->
                            <thead >
                                <tr class="bg-secondary text-white">
                                    <th rowspan="2">Major Final Output</th>
                                    <th rowspan="2">Success Indicators (Targets + Measures)</th>
                                    <th rowspan="2">Alloted Budget</th>
                                    <th rowspan="2">Accountable Division</th>
                                    <th rowspan="2">Actual Accomplishments</th>
                                    <th colspan="4">
                                        <input
                                            type="radio"
                                            name="rating"
                                            :checked="currentRatingType === '0'"
                                            @change="setRatingType('ppdo', opcr_current.id)"
                                        >
                                        Rating (Self Rating)
                                        <!-- -{{ opcr_current.id }} -ratingxcxv type - {{ currentRatingType }} -->
                                    </th>
                                    <th colspan="4">
                                        <!-- @change="setRatingType('dpcr', opcr_current.id)" -->
                                        <input
                                            type="radio"
                                            name="rating"
                                            :checked="opcr_current.year < 2026
                                                ? currentRatingType === '1'
                                                : currentRatingType === '2'"
                                            @change="setRatingType('ppdo_verification', opcr_current.id)"
                                        >
                                        Rating (PPDO Score)
                                    </th>
                                    <th rowspan="2">Remarks</th>
                                    <th rowspan="2">MOV</th>
                                </tr>
                                <tr class="bg-secondary text-white">
                                    <th>Quality</th>
                                    <th>Efficiency</th>
                                    <th>Timeliness</th>
                                    <th>Average</th>
                                    <th>Quality</th>
                                    <th>Efficiency</th>
                                    <th>Timeliness</th>
                                    <th>Average</th>
                                </tr>
                                <!-- <tr class="bg-secondary text-white">
                                    <th>Quality</th>
                                    <th>Efficiency</th>
                                    <th>Timeliness</th>
                                    <th>Average</th>
                                </tr> -->
                            </thead>
                            <tbody>
                                <tr v-for="(opcr, index) in opcr_data" :key="index">
                                    <td v-if="index === 0 || opcr.mfo_desc !== opcr_data[index - 1].mfo_desc"
                                        :rowspan="getRowspan(opcr.mfo_desc, index)" style="vertical-align:middle">{{ opcr.mfo_desc }}
                                    </td>
                                    <td v-if="index === 0 || opcr.success_indicator !== opcr_data[index - 1].success_indicator"
                                        :rowspan="getRowspanIndicator(opcr.success_indicator, index)"
                                        style="vertical-align:middle">
                                        {{ opcr.target_success_indicator }}
                                    </td>
                                    <td></td>
                                    <td v-if="index === 0 || opcr.office_accountable !== opcr_data[index - 1].office_accountable"
                                        :rowspan="getRowspan2(opcr.office_accountable, index)"
                                        style="vertical-align:middle">
                                        {{ opcr.office_accountable }}
                                    </td>

                                    <td>
                                        <!-- <textarea v-model="opcr_data[index].accomplishments"
                                            style="height: inherit"></textarea> -->
                                        {{ opcr_data[index].accomplishments }}
                                    </td>
                                    <!-- SELF RATING ********************************************* -->
                                    <td>
                                        <!-- <input v-model="opcr_data[index].rating_q" class="centered-input" type="number"
                                            min="0" max="5" step="1" disabled> -->
                                        {{ opcr_data[index].rating_q }}
                                    </td>
                                    <td>
                                        {{ opcr_data[index].rating_e }}
                                    </td>
                                    <td>
                                        <!-- <input v-model="opcr_data[index].rating_t" class="centered-input" type="number"
                                            min="0" max="5" step="1" disabled> -->
                                        {{ opcr_data[index].rating_t }}
                                    </td>
                                    <td>
                                        <!-- <input :value="computeAverage(opcr_data[index])" class="centered-input" type="number"
                                        min="0" max="5" step="1" disabled
                                        > -->
                                        {{ computeAverage(opcr_data[index]) }}
                                    </td>
                                    <!-- PPDO RATING ************************************************-->
                                     <td>
                                        {{ format_number_conv(average([opcr.ppdo_q1, opcr.ppdo_q2, opcr.ppdo_q3]),
                                                2,true
                                            ) }}
                                    </td>
                                    <td>
                                        {{ format_number_conv(average([opcr.ppdo_e1, opcr.ppdo_e2, opcr.ppdo_e3]),
                                                2,true
                                            ) }}
                                        <!-- {{ computeAverageByType(opcr_data[index].monthly_targets,"e") }} -->
                                    </td>
                                    <td>
                                        {{ opcr.ppdo_t1 }}
                                        <!-- {{ opcr_data[index].monthly_targets.t1 }} -->
                                    </td>
                                    <td>
                                    <!-- <input :value="computeAverage(opcr_data[index])" class="centered-input" type="number"
                                       min="0" max="5" step="1" disabled
                                    > -->
                                        {{
                                            format_number_conv(
                                                computeAverageQET(
                                                    average([opcr.ppdo_q1, opcr.ppdo_q2, opcr.ppdo_q3]),
                                                    average([opcr.ppdo_e1, opcr.ppdo_e2, opcr.ppdo_e3]),
                                                    opcr.ppdo_t1
                                                ),
                                                2,true
                                            )

                                        }}
                                    </td>


                                    <td><textarea v-model="opcr_data[index].remarks" class="form-control"
                                            style="height: inherit"></textarea>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            class="btn btn-primary text-white"
                                            @click="showModalMOV(opcr_data[index].id)">Upload MOVs
                                        </button>
                                        <hr>
                                        <button
                                            @click="showModalAccomplishmentMOV(opcr.idpaps, opcr.department_code, opcr.year, opcr.sem, opcr)"
                                            class="btn btn-primary text-white"
                                            title="View MOVs"
                                        >
                                            SHOW MOV
                                        </button>
                                    </td>
                                </tr>
                                <!-- TOTALS -->
                                <tr class="table-summary-row">
                                    <td colspan="5"></td>
                                    <td colspan="3">TOTAL RATING (Self Rating)</td>
                                    <td>
                                        {{ getTotalAverage2() }}

                                    </td>

                                    <td colspan="3">TOTAL RATING (PPDO)</td>
                                    <td>
                                        {{ calculatePpdoTotal() }}
                                        <!--DPCR {{ computeDPCRTotal(opcr_data) }} -->
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!-- AVERAGES -->
                                <tr class="table-summary-row">
                                    <td colspan="5"></td>
                                    <td colspan="3">FINAL AVERAGE RATING (Self Rating)</td>
                                    <td>{{ getAverageAll2() }}</td>
                                    <td colspan="3">FINAL AVERAGE RATING (PPDO)</td>
                                    <td>
                                        {{ calculatePpdoAverage() }}
                                        <!-- DPCR -->
                                        <!-- {{ computeDPCRAverage(opcr_data) }} -->
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
            <!-- <table>
                <tr v-for="(item, index) in opcr_data" :key="index">
                    <td>Q:
                            {{ average([
                            item.ppdo_q1,
                            item.ppdo_q2,
                            item.ppdo_q3
                        ]) }}
                    </td>
                    <td>E:
                        {{
                            average([
                                    item.ppdo_e1,
                                    item.ppdo_e2,
                                    item.ppdo_e3
                                ])
                        }}
                    </td>

                    <td>T:
                        {{
                            average([
                                    item.ppdo_t1
                                ])
                        }}
                    </td>
                    <td>
                        Row:
                        {{
                            (() => {
                                const qAvg = average([
                                    item.ppdo_q1,
                                    item.ppdo_q2,
                                    item.ppdo_q3
                                ]);

                                const eAvg = average([
                                    item.ppdo_e1,
                                    item.ppdo_e2,
                                    item.ppdo_e3
                                ]);

                                const tAvg = average([
                                    item.ppdo_t1
                                ]);

                                let divisor = 0;

                                if (parseFloat(qAvg) > 0) divisor++;
                                if (parseFloat(eAvg) > 0) divisor++;
                                if (parseFloat(tAvg) > 0) divisor++;

                                return divisor > 0
                                    ? ((qAvg + eAvg + tAvg) / divisor).toFixed(2)
                                    : '0.00';
                            })()
                        }}
                    </td>
                    <td>TOTAL: {{ calculatePpdoTotal() }}</td>
                </tr>
            </table> -->
            <!-- {{ opcr_data }} -->
            <!-- opcr remarks -->
            <table v-if="hasOpcrRemarks" class="table table-sm table-bordered border-dark table-striped table-hover modern-rating-table" style="table-layout: fixed;">
                <thead>
                    <tr>
                        <th>Remarks</th>
                        <th>Created at</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="remark in opcr_current?.opcr_remarks" :key="remark.id">
                        <tr v-if="remark.remarks && remark.remarks.trim() !== ''">
                            <td>{{ remark.remarks }}</td>
                            <td>{{ remark.created_at }}</td>
                            <td>
                                <button
                                    class="btn btn-sm btn-danger"
                                    type="button"
                                    @click="deleteRemark(remark.id)"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
            <div class="d-flex justify-content-center align-items-center gap-2">
                <label class="mb-0">REMARKS:</label>
                <input class="form-control" v-model="form.remarks" type="text" @input="markFinalRemarkUnsaved" />
                <button class="btn btn-secondary text-white" @click="saveRemarks">Save Remarks</button>
            </div>
            <div>
                <hr>
            </div>
            <div class="d-flex justify-content-center">
                <button v-if="opcr_current.rating_status == 0" @click="reviewSubmit()"
                    class="btn btn-primary text-white">Review</button>&nbsp;
                <button v-if="opcr_current.rating_status == 1" @click="approveSubmit()"
                    class="btn btn-success text-white">Approve</button>&nbsp;
                <button @click="returnSubmit()" class="btn btn-danger text-white">Return</button>
            </div>

            <!-- </div>
        </div> -->
        </Modal>
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
        <PrintModal v-if="displayPrintModal" @close-modal-event="hidePrintModal" :title="`PRINTING`">
            <div class="d-flex justify-content-center">
                <!-- {{ my_link }} -->
                <iframe :src="print_link" style="width:100%; height:400px" />
            </div>
        </PrintModal>
        <!-- ACCOMPLISHMENT MOV MODAL -->
         <!-- title="Accomplishment MOV" -->
        <ModalAccomplishmentMOV
            v-if="displayModalAccomplishmentMOV"
            @close-modal-event="closeDisplayModalAccomplishmentMOV"
            :z-index="1100"
            style="z-index: 1100;"
            :backdrop="false"
        >
            <div class="sticky-header modal-summary-card">
                <!-- <div class="d-flex justify-content-end mb-2">
                    <button
                        type="button"
                        class="btn btn-success text-white shadow-sm"
                        @click="downloadExcel(opcrListId)">
                        <i class="fas fa-file-excel me-2"></i>
                        Export to Excel
                    </button>
                </div> -->
                <div>
                    <!-- paps_cuirrent: {{ paps_current }} -->
                    <b>PPA:&nbsp;</b> <u>{{ paps_current?.paps_desc }}</u>
                </div>
                <div><b>MFO:&nbsp;</b><u>{{ paps_current?.mfo_desc }}</u></div>
                <div><b>Accomplishments:&nbsp;</b><u>{{ paps_current?.accomplishments }}</u></div>
                <div><b>OFFICE:&nbsp;</b><u>{{ opcr_current?.office?.FFUNCTION ?? '-' }}</u></div>
                <div><b>SEMESTER:&nbsp;</b><u>{{ opcr_current.semester }}</u></div>
                <div><b>PERIOD COVERED:&nbsp;</b><u>{{ opcr_current.opcr_date }}</u></div>
                <div><b>STATUS:&nbsp;</b><u>{{ getStatus(opcr_current.rating_status) }}</u></div>
            </div>
            <table class="table table-bordered table-striped accomplishment-modal-table">
                <thead>
                    <tr>
                        <th width="10%">Date</th>
                        <th width="20%">Title of Accomplishment</th>
                        <th width="25%">Brief Description</th>
                        <th width="20%">Scope</th>
                        <th width="25%">Images</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(item, index) in mov_accomplishment" :key="index">
                        <td>{{ item.date }}</td>

                        <td>
                            {{ item.title_of_accomplishment }}
                        </td>

                        <td>
                            {{ item.brief_description }}
                        </td>

                        <td style="white-space: pre-line;">
                            {{ item.scope }}
                        </td>

                        <td>
                            <div class="d-flex flex-wrap">
                                <img
                                    v-if="item.image1"
                                    :src="item.image1"
                                    class="img-thumbnail mr-2 mb-2"
                                    style="max-width:180px; max-height:180px;"
                                >
                                <img
                                    v-if="item.image2"
                                    :src="item.image2"
                                    class="img-thumbnail mb-2"
                                    style="max-width:180px; max-height:180px;"
                                >
                            </div>
                        </td>
                    </tr>

                    <tr v-if="mov_accomplishment.length === 0">
                        <td colspan="5" class="text-center">
                            No accomplishments found.
                        </td>
                    </tr>
                </tbody>
            </table>
        </ModalAccomplishmentMOV>
        <!--
        <Modal2 v-if="displayModal2" @close-modal-event="hideModal">
            <button @click="backTo()" class="btn btn-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z" />
                    <path fill-rule="evenodd"
                        d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                </svg>
            </button>
            {{ mode }} Remarks:
            <input class="form-control" v-model="remarks" type="text" />
            viewModal(opcr_id, status, opcr)
            &nbsp;v-if="auth.user.office.department_code == '04'"
            <button @click="confirmSubmission()" class="btn btn-primary text-white">Done</button>&nbsp;
            <button @click="hideModal()" class="btn btn-danger text-white">Cancel</button>
        </Modal2> -->
        <!-- {{ auth }}
        {{ auth.user.office.department_code }}
        -->
    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/ModalDynamicTitle2";
import Modal2 from "@/Shared/PrintModal";
import PrintModal from "@/Shared/ModalDynamicTitle22";
import SideModal from "@/Shared/PrintModal";
import { router } from '@inertiajs/vue3';
// import ModalAccomplishmentMOV from "@/Shared/ModalDynamicTitle";
import ModalAccomplishmentMOV from "@/Shared/PrintModal1";

export default {
    props: {
        auth: Object,
        data: Object,
        mode_1: String,
        source: String,
        disk: String
    },
    data() {
        return {
            displayModal: false,
            displayModal2: false,
            displaySideModal: false,
            displayPrintModal: false,
            displayModalAccomplishmentMOV: false,
            mov_accomplishment: [],
            opcr_data: [],
            status_val: -3,
            opcr_current: [],
            remarks: "",
            mode: "",
            form: useForm({
                remarks: "",
                opcr_list_id: "",
            }),
            can_submit: false,
            submit_attempt: false,
            show_all_not_clicked: false,
            currentRatingType: 0,
            modal_mode: 'Review',
            print_link: "",
            opcrListId: "",
            file_name: "",
            paps_current: [],
            unsavedPpdoRemarks: {},
            unsavedFinalRemark: false
        }
    },
    mounted() {
        window.addEventListener('beforeunload', this.handleBeforeUnload);
        // auto-resize all rendered textareas on initial load
        this.$nextTick(() => {
            this.$refs.remarksTextarea.forEach((ta) => {
            ta.style.height = "auto";
            ta.style.height = ta.scrollHeight + "px";
            });
        });
    },
    beforeUnmount() {
        window.removeEventListener('beforeunload', this.handleBeforeUnload);
    },

    updated() {
        // auto-resize whenever data changes after updates
        this.$nextTick(() => {
            if (this.$refs.remarksTextarea) {
                this.$refs.remarksTextarea.forEach((ta) => {
                    ta.style.height = "auto";
                    ta.style.height = ta.scrollHeight + "px";
                });
            }
        });
    },
    components: {
        Pagination, Filtering, Modal, Modal2, SideModal, PrintModal, ModalAccomplishmentMOV
    },
    computed: {
        // First computed: sum of the three category averages
        // ppdototalOfAverages() {
        //     // const avgQ = this.categoryAverage('q');
        //     // const avgE = this.categoryAverage('e');
        //     // const avgT = this.categoryAverage('t');
        //     return
        // },
        // // Second computed: mean of the three category averages
        // ppdoaverageOfAverages() {
        //     const avgQ = this.categoryAverage('q');
        //     const avgE = this.categoryAverage('e');
        //     const avgT = this.categoryAverage('t');
        //     return (avgQ + avgE + avgT) / 3;
        // }


    },
    methods: {
        // START OF PRINTING
        viewlink(opcr_id1,FFUNCCOD1) {
            var tot = this.getTotalAverage();
            var ave = this.getAverageAll();
            // var linkt = "abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-";
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;

            // https://paps.davaodeoro.gov.ph/jasperserver/flow.html??pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FOPCR_ForApproval_PA&standAlone=true&opcr_id=116&FFUNCCOD=8751-1&total=0&average=0&output=pdf
            // var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2FOPCR_Rating&standAlone=true&fbclid=IwAR1PZD2108LiuvPwxw4IoCBioYDFnY-NdpOVtDe7XKRWoKYcR5bANaX7x1M&standAlone=true&decorate=no&output=pdf';
            // var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2Fopcr_rating_revised&standAlone=true&fbclid=IwAR1PZD2108LiuvPwxw4IoCBioYDFnY-NdpOVtDe7XKRWoKYcR5bANaX7x1M&standAlone=true&decorate=no&output=pdf';
            // jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2Fopcr_standard&standAlone=true&decorate=no&output=pdf';
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FOPCR_ForApproval_PA&standAlone=true&output=pdf'
            var params = '&opcr_id=' + opcr_id1 + '&FFUNCCOD=' + FFUNCCOD1 +
                '&total=' + 0 + '&average=' + 0;
            var linkl = linkt + jasper_ip + jasper_link + params;
            this.report_link = linkl;
            return linkl;
        },
        viewPrintModal(opcr_id, FFUNCCOD){
            // this.status_val = status
            // this.opcr_current = opcr
            // var url = "/review-approve/ratings/" + opcr_id + "/view/opcr/rating/submission"
            // axios.get(url, {
            //     params: {
            //         type: this.mode_1
            //     }
            // }).then((response) => {
            //     this.opcr_data = response.data;
            //     // alert(JSON.stringify(this.opcr_data))
            // }).catch((error) => {
            //     console.error(error);
            // });
            this.print_link=this.viewlink(opcr_id, FFUNCCOD)
            this.displayPrintModal = true;
        },
        hidePrintModal(){
            this.displayPrintModal=false;
        },
        handleBeforeUnload(event) {
            const hasUnsaved = this.displayModal && (
                Object.keys(this.unsavedPpdoRemarks).length > 0 ||
                this.unsavedFinalRemark
            );
            if (hasUnsaved) {
                event.preventDefault();
                event.returnValue = '';
                return '';
            }
        },
        markPpdoRemarksUnsaved(opcr_rating_id) {
            if (!opcr_rating_id) return;
            this.unsavedPpdoRemarks = {
                ...this.unsavedPpdoRemarks,
                [opcr_rating_id]: true
            };
        },
        markFinalRemarkUnsaved() {
            this.unsavedFinalRemark = true;
        },
        clearUnsavedRemarks() {
            this.unsavedPpdoRemarks = {};
            this.unsavedFinalRemark = false;
        },
        //END OF PRINTING
        updateMOVisVisible(mov_is_visible, index){
            this.opcr_data[index].mov_is_visible = !mov_is_visible
        },
        formatFileSize(size) {
            if (size < 1024) return size + ' B';
            else if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB';
            else return (size / (1024 * 1024)).toFixed(2) + ' MB';
        },
        deleteSectoral(id) {
            let text = "WARNING!\nAre you sure you want to delete the Societal Goals?" + id;
            if (confirm(text) == true) {
                this.$inertia.delete("/Societal/" + id);
            }
        },
        getPercent(accomp, targqty) {
            var accSum = 0;
            accomp.forEach(myFunction);
            function myFunction(item) {
                accSum += parseFloat(item.accomplishment_qty)

            }
            var percentt = (accSum / targqty) * 100
            percentt = this.format_number(percentt, 2, true)
            return percentt;
        },
        async viewModal(opcr_id, status, opcr) {
            // alert('View Modal');
            this.status_val = status
            // alert(this.status_val)
            this.opcr_current = opcr
            this.opcrListId=opcr_id;
            var url = "/review-approve/ratings/" + opcr_id + "/view/opcr/rating/submission"
            await axios.get(url, {
                params: {
                    type: this.mode_1
                }
            }).then((response) => {
                this.opcr_data = response.data;
            }).catch((error) => {
                console.error(error);
            });
            this.displayModal = true;
            this.currentRatingType=this.opcr_current.rating_type
            this.clearUnsavedRemarks();
        },
        hideModal() {
            this.displayModal = false;
            this.displayModal2 = false;
            this.submit_attempt =false;
            this.clearUnsavedRemarks();
        },
        showModal2(md) {
            this.hideModal();
            this.displayModal2 = true;
            if (md === 'v') {
                this.mode = "Review"
            } else if (md === 'a') {
                this.mode = "Approve"
            } else if (md === 'r') {
                this.mode = "Return"
            }
        },
        backTo() {
            this.hideModal();
            this.viewModal(this.opcr_current.id, this.opcr_current.status_val, this.opcr_current)
        },
        confirmSubmission() {

        },
        reviewSubmit() {
            // var opcr_list_id_here = this.opcr_current.id;
            this.submit_attempt=true;
            var cansub = this.canSubmit();
            if(cansub){
                // alert(cansub+ " true")
                var url = '/review-approve/ratings/' + this.opcr_current.id + '/review';
                this.form.opcr_list_id = this.opcr_current.id;
                let text = "WARNING!\nAre you sure you want to review the OPCR?";
                if (confirm(text) == true) {
                    this.form.get(url, this.form);
                }
                this.hideModal();
                this.clearForm();
            }else{
                // alert(cansub+ " false")
                alert("⚠️ Review blocked: Some required items have not been scored. Please complete all scores before proceeding.")
            }

        },
        approveSubmit() {

            var url = '/review-approve/ratings/approve/' + this.opcr_current.id + '/opcr';
            this.form.opcr_list_id = this.opcr_current.id;
            let text = "WARNING!\nAre you sure you want to approve the IPCR?";
            // alert(url)
            if (confirm(text) == true) {
                this.form.post(url, this.form);
            }
            this.hideModal();
            this.clearForm();
        },
        returnSubmit() {
            // /return/remarks / { opcr_list_id } / opcr
            var url = '/review-approve/ratings/return/remarks/' + this.opcr_current.id + '/opcr';
            this.form.opcr_list_id = this.opcr_current.id;
            let text = "WARNING!\nAre you sure you want to return the selected OPCR?";
            // alert(url)
            if (confirm(text) == true) {
                this.form.post(url, this.form);
            }

            this.hideModal();
            this.clearForm();
        },
        clearForm() {
            this.form.remarks = "";
            this.form.opcr_list_id = "";
        },
        saveRating(rating, opcr_rating_id, column){
            // alert("rating: "+ rating + " \n"+"opcr_rating_id: "+opcr_rating_id)
            // review-approve/ratings/sub/mit/opcr/{opcr_rating_id}/{item_score}
            // @change="saveRating(opcr_data[index].q1, opcr_data[index].opcr_rating_id, 'q1')"
            if(!rating){
                rating="rating is null";
            }
            var url = "/review-approve/ratings/submit/opcr/"+column+"/"+opcr_rating_id+"/"+rating;
            axios.post(url).then(response=>{
                if (column === 'ppdo_remarks' && opcr_rating_id) {
                    if (this.unsavedPpdoRemarks[opcr_rating_id]) {
                        const { [opcr_rating_id]: removed, ...rest } = this.unsavedPpdoRemarks;
                        this.unsavedPpdoRemarks = rest;
                    }
                }
            }).finally(response=>{

            }).catch(error=>{

            });
        },
        saveRemarks() {
            if (!this.opcr_current?.id) {
                return;
            }

            const payload = {
                ppdo_remarks: this.opcr_data.map(item => ({
                    opcr_rating_id: item.opcr_rating_id,
                    ppdo_remarks: item.ppdo_remarks || ''
                })),
                final_remark: this.form.remarks || ''
            };
            const url = `/review-approve/ratings/save-remarks/${this.opcr_current.id}`;

            router.patch(url, payload, {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    // alert('Remarks saved successfully.');
                    this.clearUnsavedRemarks();
                },
                onError: (errors) => {
                    console.error('Failed to save remarks', errors);
                }
            });
        },
        deleteRemark(remarkId) {
            if (!remarkId) return;

            if (!confirm('Are you sure you want to delete this remark?')) {
                return;
            }

            axios.delete(`/review-approve/ratings/remark/${remarkId}`)
                .then(() => {
                    this.opcr_current.opcr_remarks = this.opcr_current.opcr_remarks.filter(
                        remark => remark.id !== remarkId
                    );
                })
                .catch(error => {
                    console.error('Failed to delete remark', error);
                });
        },
        canSubmit() {
        // loop through each row in opcr_data
            for (let row of this.opcr_data) {
                // define the mappings of score fields to their standards
                // { score: row.q1, standard: 'Yes'},
                //     { score: row.q2, standard: 'Yes'},
                //     { score: row.q3, standard: 'Yes'},
                //     { score: row.e1, standard: row.e1_standard },
                //     { score: row.e2, standard: row.e2_standard },
                //     { score: row.e3, standard: row.e3_standard },
                //     { score: row.t1, standard: row.t1_standard },
                const checks = [

                    { score: row.ppdo_q1, standard: 'Yes'},
                    { score: row.ppdo_q2, standard: 'Yes'},
                    { score: row.ppdo_q3, standard: 'Yes'},
                    { score: row.ppdo_e1, standard: row.e1_standard },
                    { score: row.ppdo_e2, standard: row.e2_standard },
                    { score: row.ppdo_e3, standard: row.e3_standard },
                    { score: row.ppdo_t1, standard: row.t1_standard }
                ];
                console.log(checks);

                for (let { score, standard } of checks) {
                    if (standard === "Yes") {
                        // check if score is not null/empty and between 1–5
                        if (
                            score === null ||
                            score === "" ||
                            isNaN(score) ||
                            Number(score) < 0 ||
                            Number(score) > 5
                        ) {
                            // alert("null ang score "+score)
                            return false;
                        }
                    }else{
                        // alert("No")
                    }
                }
            }
            return true;
        },
        autoResize(event) {
            const textarea = event.target;
            textarea.style.height = "auto"; // reset first to recalc
            textarea.style.height = textarea.scrollHeight + "px"; // fit content
        },
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
        toggleAllMovVisibility(value) {
            // Ensure value is a boolean
            const newValue = Boolean(value);
            this.show_all_not_clicked = !this.show_all_not_clicked
            // Loop through each item in opcr_data and update mov_is_visible
            this.opcr_data.forEach(item => {
            item.mov_is_visible = newValue;
            });
        },
        //SPAN******************************************* APPLICABLE FOR APPROVAL ONLY************************************
        getRowspan(row, ind) {
            let count = 1;
            const index = ind;

            for (let i = parseFloat(index) + 1; i < this.opcr_data.length; i++) {
                if (this.opcr_data[i].mfo_desc === row) {
                    //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
                    count = parseFloat(count) + 1;
                } else {
                    break;
                }
            }
            return count;
        },
        getRowspan2(row, ind) {
            let count = 1;
            const index = ind;

            for (let i = parseFloat(index) + 1; i < this.opcr_data.length; i++) {
                if (this.opcr_data[i].office_accountable === row) {
                    //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
                    count = parseFloat(count) + 1;
                } else {
                    break;
                }
            }

            return count;
        },
        getRowspanIndicator(row, ind) {
            let count = 1;
            const index = ind;
            for (let i = parseFloat(index) + 1; i < this.opcr_data.length; i++) {
                if (this.opcr_data[i].success_indicator === row) {
                    //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
                    count = parseFloat(count) + 1;
                } else {
                    break;
                }
            }

            return count;
        },
        //***********************************************AVERAGES/TOTALS / FOR APPROVAL ONLY*****************************
        getTotalAverage() {
            var total = 0;
            for (let i = 0; i < this.opcr_data.length; i++) {
                var rat_e = this.opcr_data[i].rating_e;
                var rat_q = this.opcr_data[i].rating_q;
                var rat_t = this.opcr_data[i].rating_t;
                var avee = parseFloat(rat_e) + parseFloat(rat_q) + parseFloat(rat_t)
                // var ave = parseFloat(this.opcrs[ind].rating_e) + parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);
                var div = 0;
                if (parseFloat(rat_e) >= 1) {
                    div = div + 1;
                }
                if (parseFloat(rat_q) >= 1) {
                    div = div + 1;
                }
                if (parseFloat(rat_t) >= 1) {
                    div = div + 1;
                }
                if (div == 0) {
                    div = 1;
                }
                total = total + (avee / div);
            }
            // total = "44.44555555";
            // this.total_ave = total;
            return this.format_number_conv(total, 2, true);
        },
        getTotalAverage2() {
            let total = 0;

            this.opcr_data.forEach(item => {
                var divisor =0;
                const qAvg = this.average([
                    item.q1,
                    item.q2,
                    item.q3
                ]);

                const eAvg = this.average([
                    item.e1,
                    item.e2,
                    item.e3
                ]);

                const tAvg = this.average([
                    item.t1
                ]);
                if(parseFloat(qAvg)>0){divisor+=1}
                if(parseFloat(eAvg)>0){divisor+=1}
                if(parseFloat(tAvg)>0){divisor+=1}
                if(divisor==0){divisor=1}
                total += (qAvg + eAvg + tAvg)/divisor;
            });

            return Number(total.toFixed(2));
        },
        computeRowAverage(opcr) {
            const values = [opcr.rating_q, opcr.rating_e, opcr.rating_t];
            const validValues = values.filter(v => v > 0);

            if (validValues.length === 0) {
            return 0;
            }

            const sum = validValues.reduce((a, b) => a + b, 0);
            return sum / validValues.length;
        },
        computeAverage(opcr) {
            // extract the values
            const values = [opcr.rating_q, opcr.rating_e, opcr.rating_t];

            // filter out zero or null
            const validValues = values.filter(v => v > 0);

            if (validValues.length === 0) {
            return 0; // or '' if you want it blank
            }

            // compute average
            const sum = validValues.reduce((a, b) => a + b, 0);
            return (sum / validValues.length).toFixed(2); // keep 2 decimals
        },
        getAverageAll() {


            // compute averages for all rows
            const rowAverages = this.opcr_data.map(opcr => this.computeRowAverage(opcr));

            // filter out rows that are 0
            const validAverages = rowAverages.filter(avg => avg > 0);

            if (validAverages.length === 0) {
            return 0; // or '' if you want blank
            }

            const total = validAverages.reduce((a, b) => a + b, 0);
            return (total / validAverages.length).toFixed(2); // keep 2 decimals

        },
        getAverageAll2() {
            // let total = 0;
            // let count = 0;

            // this.opcr_data.forEach(item => {
            //     const qAvg = this.average([
            //         item.q1,
            //         item.q2,
            //         item.q3
            //     ]);

            //     const eAvg = this.average([
            //         item.e1,
            //         item.e2,
            //         item.e3
            //     ]);

            //     const tAvg = this.average([
            //         item.t1
            //     ]);

            //     [qAvg, eAvg, tAvg].forEach(avg => {
            //         if (avg > 0) {
            //             total += avg;
            //             count++;
            //         }
            //     });
            // });

            // const divisor = count || 1; // Avoid division by zero
            // return Number((total / divisor).toFixed(2));
            let total = 0;
            let count = 0;

            let d1=1;
            let d2=1;
            let d3=1;
            let divisor=0;
            this.opcr_data.forEach(item => {
                const qAvg = this.average([
                    item.q1,
                    item.q2,
                    item.q3
                ]);

                const eAvg = this.average([
                    item.e1,
                    item.e2,
                    item.e3
                ]);

                const tAvg = this.average([
                    item.t1
                ]);
                if(qAvg>0){d1=1}else{d1=0}
                if(eAvg>0){d2=1}else{d2=0}
                if(tAvg>0){d3=1}else{d3=0}
                divisor = d1 + d2 + d3;
                if(divisor<1){divisor=1}else{count++}
                total += (qAvg + eAvg + tAvg)/divisor;
                // [qAvg, eAvg, tAvg].forEach(avg => {
                //     if (avg > 0) {
                //         total += avg;
                //         count++;
                //     }
                // });
            });

            return count ? Number((total / count).toFixed(2)) : 0;
        },
        // *********************************************AVERAGE -DPCR SCORES *********************************************
        computeAverageScore(monthly_ratings) {
            if (!monthly_ratings || typeof monthly_ratings !== 'object') {
                return 0
            }

            const values = Object.values(monthly_ratings)
                .filter(v => typeof v === 'number' && v > 0)

            if (values.length === 0) {
                return 0
            }

            const sum = values.reduce((total, v) => total + v, 0)

            return Number((sum / values.length).toFixed(2))
        },
        computeAverageByType(monthly_ratings, type) {
            if (!monthly_ratings || typeof monthly_ratings !== 'object') {
                return 0
            }

            const map = {
                q: ['q1', 'q2', 'q3'],
                e: ['e1', 'e2', 'e3']
            }

            if (!map[type]) {
                return 0
            }

            const values = map[type]
                .map(key => monthly_ratings[key])
                .filter(v => typeof v === 'number' && v > 0)

            if (values.length === 0) {
                return 0
            }

            const sum = values.reduce((total, v) => total + v, 0)

            return Number((sum / values.length).toFixed(2))
        },
        computeAverageQET(q, e, t) {
            const values = [q, e, t].filter(v => Number(v) > 0);

            if (values.length === 0) {
                return 0;
            }

            const sum = values.reduce((total, val) => total + Number(val), 0);

            return sum / values.length;
        },
        // ===============================
        // TOTAL of DPCR (sum of row averages)
        // ===============================
        computeDPCRTotal(rows) {
            if (!Array.isArray(rows)) {
                // console.log("zero cya")
                return 0
            }

            let total = 0

            rows.forEach(row => {
                const ratings = row?.monthly_targets
                console.log(row.month)
                if (!ratings || typeof ratings !== 'object') {
                    return
                }

                const q = this.computeAverageByType(ratings, 'q')
                const e = this.computeAverageByType(ratings, 'e')
                const t = Number(ratings?.t1) > 0 ? Number(ratings.t1) : 0

                const rowAverage = this.computeAverageQET(q, e, t)
                console.log(rowAverage)
                if (rowAverage > 0) {
                    total += rowAverage
                }
            })

            return Number(total.toFixed(2))
        },

        // ===============================
        // AVERAGE of DPCR (ignore zero rows)
        // ===============================
        computeDPCRAverage(rows) {
            if (!Array.isArray(rows)) {
                return 0
            }

            const rowAverages = []

            rows.forEach(row => {
                const ratings = row?.monthly_targets

                if (!ratings || typeof ratings !== 'object') {
                    return
                }

                const q = this.computeAverageByType(ratings, 'q')
                const e = this.computeAverageByType(ratings, 'e')
                const t = Number(ratings?.t1) > 0 ? Number(ratings.t1) : 0

                const rowAverage = this.computeAverageQET(q, e, t)

                if (rowAverage > 0) {
                    rowAverages.push(rowAverage)
                }
            })

            if (rowAverages.length === 0) {
                return 0
            }

            const sum = rowAverages.reduce((total, val) => total + val, 0)

            return Number((sum / rowAverages.length).toFixed(2))
        },

        // _______________________________
        // SET RATING TYPE
        // ===============================
        setRatingType(rating_type, id) {
                router.patch(`/review-approve/ratings/set/rating/type/${rating_type}/${id}`, {}, {
                    onSuccess: () => {
                    console.log(`Rating type ${type} updated for ID ${id}`);
                    },
                    onError: (errors) => {
                    console.error(errors);
                    }
            });
        },

        // DOWNLOAD EXCEL
        async downloadExcel(opcr_id) {
            // opcr_list_id must be available, e.g., from a prop or data
            // const opcrListId = this.opcr_list_id; // adjust to your variable
            var file_name =this.opcr_current.semester + " - " + this.opcr_current.year + " - "+ this.opcr_current.office.FFUNCTION+".xlsx";
            try {
                const response = await axios.get(
                    `/review-approve-ratings/${opcr_id}/view/opcr/rating/submission`,
                    { responseType: 'blob' }   // important for file download
                );

                // Create a blob URL and trigger download
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
                // Handle error (e.g., show a notification)
            }
        },


        //FLEXIBLE TOTAL

        // // AVERAGE
        // // Method 1: returns sum of the three averages
        // categoryAverage(type) {
        //     const values = [];

        //     this.rows.forEach(row => {
        //         if (type === 't') {
        //         // Only one 't' column per row
        //         const val = row.ppdo_t1;
        //         if (val != null && Number(val) !== 0) {
        //             values.push(Number(val));
        //         }
        //         } else {
        //         // For 'q' or 'e': three columns (1, 2, 3)
        //         for (let i = 1; i <= 3; i++) {
        //             const key = `ppdo_${type}${i}`;
        //             const val = row[key];
        //             if (val != null && Number(val) !== 0) {
        //             values.push(Number(val));
        //             }
        //         }
        //         }
        //     });

        //     if (values.length === 0) return 0;
        //     const sum = values.reduce((s, v) => s + v, 0);
        //     return sum / values.length;
        // },

        //     /**
        //     * Method 1: Total of the three category averages
        //     * returns avgQ + avgE + avgT
        //     */
        // ppdototalOfAverages() {
        //     const avgQ = this.categoryAverage('q');
        //     const avgE = this.categoryAverage('e');
        //     const avgT = this.categoryAverage('t');
        //     return avgQ + avgE + avgT;
        // },

        //     /**
        //     * Method 2: Average of the three category averages
        //     * returns (avgQ + avgE + avgT) / 3
        //     */
        // ppdoaverageOfAverages() {
        //     const avgQ = this.categoryAverage('q');
        //     const avgE = this.categoryAverage('e');
        //     const avgT = this.categoryAverage('t');
        //     return (avgQ + avgE + avgT) / 3;
        // }
        average(values) {
            const valid = values
                .map(Number)
                .filter(v => !isNaN(v) && v > 0);

            if (!valid.length) return 0;

            return valid.reduce((sum, val) => sum + val, 0) / valid.length;
        },

        // Sum of the averages of all OPCR items
        calculatePpdoTotal() {
            let total = 0;

            this.opcr_data.forEach(item => {
                var divisor =0;
                const qAvg = this.average([
                    item.ppdo_q1,
                    item.ppdo_q2,
                    item.ppdo_q3
                ]);

                const eAvg = this.average([
                    item.ppdo_e1,
                    item.ppdo_e2,
                    item.ppdo_e3
                ]);

                const tAvg = this.average([
                    item.ppdo_t1
                ]);
                if(parseFloat(qAvg)>0){divisor+=1}
                if(parseFloat(eAvg)>0){divisor+=1}
                if(parseFloat(tAvg)>0){divisor+=1}
                if(divisor<1){divisor=1}
                total += (qAvg + eAvg + tAvg)/divisor;
            });

            return Number(total.toFixed(2));
        },
        calculatePpdoTotal2() {
            var total = 0;
            for (let i = 0; i < this.opcr_data.length; i++) {
                var rat_e = this.opcr_data[i].ppdo_rating_e;
                var rat_q = this.opcr_data[i].ppdo_rating_q;
                var rat_t = this.opcr_data[i].ppdo_rating_t;
                var avee = parseFloat(rat_e) + parseFloat(rat_q) + parseFloat(rat_t)
                // var ave = parseFloat(this.opcrs[ind].rating_e) + parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);
                var div = 0;
                if (parseFloat(rat_e) >= 1) {
                    div = div + 1;
                }
                if (parseFloat(rat_q) >= 1) {
                    div = div + 1;
                }
                if (parseFloat(rat_t) >= 1) {
                    div = div + 1;
                }
                if (div == 0) {
                    div = 1;
                }
                total = total + (avee / div);
            }
            // total = "44.44555555";
            // this.total_ave = total;
            return this.format_number_conv(total, 2, true);
        },
        // getTotalAverage2() {
        //     var total = 0;
        //     for (let i = 0; i < this.opcr_data.length; i++) {
        //         var rat_e = this.opcr_data[i].rating_e;
        //         var rat_q = this.opcr_data[i].rating_q;
        //         var rat_t = this.opcr_data[i].rating_t;
        //         var avee = parseFloat(rat_e) + parseFloat(rat_q) + parseFloat(rat_t)
        //         // var ave = parseFloat(this.opcrs[ind].rating_e) + parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);
        //         var div = 0;
        //         if (parseFloat(rat_e) >= 1) {
        //             div = div + 1;
        //         }
        //         if (parseFloat(rat_q) >= 1) {
        //             div = div + 1;
        //         }
        //         if (parseFloat(rat_t) >= 1) {
        //             div = div + 1;
        //         }
        //         if (div == 0) {
        //             div = 1;
        //         }
        //         total = total + (avee / div);
        //     }
        //     // total = "44.44555555";
        //     // this.total_ave = total;
        //     return this.format_number_conv(total, 2, true);
        // },
        // Average of all averages across the entire OPCR data
        calculatePpdoAverage() {
            let total = 0;
            let count = 0;

            let d1=1;
            let d2=1;
            let d3=1;
            let divisor=0;
            this.opcr_data.forEach(item => {
                const qAvg = this.average([
                    item.ppdo_q1,
                    item.ppdo_q2,
                    item.ppdo_q3
                ]);

                const eAvg = this.average([
                    item.ppdo_e1,
                    item.ppdo_e2,
                    item.ppdo_e3
                ]);

                const tAvg = this.average([
                    item.ppdo_t1
                ]);
                if(qAvg>0){d1=1}else{d1=0}
                if(eAvg>0){d2=1}else{d2=0}
                if(tAvg>0){d3=1}else{d3=0}
                divisor = d1 + d2 + d3;
                if(divisor<1){divisor=1}else{count++}
                total += (qAvg + eAvg + tAvg)/divisor;
                // [qAvg, eAvg, tAvg].forEach(avg => {
                //     if (avg > 0) {
                //         total += avg;
                //         count++;
                //     }
                // });
            });

            return count ? Number((total / count).toFixed(2)) : 0;
        },
        calculatePpdoAverage2() {
            var total = 0;
            var counter = 0;
            for (let i = 0; i < this.opcr_data.length; i++) {
                var rat_e = this.opcr_data[i].ppdo_rating_e;
                var rat_q = this.opcr_data[i].ppdo_rating_q;
                var rat_t = this.opcr_data[i].ppdo_rating_t;
                var avee = parseFloat(rat_e) + parseFloat(rat_q) + parseFloat(rat_t)
                // var ave = parseFloat(this.opcrs[ind].rating_e) + parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);
                var div = 0;
                if (parseFloat(rat_e) >= 1) {
                    div = div + 1;
                }
                if (parseFloat(rat_q) >= 1) {
                    div = div + 1;
                }
                if (parseFloat(rat_t) >= 1) {
                    div = div + 1;
                }
                if (div == 0) {
                    div = 1;
                }
                total = total + (avee / div);
                if(total>0){
                    counter+=1;
                }
            }
            // total = "44.44555555";
            // this.total_ave = total;
            if(counter<0){
                counter=1;
            }
            var ave =total/counter;
            return this.format_number_conv(ave, 2, true);
        },
        // ACCOMPLISHMENT MOV
        async showModalAccomplishmentMOV(idpaps, department_code,year,semester, paps_param){

            this.displayModalAccomplishmentMOV=true
            this.displayModal=false;
            // Optional: clear previous data
            this.mov_accomplishment = [];
            // this.opcr_current = opcr;
            this.paps_current=paps_param
            try {
                const response = await axios.get('/api/opcr-mov-api', {
                    params: {
                        ppa_id: idpaps,
                        year: year,
                        semester: semester,
                        department_id: department_code,
                    }
                });

                this.mov_accomplishment = response.data;
            } catch (error) {
                console.error('Failed to fetch MOV accomplishment:', error);
                this.mov_accomplishment = [];
            }
        },
        closeDisplayModalAccomplishmentMOV(){
            this.displayModalAccomplishmentMOV=false;
            this.displayModal=true;
            // alert(this.displayModal);
        }
    }
};
</script>
<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  background: linear-gradient(135deg, #f6fcfd 0%, #ebf8fb 100%);
  z-index: 2;
  border: 1px solid #d8eef2;
  border-radius: 0.75rem;
  padding: 0.9rem 1rem;
  box-shadow: 0 4px 16px rgba(2, 102, 115, 0.08);
}

.modal-summary-card {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 1rem;
}

.modal-summary-card div {
    color: #0d4b54;
    font-size: 0.95rem;
}

/* .modern-rating-table thead.sticky-header {
    position: sticky;
    top: 6rem;
    z-index: 3;
    background: transparent;
    border: none;
    border-radius: 0;
    padding: 0;
} */

.modal-summary-card.sticky-header {
    position: sticky;
    top: 0;
    z-index: 2;
}

.modern-rating-table {
    border-collapse: separate;
    border-spacing: 0;
    background: #fff;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(2, 49, 58, 0.08);
}

.modern-rating-table thead th {
    background: linear-gradient(135deg, #026673 0%, #038695 100%);
    color: #fff;
    font-size: 0.8rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 0.7rem 0.55rem;
    vertical-align: middle;
    border-color: #02595f;
}

.modern-rating-table tbody td,
.modern-rating-table tbody th {
    padding: 0.6rem 0.55rem;
    vertical-align: top;
    border-color: #e2ebee;
}

.modern-rating-table tbody tr:nth-child(even) {
    background-color: #fcfdfd;
}

.modern-rating-table tbody tr:hover {
    background-color: #eef8fb !important;
}

.modern-rating-table .form-select,
.modern-rating-table .form-control,
.modern-rating-table textarea {
    border: 1px solid #cde2e6;
    border-radius: 0.5rem;
    background-color: #fff;
    font-size: 0.86rem;
    box-shadow: none;
}

.modern-rating-table .form-select:focus,
.modern-rating-table .form-control:focus,
.modern-rating-table textarea:focus {
    border-color: #026673;
    box-shadow: 0 0 0 0.2rem rgba(2, 102, 115, 0.16);
}

.table-summary-row td {
    background-color: #f2fafb;
    color: #02454d;
    font-weight: 600;
}

.accomplishment-modal-table {
    border-collapse: separate;
    border-spacing: 0;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(2, 49, 58, 0.08);
}

.accomplishment-modal-table thead th {
    background: linear-gradient(135deg, #026673 0%, #038695 100%);
    color: #fff;
}

.accomplishment-modal-table tbody td {
    vertical-align: top;
}

.accomplishment-modal-table img {
    border-radius: 0.5rem;
}

.review-col-mfo,
.review-col-paps,
.review-col-accomplishment,
.review-col-remarks,
.review-col-mov,
.review-col-rating {
    vertical-align: top;
    white-space: normal;
    word-break: break-word;
    overflow-wrap: anywhere;
}

.review-col-mfo {
    min-width: 180px;
    max-width: 220px;
    width: 180px;
}

.review-col-paps {
    min-width: 180px;
    max-width: 220px;
    width: 180px;
}

.review-col-accomplishment {
    min-width: 260px;
    max-width: 320px;
    width: 260px;
}

.review-col-remarks {
    min-width: 180px;
    max-width: 220px;
    width: 180px;
}

.review-col-mov {
    min-width: 110px;
    max-width: 130px;
    width: 110px;
    text-align: center;
}

.mov-btn {
    white-space: nowrap;
    border-radius: 999px;
    padding: 0.35rem 0.8rem;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
}

.mov-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(2, 102, 115, 0.16);
}

.review-col-rating {
    min-width: 95px;
    max-width: 110px;
    width: 95px;
}

.row-centered {
    text-align: center;
}

.col-centered {
    display: inline-block;
    float: none;
    text-align: left;
    margin-right: -4px;
}

.pos {
    position: top;
    top: 240px;
}

.force-white {
  background-color: red !important;
}

.no-stripe-bg {
  background-color: white !important;
  --bs-table-accent-bg: white !important;
  position: relative;
  z-index: 1;
}
/* .btn-link-style {
  background: none;
  border: none;
  color: #007bff;  Bootstrap primary link color
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-decoration: underline;
}

.btn-link-style:hover {
  color: #0056b3; Darker on hover
  text-decoration: none;
} */
</style>
