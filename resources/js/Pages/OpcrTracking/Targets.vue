<template>
    <Head>
        <title>OPCR Targets</title>
    </Head>
  <div class="w-100 p-4">
    <div class="mb-4">
      <h2 class="mb-1 fw-bold" style="color: #2c3e50;">OPCR Targets</h2>
      <p class="text-muted" style="font-size: 0.95rem;">View and manage targets by year and semester</p>
    </div>
    <!-- ================= YEAR TABLE ================= -->
    <table class="table w-100 bg-white shadow border-0" style="border-radius: 8px; overflow: hidden;">
      <thead style="background-color: #f8f9fa; border-bottom: 2px solid #dee2e6;">
        <tr>
          <th style="font-weight: 600; color: #2c3e50; padding: 1rem;">Year</th>
          <th class="text-end" style="font-weight: 600; color: #2c3e50; padding: 1rem;">Action</th>
        </tr>
      </thead>

      <tbody>
        <template v-for="(semesters, year) in groupedData" :key="year">

          <!-- YEAR ROW -->
          <tr class="align-middle year-row" :class="{ 'year-glow': openYear === year }">
            <td class="fw-bold" style="color: #2c3e50; padding: 1rem;">
              {{ year }}
            </td>

            <!-- <td class="text-end">
              <button
                class="btn btn-sm btn-light border-0"
                @click="toggleYear(year)"
              >
                <ChevronIcon :open="openYear === year" />
              </button>
            </td> -->
            <td class="text-end" style="padding: 1rem;">
                <div class="d-flex justify-content-end w-100">
                    <button
                    class="btn btn-sm btn-light border-0 p-2 year-toggle"
                    @click="toggleYear(year)"
                    title="Expand/Collapse"
                    >
                    <ChevronIcon :open="openYear === year" />
                    </button>
                </div>
            </td>
          </tr>

          <!-- ================= SEMESTER TABLE ================= -->
          <tr v-if="openYear === year">
            <td colspan="2" class="p-0">

              <table class="table w-100 mb-0 bg-white border-0">
                <tbody>

                  <template v-for="(offices, semester) in semesters" :key="semester">

                    <!-- SEMESTER ROW -->
                    <tr class="semester-row" :class="{ 'semester-glow': isSemesterOpen(year, semester) }" style="background-color: #f8f9fa; border-bottom: 1px solid #dee2e6;">
                      <td class="fw-semibold" style="color: #34495e; padding: 0.875rem 1rem 0.875rem 1.5rem;">
                        {{ semester }}
                      </td>

                      <td class="text-end" style="padding: 0.875rem 1rem;">
                        <button
                          class="btn btn-sm btn-light border-0 p-2 semester-toggle"
                          @click="toggleSemester(year, semester)"
                          title="Expand/Collapse"
                        >
                          <ChevronIcon
                            :open="isSemesterOpen(year, semester)"
                          />
                        </button>
                      </td>
                    </tr>

                    <!-- ================= OFFICES TABLE ================= -->
                    <tr v-if="isSemesterOpen(year, semester)">
                      <td colspan="2" class="p-0">

                        <table class="table w-100 mb-0 border-0">
                          <thead style="background-color: #ecf0f1; border-bottom: 1px solid #bdc3c7;">
                            <tr>
                              <th style="font-weight: 600; color: #34495e; padding: 0.75rem 1rem 0.75rem 2rem; width: 50px;">#</th>
                              <th style="font-weight: 600; color: #34495e; padding: 0.75rem 1rem;">Office</th>
                              <th style="font-weight: 600; color: #34495e; padding: 0.75rem 1rem;">Status</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr
                              v-for="(item, index) in offices"
                              :key="item.id"
                              class="office-row"
                              style="border-bottom: 1px solid #ecf0f1;"
                            >
                              <td style="padding: 0.875rem 1rem 0.875rem 2rem; color: #7f8c8d;">{{ index + 1 }}</td>
                              <td style="padding: 0.875rem 1rem; color: #2c3e50;">{{ item.office_name }}</td>
                              <td style="padding: 0.875rem 1rem;">
                                <span class="badge status-badge" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-weight: 600;">
                                  {{ item.target_status }}
                                </span>
                              </td>
                            </tr>
                          </tbody>

                        </table>

                      </td>
                    </tr>

                  </template>

                </tbody>
              </table>

            </td>
          </tr>

        </template>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  props: {
    groupedData: Object
  },

  data() {
    return {
      openYear: null,
      openSemesters: {} // { year: semester }
    };
  },

  methods: {

    // Toggle Year (only one open at a time)
    toggleYear(year) {
      this.openYear = this.openYear === year ? null : year;

      // reset semesters when switching year
      if (this.openYear !== year) {
        this.openSemesters = {};
      }
    },

    // Toggle Semester per Year
    toggleSemester(year, semester) {
      if (!this.openSemesters[year]) {
        this.openSemesters[year] = null;
      }

      this.openSemesters[year] =
        this.openSemesters[year] === semester ? null : semester;
    },

    // Check if semester is open
    isSemesterOpen(year, semester) {
      return this.openSemesters[year] === semester;
    }
  },

  components: {
    ChevronIcon: {
      props: ['open'],
      template: `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="16" height="16"
             fill="currentColor"
             viewBox="0 0 16 16">

          <path v-if="!open"
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
          />

          <path v-else
            fill-rule="evenodd"
            d="M1.646 11.354a.5.5 0 0 0 .708 0L8 5.707l5.646 5.647a.5.5 0 0 0 .708-.708l-6-6a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 0 .708"
          />

        </svg>
      `
    }
  }
};
</script>

<style scoped>
.table td {
  vertical-align: middle;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
}row {
  transition: all 0.2s ease;
}

.year-row:hover:not(.year-glow) {
  background-color: #f0f6ff;
}

.year-glow {
  background-color: rgba(0, 150, 255, 0.15);
  box-shadow: inset 0 0 10px rgba(0, 150, 255, 0.4), 0 0 8px rgba(0, 150, 255, 0.3);
  transition: all 0.2s ease;
}

.semester-row {
  transition: all 0.2s ease;
}

.semester-row:hover:not(.semester-glow) {
  background-color: #f5f7fa;
}

.semester-glow {
  background-color: rgba(0, 255, 100, 0.15);
  box-shadow: inset 0 0 10px rgba(0, 255, 100, 0.4), 0 0 8px rgba(0, 255, 100, 0.3);
  transition: all 0.2s ease;
}

.office-row {
  transition: background-color 0.2s ease;
}

.office-row:hover {
  background-color: #f9f9f9;
}

.year-toggle:hover,
.semester-toggle:hover {
  background-color: #e9ecef !important;
  border-radius: 4px;
}

.status-badge {
  padding: 0.5rem 0.875rem !important;
  border-radius: 20px;
  font-size: 0.85rem 255, 100, 0.15);
  box-shadow: inset 0 0 10px rgba(0, 255, 100, 0.4), 0 0 8px rgba(0, 255, 100, 0.3);
  transition: all 0.2s ease;
}
</style>
