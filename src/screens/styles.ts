import { StyleSheet } from 'react-native'
import { theme } from '../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey600,
  },
  tasksContainer: {
    flex: 1,
    marginTop: 55,
    marginHorizontal: 24,
  },
  tasksCreated: {
    color: theme.colors.blue,
    fontSize: theme.font_size.sm,
    fontFamily: theme.font_family.exBold,
  },
  tasksDone: {
    color: theme.colors.purple,
    fontSize: theme.font_size.sm,
    fontFamily: theme.font_family.exBold,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  taskTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  counterContainer: {
    backgroundColor: theme.colors.grey400,
    height: 19,
    width: 25,
    borderRadius: 999,
    alignItems: 'center',
  },
  counterTask: {
    color: theme.colors.grey200,
    fontSize: theme.font_size.sm,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
