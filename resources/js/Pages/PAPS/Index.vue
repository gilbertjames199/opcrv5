<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <div class="peers">
                <h3>Programs and Projects (PAPS)</h3>
            </div>
            <div class="peers">
                <Link @click="goBack">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Link>
            </div>
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
                        <Link class="tool-btn tool-btn-primary" :href="`/paps/create/${idmfo}`">
                            <i class="fas fa-plus"></i> Add Programs and Projects
                        </Link>
                        <button class="tool-btn tool-btn-outline" @click="showFilter()">
                            <i class="fas fa-filter"></i> Filter
                        </button>
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
                            <input v-model="search" type="text" class="filter-input" placeholder="Search PAPS...">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="bgc-white p-20 bd">
                <!-- Table Header with Title and Stats -->
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h4 class="text-primary mb-0">
                        <i class="fas fa-list-ul me-2"></i>
                        PAPS List
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
                                    <i class="fas fa-file-alt me-2"></i>Major Final Outputs
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-file-contract me-2"></i>PAPS Description
                                </th>
                                <th class="border-0 fw-semibold text-primary">
                                    <i class="fas fa-check-circle me-2"></i>Means of Verification
                                </th>
                                <th class="border-0 fw-semibold text-primary text-center">
                                    <i class="fas fa-cogs me-2"></i>Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data">
                                <td>{{ dat.m_f_o.mfo_desc }}</td>
                                <td>{{ dat.paps_desc }}</td>
                                <td>{{ dat.MOV }}</td>
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
                                            <!--/{id}/{idinteroutcome}/edit-->
                                            <li>
                                                <Link class="dropdown-item"
                                                    :href="`/strategies/${dat.id}/${ismfo}/strat/mfo`">Strategies</Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/revision/${dat.id}`">PPA Profile</Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" :href="`/paps/${dat.id}/${dat.idmfo}/edit`">Edit
                                                </Link>
                                            </li>
                                            <li>
                                                <Link class="text-danger dropdown-item" @click="deletePAPS(dat.id)">Delete
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <pagination :next="data.next_page_url" :prev="data.prev_page_url" />
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
        data: Object,
        idinteroutcome: String,
        idmfo: String,
        can: Object,
        filters: Object,
    },
    data() {
        return {
            search: this.$props.filters.search,
            ismfo: 0,
        }
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/paps/" + this.idmfo,
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    components: {
        Pagination, Filtering,
    },

    methods: {

        showCreate() {
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
        deletePAPS(id) {
            let text = "WARNING!\nAre you sure you want to delete the Program and Projects? " + id;
            if (confirm(text) == true) {
                //this.$inertia.delete("/paps/" + id+"/"+this.idmfo);
                this.$inertia.delete("/paps/" + id + "/");
            }
        },
        goBack() {
            // Navigate back to the previous page
            window.history.back();
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
</style>
