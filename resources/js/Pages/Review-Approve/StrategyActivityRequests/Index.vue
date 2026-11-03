<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <h3>Requests for Additional Strategies and Activities</h3>

        <div class="toolbar-card">
            <!-- Top Row: Actions -->
            <div class="toolbar-row toolbar-actions">
                <div class="toolbar-left">
                    <span class="toolbar-label">
                        <i class="fas fa-sliders-h"></i> FILTER PANEL
                    </span>
                </div>
                <div class="toolbar-right">
                    <div class="search-wrapper">
                        <i class="fas fa-search search-icon"></i>
                        <input v-model="search" type="text" class="filter-input" placeholder="Search...">
                    </div>
                    <!-- <Link class="tool-btn tool-btn-primary" :href="`/Sectoral/create`">
                        <i class="fas fa-plus"></i> Add Sectoral Outcomes
                    </Link>
                    <button class="tool-btn tool-btn-outline" @click="showFilter()">
                        <i class="fas fa-filter"></i> Filter
                    </button> -->
                </div>
            </div>

            <!-- Divider -->
            <div class="toolbar-divider"></div>

            <!-- Bottom Row: Filters -->
            <div class="toolbar-row toolbar-filters" v-if="filter">
                <!-- Search Filter -->
                <div class="filter-group">
                    <label class="filter-label">
                        <i class="fas fa-search"></i> Search Filter
                    </label>
                    <input type="text" class="filter-input" placeholder="Filter by keyword">
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; gap: 10px; align-items: flex-end; margin-left: auto;">
                    <button class="tool-btn tool-btn-primary" @click="">
                        <i class="fas fa-search"></i> Search
                    </button>
                    <button class="tool-btn tool-btn-outline" @click="filter = false">
                        <i class="fas fa-times"></i> Clear
                    </button>
                </div>
            </div>
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <!-- {{data.total}} -->
                <!-- <p>_______________________</p> -->
                <div v-if="data && data.total" class="accordion accordion-flush" id="strategyRequestsAccordion">
                    <div v-for="(request, index) in data.data" :key="request.id ?? index" class="accordion-item border rounded mb-2">
                        <h2 class="accordion-header d-flex align-items-center">
                            <!--  -->
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                :data-bs-target="`#strategy-request-${request.id ?? index}`" aria-expanded="false">
                                <span class="fw-bold">
                                    {{ request.revision_plan?.project_title ? ` - ${request.revision_plan.project_title}` : '' }}
                                </span>
                            </button>
                            <!-- status: {{ request.status}} -->
                            <!--
                                <button
                                    type="button" class="btn btn-success btn-sm text-white mx-2 text-nowrap"
                                    @click="updateStrategyActivityRequestField(request.id, 'strategy_activity_requests', 'status', '0')">
                                    Submit Request
                                </button>
                            <br> -->
                            <!-- <button type="button" class="btn btn-success btn-sm text-white mx-2 text-nowrap" @click="openStrategyOnlyModal(request.id)">Add Strategy</button> -->
                            <!-- @click="submitStrategyActivityRequest(request)" -->
                            <!-- @click="updateStrategyActivityRequestField(request.id, 'strategy_activity_requests', 'status', '0')" -->
                            <!-- class="btn btn-primary btn-sm text-white me-2 text-nowrap" -->
                            <!-- APPROVE -->
                            <button v-if="String(request.status) === '0'"
                                type="button"
                                class="btn p-0 me-2 text-success"
                                title="Approve"
                                @click="submitStrategyActivityRequest(request,'1')"

                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                </svg>
                                <!-- Approve -->
                            </button>
                            <!-- DISAPPROVE -->
                            <button v-if="String(request.status) === '0'"
                                type="button"
                                class="btn p-0 me-2 text-danger"
                                title="Return"
                                @click="submitStrategyActivityRequest(request,'-2')"

                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                                <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591"/>
                                </svg>
                                <!-- Return -->
                            </button>
                            <!-- PREVIEW -->
                            <button type="button"
                                class="btn p-0 me-2 text-primary"
                                title="View File"
                                @click.stop="showStrategyRequestFiles(request)">
                                <!-- View File -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                </svg>
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
                                                                <!-- <div class="p-2 border-bottom d-flex justify-content-between align-items-center">
                                                                    <label class="fw-bold mb-0">Strategy Description</label>
                                                                    <button class="btn btn-danger btn-sm text-white" @click="deleteStrategyActivityRequest(strategy.id, 'strategies')">Delete Strategy</button>
                                                                </div> -->
                                                                <div class="p-2 border-bottom d-flex align-items-start gap-2">
                                                                    <textarea class="form-control" rows="2" v-model="strategy.description"
                                                                        @change="updateStrategyActivityRequestField(strategy.id, 'strategies', 'description', strategy.description)"></textarea>
                                                                    <!-- <button type="button" class="btn btn-primary btn-sm text-white text-nowrap" @click="openActivityOnlyModal(strategy.id, strategy.description)">Add Activity</button> -->
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
                                                                            <!-- <th>Action</th> -->
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr v-if="!(strategy.activity || []).length">
                                                                            <td colspan="10" class="text-muted text-center py-3">No activities available.</td>
                                                                        </tr>
                                                                        <template v-else>
                                                                            <tr v-for="(activity, activityIndex) in (strategy.activity || [])" :key="activity.id ?? activity.activity_id ?? `${request.id ?? index}-${strategyIndex}-${activityIndex}`">
                                                                                <td>
                                                                                    {{ activity.description }}
                                                                                    <!-- <textarea class="form-control" rows="2" v-model="activity.description"
                                                                                        @change="updateStrategyActivityRequestField(activity.id, 'activities', 'description', activity.description)"></textarea> -->
                                                                                </td>
                                                                                <td v-if="activity.activityProject && activity.activityProject.length">
                                                                                    <input type="date" class="form-control mb-1" v-model="activity.activityProject[0].date_from"
                                                                                        @change="updateStrategyActivityRequestField(activity.activityProject[0].id, 'activity_projects', 'date_from', activity.activityProject[0].date_from)">
                                                                                    <input type="date" class="form-control" v-model="activity.activityProject[0].date_to"
                                                                                        @change="updateStrategyActivityRequestField(activity.activityProject[0].id, 'activity_projects', 'date_to', activity.activityProject[0].date_to)">
                                                                                </td>
                                                                                <td v-else class="text-muted">Project details unavailable</td>
                                                                                <td v-if="activity.activityProject && activity.activityProject.length">
                                                                                    <textarea class="form-control" rows="2" v-model="activity.activityProject[0].gad_issue"
                                                                                        @change="updateStrategyActivityRequestField(activity.activityProject[0].id, 'activity_projects', 'gad_issue', activity.activityProject[0].gad_issue)"></textarea>
                                                                                </td>
                                                                                <td v-else class="text-muted">—</td>
                                                                                <template v-for="category in ['ps', 'mooe', 'co', 'fe']" :key="`${activity.id}-${category}`">
                                                                                    <!-- activityProject: {{ activity.activityProject }} -->
                                                                                    <td v-if="activity.activityProject && activity.activityProject.length">

                                                                                        <div v-for="quarter in ['q1', 'q2', 'q3', 'q4']" :key="`${activity.id}-${category}-${quarter}`" class="mb-1">
                                                                                            <input type="number" min="0" step="0.01" class="form-control form-control-sm"
                                                                                                :aria-label="`${category.toUpperCase()} ${quarter.toUpperCase()}`"
                                                                                                :placeholder="quarter.toUpperCase()"
                                                                                                v-model.number="activity.activityProject[0][`${category}_${quarter}`]"
                                                                                                @change="updateStrategyActivityRequestField(activity.activityProject[0].id, 'activity_projects', `${category}_${quarter}`, activity.activityProject[0][`${category}_${quarter}`])">
                                                                                        </div>
                                                                                    </td>
                                                                                    <td v-else class="text-muted">—</td>
                                                                                </template>
                                                                                <td v-if="activity.activityProject && activity.activityProject.length">
                                                                                    <input type="text" class="form-control" v-model="activity.activityProject[0].responsible"
                                                                                        @change="updateStrategyActivityRequestField(activity.activityProject[0].id, 'activity_projects', 'responsible', activity.activityProject[0].responsible)">
                                                                                </td>
                                                                                <td v-else class="text-muted">—</td>
                                                                                <td v-if="activity.activityProject && activity.activityProject.length">
                                                                                    <input type="text" class="form-control" v-model="activity.activityProject[0].ccet_code"
                                                                                        @change="updateStrategyActivityRequestField(activity.activityProject[0].id, 'activity_projects', 'ccet_code', activity.activityProject[0].ccet_code)">
                                                                                </td>
                                                                                <td v-else class="text-muted">—</td>
                                                                                <!-- <td>
                                                                                    <button class="btn btn-danger btn-sm text-white" @click="deleteStrategyActivityRequest(activity.id, 'activities')">Delete</button>
                                                                                </td> -->
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
            </div>
        </div>
        <!-- {{data}} -->
    </div>
    <NewActivityStrategyRequestModal v-if="strategyRequestFilesModalVisible" @close-modal-event="closeStrategyRequestFilesModal" title="STRATEGY REQUEST FILES">
        <!-- <div class="mb-3 d-flex align-items-end gap-2">
            <div class="flex-grow-1">
                <label class="form-label" for="strategy-request-extra-file">Add a file</label>
                <input id="strategy-request-extra-file" ref="strategyRequestFileInput" type="file" class="form-control" accept=".pdf,.doc,.docx,image/*" @change="handleAdditionalStrategyRequestFile">
            </div>
            <button type="button" class="btn btn-primary text-white" :disabled="!strategyRequestFileToUpload" @click="addStrategyRequestFile">Upload</button>
        </div> -->
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
                        <!-- <th>Uploaded by</th>
                        <th>Created at</th> -->
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
                            <!-- <td>{{ file.created_at }}</td>
                            <td>{{ file.updated_at }}</td> -->
                            <td>
                                <button
                                    type="button"
                                    class="btn p-0 text-primary"
                                    data-bs-toggle="collapse"
                                    :data-bs-target="`#strategy-request-file-${file.id ?? fileIndex}`"
                                    :aria-expanded="isFilePreviewOpen(file)"
                                    :aria-controls="`strategy-request-file-${file.id ?? fileIndex}`"
                                    :title="isFilePreviewOpen(file) ? 'Hide' : 'Preview'"
                                    @click="toggleFilePreview(file)"
                                >
                                    <!-- Eye = hidden, clicking will show -->
                                    <svg v-if="!isFilePreviewOpen(file)"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
                                        fill="currentColor"
                                        class="bi bi-eye-fill"
                                        viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                    </svg>
                                    <!-- Eye slash = visible, clicking will hide -->
                                    <svg
                                        v-else
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="21"
                                        fill="currentColor"
                                        class="bi bi-eye-slash-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                    </svg>
                                </button>
                                <!-- <button type="button" class="btn btn-danger btn-sm text-white ms-1" @click="deleteStrategyRequestFile(file.id)">Delete</button> -->
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
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import NewActivityStrategyRequestModal from "@/Shared/ModalDynamicTitleLarge";

export default {
    props: {
        auth: Object,
        data: Object,
        filters: Object,
    },
    data() {
        return {
            search: this.$props.filters?.search || '',
            filter: false,
            strategyRequestFilesModalVisible: false,
            strategyRequestFiles: [],
            strategyRequestId: null,
            strategyRequestFiles: null,
            strategyRequestFileToUpload: null,
            strategyRequestFilesModalVisible: null,
            openFilePreviews: []
            // strategyRequestFileToUpload: null,
        }
    },
    components: {
        Pagination, Filtering, NewActivityStrategyRequestModal
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/strategy-and-activity-request" ,
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    methods: {
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
        formatFileSize(size) {
            return `${(size / 1024).toFixed(1)} KB`;
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
        submitStrategyActivityRequest(request, status) {
            let stat = '';
            if(status==='1'){
                stat = 'approve';
            }else if(status==='-2'){
                stat = 'return';
            }
            const confirmed = window.confirm(
                'Are you sure you want to '+stat+' this strategy activity request?'
            );

            if (!confirmed) {
                return Promise.resolve(false);
            }
            return this.updateStrategyActivityRequestField(
                request.id,
                'strategy_activity_requests',
                'status',
                status
            ).then((response) => {
                // if (response) {
                //     request.status = status;
                // }
            });
        },
        // updateStrategyActivityRequestField(id, tableName, columnName, newValue) {
        //     if (!id || !tableName || !columnName) {
        //         return Promise.resolve();
        //     }

        //     return axios.patch('/strategy-and-activity-request/update/status', {
        //         id: id,
        //         table_name: tableName,
        //         column_name: columnName,
        //         new_value: newValue ?? ''
        //     }, {
        //         preserveScroll: true,
        //         preserveState: true
        //     })
        //     .then((response) => {
        //         // this.unsaved = false;
        //         // return response;
        //     })
        //     .catch((error) => {
        //         // console.error('Failed to update strategy/activity row:', error);
        //         // alert('Failed to update the selected row.');
        //         // return false;
        //     });
        // },
        updateStrategyActivityRequestField(id, tableName, columnName, newValue) {
            if (!id || !tableName || !columnName) {
                return;
            }

            this.$inertia.patch('/strategy-and-activity-request/update/status', {
                params: {
                    id: id,
                    table_name: tableName,
                    column_name: columnName,
                    new_value: newValue ?? ''
                }
            });
        },
        isFilePreviewOpen(file) {
            const fileKey = file.id ?? this.files.indexOf(file);

            return this.openFilePreviews.includes(fileKey);
        },

        toggleFilePreview(file) {
            const fileKey = file.id ?? this.files.indexOf(file);

            if (this.openFilePreviews.includes(fileKey)) {
                this.openFilePreviews = this.openFilePreviews.filter(
                    id => id !== fileKey
                );
            } else {
                this.openFilePreviews.push(fileKey);
            }
        }
        // showCreate() {
        //     this.$inertia.get(
        //         "/targets/create",
        //         {
        //             raao_id: this.raao_id
        //         },
        //         {
        //             preserveScroll: true,
        //             preserveState: true,
        //             replace: true,
        //         }
        //     );
        // },
        // deleteSectoral(id) {
        //     let text = "WARNING!\nAre you sure you want to delete the Sectoral Goals?" + id;
        //     if (confirm(text) == true) {
        //         this.$inertia.delete("/Sectoral/" + id);
        //     }
        // },
        // getAccomplishment(tar_id) {
        //     this.$inertia.get(
        //         "/accomplishments",
        //         {
        //             idtarget: tar_id
        //         },
        //         {
        //             preserveScroll: true,
        //             preserveState: true,
        //             replace: true,
        //         }
        //     );
        // },
        // getPercent(accomp, targqty) {
        //     var accSum = 0;
        //     accomp.forEach(myFunction);
        //     function myFunction(item) {
        //         accSum += parseFloat(item.accomplishment_qty)

        //     }
        //     var percentt = (accSum / targqty) * 100
        //     percentt = this.format_number(percentt, 2, true)
        //     return percentt;
        // }
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
</style>
