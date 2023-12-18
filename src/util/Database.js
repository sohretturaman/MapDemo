/** @format */

import * as SQLite from "expo-sqlite";
import { Places } from "../model/PlaceModel";

const database = SQLite.openDatabase("places.db");

export function initializeDatabase() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imgurl TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function insertPlace(place) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imgurl, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imgurl,
          place.address,
          place.location.lat,
          place.location.lng,
        ],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchPlaces() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places",
        [],
        (_, result) => {
          const places = [];

          for (const dp of result.rows._array) {
            places.push(
              new Places(
                dp.title,
                dp.imgurl,
                {
                  address: dp.address,
                  lat: dp.lat,
                  lng: dp.lng,
                },
                dp.id
              )
            );
          }

          resolve(places);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchPlaceDetails(id) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((ts) => {
      ts.executeSql(
        `SELECT *FROM places WHERE id=?`,
        [id], //the data will be insterted for query
        (_, result) => {
          const resultData = result.rows._array[0];
          resolve(resultData); //does not return, just resolve
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}
