'use strict';

async function fetchCreatePost(createPost) {
  const response = await fetch('http://3.39.191.68:8080/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(createPost),
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

const postListButton = document.getElementById('post-list-button');
const createButton = document.getElementById('create-button');

postListButton.addEventListener('click', () => {
  window.location.href = '../list/index.html';
});

createButton.addEventListener('click', async function () {
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
    const newPost = await fetchCreatePost({ title, description });

    alert('게시글이 생성되었습니다.');

    window.location.href = '../detail/index.html';
  } catch (error) {
    alert(error);
  }
});
