<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Styles -->
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/manifest.js') }}" defer></script>
    <script src="{{ mix('/js/vendor.js') }}" defer></script>
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <link rel="icon" type="image/png" href="{{ asset('images/OPCR_ICON.png') }}">

    <!-- include VueJS first -->
    <!--<script src="https://unpkg.com/vue@latest"></script>-->

    <!-- use the latest vue-select release -->
    <!--<script src="https://unpkg.com/vue-select@latest"></script>
    <link rel="stylesheet" href="https://unpkg.com/vue-select@latest/dist/vue-select.css">-->

    <!-- or point to a specific vue-select release -->
    <!--<script src="https://unpkg.com/vue-select@3.0.0"></script>
    <link rel="stylesheet" href="https://unpkg.com/vue-select@3.0.0/dist/vue-select.css">-->
    @inertiaHead
</head>

<body>

    @inertia
</body>

</html>
