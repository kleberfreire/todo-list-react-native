import {View, Image} from 'react-native';
import {styles} from './style';
import {InputTodo} from '../../components/InputTodo';
import {StatusTodo} from '../../components/StatusTodo';
import {HasNoTasks} from '../../components/HasNoTasks';
import {TaskItem} from '../../components/TaskItem';
import {useState} from 'react';

export interface ITodo {
  id: number;
  todo: string;
  Opened: boolean;
}

export function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function addTodo(todo: string): void {
    setTodos(prevState => [
      ...prevState,
      {
        id: prevState.length + 1,
        todo,
        Opened: true,
      },
    ]);
  }

  function toggleOpenedTodo(todo: ITodo) {
    const todoAux = [...todos];
    const todoFind = todoAux.find(t => t.id === todo.id);
    if (todoFind) {
      todoFind.Opened = !todo.Opened;
    } else {
      return;
    }

    setTodos(todoAux);
  }

  function removeTodo(id: number) {
    const todoRemoved = todos.filter(t => t.id !== id);
    setTodos(todoRemoved);
  }

  const createdQtd = todos.length;
  const closedQtd = todos.filter(t => t.Opened === false).length;

  return (
    <View style={styles.container}>
      <View style={styles.logoImgContainer}>
        <Image source={require('../../assets/Logo.png')} />
      </View>
      <View style={styles.todoContainer}>
        <InputTodo addTodo={addTodo} />
        <StatusTodo created={createdQtd} closed={closedQtd} />
        {todos.length > 0 ? (
          todos.map((item, index) => (
            <TaskItem
              key={`${index}${item}`}
              removeTodo={removeTodo}
              todo={item}
              toggleOpenedTodo={toggleOpenedTodo}
            />
          ))
        ) : (
          <HasNoTasks />
        )}
      </View>
    </View>
  );
}
