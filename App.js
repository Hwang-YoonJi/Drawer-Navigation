import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>홈</Text>
      <Button onPress={() => navigation.navigate('설정')} title="Go to Setting" />
    </View>
  );
}

function MembershipScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>멤버십</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function MyPageScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>마이페이지</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function CustomerServiceScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>고객센터</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>설정</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="홈" component={HomeScreen} />
        <Drawer.Screen name="멤버십" component={MembershipScreen} />
        <Drawer.Screen name="마이페이지" component={MyPageScreen} />
        <Drawer.Screen name="고객센터" component={CustomerServiceScreen} />
        <Drawer.Screen name="설정" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}