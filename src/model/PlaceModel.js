/** @format */

export class Places {
  constructor(title, imgurl, location) {
    (this.id = new Date().toString() + Math.random().toString()),
      (this.title = title),
      (this.imgurl = imgurl),
      (this.adress = location.address),
      (this.location = { lat: location.lat, lng: location.lng });
  }
}
