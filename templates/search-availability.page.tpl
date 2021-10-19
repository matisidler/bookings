{{template "base" .}}

{{define "content"}}
<div class="container">
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <h1 class="mt-5">Search for Availibility</h1>

            <!-- FORM -->
            <form action="/search-availability" method="post" novalidate class="needs-validation">
                <input type="text" name="csrf_token" value="{{.CSRFToken}}" hidden>
                <div class="row">
                    <div class="col">
                        <div class="row" id="foo">
                            <div class="col">
                                <input type="text" name="start" class="form-control" required placeholder="Arrival date" autocomplete="off">
                            </div>

                            <div class="col">
                                <input type="text" name="end" class="form-control" required placeholder="Departure" autocomplete="off">
                            </div>
                        </div>
                    </div>
                </div>

                <hr>
                <button type="submit" class="btn btn-primary">Search Availibility</button>
            </form>
        </div>
    </div>
</div>
{{end}}

{{define "js"}}
<script>
    const elem = document.getElementById('foo');
    const rangepicker = new DateRangePicker(elem, {
        buttonClass: 'btn',
        format: "dd-mm-yyyy"
    });
</script>

{{end}}