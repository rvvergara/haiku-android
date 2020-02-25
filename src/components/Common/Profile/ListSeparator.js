import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  separator: {
    justifyContent: 'center',
    marginRight: 5,
  },
});

const ListSeparator = () => (
  <View style={styles.separator}>
    <Icon
      name="cards-diamond"
      size={10}
    />
  </View>
);

export default ListSeparator;
