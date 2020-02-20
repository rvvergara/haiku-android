import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, TouchableOpacity,
} from 'react-native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { handleChooseImage, handleCaptureImage } from '../../utils/formHelpers';
import ImageSelectionModal from './ImageSelectionModal';
import { uploaderStyles } from '../../style-objects/imageUploadStyle';

const styles = StyleSheet.create(uploaderStyles);

const ImageUploader = ({ imageUri, setFiles }) => {
  const [visible, setVisible] = useState(false);

  const selectImage = () => {
    handleChooseImage(setFiles);
    setVisible(false);
  };

  const captureImage = () => {
    handleCaptureImage(setFiles);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: imageUri}}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={styles.selectIconContainer}
      >
        <Icon name="camera" style={styles.selectIcon} />
      </TouchableOpacity>
      <ImageSelectionModal
        visible={visible}
        setVisible={setVisible}
        captureImage={captureImage}
        selectImage={selectImage}
      />
    </View>
  );
};

ImageUploader.propTypes = {
  imageUri: PropTypes.string.isRequired,
  setFiles: PropTypes.func.isRequired,
};

export default ImageUploader;
