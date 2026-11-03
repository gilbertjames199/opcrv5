<template>
    <div class="permissions-modal">
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg draggable-dialog" ref="dialog">
                <div class="d-flex justify-content-center">
                    <div class="modal-content resizable-content" ref="content">
                        <div class="modal-header draggable-header" style="background-color:#030014" ref="header">
                            <h4 class="modal-title" style="color: #ffe819; text-align: center !important;">
                                <b>Disable/Enable Annual Submissions</b>
                            </h4>
                            <button type="button" class="btn btn-danger" style="font-weight: bold; color: white" data-dismiss="modal" aria-label="Close" @click="closeModal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <table class="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>Year</th>
                                        <th class="text-center">Allow Submission</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- {{ localAllowed }} -->
                                    <tr v-for="item in localAllowed" :key="item.id">
                                        <td class="fw-medium">{{ item.year }}</td>
                                        <td class="text-center">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    :id="`allow-submission-${item.id}`"
                                                    :checked="item.allow_submission === '1' || item.allow_submission === 1"
                                                    @change="toggleAllowSubmission(item)"
                                                >
                                                <label class="form-check-label" :for="`allow-submission-${item.id}`">
                                                    {{ item.allow_submission === '1' || item.allow_submission === 1 ? 'Enabled' : 'Disabled' }}
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer" style="background-color:#090137">
                            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                        </div>

                        <!-- Resize handle -->
                        <div class="resize-handle" ref="resizeHandle"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ModalAllowSubmission',
    props: {
        allowed: {
            type: [Object, Array],
            required: false,
            default: () => []
        }
    },
    data() {
        return {
            localAllowed: []
        }
    },
    watch: {
        allowed: {
            handler(newVal) {
                if (!newVal) {
                    this.localAllowed = [];
                    return;
                }
                const cloned = JSON.parse(JSON.stringify(newVal));
                this.localAllowed = Array.isArray(cloned) ? cloned : Object.values(cloned);
            },
            immediate: true,
            deep: true
        }
    },
    mounted() {
        this.makeDraggable();
        this.makeResizable();
    },
    methods: {
        closeModal() {
            this.$emit('close-modal-event');
        },
        toggleAllowSubmission(item) {
            const newValue = item.allow_submission === '1' || item.allow_submission === 1 ? '0' : '1';
            item.allow_submission = newValue;

            this.updateSubmissionStatus(item.id, newValue);
        },
        updateSubmissionStatus(id, status) {
            axios.post(`/allowed-submissions/update/${id}`, {
                allow_submission: status
            })
            .then(response => {
                console.log('Submission status updated successfully', response.data);
                this.$emit('submission-updated');
            })
            .catch(error => {
                console.error('Failed to update submission status:', error);
                alert('Failed to update submission status. Please try again.');
            });
        },
        makeDraggable() {
            const dialog = this.$refs.dialog;
            const header = this.$refs.header;

            let isDragging = false;
            let startX = 0;
            let startY = 0;
            let currentX = 0;
            let currentY = 0;

            header.style.cursor = 'move';

            header.addEventListener('mousedown', e => {
                isDragging = true;
                startX = e.clientX - currentX;
                startY = e.clientY - currentY;
                document.body.style.userSelect = 'none';
            });

            document.addEventListener('mousemove', e => {
                if (!isDragging) return;

                currentX = e.clientX - startX;
                currentY = e.clientY - startY;

                dialog.style.transform = `translate(${currentX}px, ${currentY}px)`;
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
                document.body.style.userSelect = '';
            });
        },
        makeResizable() {
            const content = this.$refs.content;
            const handle = this.$refs.resizeHandle;

            let startX, startY, startWidth, startHeight;

            handle.addEventListener('mousedown', e => {
                e.preventDefault();

                startX = e.clientX;
                startY = e.clientY;
                startWidth = content.offsetWidth;
                startHeight = content.offsetHeight;

                const handleMouseMove = e => {
                    const newWidth = startWidth + (e.clientX - startX);
                    const newHeight = startHeight + (e.clientY - startY);

                    if (newWidth > 300) content.style.width = newWidth + 'px';
                    if (newHeight > 200) content.style.height = newHeight + 'px';
                };

                const handleMouseUp = () => {
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
            });
        }
    }
};
</script>

<style scoped>
.permissions-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal {
    display: block;
    background-color: transparent;
}

.modal-dialog {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
}

.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
    overflow-y: auto;
    max-height: 60vh;
}

.modal-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
}

.resize-handle {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, transparent 50%, #ccc 50%);
    cursor: se-resize;
}

.form-check-input:checked {
    background-color: #198754;
    border-color: #198754;
}
</style>
