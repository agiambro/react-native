import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={styles.thumbnail}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerContent}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnail: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;
