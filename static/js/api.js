async function getGithubUserInfo(username){
    try {
        const url = `https://api.github.com/users/${username}`
        const response = await fetch(url);
        const data = response.json();
        console.log(data.name);
    } catch(err){
        console.log('Oops, I did it again.');
    }
}