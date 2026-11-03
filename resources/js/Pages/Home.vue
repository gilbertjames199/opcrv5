<template>
  <Head>
    <title>Home</title>
  </Head>

  <div class="container">
    <h1 class="page-title">Planning and Budgeting System</h1>

    <!-- Filter Section -->
    <div class="filter-container">
      <label for="yearSelect" class="filter-label">Filter by Year:</label>
      <select id="yearSelect" v-model="selectedYear" class="filter-select">
        <option v-for="year in years" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
    </div>

    <!-- Analytics Cards -->
    <div class="row g-4 mt-3">
      <!-- Total Plans -->
      <div class="col-md-4">
        <div class="card analytics-card">
          <div class="card-body text-center">
            <h5 class="card-title">Total Plans</h5>
            <h2 class="card-value">{{ totalPlans }}</h2>
          </div>
        </div>
      </div>

      <!-- Total Budgets -->
      <div class="col-md-4">
        <div class="card analytics-card">
          <div class="card-body text-center">
            <h5 class="card-title">Total Budget</h5>
            <h2 class="card-value">{{ totalBudgets }}</h2>
          </div>
        </div>
      </div>

      <!-- Total GAD Budgets -->
      <div class="col-md-4">
        <div class="card analytics-card">
          <div class="card-body text-center">
            <h5 class="card-title">Total GAD Budget</h5>
            <h2 class="card-value">{{ totalGadBudgets }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPlans: {
      type: Number,
      required: true
    },
    totalBudgets: {
      type: Number,
      default: 0
    },
    totalGadBudgets: {
      type: Number,
      default: 0
    }
  },
  data() {
    const currentYear = new Date().getFullYear();
    return {
      selectedYear: currentYear,
      years: Array.from({ length: 11 }, (_, i) => currentYear - i)
    };
  }
};
</script>

<style scoped>
.page-title {
  color: #26394a;
  font-weight: bold;
  font-family: Verdana;
  text-align: center;
  margin-top: 20px;
}

/* Filter styles */
.filter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 15px;
  gap: 10px;
}

.filter-label {
  font-weight: bold;
  color: #26394a;
}

.filter-select {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #fff;
  color: #26394a;
  transition: border 0.2s ease-in-out;
}

.filter-select:focus {
  border-color: #007bff;
  outline: none;
}

/* Card styles */
.analytics-card {
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(38, 57, 77, 0.2);
  background: #ffffff;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s;
}

.analytics-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(38, 57, 77, 0.3);
}

.card-title {
  font-size: 1.1rem;
  color: #26394a;
  margin-bottom: 0.5rem;
}

.card-value {
  font-size: 2.2rem;
  color: #007bff;
  font-weight: bold;
}
</style>
