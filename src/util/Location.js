/** @format */
const GOOGLE_API_KEY = "AIzaSyDtIOhj77LD201bDqgYHUplFzEiI9e5KfQ";

export function StaticLocationFetcher(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

export function getAdress(lat, lng) {
  const geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJeRpOeF67j4AR9ydy_PIzPuM&key=${GOOGLE_API_KEY}`;
}
