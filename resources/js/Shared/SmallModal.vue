<template>
    <div
        v-if="visible"
        class="small-modal"
        :style="modalStyle"
        @mousedown.stop
    >
        <!-- Header -->
        <div
            class="modal-header"
            @mousedown.prevent="startDrag"
        >
            <span class="modal-title">{{ title }}</span>
            <button class="close-btn" @click="close">×</button>
        </div>

        <!-- Body -->
        <div class="modal-body">
            <slot />
        </div>

        <!-- Resize Handle -->
        <!-- <div
            class="resize-handle"
            @mousedown.prevent="startResize"
        ></div> -->
        <!-- Resize Handle (Right) -->
        <div
            class="resize-handle resize-right"
            @mousedown.prevent="startResize('right', $event)"
        ></div>

        <!-- Resize Handle (Left) -->
        <div
            class="resize-handle resize-left"
            @mousedown.prevent="startResize('left', $event)"
        ></div>
    </div>
</template>

<script>
export default {
    name: 'SmallModal',

    props: {
        title: {
            type: String,
            default: 'Modal'
        },
        modelValue: {
            type: Boolean,
            default: false
        },
        width: {
            type: Number,
            default: 350 // roughly Bootstrap col-3
        }
    },

    data() {
        return {
            visible: this.modelValue,
            posX: 0,
            posY: 50,
            modalWidth: this.width,
            // modalWidth: Math.min(Math.max(baseWidth, 260), 420),
            modalHeight: 450,
            dragging: false,
            resizing: false,
            resizeDir: null,
            startX: 0,
            startY: 0
        }
    },

    computed: {
        modalStyle() {
            return {
                top: this.posY + 'px',
                left: this.posX + 'px',
                width: this.modalWidth + 'px',
                height: this.modalHeight + 'px',
                zIndex: 9999
            }
        }
    },

    watch: {
        modelValue(val) {
            this.visible = val
        }
    },

    mounted() {
        this.posX = window.innerWidth - this.modalWidth - 20 // right side offset
        this.posY = 60
        // this.setInitialPosition()

        // window.addEventListener('resize', this.handleResize)
        document.addEventListener('mousemove', this.onMouseMove)
        document.addEventListener('mouseup', this.onMouseUp)
    },

    beforeUnmount() {
        document.removeEventListener('mousemove', this.onMouseMove)
        document.removeEventListener('mouseup', this.onMouseUp)
    },

    methods: {
        close() {
            this.visible = false
            this.$emit('update:modelValue', false)
        },

        startDrag(e) {
            this.dragging = true
            this.startX = e.clientX - this.posX
            this.startY = e.clientY - this.posY
        },

        // startResize(e) {
        //     this.resizing = true
        //     this.startX = e.clientX
        //     this.startY = e.clientY
        // },
        startResize(direction, e) {
            this.resizing = true
            this.resizeDir = direction
            this.startX = e.clientX
            this.startY = e.clientY
        },
        onMouseMove(e) {
            const MIN_SIZE_WIDTH = 330
            const MIN_SIZE_HEIGHT = 450
            if (this.resizing && e.buttons !== 1) {
                this.onMouseUp()
                return
            }
            if (this.dragging) {
                this.posX = e.clientX - this.startX
                this.posY = e.clientY - this.startY
            }

            if (this.resizing) {
                const dx = e.clientX - this.startX
                const dy = e.clientY - this.startY

                /* ---- WIDTH ---- */
                if (this.resizeDir === 'right') {
                    this.modalWidth = Math.max(
                        MIN_SIZE_WIDTH,
                        this.modalWidth + dx
                    )
                }

                if (this.resizeDir === 'left') {
                    const newWidth = this.modalWidth - dx

                    if (newWidth < MIN_SIZE_WIDTH) {
                        this.posX += this.modalWidth - MIN_SIZE_WIDTH
                        this.modalWidth = MIN_SIZE_WIDTH
                    } else {
                        this.modalWidth = newWidth
                        this.posX += dx
                    }
                }

                /* ---- HEIGHT ---- */
                this.modalHeight = Math.max(
                    MIN_SIZE_HEIGHT,
                    this.modalHeight + dy
                )

                this.startX = e.clientX
                this.startY = e.clientY
            }
        },

        onMouseUp() {
            this.dragging = false
            this.resizing = false
            this.resizeDir = null
        },
        // onMouseMove(e) {
        //     if (this.dragging) {
        //         this.posX = e.clientX - this.startX
        //         this.posY = e.clientY - this.startY
        //     }

        //     if (this.resizing) {
        //         this.modalWidth += e.clientX - this.startX
        //         this.modalHeight += e.clientY - this.startY
        //         this.startX = e.clientX
        //         this.startY = e.clientY
        //     }
        // },

        // onMouseUp() {
        //     this.dragging = false
        //     this.resizing = false
        // },

        // setInitialPosition() {
        //     this.modalWidth = Math.min(
        //         Math.max(window.innerWidth * 0.25, 260),
        //         420
        //     )

        //     this.posX = window.innerWidth - this.modalWidth - 20
        //     this.posY = 60
        // },

        // handleResize() {
        //     const newWidth = Math.min(
        //         Math.max(window.innerWidth * 0.25, 260),
        //         420
        //     )

        //     this.modalWidth = newWidth

        //     // keep it inside viewport
        //     this.posX = Math.min(
        //         this.posX,
        //         window.innerWidth - this.modalWidth - 10
        //     )
        // },
    }
}
</script>

<style scoped>
.small-modal {
    position: fixed;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 6px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    pointer-events: auto;
}

/* Header */
.modal-header {
    cursor: move;
    padding: 8px 10px;
    background: rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}

.modal-title {
    font-size: 13px;
    font-weight: 600;
}

.close-btn {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    line-height: 1;
}

/* Body */
.modal-body {
    padding: 10px;
    font-size: 13px;
    height: calc(100% - 36px);
    overflow: auto;
}

/* Resize Handle */
/* .resize-handle {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 12px;
    height: 12px;
    cursor: nwse-resize;
    background: rgba(0, 0, 0, 0.2);
} */
 /* Resize Handles */
.resize-handle {
    position: absolute;
    bottom: 2px;
    width: 12px;
    height: 12px;
    background: rgba(0, 0, 0, 0.25);
}

.resize-right {
    right: 2px;
    cursor: nwse-resize;
}

.resize-left {
    left: 2px;
    cursor: nesw-resize;
}
</style>
