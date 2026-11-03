<template>
    <div>
      <div ref="editorContainer"></div>
    </div>
  </template>

  <script>
  export default {
    name: 'QuillEditor',
    props: {
      modelValue: String
    },
    emits: ['update:modelValue'],
    mounted() {
      this.editor = new window.Quill(this.$refs.editorContainer, {
        theme: 'snow',
        modules: {
          table: false,
          'better-table': {
            operationMenu: {
              items: {
                unmergeCells: { text: 'Unmerge Cells' }
              }
            }
          },
          toolbar: {
            container: [
              ['bold', 'italic', 'underline'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link'],
              ['clean'],
              ['table']
            ],
            handlers: {
              table: function () {
                const table = this.quill.getModule('better-table')
                table.insertTable(3, 3)
              }
            }
          }
        }
      });

      // Set initial content
      if (this.modelValue) {
        this.editor.root.innerHTML = this.modelValue;
      }

      // Sync changes
      this.editor.on('text-change', () => {
        this.$emit('update:modelValue', this.editor.root.innerHTML);
      });
    }
  };
  </script>

  <style scoped>
  /* Optional: Make sure it expands nicely */
  .editor-container {
    min-height: 300px;
  }
  </style>
