import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import uuid from 'uuid';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    marginRight: 10,
    marginTop: 10,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textInput: {
    borderColor: 'red',
    borderWidth: 1,
    height: 40,
  },
  label: {
    color: '#20385a',
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 18,
  },
  icon: {
    fontSize: 20,
    color: 'red',
  },
});

const MultipleInput = ({
  inputs, setInputs, placeholder, label,
}) => {
  const collectionMapped = inputs ? inputs.map((input) => ({
    id: uuid(),
    value: input,
  })) : [];
  const [value, setValue] = useState('');
  const [collection, setCollection] = useState(collectionMapped);

  const addInput = () => {
    if (!value) return;
    setInputs([...inputs, value]);
    setCollection([...collection, {id: uuid(), value}]);
    setValue('');
  };

  const removeInput = (id) => {
    const filteredCollection = collection.filter((item) => item.id !== id);
    setCollection(filteredCollection);
    setInputs(filteredCollection.map((item) => item.value));
  };

  return (
    <View style={{marginTop: 10}}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.listContainer}>
          <FlatList
            horizontal
            scrollToOverflowEnabled={false}
            data={collection}
            keyExtractor={() => uuid()}
            renderItem={({item}) => (
              <View style={styles.inputContainer}>
                <Text style={styles.item}>{item.value}</Text>
                <TouchableOpacity onPress={() => removeInput(item.id)}>
                  <Icon name="remove-circle" style={styles.icon} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
      <View style={{position: 'relative', top: -20}}>
        <TextInput
          label=""
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          submit={addInput}
        />
      </View>
    </View>
  );
};

MultipleInput.propTypes = {
  inputs: PropTypes.instanceOf(Object).isRequired,
  setInputs: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default MultipleInput;
