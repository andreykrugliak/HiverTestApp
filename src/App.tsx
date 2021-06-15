import useAxios from 'axios-hooks';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  FlatList,
  useColorScheme,
} from 'react-native';

import Header from 'src/components/Header';
import Loader from 'src/components/Loader';
import TrendingListItem from 'src/components/TrendingListItem';
import ErrorState from 'src/components/ErrorState';
import {useDebounce} from './helpers/common';

const extractKey = (item) => `${item.id}`;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [trending, setTrending] = useState<any[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  const debouncedSearch = useDebounce(searchQuery, 500);

  const query = debouncedSearch
    ? `${debouncedSearch} in:name,description`
    : 'trending';

  const [{data, loading, error}, refetch] = useAxios(
    {
      url: 'https://api.github.com/search/repositories',
      params: {
        q: query,
        per_page: 20,
        sort: 'stars',
        order: 'desc',
      },
    },
    {
      manual: true,
    },
  );

  const onExpand = (id: number) => setExpandedId(id === expandedId ? null : id);

  const onRetry = () => refetch();

  useEffect(() => {
    const trendingData = data?.items || [];
    setTrending(trendingData);
  }, [data]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  return (
    <View style={s.flex}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header onChangeSearch={onChangeSearch} searchQuery={searchQuery} />
      <SafeAreaView style={s.flex}>
        {error ? (
          <ErrorState onRetry={onRetry} />
        ) : (
          <FlatList
            ListEmptyComponent={<Loader />}
            onRefresh={refetch}
            refreshing={loading && Boolean(trending && trending.length)}
            data={trending}
            keyExtractor={extractKey}
            renderItem={({item}) => (
              <TrendingListItem
                item={item}
                onExpand={onExpand}
                expandedId={expandedId}
              />
            )}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

const s = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;
