<template>
    <div class="header navbar">
        <div class="header-container" id="sidebar-toggle" href="javascript:void(0);"  style="min-width:320px; background-color: #452b02; color: black;">

            <ul class="nav-left">
                <li>
                    <a id="sidebar-toggle" class="sidebar-toggle" href="javascript:void(0);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFD700" class="bi bi-list"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </a>
                </li>
                <li class="search-input">
                    <input class="form-control" type="text" placeholder="Search..." />
                </li>
            </ul>
            <ul class="nav-left" v-if="$page.props.flash.impersonating">
                <li>
                    <a id="sidebar-toggle" class="sidebar-toggle">
                        <span class="text-danger">You are impersonating <b><u>{{
                        $page.props.auth.user.FullName
                    }}</u></b></span>
                    </a>

                </li>
            </ul>
            <ul class="nav-right" v-if="$page.props.flash.impersonating">
                <li>
                    <!-- <a id="sidebar-toggle" class="sidebar-toggle">
                        <span class="text-danger">You are impersonating <b><u>{{
                        $page.props.auth.user.FullName
                    }}</u></b></span>
                    </a> -->

                </li>
            </ul>
            <ul class="nav-right">
                <li class="nav-right" v-if="$page.props.flash.impersonating">
                    <Link href="/users/stop-impersonate" class="btn btn-sm btn-danger text-white px-3 py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                            <span> &nbsp;&nbsp;Stop Impersonating</span>
                            </Link>
                </li>
                <li class="dropdown">
                    <a href="" class="
                            dropdown-toggle
                            no-after
                            peers
                            fxw-nw
                            ai-c
                            lh-1
                        " data-bs-toggle="dropdown">
                        <div class="peer mR-10">
                            <!--
                                <img
                                class="w-2r bdrs-50p"
                                :src="$page.props.auth.user.photo"
                                alt=""
                            />
                            -->
                        </div>
                        <div class="peer">
                            <span class="fsz-sm" style="color: #FFD700; font-weight: bold;">
                                {{ $page.props.auth.user.FullName }}
                            </span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                            class="bi bi-caret-down-fill mL-5" viewBox="0 0 16 16">
                            <path
                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </a>
                    <ul class="dropdown-menu fsz-sm dropdown-menu-c">
                        <li>
                            <Link href="/users/settings" class="
                                    d-b
                                    td-n
                                    pY-5
                                    bgcH-grey-100
                                    c-grey-700
                                ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                class="bi bi-sliders2 mR-10" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z" />
                            </svg>
                            <span> Setting</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/users/change-password" class="
                                    d-b
                                    td-n
                                    pY-5
                                    bgcH-grey-100
                                    c-grey-700
                                ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                class="bi bi-person-bounding-box mR-10" viewBox="0 0 16 16">
                                <path
                                    d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            </svg>
                            <span> Change Password</span>
                            </Link>
                        </li>
                        <li v-if="$page.props.auth.user.office.department_code == '04'">
                            <Link href="/users" class="
                                d-b
                                td-n
                                pY-5
                                bgcH-grey-100
                                c-grey-700
                            ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                class="bi bi-person-fill-gear" viewBox="0 0 16 16">
                                <path
                                    d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                            </svg>
                            <span> &nbsp;&nbsp;Users</span>
                            </Link>
                        </li>
                        <li v-if="$page.props.flash.impersonating">
                            <Link href="/users/stop-impersonate" class="
                                d-b
                                td-n
                                pY-5
                                bgcH-grey-100
                                c-danger
                            ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                            <span> &nbsp;&nbsp;Stop Impersonating</span>
                            </Link>
                        </li>
                        <li v-if="!$page.props.flash.impersonating" role="separator" class="divider"></li>
                        <li v-if="!$page.props.flash.impersonating">
                            <a @click="logout()" href="" class="
                                    d-b
                                    td-n
                                    pY-5
                                    bgcH-grey-100
                                    c-grey-700
                                "><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                    class="bi bi-box-arrow-right mR-10" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path fill-rule="evenodd"
                                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg>
                                <span> Logout</span></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        logout() {
            //this.update_verified();
            this.$inertia.post('/logout')
            location.href = '/'
        },

        update_verified() {
            //alert(auth.user.name);
            axios.patch('/users/update_verified_at')
        }
    }
}
</script>
