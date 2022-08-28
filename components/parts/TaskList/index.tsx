import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { selectTasks, deleteTask, checkedTask } from '../../../slices/task/taskSlice'
import TaskItem from '../TaskItem'
import { useDispatch } from 'react-redux'
import { Task } from '../../../@types/data'

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleDelete = (task: Task) => {
    dispatch(deleteTask(task));
  };

  const handleDone = (task: Task) => {
    dispatch(checkedTask(task));
  };

  return (
    <View style={styles.container}>
      {
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleDone={handleDone}
          />
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
});

export default TaskList
