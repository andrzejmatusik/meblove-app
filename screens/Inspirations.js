import React, { useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/Global';

export default function Products({ navigation }) {
  const [inspirations, setInspirations] = useState([
    {
      title: "Salon",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas maxime voluptatem. Maiores inventore omnis magnam veritatis fuga odio praesentium?",
      icon: require("../assets/icons/inspirations/livingroom_icon.png"),
      img: require("../assets/images/details.png"),
      gallery: [
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png")
      ],
      key: "1"
    },
    {
      title: "Sypialnia",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas maxime voluptatem. Maiores inventore omnis magnam veritatis fuga odio praesentium?",
      icon: require("../assets/icons/inspirations/bedroom_icon.png"),
      img: require("../assets/images/details.png"),
      gallery: [
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png")
      ],
      key: "2"
    },
    {
      title: "Kuchnia",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas maxime voluptatem. Maiores inventore omnis magnam veritatis fuga odio praesentium?",
      icon: require("../assets/icons/inspirations/kitchen_icon.png"),
      img: require("../assets/images/details.png"),
      gallery: [
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png")
      ],
      key: "3"
    },
    {
      title: "Łazienka",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas maxime voluptatem. Maiores inventore omnis magnam veritatis fuga odio praesentium?",
      icon: require("../assets/icons/inspirations/bathroom_icon.png"),
      img: require("../assets/images/details.png"),
      gallery: [
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png")
      ],
      key: "4"
    },
    {
      title: "Przedpokój",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas maxime voluptatem. Maiores inventore omnis magnam veritatis fuga odio praesentium?",
      icon: require("../assets/icons/inspirations/hall_icon.png"),
      img: require("../assets/images/details.png"),
      gallery: [
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png")
      ],
      key: "5"
    },
    {
      title: "Ogród",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas maxime voluptatem. Maiores inventore omnis magnam veritatis fuga odio praesentium?",
      icon: require("../assets/icons/inspirations/garden_icon.png"),
      img: require("../assets/images/details.png"),
      gallery: [
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png"),
        require("../assets/images/gallery.png")
      ],
      key: "6"
    }
  ]);
  return (
    <View style={globalStyles.container}>
      {/* products */}
      <FlatList
        style={globalStyles.browse}
        data={inspirations}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={globalStyles.browseItem} onPress={() => navigation.push('Details', item)}>
            <View style={globalStyles.browseIcon}>
              <Image source={item.icon} />
            </View>
            <Text style={globalStyles.browseHeader}>{item.title}</Text>
            <Text style={globalStyles.browseText}>{item.gallery.length} inspiracji</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};