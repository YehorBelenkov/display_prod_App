import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, SafeAreaView } from 'react-native';

const ArticleList = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'Article 1', content: 'Full content of Article 1' },
    { id: 2, title: 'Article 2', content: 'Full content of Article 2' },
    // Add more articles as needed
  ]);

  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <SafeAreaView>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedArticle(item)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <Modal visible={!!selectedArticle} animationType="slide">
        <SafeAreaView>
          <Text>{selectedArticle?.title}</Text>
          <Text>{selectedArticle?.content}</Text>
          <TouchableOpacity onPress={() => setSelectedArticle(null)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default ArticleList;