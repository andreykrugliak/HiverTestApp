import React, {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {SearchBar, Header} from 'react-native-elements';

const AppHeader = ({onChangeSearch, searchQuery}) => {
  const [visible, setVisible] = useState<boolean>(false);

  const openMenu = () => setVisible(true);

  useEffect(() => {
    if (!searchQuery) {
      setVisible(false);
    }
  }, [searchQuery]);

  if (visible) {
    return (
      <SafeAreaView>
        <SearchBar
          containerStyle={s.searchContainer}
          inputContainerStyle={s.searchInput}
          lightTheme={true}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SafeAreaView>
    );
  }
  return (
    <Header
      backgroundColor={'white'}
      style={s.container}
      centerComponent={{text: 'Trending', style: s.title}}
      rightComponent={{icon: 'search', onPress: openMenu}}
    />
  );
};

const s = StyleSheet.create({
  container: {
    borderBottomColor: '#adadad',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 21,
    color: '#25282B',
    textAlign: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  searchContainer: {
    height: 45,
    width: '100%',
    padding: 0,
    backgroundColor: 'white',
    borderTopWidth: 0,
  },
  searchInput: {
    height: 45,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 0,
  },
});

export default AppHeader;
