require('./bootstrap');

import { createApp, h, Vue } from 'vue'
import { createInertiaApp, Head, Link, router } from '@inertiajs/vue3'
import Layout from "./Shared/Layout"
import Notification from "./Shared/Notification"
//Vue Search Select
import 'vue-search-select/dist/VueSearchSelect.css'

//Card modal
//.component('CardModal', CardModal)
import CardModal from "./Shared/CardModal"

// FileUpload
import vueFilePond from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';

//VUe-select
//import Vue from 'vue';
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select';
import VueSelect from 'vue-select';

//VUE SELECT2

//YEAR PICKER
//import yearPicker from 'vue-year-picker';

//Bootstrap Vue
//import { BootstrapVue } from 'bootstrap-vue';
/*.use(BootstrapVue)
      .use(IconsPlugin) */
//VUE TOOLTIP
// import VTooltip from 'v-tooltip';

//VUE Quill Editor
import Quill from 'quill'; // Import core Quill
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import QuillBetterTable from 'quill-better-table';
import 'quill-better-table/dist/quill-better-table.css';

Quill.register({
    'modules/better-table': QuillBetterTable,
}, true);
window.Quill = Quill

//Vue Multiselect 3
import Multiselect from '@vueform/multiselect';

//VUE Sweetalert
import VueSweetalert2 from 'vue-sweetalert2';

// fuzzy sort
import fuzzysort from "fuzzysort";

// Additional Plugins for Fuzzy String Matching
import Mark from 'mark.js'
import DiffMatchPatch from 'diff-match-patch'

window.Mark = Mark
window.DiffMatchPatch = DiffMatchPatch

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateSize,
    FilePondPluginImageCrop,
    FilePondPluginImageTransform
);
//.use(yearPicker)
const setFavicon = (iconUrl) => {
    let link = document.querySelector("link[rel~='icon']")
    if (!link) {
        link = document.createElement("link")
        link.rel = "icon"
        document.head.appendChild(link)
    }
    link.href = iconUrl
}

// ✅ Set your favicon
setFavicon('/images/OPCR_ICON.png')
// .use(VTooltip)
createInertiaApp({
    resolve: async name => {
        let page = (await import(`./Pages/${name}`)).default;
        page.layout ??= Layout
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(VueSweetalert2)
            .component("multiselect", Multiselect)
            .component("Link", Link)
            .component("Head", Head)
            .component('CardModal', CardModal)
            .component("Notification", Notification)
            .component("FilePond", FilePond)
            .component("v-select", vSelect)
            .component('QuillEditor', QuillEditor)
            .component('fuzzysort', fuzzysort)
            .component("Mark", Mark)
            .component("DiffMatchPatch", DiffMatchPatch)
            .mixin({
                data() {
                    return {
                        my_years: [
                            "2000",
                            "2001",
                            "2002",
                            "2003",
                            "2004",
                            "2005",
                            "2006",
                            "2007",
                            "2008",
                            "2009",
                            "2010",
                            "2011",
                            "2012",
                            "2013",
                            "2014",
                            "2015",
                            "2016",
                            "2017",
                            "2018",
                            "2019",
                            "2020",
                            "2021",
                            "2022",
                            "2023",
                            "2024",
                            "2025",
                            "2026",
                            "2027",
                            "2028",
                            "2029",
                            "2030",
                            "2031",
                            "2032",
                            "2033",
                            "2034",
                            "2035",
                            "2036",
                            "2037",
                            "2038",
                            "2039",
                            "2040",
                            "2041",
                            "2042",
                            "2043",
                            "2044",
                            "2045",
                            "2046",
                            "2047",
                            "2048",
                            "2049",
                            "2050",
                            "2051",
                            "2052",
                            "2053",
                            "2054",
                            "2055",
                            "2056",
                            "2057",
                            "2058",
                            "2059",
                            "2060",
                            "2061",
                            "2062",
                            "2063",
                            "2064",
                            "2065",
                            "2066",
                            "2067",
                            "2068",
                            "2069",
                            "2070",
                            "2071",
                            "2072",
                            "2073",
                            "2074",
                            "2075",
                            "2076",
                            "2077",
                            "2078",
                            "2079",
                            "2080",
                            "2081",
                            "2082",
                            "2083",
                            "2084",
                            "2085",
                            "2086",
                            "2087",
                            "2088",
                            "2089",
                            "2090",
                            "2091",
                            "2092",
                            "2093",
                            "2094",
                            "2095",
                            "2096",
                            "2097",
                            "2098",
                            "2099",
                            "2100",
                        ],
                        pcr_years: [
                            "2025",
                            "2026",
                            "2027",
                            "2028",
                            // "2029",
                            // "2030",
                            // "2031",
                            // "2032",
                            // "2033",
                            // "2034",
                            // "2035",
                        ],
                        measurement_units: [
                            'meter', 'kilometer', 'mile', 'yard', // Units of measure for distance
                            'centimeter', 'inch', 'foot', 'meter', // Units of measure for length
                            'gram', 'kilogram', 'ounce', 'pound', // Units of measure for weight
                            'milliliter', 'liter', 'gallon', 'cubic meter', // Units of measure for volume
                            'volt', 'kilovolt', 'megavolt' // Units of measure for voltage
                            // Add other measurement units as needed
                        ],
                        comparison_operators: [
                            '<', '>', '≥', '≤'
                        ],
                        get jasper_ip() {
                            // var lo = "192.168.6.23:8080/";
                            // var gl = "122.54.19.171:8080/";
                            // var nw = "122.53.120.27:8080/"
                            // var nw_nov = "paps.dvodeoro.ph/";
                            var nw_nov = "paps.davaodeoro.gov.ph/";
                            return nw_nov;
                        },
                        office_aip: {
                            "1011": "01-01-001",
                            "1031": "01-01-012",
                            "1032": "01-03-002",
                            "1041": "01-01-010",
                            "1061": "01-01-015",
                            "1071": "01-01-009",
                            "1081": "01-01-007",
                            "1091": "01-01-005",
                            "1101": "01-01-006",
                            "1131": "01-01-011",
                            "4411": "01-01-013",
                            "7611": "01-01-014",
                            "8711": "01-01-016",
                            "8721": "01-01-017",
                            "8731": "01-02-002",
                            "8751-1": "01-01-008",
                            "4490": "01-03-003",
                            "1016": "01-01-002",
                            "1021": "01-01-003",
                            "4421": "01-03-001",
                            "1011-2": "01-03-004",
                            "1121": "01-03-009",
                        },
                        getFirstFourChars(str) {
                            return str.slice(0, 4);
                        },
                        sectors: {
                            "General Public Services Sector": [
                                "",
                                "Executive Services",
                                "Legislative Services",
                                "Planning and Development Coordination Services",
                                "Budgeting Services",
                                "Treasury Services",
                                "Accounting Services",
                                "Administrative Services",
                                "Civil Registry Services",
                                "General Services",
                                "Assessment of Real Property Services",
                                "Auditing Services | Information Services",
                                "Legal Services | Prosecution Services",
                                "Administration of Justice Services",
                                "Land Registration Services",
                                "Claim Registration Services",
                                "Police Services",
                                "Fire Protection Services",
                                "Repair and Maintenance of Government Facilities"
                            ],
                            "Social Services Sector": [
                                "",
                                "Education and Manpower Development",
                                "Public Education Services",
                                "Medical Subsidiary Services",
                                "Manpower Development Services",
                                "Sports Center, Athletic Field, and Playground Maintenance Service cultural",
                                "Project Services",
                                "Cultural/Conference/Convention Center",
                                "Operation Services",
                                "Health",
                                "Health Services Field Projects (Immunization, Inoculation, Blood Donor Services)",
                                "Day Care Clinic",
                                "Hospital Services",
                                "Chest Clinic",
                                "Housing and Community Development",
                                "Housing Projects",
                                "Sanitary Services",
                                "Street Cleaning",
                                "Garbage Collection",
                                "Sewerage and Drainage",
                                "Street Lighting",
                                "Community Development Services"
                            ],
                            "Economic Services": [
                                "",
                                "Agricultural Services",
                                "Veterinary Services",
                                "Natural Resources Services",
                                "Architectural Services",
                                "Engineering Services",
                                "Economic Enterprises and Public Operation Services",
                                "Tourism Services"
                            ],
                            "Other Services": [
                                // "Other Services"
                            ]
                        },
                        isPreviewable(filename) {
                            // const ext = filename.split('.').pop().toLowerCase()
                            const ext = filename
                            // 'jpg', 'jpeg', 'png', 'gif',
                            return ['pdf', 'doc', 'docx', 'dot', 'dotx', 'dotm', 'xls', 'xlsx', 'xlsm',
                                'xlsb', 'xlt', 'xltx', 'xltm', 'jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp',
                                'mp3', 'mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv', 'ppt', 'pptx', 'pptm', 'pot', 'potx', 'potm'
                            ].includes(ext)
                        },
                        isDragging: false,
                        dragOffsetX: 0,
                        dragOffsetY: 0,
                        highlighted: {
                            rationale: '',
                            objective: '',
                            beneficiaries: ''
                        }
                    }
                },
                methods: {
                    formatDate(dateString) {
                        if (!dateString) return '';

                            // Strip microseconds if they exist
                            const cleanDateString = dateString.replace(/\.\d{3,6}Z$/, 'Z');

                            const date = new Date(cleanDateString);

                            const datePart = date.toLocaleDateString('en-US', {
                                month: 'long',
                                day: '2-digit',
                                year: 'numeric',
                                timeZone: 'Asia/Manila'
                            });

                            const timePart = date.toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: true,
                                timeZone: 'Asia/Manila'
                            });

                        return `${datePart} ${timePart}`;
                    },
                    goBack() {
                        window.history.back();  // or this.$router.go(-1)
                    },
                    cleanVariable(event) {
                        this.variable = event.target.value.replace(/[^0-9]/g, "");
                    },
                    NumbersOnly(evt) {
                        let stringValue = evt.target.value.toString()
                        let regex = /^\d*(\.\d{1,2})?$/

                        evt = (evt) ? evt : window.event;
                        var charCode = (evt.which) ? evt.which : evt.keyCode;
                        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                            evt.preventDefault();;
                        } else {
                            return true;
                        }
                        evt.toFixed(2)
                    },
                    format_number(number, num_decimals, include_comma) {

                        return number.toLocaleString('en-US', { useGrouping: include_comma, minimumFractionDigits: num_decimals, maximumFractionDigits: num_decimals });
                    },
                    format_number_conv(number, num_decimals, include_comma) {

                        var numm = parseFloat(number);
                        return numm.toLocaleString('en-US', { useGrouping: include_comma, minimumFractionDigits: num_decimals, maximumFractionDigits: num_decimals });


                    },
                    getStatus(stat_num) {
                        // alert(stat_num)
                        if (typeof stat_num !== 'string') {
                            stat_num = String(stat_num);
                        }
                        if (stat_num == '-2') {
                            return 'Returned';
                        } else if (stat_num === '-1') {
                            return 'Saved';
                        } else if (stat_num === '0') {
                            return 'Submitted';
                        } else if (stat_num === '1') {
                            return 'Reviewed';
                        } else if (stat_num === '2') {
                            return 'Approved';
                        } else {
                            return 'Unknown Status';
                        }
                    },
                    GAD_remark(val) {
                        var num = parseFloat(val);
                        var remarks = "GAD is insivible";
                        if (num >= 4 && num < 8) {
                            remarks = "Promising GAD prospects (conditional pass)";
                        } else if (num >= 8 && num < 15) {
                            remarks = "Gender Sensitive";
                        } else if (num >= 15 && num < 20) {
                            remarks = "Gender-responsive";
                        } else if (num >= 20) {
                            remarks = "Fully gender-responsive";
                        }
                        return remarks;
                    },
                    yearNow() {
                        const d = new Date();
                        let year = d.getFullYear();
                        return year;
                    },
                    year_values() {
                        var a = 90;
                        var b = 30;
                        b = b + createApp;

                        return ["2000",
                            "2001",
                            "2002",
                            "2003",
                            "2004",
                            "2005",
                            "2006",
                            "2007",
                            "2008",
                            "2009",
                            "2010",
                            "2011",
                            "2012",
                            "2013",
                            "2014",
                            "2015",
                            "2016",
                            "2017",
                            "2018",
                            "2019",
                            "2020",
                            "2021",
                            "2022",
                            "2023",
                            "2024",
                            "2025",
                            "2026",
                            "2027",
                            "2028",
                            "2029",
                            "2030",
                            "2031",
                            "2032",
                            "2033",
                            "2034",
                            "2035",
                            "2036",
                            "2037",
                            "2038",
                            "2039",
                            "2040",
                            "2041",
                            "2042",
                            "2043",
                            "2044",
                            "2045",
                            "2046",
                            "2047",
                            "2048",
                            "2049",
                            "2050",
                            "2051",
                            "2052",
                            "2053",
                            "2054",
                            "2055",
                            "2056",
                            "2057",
                            "2058",
                            "2059",
                            "2060",
                            "2061",
                            "2062",
                            "2063",
                            "2064",
                            "2065",
                            "2066",
                            "2067",
                            "2068",
                            "2069",
                            "2070",
                            "2071",
                            "2072",
                            "2073",
                            "2074",
                            "2075",
                            "2076",
                            "2077",
                            "2078",
                            "2079",
                            "2080",
                            "2081",
                            "2082",
                            "2083",
                            "2084",
                            "2085",
                            "2086",
                            "2087",
                            "2088",
                            "2089",
                            "2090",
                            "2091",
                            "2092",
                            "2093",
                            "2094",
                            "2095",
                            "2096",
                            "2097",
                            "2098",
                            "2099",
                            "2100",
                        ];

                    },
                    allCaps(val) {
                        return val.toUpperCase();
                    },
                    formatMonthYear(date_value) {
                        const dateParts = date_value.split('-');
                        const year = dateParts[0];
                        const month = new Date(dateParts[0], dateParts[1] - 1).toLocaleString('en-US', { month: 'long' });

                        return `${month} ${year}`;
                    },
                    formatMonthYear2(date_value) {
                        // Make sure the value exists
                        if (!date_value) return '';

                        // Split the date string
                        const [year, month] = date_value.split('-');

                        // Create a date object (month index is zero-based)
                        const dateObj = new Date(year, month - 1);

                        // Format month name
                        const monthName = dateObj.toLocaleString('en-US', { month: 'long' });

                        return `${monthName} ${year}`;
                    },
                    formatMonth(date_value) {
                        const dateParts = date_value.split('-');
                        const year = dateParts[0];
                        const month = new Date(dateParts[0], dateParts[1] - 1).toLocaleString('en-US', { month: 'long' });

                        return `${month}`;
                    },
                    getImagePath(filename) {
                        return `/images/${filename}`;
                    },
                    getSum(n1, n2) {
                        var n3 = parseFloat(n1) + parseFloat(n2);
                        //alert(n1);
                        return this.format_number_conv(n3, 2, true);
                    },
                    getDifference(n1, n2) {
                        var n3 = parseFloat(n1) - parseFloat(n2);
                        //alert(n1+" --- ");
                        return this.format_number_conv(n3, 2, true);
                    },
                    truncateText(text, limit) {
                        const words = text.split(' ');
                        if (words.length > limit) {
                            return words.slice(0, limit).join(' ') + '...'; // Add ellipsis for truncation
                        } else {
                            return text;
                        }
                    },
                    getPlainTextWithoutTags(htmlString) {
                        // Use a regular expression to remove HTML tags
                        return htmlString.replace(/<[^>]+>/g, '');
                    },
                    formatDate(isoDate) {
                        const date = new Date(isoDate);
                        const options = { year: 'numeric', month: 'long', day: '2-digit' };
                        return date.toLocaleDateString('en-US', options);
                    },
                    getPreUploadFileIcon(file_type) {
                        // if (!file?.file_type) {
                        //   return '/images/icons/file.png'; // default if missing type
                        // }

                        const type = file_type.toLowerCase();

                        const excelTypes = ['xls', 'xlsx', 'xlsm', 'xlsb', 'xlt', 'xltx', 'xltm'];
                        const wordTypes = ['doc', 'docx', 'dot', 'dotx', 'dotm'];
                        const imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
                        const pptTypes = ['ppt', 'pptx', 'pptm', 'pot', 'potx', 'potm'];
                        const multimediaTypes = ['mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv', 'mp3'];

                        if (excelTypes.includes(type)) {
                            return '/images/icons/excel.png';
                        }
                        else if (type === 'pdf') {
                            return '/images/icons/pdf.png';
                        }
                        else if (wordTypes.includes(type)) {
                            return '/images/icons/word.png';
                        }
                        else if (pptTypes.includes(type)) {
                            return '/images/icons/ppt.png';
                        }
                        else if (multimediaTypes.includes(type)) {
                            return '/images/icons/video.png';
                        }
                        else if (imageTypes.includes(type)) {
                            return `/images/icons/images.png`;
                        }
                        else {
                            return '/images/icons/file.png'; // default icon
                        }
                    },
                    getStatus(number_status) {
                        const status = parseFloat(number_status);

                        if (status === -1) return 'Saved';
                        if (status === 0) return 'Submitted';
                        if (status === 1) return 'Reviewed';
                        if (status === 2) return 'Approved';
                        if (status === -2) return 'Returned';

                        return 'unknown';
                    },
                    //DRAGGABLE PANELS
                    startDrag(e) {
                        if (e.target.closest("button")) return; // do NOT drag when clicking buttons

                        this.isDragging = true;
                        this.dragOffsetX = e.clientX - this.$refs.dragPanel.offsetLeft;
                        this.dragOffsetY = e.clientY - this.$refs.dragPanel.offsetTop;

                        document.addEventListener("mousemove", this.onDrag);
                        document.addEventListener("mouseup", this.stopDrag);
                    },
                    onDrag(e) {
                        if (!this.isDragging) return;

                        this.$refs.dragPanel.style.left = e.clientX - this.dragOffsetX + "px";
                        this.$refs.dragPanel.style.top = e.clientY - this.dragOffsetY + "px";
                    },
                    stopDrag() {
                        this.isDragging = false;
                        document.removeEventListener("mousemove", this.onDrag);
                        document.removeEventListener("mouseup", this.stopDrag);
                    },
                    formatProjectType(type) {
                        const map = {
                            p: 'Project Profile',
                            d: 'Project Design',
                            'sip': 'SIP Profile'
                        }
                        return map[type] || type
                    },
                    formatAipStatus(value, type) {
                        const map_sp = {
                            "-1": "Saved",
                            "0": "Submitted",
                            "1": "Approved",
                            "-2": "Returned"
                        }
                        const map_ldc = {
                            "-1": "Saved",
                            "0": "Submitted",
                            "1": "Approved",
                            "-2": "Returned"
                        }
                        return type === "ldc" ? map_ldc[value] : map_sp[value];
                    },
                    // AIP Submission
                    updateAIPStatus(type, year) {
                        // Map type codes to human-readable messages
                        const typeMessages = {
                            'LDC0': 'submit this AIP for LDC review?',
                            'LDC-2': 'return this AIP back from LDC?',
                            'LDC1': 'approve this AIP for LDC?',
                            'SP0': 'submit this AIP for SP review?',
                            'SP-2': 'return this AIP back from SP?',
                            'SP1': 'approve this AIP for SP?',
                        };

                        const message = typeMessages[type] || 'proceed with this action?';

                        // Ask user for confirmation
                        if (!confirm(`Are you sure you want to ${message} for the year ${year}?`)) {
                            return; // Exit if user cancels
                        }

                        // Payload to send
                        const payload = {
                            year_period: year
                        };

                        // Send the request via Inertia
                        router.post(`/institutional_aip/status/${type}`, payload, {
                            onSuccess: () => {
                                this.$toast.success('AIP status updated successfully.');
                            },
                            onError: (errors) => {
                                console.error(errors);
                                this.$toast.error('Failed to update AIP status.');
                            }
                        });
                    },
                    // **************************************************************************************************************************
                    // GLOBAL HTML Utilities

                    // **************************************************************************************************************************
                    //COMMENTS -Fuzzy Matching **************************************************************************************************
                    /**
                     * MAIN METHOD
                     * Returns HTML with highlighted comments
                     */
                    highlightWithComments123(rawText, comments, columnName, containerEl) {
                        if (!rawText || !comments?.length) return

                        const instance = new Mark(containerEl)
                        const dmp = new DiffMatchPatch()

                        const filtered = comments.filter(c => c.column_name === columnName)

                        filtered.forEach(comment => {
                            const {
                                selected_text,
                                context_before,
                                context_after,
                                id,
                                table_name,
                                column_name,
                                comment_status,
                                index_start,
                                index_end
                            } = comment

                            const fontColor = comment_status === '0' ? '#ff0000' : null
                            const length = index_end - index_start
                            let matched = false

                            const applyStyle = el => {
                                if (fontColor) el.style.color = fontColor
                                el.style.backgroundColor = 'white'
                                el.setAttribute('id', `${id}_${table_name}_${column_name}`)
                            }

                            /**
                             * STEP 1 — Exact context match
                             */
                            const pattern = `${context_before}${selected_text}${context_after}`

                            instance.mark(pattern, {
                                separateWordSearch: false,
                                accuracy: 'partially',
                                acrossElements: true,
                                each: el => {
                                    matched = true
                                    applyStyle(el)
                                }
                            })

                            if (matched) return

                            /**
                             * STEP 2 — DiffMatchPatch approximation
                             */
                            const diffs = dmp.diff_main(rawText, selected_text)
                            dmp.diff_cleanupSemantic(diffs)

                            let bestMatch = ''
                            let bestScore = Infinity

                            diffs.forEach(diff => {
                                if (diff[0] === 0) {
                                    const distance = dmp.diff_levenshtein(diffs)
                                    if (distance < bestScore) {
                                        bestScore = distance
                                        bestMatch = diff[1]
                                    }
                                }
                            })

                            if (bestMatch && bestMatch.length > 3) {
                                instance.mark(bestMatch, {
                                    separateWordSearch: false,
                                    accuracy: 'partially',
                                    acrossElements: true,
                                    each: el => {
                                        matched = true
                                        applyStyle(el)
                                    }
                                })
                            }

                            if (matched) return

                            /**
                             * STEP 3A — Context BEFORE → tag nearest chars AFTER
                             */
                            if (context_before) {
                                const beforeIndex = rawText.lastIndexOf(context_before)
                                if (beforeIndex !== -1) {
                                    const start = beforeIndex + context_before.length
                                    const fallbackText = rawText.substr(start, length)

                                    instance.mark(fallbackText, {
                                        separateWordSearch: false,
                                        accuracy: 'partially',
                                        acrossElements: true,
                                        each: el => {
                                            matched = true
                                            applyStyle(el)
                                        }
                                    })
                                }
                            }

                            if (matched) return

                            /**
                             * STEP 3B — Context AFTER → tag nearest chars BEFORE
                             */
                            if (context_after) {
                                const afterIndex = rawText.indexOf(context_after)
                                if (afterIndex !== -1) {
                                    const start = Math.max(0, afterIndex - length)
                                    const fallbackText = rawText.substr(start, length)

                                    instance.mark(fallbackText, {
                                        separateWordSearch: false,
                                        accuracy: 'partially',
                                        acrossElements: true,
                                        each: el => {
                                            matched = true
                                            applyStyle(el)
                                        }
                                    })
                                }
                            }
                        })
                    },

                    cleanPartialHtmlEdges(text) {
                        if (!text) return text

                        return text
                            // remove unfinished opening/closing tag fragments at START
                            .replace(/^\s*(<\/?[a-zA-Z][^>]*$|^[^<]*>)/g, '')
                            // remove unfinished opening/closing tag fragments at END
                            .replace(/(<\/?[a-zA-Z][^>]*$|<[^>]*$)\s*$/g, '')
                            .trim()
                    },
                    highlightWithComments(rawText, comments, columnName, containerEl) {
                        if (!rawText || !comments?.length) return

                        const instance = new Mark(containerEl)

                        const filtered = comments.filter(c => c.column_name === columnName)
                        let finalText = rawText; // start from the original text

                        filtered.forEach(comment => {
                            const {
                                selected_text,
                                context_before,
                                context_after,
                                id,
                                table_name,
                                column_name,
                                comment_status,
                                start_index,
                                end_index
                            } = comment
                            // const bgColor = comment_status === '0'
                            //     ?   '#ff7112ff'  // ✔ approved (example: light orange / yellow)
                            //     : '#ffffffff'   // ✔ default (pending / active)
                            const fontColor = comment_status === '0'
                                ? '#ff0000'   // red text for approved
                                : null        // keep default text color

                            let matched = false
                            /**
                             * Step 1: Try exact context match
                             */
                            const pattern = `${context_before}${selected_text}${context_after}`

                            instance.mark(pattern, {
                                separateWordSearch: false,
                                accuracy: "partially",
                                acrossElements: true,
                                each: el => {
                                    matched = true
                                    // el.style.backgroundColor = bgColor
                                    if (fontColor) {
                                        el.style.color = fontColor
                                    }
                                    el.style.backgroundColor = "white"
                                    el.setAttribute(
                                        "id",
                                        `${id}_${table_name}_${column_name}`
                                    )
                                }
                            })
                            // if(column_name==='rationale'){
                            //     alert(column_name+" 1: "+matched)
                            // }

                            if (matched) return

                            /**
                             * Step 2: If exact context fails, fallback to diff-based match
                             */
                            instance.mark(selected_text, {
                                separateWordSearch: false,
                                accuracy: "partially",
                                acrossElements: true,
                                each: el => {
                                    matched = true
                                    // el.style.backgroundColor = bgColor
                                    if (fontColor) {
                                        el.style.color = fontColor
                                    }
                                    el.style.backgroundColor = "white"
                                    el.setAttribute(
                                        "id",
                                        `${id}_${table_name}_${column_name}`
                                    )
                                }
                            })
                            // if(column_name==='rationale'){
                            //     alert(column_name+" 2: "+matched)
                            // }
                            if (matched) return
                            /**
                             * Step 3: Index-based fallback (context + stored indexes)
                             */

                            const sourceText = rawText
                            const extractedText = sourceText.substring(start_index, end_index).trim()
                            const cleanedText = this.cleanPartialHtmlEdges(extractedText)
                            // alert("begin: "+begin +" end: "+end+  " extractedText "+extractedText)
                            // alert("start_index: "+start_index +" end_index: "+end_index+  " extractedText "+extractedText)
                            // 7️⃣ Mark extracted text
                            const naa="sadasdsadsdasd";
                            if (cleanedText) {
                                // alert("extractedText: "+extractedText)
                                // alert("cleaned text: "+cleanedText)
                                // alert(el);
                                // exactly
                                instance.mark(cleanedText, {
                                    separateWordSearch: false,
                                    accuracy: "partially",
                                    acrossElements: true,
                                    each: el => {
                                        matched = true
                                        naa="nakita na";
                                        // el.style.backgroundColor = bgColor
                                        if (fontColor) {
                                            el.style.color = fontColor
                                        }
                                        el.style.backgroundColor = "white"
                                        el.setAttribute(
                                            "id",
                                            `${id}_${table_name}_${column_name}`
                                        )
                                    }
                                })
                            }

                            if (matched) return
                            // /STEP 4: Just mark anything to help user know that the comment is under rationale, objectives, and expected outputs
                            // 1️⃣ Strip HTML tags
                            // const plainText = rawText
                            //     .replace(/<[^>]*>/g, ' ')   // remove HTML
                            //     .replace(/\s+/g, ' ')       // normalize spaces
                            //     .trim()

                            // 2️⃣ Get first word
                            // const firstWord = plainText.split(' ')[0]
                            // instance.mark('the', {
                            //         separateWordSearch: false,
                            //         accuracy: "exactly",
                            //         acrossElements: true,
                            //         each: el => {
                            //             matched = true
                            //             naa="nakita na";
                            //             // el.style.backgroundColor = bgColor
                            //             if (fontColor) {
                            //                 el.style.color = fontColor
                            //             }
                            //             el.style.backgroundColor = "white"
                            //             el.setAttribute(
                            //                 "id",
                            //                 `${id}_${table_name}_${column_name}`
                            //             )
                            //         }
                            //     })
                            // alert("matched: "+matched)
                            // alert("last: "+naa)
                            // alert("comment: "+comment.comment)
                            // const sourceText = rawText

                            // let begin = -1
                            // let end = -1

                            // // 1️⃣ Find context_before → last index
                            // if (context_before) {
                            //     const idx = sourceText.lastIndexOf(context_before)
                            //     if (idx !== -1) {
                            //         begin = idx + context_before.length
                            //     }
                            // }

                            // // 2️⃣ Fallback to start_index
                            // if (begin === -1 && Number.isInteger(start_index)) {
                            //     begin = start_index
                            // }

                            // // 3️⃣ Find context_after → first index
                            // if (context_after) {
                            //     const idx = sourceText.indexOf(context_after, begin !== -1 ? begin : 0)
                            //     if (idx !== -1) {
                            //         end = idx
                            //     }
                            // }

                            // // 4️⃣ Fallback to end_index
                            // if (end === -1 && Number.isInteger(end_index)) {
                            //     end = end_index
                            // }

                            // // 5️⃣ Ensure valid range
                            // if (begin !== -1 && end !== -1) {
                            //     // alert("begin: "+begin +" end: "+end)
                            //     if (begin >= end) {
                            //         end = begin + 1
                            //     }

                            //     // 6️⃣ Extract text
                            //     const extractedText = sourceText.substring(start_index, end_index).trim()
                            //     // alert("begin: "+begin +" end: "+end+  " extractedText "+extractedText)
                            //     alert("start_index: "+start_index +" end_index: "+end_index+  " extractedText "+extractedText)
                            //     // 7️⃣ Mark extracted text
                            //     if (extractedText) {
                            //         instance.mark(extractedText, {
                            //             separateWordSearch: false,
                            //             accuracy: "partially",
                            //             acrossElements: true,
                            //             each: el => {
                            //                 if (fontColor) {
                            //                     el.style.color = fontColor
                            //                 }
                            //                 el.style.backgroundColor = "white"
                            //                 el.setAttribute(
                            //                     "id",
                            //                     `${id}_${table_name}_${column_name}`
                            //                 )
                            //             }
                            //         })
                            //     }
                            // }
                            // if (matched) return

                            /** STEP 3 — DiffMatchPatch fallback */
                            // const diffs = dmp.diff_main(rawText, selected_text)
                            // dmp.diff_cleanupSemantic(diffs)

                            // let bestMatch = ''
                            // let maxLen = 0

                            // diffs.forEach(([op, text]) => {
                            //     if (op === 0 && text.length > maxLen) {
                            //         bestMatch = text
                            //         maxLen = text.length
                            //     }
                            // })
                            // console.log("bestMatch: "+bestMatch)
                            // if (!bestMatch) return

                            // instance.mark(bestMatch, {
                            //     separateWordSearch: false,
                            //     accuracy: 'partially',
                            //     acrossElements: true,
                            //     each: el => {
                            //         if (fontColor) el.style.color = fontColor
                            //         el.style.backgroundColor = 'white'
                            //         el.id = `${id}_${table_name}_${column_name}`
                            //     }
                            // })

                            // Step 3: Context-based fallback (manual slice)
                            // let start = finalText.indexOf(context_before);
                            // if (start !== -1) start += context_before.length;
                            // else if (typeof start_index === 'number') start = start_index;
                            // else start = 0;

                            // let end = finalText.indexOf(context_after, start);
                            // if (end === -1 && typeof end_index === 'number') end = end_index;
                            // else if (end === -1) end = finalText.length;

                            // if (end > start) {
                            //     const before = finalText.slice(0, start);
                            //     const middle = finalText.slice(start, end) || (selected_text || '[comment]');
                            //     const after = finalText.slice(end);

                            //     finalText = before +
                            //         `<span id="${id}_${table_name}_${column_name}" style="background-color:white;color:${fontColor};">${middle}</span>` +
                            //         after;
                            //     console.log("before: "+before)
                            //     console.log("middle: "+middle)
                            //     console.log("after: "+after)
                            //     return;
                            // }

                            // Step 4: Absolute fallback — insert at beginning
                            // finalText =
                            //     `<span id="${id}_${table_name}_${column_name}" style="background-color:white;color:${fontColor};">${selected_text || '[comment]'}</span>` +
                            //     finalText;
                            // --------------------------------------------
                            // STEP 3: FINAL FALLBACK — manual span injection
                            // ONLY if Mark.js did NOT create highlights
                            // --------------------------------------------
                            // const existing = containerEl.querySelectorAll(
                            //     `span[id="${id}_${table_name}_${column_name}"]`
                            // )
                            // if (!existing.length) {
                            //     let text = containerEl.innerHTML
                            //     let start = -1
                            //     let end = -1

                            //     // 1️⃣ Try using context_before
                            //     if (context_before) {
                            //         const beforeMatch = new RegExp(escapeRegex(context_before))
                            //         const beforeResult = beforeMatch.exec(text)

                            //         if (beforeResult) {
                            //             start = beforeResult.index + beforeResult[0].length
                            //         }
                            //     }

                            //     // 2️⃣ Try using context_after
                            //     if (context_after) {
                            //         const afterMatch = new RegExp(escapeRegex(context_after))
                            //         const afterResult = afterMatch.exec(text)

                            //         if (afterResult) {
                            //             end = afterResult.index
                            //         }
                            //     }

                            //     // 3️⃣ Fallback to stored indexes
                            //     if (start === -1 && typeof start_index === 'number') {
                            //         start = start_index
                            //     }

                            //     if (end === -1 && typeof end_index === 'number') {
                            //         end = end_index
                            //     }

                            //     // 4️⃣ Inject span ONLY if indexes are valid
                            //     if (start !== -1 && end !== -1 && end > start) {
                            //         const before = text.slice(0, start)
                            //         const middle = text.slice(start, end)
                            //         const after = text.slice(end)

                            //         const spanStart = `<span id="${id}_${table_name}_${column_name}" style="background-color:white;color:red;">`
                            //         const spanEnd = `</span>`

                            //         containerEl.innerHTML =
                            //             before + spanStart + middle + spanEnd + after
                            //     }

                            //     const stillNotFound = containerEl.querySelectorAll(
                            //         `span[id="${id}_${table_name}_${column_name}"]`
                            //     )

                            //     if (!stillNotFound.length) {
                            //         const spanStart = `<span id="${id}_${table_name}_${column_name}" style="background-color:white;color:red;">`
                            //         const spanEnd = `</span>`

                            //         containerEl.innerHTML =
                            //             spanStart +
                            //             (selected_text || '[comment]') +
                            //             spanEnd +
                            //             containerEl.innerHTML
                            //     }
                            //     console.log("start"+start);
                            //     console.log("end: "+ned)
                            // }
                        })
                    },
                    renderCommentedText(text, comments, columnName) {
                        if (!text || !comments) return text;

                        const filtered = comments
                            .filter(c => c.column_name === columnName)
                            .filter(c => c.start_index >= 0 && c.end_index > c.start_index && c.start_index < text.length)
                            .sort((a, b) => {
                                // Sort by start index, then by length (longer first)
                                if (a.start_index !== b.start_index) {
                                    return a.start_index - b.start_index;
                                }
                                return (b.end_index - b.start_index) - (a.end_index - a.start_index);
                            });

                        // Track which characters are already highlighted
                        const highlighted = new Array(text.length).fill(false);
                        const highlights = [];

                        // Process comments in order
                        for (const comment of filtered) {
                            const start = comment.start_index;
                            const end = Math.min(comment.end_index, text.length);

                            if (start >= end) continue;

                            // Check how many characters in this range are already highlighted
                            let newHighlightStart = start;
                            while (newHighlightStart < end && highlighted[newHighlightStart]) {
                                newHighlightStart++;
                            }

                            // If there's any unhighlighted portion, add it
                            if (newHighlightStart < end) {
                                let newHighlightEnd = newHighlightStart;
                                while (newHighlightEnd < end && !highlighted[newHighlightEnd]) {
                                    highlighted[newHighlightEnd] = true;
                                    newHighlightEnd++;
                                }

                                highlights.push({
                                    start: newHighlightStart,
                                    end: newHighlightEnd,
                                    comment: comment
                                });
                            }
                        }

                        // Sort highlights by start position
                        highlights.sort((a, b) => a.start - b.start);

                        // Build the result
                        let result = '';
                        let cursor = 0;

                        for (const highlight of highlights) {
                            const { start, end, comment } = highlight;

                            // Add plain text before highlight
                            if (cursor < start) {
                                result += text.slice(cursor, start);
                            }

                            // Add highlighted text
                            const selectedText = text.slice(start, end);
                            result += `<span id="${comment.id}_${comment.table_name}_${comment.column_name}" ` +
                                    `style="background-color: darkorange; color:black;">${selectedText}</span>`;

                            cursor = end;
                        }

                        // Add remaining text
                        if (cursor < text.length) {
                            result += text.slice(cursor);
                        }

                        return result;
                    },

                    // MATCHING FOR RATIONALE, OBJECTIVES, BENEFICIARIES
                    resolvePapsTargetId(paps, columnName, comment) {
                        /// columns that belong to paps text fields
                        const papsColumns = ['beneficiaries', 'objective', 'rationale']

                        // fallback for non-paps columns
                        if (!papsColumns.includes(columnName)) {
                            return `${comment.table_row_id}_${comment.table_name}_${columnName}`
                        }

                        // full candidate ID
                        const fullId = `${comment.id}_${comment.table_name}_${columnName}`

                        // get paps column content safely
                        const columnText = String(paps?.[columnName] ?? '')

                        // check if comment.comment exists exactly within the paps column text
                        if (comment.comment && columnText.includes(comment.comment)) {
                            return fullId
                        }

                        // fallback to column name only
                        return columnName
                    },
                    escapeHtml(str) {
                        if (!str) return '';
                        return str.replace(/&/g, "&amp;")
                                .replace(/</g, "&lt;")
                                .replace(/>/g, "&gt;")
                                .replace(/"/g, "&quot;")
                                .replace(/'/g, "&#039;");
                    },
                    highlightQuillComments(html, comments, columnName) {
                        if (!html || !comments) return html;

                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        const textContent = doc.body.textContent || '';
                        let cursor = 0;

                        // Filter and sort comments by start_index
                        const filtered = comments
                            .filter(c => c.column_name === columnName)
                            .sort((a, b) => a.start_index - b.start_index);

                        const fragments = [];

                        filtered.forEach(comment => {
                            const start = comment.start_index;
                            const end = comment.end_index;

                            if (start < 0 || end <= start || start >= textContent.length) return;

                            // Text before comment
                            if (cursor < start) {
                                fragments.push(this.escapeHtml(textContent.slice(cursor, start)));
                            }

                            // Highlighted text
                            const selectedText = textContent.slice(start, Math.min(end, textContent.length)) || comment.selected_text;
                            fragments.push(`<span id="${comment.id}_${comment.table_name}_${comment.column_name}" style="background-color: darkorange; color:black;">${this.escapeHtml(selectedText)}</span>`);

                            cursor = end;
                        });

                        // Remaining text
                        if (cursor < textContent.length) {
                            fragments.push(this.escapeHtml(textContent.slice(cursor)));
                        }

                        return fragments.join('');
                    },
                    // QUILL COMMENTS - Fuzzy Matching **************************************************************************************************
                    highlightQuillComment({quillRef,comment,columnName}) {
                        if (!quillRef?.getQuill) return;

                        const quill = quillRef.getQuill();
                        const text = quill.getText();

                        let start = comment.start_index;
                        let length = comment.end_index - comment.start_index;

                        // 1️⃣ First attempt: direct index
                        if (
                            start >= 0 &&
                            start + length <= text.length &&
                            text.substring(start, start + length) === comment.selected_text
                        ) {
                            this.applyQuillHighlight(quill, start, length);
                            return;
                        }

                        // 2️⃣ Fallback: fuzzy match using context
                        const index = this.findTextByContext(
                            text,
                            comment.selected_text,
                            comment.context_before,
                            comment.context_after
                        );

                        if (index !== -1) {
                            this.applyQuillHighlight(quill, index, comment.selected_text.length);
                        } else if (columnName !== 'rationale') {
                            // 3️⃣ Fallback to rationale column
                            this.$emit('highlight-fallback-rationale', comment);
                        }
                    },
                    applyQuillHighlight(quill, index, length) {
                        quill.setSelection(index, length, 'silent');

                        quill.formatText(index, length, {
                            background: '#46ff18ff'
                        }, 'silent');

                        quill.scrollIntoView();

                        // Remove highlight after animation
                        setTimeout(() => {
                            quill.formatText(index, length, {
                                background: false
                            }, 'silent');
                        }, 2000);
                    },
                    findTextByContext(text, selected, before, after) {
                        const dmp = new DiffMatchPatch();

                        const searchBase = `${before}${selected}${after}`;
                        const patch = dmp.patch_make(searchBase, text);
                        const result = dmp.patch_apply(patch, text);

                        if (!result[1].includes(true)) return -1;

                        const idx = text.indexOf(selected);
                        return idx !== -1 ? idx : -1;
                    },
                    // Levenshtein distance (classic)
                    // levenshtein(a, b) {
                    //     if (!a || !b) return (a === b) ? 0 : Math.max(a.length, b.length);
                    //     const m = a.length, n = b.length;
                    //     const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
                    //     for (let i = 0; i <= m; i++) dp[i][0] = i;
                    //     for (let j = 0; j <= n; j++) dp[0][j] = j;
                    //     for (let i = 1; i <= m; i++) {
                    //     for (let j = 1; j <= n; j++) {
                    //         const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                    //         dp[i][j] = Math.min(
                    //         dp[i - 1][j] + 1,
                    //         dp[i][j - 1] + 1,
                    //         dp[i - 1][j - 1] + cost
                    //         );
                    //     }
                    //     }
                    //     return dp[m][n];
                    // },

                    // find best fuzzy match of `needle` inside `haystack`
                    // findBestFuzzyMatch(haystack, needle, options = {}) {
                    //     const text = (haystack || "");
                    //     const target = (needle || "").trim();
                    //     const result = { start: -1, end: -1, score: 0 };

                    //     if (!target) return result;

                    //     // fast exact match first
                    //     const exactIdx = text.indexOf(target);
                    //     if (exactIdx !== -1) {
                    //     result.start = exactIdx;
                    //     result.end = exactIdx + target.length;
                    //     result.score = 1;
                    //     return result;
                    //     }

                    //     // sliding window fuzzy search
                    //     const FUZZY_THRESHOLD = options.threshold ?? 0.6; // tune this
                    //     const MAX_RELATIVE_LENGTH_MARGIN = options.margin ?? 0.4; // ±40% length window
                    //     const tlen = target.length;
                    //     if (tlen === 0) return result;

                    //     const minLen = Math.max(1, Math.floor(tlen * (1 - MAX_RELATIVE_LENGTH_MARGIN)));
                    //     const maxLen = Math.min(text.length, Math.ceil(tlen * (1 + MAX_RELATIVE_LENGTH_MARGIN)));

                    //     let bestScore = -1;
                    //     let bestStart = -1;
                    //     let bestEnd = -1;

                    //     // To limit work: if haystack is huge, sample positions with step
                    //     const maxCharsToScan = 5000;
                    //     const step = text.length > maxCharsToScan ? Math.ceil(text.length / maxCharsToScan) : 1;

                    //     for (let winLen = minLen; winLen <= maxLen; winLen++) {
                    //     for (let start = 0; start + winLen <= text.length; start += step) {
                    //         const sub = text.substr(start, winLen);
                    //         // quick filter: common prefix/char presence speeds up
                    //         if (!this.quickFilter(target, sub)) continue;
                    //         const dist = this.levenshtein(target, sub);
                    //         const normalizer = Math.max(target.length, sub.length);
                    //         const score = 1 - (dist / normalizer); // 1 = perfect
                    //         if (score > bestScore) {
                    //         bestScore = score;
                    //         bestStart = start;
                    //         bestEnd = start + winLen;
                    //         // early exit if perfect or very good
                    //         if (bestScore >= 0.99) break;
                    //         }
                    //     }
                    //     if (bestScore >= 0.99) break;
                    //     }

                    //     if (bestScore >= FUZZY_THRESHOLD) {
                    //     result.start = bestStart;
                    //     result.end = bestEnd;
                    //     result.score = bestScore;
                    //     }
                    //     return result;
                    // },

                    // quick heuristic filter to avoid expensive Levenshtein on obviously different strings
                    // quickFilter(a, b) {
                    //     // require at least one significant char in common (ignores tiny strings)
                    //     if (!a || !b) return false;
                    //     const A = a.replace(/\s+/g, '').toLowerCase();
                    //     const B = b.replace(/\s+/g, '').toLowerCase();
                    //     // if either is very short, just allow
                    //     if (A.length <= 3 || B.length <= 3) return true;
                    //     // check if first 2 chars appear
                    //     if (B.includes(A.slice(0, 2))) return true;
                    //     // or share any 3-char ngram
                    //     for (let i = 0; i < A.length - 2; i++) {
                    //     if (B.includes(A.substr(i, 3))) return true;
                    //     }
                    //     return false;
                    // },

                    // Highlighted text with fuzzy fallback
                    // highlightedTextGlobal(all_comments, passed_text, column) {
                    //     const text = passed_text || "";
                    //     let result = "";
                    //     let cursor = 0;

                    //     // sort comments for that column
                    //     const items = all_comments
                    //     .filter(c => c.column_name === column)
                    //     .sort((a, b) => (Number(a.start_index) || 0) - (Number(b.start_index) || 0));

                    //     items.forEach(c => {
                    //         // determine start/end to use
                    //         let start = (typeof c.start_index !== 'undefined' && c.start_index !== null) ? Number(c.start_index) : -1;
                    //         let end = (typeof c.end_index !== 'undefined' && c.end_index !== null) ? Number(c.end_index) : -1;
                    //         let usedScore = c.fuzzy_score ?? null;

                    //         // If the stored indices don't produce the expected selected_text, or indices absent, try fuzzy
                    //         const selected = (c.selected_text || "").trim();

                    //         const indicesProduceMatch = (start >= 0 && end > start && text.slice(start, end).trim().length > 0);

                    //         let acceptIndices = false;
                    //         if (indicesProduceMatch) {
                    //             const slice = text.slice(start, end).trim();
                    //             // if exact or close to exact, accept
                    //             if (slice === selected) {
                    //             acceptIndices = true;
                    //             usedScore = 1;
                    //             } else if (selected && slice.length > 0) {
                    //             // small heuristic: if overlap > 0.8 of shorter length accept
                    //             const minLen = Math.min(slice.length, selected.length);
                    //             const commonPrefix = this.commonPrefixLength(slice, selected);
                    //             if (commonPrefix / minLen > 0.8) {
                    //                 acceptIndices = true;
                    //             }
                    //             } else {
                    //             acceptIndices = false;
                    //             }
                    //         }

                    //         if (!acceptIndices && selected) {
                    //             // try fuzzy match
                    //             const fuzzy = this.findBestFuzzyMatch(text, selected, { threshold: 0.6, margin: 0.4 });
                    //             if (fuzzy.start >= 0) {
                    //             start = fuzzy.start;
                    //             end = fuzzy.end;
                    //             usedScore = fuzzy.score;
                    //             } else {
                    //             // keep original indices OR skip highlight if not valid
                    //             if (!(indicesProduceMatch)) {
                    //                 // nothing reliable — skip highlighting for this comment
                    //                 start = -1; end = -1; usedScore = 0;
                    //             }
                    //             }
                    //         }

                    //         // clamp/validate
                    //         if (start < 0 || end <= start || start >= text.length) {
                    //             // can't highlight: just append slice from cursor up to next comment (or full)
                    //             return; // skip this comment (we keep ordering)
                    //         }

                    //         // append normal text before highlight
                    //         result += text.slice(cursor, start);

                    //         // style by status
                    //         const style = c.comment_status === '1' ? "" : "color:#fa7602; font-weight:bold;";
                    //         // include tooltip for certain columns? you already handle title elsewhere
                    //         result += `<span style="${style}" id="${c.id}_${c.table_name}_${c.column_name}" data-fuzzy-score="${usedScore ?? ''}">
                    //             ${this.escapeHtml(text.slice(start, end))}
                    //         </span>`;

                    //         cursor = end;
                    //     });

                    //     result += text.slice(cursor);
                    //     return result;
                    // },

                    // utility: escape HTML to avoid injection when inserting into DOM as innerHTML
                    // escapeHtml(str) {
                    //     if (!str) return '';
                    //     return str
                    //     .replace(/&/g, '&amp;')
                    //     .replace(/</g, '&lt;')
                    //     .replace(/>/g, '&gt;')
                    //     .replace(/"/g, '&quot;')
                    //     .replace(/'/g, '&#039;');
                    // },

                    // commonPrefixLength(a, b) {
                    //     const m = Math.min(a.length, b.length);
                    //     let i = 0;
                    //     while (i < m && a[i] === b[i]) i++;
                    //     return i;
                    // },
                    // **************************************************************************************************************************
                    // GET SELECTION
                    highlightSelection() {
                        const sel = window.getSelection();
                        if (!sel.rangeCount) return;

                        const range = sel.getRangeAt(0).cloneRange();

                        // Create highlight wrapper
                        const mark = document.createElement("span");
                        mark.className = "text-highlight";
                        mark.style.backgroundColor = "#6dfa20";
                        mark.style.color = "black";

                        // Surround selected text
                        try {
                            range.surroundContents(mark);
                        } catch (e) {
                            // If selection crosses multiple nodes, fallback
                            console.warn("Complex selection – wrapping failed", e);
                            return;
                        }
                    },
                    // REMOVE SELECTION HIGHLIGHTING
                    removeHighlights() {
                        // Remove all highlights
                        const highlights = document.querySelectorAll('.text-highlight');

                        highlights.forEach(highlight => {
                            // Unwrap the span element
                            highlight.replaceWith(...highlight.childNodes);
                        });

                        // Clear any existing text selection
                        window.getSelection().removeAllRanges();
                    },
                    // removeHighlights(column) {
                    //     // Select the container that holds your text
                    //     const container = this.$refs[column];
                    //     if (!container) return;

                    //     // Find all spans used for temporary highlights
                    //     const highlights = container.querySelectorAll("span.temp-highlight");

                    //     highlights.forEach(span => {
                    //         // Replace the span with its text content (keep text)
                    //         span.replaceWith(...span.childNodes);
                    //     });
                    // }
                    formatDateTime(dateString) {
                        if (!dateString) return '';

                        const date = new Date(dateString);

                        const options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                        };

                        const datePart = date.toLocaleDateString('en-US', options);

                        const timePart = date.toLocaleTimeString('en-US', {
                        hour12: true,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                        });

                        return `${datePart} - ${timePart}`;
                    },
                    // SOURCE OF FUNDS
                    sourceOfFundsText(code) {
                        const mapping = {
                            'gen_fund': 'General Fund',
                            'dev': '20% Development Fund',
                            'ldrrmf': 'LDRRMF',
                            'other': 'Other Sources',
                            '':''

                        };
                        return mapping[code] || code;
                    },
                    // DATE NUMBER TO FORMATTED MONTH DAY YEAR
                    formatMonthDayYear(dateStr) {
                        if (!dateStr) return '';
                        const parts = dateStr.split('-');
                        if (parts.length !== 3) return dateStr; // fallback to original

                        const year = parseInt(parts[0], 10);
                        const month = parseInt(parts[1], 10) - 1; // months are 0-indexed in JS
                        const day = parseInt(parts[2], 10);

                        const date = new Date(year, month, day);
                        // Check if date is valid
                        if (isNaN(date.getTime())) return dateStr;

                        return date.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        });
                    },
                    getTypeFullName(type) {
                        const offices = {
                            sp: 'Sanguniang Panlalawigan',
                            pbo: 'Provincial Budget Office',
                            ppdo: 'Provincial Planning and Development Office',
                        };

                        return offices[type] || '';
                    }
                }
            })
            .mount(el)
    },
    title: title => 'PPA: ' + title
})

// if (!Vue.options.filters.escapeHtml) {
//   Vue.filter('escapeHtml', function(text) {
//     if (!text) return '';
//     const div = document.createElement('div');
//     div.textContent = text;
//     return div.innerHTML;
//   });
// }
