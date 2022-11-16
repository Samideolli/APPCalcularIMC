import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, BackHandler, Alert } from 'react-native';



export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      alert("você está abaixo do peso" + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      alert("peso ideal!" + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      alert("levemente acima do peso!" + imc.toFixed(2));
    }
  }




  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder='Peso (Kg)'
        placeholderTextColor={"black"}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder='Altura (cm)'
        placeholderTextColor={"black"}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmmit}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7F50',
  },
  title: {
    textAlign: "CENTER",
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    color: "white"
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 15,
    padding: 10,
   
    fontSize: 23,
    color:"black",
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: "white",
    width: 100,
    height: 50,
    right: 0,
    left: 200,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },

});
