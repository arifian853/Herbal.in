const BASE_URL = 'https://6373acc90bb6b698b612bf31.mockapi.io/api/v1';


async function getAllProducts(){
    const response = await fetch(`${BASE_URL}/products`);
    
    const responseJson = await response.json();
    return { data : responseJson };

}

async function getProduct(id){
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const responseJson = await response.json();

    return { data: responseJson };
}

export { getAllProducts, getProduct };