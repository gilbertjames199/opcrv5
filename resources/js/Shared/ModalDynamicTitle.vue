<template>
    <div class="permissions-modal">
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-xl draggable-dialog" ref="dialog">
                <div class="d-flex justify-content-center" >
                    <!-- style="width: 100% !important; height: 40% !important; " -->
                    <div class="modal-content resizable-content" ref="content" >
                        <div class="modal-header draggable-header" style="background-color:#030014" ref="header">
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

                        <!-- 🔽 Resize handle -->
                        <div class="resize-handle" ref="resizeHandle"></div>
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
        this.makeDraggable()
        this.makeResizable()
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
        makeDraggable() {
            const dialog = this.$refs.dialog
            const header = this.$refs.header

            let isDragging = false
            let startX = 0
            let startY = 0
            let currentX = 0
            let currentY = 0

            header.style.cursor = 'move'

            header.addEventListener('mousedown', e => {
                isDragging = true
                startX = e.clientX - currentX
                startY = e.clientY - currentY
                document.body.style.userSelect = 'none'
            })

            document.addEventListener('mousemove', e => {
                if (!isDragging) return

                currentX = e.clientX - startX
                currentY = e.clientY - startY

                dialog.style.transform = `translate(${currentX}px, ${currentY}px)`
            })

            document.addEventListener('mouseup', () => {
                isDragging = false
                document.body.style.userSelect = ''
            })
        },
        /* ======================
        RESIZABLE
        ====================== */
        makeResizable() {
            const content = this.$refs.content
            const handle = this.$refs.resizeHandle

            let startX, startY, startWidth, startHeight

            handle.addEventListener('mousedown', e => {
                e.preventDefault()
                startX = e.clientX
                startY = e.clientY
                startWidth = content.offsetWidth
                startHeight = content.offsetHeight

                document.body.style.userSelect = 'none'

                document.addEventListener('mousemove', resize)
                document.addEventListener('mouseup', stopResize)
            })

            const resize = e => {
                const newWidth = startWidth + (e.clientX - startX)
                const newHeight = startHeight + (e.clientY - startY)

                content.style.width = Math.max(newWidth, 500) + 'px'
                content.style.height = Math.max(newHeight, 300) + 'px'
            }

            const stopResize = () => {
                document.removeEventListener('mousemove', resize)
                document.removeEventListener('mouseup', stopResize)
                document.body.style.userSelect = ''
            }
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
    .modal {
        z-index: 9999 !important;
    }

    .modal {
        display: block;
        z-index: 9999 !important;
    }

    .draggable-header {
        cursor: move;
    }

    .draggable-dialog {
        transition: none;
    }

    .resizable-content {
        position: relative;
        min-width: 500px;
        min-height: 300px;
    }

    /* .draggable-header {
        cursor: move;
    } */

    .resize-handle {
        position: absolute;
        width: 16px;
        height: 16px;
        right: 0;
        bottom: 0;
        cursor: se-resize;
        background: transparent;
    }
  </style>
