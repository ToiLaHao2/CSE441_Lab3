import {useState} from 'react';
import {Alert, Text, TextInput, Button, View} from 'react-native';
import styles from './style'

const ProductAdd = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: images,
      }),
    })
      .then(res => res.json())
      .then(console.log);
    Alert.alert('Add successfull');
  };

  return (
    <View>
      <Text style={{color: 'blue', fontSize: 15, fontWeight: 800}}>
        Product Add
      </Text>
      <Text style={styles.textTitle}>Title</Text>
      <TextInput
        placeholder="Enter Title"
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.textTitle}>Description</Text>
      <TextInput
        placeholder="Enter Description"
        onChangeText={text => setDescription(text)}
      />
      <Text style={styles.textTitle}>Price</Text>
      <TextInput
        placeholder="Enter Price"
        onChangeText={text => setPrice(text)}
      />
      <Text style={styles.textTitle}>Discount Percentage</Text>
      <TextInput
        placeholder="Enter discount percentage"
        onChangeText={text => setDiscountPercentage(text)}
      />
      <Text style={styles.textTitle}>Rating</Text>
      <TextInput
        placeholder="Enter Rating"
        onChangeText={text => setRating(text)}
      />
      <Text style={styles.textTitle}>Stock</Text>
      <TextInput
        placeholder="Enter stock"
        onChangeText={text => setStock(text)}
      />
      <Text style={styles.textTitle}>Brand</Text>
      <TextInput
        placeholder="Enter brand"
        onChangeText={text => setBrand(text)}
      />
      <Text style={styles.textTitle}>Category</Text>
      <TextInput
        placeholder="Enter category"
        onChangeText={text => setCategory(text)}
      />
      <Text style={styles.textTitle}>Image</Text>
      <TextInput
        placeholder="Enter image URL(s)"
        onChangeText={text => setImage(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ProductAdd;
