/** @format */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import AllPlaces from "./src/screens/AllPlaces";
import AddPlace from "./src/screens/AddPlace";
import PlaceDetails from "./src/screens/PlaceDetails";
import Colors from "./src/consts/Colors";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Maps from "./src/screens/Maps";
import { useEffect, useState } from "react";
import { initializeDatabase } from "./src/util/Database";
import { ActivityIndicator } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  const [isIntDb, setIsIntDb] = useState(false);
  useEffect(() => {
    const intDb = async () => {
      // can use then catch structure instead ,initialized database only once
      setIsIntDb(true);
      await initializeDatabase();
    };

    intDb();
  }, []);

  if (!isIntDb == true) {
    return <ActivityIndicator size={"large"} color={Colors.primary} />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: Colors.primary },
          // title: "Your Favourite Places",
          headerTitleAlign: "center",
          cardStyle: { backgroundColor: Colors.primaryDark }, //app default backgroundColor
        })}
      >
        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={({ navigation }) => ({
            title: "Your Favourite Places",
            headerRight: () => {
              return (
                <MaterialIcons
                  name="add"
                  style={{ marginRight: 10 }}
                  onPress={() => navigation.navigate("AddPlace")}
                  size={30}
                />
              );
            },
          })}
        />
        <Stack.Screen name="AddPlace" component={AddPlace} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
        <Stack.Screen
          name="Map"
          component={Maps}
          options={() => ({
            title: "Map",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//installed react native maps with expo to able to see  google maps screen
