const BASE_URL = 'https://6373acc90bb6b698b612bf31.mockapi.io/api/v1';


async function getAllProducts(){
    const response = await fetch(`${BASE_URL}/products`);
    
    const responseJson = await response.json();
    return { data : responseJson };

}

async function addProduct({productItems}){
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
  
      body: JSON.stringify({ productItems })
    })
  
    const responseJson = await response.json();
    
    if(responseJson.status !== 'success'){
      return {error: true};
  }
  
  return {error : false};
  }
  
  
  // untuk update belum diimplementasikan
  async function updateProduct(id, productItems ){
    const response = await fetch(`${BASE_URL}/articles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ productItems })
  
    })
  
    const responseJson = await response.json();
  
    if(responseJson.status !== 'success'){
        return {error : true};
    }
  
    return { error: false};
  }
  
  async function deleteProduct(id) {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'DELETE',
    });
  
    const responseJson = await response.json();
  
    if (responseJson.status !== 'success') {
      return { error: true, data: null };
    }
  
    return { error: false, data: responseJson.data };
  }
  

export { getAllProducts, addProduct, updateProduct, deleteProduct };