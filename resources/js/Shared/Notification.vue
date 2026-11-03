<template>
    <div class="position-fixed top-0 end-0 p-3" style="z-index: 1000">
        <div class="toast align-items-center" role="alert" aria-atomic="true" aria-live="polite" data-bs-autohide="true"
            data-bs-delay="5000">
            <!-- <div class="d-flex text-white bg-gradient-success" v-if="$page.props.flash.message !== null">
                <div class="toast-body">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-backspace-fill"
                        viewBox="0 0 16 16" style="fill: #94ffb0;">
                        <path
                            d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223Z" />
                        <path
                            d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z" />
                        <path
                            d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z" />
                        <path
                            d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z" />
                    </svg>
                    {{ $page.props.flash.message }}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div> -->

            <!-- <div class="d-flex text-white bg-gradient-danger" v-if="$page.props.flash.error !== null">
                <div class="toast-body">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-backspace-fill"
                        viewBox="0 0 16 16" style="fill: #FF5733;">
                        <path
                            d="M8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1Z" />
                        <path
                            d="M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7Zm6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.552 4.552 0 0 1 .23-2.002Zm-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.507 4.507 0 0 1-1.3-1.905Z" />
                        <path
                            d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5Zm0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
                    </svg>
                    &nbsp;<b>{{ $page.props.flash.error }}</b>
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div> -->

            <!-- <div class="d-flex text-white bg-gradient-info" v-if="$page.props.flash.info !== null">
                <div class="toast-body">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-backspace-fill"
                        viewBox="0 0 16 16" style="fill: #b8f8ff;">
                        <path
                            d="M8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1Z" />
                        <path
                            d="M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7Zm6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.552 4.552 0 0 1 .23-2.002Zm-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.507 4.507 0 0 1-1.3-1.905Zm3.631-4.538c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                    </svg>
                    {{ $page.props.flash.info }}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div> -->

            <!-- <div class="d-flex text-white bg-gradient-deleted" v-if="$page.props.flash.deleted !== null">
                <div class="toast-body">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-backspace-fill"
                        viewBox="0 0 16 16" style="fill: #f46c89;">
                        <path
                            d="M13.879 10.414a2.501 2.501 0 0 0-3.465 3.465l3.465-3.465Zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465Zm-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95ZM8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1Z" />
                        <path
                            d="M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7Zm6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.552 4.552 0 0 1 .23-2.002Zm-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.507 4.507 0 0 1-1.3-1.905Z" />
                    </svg>
                    {{ $page.props.flash.deleted }}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div> -->

            <!--**********************-->
            <!-- <div class="d-flex text-white bg-success" v-if="$page.props.flash.message !== null">
                <div class="toast-body">
                    {{$page.props.flash.message}}
            </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>

            <div class="d-flex text-white bg-danger" v-if="$page.props.flash.error !== null">
                <div class="toast-body">
                    {{$page.props.flash.error}}
            </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div> -->

        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    watch: {
        '$page.props.flash': {
            handler(value) {

                if (value.message) {
                    this.$swal({
                        icon: 'success',
                        iconColor: 'white',
                        title: value.message,
                        timer: 5000, // Set duration
                        timerProgressBar: true,
                        customClass: {
                            popup: `bg-gradient-success`
                        }
                    });
                } else if (value.error) {
                    this.$swal({
                        icon: 'error',
                        iconColor: 'white',
                        title: value.error,
                        timer: 5000, // Set duration
                        timerProgressBar: true,
                        customClass: {
                            popup: `bg-gradient-danger`
                        }
                    });
                } else if (value.info) {
                    this.$swal({
                        icon: 'info',
                        iconColor: 'white',
                        title: value.info,
                        timer: 5000, // Set duration
                        timerProgressBar: true,
                        customClass: {
                            popup: `bg-gradient-info`
                        }
                    });
                } else if (value.deleted) {
                    this.$swal({
                        icon: 'warning',
                        iconColor: 'white',
                        title: value.deleted,
                        timer: 5000, // Set duration
                        timerProgressBar: true,
                        customClass: {
                            popup: `bg-gradient-deleted`
                        }
                    });
                }
            },
            deep: true
        },
    },
}
</script>

<style>
/* .bg-gradient-success {
    background: linear-gradient(to right, #036219, #80f541);
    /* border-radius: 10px;
    /* Dark to light shade
}

.bg-gradient-danger {
    background: linear-gradient(to right, #62030d, #ffb82a);
    /* border-radius: 10px;
    /* Dark to light shade
}

.bg-gradient-info {
    background: linear-gradient(to right, #0031f7, #4cdfe7);
    /* border-radius: 10px;
}

.bg-gradient-deleted {
    background: linear-gradient(to right, #860202, #fb7676);
    /* border-radius: 10px;
} */

/* Define corresponding classes for SweetAlert backgrounds */
.bg-gradient-success.swal2-popup {
    background: linear-gradient(to right, #036219, #80f541) !important;
}

.bg-gradient-danger.swal2-popup {
    background: linear-gradient(to right, #62030d, #ffb82a) !important;
}

.bg-gradient-info.swal2-popup {
    background: linear-gradient(to right, #0031f7, #4cdfe7) !important;
}

.bg-gradient-deleted.swal2-popup {
    background: linear-gradient(to right, #860202, #fb7676) !important;
}

/* Define the text color class for SweetAlert dialogs */
.swal2-title {
    color: white !important;
}
</style>
