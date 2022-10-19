import {View, Image} from 'react-native';
import {styles} from './style';
import {InputTodo} from '../../components/InputTodo';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logoImgContainer}>
        <Image source={require('../../assets/Logo.png')} />
      </View>
      <View style={styles.todoContainer}>
        <InputTodo />
      </View>
    </View>
  );
}
