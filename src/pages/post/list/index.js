'use strict';

async function fetchPostList(title = '') {
  const response = await fetch(
    'http://3.39.191.68:8080/api/posts?' +
      new URLSearchParams({
        title,
      }),
    {
      method: 'GET',
    }
  );

  const responseJson = await response.json();

  return responseJson.posts;
}

function getIdElement(postId) {
  const id = document.createElement('td');
  id.innerHTML = postId;

  return id;
}

function getTitleElement(postTitle) {
  const isSlice = postTitle.length > 15;

  const title = document.createElement('td');
  title.innerHTML = isSlice ? postTitle.slice(0, 15) + '...' : postTitle;

  return title;
}

function getCreatedAtElement(postCreatedAt) {
  const createdAt = document.createElement('td');
  createdAt.innerHTML = new Date(postCreatedAt).toLocaleDateString();

  return createdAt;
}

function getUpdatedAtElement(postUpdatedAt) {
  const updatedAt = document.createElement('td');
  updatedAt.innerHTML = new Date(postUpdatedAt).toLocaleDateString();

  return updatedAt;
}

function getPostElement(post) {
  const { id, title, createdAt, updatedAt } = post;

  const tr = document.createElement('tr');
  tr.setAttribute('post-id', id);

  const idElement = getIdElement(id);
  const titleElement = getTitleElement(title);
  const createdAtElement = getCreatedAtElement(createdAt);
  const updatedAtElement = getUpdatedAtElement(updatedAt);

  tr.appendChild(idElement);
  tr.appendChild(titleElement);
  tr.appendChild(createdAtElement);
  tr.appendChild(updatedAtElement);

  return tr;
}

async function init() {
  const postItemElement = document.getElementById('post-item');

  postItemElement.replaceChildren();
}

async function createPostTable() {
  init();

  const postItemElement = document.getElementById('post-item');

  const posts = await fetchPostList();

  posts.forEach((post) => {
    const postElement = getPostElement(post);

    postItemElement.appendChild(postElement);
  });
}

const initialButton = document.getElementById('initial-button');

initialButton.addEventListener('click', async function () {
  await createPostTable();
});

const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', async function () {
  const searchInput = document.getElementById('search-input');

  const searchValue = searchInput.value;

  if (!searchValue) {
    return;
  }

  const posts = await fetchPostList(searchValue);

  init();

  const postItemElement = document.getElementById('post-item');

  posts.forEach((post) => {
    const postElement = getPostElement(post);

    postItemElement.appendChild(postElement);
  });
});

createPostTable();
