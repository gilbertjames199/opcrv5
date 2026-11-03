<template>
    <Head>
        <title>Home</title>
    </Head>


    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Strategies and Activities</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <!-- <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search..."> -->
                </div>

            </div>


        </div>

        <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <div class="bgc-white p-20 bd">
                <div class="table-responsive">
                    <table class="table table-sm table-borderless table-striped table-hover">
                        <thead>
                            <tr class="bg-secondary text-white">

                                <th>Strategies</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="strategy in data">
                                <tr >

                                    <td>
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            :checked="strategy.strategyProject !== null"
                                            @change="toggleStrategy(strategy)"
                                        />&nbsp;
                                        {{ strategy.description }}
                                    </td>
                                    <td>
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
                                                    <!-- <Link class="dropdown-item" :href="`/activities/${dat.id}`">Activities
                                                    </Link> -->
                                                </li>

                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <!--ACTIVITY-->
                                <template v-if="strategy.activity && strategy.activity.length > 0">
                                    <tr v-if="strategy.activity" >

                                        <th>
                                            <span class="ms-4">Activities</span>
                                        </th>
                                        <td></td>
                                    </tr>
                                    <template v-if="strategy.activity">
                                        <tr v-for="activity in strategy.activity" :key="activity.id">

                                        <td>
                                            <span class="ms-4">&nbsp;&nbsp;
                                                &nbsp;&nbsp;
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    :checked="activity.activityProject !== null"
                                                    @change="toggleActivity(activity)"
                                                />
                                                &nbsp;
                                                {{ activity.description }}
                                            </span>
                                        </td>
                                        <td>
                                            <div class="dropdown dropstart">
                                                <button class="btn btn-secondary btn-sm action-btn" type="button"
                                                    id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                        <path
                                                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                    </svg>
                                                </button>
                                                <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton2">
                                                    <li>
                                                        <a class="dropdown-item" :href="`/activities/${activity.id}`">View</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                            <!-- <template v-if="strategy.activity && strategy.activity.length > 0">

                            </template> -->
                            </template>
                            </template>


                        </tbody>
                    </table>
                </div>


            </div>
        </div>

    </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
export default {
    props: {
        data: Object,
        revision_plan: Object
    },
    data() {
        return {

        }
    },
    components: {
        Pagination, Filtering,
    },

    methods: {

        async toggleStrategy(strategy) {
            if (strategy.strategyProject) {
                // If strategy is checked → DELETE request
                await this.deleteStrategy(strategy.id);
            } else {
                // If strategy is unchecked → CREATE request
                await this.createStrategy(strategy.id);
            }
        },
        async toggleActivity(activity) {
            if (activity.activityProject) {
                // If activity is checked → DELETE request
                await this.deleteActivity(activity.id);
            } else {
                // If activity is unchecked → CREATE request
                await this.createActivity(activity.id);
            }
        },
        async createStrategy(id) {
            try {
                const response = await axios.post(`/strategies/create`, { id });
                console.log(response.data);
                this.refreshData(); // Refresh after updating
            } catch (error) {
                console.error('Error creating strategy:', error);
            }
        },
        async deleteStrategy(id) {
            try {
                const response = await axios.delete(`/strategies/${id}`);
                console.log(response.data);
                this.refreshData(); // Refresh after updating
            } catch (error) {
                console.error('Error deleting strategy:', error);
            }
        },
        async createActivity(id) {
            try {
                const response = await axios.post(`/activities/create`, { id });
                console.log(response.data);
                this.refreshData(); // Refresh after updating
            } catch (error) {
                console.error('Error creating activity:', error);
            }
        },
        async deleteActivity(id) {
            try {
                const response = await axios.delete(`/activities/${id}`);
                console.log(response.data);
                this.refreshData(); // Refresh after updating
            } catch (error) {
                console.error('Error deleting activity:', error);
            }
        },
        async refreshData() {
            try {
                const response = await axios.get(`/strategies/${this.revision_plan.id}`);
                this.data = response.data;
            } catch (error) {
                console.error('Error refreshing data:', error);
            }
        }


    }
};
</script>

