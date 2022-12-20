import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const style = StyleSheet.create({
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 20,
  },
  statusCreatedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  statusCreatedText: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 8,
  },
  statusCreatedAmountText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    color: colors.gray200,
    backgroundColor: colors.gray400,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  statusCompletedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  statusCompletedText: {
    color: colors.purple,
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 8,
  },
  statusCompletedAmountText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    color: colors.gray200,
    backgroundColor: colors.gray400,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
});
