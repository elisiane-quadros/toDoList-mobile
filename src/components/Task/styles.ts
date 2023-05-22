import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 2,
    backgroundColor: theme.colors.grey500,
    borderRadius: 5,
    borderColor: theme.colors.grey600,
    borderWidth: 1,
    padding: 12,
    fontSize: theme.font_size.lg,
    color: theme.colors.grey100,
  },
  textContainer: {
    width: '80%',
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textCreated: {
    fontSize: theme.font_size.md,
    color: theme.colors.grey100,
  },
  textDone: {
    fontSize: theme.font_size.md,
    color: theme.colors.grey300,
    textDecorationLine: 'line-through',
  },
})
