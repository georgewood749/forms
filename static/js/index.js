const handlers = require('./handlers');

function init(){
    const modeCheck = document.getElementById('dark-mode');
    modeCheck.addEventListener('click', handlers.switchMode)
    const form = document.querySelector('#my-form');
    form.addEventListener('submit', handlers.handleFormSubmit)
}

init()