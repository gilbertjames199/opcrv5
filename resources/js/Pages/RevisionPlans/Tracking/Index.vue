<template>
    <Head>
        <title>ELA</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>IPP Tracking</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/ELA/create`">Add Agenda</Link>
                </div>
            </div>
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <!-- Table Header with Title and Stats -->
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <div class="fw-bold text-muted">
                        <h5>Fetched {{ data.length }} {{ data.length === 1 ? 'result' : 'results' }}</h5>
                    </div>
                </div>

                <!-- Responsive Table Container -->
                <div class="table-responsive" ref="tableResponsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-head-sticky">
                            <tr>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-tasks me-2"></i>Action
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-file-alt me-2"></i>Project Title
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-calendar me-2"></i>Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="dat in data" :key="dat.id">
                                <tr class="border-bottom border-light">
                                    <!-- ACTION -->
                                    <td class="fw-medium">
                                        <div :class="actionTypeClass(dat.action_type)" class="d-inline-block px-2 py-1 rounded">
                                            {{ formatType(dat.action_type) }}
                                        </div>
                                    </td>

                                    <!-- PROJECT TITLE -->
                                    <td class="fw-medium">
                                        <Link :href="`/revision/view/project/paps/${dat.revision_plan_id}`"
                                            target="_blank"
                                            class="text-dark">
                                            {{ dat.revision_plan?.project_title }}
                                        </Link>
                                    </td>

                                    <!-- DATE -->
                                    <td class="text-muted">
                                        {{ formatDateTime(dat.created_at) }}
                                    </td>
                                </tr>
                                <tr v-if="dat.accordion_visible" class="border-bottom border-light">
                                    <td colspan="3">
                                        {{ dat.revision_plan.projectProfileTrackings }}
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>

                <!-- <div class="row justify-content-center">
                    <div class="col-md-12">
                        <pagination :next="data.next_page_url" :prev="data.prev_page_url" />
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p>
                            {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries
                        </p>
                    </div>
                </div> -->

            </div>
        </div>

    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
export default {
    props: {
        data: Object
    },
    data() {
        return {

        }
    },
    components: {
        Pagination, Filtering,
    },

    methods: {


        deleteEla(id) {
            let text = "WARNING!\nAre you sure you want to delete the Executive Legislative Agenda?" + id;
            if (confirm(text) == true) {
                this.$inertia.delete("/ELA/" + id);
            }
        },
        actionTypeClass(action) {
            if (!action) return '';

            const value = action.toLowerCase();

            if (value.includes('approve')) return 'action-approve';
            if (value.includes('review')) return 'action-review';
            if (value.includes('submit')) return 'action-submit';
            if (value.includes('return')) return 'action-return';
            if (value.includes('recall')) return 'action-recall';

            return '';
        },
        formatType(action){
            if (!action) return '';

            const value = action.toLowerCase();

            if (value.includes('recall')) return 'Recalled Project Profile';
            if (value.includes('request')) return 'Requested for the return of the Project Profile';
            if (value.includes('return')) return 'Returned Project Profile';
            if (value.includes('review')) return 'Reviewed Project Profile';
            if (value.includes('submit')) return 'Submitted Project Profile';
            if (value.includes('approve')) return 'Approved Project Profile';

            return '';
        }

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


.action-approve {
  background-color: #acf8be; /* light green */
  color: #022908;           /* darker green */
  font-weight: 600;
}

.action-review {
  background-color: #d1f1e6; /* light blue */
  color: #003d2e;            /* darker blue */
  font-weight: 600;
}

.action-submit {
  background-color: #ffe5b4; /* light orange */
  color: #7a2e0a;            /* darker orange */
  font-weight: 600;
}

.action-return {
  background-color: #f8d7da; /* pale red */
  color: #5a1318;            /* darker red */
  font-weight: 600;
}

.action-recall {
  background-color: #ada8f8; /* pale blue */
  color: #1a047e;            /* darker purple */
  font-weight: 600;
}
</style>
