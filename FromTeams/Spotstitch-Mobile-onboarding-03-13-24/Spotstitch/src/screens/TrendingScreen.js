import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Post from '../components/Post';

const TrendingScreen = ({ route, navigation }) => {
const { posts } = route.params;

return (
<View style={styles.container}>
<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
<Text style={styles.backButtonText}>{'← Back to feed'}</Text>
</TouchableOpacity>
{posts.map((post) => (
<Post key={post.id} username={post.username} text={post.text} image={post.image} />
))}
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
padding: 10,
},
backButton: {
paddingVertical: 8,
paddingHorizontal: 12,
},
backButtonText: {
color: '#007AFF',
fontSize: 16,
},
});

export default TrendingScreen;