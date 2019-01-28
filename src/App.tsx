import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'node-webrender/lib/react'

const App = () => {
  return (
    <View style={styles.app}>
      <View>
        <Text style={styles.heading}>node-webrender-starter</Text>
        <Text>If you run this in dev mode, your changes should be reflected instantly</Text>
      </View>

      <Button title="Close" onPress={() => process.exit()} />
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 30,
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },

  heading: {
    fontSize: 24,
    lineHeight: 34
  }
})

export default App
