<template>
    <Head>
        <title>ELA</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <h3>Executive Legislative Agenda</h3>

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
                    <Link class="tool-btn tool-btn-primary" :href="`/ELA/create`">
                        <i class="fas fa-plus"></i> Add Agenda
                    </Link>
                    <button class="tool-btn tool-btn-outline" @click="showFilter()">
                        <i class="fas fa-filter"></i> Filter
                    </button>
                </div>
            </div>

            <!-- Divider -->
            <div class="toolbar-divider"></div>

            <!-- Bottom Row: Filters -->
            <div class="toolbar-row toolbar-filters" v-if="filter">
                <!-- Year From Filter -->
                <div class="filter-group">
                    <label class="filter-label">
                        <i class="fas fa-calendar-alt"></i> Year From
                    </label>
                    <input type="number" class="filter-input" placeholder="Start year">
                </div>

                <!-- Year To Filter -->
                <div class="filter-group">
                    <label class="filter-label">
                        <i class="fas fa-calendar-alt"></i> Year To
                    </label>
                    <input type="number" class="filter-input" placeholder="End year">
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
                <div class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-head-sticky">
                            <tr>
                                <th scope="col">
                                    <i class="fas fa-align-left"></i> Description
                                </th>
                                <th scope="col">
                                    <i class="fas fa-calendar-alt"></i> Year From
                                </th>
                                <th scope="col">
                                    <i class="fas fa-calendar-alt"></i> Year To
                                </th>
                                <th scope="col">
                                    <i class="fas fa-file-alt"></i> Rationale
                                </th>
                                <th scope="col" class="text-end">
                                    <i class="fas fa-cogs"></i> Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr v-for="dat in data">
                                <td>{{ dat.agenda_description }}</td>
                                <td>{{ dat.year_from }}</td>
                                <td>{{ dat.year_to }}</td>
                                <td>
                                    <!-- <div v-html="dat.rationale" align="justify"></div> -->
                                    <!-- {{ dat.rationale }} -->
                                    {{ truncateText(dat.rationale, 10) }}
                                </td>
                                <td class="text-end">
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
                                                <Link class="dropdown-item" :href="`/ELA/${dat.id}/edit`">Edit</Link>
                                            </li>
                                            <li>
                                                <Link class="text-danger dropdown-item" @click="deleteEla(dat.id)">Delete
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
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p>
                            {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries
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
        data: Object
    },
    data() {
        return {
            search: this.$props.filters?.search || '',
            filter: false

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
