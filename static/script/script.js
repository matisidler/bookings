'use strict'

let attention = Prompt();
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

console.log("this")
    const elem = document.getElementById('foo');
const rangepicker = new DateRangePicker(elem, {
    buttonClass: 'btn',
    format: "dd-mm-yyyy"
}); 



/* NOTIE */

let av_btn = document.getElementById('search_av_btn')

av_btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let htmlQuote = `
    <form id="check-availability-form action="" method="post" novalidate class="needs-validation search-form">
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

function notify(msg, msgType){
    notie.alert({
        type: msgType,
        text: msg,
      })
}


/*SWEET ALERT*/ 
function sweetAlert(title, text, icon, confirmButtonText){
    Swal.fire({
        title: title,
        html: text,
        icon: icon,
        confirmButtonText: confirmButtonText
      })
}


function Prompt(){
    let toast = function(c){
        const {
            msg = "",
            icon = "success",
            position = "top-end",
        } = c
        const Toast = Swal.mixin({
            toast: true,
            title: msg,
            position: position,
            icon: icon,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({})
    }

    let success = function(c){
        const {
            msg = "",
            title = "",
            footer = "",
        } = c
        Swal.fire({
            icon: 'success',
            title: title,
            text: msg,
            footer: footer,
          })
    }
    let error = function(c){
        const {
            msg = "",
            title = "",
            footer = "",
        } = c
        Swal.fire({
            icon: 'error',
            title: title,
            text: msg,
            footer: footer,
          })
    }

    let custom = async function (c){
        const{
            msg = "",
            title = "",
        } = c

        const { value: formValues } = await Swal.fire({
            title: title,
            html:msg,
            backdrop: false,
            focusConfirm: false,
            showCancelButton: true,
            willOpen:()=>{
                const elem = document.getElementById('reservation-dates-modal')
                const rp = new DateRangePicker(elem, {
                    format: 'yyyy-mm-dd',
                    showOnFocus: true,
                })
            },
            didOpen: ()=>{
                document.getElementById('start').removeAttribute('disabled')
            },
            preConfirm: () => {
              return [
                document.getElementById('start').value,
                document.getElementById('end').value
              ]
            },
            didOpen: ()=>{
                document.getElementById('start').removeAttribute('disabled')
                document.getElementById('end').removeAttribute('disabled')
            },
          })
          
          if (formValues) {
            Swal.fire(JSON.stringify(formValues))
          }
    }

    return{
        toast: toast,
        success: success,
        error: error,
        custom:custom
    }
}
