import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";

function NextButton({
    label = 'NEXT',
    buttonStyle = styles.nextButton,
    textStyle = styles.buttonText,
    disabled = false,
})

{

    const navigation = useNavigation();

    const nextPageHandler = () => {
        navigation.navigate(nextScreen);
    };

    return (
        <TouchableOpacity style={[buttonStyle, disabled ? styles.disabled : null]} 
                            onPress={disabled ? null : nextPageHandler} disabled={disabled}>
            <Text style={textStyle}>{label}</Text>
        </TouchableOpacity>
    );
}

NextButton.propTypes = {
    disabled: PropTypes.bool,
    nextScreen: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    nextButton:{
        backgroundColor: 'white',
        width: 80,
        borderColor: '#8CBDEB',
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1.5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },

    buttonText:{
        color: '#1F6BB2',
        fontFamily: 'poppins',
        fontWeight: 'bold',
        margin: 10,
    },

    disabled: {
        opacity: 10,
    }
})

export default NextButton;