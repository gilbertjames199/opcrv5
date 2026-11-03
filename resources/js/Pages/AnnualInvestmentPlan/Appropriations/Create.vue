<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Appropriations</h3>
            <Link :href="`/appropriation-amounts/${aip_id}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>

        <!-- <div class="col-md-8">
            <button class="btn btn-secondary" @click="showModal" :disabled="submitted">Permissions</button>
        </div> -->
        <!-- {{ paps }} -->
        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <label>Objects of Expenditure</label>&nbsp;
                <!-- {{ form.idooe }} -->
                <div>
                    <multiselect :options="formattedOOEs" :searchable="true" v-model="form.idooe" label="label"
                        track-by="label" @close="setOOEValue" :disabled="editData !== undefined">
                    </multiselect>
                </div>

                <label for="">Amount</label>
                <input type="text" v-model="form.amount" class="form-control" autocomplete="chrome-off" readonly>
                <div class="fs-6 c-red-500" v-if="form.errors.amount">{{ form.errors.amount }}</div>


                <div class="form-group">
                    <label for="">AIP Code</label><div>
                        <!-- <i>{{ form.aip_code_parent }}, being the parent AIP code, cannot be edited. </i>
                    -->
                    </div>
                    <div class="aip-code-wrapper">
                        <!-- class="aip-code-parent" -->
                        <span class="aip-code-parent">{{ form.aip_code_parent }}-</span>
                        <input type="text" v-model="form.aip_code_child" class="aip-code-child form-control" autocomplete="chrome-off" >
                        <!-- <input
                            type="text"
                            class="aip-code-child form-control"
                            v-model="form.aip_code_child"
                            @input="updateChild($event.target.value)"
                            autocomplete="chrome-off"
                        > -->
                    </div>
                </div>
                <div class="fs-6 c-red-500" v-if="form.errors.aip_code_child">AIP code is required</div>
                <!-- <label for="">Output Quantity</label>
                <input type="text" v-model="form.output_qty" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.output_qty">{{ form.errors.output_qty }}</div>

                <label for="">Weight (%)</label>
                <input type="text" v-model="form.weight" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.weight">{{ form.errors.weight }}</div>

                <label for="">OPCR Target</label>
                <input type="text" v-model="form.opcr_target" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.opcr_target">{{ form.errors.opcr_target }}</div> -->



                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>


    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Places from "@/Shared/PlacesShared";
import { ModelSelect } from 'vue-search-select';
import Select2 from 'vue-select2';
//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        editData: Object,
        ooes: Object,
        functions: Object,
        aip_id: String,
        aip: Object,
    },
    components: {
        //BootstrapModalNoJquery,
        Select2,
        ModelSelect,
        Places: () => new Promise((resolve) => {
            setTimeout(() => {
                resolve(Places)
            }, 2000)
        })

    },
    data() {
        return {
            submitted: false,
            form: useForm({
                aip_id: "",
                aip_code: "",
                idooe: "",
                amount: "",
                aip_code_parent: "",
                aip_code_child: "",
                id: null
            }),
            pageTitle: "",
            dt_ooes: []
        };
    },
    computed:{
        displayValue() {
            return `${this.form.aip_code_parent}-${this.form.aip_code_child}`;
        },
        formattedOOEs() {
            // let dataOoes = this.dt_ooes;
            return this.dt_ooes.map((dataOoes) => ({
                value: dataOoes.recid,
                label: dataOoes.FOOEDESC,
                FACTCODE: dataOoes.FACTCODE,
                program_id: dataOoes.idprogram,
                FFUNCCOD: dataOoes.FFUNCCOD,
                sem1: dataOoes.sem1,
                sem2: dataOoes.sem2,
                past_year: dataOoes.past_year
            }));
        },


    },
    mounted() {
        this.dt_ooes = [];
        this.dt_ooes = this.ooes;
        this.form.aip_code_parent = this.aip.aip_code
        this.form.aip_id = this.aip_id
        if (this.editData !== undefined) {
            if (this.bari) {
                this.bar = this.bari
            }
            this.pageTitle = "Edit"
            this.form.aip_code=this.editData.aip_code
            this.form.idooe=this.editData.idooe
            this.form.amount=this.editData.amount
            this.form.aip_code_child=this.editData.aip_code_child


            // this.form.output_description=this.editData.output_description
            // this.form.weight=this.editData.weight
            // this.form.opcr_target=this.editData.opcr_target
            this.form.id = this.editData.id
            // this.form.FFUNCCOD = this.editData.FFUNCCOD
        } else {
            this.pageTitle = "Create"
            this.form.aip_id = this.aip_id
        }

    },

    methods: {
        submit() {
            this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
            this.form.aip_code = this.form.aip_code_parent+this.form.aip_code_child
            //alert(this.form.target_qty);
            if (this.editData !== undefined) {
                this.form.aip_code = this.form.aip_code_parent+"-"+this.form.aip_code_child
                this.form.patch("/appropriation-amounts/" + this.form.id, this.form);
            } else {
                this.form.aip_code = this.form.aip_code_parent+"-"+this.form.aip_code_child
                this.form.post("/appropriation-amounts");
            }
        },
        setOOEValue() {
            var prog_sel = this.dt_ooes.filter(ooes => ooes.recid === this.form.idooe);
            // this.form.account_code = prog_sel[0].FACTCODE;
            // this.searchByAccountCode();
            // this.form.object_of_expenditure = prog_sel[0].FOOEDESC;
            // var f1 = this.format_number_conv(prog_sel[0].sem1, 2, false);
            // var f2 = this.format_number_conv(prog_sel[0].sem2, 2, false);
            var tot = prog_sel[0].sem1 + prog_sel[0].sem2;
            // alert(tot);
            this.form.amount = this.format_number_conv(tot, 2, true);
            // this.form.idooe =this.format_number_conv(prog_sel[0].value, 2, false);
            // this.form.past_year = this.format_number_conv(prog_sel[0].past_year, 2, false);
        },
        pdateChild(value) {
            // Directly update the child part
            this.form.aip_code_child = value;
        }
        // updateChild(value) {
        //     // Remove the parent part from the input to isolate the child part
        //     const prefix = `${this.form.aip_code_parent}-`;

        //     // If the user attempts to modify the parent part, reset it to its original value
        //     if (!value.startsWith(prefix)) {
        //         this.form.aip_code_child = value.replace(/.*-/, ''); // Keep only the part after the last '-'
        //         return;
        //     }

        //     // Update only the child part
        //     this.form.aip_code_child = value.slice(prefix.length);
        // }
    },
};
</script>
<style>
.aip-code-wrapper {
    display: flex;
    align-items: center;
    position: relative;
}

.aip-code-parent {
    position: absolute;
    left: 10px;
    color: #555; /* Slightly dimmed color to differentiate */
    pointer-events: none; /* Prevent interactions */
    z-index: 1;
}

.aip-code-child {
    /*padding-left: calc(10px + 1ch * var(--parent-length, 10)); /* Space for the parent text */
    padding-left: calc(10px + 1ch * var(--parent-length, 5)); /* Space for the parent text */
    padding-left: calc(10px + 1ch * v-bind(form.aip_code_parent.length + 1));
    border: 1px solid #ccc;
    border-radius: 4px;
    flex-grow: 1;
}

.aip-code-child:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
