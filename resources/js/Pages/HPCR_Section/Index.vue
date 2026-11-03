<template>
    <Head>
        <title>Hospital Section Output</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h4>Hospital Division Output: {{ HDPCR.output }}</h4>

        </div>
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Hospital Section Output</h3>
            <div class="peers">
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/hospital_section/create/${idhdpcr}`">Add Hospital SPCR</Link>
                </div>&nbsp;
                <Link :href="`/hospital_division/${HDPCR.idhpcr}`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Link>
            </div>

        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>Hospital Section Output</th>
                                <th>Success Indicator/PM</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr v-for="dat in data.data">
                                <td>{{ dat.output }}</td>
                                <td>{{ dat.efficiency1 == "No" && dat.timeliness == "No" ? dat.performance_measure + " " + dat.output + " with a satisfactory rating for quality/effectiveness and satisfactory in efficiency" : dat.efficiency1 == 'Yes' ? dat.performance_measure + " " + dat.output + " with a satisfactory rating for quality/effectiveness and satisfactory in efficiency within " + dat.prescribed_period : dat.performance_measure + " " + dat.output + " with a satisfactory rating for quality/effectiveness and satisfactory in efficiency on or before " + dat.timeliness  }}</td>
                                <td>
                                    <div class="dropdown dropstart" >
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                            <li><Link class="dropdown-item" :href="`/hospital_individual/${dat.id}`">Add Individual Output</Link></li>
                                            <li><Link class="dropdown-item" :href="`/hospital_section/${dat.id}/edit`">Edit</Link></li>
                                            <li><Link class="text-danger dropdown-item" @click="deleteRA(dat.id)">Delete</Link></li>
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

    </div>

</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
export default {
    props: {
        data: Object,
        HDPCR: Object,
        idhdpcr: String
    },
    data() {
        return{

        }
    },
    components: {
        Pagination, Filtering,
    },

    methods:{


        deleteRA(id) {
            let text = "WARNING!\nAre you sure you want to delete this Division Output?";
              if (confirm(text) == true) {
                this.$inertia.delete("/hospital_section/" + id);
            }
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
