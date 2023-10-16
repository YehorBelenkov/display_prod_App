// App.js
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ArticleList from './Article';
import ProductList from './ProductList';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Articles App</Text>
        <ArticleList />
      </View>
      <View style={{ flex: 1 }}>
        <Text>Articles App</Text>
        <ProductList />
      </View>
    </SafeAreaView>
  );
};

export default App;