<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Implementing Team</h3>
            <Link href="/ImplementingTeam">
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

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <label for="">NAME</label>
                <input type="text" v-model="form.name" class="form-control" autocomplete="positionchrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.name">{{ form.errors.name }}</div>

                <label for="">POSITION</label>
                <input type="text" v-model="form.position" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.position">{{ form.errors.position }}</div>

                <label for="">COMPETENCY</label>
                <input type="text" v-model="form.competency" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.competency">{{ form.errorscompetency }}</div>

                <label for="">ROLE</label>
                <input type="text" v-model="form.role" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.role">{{ form.errors.role }}</div>

                <label for="">OFFICE</label>
                <!--<input type="text" v-model="form.FFUNCCOD" class="form-control" autocomplete="chrome-off">-->
                <select class="form-control" v-model="form.FFUNCCOD">
                    <option v-for="functional in functions" :value="functional.FFUNCCOD">
                        {{ functional.FFUNCTION }}
                    </option>
                </select>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3 text-white" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
            revid: {{ revid }}
        </div>


    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Places from "@/Shared/PlacesShared";
//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        editData: Object,
        sectors: Object,
        functions: Object,
        revs: String,
        revid: String,
        people: String,
    },
    components: {
        //BootstrapModalNoJquery,

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
                name: "",
                position: "",
                competency: "",
                role: "",
                FFUNCCOD: "",
                id: null
            }),
            pageTitle: ""
        };
    },

    mounted() {

        if (this.editData !== undefined) {
            if (this.bari) {
                this.bar = this.bari
            }
            this.pageTitle = "Edit"
            this.form.name = this.editData.name
            this.form.position = this.editData.position
            this.form.competency = this.editData.competency
            this.form.role = this.editData.role
            this.form.id = this.editData.id
            this.form.FFUNCCOD = this.editData.FFUNCCOD
        } else {
            this.pageTitle = "Create"
        }

    },

    methods: {
        submit() {
            this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
            //alert(this.form.target_qty);
            if (this.editData !== undefined) {
                this.form.patch("/ImplementingTeam/" + this.form.id, this.form);
            } else {
                this.form.post("/ImplementingTeam");
            }
        },
    },
};
</script>
