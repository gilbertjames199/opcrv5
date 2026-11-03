<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Implementation Schedule/ Workplan</h3>
            <!-- {{revision_plan }} -->
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <!-- <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/inter_outcome/create/${revision_plan.idpaps}`">Add Intermediate Outcome</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div> -->
            </div>
            <Link :href="`/revision/${revision_plan.idpaps}`">
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
                    <!-- {{data}} -->
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th rowspan="2">Strategy</th>
                                <th rowspan="2">Performance Target and Indicator</th>
                                <th rowspan="2">Timeline</th>
                                <th rowspan="2">Expected Output/Outcome</th>
                                <th rowspan="1" colspan="3">Cost/Budget</th>
                                <th rowspan="2">Office Responsible</th>
                                <th rowspan="2">GAD Related Issue/s</th>
                                <th rowspan="2">CCET Code</th>
                                <th rowspan="2">Actions</th>
                            </tr>
                            <tr class="bg-secondary text-white">
                                <th>PS</th>
                                <th>MOOE</th>
                                <th>Capital Outlay</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data">
                                <td>{{ dat.strategy.description }}</td>
                                <td>{{ dat.target_indicator }}</td>
                                <td>{{ dat.date_from }}</td>
                                <td>expected outputs/outcomes</td>
                                <td>{{ dat.ps_q1 + dat.ps_q2 + dat.ps_q3 + dat.ps_q4}}</td>
                                <td>{{ dat.mooe_q1 + dat.mooe_q2 + dat.mooe_q3 + dat.mooe_q4 }}</td>
                                <td>{{ dat.co_q1 + dat.co_q2 + dat.co_q3 + dat.co_q4 }}</td>
                                <td>{{ dat.responsible }}</td>
                                <td>{{ dat.gad_issue }}</td>
                                <td>{{ dat.ccet_code }}</td>
                                <td>
                                    <div class="dropdown dropstart" >
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                            <li><Link class="dropdown-item" :href="`/strategy/implementation/edit/${dat.id}`">Edit</Link></li>
                                            <li><Link class="text-danger dropdown-item" @click="deletInterOutcome(dat.id)">Delete</Link></li>
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
        idrevplan: String,
        revision_plan: Object
    },
    data() {
        return{

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
        deletInterOutcome(id) {
            let text = "WARNING!\nAre you sure you want to delete the intermediate outcome?"+id;
              if (confirm(text) == true) {
                this.$inertia.delete("/inter_outcome/" + id+"/"+this.idoutcome);
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
