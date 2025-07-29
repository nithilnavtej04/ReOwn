import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const BottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const navItems = [
    {icon: 'home', label: 'Home', route: 'Home'},
    {icon: 'play', label: 'Reels', route: 'Reels'},
    {icon: 'plus', label: 'Sell', route: 'Sell'},
    {icon: 'message-circle', label: 'Messages', route: 'Messages'},
    {icon: 'user', label: 'Profile', route: 'Profile'},
  ];

  return (
    <View style={styles.container}>
      {navItems.map(item => {
        const isActive = route.name === item.route;
        const isSell = item.route === 'Sell';

        return (
          <TouchableOpacity
            key={item.route}
            style={[styles.navItem, isSell && styles.sellButton]}
            onPress={() => navigation.navigate(item.route as never)}
            activeOpacity={0.7}>
            <Icon
              name={item.icon}
              size={24}
              color={
                isSell
                  ? '#FFFFFF'
                  : isActive
                  ? '#8B5CF6'
                  : '#9CA3AF'
              }
            />
            <Text
              style={[
                styles.navLabel,
                isActive && !isSell && styles.activeLabel,
                isSell && styles.sellLabel,
              ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  sellButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 24,
    marginHorizontal: 8,
  },
  navLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#9CA3AF',
    marginTop: 4,
  },
  activeLabel: {
    color: '#8B5CF6',
  },
  sellLabel: {
    color: '#FFFFFF',
  },
});

export default BottomNavigation;