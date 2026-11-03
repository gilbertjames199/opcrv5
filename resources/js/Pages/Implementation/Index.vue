<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <h2>{{ revs.project_title }}</h2>
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Implementation Plan</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/implementation/create/${idrev}`">Add Implementation Plan</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>

            <Link v-if="revs[0].scope==='GAS'" :href="`/revision/general/administration/services/${revs[0].FFUNCCOD}/plan`">
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
            </Link>
        </div>

        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>Index</th>
                                <th>Strategies/Activities</th>
                                <th>Performance Target Indicators</th>
                                <th>Gender Issues to be Addressed</th>
                                <th>Timeline</th>
                                <th>Expected Output</th>
                                <th>Budget</th>
                                <th>Climate Change Topology Code</th>
                                <th>Person Responsible</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!---***********************-->
                            <template v-for="(dat, index) in data" :key="dat.id">
                                <tr style="background-color:lightgrey; font-weight: bold;">
                                    <td><b>{{ index+1 }}.0 </b></td>
                                    <td><b>{{ dat.strategy }}</b></td>
                                    <td>
                                        <div v-for="target in dat.targets.data">
                                            {{ target.indicator_description }}
                                        </div>
                                    </td>
                                    <td>{{ dat.issue }}</td>
                                    <td>

                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>{{  dat.cc_topology }}</td>
                                    <td>{{ dat.person_responsible }}</td>
                                    <td>
                                        <div class="dropdown dropstart" >
                                            <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                </svg>
                                            </button>
                                            <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                                <li><Link class="dropdown-item" :href="`/implementation/edit/${dat.id}`">Edit</Link></li>
                                                <li><Link class="text-danger dropdown-item" @click="deleteImp(dat.id)">Delete</Link></li>
                                                <li><Link class="text-danger dropdown-item" :href="`/implementation/create/activity/${dat.idstrategy}/${dat.idrev_plan}`">{{ dat.idstrategy }} Implementation -Activity</Link></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <template v-if="dat.activity_implementation">
                                    <tr v-for="(act, subIndex) in dat.activity_implementation" :key="act.id">
                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ index+1 }}.{{ subIndex+1 }}&nbsp;&nbsp;&nbsp;</td>
                                        <td>{{ act.activity }}</td>
                                        <td>
                                            <div v-for="target in act.targets">
                                                {{ target.indicator_description }}
                                            </div>
                                        </td>
                                        <td>{{ act.issue }}</td>
                                        <td>
                                            <div v-if="act.date_from">
                                                {{ act.date_from }} - {{ act.date_to }}
                                            </div>
                                        </td>
                                        <td>
                                            <div v-for="target in act.targets">
                                                {{ target.target_description }}
                                            </div>
                                        </td>
                                        <td>
                                            <div v-for="target in act.targets">
                                                <div v-if="target.budget>0">
                                                    {{ format_number_conv(target.budget,2,true) }}
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{  act.cc_topology }}</td>
                                        <td>{{ act.person_responsible }}</td>
                                        <td>
                                            <div class="dropdown dropstart" >
                                                <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                    </svg>
                                                </button>
                                                <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                                    <li><Link class="dropdown-item" :href="`/implementation/edit/activity/${act.id}`">Edit</Link></li>
                                                    <li><Link class="text-danger dropdown-item" @click="deleteImp(act.id)">Delete</Link></li>
                                                    <li><Link class="text-danger dropdown-item" :href="`/targets/${act.id}/implementation`">Targets</Link></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                            </template>
                            <!--********************-->

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
        //idstrat: String,
        revs: Object,
        idrev: String,
        filters: Object,
    },
    data() {
        return{
            search: this.$props.filters.search,
        }
    },
    components: {
        Pagination, Filtering,
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
        deleteImp(id) {
            //alert(this.idpaps);
            let text = "WARNING!\nAre you sure you want to delete the Implementation Plan?"+id;
              if (confirm(text) == true) {
                this.$inertia.delete("/implementation/" + id);
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
