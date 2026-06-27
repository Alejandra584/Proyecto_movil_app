import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/presentation/views/login/login';
import { HomeScreen } from './src/presentation/views/home/Home';
import { RegisterScreen } from './src/presentation/views/register/Register';
import { AgendarCitaScreen } from './src/presentation/views/agendarcita/AgendarCita';
import { HistorialScreen } from './src/presentation/views/historial/Historial';
import { FacturacionScreen } from './src/presentation/views/facturacion/Facturacion';

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  RegisterScreen: undefined;
  AgendarCitaScreen: undefined;
  HistorialScreen: undefined;
  FacturacionScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="LoginScreen"
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: "Registro",
          }}
        />
        <Stack.Screen
          name="AgendarCitaScreen"
          component={AgendarCitaScreen}
          options={{
            headerShown: true,
            title: "Agendar Cita",
          }}
        />
        <Stack.Screen
          name="HistorialScreen"
          component={HistorialScreen}
          options={{
            headerShown: true,
            title: "Historial",
          }}
        />
        <Stack.Screen
          name="FacturacionScreen"
          component={FacturacionScreen}
          options={{
            headerShown: true,
            title: "Facturación",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;