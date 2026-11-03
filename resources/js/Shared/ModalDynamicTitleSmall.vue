<template>
    <div class="permissions-modal">
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="d-flex justify-content-center">
                    <div class="modal-content" style="width: 150% !important; height: 40% !important; ">
                        <div class="modal-header" style="background-color:#030014">
                            <h4 class="modal-title" style="color: #ffe819; text-align: center !important;">
                                <b>{{ title }}</b>
                            </h4>
                            <button type="button" class="btn btn-danger" style="font-weight: bold; color: white" data-dismiss="modal" aria-label="Close" @click="closeModal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <slot></slot>
                        </div>
                        <div class="modal-footer" style="background-color:#090137">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  </template>

  <script>
    export default {
      props: {
          //userId: Object,
          title: String,
      },
      data(){
          return{
              value: null,
          }
      },
      mounted(){

      },
      methods: {
        logU_ID(){

        },
        closeModal() {
          this.$emit('close-modal-event');
        },
        saveChanges() {
          this.closeModal();
        },
        loadPermissions(){

        }
      }
    }
  </script>

  <style scoped>
    /* Override default value of 'none' */
    .modal {
      display: block;
    }
  </style>
