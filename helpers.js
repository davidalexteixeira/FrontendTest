'use strict';

let error = false;

// promise function to fetch API data
const handleClick = () => {
  let inputData = {
    name: document.getElementById('input').value
  };
  const urls = [`https://api.github.com/users/${inputData.name}/repos`,
    `https://api.github.com/users/${inputData.name}`];

  Promise.all(urls.map(url =>
    fetch(url).then(response => response.json())
  ))
    .then((data) => {
      if (data[1].message === 'Not Found' && data[0].message === 'Not Found') {
        deleteError();
        deleteResults();
        handleError();
        error = true;
      } else if (error === true) {
        deleteError();
        deleteResults();
        let users = data[1];
        userCreate(users);
        repoCreate(data);
        error = false;
      } else {
        deleteResults();
        let users = data[1];
        userCreate(users);
        repoCreate(data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// delete results
const deleteResults = () => {
  const results = document.getElementById('results');
  removeElement(results);
  createResultElements();
};

// delete error
const deleteError = () => {
  const errorUser = document.getElementById('user-not-found');
  if (errorUser !== null) {
    removeElement(errorUser);
  }
  const resultsElement = document.getElementById('results');
  if (!resultsElement) {
    createResultElements();
  }
};
