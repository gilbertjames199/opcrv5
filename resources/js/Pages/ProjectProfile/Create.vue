<template>
    <div class="relative row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Project Profile</h3>
            <Link href="/projectprofile">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>

        <!-- <div class="col-md-8">
            <button class="btn btn-secondary" @click="showModal" :disabled="submitted">Permissions</button>
        </div> -->

        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <input type="hidden" required>

                <label for="">PROJECT TITLE</label>
                <input type="text" v-model="form.project_title" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.project_title">{{ form.errors.project_title }}</div>

                <label for="">RATIONALE</label>
                <fieldset>
                    <button class="fontStyle" type="button" onclick="document.execCommand('italic',false,null);"
                        title="Italicize Highlighted Text">
                        <i>I</i>
                    </button>
                    <button class="fontStyle" type="button" onclick="document.execCommand( 'bold',false,null);"
                        title="Bold Highlighted Text">
                        <b>B</b>
                    </button>
                    <button class="fontStyle" type="button" onclick="document.execCommand( 'underline',false,null);"
                        title='Underline Highlighted Text'>
                        <u>U</u>
                    </button>
                    <button class="fontStyle" type="button" onclick="document.execCommand( 'insertOrderedList',false,null);"
                        title='Numbering'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor"
                            class="bi bi-list-ol" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z" />
                            <path
                                d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z" />
                        </svg>
                    </button>
                    <button class="fontStyle" type="button"
                        onclick="document.execCommand( 'insertUnorderedList',false,null);" title='Bullets'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor"
                            class="bi bi-list-ul" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                    </button>
                </fieldset>
                <fieldset id="form.rationale" contenteditable="true">
                    <div contenteditable="true"
                        style="word-wrap: break-word; height: 400px; width: 400px; background-color: #FFFFFF; text-align: left;"
                        :value="form.rationale">
                    </div>
                </fieldset>

                <div class="fs-6 c-red-500" v-if="form.errors.project_title">{{ form.errors.project_title }}</div>

                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">

                <button type="button" class="btn btn-primary mt-3  text-white" @click="submit()"
                    :disabled="form.processing">
                    Save changes
                </button>
            </form>
        </div>

    </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
import Places from "@/Shared/PlacesShared";
//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

export default {
    props: {
        editData: Object
    },
    // components: {
    //BootstrapModalNoJquery,

    //   Places: () => new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(Places)
    //     }, 2000)
    // })

    // },
    data() {
        return {
            submitted: false,
            form: useForm({
                rationale: "",
                id: null
            }),
            pageTitle: ""
        };
    },

    mounted() {

        if (this.editData !== undefined) {
            // if(this.bari){
            //     this.bar=this.bari
            // }
            this.pageTitle = "Edit"
            this.form.goal_description = this.editData.goal_description
            this.form.id = this.editData.id
        } else {
            this.pageTitle = "Create"
        }

    },

    methods: {
        submit() {
            alert("rationale: " + this.form.rationale + "\nTitle" + this.form.title);
            // this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4);
            //alert(this.form.target_qty);
            if (this.editData !== undefined) {
                this.form.patch("/SDG/" + this.form.id, this.form);
            } else {
                this.form.post("/SDG");
            }
        },
        // updateContent(event){
        //     this.form.rationale=event.target.innerHTML
        // }
        formatText(type) {
            var textarea = document.querySelector('textarea');
            var start = textarea.selectionStart;
            var end = textarea.selectionEnd;
            var selectedText = textarea.value.slice(start, end);

            switch (type) {
                case 'bold':
                    //textarea.value = textarea.value.slice(0, start) + '<b>' + selectedText + '</b>' + textarea.value.slice(end);
                    document.execCommand('bold');
                    break;
                case 'underline':
                    textarea.value = textarea.value.slice(0, start) + '<u>' + selectedText + '</u>' + textarea.value.slice(end);
                    document.execCommand('underline');
                    break;
                case 'ordered-list':
                    textarea.value = textarea.value.slice(0, start) + '<ol><li>' + selectedText + '</li></ol>' + textarea.value.slice(end);
                    document.execCommand('insertOrderedList');
                    break;
                case 'unordered-list':
                    textarea.value = textarea.value.slice(0, start) + '<ul><li>' + selectedText + '</li></ul>' + textarea.value.slice(end);
                    document.execCommand('insertUnorderedList');
                    break;
            }

            textarea.selectionStart = start;
            textarea.selectionEnd = end;
            this.form.rationale = textarea.value;
        }

    },
};
</script>
<style>
:root {
    font: 400 2ch/1.25 Consolas;
}


#editor {
    height: 100px;
    width: 375px;
    margin: 10px auto 0;
}

fieldset {
    margin: 2px auto 15px;
    width: 375px;
}

button {
    width: 5ex;
    text-align: center;
    padding: 1px 3px;
}</style>
