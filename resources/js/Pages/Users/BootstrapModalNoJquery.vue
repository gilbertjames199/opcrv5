<template>
  <div class="bootstrap-modal-no-jquery">
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Permissions</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="saveChanges">
              <span aria-hidden="true">&times;</span>
              
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
              
              <multiselect v-model="value" :options="options" mode="tags"/>
          </div>

          <div class="modal-footer">
            <!--
            <button type="button" class="btn btn-primary" @click="saveChanges">Save changes</button>
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
            -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
        permissions: Object,
    },
    data(){
        return{
            value: null,
            options: [
                'Batman',
                'Robin',
                'Joker',
                ],
        }
    },
    methods: {
      closeModal() {
        this.$emit('close-modal-event');
      },
      saveChanges() {
        this.closeModal();
      },
      permissionsValue(){

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