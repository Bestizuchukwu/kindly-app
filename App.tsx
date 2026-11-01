import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import OnboardingScreen from './src/screens/OnboardingScreen';

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        {showOnboarding ? (
          <OnboardingScreen onContinue={() => setShowOnboarding(false)} />
        ) : (
          <AppNavigator />
        )}
      </NavigationContainer>
    </>
  );
}
