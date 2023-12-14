/** @format */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import AllPlaces from "./src/screens/AllPlaces";
import AddPlace from "./src/screens/AddPlace";
import PlaceDetails from "./src/screens/PlaceDetails";
import Colors from "./src/consts/Colors";

import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: Colors.primary },
          title: "Your Favourite Places",
          headerTitleAlign: "center",

          headerRight: () => {
            return (
              <Ionicons
                name="add"
                onPress={() => navigation.navigate("AddPlace")}
                size={30}
              />
            );
          },
          cardStyle: { backgroundColor: Colors.primaryDark },
        })}
      >
        <Stack.Screen name="AllPlaces" component={AllPlaces} />
        <Stack.Screen name="AddPlace" component={AddPlace} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//make an example for camera , tomorrow location , today  finish camera and push it
//dont work with web for now  it will be  done on next week
