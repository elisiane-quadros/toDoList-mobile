import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    borderTopColor: theme.colors.grey300,
  },
  boldText: {
    marginTop: 16,
    fontWeight: '700',
    fontSize: theme.font_size.md,
    color: theme.colors.grey300,
  },
  normalText: {
    color: theme.colors.grey300,
    fontSize: theme.font_size.md,
  },
})
