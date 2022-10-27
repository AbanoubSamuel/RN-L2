import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Flex = (props) =>
{

    const [products, setProducts] = useState([]);
    useEffect(() =>
    {
        // AsyncStorage.clear()
        axios.get("https://dummyjson.com/products").then((res) =>
        {
            //   console.log(res);

            setProducts(res.data.products.slice(0, 22));
        })
    }, [])
    async function add(item)
    {
        var arr = await AsyncStorage.getItem("cart");
        if (!arr)
        {
            var arr = [];
            arr.push(item);
            await AsyncStorage.setItem("cart", JSON.stringify(arr));
        }
        else
        {
            console.log("ddd")
            arr = JSON.parse(arr);
            item.quantity = 1
            arr.push(item);
            await AsyncStorage.setItem("cart", JSON.stringify(arr));
        }
    }
    return (
        <View style={styles.con}>

            <FlatList
                numColumns={2}
                data={products}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <View style={styles.card}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Product", { item })}><View style={{ justifyContent: "center", alignItems: "center", top: -50 }}>
                        <Image source={{ uri: item.thumbnail }} style={{ width: 90, height: 90, borderRadius: 90 }} />
                    </View>
                    </TouchableOpacity>
                    <Text>{item.title}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                        <Text style={styles.price}>{item.price}</Text>
                        <TouchableOpacity onPress={() => add(item)}><Ionicons name="add-circle" color="orange" size={24} /></TouchableOpacity>
                    </View>

                </View>}
            />

        </View>
    )
}

export default Flex

const styles = StyleSheet.create({
    con:
    {
        backgroundColor: 'grey',
        flex: 1,
        alignItems: "center",
        marginTop: 10
    },
    card:
    {
        width: 175,
        height: 200,
        backgroundColor: 'white',
        margin: 5,
        marginVertical: 25,
        borderRadius: 30
    },
    price:
    {
        fontSize: 20,
        fontWeight: "bold",
        color: "orange",
    }



})