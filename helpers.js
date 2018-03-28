'use strict';

const body = document.body;

// create element
const createNode = (element) => {
  return document.createElement(element);
};

// append elements to parent
const append = (parent, el) => {
  return parent.appendChild(el);
};

const removeElement = (element) => {
  return element.parentNode.removeChild(element);
};

// create user results
const userCreate = (data) => {
  const userUl = document.getElementById('user');
  let usernameLi = createNode('li');
  let nameLi = createNode('li');
  let bioLi = createNode('li');
  let namespan = createNode('span');
  let usernamespan = createNode('span');
  let biospan = createNode('span');
  let img = createNode('img');
  namespan.innerHTML = data.name;
  namespan.setAttribute('class', 'name-span');
  usernamespan.innerHTML = `@${data.login}`;
  biospan.innerHTML = data.bio;
  img.src = data.avatar_url;
  img.setAttribute('id', 'user-image');
  append(usernameLi, usernamespan);
  append(nameLi, namespan);
  append(bioLi, biospan);
  append(userUl, img);
  append(userUl, usernameLi);
  append(userUl, nameLi);
  append(userUl, bioLi);
};

// handle error
const handleError = () => {
  let div = createNode('div');
  let span = createNode('span');
  div.setAttribute('id', 'user-not-found');
  span.innerHTML = 'Does not exist';
  append(div, span);
  append(body, div);
};

// create repo results
const repoCreate = (data) => {
  const repoHeading = document.getElementById('repositories');
  repoHeading.innerHTML = 'Repositories';
  repoHeading.setAttribute('id', 'repositories-heading');
  data[0].map((repo) => {
    const ul = document.getElementById('repos');
    let li = createNode('li');
    let repoSpan = createNode('span');
    let starSpan = createNode('span');
    let starImage = createNode('img');
    let forksSpan = createNode('span');
    let forkImage = createNode('img');
    repoSpan.innerHTML = repo.name;
    forkImage.src = './images/fork.png';
    starImage.src = './images/star.png';
    forkImage.setAttribute('class', 'fork-image');
    starImage.setAttribute('class', 'star-image');
    starSpan.innerHTML = repo.stargazers_count;
    starSpan.setAttribute('class', 'numbers');
    forksSpan.innerHTML = repo.forks_count;
    forksSpan.setAttribute('class', 'numbers');
    append(li, forksSpan);
    append(li, forkImage);
    append(li, starSpan);
    append(li, starImage);
    append(li, repoSpan);
    append(ul, li);
  });
};

const deleteResults = () => {
  const results = document.getElementById('results');
  removeElement(results);
};

const deleteError = () => {
  const errorUser = document.getElementById('user-not-found');
  removeElement(errorUser);
  const result = createNode('div');
  result.setAttribute('id', 'results');
  append(body, result);
  const ulUser = createNode('ul');
  ulUser.setAttribute('id', 'user');
  append(result, ulUser);
  const repoHeading = createNode('h3');
  repoHeading.setAttribute('id', 'repositories');
  append(result, repoHeading);
  const ulRepos = createNode('ul');
  ulRepos.setAttribute('id', 'repos');
  append(result, ulRepos);
};
