# Functional Requirements (60 points)
## 1. Frontend Product List Display (30 points)
### **The frontend should fetch a list of products from the backend and display them in a card format using the Material UI card component. (10 points)**
I implemented the ProductList component in the frontend using Material UI's Card component to structure each product's display. This component fetches data from the backend using Axios and dynamically displays each product in a visually consistent card format.
### **Each card should include (10 points):**
- **Product name**
- **Product description**
- **Product price**
- **Product image**
- Each card displays the product’s name, description, price, and image by mapping through the products array received from the backend API. We used Material UI’s CardMedia, CardContent, and Typography components to style and format each attribute as required.
### Each card should have a delete icon button for product removal from the list, and when the button is clicked, the card should be removed from the frontend. (10 points)

- We added a delete button using Material UI’s IconButton component with a DeleteIcon. The handleDelete function is triggered on clicking this button, which calls the delete endpoint on the backend. Upon successful deletion, the product is removed from the local products state to instantly reflect the change in the frontend UI.
- 
## 2. Backend Get / Delete Product (30 points)
### The products are fetched from the backend using an API. (15 points)

- We created a GET /api/products endpoint in the backend, which responds with a list of products in JSON format. Each product includes a randomly generated image URL, along with name, description, and price fields. The frontend fetches this data upon loading, ensuring it dynamically receives the latest list of products.
### When a product is deleted, it should be removed from the backend data. (15 points)

- We implemented a DELETE /api/products/:id endpoint in the backend to handle product deletion. When the delete icon is clicked on a product card, the frontend sends a DELETE request with the product’s ID. The backend then removes the product from its internal data and returns a status to confirm deletion, which the frontend uses to update its display accordingly.
# Additional Requirements (40 points)
## 1. Frontend (30 points)
### Ensure the frontend is responsive, with product cards wrapping appropriately when there isn't enough space. (10 points)

- We used CSS flexbox properties to make the card container responsive. The cards wrap automatically when there’s not enough space, ensuring the layout adjusts to different screen sizes.
### The container holding cards should be always centered on the screen. (10 points)

- We styled the container to center itself horizontally and vertically using justify-content: center and align-items: center. This keeps the cards centered regardless of screen size, enhancing the UI experience.
### Ensure that product information persists and is fetched from the backend upon page refresh, avoiding hard-coded data in the frontend. (10 points)

- The frontend fetches product data from the backend API each time the page is loaded or refreshed. This approach ensures that the displayed product list is always up-to-date with the backend data, without any hard-coded product data in the frontend code.
## 2. Backend (10 points)
### Implement proper CORS handling to facilitate seamless communication between the frontend and backend. (10 points)
- We added CORS handling to the backend using the cors middleware in Express. This allows the frontend to make cross-origin requests to the backend, enabling seamless data exchange between the two components.
# Backend Endpoints Information
## 1. GET /api/products
### Fetches the list of products.
### Each product includes:
- A unique ID.
- Product name, description, and price.
- A randomly fetched image URL from Picsum to provide a unique image for each product card.
## 2. DELETE /api/products/
- Deletes a product by its ID.
- This endpoint removes a specified product from the backend data, updating the displayed product list in the frontend after a successful deletion.
