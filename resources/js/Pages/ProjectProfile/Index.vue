<template>
    <Head>
        <title>Home</title>
    </Head>
    <!--<h1 style="color: #26394a; font-weight: bold; font-family: verdana;">RAAO</h1>
    <p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h1 style="color:red;">Project Profile</h1>
            <!--<div class="bgc-red-50">REED</div>
            <div>RAAOOOO</div>-->
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer mR-10">
                    Year:
                </div>
                <div class="peer mR-10" >
                    <select class="form-control form-control-sm form-select" v-model="tyear" @change="filterByYear">
                        <option value=""></option>
                        <option v-for="yearr in year">
                            {{ yearr.tyear }}
                        </option>
                    </select>
                </div>
                <!--<a class="btn btn-primary btn-sm mL-2 text-white" :href="`http://122.54.19.171/:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FPPA%2FPrintPPA&reportUnit=%2Freports%2FPPA%2FPrintPPA%2FPPA_Jasper_Doc1&standAlone=true&decorate=no&output=pdf&year=${tyear}&userType=Admin&lgu=Davao%20de%20Oro&dept=PICTO`" target="_blank">Print</a>-->
                <a class="btn btn-primary btn-sm mL-2 text-white" target="_blank"
                    :href="`http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&reportUnit=%2Freports%2FPPA%2FFinalPPA%2FPPA_FINAL_MAIN_K&standAlone=true&ParentFolderUri=%2Freports%2FPPA%2FFinalPPA&standAlone=true&decorate=no&output=pdf&p_year=${tyear}&p_userType=Admin&p_lgu=Davao%20de%20Oro&p_dept=PICTO&p_dept_head=Department%20Head%20Name&p_lce=Local%20Chief%20Executive`">
                    Download PDF
                </a>
                <Link class="btn btn-primary btn-sm mL-2 text-white" target="_blank"
                        href="/projectprofile/create">New Project Profile
                </Link>
            </div>
        </div>
        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">

            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>Project Title</th>
                                <th>Project Description</th>

                            </tr>
                        </thead>

                        <tbody>
                            <!--v-for="dtnew in datanew.data"-->
                            <tr >
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!--<pagination :next="datanew.next_page_url" :prev="datanew.prev_page_url" />-->

                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">

                        <p >
                            <!--
                            {{ datanew.from }} to {{ datanew.to }} of
                            {{ datanew.total }} entries-->
                        </p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
import Pagination from "@/Shared/Pagination";

import { objectToString } from "@vue/shared";
export default {
    props: {

    },
    data() {
        return{

        }
    },
    watch: {

    },
    mounted(){
        this.tyear = this.yearNow();
    },
    components: {
        Pagination
    },
    methods:{
        getTarget(targid){
            this.$inertia.get(
                "/targets",
                {
                    id_raao: targid
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        filterByYear(){

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
