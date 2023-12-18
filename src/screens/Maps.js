/** @format */

import { Alert, StyleSheet, Text, View } from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import MapView, { Marker } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Maps = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = [];
  const DetailsData = route.params?.data;

  console.log("maps data", DetailsData);

  const [pressedLocation, setPressedLocation] = useState({
    // show my picked location map if exist
    lat: DetailsData ? DetailsData?.lat : 0,
    lng: DetailsData ? DetailsData?.lng : 0,
  });

  const initialRegion = {
    latitude: DetailsData ? DetailsData?.lat : 41.01384,
    longitude: DetailsData ? DetailsData?.lng : 28.94966,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  //save that pressed locaiton with headeright button and send data to addplace screen

  const pickedLocationHandler = useCallback(() => {
    if (pressedLocation.lat == 0 || pressedLocation.lng == 0) {
      console.log("pressed location value", pressedLocation);
      Alert.alert(
        "No place has been selected",
        "please select a location on the map"
      );
      return;
    }

    navigation.navigate("AddPlace", {
      pickedLat: pressedLocation.lat,
      pickedLng: pressedLocation.lng,
    });
  }, [navigation, pressedLocation]); // we need to update those values

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        if (DetailsData?.lat && DetailsData?.lng) {
          return null; // Return null to hide the header right icon
        }
        return (
          <MaterialIcons
            name="save"
            style={{ marginRight: 10 }}
            onPress={pickedLocationHandler}
            size={25}
          />
        );
      },
    });
  }, [navigation, pickedLocationHandler]); // !!put function itself to rerender in every changes
  handleMapPress = (event) => {
    //Handle the pressed point data here
    if (DetailsData?.lat || DetailsData?.lng) {
      return null;
    }
    const coords = event.nativeEvent.coordinate; // react out the coordiante with naviteEvent keyword
    if (coords) {
      setPressedLocation({ lat: coords.latitude, lng: coords.longitude });
    }
  };
  return (
    <View style={{ flex: 1, paddingBottom: 10 }}>
      <MapView
        region={initialRegion}
        style={{ flex: 1 }}
        onPress={handleMapPress}
      >
        <Marker
          coordinate={{
            latitude: pressedLocation.lat,
            longitude: pressedLocation.lng,
          }}
          title={DetailsData ? DetailsData.title : "new Location"}
          description={DetailsData ? DetailsData.address : ""}
          onPress={() => console.log("mark is pressed")}
        />
      </MapView>

      {/* Display the selected marker data here 
             <View style={{ flex: 0.5 }}>  </View>
       */}
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({});
