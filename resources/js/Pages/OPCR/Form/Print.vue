<template>
    <Head>
        <title>Report</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <!--<h1>JASPER REPORTS</h1>-->
        <iframe :src="link" style="width:100%; height:700px" />
    </div>
</template>

<script>
// import { useForm } from "@inertiajs/vue3";
// import Filtering from "@/Shared/Filter";
// import Pagination from "@/Shared/Pagination";
// import PermissionsModal from './PermissionsModal.vue';
// import statusModal from './updateStatus.vue';
// import PasswordModal from './ChangePasswordModal.vue';
export default {
    components: {
        //Pagination, Filtering, PermissionsModal, statusModal, PasswordModal
    },
    props: {
        auth: Object,
        users: Object,
        can: Object,
        link: String,
    },
    mounted(){
        this.setUp();
    },
    data() {
        return {
            linkt: "",
            hiddenLink: `<iframe href="${this.linkt}" style="display: none;"></iframe>`,
        };
    },
    watch: {

    },
    methods: {
        setUp(){
            this.hiddenLink='<iframe :src="'+this.link+'" style="width:100%; height:800px;" />';
        }
    },
};
</script>
