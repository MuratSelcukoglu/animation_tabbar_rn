import React from 'react';
import Navigation from './src/router/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LanguageProvider } from './src/context/LanguageContext';

const App = () => {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Navigation />
        </GestureHandlerRootView>
      </LanguageProvider>
    </SafeAreaProvider>
  );
};

export default App;
