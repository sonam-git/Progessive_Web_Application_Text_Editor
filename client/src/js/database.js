import { openDB } from 'idb';
// const's to hold the database name and version for ease of updates
const DB_NAME = 'jate';
const DB_VERSION = 1;

// database initialization
const initdb = async () =>
  openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (db.objectStoreNames.contains(DB_NAME)) {
        console.log(`${DB_NAME} database already exists`);
        return;
      }
      db.createObjectStore(DB_NAME, { keyPath: 'id', autoIncrement: true });
      console.log(`${DB_NAME} database created`);
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // failsafe in case the user deletes database while app is still running
  // check if the database exists, if not, creates it before doing any database operations
  const isExisting = (await window.indexedDB.databases()).map(db => db.name).includes(DB_NAME);
  if (!isExisting) {
    await initdb();
  }
  const jateDb = await openDB(DB_NAME, DB_VERSION);
  const tx = jateDb.transaction(DB_NAME, 'readwrite');
  const store = tx.objectStore(DB_NAME);
  const request = store.put({ value: content, id: 1 });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
}

// TODO: Add logic for a method that gets all the content from the database
// gets all data from the database
export const getDb = async () => {
  // failsafe in case the user deletes database while app is still running
  // check if the database exists, if not, creates it before doing any database operations
  const isExisting = (await window.indexedDB.databases()).map(db => db.name).includes(DB_NAME);
  if (!isExisting) {
    await initdb();
  }
  const jateDb = await openDB(DB_NAME, DB_VERSION);
  const tx = jateDb.transaction(DB_NAME, 'readonly');
  const store = tx.objectStore(DB_NAME);
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result);
  // failsafe: checks if results has any value before sending it
  return (result) ? result.value : false;
}

initdb();
