import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.grey700,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 173,
    flexDirection: 'row',
  },
  contentText: {
    flexDirection: 'row',
  },
  titleTo: {
    color: theme.colors.BlueDark,
    fontFamily: theme.font_family.exBold,
    fontSize: theme.font_size.xlg,
  },
  titleDo: {
    color: theme.colors.purpleDark,
    fontFamily: theme.font_family.exBold,
    fontSize: theme.font_size.xlg,
  },
  logoImg: {
    marginRight: 8,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    height: 54,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
    gap: 4,
  },
  input: {
    height: 54,
    width: '75%',
    backgroundColor: theme.colors.grey500,
    borderRadius: 5,
    borderColor: theme.colors.grey600,
    borderWidth: 1,
    padding: 16,
    fontSize: theme.font_size.lg,
    color: theme.colors.grey100,
  },
  button: {
    width: 54,
    height: 54,
    backgroundColor: theme.colors.BlueDark,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: theme.colors.grey300,
  },
})
