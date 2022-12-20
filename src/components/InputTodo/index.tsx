import {useState} from 'react';
import {TextInput, View, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../styles/colors';

import {styles} from './style';

interface InputTodoProps {
  addTodo: (todo: string) => void;
}

export function InputTodo({addTodo}: InputTodoProps) {
  const [todo, setTodo] = useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray300}
        onChangeText={setTodo}
        value={todo}
      />
      <TouchableOpacity style={styles.buttonAdd} onPress={() => addTodo(todo)}>
        <Image
          source={require('../../assets/plus-circle.png')}
          style={styles.buttonAddImagePlus}
        />
      </TouchableOpacity>
    </View>
  );
}
