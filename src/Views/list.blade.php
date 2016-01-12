@extends('XTheme::_layouts.master')

@section('style')
    @if(Config::get('tm_config.tm_debug'))
        <link rel="stylesheet" href="http://localhost:3000/css/app.css">
    @else
        <link rel="stylesheet" href="{{ URL::asset('assets/tm/css/app.css') }}">
    @endif
@endsection

@section('content')

    <div class="app-body" id="view">
        <div class="app-body-inner">

            <div class="row-col row-col-xs b-b">
                <div class="col-sm-3 col-md-2 white b-r">
                    @include('XTheme::_partials.setting_panel')
                </div>

                <div class="col-sm-9 col-md-10 map-outer-wrapper p-a-md">
                    {{--@include('TableManager::_partials.tm_header')--}}
                    <div id="tm"></div>
                    <br />
                    <div id="btn"></div>
                    <br>
                    <div id="slider"></div>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('script')
    @if(Config::get('tm_config.tm_debug'))
        <script src="http://localhost:3000/js/app.js"></script>
    @else
        <script src="{{ URL::asset('assets/tm/js/app.js') }}"></script>
    @endif
@endsection