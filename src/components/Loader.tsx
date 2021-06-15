import React from 'react';
import {FlatList} from 'react-native';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {Divider} from 'react-native-elements';

const LoaderItem = (props) => (
  <>
    <ContentLoader
      speed={2}
      width={476}
      height={60}
      viewBox="0 0 476 60"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <Rect x="51" y="17" rx="3" ry="3" width="100" height="6" />
      <Rect x="52" y="38" rx="3" ry="3" width="260" height="6" />
      <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <Circle cx="23" cy="30" r="20" />
      <Rect x="89" y="90" rx="0" ry="0" width="0" height="23" />
    </ContentLoader>
    <Divider />
  </>
);

const Loader = (props) => (
  <FlatList
    data={Array.from(Array(10).keys())}
    keyExtractor={(item) => item.toString()}
    renderItem={LoaderItem}
    {...props}
  />
);

export default Loader;
