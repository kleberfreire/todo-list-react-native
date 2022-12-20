import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.gray500,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 8,
    width: '100%',
    marginBottom: 8,
  },
  checkboxOpen: {
    width: 17.5,
    height: 17.5,
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 8.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    width: 17.5,
    height: 17.5,
    borderRadius: 8.75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purpleDark,
  },
  tasksTextOpened: {
    color: colors.gray100,
    fontSize: 14,
    marginHorizontal: 12,
    flex: 1,
  },
  tasksTextClose: {
    color: colors.gray300,
    fontSize: 14,
    marginHorizontal: 12,
    flex: 1,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
