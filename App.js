import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import AppContainer from './src/navigation/AppNavigator';

export default function App() {
  return (
    <PaperProvider>
      <AppContainer />
    </PaperProvider>
  );
}
