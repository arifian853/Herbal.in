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


const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    // return new Date(date).toLocaleDateString("id-ID", options);
    return new Date(date).toLocaleDateString("en-EN", options);

  }

export { getArticles, getArticle, showFormattedDate };