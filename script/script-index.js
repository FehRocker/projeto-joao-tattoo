// inicio slider de imagens
let count = 1;
document.getElementById("radio1").checked = true

setInterval(function () {
    nextImage();

}, 3000)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}
// fim slider de imagens

// inicio formulario de orçamento
const form = document.querySelector('#form-orcamento'); //selecionando o formulario

form.addEventListener('submit', function (e) {
    e.preventDefault(); //nao atualiza ao clicar no botão

    const fields = [ // criando objetos para validação de campo

        {
            id: 'nome',
            label: 'nome',
            validator: nameIsValid
        }

    ]


    const errorIcon = '<i class="fa-solid fa-circle-exclamation"></i>'

    fields.forEach(function (field) {
        const input = document.getElementById(field.id); //pegar a informação digitada pelo usuário
        const inputBox = input.closest('.input-box');
        const inputValue = input.value;

        const errorSpan = inputBox.querySelector('.error');
        errorSpan.innerHTML = ''; // iniciar como vazio para nao aparecer o erro quando digitar algo

        inputBox.classList.remove('invalid');//validação de campo
        inputBox.classList.add('valid');

        const fieldValidator = field.validator(inputValue);

        if (!fieldValidator.isValid) {
            errorSpan.innerHTML = `${errorIcon} ${fieldValidator.errorMessage}`;
            inputBox.classList.add('invalid'); //validação de campo
            inputBox.classList.remove('valid');
        }
    })

})

function isEmpty(value) {
    return value === '';
}

function nameIsValid(value){
    const validator = {
        isValid: true,
        errorMessage: null
    }

    if (isEmpty(value)) {
        validator.isValid = false;
        validator.errorMessage = 'O campo não pode ser vazio!'
        return validator;
    }

    const regex = /^[a-zA-Z]/; // validação de apenas letras
    if (!regex.test(value)) {
        validator.isValid = false
        validator.errorMessage = 'o campo deve conter apenas letras!'
    }
    return validator
}

//fim formulario de orçamento
