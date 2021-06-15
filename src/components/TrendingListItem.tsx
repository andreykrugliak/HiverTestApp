import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Collapsible from 'react-native-collapsible';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {ListItem, Avatar, Divider} from 'react-native-elements';

IconEntypo.loadFont();
IconIonicons.loadFont();
IconFontAwesome.loadFont();

const TrendingListItem = ({item, onExpand, expandedId}) => {
  const toggleExpanded = () => onExpand(item.id);

  return (
    <View>
      <TouchableOpacity onPress={toggleExpanded}>
        <ListItem>
          <Avatar
            rounded
            size={'small'}
            source={{uri: item.owner.avatar_url}}
          />
          <ListItem.Content>
            <ListItem.Title style={s.title}>{item.owner.login}</ListItem.Title>
            <ListItem.Subtitle style={s.description}>
              {item.name}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
      <Collapsible collapsed={item.id !== expandedId} align="center">
        <View style={s.content}>
          <Text
            style={
              s.descriptionText
            }>{`${item.description} (${item.html_url})`}</Text>
          <View style={s.rowInfo}>
            {item.language ? (
              <View style={s.iconContainer}>
                <IconEntypo size={30} name={'dot-single'} color={'red'} />
                <Text style={s.iconText}>{item.language}</Text>
              </View>
            ) : null}
            {item.forks ? (
              <View style={s.iconContainer}>
                <IconIonicons size={16} name={'git-network'} />
                <Text style={s.iconText}>{item.forks}</Text>
              </View>
            ) : null}
            {item.stargazers_count ? (
              <View style={s.iconContainer}>
                <IconFontAwesome size={16} name={'star'} color={'orange'} />
                <Text style={s.iconText}>{item.stargazers_count}</Text>
              </View>
            ) : null}
          </View>
        </View>
      </Collapsible>
      <Divider />
    </View>
  );
};

const s = StyleSheet.create({
  description: {
    fontSize: 15,
    fontWeight: '600',
    color: '#52575C',
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    color: '#52575C',
  },
  avatar: {
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 8,
    paddingLeft: 65,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  rowInfo: {
    flexDirection: 'row',
  },
  iconText: {
    paddingLeft: 5,
  },
  descriptionText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#52575C',
  },
});

export default TrendingListItem;
