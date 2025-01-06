

import { db } from '@vercel/postgres';
import { invoices, customers, revenue, users } from './data/data';


const client = await db.connect();

async function racer() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
    await client.sql`
      CREATE TABLE IF NOT EXISTS racer (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        fullname VARCHAR(255) NOT NULL,
        phone VARCHAR(10) NOT NULL,
        email VARCHAR(255) NOT NULL,
        team VARCHAR(255) NOT NULL,
        number VARCHAR(5) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;


}






export async function GET() {
 
  try {
    await client.sql`BEGIN`;
   
    await racer();
   
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
