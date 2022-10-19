import {StatusBar} from 'react-native';
import {Home} from './src/screens/Home';

export function App() {
  return (
    <>
      <StatusBar barStyle="light" backgroundColor="transparent" translucent />
      <Home />
    </>
  );
}
