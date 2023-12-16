/** @format */
const GOOGLE_API_KEY = "AIzaSyDtIOhj77LD201bDqgYHUplFzEiI9e5KfQ";

export function StaticLocationFetcher(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

export async function getAddressFromGeoCode(lat, lng) {
  const geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;

  try {
    const response = await fetch(geoCodeUrl);
    const json = await response.json();
    const address = json.results[0].formatted_address;

    return address;
  } catch (error) {
    console.error(
      "An error occurred while fetching address with geocode API",
      error
    );
    return null;
  }
}

{
  /**
the code is wrong and not working properly
export async function getAddressFromGeoCode(lat, lng) {
  const geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  await fetch(geoCodeUrl)
    .then((response) => response.json()) //need to parse json
    .then((json) => {
      const address = json.results[0].formatted_address;
      console.log("json.results", address);
      return address;
    })
    .catch((error) => {
      console.error(
        "an error occured while fetching address with geocode api",
        error
      );
    });
}

*/
}
