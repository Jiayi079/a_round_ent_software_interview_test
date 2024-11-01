import React, { useState, useEffect } from 'react'; // import specific statements
import { Container, Card, CardContent, Typography, Button, CardActions, IconButton, CardMedia, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';


const ProductList = () => {
  const [products, setProducts] = useState([]); // define the state for storing products

  //implement the get products function
  const fetchProducts = async () => {
    try {
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';
      const response = await axios.get(`${apiBaseUrl}/api/products`);
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  //implement the delete function
  const handleDelete = async (id) => {
    try {
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';
      await axios.delete(`${apiBaseUrl}/api/products/${id}`);
      setProducts(currentProducts => currentProducts.filter(product => product.id !== id));
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4, textAlign: 'center' }}>
      {/* Title */}
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: 4 }}>
        Simple Card List
      </Typography>
      
      {/* Product List */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 3,
        maxWidth: 1200,
        margin: '0 auto'
      }}>
        {products.map(product => (
          <Card key={product.id} sx={{
            position: 'relative',
            maxWidth: 300,
            boxShadow: 3,
            ':hover': {
              boxShadow: 6,
            }
          }}>
            {/* Delete button at the top-left corner of the image */}
            <IconButton
              onClick={() => handleDelete(product.id)}
              aria-label="delete product"
              sx={{
                position: 'absolute',
                top: 8,
                left: 8,
                color: 'red',
                backgroundColor: 'white',
                zIndex: 1,
                boxShadow: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
            <CardMedia
              component="img"
              height="180"
              image={product.imageUrl || 'https://via.placeholder.com/150'}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                {product.name}
              </Typography>
              <Typography variant="body1" color="text.primary" sx={{ marginBottom: 1 }}>
                ${product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default ProductList;