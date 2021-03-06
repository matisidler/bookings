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
            <a id="check-availability-btn" href="#!" class="btn btn-success">Check for Availibility</a>
        </div>
    </div>
 </div>
{{end}}

{{define "js"}}
    <script>

let av_button = document.getElementById('check-availability-btn')

av_button.addEventListener('click',(e)=>{
    e.preventDefault()
    let htmlQuote = `
    <form id="check-availability-form action=" method="post" novalidate class="needs-validation search-form">
        <div class="row">
            <div class="col">
                <div class= "row" id="reservation-dates-modal"> 
                    <div class="col">
                        <input disabled required class="form-control" type="text" name="start" id="start" placeholder="Arrival">
                    </div>
                    <div class="col">
                        <input disabled required class="form-control" type="text" name="end" id="end" placeholder="Departure">
                    </div>
                </div>
            </div>
        </div>
    </form>`
    attention.custom({msg: htmlQuote, title: "Choose your dates"})
})

</script>


{{end}}