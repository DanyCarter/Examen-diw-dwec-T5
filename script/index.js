
const formulario = document.querySelector('#form')
const nombre = document.querySelector('#name')
const email = document.querySelector('#email')
const infoAd = document.querySelector('#infoAd')
const reserva = document.querySelector('#reserva')
const info = document.querySelector('#info')
const message = document.querySelector('#message')
const errores = document.querySelector('#errores')
const send  = document.querySelector('#send')


let mensajeErrores = []

const validar = event =>
event.preventDefault()
mensajeErrores = []

nombre.value.trim().length === 0 && mensajeErrores.push('El campo Nombre no puede estar vacío')
!/^[a-zA-Z0-9]*$/.test(nombre.value.trim()) && mensajeErrores.push('El nombre no tiene caracteres válidos')

!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value.trim()) && mensajeErrores.push('Introduce una dirección de correo electrónico válida')

message.value.trim().length === 0 && mensajeErrores.push('Debe insertar un mensaje, el campo no puede quedar vacio')

if(mensajeErrores.length === 0 && confirm('¿Estas seguro que desea enviar el formulario')){
    
    formulario.submit()
    
    }else if(mensajeErrores.length > 0 ){
        errores.textContent = ""
        console.log(mensajeErrores)
        mensajeErrores.forEach(function(message){
            const miLi = document.createElement("li")
            miLi.textContent = message
            errores.appendChild(miLi)
        })
    }


    formulario.addEventListener("submit", validar);




