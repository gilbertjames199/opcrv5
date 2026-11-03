<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} OPCR</h3>
            <Link :href="`/opcrlist/${FFUNCCOD}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>


        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <label for="">SEMESTER</label>
                <select v-model="form.semester" class="form-control" autocomplete="chrome-off" @change="setDate">
                    <option>First Semester</option>
                    <option>Second Semester</option>
                </select>
                <!-- <input type="text" v-model="form.semester" class="form-control" autocomplete="chrome-off"> -->
                <div class="fs-6 c-red-500" v-if="form.errors.semester">{{ form.errors.semester }}</div>

                <label for="">DATE FROM</label>
                <input type="date" v-model="form.date_from" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.date_from">{{ form.errors.date_from }}</div>

                <label for="">DATE TO</label>
                <input type="date" v-model="form.date_to" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.date_to">{{ form.errors.date_to }}</div>

                <label for="">YEAR</label>
                <!-- <input type="text" v-model="form.year" class="form-control" autocomplete="chrome-off"> -->
                <select v-model="form.year" class="form-control" autocomplete="chrome-off" @change="setDateYear">
                    <option v-for="year in my_years">{{ year }}</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.year">{{ form.errors.year }}</div>

                <input type="hidden" v-model="form.FFUNCCOD" class="form-control" autocomplete="chrome-off">

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

export default {
    props: {
        editData: Object,
        FFUNCCOD: String,
        office: Object,
    },

    data() {
        return {
            submitted: false,
            form: useForm({
                semester: "",
                date_from: "",
                date_to: "",
                year: "",
                FFUNCCOD: "",
                allotment: "",
                id: null
            }),
            pageTitle: ""
        };
    },

    mounted() {

        if (this.editData !== undefined) {
            this.pageTitle = "Edit"
            this.form.semester = this.editData.semester
            this.form.date_from = this.editData.date_from
            this.form.date_to = this.editData.date_to
            this.form.year = this.editData.year
            this.form.FFUNCCOD = this.editData.FFUNCCOD
            this.form.allotment = this.editData.allotment
            this.form.id = this.editData.id
        } else {
            this.pageTitle = "Create"
            const currentDate = new Date();
            this.form.FFUNCCOD = this.FFUNCCOD;
            this.form.year = currentDate.getFullYear();
        }
        this.form.allotment = "0.00"
    },

    methods: {
        submit() {

            if (this.editData !== undefined) {
                this.form.patch("/opcrlist/" + this.form.id, this.form);
            } else {
                this.form.post("/opcrlist/store");
            }
        },
        setDate() {
            const currentDate = new Date();
            //var currentYear = currentDate.getFullYear();
            var currentYear = this.form.year;
            var dateFromR = "";
            var dateToR = "";
            if (this.form.semester === "Second Semester") {
                dateFromR = new Date(currentYear, 6, 2);
                dateToR = new Date(currentYear, 11, 32);
            } else {
                dateFromR = new Date(currentYear, 0, 2);
                dateToR = new Date(currentYear, 5, 31);
            }
            const formattedDate = dateFromR.toISOString().split('T')[0];
            const formattedDate2 = dateToR.toISOString().split('T')[0];
            this.form.date_from = formattedDate;
            this.form.date_to = formattedDate2;
        },
        setDateYear() {
            if (this.form.semester != "") {
                var currentYear = this.form.year;
                var dateFromR = "";
                var dateToR = "";
                if (this.form.semester === "First Semester") {
                    dateFromR = new Date(currentYear, 6, 2);
                    dateToR = new Date(currentYear, 11, 32);
                } else {
                    dateFromR = new Date(currentYear, 0, 2);
                    dateToR = new Date(currentYear, 6, 31);
                }
                const formattedDate = dateFromR.toISOString().split('T')[0];
                const formattedDate2 = dateToR.toISOString().split('T')[0];
                this.form.date_from = formattedDate;
                this.form.date_to = formattedDate2;
            }
        }

    },
};
</script>
