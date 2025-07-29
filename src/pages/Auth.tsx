import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Auth = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [isOtpStep, setIsOtpStep] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = () => {
    if (!isOtpStep) {
      setIsOtpStep(true);
    } else {
      navigation.navigate('Home' as never);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {isOtpStep ? 'Verify OTP' : 'Sign In'}
        </Text>
      </View>

      <View style={styles.content}>
        {!isOtpStep ? (
          <>
            <Input
              label="Email or Phone"
              placeholder="Enter your email or phone number"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              rightIcon={
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={20}
                    color="#9CA3AF"
                  />
                </TouchableOpacity>
              }
            />

            <Button
              title="Send OTP"
              onPress={handleLogin}
              variant="reown"
              size="lg"
              style={styles.button}
            />
          </>
        ) : (
          <>
            <View style={styles.otpHeader}>
              <Text style={styles.otpDescription}>
                We've sent a verification code to {email}
              </Text>
            </View>

            <Input
              label="Enter OTP"
              placeholder="Enter 6-digit code"
              value={otp}
              onChangeText={setOtp}
              keyboardType="numeric"
              maxLength={6}
              inputStyle={styles.otpInput}
            />

            <Button
              title="Verify & Sign In"
              onPress={handleLogin}
              variant="reown"
              size="lg"
              style={styles.button}
            />

            <TouchableOpacity onPress={() => setIsOtpStep(false)}>
              <Text style={styles.linkText}>Didn't receive code? Resend</Text>
            </TouchableOpacity>
          </>
        )}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text
              style={styles.linkText}
              onPress={() => navigation.navigate('CreateAccount' as never)}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    padding: 24,
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  otpHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  otpDescription: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  otpInput: {
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 4,
  },
  button: {
    marginTop: 24,
  },
  footer: {
    alignItems: 'center',
    marginTop: 32,
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
  },
  linkText: {
    color: '#8B5CF6',
    fontWeight: '500',
  },
});

export default Auth;