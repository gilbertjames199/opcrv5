<template>
    <Head>
        <title>Indicators</title>
    </Head>
    <!--<h1 style="color: #26394a; font-weight: bold; font-family: verdana;">Indicators</h1>
    <p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <h3>Indicators</h3>

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
                    <Link class="tool-btn tool-btn-primary" :href="`/indicators/create`">
                        <i class="fas fa-plus"></i> Add Indicator
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
        <div class="bgc-white p-20 bd">
            <div class="table-responsive">
                <table class="table table-hover align-middle">
                    <thead class="table-head-sticky">
                        <tr>
                            <th scope="col">
                                <i class="fas fa-align-left"></i> Description
                            </th>
                            <th scope="col" class="text-end">
                                <i class="fas fa-cogs"></i> Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="dat in data.data">
                            <!--<td>{{ dat.idindicator }}</td>
                            <td>{{ dat.idindication }}</td>-->
                            <td>{{ dat.description }}</td>
                            <td class="text-end">
                                <div class="dropdown dropstart" >
                                    <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                        <li><Link class="dropdown-item" :href="`/indicators/${dat.id}/edit`">Edit</Link></li>
                                        <!-- <li><Link class="dropdown-item" @click="editThis(dat.id, dat.targ)">Edit</Link></li> -->
                                        <li><Link class="text-danger dropdown-item" @click="deleteIndicator(dat.id)">Delete</Link></li>
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
                        <p >
                            {{ data.from }} to {{ data.to }} of
                            {{ data.total }} entries
                        </p>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
import Pagination from "@/Shared/Pagination";
export default {
    props: {
        users: Object,
        filters: Object,
        data: Object,
    },
    data() {
        return{
            search: this.$props.filters?.search || '',
            filter: false,
            edited: false,
        }
    },
    components: {
        Pagination
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/indicators",
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    methods:{
        deleteIndicator(ind_id){
            let text = "WARNING!\nAre you sure you want to delete the record?";
            if (confirm(text) == true) {
                //alert('target id: '+this.target_id);
                this.$inertia.delete("/indicators/" + ind_id +"/delete");
            }
        },
        editThis(ind_id, targ){

            if(targ.length>0){
                alert('You can edit this indicator!!')
            }else{
                this.$inertia.get(
                    "/indicators/" + ind_id +"/edit",
                );
            }


        },
        checkUse(ind_id){
            axios.post('/indicators/checkUse',{ind_id: ind_id}).then((response)=>{
                //edited=response.data;
                this.edited=response.data;
                alert('edited ***5646454* ind_id: '+this.edited);

            });
        }
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
