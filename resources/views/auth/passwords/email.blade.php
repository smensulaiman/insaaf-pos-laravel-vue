<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="stylesheet" href="/css/master.css">

    <link rel="icon" href="{{ asset('images/' . ($app_settings->favicon ?? 'favicon.ico')) }}">
    <title>{{ $app_settings->app_name ?? 'Insaaf | Ultimate Inventory With POS' }}</title>

  </head>

  <body class="text-left">
    <noscript>
      <strong>
        We're sorry but Insaaf doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>

    <!-- built files will be auto injected -->
    <div class="loading_wrap" id="loading_wrap">
      <div class="loader_logo">
      <img src="{{ asset('images/' . ($app_settings->logo ?? 'logo.png')) }}" class="" alt="logo" />

      </div>

      <div class="loading"></div>
    </div>
    <div id="login">
        <forgot-component></forgot-component>
      </div>

      <script src="/js/login.min.js"></script>
  </body>
</html>

