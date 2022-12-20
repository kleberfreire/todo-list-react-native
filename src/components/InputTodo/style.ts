import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  form: {
    width: '100%',
    height: 54,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -27,
    paddingHorizontal: 29,
  },
  input: {
    width: '100%',
    height: 54,
    backgroundColor: colors.gray500,
    borderRadius: 6,
    color: colors.gray100,
    paddingHorizontal: 16,
    fontSize: 16,
    marginRight: 4,
  },
  buttonAdd: {
    width: 52,
    height: 52,
    backgroundColor: colors.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonAddImagePlus: {
    width: 16,
    height: 16,
  },
});
