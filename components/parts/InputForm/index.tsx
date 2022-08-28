import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { newTask } from '../../../slices/task/taskSlice';

const InputForm: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const handleChange = (val: string) => {
    setInputValue(val);
  };

  const handleClick = () => {
    dispatch(newTask(inputValue));
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleChange}
      />
      <Button onPress={handleClick} title={'追加'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
  },
  input: {
    fontSize: 22,
    width: 220,
    height: 30,
    padding: 20,
    borderColor: 'grey',
    borderWidth: 1,
  },
});

export default InputForm
