import { StyleSheet } from 'react-native'
import { theme } from '../../core/theme'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    phoneContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },

    phoneText: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    messageText: {
        fontSize: 18,
    },

    button: {
        marginTop: 10,
        marginBottom: 20,
        width: 130,
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: '#8CBDEB',
    },

    buttonText: {
        color: '#8CBDEB',
        fontWeight: 'bold',
    },

    row: {
        flexDirection: 'row',
    },
    
    codeText: {
        color: theme.colors.text,
        fontWeight: 'bold',
    },

    link: {
        fontWeight: 'bold',
        color: theme.colors.link,
    },
})
