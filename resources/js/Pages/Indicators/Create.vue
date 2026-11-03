<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Indicators </h3>
            <Link href="/indicators">
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
                <div class="d-none">
                    <label for="">ID</label>
                    <input type="text" v-model="form.id" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.id">{{ form.errors.idooe }}</div>
                </div>
                <!-- <label for="">ID Indicator </label>
                <input type="text"
                        v-model="form.idindicator"
                        class="form-control"
                        autocomplete="chrome-off"
                >
                <div class="fs-6 c-red-500" v-if="form.errors.idindicator">{{ form.errors.idindicator }}</div> -->

                <!-- <label for="">ID Indication </label>
                <input type="text"
                        v-model="form.idindication"
                        class="form-control"
                        autocomplete="chrome-off"
                >
                <div class="fs-6 c-red-500" v-if="form.errors.idindication">{{ form.errors.idindication }}</div> -->

                <label for="">Description</label>
                <input type="text" v-model="form.description" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.description">{{ form.errors.description }}</div>

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
export default {
    props: {
        editData: Object,

    },
    components: {

    },
    data() {
        return {
            submitted: false,
            form: useForm({
                description: '',
                id: null
            }),
            pageTitle: ""
        };
    },

    mounted() {

        if (this.editData !== undefined) {
            this.pageTitle = "Edit"
            this.form.description = this.editData.description
            this.form.id = this.editData.id
            //this.target_id=this.editData.idtarget
        } else {
            this.pageTitle = "Create"
            //this.form.idtarget=this.target_id;
        }
    },

    methods: {
        submit() {
            if (this.editData !== undefined) {
                this.form.patch("/indicators/" + this.form.id, this.form);
            } else {
                //alert('sa else'+this.editData)
                this.form.id = null;
                this.form.post("/indicators/store", this.form);
            }
        },
    },
};
</script>
