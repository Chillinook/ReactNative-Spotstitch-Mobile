import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function Paragraph(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    lineHeight: 50,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
  },
})