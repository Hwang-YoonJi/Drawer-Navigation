# React Native - Drawer Navigation
Drawer Navigation Study :)

## Demo

<img src="https://user-images.githubusercontent.com/63582123/125731014-e006c262-0e3e-457f-8c8d-adf0be37904d.jpeg" width="347" height="599">
<img src="https://user-images.githubusercontent.com/63582123/125731042-ae3edf21-f1ed-45aa-9f66-607884760498.jpeg" width="347" height="599">
<img src="https://user-images.githubusercontent.com/63582123/125731075-09a9920c-6b41-4f86-982a-e972134bcfc0.jpeg" width="347" height="599">
<img src="https://user-images.githubusercontent.com/63582123/125731084-bdc136ad-32f2-4659-973a-cd992e976bbb.jpeg" width="347" height="599">
<img src="https://user-images.githubusercontent.com/63582123/125731090-6751c1f9-c4a5-463d-b4ca-ba8c0a589f54.jpeg" width="347" height="599">
<img src="https://user-images.githubusercontent.com/63582123/125731094-471a7866-17ce-4185-866c-2f0459553262.jpeg" width="347" height="599">

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Home Screen</Text>
    </View>
  );
}

function MembershipScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Membership Screen</Text>
    </View>
  );
}

function MyPageScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>MyPage Screen</Text>
    </View>
  );
}

function CustomerServiceScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>CustomerService Screen</Text>
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffcdd2' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Setting Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContentOptions={{activeTintColor: '#673ab7'}} initialRouteName="Home" 
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