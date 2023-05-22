import { useState } from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Header } from '../components/Header'
import { Task } from '../components/Task'
import { EmptyArea } from '../components/EmptyArea'
import { TaskDTO } from '../dtos/TaskDTO'
import { v4 as uuidv4 } from 'uuid'

export function HomeScreen() {
  const [tasks, setTasks] = useState<TaskDTO[]>([])
  const [newTask, setNewTask] = useState('')

  function handleTaskAdd() {
    setTasks((tasks) => [
      { id: uuidv4(), isCompleted: false, title: newTask },
      ...tasks,
    ])
    setNewTask('')
  }

  function handleUpdate(id: string) {
    const newTask = tasks.map((tsk: TaskDTO) => {
      if (id === tsk.id) {
        return {
          ...tsk,
          isCompleted: !tsk.isCompleted,
        }
      }
      return tsk
    })

    setTasks(newTask)
  }

  function handleDeleteTask(id: string) {
    Alert.alert('Excluir', `Quer mesmo excluir essa tarefa?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () =>
          setTasks((deleteTask) => deleteTask.filter((del) => id !== del.id)),
      },
    ])
  }

  const countCreatedTask = tasks.length
  const countFinishedTask = tasks.filter(
    ({ isCompleted }) => isCompleted,
  ).length

  return (
    <View style={styles.container}>
      <Header
        task={newTask}
        onChangeText={setNewTask}
        onPress={handleTaskAdd}
      />
      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.taskTitle}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterTask}>{countCreatedTask}</Text>
            </View>
          </View>
          <View style={styles.taskTitle}>
            <Text style={styles.tasksDone}>Concluídas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterTask}>{countFinishedTask}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id!}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              task={item}
              onUpdate={handleUpdate}
              onDeleteTask={handleDeleteTask}
            />
          )}
          ListEmptyComponent={<EmptyArea />}
        />
      </View>
    </View>
  )
}
