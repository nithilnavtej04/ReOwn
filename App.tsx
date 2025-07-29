import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {ThemeProvider} from './src/context/ThemeContext';

// Import all screens
import Index from './src/pages/Index';
import Auth from './src/pages/Auth';
import Home from './src/pages/Home';
import Reels from './src/pages/Reels';
import Sell from './src/pages/Sell';
import Messages from './src/pages/Messages';
import Profile from './src/pages/Profile';
import Chat from './src/pages/Chat';
import CreateAccount from './src/pages/CreateAccount';
import Categories from './src/pages/Categories';
import Notifications from './src/pages/Notifications';
import Settings from './src/pages/Settings';
import ReelComments from './src/pages/ReelComments';
import ShareSheet from './src/pages/ShareSheet';
import ProductDetail from './src/pages/ProductDetail';
import Search from './src/pages/Search';
import SellerProfile from './src/pages/SellerProfile';
import MyListings from './src/pages/MyListings';
import Favorites from './src/pages/Favorites';
import Reviews from './src/pages/Reviews';
import PrivacySecurity from './src/pages/PrivacySecurity';
import Location from './src/pages/Location';
import CategoryProducts from './src/pages/CategoryProducts';
import AdminReels from './src/pages/AdminReels';
import Saved from './src/pages/Saved';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
          }}>
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Reels" component={Reels} />
          <Stack.Screen name="Sell" component={Sell} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="ReelComments" component={ReelComments} />
          <Stack.Screen name="ShareSheet" component={ShareSheet} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="SellerProfile" component={SellerProfile} />
          <Stack.Screen name="MyListings" component={MyListings} />
          <Stack.Screen name="Favorites" component={Favorites} />
          <Stack.Screen name="Reviews" component={Reviews} />
          <Stack.Screen name="PrivacySecurity" component={PrivacySecurity} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="CategoryProducts" component={CategoryProducts} />
          <Stack.Screen name="AdminReels" component={AdminReels} />
          <Stack.Screen name="Saved" component={Saved} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;