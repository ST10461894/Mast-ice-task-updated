import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  // Function to validate inputs
  const validateInputs = () => {
    if (num1 === '' || isNaN(num1)) {
      Alert.alert('Invalid input', 'Please enter a valid number for the first input.');
      return false;
    }
    if (num2 === '' || isNaN(num2)) {
      Alert.alert('Invalid input', 'Please enter a valid number for the second input.');
      return false;
    }
    return true;
  };

  const handleCalculation = (type) => {
    if (!validateInputs()) return;

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let calcResult;

    switch (type) {
      case 'add':
        calcResult = number1 + number2;
        break;
      case 'subtract':
        calcResult = number1 - number2;
        break;
      case 'multiply':
        calcResult = number1 * number2;
        break;
      case 'divide':
        if (number2 === 0) {
          Alert.alert('Error', 'Cannot divide by zero!');
          return;
        }
        calcResult = number1 / number2;
        break;
      case 'power':
        calcResult = Math.pow(number1, number2);
        break;
      case 'sqrt':
        if (number1 < 0) {
          Alert.alert('Error', 'Cannot calculate square root of a negative number!');
          return;
        }
        calcResult = Math.sqrt(number1);
        break;
      default:
        calcResult = 0;
    }

    setResult(calcResult);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator App</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        onChangeText={setNum1}
        value={num1}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        onChangeText={setNum2}
        value={num2}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('add')}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('subtract')}>
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('multiply')}>
          <Text style={styles.buttonText}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('divide')}>
          <Text style={styles.buttonText}>Divide</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('power')}>
          <Text style={styles.buttonText}>To the Power Of</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('sqrt')}>
          <Text style={styles.buttonText}>Square Root</Text>
        </TouchableOpacity>
      </View>

      {result !== null && (
        <Text style={styles.result}>Result: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#d3d3d3', // Grey background color
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: 10,
    backgroundColor: 'white', // White input background for better contrast
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, // Space between rows
    width: '100%', // Full width for buttons to spread across
    paddingHorizontal: 20, // Add padding to the sides
  },
  button: {
    backgroundColor: 'black', // Black button color
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 5, // Space between buttons
    borderRadius: 5,
    flex: 1, // Ensures buttons are evenly spaced
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // White text for contrast on black button
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
  },
});
