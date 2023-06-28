import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#212121' }}>
      <AppNavigator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
