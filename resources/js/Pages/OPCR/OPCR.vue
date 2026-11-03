<template>
    <Head>
        <title>Home</title>
    </Head>

    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>OPCR Standard</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>

                <div class="peer">

                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                    &nbsp;&nbsp;
                    <Link :href="`/OPCRStandard`">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </Link>
                </div>

            </div>
<!--
            <Link :href="`/mfos/${idinteroutcome}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link> -->
        </div>

        <div class="col-12">
            <div class="col bgc-white bd p-20">
                <div class="table-responsive" id="draggableTable" ref="draggableTable">
                    <table class="table table-bordered border-dark table-hover">
                        <thead class="bgc-grey-800 text-light  text-nowrap">
                            <tr class="bg-secondary text-white text-center ">
                                <th width="5%"><small>MFO</small></th>
                                <th width="5%">PAPS</th>
                                <th width="5%">OUTPUT</th>
                                <th width="5%">Performance Measures</th>
                                <th width="5%">Success Indicator<br>(Target + Measures)</th>
                                <th width="5%">Office/<br>Individual Accountable</th>
                                <th width="5%">Numerical Rating</th>
                                <th width="5%">Adjectival Rating</th>
                                <th width="5%">Efficiency Rating</th>
                                <th width="5%">Remarks</th>
                                <th width="5%">Quality</th>
                                <th width="5%">Remarks</th>
                                <th width="5%">Timeliness</th>
                                <th width="5%">Remarks</th>
                                <th width="30%">How to Monitor?</th>
                            </tr>

                        </thead>
                        <tbody>
                            <template v-for="(dat, key) in data" :key="key">
                                <tr v-for="(item, index) in dat" :key="index">
                                    <td :rowspan="dat.length" v-if="index==0">{{ key }}</td>
                                    <td>{{ item.paps_desc }}</td>
                                    <td>{{ item.Outputs }}</td>
                                    <td>{{ item.performance }}</td>
                                    <td>{{ item.success_indicator }}</td>
                                    <td>{{ item.office_accountable }}</td>
                                    <td class="p-0">
                                        <div class="border-bottom border-dark text-center" v-for="(item, index1) in item.numerical_rating"
                                            :key="index1">
                                                {{ item }}
                                        </div>
                                    </td>
                                    <td class="p-0">
                                        <div class="border-bottom border-dark text-center" v-for="(item, index2) in item.adjectival_rating" :key="index2">
                                                {{ item }}
                                        </div>
                                    </td>
                                    <td class="p-0">
                                        <div class="border-bottom border-dark text-center" v-for="(item, index3) in item.efficiency_quantity " :key="index3">
                                            {{ item }}
                                        </div>
                                    </td>
                                    <td>{{ item.rating_remarks }}</td>
                                    <td class="p-0"><div class="border-bottom border-dark text-center" v-for="(item, index4) in item.qualities " :key="index4">{{ item }}</div></td>
                                    <td>{{ item.quality_remarks }}</td>
                                    <td class="p-0 text-nowrap"><div class="border-bottom border-dark text-center" v-for="(item, index5) in item.timeliness " :key="index5">{{ item }}</div></td>
                                    <td>{{ item.timeliness_remarks }}</td>
                                    <td>{{ item.monitoring }}</td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        <!-- <div class="masonry-item w-200">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div style="width: 100%; overflow-x: auto;">
                <div class="table-responsive" id="draggableTable" ref="draggableTable" >
                    <table class="table table-sm table-bordered border-dark table-hover">
                        <thead>
                            <tr class="bg-secondary text-white text-center">
                                <th><small>MFO</small></th>
                                <th>PAPS</th>
                                <th>OUTPUT</th>
                                <th>Performance Measures</th>
                                <th>Success Indicator<br>(Target + Measures)</th>
                                <th>Office/<br>Individual Accountable</th>
                                <th>Numerical Rating</th>
                                <th>Adjectival Rating</th>
                                <th>Efficiency Rating</th>
                                <th>Remarks</th>
                                <th>Quality</th>
                                <th>Remarks</th>
                                <th>Timeliness</th>
                                <th>Remarks</th>
                                <th>How to Monitor?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(dat, key) in data" :key="key">
                                <tr v-for="(item, index) in dat" :key="index">
                                    <td :rowspan="dat.length" v-if="index==0">{{ key }}</td>
                                    <td>{{ item.paps_desc }}</td>
                                    <td>{{ item.Outputs }}</td>
                                    <td>{{ item.performance }}</td>
                                    <td>{{ item.success_indicator }}</td>
                                    <td>{{ item.office_accountable }}</td>
                                    <td class="p-0">
                                        <div class="border-bottom border-dark text-center" v-for="(item, index1) in item.numerical_rating"
                                            :key="index1">
                                                {{ item }}
                                        </div>
                                    </td>
                                    <td class="p-0">
                                        <div class="border-bottom border-dark text-center" v-for="(item, index2) in item.adjectival_rating" :key="index2">
                                                {{ item }}
                                        </div>
                                    </td>
                                    <td class="p-0">
                                        <div class="border-bottom border-dark text-center" v-for="(item, index3) in item.efficiency_quantity " :key="index3">
                                            {{ item }}
                                        </div>
                                    </td>
                                    <td>{{ item.rating_remarks }}</td>
                                    <td class="p-0"><div class="border-bottom border-dark text-center" v-for="(item, index4) in item.qualities " :key="index4">{{ item }}</div></td>
                                    <td>{{ item.quality_remarks }}</td>
                                    <td ><div class="border-bottom border-dark text-center" v-for="(item, index5) in item.timeliness " :key="index5">{{ item }}</div></td>
                                    <td>{{ item.timeliness_remarks }}</td>
                                    <td>{{ item.monitoring }}</td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div> -->
                <!-- <div class="row justify-content-center">
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
                </div> -->

            <!-- </div> -->
        <!-- </div> -->

    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
export default {
    props: {
        data: Object,
        // idinteroutcome: String,
        // idmfo: String,
        // can: Object,
        // filters: Object,
    },
    data() {
        return{
            //search: this.$props.filters.search,
        }
    },
    mounted() {
        const ele = this.$refs.draggableTable;
        let pos = { top: 0, left: 0, x: 0, y: 0 };

        const mouseDownHandler = function (e) {
        pos = {
            // The current scroll
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
        };

        const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
        };

        const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);

        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');
        };

        ele.addEventListener('mousedown', mouseDownHandler);
    },
    watch: {
            search: _.debounce(function (value) {
            this.$inertia.get(
                "/paps/"+this.idmfo,
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
        deletePAPS(id) {
            let text = "WARNING!\nAre you sure you want to delete the Program and Projects? "+id;
              if (confirm(text) == true) {
                this.$inertia.delete("/paps/" + id+"/"+this.idmfo);
            }
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
            #draggableTable {
    cursor: grab;
    overflow: auto;
  }
  .fixed-position {
  position: sticky;
  left: 0;
  z-index: 1;

}

.custom-width{
    width: 50px;
}
</style>
