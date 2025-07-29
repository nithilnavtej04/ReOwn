import React from 'react';
import {View, Image, Text, StyleSheet, ViewStyle} from 'react-native';

interface AvatarProps {
  source?: {uri: string} | number;
  size?: number;
  fallback?: string;
  style?: ViewStyle;
}

const Avatar: React.FC<AvatarProps> = ({
  source,
  size = 40,
  fallback = '?',
  style,
}) => {
  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return (
    <View style={[styles.container, avatarStyle, style]}>
      {source ? (
        <Image source={source} style={[styles.image, avatarStyle]} />
      ) : (
        <View style={[styles.fallback, avatarStyle]}>
          <Text style={[styles.fallbackText, {fontSize: size * 0.4}]}>
            {fallback}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  fallback: {
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default Avatar;