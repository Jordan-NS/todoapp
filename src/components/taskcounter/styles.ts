import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.gray[600],
    height: 80,
    paddingTop: 32,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createdText: {
    color: colors.blue.base,
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  concludeText: {
    color: colors.purple.base,
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  counterNumber: {
    color: colors.gray[100],
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: colors.gray[500],
    margin: 4,
    padding: 4,
    borderRadius: 50,
  },
});