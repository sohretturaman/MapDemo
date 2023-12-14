/** @format */

class Places {
  constructor(title, imgurl, adress, location) {
    (this.id = new Date().toString() + Math.random().toString()),
      (this.title = title),
      (this.imgurl = imgurl),
      (this.adress = adress),
      (this.location = location);
  }
}
