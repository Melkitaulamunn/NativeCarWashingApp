import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Alert
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';





import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';

function Login(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    getValues,
  } = useForm({
    defaultValues: {
      username: 'furkan.turkyilmaz@gmail.com',
      password: 'Furkanturkyilmaz!.',
    },
  });

  const values = getValues();

  const backgroundStyle = {
    backgroundColor: '#FFFF',
    padding: 10,
  };

  const signIn = () => {
    console.log('Sıng In');

    auth()
      .signInWithEmailAndPassword(values.username, values.password)
      .then(() => {
        showMessage({
          type: 'success',
          message: 'Success Sign in!',
        });

        console.log('Sıgn in created user!');
      })
      .catch(error => {
        let message = error.message;

        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          message = 'That email address is already in use!';
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');

          message = 'That email address is invalid!';
        }

        console.error(error);

        showMessage({
          type: 'danger',
          message,
        });
      });
  };

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(values.username, values.password)
      .then(() => {
        console.log('Created user!');
      })
      .catch(error => {
        let message = '';

        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          message = 'That email address is already in use!';
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          message = 'That email address is invalid!';
        }

        console.error(error);

        showMessage({
          type: 'danger',
          message,
        });
      });
  };

  console.log('Error', errors);

  function onAuthStateChanged(userParams: any) {
    setUser(userParams);

    if (isLoading) {
      setIsLoading(false);
    }
  }

  const updateProfile = async () => {
    const update = {
      displayName: 'Furkan Türkyılmaz',
      photoURL:
        'https://media.licdn.com/dms/image/D4D03AQGJo0xi3-pMNw/profile-displayphoto-shrink_400_400/0/1684779461619?e=1690416000&v=beta&t=oQ-Q2bSDl7vjTTpPuw5Z7CwuK-Ks08Auz3CEe3V6900',
    };

    await auth().currentUser?.updateProfile(update);
  };

  async function signOut() {
    await auth().signOut();
  }

  async function updateEmailVerified() {
    user?.updatePhoneNumber('+905446014334');
  }

  const dbCheck = () => {
    const reference = database().ref('users');

    reference.once('value').then(snapshot => {
      Alert.alert(JSON.stringify(snapshot.val()));
    });
  };

  const dbSet = () => {
    database()
      .ref('/persons/info')
      .set({
        name: 'Ayşe Albayrak',
        age: 90,
        description: 'React Native Developer!',
      })
      .then(() => console.log('Data set.'));
  };

  const dbUpdate = () => {
    database()
      .ref('/persons/info')
      .set({
        description: 'React Native Developer & React JS',
      })
      .then(() => console.log('Data set.'));
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  }, []);

  useEffect(() => {
    console.log('User', user);
  }, [user]);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (user) {
    return (
      <SafeAreaView>
        <FlashMessage position="top" />
        <View style={{justifyContent: 'center', alignItems: 'center', gap: 10}}>
          <Image
            source={{uri: user?.photoURL}}
            style={{width: 100, height: 100}}
          />
          <Text>
            Welcome {user?.uid} {user?.email}
          </Text>
          <Button title="Sign Out" onPress={handleSubmit(signOut)} />
          <Button
            title="Update Profile"
            onPress={handleSubmit(updateProfile)}
          />
        </View>
      </SafeAreaView>
    );
  }

  if (!user) {
    return (
      <SafeAreaView style={backgroundStyle}>
        <FlashMessage position="top" />
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
              gap: 10,
            }}>
            <Text
              style={[
                styles.sectionTitle,
                {
                  color: isDarkMode ? Colors.white : Colors.black,
                },
              ]}>
              Kullanıcı Adı
            </Text>
            <Controller
              name="username"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Bu alan zorunludur!',
                },
                maxLength:{
                  value : 20,
                  message : "Şifre alanı en fazla  20 karakter olabilir"
                },
                minLength : {
                  value : 6,
                  message : "Şifre alanı en az 6 karakter olmalı"
                }
                
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.textInput}
                  placeholder="Kullanıcı Adı"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />

            {errors.username && (
              <Text style={[styles.error]}>{errors?.username?.message}</Text>
            )}

            <Text
              style={[
                styles.sectionTitle,
                {
                  color: isDarkMode ? Colors.white : Colors.black,
                },
              ]}>
              Şifre
            </Text>
            <Controller
              name="password"
              control={control}
              rules={{
                required: {value: true, message: 'Bu alan zorunludur!'},
                maxLength: {
                  value: 20,
                  message: 'Şifre alanı max 20 karakter olmalıdır!',
                },
                minLength: {
                  value: 6,
                  message: 'Şifre alanı min 6 karakter olmalıdır!',
                },
              }}
              render={({field: {onChange, value, onBlur}}) => (
                <TextInput
                  style={styles.textInput}
                  placeholder="Şifre"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />

            {errors.password && (
              <Text style={[styles.error]}>{errors?.password?.message}</Text>
            )}

            <Button title="Sign In" onPress={handleSubmit(signIn)} />
            <Button title="Sign Up" onPress={handleSubmit(signUp)} />
            <Button title="Db Check" onPress={handleSubmit(dbCheck)} />
            <Button title="Set Db" onPress={dbSet} />
            <Button title="Update Db" onPress={dbUpdate} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  error: {
    fontSize: 12,
    fontWeight: '600',
    color: 'red',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textInput: {
    padding: 15,
    borderWidth: 1,
    marginVertical: 15,
    borderRadius: 10,
    borderColor: 'gray',
  },
})











export default Login
