'use strict';

const main = () => {
  let button = document.getElementById('search-button');
  let error = Boolean;
  const handleClick = () => {
    let data = {
      name: document.getElementById('input').value
    };
    const urls = [`https://api.github.com/users/${data.name}/repos`,
      `https://api.github.com/users/${data.name}`];

    Promise.all(urls.map(url =>
      fetch(url).then(response => response.json())
    ))
      .then((data) => {
        if (data[1].message === 'Not Found' && data[0].message === 'Not Found') {
          deleteResults();
          handleError();
          error = true;
        } else if (error === true) {
          deleteError();
          let users = data[1];
          userCreate(users);
          repoCreate(data);
        } else {
          let users = data[1];
          userCreate(users);
          repoCreate(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  button.addEventListener('click', handleClick);
};

window.onload = main;
