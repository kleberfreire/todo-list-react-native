import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ITodo} from '../../screens/Home';
import {styles} from './style';

interface TaskItemProps {
  todo: ITodo;
  removeTodo: (id: number) => void;
  toggleOpenedTodo: (todo: ITodo) => void;
}

export function TaskItem({removeTodo, toggleOpenedTodo, todo}: TaskItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={todo.Opened ? styles.checkboxChecked : styles.checkboxOpen}
        onPress={() => toggleOpenedTodo(todo)}>
        {todo.Opened && <Image source={require('../../assets/checked.png')} />}
      </TouchableOpacity>
      <Text
        style={todo.Opened ? styles.tasksTextOpened : styles.tasksTextClose}>
        {todo.todo}
      </Text>
      <TouchableOpacity onPress={() => removeTodo(todo.id)}>
        <Image source={require('../../assets/Trash.png')} />
      </TouchableOpacity>
    </View>
  );
}
