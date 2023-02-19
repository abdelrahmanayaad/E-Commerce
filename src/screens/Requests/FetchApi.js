import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MainButton from '../../components/MainButton';
import {BoldFontFamily, FONTS, MARGIN} from '../../constants/Constants';

export default function FetchApi() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getReposHandler = () => {
    setIsLoading(true);
    fetch('https://api.github.com/users/abdelrahmanayaad/repos')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then(jsonResponse => {
        setRepos(jsonResponse);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <View style={styles.container}>
      {repos.map((el, idx) => {
        return (
          <View key={idx} style={styles.repoName}>
            <Text style={styles.getReposTitle}>{el.name}</Text>
          </View>
        );
      })}
      <MainButton
        title="Get Repos"
        isLoading={isLoading}
        onPress={getReposHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingHorizontal: 105,
  },
  button: {
    width: 120,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  getReposTitle: {
    fontFamily: BoldFontFamily,
    color: '#FFF',
    fontSize: FONTS.h5,
  },
  repoName: {
    width: 200,
    height: 60,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12345678',
    marginBottom: MARGIN.mdMargin,
    alignSelf: 'center',
  },
});
