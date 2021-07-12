import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e6ceff' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Home Screen</Text>
    </View>
  );
}

function MembershipScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e6ceff' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Membership Screen</Text>
    </View>
  );
}

function MyPageScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e6ceff' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>MyPage Screen</Text>
    </View>
  );
}

function CustomerServiceScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e6ceff' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>CustomerService Screen</Text>
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e6ceff' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Setting Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContentOptions={{activeTintColor: '#673ab7'}} initialRouteName="Home">
        <Drawer.Screen name="홈" component={HomeScreen} />
        <Drawer.Screen name="멤버십" component={MembershipScreen} />
        <Drawer.Screen name="마이페이지" component={MyPageScreen} />
        <Drawer.Screen name="고객센터" component={CustomerServiceScreen} />
        <Drawer.Screen name="설정" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}