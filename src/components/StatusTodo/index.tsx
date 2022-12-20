import {Text, View} from 'react-native';
import {style} from './style';

interface StatusTodoProps {
  created: number;
  closed: number;
}

export function StatusTodo({closed, created}: StatusTodoProps) {
  return (
    <View style={style.statusContainer}>
      <View style={style.statusCreatedContainer}>
        <Text style={style.statusCreatedText}>Criadas</Text>

        <Text style={style.statusCreatedAmountText}>{created}</Text>
      </View>
      <View style={style.statusCompletedContainer}>
        <Text style={style.statusCompletedText}>Concluídas</Text>

        <Text style={style.statusCompletedAmountText}>{closed}</Text>
      </View>
    </View>
  );
}
