'use strict';

async function fetchPost(id) {
  const createError = (status, messages) => {
    const error = new Error(messages);
    error.status = status;

    return error;
  };

  const response = await fetch(`http://3.39.191.68:8080/api/posts/${id}`, {
    method: 'GET',
  });

  const { status } = response;

  const responseJson = await response.json();

  if (status === 400) {
    console.error(responseJson);

    const { messages, statusCode } = responseJson;

    throw createError(statusCode, messages);
  }

  if (status === 404) {
    console.error(responseJson);

    const { messages, statusCode } = responseJson;

    throw createError(statusCode, messages);
  }

  if (status === 500) {
    console.error(responseJson);

    const { messages, statusCode } = responseJson;

    throw createError(statusCode, messages);
  }

  if (status >= 400) {
    console.error(responseJson);

    const { messages } = responseJson;

    throw new Error(messages);
  }

  return responseJson.post;
}

async function viewPost() {
  const urlSearch = new URLSearchParams(location.search);
  const postId = urlSearch.get('id');

  if (!postId) {
    alert('비정상적인 접근입니다.');

    window.location.href = '../list/index.html';

    return;
  }

  const postListButton = document.getElementById('post-list-button');
  const postUpdateButton = document.getElementById('post-update-button');

  postListButton.addEventListener('click', () => {
    window.location.href = '../list/index.html';
  });

  postUpdateButton.addEventListener('click', () => {
    window.location.href = `../update/index.html?id=${postId}`;
  });

  try {
    const { title, description } = await fetchPost(postId);

    const titleElement = document.getElementById('title');
    const titleText = document.createElement('b');
    titleText.setAttribute('id', 'title-text');
    titleText.innerHTML = title;
    titleElement.appendChild(titleText);

    const descriptionElement = document.getElementById('description');
    const descriptionText = document.createElement('td');
    descriptionText.setAttribute('id', 'description-text');

    descriptionText.innerHTML = description;
    descriptionElement.appendChild(descriptionText);
  } catch (error) {
    const { status, message } = error;

    if (status === 404) {
      alert('존재하지 않는 post 입니다.');
      window.location.href = '../list/index.html';
      return;
    }

    alert(message);
  }
}

viewPost();
