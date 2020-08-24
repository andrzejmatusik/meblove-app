import React, { useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/Global';

export default function Products({ navigation }) {
  const [products, setProducts] = useState([
    {
      title: "Fotele",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas maxime voluptatem. Maiores inventore omnis magnam veritatis fuga odio praesentium?",
      icon: require("../assets/icons/products/chairs_icon.png"),
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
      title: "Sofy",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas maxime voluptatem. Maiores inventore omnis magnam veritatis fuga odio praesentium?",
      icon: require("../assets/icons/products/sofas_icon.png"),
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
      title: "Łóżka",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas maxime voluptatem. Maiores inventore omnis magnam veritatis fuga odio praesentium?",
      icon: require("../assets/icons/products/beds_icon.png"),
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
      title: "Szafy",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas maxime voluptatem. Maiores inventore omnis magnam veritatis fuga odio praesentium?",
      icon: require("../assets/icons/products/wardrobes_icon.png"),
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
      title: "Stoły",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas maxime voluptatem. Maiores inventore omnis magnam veritatis fuga odio praesentium?",
      icon: require("../assets/icons/products/tables_icon.png"),
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
      title: "Dodatki",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas maxime voluptatem. Maiores inventore omnis magnam veritatis fuga odio praesentium?",
      icon: require("../assets/icons/products/accessories_icon.png"),
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
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={globalStyles.browseItem} onPress={() => navigation.push('Details', item)}>
            <View style={globalStyles.browseIcon}>
              <Image source={item.icon} />
            </View>
            <Text style={globalStyles.browseHeader}>{item.title}</Text>
            <Text style={globalStyles.browseText}>{item.gallery.length} produktów</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};