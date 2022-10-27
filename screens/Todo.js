import { View, Text,StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Todo = (props) => {
    const[todo,setTodo]=useState([]);
    const[input,setInput]=useState("")

    useEffect(()=>{
        console.log("lkjjkd")
        getStorage()
    },[])
    useEffect(()=>
    {
        setstorage();
    },[todo])
    function addTodo()
    {
        setTodo([...todo,input]);
        setInput("");
    }
    function change(input)
    {
        setInput(input);
    }

    async function setstorage()
    {
        await AsyncStorage.setItem("todo",JSON.stringify(todo));
    }

    async function getStorage()
    {

        
         var arr=await AsyncStorage.getItem("todo");
         console.log(arr);
         arr=JSON.parse(arr);

        setTodo([arr]);
    }

  return (
    <View>
    <View style={styles.con}>
        <TextInput value={input} style={styles.input} onChangeText={change}/>
        <TouchableOpacity onPress={addTodo}><View style={styles.but}><Text>add</Text></View></TouchableOpacity>
    {/* <Image source={{uri:"https://th.bing.com/th/id/OIP.HNUy4PbeHRNtC-4xrnO9fwHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}} style={{width:300,height:300,borderRadius:300}}/> */}
    </View>
    {/* <ScrollView>
    {todo.map((item)=><Text key={item} style={{fontSize:50}}>{item}</Text>)}
    </ScrollView> */}
    <FlatList
    data={todo}
    keyExtractor={(item,index)=>item}
    renderItem={({item})=><Text style={{fontSize:50}}>{item}</Text>}

    />
    </View>
  )
}


const styles=StyleSheet.create({
    con:
    {
      
        flexDirection:'row',
        justifyContent:"space-between"
    },
    input:
    {
        marginHorizontal:10,
        width:"75%",
        padding:10,
        borderRadius:30,
        borderWidth:1,
        borderColor:'black',
    },
    but:
    {
        marginHorizontal:10,
        backgroundColor:'orange',
        width:75,
        height:75,
        borderRadius:75,
        justifyContent:"center",
        alignItems:"center"
    }

})

export default Todo