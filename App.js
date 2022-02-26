import { StatusBar } from 'expo-status-bar';
import {useReducer} from 'react';
import { StyleSheet, Text } from 'react-native';
import Navigator from './App/Navigator/Navigator';
import { initialState,reducer, AppContext } from './App/Globals/store';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state,dispatch]}>
      <Navigator></Navigator>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
