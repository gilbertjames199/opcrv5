<template>
    <div class="sidebar">
        <div class="sidebar-inner">
            <!-- ### $Sidebar Header ### -->
            <div class="sidebar-logo">
                <div class="peers ai-c fxw-nw">
                    <div class="peer peer-greed">
                        <a class="sidebar-link td-n" href="/">
                            <div class="peers ai-c fxw-nw">
                                <div class="peer">
                                    <div class="logo">
                                        <img src="/images/logo.png" alt="" class="img-fluid p-5" />
                                    </div>
                                </div>
                                <div class="peer peer-greed">
                                    <h5 class="lh-1 mB-0 logo-text">
                                         <span style="color: #FFD700; font-size:medium;">
                                        Planning and Budgeting System
                                        </span>
                                    </h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="peer">
                        <div class="mobile-toggle sidebar-toggle">
                            <a href="" class="td-n">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"
                                    class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ### $Sidebar Menu ### -->
            <ul class="sidebar-menu scrollable pos-r">
                <hr>
                <!--<li class="nav-item mT-30 actived">
                    <Link class="sidebar-link" href="/"
                        ><span class="icon-holder"
                            ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                            </svg>
                        </span
                        ><span class="title">Dashboard</span></Link
                    >
                </li>-->
                <!-- LOGFRAME **************************************************************** -->
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle" href="javascript:void(0);">
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                                class="bi bi-border-outer" viewBox="0 0 16 16">
                                <path
                                    d="M7.5 1.906v.938h1v-.938h-1zm0 1.875v.938h1V3.78h-1zm0 1.875v.938h1v-.938h-1zM1.906 8.5h.938v-1h-.938v1zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938v1zm2.813 0v-.031H8.5V7.53h-.031V7.5H7.53v.031H7.5v.938h.031V8.5h.938zm.937 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zM7.5 9.406v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1z" />
                                <path d="M0 0v16h16V0H0zm1 1h14v14H1V1z" />
                            </svg>
                        </span>
                        <span class="title">Logframe</span>
                        <span class="arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </span>
                    </a>
                    <ul class="dropdown-menu">

                        <li>
                            <Link class="sidebar-link" href="/Societal" :class="{ 'active': $page.url === '/Societal' }">
                            <span class="title">Societal Goals</span>
                            </Link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="dropdown-toggle" href="javascript:void(0);">
                                <span class="title">Outcomes</span>
                                <span class="arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link class="sidebar-link" href="/Sectoral"
                                        :class="{ 'active': $page.url === '/Sectoral' }">

                                    <span class="title">Sectoral Outcomes</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link class="sidebar-link" href="/Organization"
                                        :class="{ 'active': $page.url === '/Organization' }">

                                    <span class="title">Organizational Outcomes</span>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <Link class="sidebar-link" href="/mfos/direct"
                                :class="{ 'active': $page.url === '/mfos/direct' }">

                            <span class="title">Major Final Output</span>
                            </Link>
                        </li>

                        <li>
                            <Link class="sidebar-link" href="/paps/direct"
                                :class="{ 'active': $page.url === '/paps/direct' }">

                            <span class="title">Programs, Activities, Projects</span>
                            </Link>
                        </li>

                        <li>
                            <Link class="sidebar-link" :href="`/logframe/${$page.props.auth.user.office.ffunccod}`"
                                :class="{ 'active': $page.url === `/logframe/${$page.props.auth.user.office.ffunccod}` }">

                            <span class="title">View Logframe </span>
                            </Link>
                        </li>
                        <!-- v-if="$page.props.auth.user.department_code === '04'" -->
                        <!--LOGFRAME undefined offset KINI POD***************-->
                        <li v-if="$page.props.auth.user.department_code == '04'">
                            <Link class="sidebar-link" :href="`/logframe`" :class="{ 'active': $page.url === `/logframe` }">

                            <span class="title">Logframes -Other Offices</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <!-- OPCR ******************************************************************** -->
                <li class="nav-item">
                    <Link class="sidebar-link" href="/opcrlist" :class="{ 'active': $page.url === '/opcrlist' }">
                    <span></span>
                    <span class="icon-holder">
                        <!--OPCRStandard<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
                            </svg>-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            class="bi bi-border-style" viewBox="0 0 16 16">
                            <path
                                d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z" />
                        </svg>
                    </span>
                    <span class="title">OPCR</span>
                    </Link>
                </li>
                <!-- IPP ********************************************************************* -->
                <!-- <li class="nav-item">
                    <Link class="sidebar-link" href="/revision/0?source=direct" :class="{ 'active': $page.url === '/revision/0?source=direct' }">
                        <span></span>
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 2h12v20H4z"/>
                                <path d="M6 6h8"/>
                                <path d="M6 10h8"/>
                                <circle cx="8" cy="16" r="2"/>
                            </svg>
                        </span>
                        <span class="title">IPP</span>
                    </Link>
                </li> -->
                <!-- 20% Development Fund ********************************************************************* -->
                <!-- <li class="nav-item">
                    <Link class="sidebar-link" href="/development-fund/0"
                    :class="{ 'active': $page.url === '/development-fund/0' }">
                    <span></span>
                    <span class="icon-holder">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 2h12v20H4z"/>
                            <path d="M6 6h8"/>
                            <path d="M6 10h8"/>
                            <circle cx="8" cy="16" r="2"/>
                        </svg>
                    </span>
                    <span class="title">20% Development Fund</span>
                    </Link>
                </li> -->
                <!-- SIP ********************************************************************* -->
                <!-- <li class="nav-item">
                    <Link class="sidebar-link" href="/revision/0?source=sip" :class="{ 'active': $page.url === '/revision/0?source=sip' }">
                    <span></span>
                    <span class="icon-holder">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 2h12v20H4z"/>
                            <path d="M6 6h8"/>
                            <path d="M6 10h8"/>
                            <circle cx="8" cy="16" r="2"/>
                        </svg>
                    </span>
                    <span class="title">SIP</span>
                    </Link>
                </li> -->




                <!-- <li class="nav-item">
                    <Link class="sidebar-link" href="/IPCR/direct" :class="{ 'active': $page.url === '/IPCR/direct' }">
                    <span></span>
                    <span class="icon-holder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-filter-square-fill" viewBox="0 0 16 16">
                            <path
                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm.5 5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zM4 8.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-border-style" viewBox="0 0 16 16">
                                <path d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z"/>
                            </svg>
                    </span>
                    <span class="title">IPCR</span>
                    </Link>
                </li> -->

                <!-- <li class="nav-item">
                    <Link class="sidebar-link" href="/AIP/" :class="{'active': $page.url === '/AIP/'}">
                        <span></span>
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
                            </svg> -->
                <!-- ********************LBP Form -->
                <!-- <li>
                    <Link class="sidebar-link" href="/AIP/direct" :class="{ 'active': $page.url === '/AIP/direct' }">
                    <span></span>
                    <span class="icon-holder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-card-text" viewBox="0 0 16 16">
                            <path
                                d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                            <path
                                d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </span>
                    <span class="title">LBP Form</span>
                    </Link>
                </li> -->
                <!-- <Link class="sidebar-link" href="/AIP/direct" :class="{ 'active': $page.url === '/AIP/direct' }">
                    <span></span>
                    <span class="icon-holder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-card-text" viewBox="0 0 16 16">
                            <path
                                d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                            <path
                                d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </span>
                    <span class="title">LBP Form</span>
                </Link> -->
                <!-- <li>
                    <Link class="sidebar-link" href="/annual-investment-plans" :class="{ 'active': $page.url === '/annual-investment-plans' }">
                        <span></span>
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-card-text" viewBox="0 0 16 16">
                                <path
                                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                <path
                                    d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </span>
                        <span class="title">Annual Investment Plan</span>
                    </Link>
                </li> -->
                <!-- <li class="nav-item">
                    <Link class="sidebar-link" href="/DailyAccomplishment/direct" :class="{'active': $page.url === '/DailyAccomplishment/direct'}">
                        <span></span>
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
                                 <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
                                    </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-border-style" viewBox="0 0 16 16">
                                <path d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z"/>
                            </svg>
                        </span>
                        <span class="title">Accomplishment Report</span>
                    </Link>
                </li> -->

                <!-- <li class="nav-item">
                    <Link class="sidebar-link" href="/AddAccomplishment/"
                        :class="{ 'active': $page.url === '/AddAccomplishment/' }">
                    <span></span>
                    <span class="icon-holder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-calendar-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-border-style" viewBox="0 0 16 16">
                                <path d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z"/>
                            </svg>
                    </span>
                    <span class="title">Accomplishment Report</span>
                    </Link>
                </li> -->
                <!-- IPP (All Offices) -->
                <!-- <li class="nav-item" v-if="$page.props.auth.user.department_code == '04'">
                    <Link class="sidebar-link" href="/revision_plans?source=direct"
                        :class="{ 'active': $page.url === '/revision_plans?source=direct' }"
                        v-if="($page.props.auth.user.department_code == '04' || $page.props.auth.user.office.empl_id == '1399')"
                    >
                        <span></span>
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-ruled-fill" viewBox="0 0 16 16">
                                <path d="M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2m2 7H6v2h8zm0 3H6v2h8zm0 3H6v3h6a2 2 0 0 0 2-2zm-9 3v-3H2v1a2 2 0 0 0 2 2zm-3-4h3v-2H2zm0-3h3V7H2z"/>
                            </svg>
                        </span>
                        <span class="title">IPP (All Offices)</span>
                    </Link>
                </li> -->


                <li class="nav-item dropdown" >
                    <a class="dropdown-toggle" href="javascript:void(0);">
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 2h12v20H4z"/>
                                <path d="M6 6h8"/>
                                <path d="M6 10h8"/>
                                <circle cx="8" cy="16" r="2"/>
                            </svg>
                        </span>
                        <span class="title">IPP</span>
                        <span class="arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </span>
                    </a>
                    <ul class="dropdown-menu">
                        <!-- Regular PPAs ************************************ -->
                        <li>
                            <Link class="sidebar-link" href="/revision/0?source=direct" :class="{ 'active': $page.url === '/revision/0?source=direct' }">
                                <span></span>
                                <span class="icon-holder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M4 2h12v20H4z"/>
                                        <path d="M6 6h8"/>
                                        <path d="M6 10h8"/>
                                        <circle cx="8" cy="16" r="2"/>
                                    </svg>
                                </span>
                                <span class="title">&nbsp;&nbsp;Regular PPAs</span>
                            </Link>
                        </li>
                        <!-- Engineering PPAs -->
                        <li>
                            <Link class="sidebar-link" href="/development-fund/0?source=dev"
                            :class="{ 'active': $page.url === '/development-fund/0' }">
                            <span></span>
                            <span class="icon-holder">

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 2h12v20H4z"/>
                                    <path d="M6 6h8"/>
                                    <path d="M6 10h8"/>
                                    <circle cx="8" cy="16" r="2"/>
                                </svg>
                            </span>
                            <span class="title">&nbsp;&nbsp;Engineering PPAs</span>
                            </Link>
                        </li>
                        <!-- Other Sources -->
                        <li>
                            <Link class="sidebar-link" href="/development-fund/0?source=other"
                            :class="{ 'active': $page.url === '/development-fund/0' }">
                            <span></span>
                            <span class="icon-holder">

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 2h12v20H4z"/>
                                    <path d="M6 6h8"/>
                                    <path d="M6 10h8"/>
                                    <circle cx="8" cy="16" r="2"/>
                                </svg>
                            </span>
                            <span class="title">&nbsp;&nbsp;Other Sources</span>
                            </Link>
                        </li>
                        <!-- IPP -ALl Offices -->
                        <li v-if="$page.props.auth.user.department_code == '04'">
                            <Link class="sidebar-link" href="/revision_plans?source=direct"
                                :class="{ 'active': $page.url === '/revision_plans?source=direct' }"
                                v-if="($page.props.auth.user.department_code == '04' || $page.props.auth.user.office.empl_id == '1399')"
                            >
                                <span></span>
                                <span class="icon-holder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-ruled-fill" viewBox="0 0 16 16">
                                        <path d="M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2m2 7H6v2h8zm0 3H6v2h8zm0 3H6v3h6a2 2 0 0 0 2-2zm-9 3v-3H2v1a2 2 0 0 0 2 2zm-3-4h3v-2H2zm0-3h3V7H2z"/>
                                    </svg>
                                </span>
                                <span class="title">&nbsp;&nbsp;IPP (All Offices)</span>
                            </Link>
                        </li>
                        <!-- SIP****************** -->
                        <li>
                            <Link class="sidebar-link" href="/revision/0?source=sip" :class="{ 'active': $page.url === '/revision/0?source=sip' }">
                            <span></span>
                            <span class="icon-holder">

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 2h12v20H4z"/>
                                    <path d="M6 6h8"/>
                                    <path d="M6 10h8"/>
                                    <circle cx="8" cy="16" r="2"/>
                                </svg>
                            </span>
                            <span class="title">&nbsp;&nbsp;SIP</span>
                            </Link>
                        </li>
                        <!-- AIP****************** -->
                        <li >
                            <Link class="sidebar-link" href="/ipp_aip_codes" :class="{ 'active': $page.url === '/revision/0?source=sip' }">
                            <span></span>
                            <span class="icon-holder">

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 2h12v20H4z"/>
                                    <path d="M6 6h8"/>
                                    <path d="M6 10h8"/>
                                    <circle cx="8" cy="16" r="2"/>
                                </svg>
                            </span>
                            <span class="title">&nbsp;&nbsp;AIP</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <Link class="sidebar-link" href="/revision_plans?source=budget"
                        :class="{ 'active': $page.url === '/revision_plans?source=budget' }"
                    >
                    <span></span>
                    <span class="icon-holder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16">
                            <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z"/>
                            <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/>
                        </svg>
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-border-style" viewBox="0 0 16 16">
                                <path d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z"/>
                            </svg> -->
                    </span>
                    <span class="title">Budget Proposal</span>
                    </Link>
                </li>
                <!-- <li class="nav-item">
                    <Link class="sidebar-link" href="/revision_plans?source=proposed"
                        :class="{ 'active': $page.url === '/revision_plans?source=proposed' }"
                    >
                    <span></span>
                    <span class="icon-holder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16">
                            <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z"/>
                            <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/>
                        </svg>

                    </span>
                    <span class="title">Budget Proposed</span>
                    </Link>
                </li> -->
                <!--Outcomes-->
                <!-- <li class="nav-item">
                    <Link class="sidebar-link" href="/outcome" :class="{'active': $page.url === '/outcome'}">
                        <span></span>
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-rolodex" viewBox="0 0 16 16">
                                <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z"/>
                            </svg>
                        </span>
                        <span class="title">Outcomes</span>
                    </Link>
                </li> -->
                <!--
                <li class="nav-item" v-if="$page.props.can.can_access_indicators">
                    <Link class="sidebar-link" href="/indicators">
                        <span></span>
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bezier2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a2.839 2.839 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5v-1zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                            </svg>
                        </span>
                        <span class="title">Indicators</span>
                    </Link>
                </li>
                -->
                <!--GOALS-->

                <!--
                <li class="nav-item">
                    <Link class="sidebar-link" href="/Organization" :class="{'active': $page.url === '/Organization'}">
                        <span></span>
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-diagram-3" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                            </svg>
                        </span>
                        <span class="title">Organizational Goals</span>
                    </Link>
                </li>

                <li class="nav-item">
                    <Link class="sidebar-link" href="/Sectoral" :class="{'active': $page.url === '/Sectoral'}">
                        <span></span>
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pie-chart-fill" viewBox="0 0 16 16">
                                <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
                            </svg>
                        </span>
                        <span class="title">Sectoral Goals</span>
                    </Link>
                </li>
                -->
                <hr>

                <!--Agenda/Goals-->

                <!--LIBRARIES ********************************************************************************************************************-->
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle" href="javascript:void(0);">
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                class="bi bi-book-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                            </svg>
                        </span>
                        <span class="title">Libraries</span>
                        <span class="arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </span>
                    </a>
                    <ul class="dropdown-menu">
                        <!-- AGENDA ********************************************************** -->
                        <li class="nav-item dropdown" v-if="$page.props.auth.user.department_code == '04'">
                            <a class="dropdown-toggle" href="javascript:void(0);">

                                <span class="title">Agenda</span>
                                <span class="arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link class="sidebar-link" href="/ChiefAgenda"
                                        :class="{ 'active': $page.url === '/ChiefAgenda' }">
                                    <span class="title">Chief Executive Agenda</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link class="sidebar-link" href="/EconomicAgenda"
                                        :class="{ 'active': $page.url === '/EconomicAgenda' }">
                                    <span class="title">Socio-Economic Agenda</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link class="sidebar-link" href="/SDG" :class="{ 'active': $page.url === '/SDG' }">
                                    <span class="title">Sustainable Devt Goals</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link class="sidebar-link" href="/ELA" :class="{ 'active': $page.url === '/ELA' }">
                                    <span class="title">Executive Legislative Agenda</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link class="sidebar-link" href="/ResearchAgenda"
                                        :class="{ 'active': $page.url === '/ResearchAgenda' }">
                                    <span class="title">Research Agenda</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <!--HGDG Checklist **************************************************************************************-->
                        <li v-if="$page.props.auth.user.department_code == '04'">
                            <Link class="sidebar-link" href="/HGDGChecklist"
                                :class="{ 'active': $page.url === '/HGDGChecklist' }">
                            <span class="title">HGDG Checklist</span>
                            </Link>
                        </li>
                        <!-- GAD RELATED ISSUES ********************************************************************************************************************  -->
                        <li v-if="$page.props.auth.user.department_code == '04'">
                            <Link class="sidebar-link" href="/Issues" :class="{ 'active': $page.url === '/Issues' }">

                            <span class="title">GAD Related Issues</span>
                            </Link>
                        </li>
                        <!-- <li>
                            <Link class="sidebar-link" href="/ImplementingTeam"
                                :class="{ 'active': $page.url === '/ImplementingTeam' }">

                                <span class="title">Implementing Team</span>
                            </Link>
                        </li> -->
                        <!-- INDICATORS ********************************************************************************************************************  -->
                        <li >
                            <Link class="sidebar-link" href="/indicators"
                                :class="{ 'active': $page.url === '/indicators' }">
                            <span class="title">Indicators</span>
                            </Link>
                        </li>
                        <!-- OPCR STANDARD ********************************************************************************************************************  -->
                        <li>
                            <Link class="sidebar-link" href="/OPCRpaps/direct"
                                :class="{ 'active': $page.url === '/OPCRpaps/direct' }">

                            <span class="title">OPCR Standard</span>
                            </Link>
                        </li>

                        <!-- <li>
                            <Link class="sidebar-link" href="/IPCR/direct" :class="{'active': $page.url === '/IPCR/direct'}">

                                <span class="title">IPCR Standard</span>
                            </Link>
                        </li> -->
                        <!-- EMPLOYEES ********************************************************************************************************************  -->
                        <li>
                            <Link class="sidebar-link" href="/user/employees"
                                :class="{ 'active': $page.url === '/user/employees' }">

                            <span class="title">Employees</span>
                            </Link>
                        </li>
                        <!-- AIP APPROVER ********************************************************************************************************************  -->
                        <li v-if="[681, 682, 683, 684, 685].includes($page.props.auth.user.recid)">
                            <Link class="sidebar-link" href="/aip/approvers"
                                :class="{ 'active': $page.url === '/aip/approvers' }">

                            <span class="title">AIP Approvers</span>
                            </Link>
                        </li>
                        <!-- <li>
                            <Link class="sidebar-link" href="/indicators" :class="{'active': $page.url === '/indicators'}">
                                <span class="title">Divisions</span>
                            </Link>
                        </li> -->
                    </ul>
                </li>

                <hr>

                <!-- department_code: {{ $page.props.auth.user.department_code }} -->
                 <!-- REVIEW/APPROVE ********************************************************** -->
                <li class="nav-item dropdown"
                    v-if="$page.props.auth.user.department_code == '04' || $page.props.auth.user.department_code == '02'">
                    <a class="dropdown-toggle" href="javascript:void(0);">
                        <span class="icon-holder">

                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                            </svg>
                        </span>
                        <span class="title">Review/Approve</span>
                        <span class="arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </span>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <Link class="sidebar-link" href="/review-approve/targets/"
                                :class="{ 'active': $page.url === '/review-approve/targets/' }">
                            <span class="title">Targets</span>
                            </Link>
                        </li>
                        <li>
                            <Link class="sidebar-link" href="/review-approve-ratings-ppdo/"
                                :class="{ 'active': $page.url === '/review-approve-ratings-ppdo/' }">
                            <span class="title">Rating</span>
                            </Link>
                        </li>
                        <li v-if="$page.props.auth.user.department_code == '04'">
                            <Link class="sidebar-link" href="/review-approve/ratings?source=ppdo_approval"
                                :class="{ 'active': $page.url === '/review-approve/ratings?source=ppdo_approval' }">
                            <span class="title">Rating (For Approval)</span>
                            </Link>
                        </li>
                        <li v-if="$page.props.auth.user.department_code == '04'">
                            <Link class="sidebar-link" href="/strategy-and-activity-request"
                                :class="{ 'active': $page.url === '/strategy-and-activity-request' }">
                            <span class="title">Strategy and Activity Request</span>
                            </Link>
                        </li>

                        <!-- <li v-if="$page.props.auth.user.department_code == '04'">
                            <Link class="sidebar-link" href="/review-approve/ratings?source=approved"
                                :class="{ 'active': $page.url === '/review-approve/ratings?source=approved' }">
                            <span class="title">Rating (Approved)</span>
                            </Link>
                        </li> -->
                        <li v-if="$page.props.auth.user.department_code == '04'">
                            <Link class="sidebar-link" href="/revision_plans?source=rev_app"
                                :class="{ 'active': $page.url === '/revision_plans?source=rev_app' }">
                            <span class="title">Project Profile</span>
                            </Link>
                        </li>
                        <li v-if="$page.props.auth.user.department_code == '04'">
                            <Link class="sidebar-link" href="/revision_plans?source=approved"
                                :class="{ 'active': $page.url === '/revision_plans?source=approved' }">
                            <span class="title">Project Profile (Approved)</span>
                            </Link>
                        </li>
                        <li v-if="$page.props.auth.user.department_code == '04'">
                            <Link class="sidebar-link" href="/institutional_aip"
                                :class="{ 'active': $page.url === '/institutional_aip' }">
                            <span class="title">AIP</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <!-- REVIEW/APPROVE SP********************************************************* -->
                <li class="nav-item dropdown"
                    v-if="$page.props.auth.user.department_code == '19'">
                    <a class="dropdown-toggle" href="javascript:void(0);">
                        <span class="icon-holder">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-aspect-ratio-fill" viewBox="0 0 16 16">
                                <path d="M0 12.5v-9A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5M2.5 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V5h2.5a.5.5 0 0 0 0-1zm11 8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0V11h-2.5a.5.5 0 0 0 0 1z"/>
                            </svg>
                        </span>
                        <span class="title">Review/Approve</span>
                        <span class="arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </span>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <Link class="sidebar-link" href="/institutional_aip"
                                :class="{ 'active': $page.url === '/institutional_aip' }">
                                <span class="title">AIP</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <!-- OPCR TRACKING ********************************************************** -->
                <li class="nav-item dropdown" v-if="$page.props.auth.user.department_code == '04' || $page.props.auth.user.department_code == '02'">
                    <a class="dropdown-toggle" href="javascript:void(0);">
                        <span class="icon-holder">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-aspect-ratio-fill" viewBox="0 0 16 16">
                                <path d="M0 12.5v-9A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5M2.5 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V5h2.5a.5.5 0 0 0 0-1zm11 8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0V11h-2.5a.5.5 0 0 0 0 1z"/>
                            </svg>
                        </span>
                        <span class="title">OPCR Tracking</span>
                        <span class="arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </span>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <Link class="sidebar-link" href="/opcr-tracking/targets/"
                                :class="{ 'active': $page.url === '/opcr-tracking/targets/' }">
                            <span class="title">Targets</span>
                            </Link>
                        </li>
                        <li>
                            <Link class="sidebar-link" href="/opcr-tracking/ratings/"
                                :class="{ 'active': $page.url === '/opcr-tracking/ratings/' }">
                            <span class="title">Ratings</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <!-- IPP MANUAL ********************************************************** -->
                <li class="nav-item">
                    <Link class="sidebar-link" href="/manual"
                        :class="{ 'active': $page.url === '/review-approve/' }">
                    <span></span>
                    <span class="icon-holder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-calendar-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-border-style" viewBox="0 0 16 16">
                                <path d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z"/>
                            </svg> -->
                    </span>
                    <span class="title">IPP Manual</span>
                    </Link>
                </li>
                <!-- IPP Tracking **********************************************************-->
                <li class="nav-item">
                    <Link class="sidebar-link" href="/project-profile-tracking"
                        :class="{ 'active': $page.url === '/project-profile-tracking' }">
                    <span></span>
                    <span class="icon-holder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-calendar-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-border-style" viewBox="0 0 16 16">
                                <path d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z"/>
                            </svg> -->
                    </span>
                    <span class="title">IPP Tracking</span>
                    </Link>
                </li>
                <!-- MONTHLY ACOMPLISHMENT ********************************************************** -->
                <li class="nav-item">
                    <!-- :href="`http://192.168.80.88/login/authentication?username=${$page.props.auth.user.UserName}&password=${$page.props.auth.user.UserPassword}`" -->

                        <!-- :href="`generate/token/for/accomplishments`" -->
                    <a
                        class="sidebar-link"
                        :href="`https://accomplishment.davaodeoro.gov.ph/login/authentication?username=${$page.props.auth.user.UserName}&password=${$page.props.auth.user.UserPassword}`"
                        target="_blank"
                        rel="noopener noreferrer"
                        :class="{ 'active': $page.url === '/revision/0?source=sip' }"
                    >
                        <span></span>
                        <span class="icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 2h12v20H4z"/>
                                <path d="M6 6h8"/>
                                <path d="M6 10h8"/>
                                <circle cx="8" cy="16" r="2"/>
                            </svg>
                        </span>
                        <span class="title">Monthly Accomplishments</span>
                    </a>
                </li>

                <!-- <li class="nav-item">
                    <a class="sidebar-link" href="192.168.80.88/login/authentication?username=GingGing&password=fd2d9096fd18e9d5bc3d800ed3020546" :class="{ 'active': $page.url === '/revision/0?source=sip' }">
                        <span></span>
                        <span class="icon-holder">

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 2h12v20H4z"/>
                                <path d="M6 6h8"/>
                                <path d="M6 10h8"/>
                                <circle cx="8" cy="16" r="2"/>
                            </svg>
                        </span>
                        <span class="title">Accomplishments</span>
                    </a>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {
        $(function () {
            $(".sidebar .sidebar-menu li a").on("click", function () {
                const $this = $(this);

                if ($this.parent().hasClass("open")) {
                    $this
                        .parent()
                        .children(".dropdown-menu")
                        .slideUp(200, () => {
                            $this.parent().removeClass("open");
                        });
                } else {
                    $this
                        .parent()
                        .parent()
                        .children("li.open")
                        .children(".dropdown-menu")
                        .slideUp(200);

                    $this
                        .parent()
                        .parent()
                        .children("li.open")
                        .children("a")
                        .removeClass("open");

                    $this
                        .parent()
                        .parent()
                        .children("li.open")
                        .removeClass("open");

                    $this
                        .parent()
                        .children(".dropdown-menu")
                        .slideDown(200, () => {
                            $this.parent().addClass("open");
                        });
                }
            });

            // Sidebar Activity Class
            const sidebarLinks = $(".sidebar").find(".sidebar-link");

            sidebarLinks
                .each((index, el) => {
                    $(el).removeClass("active");
                })
                .filter(function () {
                    const href = $(this).attr("href");
                    const pattern = href[0] === "/" ? href.substr(1) : href;
                    return pattern === window.location.pathname.substr(1);
                })
                .addClass("active");

            // ٍSidebar Toggle
            $(".sidebar-toggle").on("click", (e) => {
                $("body").toggleClass("is-collapsed");
                e.preventDefault();
            });

        });
    }
}
</script>
