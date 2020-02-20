import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Image, Button } from 'react-native-elements';
import { handleChooseImage } from '../../utils/formHelpers';

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
});

const ImageUploader = ({ imageUri, setFiles }) => (
  <View>
    <Image
      source={{uri: imageUri}}
      style={styles.image}
    />
    <Button
      title="Change Pic"
      onPress={() => handleChooseImage(setFiles)}
    />
  </View>
);

ImageUploader.propTypes = {
  imageUri: PropTypes.string.isRequired,
  setFiles: PropTypes.func.isRequired,
};

export default ImageUploader;
