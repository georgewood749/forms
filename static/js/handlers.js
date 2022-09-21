const { getGithubUserInfo } = require('./api');
const { darkMode, lightMode, renderName } = require('./helpers');

function switchMode(e) {
    console.log('mode')
    e.target.checked ? darkMode() : lightMode();
}

function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    getGithubUserInfo(name);
    renderName(name);
}

module.exports = { switchMode, handleFormSubmit }