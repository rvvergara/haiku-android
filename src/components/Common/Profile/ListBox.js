import React from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, FlatList,
} from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { profileStyles } from '../../../style-objects/profileStyles';

const styles = StyleSheet.create(profileStyles);

const ListBox = ({ list, title }) => (
  <View style={styles.card}>
    <Text style={styles.listTitle}>{title}</Text>
    <FlatList
      ItemSeparatorComponent={() => (
        <View style={{justifyContent: 'center', marginRight: 5}}>
          <Icon
            name="cards-diamond"
            size={10}
          />
        </View>
      )}
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
