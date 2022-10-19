import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  input: {
    width: 271,
    height: 54,
    backgroundColor: colors.gray500,
    borderRadius: 6,
    color: colors.gray100,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  form: {
    width: '100%',
    height: 54,
    alignItems: 'center',
  },
  buttonAdd: {
    width: 52,
    height: 52,
    backgroundColor: colors.blueDark,
  },
});
