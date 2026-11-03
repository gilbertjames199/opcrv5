<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Sub MFO</h3>
            <Link :href="`/submfos/${idmfo}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>
                <div class="d-none">
                    <label for="">ID</label>
                    <input type="text" v-model="form.id" class="form-control" autocomplete="chrome-off">
                    <div class="fs-6 c-red-500" v-if="form.errors.id">{{ form.errors.idooe }}</div>
                </div>

                <label for="">MAJOR FINAL OUTPUT</label>
                <select class="form-control" v-model="form.idmfo" >
                    <option v-for="mfo in mfos" :value="mfo.id" >
                        {{ mfo.mfo_desc }}
                    </option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.idmfo">{{ form.errors.idmfo }}</div>

                <label for="">SUB MFO DESCRIPTION</label>
                <input type="text" v-model="form.submfo_description" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.submfo_description">{{ form.errors.submfo_description }}</div>


                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>
        <!-- {{  form }} -->

    </div>

</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Places from "@/Shared/PlacesShared";
    //import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
        props: {
            editData: Object,
            mfos: Object,
            idmfo: Number
        },
        components: {

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
                    idmfo: "",
                    submfo_description: "",
                    id: null
                }),
                select_FFUNCCOD: "",
                pageTitle: ""
            };
        },

        mounted() {
            //this.form.idmfo =
            if (this.editData !== undefined) {
                this.pageTitle = "Edit"
                this.form.idmfo=this.editData.idmfo
                this.form.submfo_description=this.editData.submfo_description
                this.form.id=this.editData.id
            } else {
                this.pageTitle = "Create"
                this.form.idmfo = this.idmfo
            }

        },

        methods: {
            submit() {

                if (this.editData !== undefined) {
                    this.form.patch("/submfos", this.form);
                } else {
                    this.form.id=null;
                    this.form.post("/submfos/store", this.form);
                }
            },
        },
    };
    </script>
