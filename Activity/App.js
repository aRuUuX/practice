import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Forgot from './Pages/Forgot';
import Dashboard from './Pages/Home'; // Assuming your Home component is renamed to Dashboard
import Settings from './Pages/Settings';
import Account from './Pages/Account';
import { MaterialIcons } from '@expo/vector-icons'; // Importing MaterialIcons for the dashboard icon

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DashboardTabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'dashboard'; // Name of the icon from MaterialIcons
          } else if (route.name === 'Account') {
            iconName = 'person';
          }

          // Return MaterialIcons component with specified icon name, size, and color
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Forgot' component={Forgot} />
        <Stack.Screen name='Dashboard' component={DashboardTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
