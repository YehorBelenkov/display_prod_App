import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, SafeAreaView } from 'react-native';

const ProductList = () => {
  const products = [
    { id: 1, image: 'https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg', description: 'Product 1 description' },
    { id: 2, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', description: 'Product 2 description' },
    // Add more products as needed
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <SafeAreaView>
      {products.map((product) => (
        <TouchableOpacity key={product.id} onPress={() => setSelectedProduct(product)}>
          <View>
            <Image source={{ uri: product.image }} style={{ width: 50, height: 50 }} />
            <Text>{product.description}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <Modal visible={!!selectedProduct} animationType="slide">
        <SafeAreaView>
          <Image source={{ uri: selectedProduct?.image }} style={{ width: 150, height: 150 }} />
          <Text>{selectedProduct?.description}</Text>
          <TouchableOpacity onPress={() => setSelectedProduct(null)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default ProductList;