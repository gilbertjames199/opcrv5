<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
        <title>Sign In - ETS</title>
    
        <link href="{{ mix('css/app.css') }}" rel="stylesheet" />
    </head>
    <body class="app">
        <div id="loader">
            <div class="spinner"></div>
        </div>
        <!--addition-->
        <div class="peers ai-s fxw-nw h-100vh">
            <div class="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv"
                style='background-image:url("images/bg.jpg")'>
                <div class="pos-a centerXY">
                    <div class="row" style="color:#1c7da3">
                        <h1 class="text-center text-title">
                            EMPLOYEE TIME SHEETS
                        </h1>
                    </div>
                    <div class="row text-center">
                        <div>
                            <!--<img class="mw-50" src="images/logo.png" alt="">-->
                            <img src="{{ asset('images/logo.png') }}" alt="" class="img-fluid" style="width:400px; height:400px">
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style="min-width:320px">
                <div class="row text-center" id="mobile-logo">
                    <div class="col-offset-5 mb-1">
                        <img class="img-fluid" src="images/logo.png" alt="">
                        <h3>Welcome to ETS</h3>
                    </div>
                </div>
                <h4 class="fw-300 c-grey-900 mB-10" style="text-align: center !important; font-weight: bold !important;">
                    Welcome to ETS
                </h4>
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">{{ __('Verify Your Email Address') }}</div>
            
                            <div class="card-body">
                                @if (session('resent'))
                                    <div class="alert alert-success" role="alert">
                                        {{ __('A fresh verification link has been sent to your email address.') }}
                                    </div>
                                @endif
            
                                {{ __('Before proceeding, please check your email for a verification link.') }}
                                {{ __('If you did not receive the email') }},
                                <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                                    @csrf
                                    <button type="submit" class="btn btn-link p-0 m-0 align-baseline">{{ __('click here to request another') }}</button>.
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <!--/addition-->
        
    </body>
    <script>
        window.addEventListener("load", (function () {
            const t = document.getElementById("loader");
            setTimeout((function () {
                t.classList.add("fadeOut")
            }), 300)
        }))
    
        var x = document.getElementById("mobile-logo");
    
        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    </script>
</html>
{{--
@section('content')

@endsection --}}
