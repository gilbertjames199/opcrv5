<template>

    <Head>
        <title>OPCR</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>OFFICE PERFORMANCE COMMITMENT AND RATING FORM </h3>

            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <!-- <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/ELA/create`">Add Agenda</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div> -->
                <Link :href="`/opcrlist/${FFUNCCOD}`">
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
        <!-- {{ opcr_date }} -->
        <div class="masonry-sizer col-md-6">
            <h5>PERIOD: <u>{{ opcr_date }}</u></h5>
            <h5>STATUS: <u>{{ getStatus(String(list.rating_status)) }}</u></h5>
            <!-- {{ list }}
            {{ list.rating_status }} -->
        </div>
        <div class="col-12">
            <!-- <div class="row gap-20"></div> -->
            <div class="bgc-white p-20 bd">
                <!-- style="overflow-x: auto; display: block; align-items-center width: 100%; -webkit-overflow-scrolling: touch;" -->
                <form @submit.prevent="submit()">
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered border-dark align-middle">
                            <thead class="table-head-sticky text-center">
                                <tr>
                                    <th scope="col" rowspan="2"><i class="fas fa-align-left"></i> Major Final Output</th>
                                    <th scope="col" rowspan="2"><i class="fas fa-bullseye"></i> Success Indicators</th>
                                    <th scope="col" rowspan="2"><i class="fas fa-money-bill"></i> Alloted Budget</th>
                                    <th scope="col" rowspan="2"><i class="fas fa-user-tie"></i> Accountable Division</th>
                                    <th scope="col" rowspan="2"><i class="fas fa-check-circle"></i> Actual Accomplishments</th>
                                    <th scope="col" colspan="7"><i class="fas fa-star"></i> Rating</th>
                                    <th scope="col" rowspan="2"><i class="fas fa-comment"></i> Remarks</th>
                                    <th scope="col" rowspan="2"><i class="fas fa-file-upload"></i> MOV</th>
                                </tr>
                                <tr>
                                    <th scope="col">Q1</th>
                                    <th scope="col">Q2</th>
                                    <th scope="col">Q3</th>
                                    <th scope="col">E1</th>
                                    <th scope="col">E2</th>
                                    <th scope="col">E3</th>
                                    <th scope="col">T1</th>
                                    <!-- <th scope="col">Average</th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <!--v-if="index === 0 || opcr.mfo_desc !== opcrs[index - 1].mfo_desc"
                                        :rowspan="getRowspan(opcr.mfo_desc, index)"-->
                                <tr v-for="(opcr, index) in form.opcrs" :key="index">
                                    <td v-if="index === 0 || opcr.mfo_desc !== opcrs[index - 1].mfo_desc"
                                        :rowspan="getRowspan(opcr.mfo_desc, index)" style="vertical-align:middle">
                                        {{ opcr.mfo_desc }}
                                    </td>
                                    <td v-if="index === 0 || opcr.success_indicator !== opcrs[index - 1].success_indicator"
                                        :rowspan="getRowspanIndicator(opcr.success_indicator, index)"
                                        style="vertical-align:middle">
                                        <!-- {{ opcr.success_indicator }} -->
                                        {{ opcr.target_success_indicator }}
                                    </td>
                                    <!-- <td :rowspan="form.opcrs.length" v-if="index === 0" style="vertical-align:middle">
                                        PS = {{ halfSem(ps) }} <br>(annual={{ format_number_conv(ps) }}) <br><br>MOOE = {{
                                            halfSem(mooe) }} (annual={{ format_number_conv(mooe) }})
                                    </td> -->
                                    <td>
                                        <!-- {{ opcr }} -->
                                    </td>
                                    <td v-if="index === 0 || opcr.office_accountable !== opcrs[index - 1].office_accountable"
                                        :rowspan="getRowspan2(opcr.office_accountable, index)"
                                        style="vertical-align:middle">
                                        {{ opcr.office_accountable }}
                                    </td>
                                    <td>
                                        <!-- {{ opcr.id }} -->
                                        <textarea v-model="form.opcrs[index].accomplishments"
                                            style="height: inherit"></textarea>

                                    </td>

                                    <!--RATINGS***************************************-->
                                    <!-- <td>
                                        <input v-model="form.opcrs[index].rating_q" class="centered-input" type="number"
                                            min="0" max="5" step="1">
                                        <select v-model="form.opcrs[index].rating_q" class="form-select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input v-model="form.opcrs[index].rating_e" class="centered-input" type="number"
                                            min="0" max="5" step="1">
                                        <select v-model="form.opcrs[index].rating_e" class="form-select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input v-model="form.opcrs[index].rating_t" class="centered-input" type="number"
                                            min="0" max="5" step="1">
                                        <select v-model="form.opcrs[index].rating_t" class="form-select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </td>
                                    <td>
                                    <input :value="computeAverage(form.opcrs[index])" class="centered-input" type="number"
                                       min="0" max="5" step="1" disabled>
                                    </td> -->
                                    <!-- RATINGS ****************************************************** -->
                                    <!-- Q1 -->
                                    <td style="width: 9% !important; white-space: normal; word-wrap: break-word;">
                                        <!-- width: 2.5em;  -->

                                         <!-- {{ opcr.opcr_rating_id }} -->
                                        <select v-model="opcr_data[index].q1" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                            :disabled="list.rating_status==2"
                                            @change="saveRating(opcr.q1, opcr.opcr_rating_id, 'q1', index)">
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
                                    <td style="width: 9% !important; white-space: normal; word-wrap: break-word;">
                                        <!-- {{  dat }} -->
                                        <!-- width: 2.5em;  -->
                                        <select v-model="opcr_data[index].q2" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                            :disabled="list.rating_status==2"
                                            @change="saveRating(opcr.q2, opcr.opcr_rating_id, 'q2', index)"
                                        >
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
                                    <td style="width: 9% !important; white-space: normal; word-wrap: break-word;">
                                        <!-- width: 2.5em;  -->
                                        <select v-model="opcr_data[index].q3" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                            :disabled="list.rating_status==2"
                                            @change="saveRating(opcr_data[index].q3, opcr_data[index].opcr_rating_id, 'q3', index)"
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
                                    <td style="width: 9% !important; white-space: normal; word-wrap: break-word;">
                                        <!--  width: 2.5em; -->
                                        <select v-model="opcr_data[index].e1" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                            @change="saveRating(opcr_data[index].e1, opcr_data[index].opcr_rating_id, 'e1', index)"
                                            :disabled="list.rating_status==2 || opcr.e1_standard === 'No'"
                                            :style="list.rating_status==2 || opcr.e1_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                        <div v-if="submit_attempt==true && opcr.e1_standard === 'Yes' && !opcr.e1" style="color: red; font-weight: bold">
                                            Rating for this field is required to proceed with submission.
                                        </div>
                                    </td>
                                    <!-- E2 -->
                                    <td style="width: 9% !important; white-space: normal; word-wrap: break-word;">
                                        <!-- width: 2.5em;  -->
                                        <select v-model="opcr_data[index].e2" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                            @change="saveRating(opcr_data[index].e2, opcr_data[index].opcr_rating_id, 'e2', index)"
                                            :disabled="list.rating_status==2 || opcr.e2_standard === 'No'"
                                            :style="list.rating_status==2 || opcr.e2_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                        <div v-if="submit_attempt==true && opcr.e2_standard === 'Yes' && !opcr.e2" style="color: red; font-weight: bold">
                                            Rating for this field is required to proceed with submission.
                                        </div>
                                    </td>
                                    <!-- E3 -->
                                    <td style="width: 9% !important; white-space: normal; word-wrap: break-word;">
                                        <!-- style="width: 2.5em; text-align: center;"   -->
                                        <select v-model="opcr_data[index].e3" class="form-select" style="width: 4.2em; text-align: center;" type="number"
                                            @change="saveRating(opcr_data[index].e3, opcr_data[index].opcr_rating_id, 'e3', index)"
                                            :disabled="list.rating_status==2 || opcr.e3_standard === 'No'"
                                            :style="list.rating_status==2 || opcr.e3_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                        <div v-if="submit_attempt==true && opcr.e3_standard === 'Yes' && !opcr.e3" style="color: red; font-weight: bold">
                                            Rating for this field is required to proceed with submission.
                                        </div>
                                    </td>
                                    <!-- T1 -->
                                    <td style="width: 9% !important; white-space: normal; word-wrap: break-word;">
                                        <!-- t1_standard: {{ dat.t1_standard }} -->
                                        <!-- :disabled="dat.t1_standard !== 'Yes'"
                                            :style="dat.t1_standard !== 'Yes' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''" -->
                                        <select v-model="opcr_data[index].t1" type="number" class="form-select" style="width: 4.2em; text-align: center;"
                                            @change="saveRating(opcr_data[index].t1, opcr_data[index].opcr_rating_id, 't1', index)"

                                            :disabled="
                                                list.rating_status==2 ||
                                                opcr.t1_standard === 'No' ||
                                                opcr.t1_standard === null ||
                                                opcr.t1_standard === undefined ||
                                                Number.isNaN(opcr.t1_standard)
                                            "
                                            :style="
                                                list.rating_status==2 ||
                                                opcr.t1_standard === 'No' ||
                                                opcr.t1_standard === null ||
                                                opcr.t1_standard === undefined ||
                                                Number.isNaN(opcr.t1_standard)
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
                                        <div v-if="submit_attempt==true && opcr.t1_standard === 'Yes' && !opcr.t1" style="color: red; font-weight: bold">
                                            Rating for this field is required to proceed with submission.
                                        </div>
                                    </td>
                                    <!--**********************************************-->
                                    <td><textarea v-model="form.opcrs[index].remarks"
                                            style="height: inherit"></textarea>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-primary text-white" @click="showModalMOV(form.opcrs[index].id)">
                                            Upload MOVs
                                        </button>
                                        <hr>
                                        <button type="button"
                                            class="btn btn-primary text-white"
                                            @click="showModalAccomplishmentMOV(opcr.idpaps, opcr.department_code, opcr.year, opcr.semester, opcr)">
                                            Accomplishment MOVs
                                        </button>
                                    </td>

                                </tr>
                                <tr>
                                    <td colspan="5"></td>
                                    <td colspan="7">TOTAL RATING</td>
                                    <td>
                                        <span v-if="list.rating_status=='2'">
                                            <span v-if="list.rating_type==2">
                                                {{ calculatePpdoTotal()*calculatePpdoAverage()}}
                                            </span>
                                        </span>

                                        <span v-else>{{ getTotalAverage() }}</span>
                                        <!-- getTotalAverage: {{ getTotalAverage() }} -->
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="5"></td>
                                    <td colspan="7">FINAL AVERAGE RATING</td>
                                    <td>
                                        <span v-if="list.rating_status=='2'">
                                            <span v-if="list.rating_type==2">
                                                {{ calculatePpdoAverage()}}
                                            </span>
                                        </span>
                                        <span v-else>{{ getAverageAll() }}</span>
                                         <!-- {{ getAverageAll() }} -->
                                        <!-- -- {{ getAverageAll2() }} -->
                                        <!-- {{ list }} -->
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
                <div class="table-responsive">
                    <table class="table table-hover table-bordered border-dark align-middle">
                        <tbody>
                            <tr>
                                <td>Assessed by PMT Secretariat:</td>
                                <td>Reviewed by:</td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <br><br>
                                    <strong>ALICIA M. GRACIADAS</strong>
                                </td>
                                <td class="text-center font-weight-bold"><br><br>
                                    <!-- {{ opcr_date }} -->
                                    <span v-if="isPA(opcr_date, 'PA 1')"><strong>LEWIS JAKE G. CAIMAN</strong></span>
                                    <span v-else-if="isPA(opcr_date, 'PA 2')"><strong>IVAN KLEB N. ULGASAN</strong></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center" style="font-size: 12px">PMT Head Secretariat</td>
                                <td class="text-center" style="font-size: 12px">PMT Chairperson</td>
                            </tr>
                            <tr>
                                <td style="font-size: 12px">Date:</td>
                                <td style="font-size: 12px">Date:</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span class="text-danger font-weight-bold"><b>SAVE CHANGES THEN PRINT</b></span>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <button v-if="rating_status_dt==-2 || opcr_id ==137" type="button" class="btn btn-primary mt-3 text-white" @click="submit()"
                            :disabled="form.processing">
                            Save changes
                        </button>
                        <!-- <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()"
                            :disabled="form.processing">
                            Save changes
                        </button>&nbsp;
                        <button type="button" class="btn btn-success mt-3 text-white" @click="showModal()"
                            :disabled="form.processing">
                            Print
                        </button>&nbsp; -->
                        <button type="button" class="btn btn-success mt-3 text-white" @click="showModal()"
                            :disabled="form.processing">
                            Print
                        </button>&nbsp;
                        <!-- opcr_id:: {{ opcr_id }} -->
                        <!-- rating_status_dt:{{ rating_status_dt }} -->
                         <!--   -->
                        <span v-if="rating_status_dt==-2 || opcr_id ==137" >
                            <button type="button" class="btn btn-primary mt-3 text-white" @click="submitRecallRating(-1,0,'Successfully submitted OPCR', 'Are you sure you want to submit this OPCR')"
                            :disabled="form.processing" >
                                Submit
                            </button>&nbsp;
                        </span>
                        <!-- <span v-if="rating_status_dt==-1 || rating_status_dt==-2">
                            <button type="button" class="btn btn-primary mt-3 text-white" @click="submitRecallRating(-1,0,'Successfully submitted OPCR', 'Are you sure you want to submit this OPCR')"
                            :disabled="form.processing" >
                                Submit
                            </button>&nbsp;
                        </span> -->
                        <!-- rating_status_dt{{ rating_status_dt }} -->
                        <!-- <span v-if="rating_status_dt==0">
                            <button type="button" class="btn btn-secondary mt-3 text-white" @click="submitRecallRating(0,-1, 'Successfully recalled OPCR submission', 'Are you sure you want to recall the submission of this OPCR')"
                                :disabled="form.processing" >
                                Recall
                            </button>&nbsp;
                        </span> -->

                        <!-- <pagination :next="data.next_page_url" :prev="data.prev_page_url" /> -->
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p>
                            <!-- {{ opcrs[0].mfo_desc }} ** {{ opcrs[1].mfo_desc }} <br>
                            {{ opcrs[2].mfo_desc }} ** {{ opcrs[3].mfo_desc }} -->
                            <!-- {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries -->
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Modal v-if="displayModal" @close-modal-event="hideModal">
            <div class="justify-content-center">
                <div style="text-align: center">
                    <h4>OFFICE PERFORMANCE COMMITMENT AND RATING FORM</h4>
                </div>

                <div class="masonry-item w-100">
                    <div class="bgc-white p-20 bd">
                        <div class="table-responsive">
                            <!-- {{ report_link }} -->
                            <iframe :src="report_link" style="width:100%; height:450px" />
                        </div>
                    </div>
                </div>
                <div style="align: center">
                    <!-- <button class="btn btn-primary text-white" @click="submitAction('1')" v-if="emp_status === '0'">
                        Review
                    </button>
                    <button class="btn btn-primary text-white" @click="submitAction('2')" v-if="emp_status === '1'">
                        Approve
                    </button>&nbsp;
                    <button class="btn btn-danger text-white" @click="showModal3()">
                        Return
                    </button> -->
                </div>
            </div>
        </Modal>
        <ModalMOV v-if="displayModalMOV" @close-modal-event="hideModalMOV" title="Means of Verification">
            <!-- <h1>Means of Verification </h1> -->
             <div class="peers mb-12">
                <div class="col-md-5">
                    <!-- Warnings -->
                     <div v-if="show_warnings">
                        <div v-if="!isWithinLimit()" class="text-danger mt-2">
                        ❌ Total file size must not exceed 10 MB.
                        </div>
                        <div v-if="!isWithinCount()" class="text-danger mt-2">
                        ❌ You can only upload a maximum of 2 files.
                        </div>
                    </div>

                    <input
                        type="file"
                        multiple
                        @change="handleFiles"
                        ref="fileInput"
                        :disabled="!(isWithinLimit() && isWithinCount())"
                    />
                    <div>
                        <button type="button" @click="uploadFiles" class="btn btn-primary text-white" :disabled="!(isWithinLimit() && isWithinCount())">Upload</button>
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
                <div class="col-md-7">
                    <div class="peers">
                        <h5>Files Uploaded</h5>&nbsp;
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="file in movs" :key="file.id">
                                <td>
                                    <input
                                    type="checkbox"
                                    :value="file.id"
                                    @change="toggleFileSelection(file.id, $event)"
                                    v-model="file_ids"
                                    />
                                </td>
                                <!-- <p>http://122.53.120.18:8067/images/{{file.filepath}}</p> -->
                                <td><img :src="getFileIcon(file)" alt="file preview" style="width:30px; height:30px; object-fit:cover;"/></td>
                                <td>{{ file.filename }} </td>
                                <td>{{ format_number((file.file_size/1024),2,true) }} KB </td>
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

                                    <button
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
                                    </button>
                                    <!-- <a
                                    :href="`/file-upload/download/${file.id}`"
                                    class="btn btn-success"
                                    download
                                    >
                                    Download
                                    </a>&nbsp; -->
                                    <!-- <button
                                    @click="deleteFile(file.id)"
                                    class="btn btn-danger text-white">
                                    Delete
                                    </button> -->
                                    <!-- <button
                                    @click="deleteFile(file.id)"
                                    class="p-1 rounded hover:bg-red-100"
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
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>


        </ModalMOV>
        <!-- @closeFilter="displaySideModal = false" -->
        <SideModal v-if="displaySideModal"  @close-modal-event="displaySideModal = false" style="z-index: 9999;  ">
            <h2 class="text-lg font-semibold">Preview SideModal</h2>
            <!-- file_extension: {{ file_extension }} -- {{ view_link }} -- {{ disk }} -->
             v-if="disk==='public'"
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
        <!--IMAGE MODAL ************************************************************-->
        <!-- Fullscreen Modal -->
        <!-- ACCOMPLISHMENT MOV MODAL -->
        <ModalAccomplishmentMOV
            v-if="displayModalAccomplishmentMOV"
            @close-modal-event="displayModalAccomplishmentMOV=false"
            title="Accomplishment MOV"
        >
            <table class="table table-bordered table-striped">
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
    </div>
    <!-- opcr_id: {{ opcr_id }} -->
    <!-- disk: {{ disk }} -->
</template>
<script>
// FilterModal ModalDynamicTitle2
import { useForm } from "@inertiajs/vue3";
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";
import SideModal from "@/Shared/PrintModal";
import ModalMOV from "@/Shared/ModalDynamicTitle2";
import ModalAccomplishmentMOV from "@/Shared/ModalDynamicTitle";

export default {
    props: {
        opcr_id: String,
        FFUNCCOD: String,
        mooe: String,
        ps: String,
        opcr_date: String,
        ave: String,
        total: String,
        dept_head: String,
        opcrs: Object,
        fileBaseUrl: String,
        rating_status: Number,
        disk: String,
        list: Object
    },
    data() {
        return {
            imageTypes: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'],
            total_ave: 0,
            total_comp: 0,
            displayModal: false,
            displayModalMOV: false,
            displaySideModal: false,
            displayModalAccomplishmentMOV: false,
            showImageModal: false,
            opcr_rating_id: null,
            movs: [],
            mov_accomplishment: [],
            opcr_current: [],
            search: "",
            // total_divisor: 0,
            form: useForm({
                opcrs: [],

            }),
            file: null,
            files: [],
            file_ids: [],
            current_filepath: null,
            allSelected: false,
            rating_status_dt: null,
            show_warnings: false,
            opcr_data: [],
            rating_type: '-2',
            rating_status: '-2'
        }
    },
    computed: {

    },
    components: {
        Pagination, Filtering, Modal, ModalMOV, SideModal, ModalAccomplishmentMOV
    },

    mounted() {
        //this.adjustTextareaHeight();
        this.opcr_data = this.opcrs
        this.rating_status_dt = this.rating_status
        this.form.opcrs = this.opcrs
        if (localStorage.getItem('reloaded')) {
            // The page was just reloaded. Clear the value from local storage
            // so that it will reload the next time this page is visited.
            localStorage.removeItem('reloaded');
        } else {
            // Set a flag so that we know not to reload the page twice.

            localStorage.setItem('reloaded', '1');
            location.reload();

        }
        window.addEventListener("keydown", this.handleKeydown);
    },
    beforeUnmount() {
        window.removeEventListener("keydown", this.handleKeydown);
    },
    methods: {
        //Format File Size
        formatFileSize(size) {
            if (size < 1024) return size + ' B';
            else if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB';
            else return (size / (1024 * 1024)).toFixed(2) + ' MB';
        },
        isWithinCount() {
            return (this.files.length + this.movs.length) <= 10;
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
        halfSem(amount) {
            var ret = parseFloat(amount) / 2;
            return this.format_number_conv(ret, 2, true);
        },
        deleteEla(id) {
            let text = "WARNING!\nAre you sure you want to delete the Executive Legislative Agenda?" + id;
            if (confirm(text) == true) {
                this.$inertia.delete("/ELA/" + id);
            }
        },
        getRowspan(row, ind) {
            let count = 1;
            const index = ind;

            for (let i = parseFloat(index) + 1; i < this.opcrs.length; i++) {
                if (this.opcrs[i].mfo_desc === row) {
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

            for (let i = parseFloat(index) + 1; i < this.opcrs.length; i++) {
                if (this.opcrs[i].office_accountable === row) {
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
            for (let i = parseFloat(index) + 1; i < this.opcrs.length; i++) {
                if (this.opcrs[i].success_indicator === row) {
                    //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
                    count = parseFloat(count) + 1;
                } else {
                    break;
                }
            }

            return count;
        },
        getTotalAverage() {
            var total = 0;
            for (let i = 0; i < this.form.opcrs.length; i++) {
                var rat_e = this.form.opcrs[i].rating_e;
                var rat_q = this.form.opcrs[i].rating_q;
                var rat_t = this.form.opcrs[i].rating_t;
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
        computeRowAverage(opcr) {
            const values = [opcr.rating_q, opcr.rating_e, opcr.rating_t];
            const validValues = values.filter(v => v > 0);

            if (validValues.length === 0) {
            return 0;
            }

            const sum = validValues.reduce((a, b) => a + b, 0);
            return sum / validValues.length;
        },
        getAverageAll() {


            // compute averages for all rows
            const rowAverages = this.form.opcrs.map(opcr => this.computeRowAverage(opcr));

            // filter out rows that are 0
            const validAverages = rowAverages.filter(avg => avg > 0);

            if (validAverages.length === 0) {
            return 0; // or '' if you want blank
            }

            const total = validAverages.reduce((a, b) => a + b, 0);
            return (total / validAverages.length).toFixed(2); // keep 2 decimals


            // var total_div = 0;
            // var total = 0;
            // for (let i = 0; i < this.form.opcrs.length; i++) {
            //     var rat_e = this.form.opcrs[i].rating_e;
            //     var rat_q = this.form.opcrs[i].rating_q;
            //     var rat_t = this.form.opcrs[i].rating_t;
            //     var avee = parseFloat(rat_e) + parseFloat(rat_q) + parseFloat(rat_t)
            //     var div = 0;
            //     if (parseFloat(rat_e) >= 1) {
            //         div = div + 1;
            //     }
            //     if (parseFloat(rat_q) >= 1) {
            //         div = div + 1;
            //     }
            //     if (parseFloat(rat_t) >= 1) {
            //         div = div + 1;
            //     }
            //     if (div == 0) {
            //         div = 1;
            //     }
            //     if (avee > 0) {
            //         total_div = total_div + 1;
            //     }
            //     // total_div = total_div + div;
            //     total = total + (avee / div);
            // }
            // // this.total_divisor = this.form.opcrs.length;
            // //this.total_comp

            // var aver = parseFloat(total) / total_div
            // //(parseFloat(this.form.opcrs.length));
            // this.total_ave = aver;
            // return this.format_number_conv(aver, 2, true)
        },
        calculatePpdoAverage() {
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
                //         console.log("count: "+count+" total: "+total+" avg: "+avg);
                //         count++;
                //     }
                // });

            });
            // alert("total: "+total+" count: "+count);
            return count ? Number((total / count).toFixed(2)) : 0;
        },
        calculatePpdoTotal(){
            let total = 0;
            let count = 0;

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

                const validAverages = [qAvg, eAvg, tAvg].filter(avg => avg > 0);

                if (validAverages.length > 0) {
                    total += validAverages.reduce((sum, avg) => sum + avg, 0) / validAverages.length;
                    count++;
                }
            });

            // return Number(total.toFixed(2));
            return count;
        },
        getAverageAll2() {
            let total = 0;

            this.form.opcrs.forEach(item => {
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
                total += (qAvg + eAvg + tAvg)/divisor;
            });

            return Number(total.toFixed(2));
        },
        average(values) {
            const valid = values
                .map(Number)
                .filter(v => !isNaN(v) && v > 0);

            if (!valid.length) return 0;

            return valid.reduce((sum, val) => sum + val, 0) / valid.length;
        },
        numberInput(value) {
            if (value < 0) {
                this.numberInput = 0;
            } else if (value > 5) {
                this.numberInput = 5;
            }
        },
        disableTyping(event) {
            if (!event.metaKey && !event.ctrlKey) {
                event.preventDefault();
            }
        },
        getAverage(ind) {
            // alert("getAverage");
            if (parseFloat(this.opcrs[ind].rating_e) > 5) {
                this.opcrs[ind].rating_e = 5;
            }
            if (this.opcrs[ind].rating_e == "") {
                this.opcrs[ind].rating_e = 0;
            }
            if (this.opcrs[ind].rating_q == "") {
                this.opcrs[ind].rating_q = 0;
            }
            if (this.opcrs[ind].rating_t == "") {
                this.opcrs[ind].rating_t = 0;
            }
            if (parseFloat(this.opcrs[ind].rating_e) < 0) {
                this.opcrs[ind].rating_e = 0;
            }

            if (parseFloat(this.opcrs[ind].rating_q) > 5) {
                this.opcrs[ind].rating_q = 5;
            }
            if (parseFloat(this.opcrs[ind].rating_q) < 0) {
                this.opcrs[ind].rating_q = 0;
            }

            if (parseFloat(this.opcrs[ind].rating_t) > 5) {
                this.opcrs[ind].rating_t = 5;
            }
            if (parseFloat(this.opcrs[ind].rating_t) < 0) {
                this.opcrs[ind].rating_t = 0;
            }
            var div = 0;
            if (parseFloat(this.opcrs[ind].rating_e) >= 1) {
                div = div + 1;
            }
            if (parseFloat(this.opcrs[ind].rating_q) >= 1) {
                div = div + 1;
            }
            if (parseFloat(this.opcrs[ind].rating_t) >= 1) {
                div = div + 1;
            }
            if (div == 0) {
                div = 1;
            }
            var ave = parseFloat(this.opcrs[ind].rating_e) + parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);
            ave = this.format_number_conv(ave / div, 2, true);
            return ave;

        },
        submit() {
            if (isNaN(this.total_ave)) {
                alert('Some values are empty!');
            } else {
                let text = "WARNING!\nAre you sure you want to save changes to this OPCR?";
                if (confirm(text) == true) {
                    let jsonString = JSON.stringify(this.form.opcrs);
                    this.$inertia.post(
                        "/opcr/form/store",
                        {
                            opcrs: jsonString,
                            FFUNCCOD: this.FFUNCCOD,
                            opcr_id: this.opcr_id
                        },
                        {
                            preserveScroll: true,
                            preserveState: true,
                            replace: true,
                        }
                    )
                }

            }

        },
        handleKeydown(e) {
            if (e.ctrlKey && e.shiftKey && e.key === "S") {
                e.preventDefault();
                this.submit();
            }
        },
        showModal() {

            // alert("e_name: " + e_name);
            this.viewlink();
            this.displayModal = true;

        },
        async showModalMOV(id){
            // alert(id)
            this.opcr_rating_id=id;
            let url = '/movs/get/mov/' + id;
            // let url = '/monthly-details/monthly/accomplishments/object/' + empl_id + '/' + sem + '/' + e_year + '/' + idsemestral + '/' + my_month;
            // alert(empl_id);
            await axios.get(url).then((response) => {
                this.movs = response.data;
            }).finally(() => {
                this.isLoading = false;
            });
            this.displayModalMOV=true
        },

        async showModalAccomplishmentMOV(idpaps, department_code,year,semester, opcr){

            this.displayModalAccomplishmentMOV=true
            // Optional: clear previous data
            this.mov_accomplishment = [];
            this.opcr_current = opcr;
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
        // async uploadFiles(){
        //     const payload = {
        //         file: this.file,
        //         files: this.files,
        //         // skills: ["Vue", "Laravel", "MySQL"]
        //     }

        //     await axios.post('/movs/save/'+this.opcr_rating_id+'/'+this.opcr_id, payload)
        // },
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

            await axios.post(
                `/movs/save/${this.opcr_rating_id}/${this.opcr_id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )
            .then(response => {
                console.log("Upload success:", response.data);
                this.showModalMOV(this.opcr_rating_id);
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
            // this.form.files = Array.from(event.target.files); // Store selected files
            const filesArray = Array.from(event.target.files);
            console.log(filesArray); // check if files are here
            this.files = Array.from(event.target.files);
            console.log(this.files); // check if files are here
        },
        viewlink() {
            var tot = this.getTotalAverage();
            var ave = 0;
            if(this.list.rating_status==2){


                if(this.list.rating_type=='2') {
                    ave = this.calculatePpdoAverage();
                }else{
                    ave = this.getAverageAll();
                }
            }else{


                ave = this.getAverageAll();
            }
            // var linkt = "abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-";
            var linkt = "https://";
            var jasper_ip = this.jasper_ip;
            // var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2FOPCR_Rating&standAlone=true&fbclid=IwAR1PZD2108LiuvPwxw4IoCBioYDFnY-NdpOVtDe7XKRWoKYcR5bANaX7x1M&standAlone=true&decorate=no&output=pdf';
            // var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2Fopcr_rating_revised&standAlone=true&fbclid=IwAR1PZD2108LiuvPwxw4IoCBioYDFnY-NdpOVtDe7XKRWoKYcR5bANaX7x1M&standAlone=true&decorate=no&output=pdf';
            var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&reportUnit=%2Freports%2Fplanning_system%2Fopcr_ratings_revised_july2025%2Fopcr_ratings_july2025&standAlone=true&ParentFolderUri=%2Freports%2Fplanning_system%2Fopcr_ratings_revised_july2025&standAlone=true&decorate=no&output=pdf'
            var params = '&opcr_id=' + this.opcr_id + '&FFUNCCOD=' + this.FFUNCCOD +
                '&total=' + tot + '&average=' + ave;
            var linkl = linkt + jasper_ip + jasper_link + params;
            this.report_link = linkl;
            return linkl;
        },
        hideModal() {
            this.displayModal = false;
        },
        hideModalMOV(){
            this.displayModalMOV=false;
            this.opcr_id=null;
        },
        isPA(opcr_date, type) {
            if (!opcr_date || !type) return false;
            const year = parseInt(opcr_date.match(/\d{4}/)[0]);
            const isFirstSem = opcr_date.includes("JANUARY");
            // console.log(opcr_date)
            // console.log("Year: " + year + " isFirstSem: " + isFirstSem + " type: " + type);
            if (type === "PA 1") {
                return year < 2025 || (year === 2025 && isFirstSem);
            } else if (type === "PA 2") {
                return year > 2025 || (year === 2025 && !isFirstSem);
            }
            return false;
        },
        // adjustTextareaHeight() {
        //     const textarea = this.$refs.textarea;
        //     if (textarea) {
        //         const rowHeight = textarea.parentNode.offsetHeight; // Height of the table row
        //         textarea.style.height = rowHeight + 'px';
        //     }
        // }
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
                await axios.delete("/movs/delete-multiple/many", {
                        data: { file_ids: ids }
                    }).then(response => {
                        console.log("Files deleted successfully", response.data);
                        this.showModalMOV(this.opcr_rating_id);
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
                await axios.delete("/movs/delete-multiple/many", {
                    data: { file_ids: this.file_ids }
                }).then(response => {
                    console.log("Files deleted successfully", response.data);
                    this.showModalMOV(this.opcr_rating_id);
                }).finally(response=>{
                    this.file_ids = [];
                    this.allSelected=false;
                })
                .catch(error => {
                    console.error("Failed to delete files", error.response?.data || error);
                });

                // Remove deleted files from table without reloading
                // this.movs.data = this.movs.data.filter(
                //     file => !this.file_ids.includes(file.id)
                // );

                // Clear selected IDs

                // alert("Files deleted successfully");
                // this.showModalMOV(this.opcr_rating_id)
                // window.location.reload();
            } catch (error) {
                console.error(error);
                alert("Failed to delete files");
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
                this.file_ids = this.movs.map(file => file.id);
            } else {
                // Remove all file IDs
                this.file_ids = [];
            }
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
        //IMAGE MODAL
        openImageModal() {
            alert("open image modal")
            this.showImageModal = true;
        },
        closeImageModal() {
            this.showImageModal = false;
        },
        //SUBMIT
        async submitRecallRating(curr_stat, staged_for, staged_status, question){
            // var staged_for = parseFloat(curr_stat)+1;
            if (!confirm(question)) {
                return;
            }
            await axios.post("/opcr/form/"+this.opcr_id+"/submit", {
                    data: { curr_stat: curr_stat, staged_for:  staged_for}
            }).then(response => {
                // console.log("Files deleted successfully", response.data);
                // this.showModalMOV(this.opcr_rating_id);
            }).finally(response=>{
                // this.file_ids = [];
                // this.allSelected=false;
                this.rating_status_dt=staged_for
                alert(staged_status)
            })
            .catch(error => {
                console.error("Failed to submit OPCR Rating Form",  error);
            });
        },

        saveRating(rating, opcr_rating_id, column, index){
            // alert("rating: "+ rating + " \n"+"opcr_rating_id: "+opcr_rating_id)
            // review-approve/ratings/sub/mit/opcr/{opcr_rating_id}/{item_score}
            // @change="saveRating(opcr_data[index].q1, opcr_data[index].opcr_rating_id, 'q1')"
            if(!rating){
                rating="rating is null";
            }

            if(this.list.rating_status==2){

                alert('already approved!')
                return;

            }



            if(column === 'q1' || column === 'q2' || column === 'q3'){
                // this.opcr_data[index].rating_q = parseFloat(this.opcr_data[index].q1)+parseFloat(this.opcr_data[index].q2)+parseFloat(this.opcr_data[index].q3);
                const values = [
                    +this.opcr_data[index].q1 || 0,
                    +this.opcr_data[index].q2 || 0,
                    +this.opcr_data[index].q3 || 0
                ];

                this.opcr_data[index].rating_q =
                    values.filter(v => v !== 0).reduce((a, b) => a + b, 0) /
                    (values.filter(v => v !== 0).length || 1);
            }else if(column === 'e1' || column === 'e2' || column === 'e3'){
                // this.opcr_data[index].rating_e = rating;
                const values = [
                    +this.opcr_data[index].e1 || 0,
                    +this.opcr_data[index].e2 || 0,
                    +this.opcr_data[index].e3 || 0
                ];

                this.opcr_data[index].rating_e =
                    values.filter(v => v !== 0).reduce((a, b) => a + b, 0) /
                    (values.filter(v => v !== 0).length || 1);
            }else if(column === 't1'){
                this.opcr_data[index].rating_t = rating;
            }
            var url = "/review-approve/ratings/submit/opcr/"+column+"/"+opcr_rating_id+"/"+rating;
                axios.post(url).then(response=>{

            }).finally(response=>{

            }).catch(error=>{

            });
        },
    }
};
</script>
<style>
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

/* force horizontal overflow for testing */
    /* table {
      min-width: 800px;
    }
    .table-responsive {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    } */
</style>
