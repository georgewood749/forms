const helpers = require('./helpers')

async function getGithubUserInfo(username){
    try {
        const url = `https://api.github.com/users/${username}`
        const response = await fetch(url);
        const data = await response.json();
        helpers.renderPublicRepoCount(data)
    } catch(err){
        console.log('Oops, I did it again.');
    }
}

module.export = {getGithubUserInfo}