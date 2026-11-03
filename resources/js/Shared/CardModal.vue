<template>
  <div class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75" v-if="showing">
    The modal will go here.
  </div>
  
</template>
 
<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean
    }
  }
}
</script>