const { darkMode, lightMode } = require('./helpers');

function switchMode(e){
    console.log('mode')
    e.target.checked ? darkMode() : lightMode();
}

function handleFormSubmit(e) {
    e.preventDefault();
    console.log('Form delivered');
}

module.exports = { switchMode, handleFormSubmit }
