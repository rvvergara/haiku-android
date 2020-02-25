import React from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, FlatList,
} from 'react-native';
import { Text } from 'react-native-elements';
import ListSeparator from './ListSeparator';
import { profileStyles } from '../../../style-objects/profileStyles';

const styles = StyleSheet.create(profileStyles);

const ListBox = ({ list, title }) => (
  <View style={styles.card}>
    <Text style={styles.boxTitle}>{title}</Text>
    <FlatList
      ItemSeparatorComponent={() => <ListSeparator />}
      style={styles.list}
      horizontal
      data={list}
      keyExtractor={(item) => item}
      renderItem={({item}) => (
        <Text style={styles.listItem}>{item}</Text>
      )}
    />
  </View>
);

ListBox.propTypes = {
  list: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
};

export default ListBox;
