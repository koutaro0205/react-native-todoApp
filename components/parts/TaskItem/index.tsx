import React from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { Task } from '../../../@types/data';

type Props = {
  task: Task;
  handleDelete: (task: Task) => void;
  handleDone: (task: Task) => void;
}

const TaskItem: React.FC<Props> = ({task, handleDelete, handleDone}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} defaultValue={task.title} editable={!task.isDone}/>
      <Button onPress={() => {handleDone(task)}} title={task.isDone ? '済！' : '完了'}/>
      <Button onPress={() => {handleDelete(task)}} title={'削除'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 5,
  },
  text: {
    fontSize: 18,
  },
  input: {
    fontSize: 18,
    width: 180,
    height: 20,
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
});

export default TaskItem