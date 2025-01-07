'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    id: z.string(),
    fullname: z.string({
        invalid_type_error: 'Please enter your name.',
    }),
    phone: z.string().min(10, { message: 'Phone number must be at 10 characters' }).max(10),
    email: z.string({
        invalid_type_error: 'Please enter your email.',
    }),
    team: z.string(),
    number: z.coerce.number(),
    image_url: z.string(),

});

// const AddRacer = FormSchema.omit({ id: true, image_url: true });

export type State = {
    errors?: {
        customerId?: string[];
        amount?: string[];
        status?: string[];
    };
    message?: string | null;
};

// export async function addRacer(
//     prevState: State,
//     formData: FormData
// ) {
//     const validatedFields = AddRacer.safeParse({
//         fullname: formData.get('fullname'),
//         phone: formData.get('phonenumber'),
//         email: formData.get('email'),
//         team: formData.get('team'),
//         number: formData.get('race_number'),

//     });

//     if (!validatedFields.success) {
//         return {
//             errors: validatedFields.error.flatten().fieldErrors,
//             message: 'Missing Fields. Failed to Add new register.',
//         };
//     }

//     const { fullname, phone, email, team, number } = validatedFields.data;
//     const image_url = '/recer/profile/blank.webp';

    // try {
    //     await sql`
    //         INSERT INTO racer (fullname, phone, email, team, number, image_url)
    //         VALUES (${fullname}, ${phone}, ${email}, ${team}, ${number}, ${image_url})
    //       `;

    // } catch (error) {
    //     return {
    //         message: 'Database Error: Failed to Add new register.',
    //     };
    // }
    // revalidatePath('/register');
    // redirect('/register');
// }

export async function addRacer(formData: FormData) {
    const rawFormData = {
        fullname: formData.get('fullname'),
        phone: formData.get('phonenumber'),
        email: formData.get('email'),
        team: formData.get('team'),
        number: formData.get('race_number'),

      };
      // Test it out:
    //   console.log(rawFormData);
      const { fullname, phone, email, team, number } = rawFormData;
      const image_url = "/racer/profile/blank.webp";
      try {
        await sql`
            INSERT INTO racer (fullname, phone, email, team, number, image_url)
            VALUES (${fullname}, ${phone}, ${email}, ${team}, ${number}, ${image_url})
          `;

    } catch {
        return {
            message: 'Database Error: Failed to Add new register.',
        };
    }
    revalidatePath('/register/history');
    redirect('/register/history');
}


export async function deleteInvoice(id: string) {
    // throw new Error('Failed to Delete Invoice.');
    try {
      await sql`DELETE FROM racer WHERE id = ${id}`;
      revalidatePath('/register/history');
      return { message: 'Deleted Invoice.' };
    } catch {
      return {
        message: 'Database Error: Failed to Delete Invoice.',
      };
    }
  }