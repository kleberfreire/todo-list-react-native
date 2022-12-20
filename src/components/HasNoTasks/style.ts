import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 48,
  },

  imageClipBoard: {
    marginBottom: 16,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.gray300,
  },
  textSubtitle: {
    fontSize: 14,
    color: colors.gray300,
    lineHeight: 19.6,
  },
});
