import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    education: '',
    occupation: '',
    feedback: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    setFormData({
      name: '',
      age: '',
      gender: '',
      education: '',
      occupation: '',
      feedback: '',
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Survey Form</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={formData.name}
          onChangeText={(text) => handleInputChange('name', text)}
          placeholder="Enter your name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age:</Text>
        <TextInput
          style={styles.input}
          value={formData.age}
          onChangeText={(text) => handleInputChange('age', text)}
          placeholder="Enter your age"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender:</Text>
        <TextInput
          style={styles.input}
          value={formData.gender}
          onChangeText={(text) => handleInputChange('gender', text)}
          placeholder="Enter your gender"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Education:</Text>
        <TextInput
          style={styles.input}
          value={formData.education}
          onChangeText={(text) => handleInputChange('education', text)}
          placeholder="Enter your education level"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Occupation:</Text>
        <TextInput
          style={styles.input}
          value={formData.occupation}
          onChangeText={(text) => handleInputChange('occupation', text)}
          placeholder="Enter your occupation"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Feedback:</Text>
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
          value={formData.feedback}
          onChangeText={(text) => handleInputChange('feedback', text)}
          placeholder="Enter your feedback"
          multiline
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#0073b1',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SurveyForm;
