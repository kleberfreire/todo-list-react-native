import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray700,
  },
  logoImgContainer: {
    marginTop: 70,
    alignItems: 'center',
    height: 124,
  },
  todoContainer: {
    backgroundColor: colors.gray600,
    height: '100%',
  },
});
