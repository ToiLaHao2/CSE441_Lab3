import {useState} from 'react';
import {View, Text, FlatList, Image, TextInput, Button} from 'react-native';

const ProductSearch = () => {
  const [data, setData] = useState('');
  const [value, setValue] = useState('');
  let filePath = 'https://dummyjson.com/products';

  const searchProduct = () => {
    if (value != '')
      filePath = 'https://dummyjson.com/products/search?q=' + value;
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>
        Search Products
      </Text>
      <TextInput
        placeholder="Enter Title"
        onChangeText={text => setValue(text)}
      />
      <Button title="SEARCH" onPress={searchProduct}></Button>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Card>
            <Card.Title title="Product Detail" />
            <Card.Cover style={styles.image} source={{uri: item.thumbnail}} />
            <View style={{margin: 10}}>
              <Text style={{fontSize: 30}}>Title: {item.title}</Text>
              <Text>Description: {item.description}</Text>
              <Text>Prices: {item.price}</Text>
              <Text>Discount: {item.discountPercentage} off</Text>
              <Text>Rating: {item.rating}</Text>
              <Text>Stock: {item.stock}</Text>
              <Text>Brand: {item.brand}</Text>
              <Text>Category: {item.category}</Text>
            </View>
          </Card>
        )}
      />
    </View>
  );
};

export default ProductSearch;
