<template>
    <Head>
        <title>Users</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <h3>Employees</h3>

        <div class="toolbar-card">
            <!-- Top Row: Actions -->
            <div class="toolbar-row toolbar-actions">
                <div class="toolbar-left">
                    <span class="toolbar-label">
                        <i class="fas fa-sliders-h"></i> FILTER PANEL
                    </span>
                </div>
                <div class="toolbar-right">
                    <Link class="tool-btn tool-btn-primary" href="/user/employees/sync/employees/list">
                        <i class="fas fa-sync"></i> Sync Employees
                    </Link>
                    <button class="tool-btn tool-btn-outline" @click="showFilter()">
                        <i class="fas fa-filter"></i> Filter
                    </button>
                </div>
            </div>

            <!-- Divider -->
            <div class="toolbar-divider"></div>

            <!-- Bottom Row: Filters -->
            <div class="toolbar-row toolbar-filters" v-if="filter">
                <!-- Name Filter -->
                <div class="filter-group">
                    <label class="filter-label">
                        <i class="fas fa-user"></i> Name
                    </label>
                    <input type="text" class="filter-input" placeholder="Filter by name">
                </div>

                <!-- Employment Status Filter -->
                <div class="filter-group">
                    <label class="filter-label">
                        <i class="fas fa-briefcase"></i> Employment Status
                    </label>
                    <select class="filter-select">
                        <option value="">-- All --</option>
                        <option value="permanent">Permanent</option>
                        <option value="contractual">Contractual</option>
                        <option value="casual">Casual</option>
                    </select>
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; gap: 10px; align-items: flex-end; margin-left: auto;">
                    <button class="tool-btn tool-btn-primary" @click="">
                        <i class="fas fa-search"></i> Search
                    </button>
                    <button class="tool-btn tool-btn-outline" @click="filter = false">
                        <i class="fas fa-times"></i> Close
                    </button>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="bgc-white p-20 bd">
                <table class="table table-hover align-middle">
                    <thead class="table-head-sticky">
                        <tr>
                            <th scope="col">
                                <i class="fas fa-user"></i> Name
                            </th>
                            <th scope="col">
                                <i class="fas fa-briefcase"></i> Employment Status
                            </th>
                            <th scope="col">
                                <i class="fas fa-sitemap"></i> Division
                            </th>
                            <th scope="col" class="text-end">
                                <i class="fas fa-cogs"></i> Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users.data" >
                            <td>{{ user.employee_name }}</td>
                            <td>{{ user.employment_type_descr }}</td>
                            <td><div v-if="user.division">{{ user.division.division_name1 }}</div></td>
                            <td class="text-end">
                                <div class="dropdown dropstart" >
                                  <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                  </button>
                                  <ul class="dropdown-menu action-dropdown"  aria-labelledby="dropdownMenuButton1">
                                    <li ><button class="dropdown-item">Permissions</button></li>
                                    <!--<li>v-if="verifyPermissions(user.can.canEditUsers, user.can.canUpdateUserPermissions, user.can.canDeleteUsers)"<Link class="dropdown-item" :href="`/users/${user.id}/edit`">Permissions</Link></li>-->
                                    <!-- <li v-if="user.can.canEditUsers"><Link class="dropdown-item" :href="`/users/${user.id}/edit`">Edit</Link></li>
                                    <li v-if="user.can.canUpdateUserPermissions"><button class="dropdown-item" @click="showModal(user.id, user.name)">Permissions</button></li>
                                    <li v-if="user.can.canDeleteUsers"><hr class="dropdown-divider action-divider"></li>
                                    <li v-if="user.can.canDeleteUsers"><Link class="text-danger dropdown-item" @click="deleteUser(user.id)">Delete</Link></li> -->
                                  </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- read the explanation in the Paginate.vue component -->
                        <!-- <pagination :links="users.links" /> -->
                        <pagination :next="users.next_page_url" :prev="users.prev_page_url" />
                    </div>
                </div>
            </div>
        </div>
        <!-- <PermissionsModal v-if="displayModal" @close-modal-event="hideModal" >
            permission array
            My Value {{ form.my_id }}
                <span style="font-weight: bold">Name: </span>{{ this.my_name }}
                <input  v-model="form.my_id" type="hidden" >
                <multiselect v-model="form.value"
                            :options="permission_particular"
                            mode="tags"
                            :searchable="true"
                />
                <br>
                <button type="button" class="btn btn-primary" style="font-weight: bold; color: white" @click="submitChanges()">SAVE</button>&nbsp;
                <button type="button" class="btn btn-danger" style="font-weight: bold; color: white" @click="hideModal()">CANCEL</button>
            <form @submit.prevent="submit()">

            </form>
        </PermissionsModal> -->
    </div>
</template>

<script>
import { useForm } from "@inertiajs/vue3";
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
//import PermissionsModal from './PermissionsModal.vue'
export default {
    components: { Pagination, Filtering  },
    props: {
        users: Object,
        filters: Object,
        can: Object,
        permissions_all: Object,
    },
    mounted(){
        this.getPermissionAll();
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
            //search: this.$props.filters.search,
            confirm: false,
            filter: false
        };
    },
    watch: {
        // search: _.debounce(function (value) {
        //     this.$inertia.get(
        //         "/users",
        //         { search: value },
        //         {
        //             preserveScroll: true,
        //             preserveState: true,
        //             replace: true,
        //         }
        //     );
        // }, 300),
    },
    methods: {
        deleteUser(id) {
            let text = "WARNING!\nAre you sure you want to delete the record?";
              if (confirm(text) == true) {
                this.$inertia.delete("/users/" + id);
              }
        },
        getPermissionAll(){
            // this.permission_particular =[];
            // this.permissions_all.forEach(i=>{
            //     //alert(i.permission);
            //     this.permission_particular.push({
            //         'id': i.id,
            //         'value': i.id,
            //         'label': i.permission,
            //     });
            // });
        },
        getPermInd(){
            //
        },
        fetchingUserPermissions(u_id){
            this.form.my_id = u_id;
            //alert(u_id);
            axios.post("/users/user-permissions", { id: u_id }).then((response) => {
                this.form.value=response.data;
            });
        },

        verifyPermissions(ed, del, perm){
            if(ed===true || del===true || perm===true){
                alert("dropdown will show!")
                return true
            }else{
                return false
            }
        },
        showFilter() {
            this.filter = !this.filter;
        },
        showModal(id, name) {
            this.fetchingUserPermissions(id, name);
            this.my_name=name;
            this.displayModal = true;
        },
        hideModal() {
            this.displayModal = false;
        },
        submitChanges(){
            let text = "WARNING!\nAre you sure you want to save changes in user permissions for " + this.my_name +"?";
            if (confirm(text) == true) {
                this.form.get("/users/update-permissions", this.form);
            }
        },
    },
};
</script>
