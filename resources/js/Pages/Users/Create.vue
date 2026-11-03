<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} users </h3>
            <Link href="/users">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>
        <!--
    <div class="col-md-8">
        <button class="btn btn-secondary" @click="showModal" :disabled="submitted">Permissions</button>
    </div>
    -->
        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <label for="">Full Name</label>
                <input type="text" v-model="form.FullName" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.FullName">{{ form.errors.FullName }}</div>

                <label for="">User Name: </label>
                <input type="text" v-model="form.UserName" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.UserName">{{ form.errors.UserName }}</div>

                <span v-if="editData === undefined">
                    <label for="">Password</label>
                    <input type="password" v-model="form.UserPassword" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.UserPassword">{{ form.errors.UserPassword }}</div>
                </span>

                <label for="">UserType</label>
                <select v-model="form.UserType" class="form-control" autocomplete="chrome-off">
                    <option>Administrator</option>
                    <option>User-Offices</option>
                    <option>User</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.UserType">{{ form.errors.UserType }}</div>

                <label for="">Office</label>
                <select v-model="form.office" class="form-control" autocomplete="chrome-off">
                    <option v-for="FFUN in FFUNCCOD" :value="FFUN.FFUNCCOD">
                        {{ FFUN.FFUNCTION }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.FFUNCCOD">{{ form.errors.FFUNCCOD }}</div>

                <label for="">Agency (For POPSP Programs Only)</label>
                <select class="form-control form-select" v-model="form.popsp_agency" >
                    <option></option>
                    <option v-for="popsp in popsp_agency" :value="popsp.agency_code">
                        {{ popsp.agency_name }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.agency_name">{{ form.errors.agency_name }}</div>

                <label for="">Email</label>
                <input type="email" v-model="form.email" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.email">{{ form.errors.email }}</div>

                <input type="hidden" required>
                <div class="parent">
                    <div class="row">
                        <div class="col-md-6">

                        </div>
                    </div>
                    <bootstrap-modal-no-jquery v-if="displayModal" @close-modal-event="hideModal"
                        :permissions="permissions" />
                </div>
                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary text-white mt-3" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
            <!-- editData: {{ editData }} -->
            <!-- popsp_agency: {{ popsp_agency }} -->

        </div>
    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        editData: Object,
        permissions: Object,
        offices: Object,
        FFUNCCOD: Object,
        popsp_agency: Object
    },
    components: {
        BootstrapModalNoJquery,
    },
    data() {
        return {
            submitted: false,
            displayModal: false,
            exampleModalShowing: false,
            arr_length: 0,
            newData: [],
            form: useForm({
                FullName: "",
                UserName: "",
                UserPassword: "",
                UserType: "",
                email: "",
                office: "",
                popsp_agency: "",
                // password: "",
                // name: "",
                // email: "",
                // password: "",
                recid: null
            }),
            pageTitle: ""
        };
    },

    mounted() {
        if (this.editData !== undefined) {
            this.pageTitle = "Edit"
            this.form.FullName = this.editData.FullName
            this.form.email = this.editData.email
            this.form.UserName = this.editData.UserName
            this.form.UserType = this.editData.UserType
            this.form.office = this.editData.office
            this.form.popsp_agency = this.editData.popsp_agency
            // this.form.FFUNCCOD = this.editData.FFUNCCOD
            this.form.id = this.editData.recid
        } else {
            this.pageTitle = "Create"
        }
    },

    methods: {
        submit() {
            if (this.editData !== undefined) {
                this.form.patch("/users/" + this.form.id, this.form);
            } else {
                this.form.post("/users", this.form);
            }
        },

        canCreateCheck: function (value, event) {
            if (event.target.checked) {
                alert('is selected')
            }
        },

    },
};
</script>
