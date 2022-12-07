

const BASE_URL = 'https://6373acc90bb6b698b612bf31.mockapi.io/api/v1';


async function getArticles(){
    const response = await fetch(`${BASE_URL}/articles`);
    
    const responseJson = await response.json();
    return { data : responseJson };

}

async function getArticle(id){
    const response = await fetch(`${BASE_URL}/articles/${id}`);
    const responseJson = await response.json();

    return { data: responseJson };
}

async function addArticle({ article_title, article_image, article_description}){
  const response = await fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },

    body: JSON.stringify({ article_title, article_image, article_description })
  })

  const responseJson = await response.json();
  
  if(responseJson.status !== 'success'){
    return {error: true};
}

return {error : false};
}


// untuk update belum diimplementasikan
async function updateArticle(id,createdAt,  article_title, article_image, article_description ){
  const response = await fetch(`${BASE_URL}/articles/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({ createdAt, article_title, article_image, article_description})

  })

  const responseJson = await response.json();

  if(responseJson.status !== 'success'){
      return {error : true};
  }

  return { error: false};
}

async function deleteArticle(id) {
  const response = await fetch(`${BASE_URL}/articles/${id}`, {
    method: 'DELETE',
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
   
    return new Date(date).toLocaleDateString("id-ID", options);

  }

export { getArticles, getArticle, showFormattedDate, addArticle, deleteArticle, updateArticle };