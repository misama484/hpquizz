import { View, StyleSheet, Text } from 'react-native';

const Question = () => {
  return (
    <View style={styles.container}>
      <Text>Question</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default Question