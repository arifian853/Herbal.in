# Herbal.in API Documentation

# Local
## 1. First install package dependency with terminal at package.json with :
```npm update```

## 2. Run the project with : 
```npm run dev```

## 3. Make .env files that contains : 
```MONGO_URL=mongodb://127.0.0.1:27017/herbData```
```PORT = 3001```

## 4. Make herbData database, products and articles collection : 
![database](https://raw.githubusercontent.com/arifian853/Herbal.in/API_Herbal.in/documentation/db.png)

## 4. Endpoints (Test with Postman, etc. | Only if the database connected and has the data) (GET Method only, there's no other method) : 

### - For displaying all products
```localhost://3001/products``` 

![products](https://raw.githubusercontent.com/arifian853/Herbal.in/API_Herbal.in/documentation/all_products.png)

### - For displaying a spesific product with ID
```localhost://3001/products/:id``` 

![products-id](https://raw.githubusercontent.com/arifian853/Herbal.in/API_Herbal.in/documentation/products-id.png)

### - For displaying all products
```localhost://3001/articles```

![articles](https://raw.githubusercontent.com/arifian853/Herbal.in/API_Herbal.in/documentation/all_articles.png)

### - For displaying a spesific article with ID
```localhost://3001/articles/:id``` 

![articles-id](https://raw.githubusercontent.com/arifian853/Herbal.in/API_Herbal.in/documentation/articles-id.png)
