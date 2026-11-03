<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>MFO Profile </h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/mforevision/create/${idmfo}`">Add Project Profile</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>

            <Link :href="`/mfos/direct`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>
        <div class="peers fxw-nw jc-sb ai-c">
            <h5>Program/Project: <u>{{ mfos.mfo_desc }}</u></h5>
        </div>
        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>Project Title</th>
                                <th>Office</th>
                                <th>View</th>
                                <th>Version</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data">
                                <td>{{ dat.project_title }}
                                    <span style="color:red; font-weight: bold">
                                        {{ amountStatus(dat.budget_sum, dat.imp_amount) }}
                                    </span>
                                </td>
                                <td>{{ dat.FFUNCTION }}</td>
                                <td><Link
                                        class="btn btn-primary btn-sm"
                                        :href="`/revision/view/project/paps/${dat.id}`">
                                        View
                                    </Link>
                                    <!--:href="`/mforevision/view/project/mfo/${dat.id}`"-->
                                </td>
                                <td>{{ dat.version }}</td>
                                <td>
                                    <div class="dropdown dropstart" >
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                            <li><Link class="dropdown-item" :href="`/implementation/${dat.id}`">Implementation Plan</Link></li>
                                            <li><Link class="dropdown-item" :href="`/HGDGScore/${dat.id}`">HGDG Score</Link></li>
                                            <li><Link class="dropdown-item" :href="`/budget/${dat.id}`">Budget Requirements </Link></li>
                                            <li><Link class="dropdown-item" :href="`/team/${dat.id}/revision/plan/team`">Implementating Team</Link></li>
                                            <li><Link class="dropdown-item" :href="`/EvaluationMechanismTool/${dat.id}`">Monitoring and Evaluation</Link></li>
                                            <li><Link class="dropdown-item" :href="`/RiskManagement/${dat.id}`">Risk Management</Link></li>
                                            <li><Link class="dropdown-item" :href="`/Signatories/${dat.id}`">Signatories</Link></li>
                                            <!--<li><Link class="text-danger dropdown-item" @click="deleteStrat(dat.id)">Delete</Link></li>-->
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
        filters: Object,
        paps: Object,
        idmfo: String,
        mfos: Object,
        monitors: Object
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
        deleteStrat(id) {

            // let text = "WARNING!\nAre you sure you want to delete the strategy?"+id;
            //   if (confirm(text) == true) {
            //     this.$inertia.delete("/strategies/" + id+"/"+this.id);
            // }
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
        },
        amountStatus(budget, imp_amount){
            var status_now="";
            var showAmount ="";
            var bdg = parseFloat(budget);
            var imp = parseFloat(imp_amount);
            //showAmount ="Budget is "+budget+" \n imp amount is "+imp_amount + " "
            if(bdg>imp){
                //alert('budget is greater than impamount');
                status_now=showAmount+"Warning: total amount of budgetary requirement is greater than the total implementation plans amount."
            }
            if(bdg<imp){
                status_now=showAmount+"Warning: total amount of implementation plans is greater than the total  amount of budgetary requirement."
            }
            return status_now;
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
