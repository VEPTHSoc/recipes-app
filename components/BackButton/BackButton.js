import React from 'react';
import  { View , StyleSheet, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

const BackButton=(props) =>{
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.btnContainer}>
            <Image source={require('')} style={styles.btnIcon} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    btnContainer: {
      flex: 1,
      alignItems: 'center',
      borderRadius: 180,
      padding: 8,
      margin: 10,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3
    },
    btnIcon: {
      height: 17,
      width: 17
    }
  });

  BackButton.PropTypes = {
      onPress: PropTypes.func
  }

  export default BackButton;