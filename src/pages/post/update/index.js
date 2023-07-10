'use strict';

const urlSearch = new URLSearchParams(location.search);
const postId = urlSearch.get('id');

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

    const { messages, statusCode } = responseJson;

    throw createError(statusCode, messages);
  }

  return responseJson.post;
}

async function fetchUpdatePost(postId, updatePost) {
  const response = await fetch(`http://3.39.191.68:8080/api/posts/${postId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatePost),
  });

  const { status } = response;

  const responseJson = await response.json();

  if (status === 400) {
    console.error(responseJson);

    const { messages } = responseJson;

    throw new Error(messages);
  }

  if (status === 500) {
    console.error(responseJson);

    const { messages } = responseJson;

    throw new Error(messages);
  }

  if (status >= 400) {
    console.error(responseJson);

    const { messages } = responseJson;

    throw new Error(messages);
  }

  return responseJson.post;
}

async function init() {
  if (!postId) {
    alert('비정상적인 접근입니다.');

    window.location.href = '../list/index.html';

    return;
  }

  try {
    const { title, description } = await fetchPost(postId);

    const titleInputElement = document.getElementById('title-input');
    const descriptionInputElement =
      document.getElementById('description-input');

    titleInputElement.innerHTML = title;
    descriptionInputElement.innerHTML = description;
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

const postListButton = document.getElementById('post-list-button');
const postDetailButton = document.getElementById('post-detail-button');
const updateButton = document.getElementById('update-button');

postListButton.addEventListener('click', () => {
  window.location.href = '../list/index.html';
});

postDetailButton.addEventListener('click', () => {
  window.location.href = `../detail/index.html?id=${postId}`;
});

updateButton.addEventListener('click', async function () {
  const title = document.getElementById('title-input').value;
  const description = document.getElementById('description-input').value;

  const MAX_LENGTH = {
    TITLE: 80,
    DESCRIPTION: 1000,
  };

  const ERROR_MESSAGE = {
    REQUIRE_TITLE: '제목은 필수입니다.',
    REQUIRE_DESCRIPTION: '내용은 필수입니다.',
    TITLE_MAX_LENGTH: `제목은 최대 ${MAX_LENGTH.TITLE}자입니다.`,
    DESCRIPTION_MAX_LENGTH: `내용은 최대 ${MAX_LENGTH.DESCRIPTION}자입니다.`,
  };

  if (!title.length) {
    return alert(ERROR_MESSAGE.REQUIRE_TITLE);
  }

  if (!description.length) {
    return alert(ERROR_MESSAGE.REQUIRE_DESCRIPTION);
  }

  if (title.length > MAX_LENGTH.TITLE) {
    return alert(ERROR_MESSAGE.TITLE_MAX_LENGTH);
  }

  if (description.length > MAX_LENGTH.DESCRIPTION) {
    return alert(ERROR_MESSAGE.DESCRIPTION_MAX_LENGTH);
  }

  try {
    await fetchUpdatePost(postId, { title, description });

    alert('게시글이 수정되었습니다.');

    window.location.href = `../detail/index.html?id=${postId}`;
  } catch (error) {
    alert(error);
  }
});

init();
