import React from 'react';
import {
  View, TouchableOpacity, StyleSheet, Modal,
} from 'react-native';
import {Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import { uploaderModalStyles } from '../../style-objects/imageUploadStyle';

const styles = StyleSheet.create(uploaderModalStyles);

const ImageSelectionModal = ({
  visible, setVisible, captureImage, selectImage,
}) => (
  <Modal
    visible={visible}
    animationType="fade"
  >
    <View style={styles.selectionContainer}>
      <TouchableOpacity
        style={styles.imageSelection}
        onPress={selectImage}
      >
        <Text style={styles.selectionText}>Select existing image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageSelection}
        onPress={captureImage}
      >
        <Text style={styles.selectionText}>Take A Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles.imageSelection, ...styles.back}}
        onPress={() => setVisible(false)}
      >
        <Text style={styles.selectionText}>Back</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

ImageSelectionModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  captureImage: PropTypes.func.isRequired,
  selectImage: PropTypes.func.isRequired,
};

export default ImageSelectionModal;
