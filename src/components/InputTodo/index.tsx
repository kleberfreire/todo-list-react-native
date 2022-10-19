import {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {colors} from '../../styles/colors';

import {styles} from './style';
export function InputTodo() {
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
      <TouchableOpacity style={styles.buttonAdd}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}
