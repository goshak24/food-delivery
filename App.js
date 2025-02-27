import Navigation from "./src/navigation";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'PlayfairDisVar': require('./assets/fonts/PlayfairDisVar.ttf'),
    'Roboto-Reg': require('./assets/fonts/Roboto-Regular.ttf'), 
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <Navigation /> 
  );
} 