import Database from 'better-sqlite3'
import { v4 as uuidv4 } from 'uuid'

let db = null

export const initDatabase = () => {
  db = new Database('app.db')
  db.pragma('journal_mode = WAL')


  db.exec(`
    CREATE TABLE IF NOT EXISTS product (
      id TEXT NOT NULL PRIMARY KEY,
      productName TEXT NOT NULL,
      description TEXT NOT NULL,
      price INTEGER NOT NULL,
      category TEXT NOT NULL,
      ingredients TEXT NOT NULL,
      stockQuantity INTEGER NOT NULL,
      launchDate TEXT,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.exec(`
    CREATE TABLE IF NOT EXISTS lead (
      id TEXT NOT NULL PRIMARY KEY,
      fullName TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      interestedProduct TEXT NOT NULL,
      leadSource TEXT NOT NULL,
      inquiryDate TEXT NOT NULL,
      status TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.exec(`
    CREATE TABLE IF NOT EXISTS campaign (
      id TEXT NOT NULL PRIMARY KEY,
      campaignName TEXT NOT NULL,
      targetProduct TEXT NOT NULL,
      budget INTEGER NOT NULL,
      startDate TEXT NOT NULL,
      endDate TEXT NOT NULL,
      platform TEXT NOT NULL,
      status TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  console.log('Database initialized')
}

export const getDb = () => {
  if (!db) {
    throw new Error('Database not initialized')
  }
  return db
}

export const generateId = () => uuidv4()
