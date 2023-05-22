import { View, Text, Image } from 'react-native'
import { styles } from './styles'

export function EmptyArea() {
  return (
    <View style={styles.emptyContainer}>
      <Image source={require('../../../assets/clipboard.png')} alt="" />
      <Text style={styles.boldText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.normalText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
