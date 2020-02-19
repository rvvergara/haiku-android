import React, {useState} from 'react';
import {
  View, StyleSheet, TouchableOpacity, FlatList,
} from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import uuid from 'uuid';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    borderColor: 'red',
    borderWidth: 1,
    height: 40,
  },
});

const MultipleInput = ({ inputs, setInputs }) => {
  const [value, setValue] = useState('');
  const [collection, setCollection] = useState([]);

  const addInput = () => {
    setInputs([...inputs, value]);
    setCollection([...collection, { id: uuid(), value }]);
    setValue('');
  };

  const removeInput = (id) => {
    const filteredCollection = collection.filter((item) => item.id !== id);
    setCollection(filteredCollection);
    setInputs(filteredCollection.map((item) => item.value));
  };

  return (
    <View>
      <Text h4>Multiple Inputs Here</Text>
      <FlatList
        horizontal
        data={collection}
        keyExtractor={() => uuid()}
        renderItem={({item}) => (
          <View style={styles.inputContainer}>
            <Text>
              {item.value}
            </Text>
            <TouchableOpacity onPress={() => removeInput(item.id)}>
              <Icon name="remove-circle" size={30} />
            </TouchableOpacity>
          </View>
        )}
      />
      <Input
        placeholder="New Language"
        value={value}
        onChangeText={setValue}
        onSubmitEditing={addInput}
      />
    </View>
  );
};

export default MultipleInput;