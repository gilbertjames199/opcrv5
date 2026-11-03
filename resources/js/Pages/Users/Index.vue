<template>
    <Head>
        <title>Users</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
        <h3>Users</h3>

        <div class="toolbar-card">
            <div class="toolbar-row">
                <div class="toolbar-left">
                    <div class="search-wrapper">
                        <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                    </div>
                </div>
                <div class="toolbar-right" style="display: flex; gap: 8px; align-items: center;">
                    <Link class="tool-btn tool-btn-primary" href="/users/create">
                        <i class="fas fa-plus"></i> Add User
                    </Link>
                    <button class="tool-btn tool-btn-secondary" @click="showFilter()">
                        <i class="fas fa-filter"></i> Filter
                    </button>
                </div>
            </div>
            <div class="toolbar-row toolbar-filters" v-if="filter">
                <div class="filter-group">
                    <label>Sample Inputs</label>
                    <input type="text" class="form-control filter-input">
                    <button class="tool-btn tool-btn-primary" @click="">
                        <i class="fas fa-search"></i> Filter
                    </button>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-head-sticky">
                            <tr>
                                <th scope="col">
                                    <i class="fas fa-user"></i> Name
                                </th>
                                <th scope="col">
                                    <i class="fas fa-at"></i> Username
                                </th>
                                <th scope="col">
                                    <i class="fas fa-user-tag"></i> Role
                                </th>
                                <th scope="col" class="text-end">
                                    <i class="fas fa-cogs"></i> Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users.data" :key="index">
                                <td>{{ user.FullName }}</td>
                                <td>{{ user.UserName }}</td>
                                <td>{{ user.UserType }}</td>
                                <td class="text-end">
                                    <div class="dropdown dropstart">
                                        <button class="btn btn-secondary btn-sm action-btn" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path
                                                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <!-- recid;{{ user.recid }} -->
                                                <Link class="dropdown-item" :href="`/users/${user.recid}/edit`">Edit </Link>
                                            </li>
                                            <li v-if="user.department_code">
                                                <Link class="dropdown-item" :href="`/users/${user.recid}/impersonate`">Impersonate</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <pagination :next="users.next_page_url" :prev="users.prev_page_url" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { useForm } from "@inertiajs/vue3";
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import PermissionsModal from './PermissionsModal.vue'
export default {
    components: { Pagination, Filtering, PermissionsModal },
    props: {
        users: Object,
        filters: Object,
    },
    mounted() {

    },
    data() {
        return {
            selected_permissions: [],
            permission_index: [],
            permission_particular: [],
            permission_option: [],
            form: useForm({
                my_id: 0,
                value: [],
            }),
            my_name: '',
            selected_user_id: null,
            permissions_selected_user: [],
            displayModal: false,
            search: this.$props.filters.search,
            confirm: false,
            filter: false
        };
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/users",
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    methods: {
        deleteUser(id) {
            let text = "WARNING!\nAre you sure you want to delete the record?";
            if (confirm(text) == true) {
                this.$inertia.delete("/users/" + id);
            }
        },
        getPermissionAll() {
            this.permission_particular = [];
            this.permissions_all.forEach(i => {
                this.permission_particular.push({
                    'id': i.id,
                    'value': i.id,
                    'label': i.permission,
                });
            });
        },
        getPermInd() {

        },
        fetchingUserPermissions(u_id) {
            this.form.my_id = u_id;
            axios.post("/users/user-permissions", { id: u_id }).then((response) => {
                this.form.value = response.data;
            });
        },

        verifyPermissions(ed, del, perm) {
            if (ed === true || del === true || perm === true) {
                alert("dropdown will show!")
                return true
            } else {
                return false
            }
        },
        showFilter() {
            this.filter = !this.filter;
        },
        showModal(id, name) {
            this.fetchingUserPermissions(id, name);
            this.my_name = name;
            this.displayModal = true;
        },
        hideModal() {
            this.displayModal = false;
        },
        submitChanges() {
            let text = "WARNING!\nAre you sure you want to save changes in user permissions for " + this.my_name + "?";
            if (confirm(text) == true) {
                this.form.get("/users/update-permissions", this.form);
            }
        },
    },
};
</script>
