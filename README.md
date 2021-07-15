# React Native - Drawer Navigation
Drawer Navigation Study :)

## Demo

<img src="https://user-images.githubusercontent.com/63582123/125738512-4891854c-e91e-4062-9145-16cb837ea83c.jpeg" width="347" height="599">
<img src="(https://user-images.githubusercontent.com/63582123/125738516-4e7aef9f-37ab-4d85-87ca-fd5549a94e52.jpeg" width="347" height="599">
<img src="https://user-images.githubusercontent.com/63582123/125738533-1a888977-eb83-4f12-895f-fbc84bf27b18.jpeg" width="347" height="599">
<img src="https://user-images.githubusercontent.com/63582123/125738542-de6f2863-e31e-4ec6-8da9-59dcc94827b7.jpeg" width="347" height="599">
<img src="https://user-images.githubusercontent.com/63582123/125738550-f084481e-d9bb-4c64-9d6c-c9d2c96ec02a.jpeg" width="347" height="599">
<img src="https://user-images.githubusercontent.com/63582123/125738560-bff2d884-273e-4804-9bb6-44c31183ba7c.jpeg" width="347" height="599">

## Installation

```bash
npm install @react-navigation/drawer
```

## Usage

### App.js

```jsx
import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ede7f6' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Home Screen</Text>
    </View>
  );
}

function MembershipScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ede7f6' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Membership Screen</Text>
    </View>
  );
}

function MyPageScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ede7f6' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>MyPage Screen</Text>
    </View>
  );
}

function CustomerServiceScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ede7f6' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>CustomerService Screen</Text>
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ede7f6' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Setting Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContentOptions={{activeTintColor: '#673ab7', backgroundColor: '#ede7f6'}} initialRouteName="Home" 
        screenOptions={{headerShown: true, headerStyle:{backgroundColor: '#e6ceff'}, headerTintColor: '#673ab7' }} >
        <Drawer.Screen name="홈" component={HomeScreen} />
        <Drawer.Screen name="멤버십" component={MembershipScreen} />
        <Drawer.Screen name="마이페이지" component={MyPageScreen} />
        <Drawer.Screen name="고객센터" component={CustomerServiceScreen} />
        <Drawer.Screen name="설정" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// initialRouteName : 네비게이터의 첫 번째 로드 시 렌더링할 경로의 이름. 스택의 기본 화면을 설정. 
```