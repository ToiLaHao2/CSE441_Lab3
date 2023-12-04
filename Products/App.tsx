/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import ProductList from './src/Products';
import ProductAdd from './src/ProductAdd';
import ProductSearch from './src/ProductSearch';
import ProductDetail from './src/ProductDetail';
import {BottomNavigation} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'ProductList',  title: 'Products',  focusedIcon: 'format-list-bulleted-square'},
    {key: 'ProductAdd', title: 'Add', focusedIcon: 'plus'},
    {key: 'ProductSearch', title: 'Search', focusedIcon: 'magnify'},
    {key: 'ProductDetail', title: 'Detail', focusedIcon: 'information'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    ProductList: ProductList,
    ProductAdd: ProductAdd,
    ProductSearch: ProductSearch,
    ProductDetail: ProductDetail,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}

export default App;
