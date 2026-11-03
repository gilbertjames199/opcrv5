<template>
    <Head>
        <title>Home</title>
    </Head>
    <!--
    <h1 style="color: #26394a; font-weight: bold; font-family: verdana;">Accomplishments</h1>
    <p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Accomplishments </h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search"
                            type="text"
                            class="form-control form-control-sm"
                            placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/accomplishments/raao/${raao_id}/create`">Add Accomplishment</Link>
                    From
                    <input  type="date" class="frm-control-sm" v-model="accomp_date_from"/>
                    To
                    <input  type="date" class="frm-control-sm" v-model="accomp_date_to"/>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="filterByDate()">Filter</button>
                    <button class="btn btn-danger btn-sm mL-2 text-white" @click="clearAllFilter()">Clear Filters</button>
                </div>
            </div>
            <Link :href="'/raao'">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>
        <div class="peers fxw-nw jc-sb ai-c">
            <div><b>FRAO DESCRIPTION: </b><u>{{ raao_description }}</u></div>
        </div>
        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">
                                <th>Accomplishment Quantity</th>
                                <th>Actual Expenditure</th>
                                <th>Actual Period</th>
                                <th>Accomplishment Quantity</th>
                                <th>Accomplishment Remarks</th>
                                <th>Date Accomplished</th>
                                <th>Validated</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dat in data.data">
                                <td>{{ dat.accomplishment_qty }}</td>
                                <td>{{ dat.actual_expenditure }}</td>
                                <td>{{ dat.actual_period }}</td>
                                <td>{{ dat.accomplishment_qty }}</td>
                                <td >{{ dat.remarks }}</td>
                                <td>{{ dat.date_accomplished_from }}</td>
                                <td >
                                    <span v-if="dat.validated_status=='No'" class="td-one">
                                        {{ dat.validated_status }}
                                    </span>
                                    <span v-else>{{ dat.validated_status }}</span>
                                </td>
                                <td>
                                    <div class="dropdown dropstart" >
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <button class="dropdown-item" @click="showModal(dat.id, dat.concerns_competency,dat.validated_date, dat.validated_remarks, dat.validated_status)" >Validations</button>
                                            </li>
                                            <li><Link class="dropdown-item" @click="editAccomplishment(dat.id, dat.validated_status)">Edit</Link></li>
                                            <li><Link class="text-danger dropdown-item" @click="deleteUser(dat.id)">Delete</Link></li>
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
        <ValidationModal v-if="displayModal" @close-modal-event="hideModal">
            <div>ID: {{ this.form.accomp_id }}</div>
            <label>Validated Status</label>
            <select class="form-control" v-model="form.val_status" :disabled="valid_status=='Yes'">
                <option>Yes</option>
                <option>No</option>
            </select>
            <label for="">Validated Remarks</label>
            <input type="text"
                    v-model="form.val_rem"
                    class="form-control"
                    autocomplete="chrome-off"
                    :readonly="valid_status=='Yes'"
            >
            <label for="">Validated Date</label>
            <input type="date"
                    v-model="form.val_date"
                    class="form-control"
                    autocomplete="chrome-off"
                    :readonly="valid_status=='Yes'"
            >
            <hr />
            <div v-if="valid_status==='Yes'">
                <button type="button"
                        class="btn btn-danger"
                        style="font-weight: bold; color: white"
                        @click="hideModal()">
                            CLOSE
                </button>
            </div>
            <div v-else>
                <button type="button"
                        class="btn btn-primary"
                        style="font-weight: bold; color: white"
                        @click="saveValidation()">
                            SAVE
                </button>&nbsp;
                <button type="button"
                        class="btn btn-danger"
                        style="font-weight: bold; color: white"
                        @click="hideModal()">
                            CANCEL
                </button>
            </div>
        </ValidationModal>
    </div>
</template>
<script>
import { useForm } from '@inertiajs/vue3';
import ValidationModal from './ValidationModal.vue'
import Pagination from "@/Shared/Pagination";
export default {
    components: {
        ValidationModal, Pagination
    },
    props: {
        data: Object,
        filters: Object,
        target: Object,
        target_id: String,
        //target_description: String,
        raao_description: String,
        raao_id: String
    },
    data() {
        return{
            displayModal: false,
            form: useForm({
                val_date: null,
                val_rem: null,
                val_status: null,
                my_desc: '',
                accomp_id: '',
                targ_id: '',
            }),
            accomp_date_from: null,
            accomp_date_to: null,
            valid_status: null,
            search: this.$props.filters.search,
        }
    },
    computed:{
        myDispModal(){
            //return this.displayModal;
            return 1;
        }
    },
    mounted(){
        //this.showModal('1','Description');

    },
    watch: {
        //:href="`/accomplishments/${dat.recid}/raao/list`"
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/accomplishments/"+this.raao_id+'/raao/list',
                {
                    search: value,
                    accomp_date_from: this.accomp_date_from,
                    accomp_date_to: this.accomp_date_to
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    methods:{
        deleteUser(id){
            //Route::delete('/{id}/raao/{raao_id}/delete',[AccomplishmentController::class,'deletefromraao']);

            let text = "WARNING!\nAre you sure you want to delete the record?";
            if (confirm(text) == true) {
                //alert('target id: '+this.target_id);
                this.$inertia.delete("/accomplishments/" + id+'/raao/'+this.raao_id+'/delete');
            }
        },
        showModal(id, desc, dt, rm, stat) {
            this.form.my_desc=desc;
            this.form.accomp_id=id;
            this.displayModal = true;
            this.form.val_date=dt;
            this.form.val_rem=rm;
            this.form.val_status=stat;
            this.valid_status=stat;
            //alert('showModal'+this.displayModal);
        },
        hideModal() {
            //This is method hides the modal
            this.displayModal = false;
            //alert('hideModal'+this.displayModal);
        },
        saveValidation(){
            this.form.targ_id=this.target_id;
            this.form.post("/accomplishments/validation", this.form);
            this.displayModal = false;
        },
        editAccomplishment(id, validated_status){
            //alert(validated_status);
            //accomplishment/{id}/raao/{raao_id}/edit
            if(validated_status==='No'){
                this.$inertia.get("/accomplishments/" + id+'/raao/'+this.raao_id+'/edit');
            }else if(validated_status===null){
                this.$inertia.get("/accomplishments/" + id+'/raao/'+this.raao_id+'/edit');
            }else{
                alert("Already validated! You can't edit this accomplishment.")
            }
        },
        filterByDate(){
            /*return redirect('/accomplishments/'.$raao_id.'/raao/list')
                ->with('message','Accomplishment deleted!!');*/
            //:href="`/accomplishments/${dat.recid}/raao/list`"
            this.$inertia.get(
                "/accomplishments/"+this.raao_id+"/raao/list",
                {
                    search: this.search,
                    accomp_date_from: this.accomp_date_from,
                    accomp_date_to: this.accomp_date_to
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        clearAllFilter(){
            this.search=null;
            this.accomp_date_from=null;
            this.accomp_date_to=null;
            this.$inertia.get(
                "/accomplishments/"+this.raao_id+'/raao/list',
                {
                    /*search: this.search,
                    accomp_date_from: this.accomp_date_from,
                    accomp_date_to: this.accomp_date_to*/
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        },
        filterAccomplishment(){

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
    .td-one{
        color: red;
    }
</style>
