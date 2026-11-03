<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>Sign In - PBS</title>

    <link href="{{ mix('css/app.css') }}" rel="stylesheet" />
    <link rel="icon" type="image/png" href="{{ asset('images/OPCR_ICON.png') }}">
</head>

<body class="app">
    <div id="loader">
        <div class="spinner"></div>
    </div>
    <div class="peers ai-s fxw-nw h-100vh">
        <div class="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv"
            style='background-image:url("images/Davao_De_Oro_Flag.jpg"); background-size:100% 100%'>
            <div class="row mt-3 ms-3" style="color: rgb(52, 52, 52); display: block;">
                <div class="col-md-6">
                    {{-- <h1 class="strokeme display-5" style="font-weight: bold; color: #0b4497; font-size: 50px;">
                        PROGRAMS AND PROJECTS
                    </h1> --}}
                </div>
            </div>
            <!--class="pos-a centerXY"-->
            <div>

                <!--
                <div class="row" style="color:#2c8291">
                    <h1 class="text-center text-title"><span class="display-1">Programs and Projects</h1>
                </div>
                -->
                <div class="row text-center pos-a centerXY">
                    <div>
                        <!--<img class="mw-50" src="images/logo.png" alt="">-->
                        <h1 class="text-center" style="font-size: 50px; color:#f0d338"><b>PLANNING AND
                                BUDGETING SYSTEM</b></h1>
                        </b></h1>
                        &nbsp;&nbsp;<img src="{{ asset('images/logo.png') }}" alt="" class="img-fluid"
                            style="width:250px; height:250px">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 peer pX-40 pY-80 h-100 scrollable pos-r"
            style="min-width:320px; background-image: linear-gradient(to bottom, #9d7720 0%, #f0d338 30%, #9d7720 100%); color: white; !important">
            <div class="row text-center" id="mobile-logo">
                <div class="col-offset-5 mb-1">
                    <img class="img-fluid" src="images/logo.png" alt="">
                    <h3>WELCOME</h3>
                </div>
            </div>
            <div class="hide_for_mobile">
                <h4 class="fw-300 mB-10 font-weight-bold" style="font-weight: bold !important; font-color: white">
                    WELCOME
                </h4>
            </div>
            @if (count($errors) > 0)
                <div class="alert alert-danger" style="margin-bottom: unset; padding: .3rem;">
                    @foreach ($errors->all() as $message)
                        <small class="text-danger">
                            <strong>
                                <p style="margin-bottom: unset;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                        fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                                        viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                        <path
                                            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                    {{ $message }}
                                </p>
                            </strong>
                        </small>
                    @endforeach
                </div>
            @endif
            <form method="POST" action="{{ route('login') }}">

                @csrf
                <div class="mb-3">
                    <label class="text-normal text-light form-label">Username: </label>
                    <input type="text" name="UserName" class="form-control" value="{{ old('UserName') }}">
                </div>
                <div class="mb-3">
                    <label class="text-normal text-light form-label">Password: </label>
                    {{-- <input type="password" class="form-control" name="UserPassword"> --}}
                    <div class="input-group">
                        <input type="password" class="form-control" name="UserPassword" id="UserPassword">
                        <button type="button" id="togglePassword" class="btn btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                <path
                                    d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588M5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                <path
                                    d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="">
                    <div class="peers ai-c jc-sb fxw-nw">
                        <div class="peer">
                            <div class="checkbox checkbox-circle checkbox-info peers ai-c"><input type="checkbox"
                                    id="inputCall1" name="inputCheckboxesCall" class="peer"> <label for="inputCall1"
                                    class="peers peer-greed js-sb ai-c form-label"><span
                                        class="peer peer-greed">Remember Me</span></label></div>
                        </div>
                        <div class="peer"><button type="submit" class="btn btn-primary btn-color">Enter</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>

<script>
    window.addEventListener("load", (function() {
        const t = document.getElementById("loader");
        setTimeout((function() {
            t.classList.add("fadeOut")
        }), 300)
    }))

    var x = document.getElementById("mobile-logo");

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.addEventListener('DOMContentLoaded', function() {
        const togglePassword = document.getElementById('togglePassword');
        const passwordField = document.getElementById('UserPassword');
        const passwordIcon = document.getElementById('toggleIcon');

        togglePassword.addEventListener('click', function() {
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                togglePassword.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                    </svg>
                `;
            } else {
                passwordField.type = 'password';
                togglePassword.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588M5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                    </svg>
                `;

            }
        });
    });
</script>

</html>
