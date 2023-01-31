import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, SafeAreaView, View, Text } from 'react-native';
export default function App() {

    const printConsole = () => {
    console.log('Hi kuya ton...');
    }

    return (
      <View>
          <Text>Hello</Text>
          <Button title="Log In" onPress={printConsole}></Button>
      </View>
    );
  }

  const styleSheet = StyleSheet.create({

  });



