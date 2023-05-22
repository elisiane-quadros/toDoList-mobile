import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './styles'
import { theme } from '../../theme'
import { TaskDTO } from '../../dtos/TaskDTO'

type taskProps = {
  task: TaskDTO
  onUpdate: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function Task({ task, onUpdate, onDeleteTask }: taskProps) {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => onUpdate(task.id)}>
        <MaterialCommunityIcons
          name={
            task.isCompleted
              ? 'checkbox-marked-circle'
              : 'checkbox-blank-circle-outline'
          }
          size={20}
          color={task.isCompleted ? theme.colors.purple : theme.colors.blue}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={task.isCompleted ? styles.textDone : styles.textCreated}>
          {task.title}
        </Text>
      </View>

      <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={24}
          color={theme.colors.grey300}
        />
      </TouchableOpacity>
    </View>
  )
}
