import { sql } from '@vercel/postgres';
import { RacerForm, RacerField } from './definitions';


const ITEMS_PER_PAGE = 6;

export async function fetchRacer(
    query: string,
  currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
  
    //   await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await sql<RacerForm>`SELECT * FROM racer 
      WHERE
        fullname ILIKE ${`%${query}%`} OR
        phone ILIKE ${`%${query}%`} OR
        email::text ILIKE ${`%${query}%`} OR
        team ILIKE ${`%${query}%`} OR
        number ILIKE ${`%${query}%`}
        
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
  
    //   console.log('Data fetch completed after 3 seconds.');
    
      return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Racer.');
    }
  }



  export async function fetchRacerPages(query: string) {
    try {
      const count = await sql`SELECT COUNT(*)
      FROM racer
      WHERE
        fullname ILIKE ${`%${query}%`} OR
        phone ILIKE ${`%${query}%`} OR
        email::text ILIKE ${`%${query}%`} OR
        team ILIKE ${`%${query}%`} OR
        number ILIKE ${`%${query}%`}
    `;
  
      const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
      return totalPages;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of Racer.');
    }
  }


  export async function fetchRacerName() {
    try {
      const data = await sql<RacerField>`
        SELECT
          id,
          name
        FROM racer
        ORDER BY name ASC
      `;
  
      const racer = data.rows;
      return racer;
    } catch (err) {
      console.error('Database Error:', err);
      throw new Error('Failed to fetch all customers.');
    }
  }


  export async function fetchRacerNameById(id: string) {
    try {
      const data = await sql`
        SELECT
          invoices.id,
          invoices.customer_id,
          invoices.amount,
          invoices.status
        FROM invoices
        WHERE invoices.id = ${id};
      `;
  
      const invoice = data.rows.map((invoice) => ({
        ...invoice,
        // Convert amount from cents to dollars
        amount: invoice.amount / 100,
      }));
  
      return invoice[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoice.');
    }
  }