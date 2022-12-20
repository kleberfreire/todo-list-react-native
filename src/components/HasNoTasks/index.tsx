import {Image, Text, View} from 'react-native';
import {styles} from './style';

export function HasNoTasks() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Clipboard.png')}
        style={styles.imageClipBoard}
      />
      <View>
        <Text style={styles.textTitle}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.textSubtitle}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
