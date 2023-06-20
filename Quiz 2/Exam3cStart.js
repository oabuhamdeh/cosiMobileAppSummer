import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image, TextInput} from 'react-native';

const foodItem = () => {
  const [meal,setMeal] = useState("");
  const [mealThumb,setThumb] = useState("");
  const [mealId,setId] = useState("");
  return (
  <View style = {{
    height: 100,
    width: 2000,
    backgroundColor: "lightorange"
  }}>
    <Text>Meal

    </Text>

        
  </View>
  )
}

const DigitView = ({num,color}) => {
  return (
    <View style={{flex: 1, backgroundColor: color, justifyContent: 'center'}} >
          <Text style = {{fontSize: 40,textAlign: 'center',marginBottom: 10,marginTop: 20}}>{num}</Text>
    </View>
  )
}

const FoodItem = ({name, imageUrl}) => {
  const [meal,setMeal] = useState("");
  const [mealThumb,setThumb] = useState("");
  const [mealId,setId] = useState("");
  return (
    <View style={{
      backgroundColor: "coral", 
      justifyContent: 'center',
      alignItems: "center",
      height: 150,
      flexDirection: "row",
      margin: 50,
      borderColor: "black",
      borderWidth: 5
      }} >
          <Text style = {{fontSize: 40,
            textAlign: 'center',
            marginBottom: 10,
            marginTop: 20,
            fontWeight: 500,
            }}>
            {name}
          </Text>
          <Image
        style={{width: 100,
          height: 100,
        }}
        source={{
          uri: imageUrl,
        }}
      />
    </View>
  )
}


const Exam3cStart = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [input,setInput] = useState("");

    const getMeals = async () => {
        try {
          const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
          const response = await fetch(url);
          const json = await response.json();
          setData(json.meals); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getMeals()}, [])
    /*
    return(
        <View>
            <Text>API Demo</Text>
            <Text>{JSON.stringify(data,null,5)}</Text>

        </View>
    ); */


    return(
      <View style={{ 
        flexDirection: "column",
        flex: 1
    }}>
        <><Text
          style = {{
            fontSize: 50,
            fontWeight: 500,
            margin: 30
          }}
        >
          API Demo
        </Text>
        <TextInput
          style={{ 
            fontSize: 20,
            fontWeight: 400,
            margin: 10
           }}
          placeholder="Set your ingredient"
          onChangeText={text => {
            setInput(text);
          } }
          value={input} />
        </>
        <Text
          style = {{
            fontSize: 20,
            fontWeight: 400,
            margin: 10
          }}
        >
          Your Ingredient: {input}
        </Text>
        <FoodItem name = "Sandwich" imageUrl = 'https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg'/>
        <FlatList
                data={data.slice(0,5)}
                keyExtractor={ id => id}
                renderItem={({ item }) => (
                    <FoodItem
                        name={item.mealId}
                        imageUrl={item.mealThumb}  
                    />
                )}
            />
        <Text>{JSON.stringify(data, null, 5)}</Text> 

      </View>
    );
}

export default Exam3cStart;