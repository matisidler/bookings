{{template "base" .}}

{{define "content"}}
<div class="container">
    <div class="row">
        <div class="col">
            <img src="/static/imgs/marjors-suite.png" class="img-fluid mx-auto d-block room-image" alt="room image">
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h1 class="text-center mt-4">Major's Suite</h1>
            <h5 class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt porro, perspiciatis
                et laborum consequuntur consequatur?</h5>
        </div>
    </div>

    <div class="row">
        <div class="col text-center">
            <a href="/make-reservation-gq" class="btn btn-success">Check for Availibility</a>
        </div>
    </div>
 </div>
{{end}}