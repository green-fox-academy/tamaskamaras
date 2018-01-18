'use strict';

function requestPosts() {
    let myRequest = new XMLHttpRequest();
    let url = 'https://time-radish.glitch.me/posts';
    myRequest.open('GET', url);
    myRequest.send();
    myRequest.onreadystatechange = function() {
        if (myRequest.readyState === 4) {
            let posts = JSON.parse(myRequest.response).posts;
            separatePosts(posts);
        };
    };
};

function separatePosts(posts) {
    for (let i in posts) {
        createTags(posts[i]);
    }
};

function createTags(post) {
    console.log(post);
    let newPost = document.createElement('div');
    let vote = document.createElement('div');
    let voteUp = document.createElement('a');
    let upImage = document.createElement('img');
    let score = document.createElement('p');
    let voteDown = document.createElement('a');
    let downImage = document.createElement('img');
    let section = document.createElement('section');

    newPost.className = 'post';
    vote.className = 'vote';
    voteUp.className = 'voteup';

    voteUp.setAttribute('href', '');
    upImage.setAttribute('src', 'upvote.png');

    score.textContent = post.score;

    voteDown.setAttribute('href', '');
    downImage.setAttribute('src', 'downvote.png');

    document.querySelector('main').appendChild(newPost);
    newPost.appendChild(vote);
    vote.appendChild(voteUp);
    voteUp.appendChild(upImage);
    vote.appendChild(score);
    vote.appendChild(voteDown);
    voteDown.appendChild(downImage);

    let sectionPost = document.createElement('section');
    let aTag1 = document.createElement('a');
    aTag1.setAttribute('href', post.href);
    aTag1.className = 'title';
    aTag1.textContent = post.title;
    let submitTime = document.createElement('p');
    submitTime.textContent = 'submitted x days ago by';
    
    let aTag2 = document.createElement('a');
    aTag2.setAttribute('href', '');
    aTag2.textContent = 'username';

    let aTag3 = document.createElement('a');
    aTag3.setAttribute('href', '');
    aTag3.textContent = 'xx comments';

    let aTag4 = document.createElement('a');
    aTag4.setAttribute('href', '');
    aTag4.textContent = 'Modify';

    let aTag5 = document.createElement('a');
    aTag5.setAttribute('href', '');
    aTag5.textContent = 'Remove';

    newPost.appendChild(sectionPost);
    sectionPost.appendChild(aTag1);
    sectionPost.appendChild(submitTime);
    sectionPost.appendChild(aTag2);
    sectionPost.appendChild(aTag3);
    sectionPost.appendChild(aTag4);
    sectionPost.appendChild(aTag5);
}

requestPosts();
