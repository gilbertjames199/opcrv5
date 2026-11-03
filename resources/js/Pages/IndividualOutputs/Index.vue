<template>
    <Head>
        <title>Divisions</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h4>{{ dpcr.output }}</h4>
        </div>
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Individual Final Outputs</h3>
            <div class="peers">
                <!-- <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div> -->
                <div class="peer">
                    <Link class="btn btn-primary btn-sm" :href="`/individual/outputs/create/${idDPCR}`">Add Individual Output</Link>
                    <!-- <button class="btn btn-primary btn-sm mL-2 text-white" @click="showModal1()">Import</button> -->
                    <!-- <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button> -->
                </div>&nbsp;
                <Link :href="`/divisions/${idpaps}`">
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
                                <th>Individual Output</th>
                                <th>Success Indicator/PM</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr v-for="dat in data.data">
                                <td>{{ dat.individual_output }}</td>
                                <td>{{ dat.efficiency1 == "No" && dat.timeliness == "No" ? dat.performance_measure + " " + dat.individual_output + " with a satisfactory rating for quality/effectiveness and satisfactory in efficiency" :dat.efficiency1 == 'Yes' ? dat.performance_measure + " " + dat.individual_output + " with a satisfactory rating for quality/effectiveness and satisfactory in efficiency within " + dat.prescribed_period : dat.performance_measure + " " + dat.individual_output + " with a satisfactory rating for quality/effectiveness and satisfactory in efficiency on or before " + dat.timeliness  }}</td>
                                <td>
                                    <div class="dropdown dropstart" >
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                            <li><Link class="dropdown-item" :href="`/individual/outputs/${dat.id}/edit`">Edit</Link></li>
                                            <li><Link class="text-danger dropdown-item" @click="deleteIFO(dat.id)">Delete</Link></li>
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
        <Modal v-if="displayModal" @close-modal-event="hideModal">
            <h1>Upload Excel File</h1><br>
            <form @submit.prevent="submit">
                <input type="file" @input="form.myfile = $event.target.files[0]" @change="onFileChanged()"/>
                <progress v-if="form.progress" class="form-control"  :value="form.progress.percentage" max="100">
                    {{ form.progress.percentage }}%
                </progress>
                <button type="submit" class="btn btn-primary btn-sm mL-2 text-white" >Submit</button>
            </form>
        </Modal>
    </div>

</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import Modal from "@/Shared/PrintModal";
export default {
    props: {
        data: Object,
        dept: Object,
        FFUNCCOD: String,
        idDPCR: String,
        idpaps: String,
        dpcr: Object,
    },
    data() {
        return{
            form: this.$inertia.form({
                myfile: null,
                name: null,
                avatar: null,
                type: true,
            }),
            set_type: false,
            my_status: '0',
            my_id: 0,
            my_date: null,
            displayModal: false,
            displayDisappModal: false,
            showModal: false,
        }
    },
    components: {
        Pagination, Filtering, Modal
    },

    methods:{
        deleteIFO(id) {
            let text = "WARNING!\nAre you sure you want to delete the Individual Final Output?";
              if (confirm(text) == true) {
                this.$inertia.delete("/individual/outputs/" + id);
            }
        },
        onFileChanged() {
            this.form.myfile = this.$refs.myFile.files[0];
            console.log(this.form.myfile)
        },
        submit() {
            if(!this.form.myfile){
                alert("No file chosen!");
            }else{
                this.form.post('/individual/outputs/import/file/data')
            }

        },
        showModal1(){
            this.displayModal=true
        },
        hideModal(){
            this.displayModal=false
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
