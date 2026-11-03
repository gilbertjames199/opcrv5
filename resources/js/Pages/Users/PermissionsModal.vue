<template>
  <div class="permissions-modal">
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">User Permissions </h4>
            <button type="button" class="btn btn-danger" style="font-weight: bold; color: white" data-dismiss="modal" aria-label="Close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!--<p>Modal body text goes here.</p>
            <multiselect v-model="value" :options="options" mode="tags"/>-->
            <slot></slot>
          </div>
          <div class="modal-footer">
            <!--<button type="button" class="btn btn-primary" @click="saveChanges">Save changes</button>
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>-->
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
    },
    data(){
        return{
            //my_id: this.props.userId,
            value: null,
            options: [
                'Batman',
                'Robin',
                'Joker',
                ],
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
