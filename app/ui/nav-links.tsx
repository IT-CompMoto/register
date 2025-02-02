'use client'


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'ลงทะเบียน', name_en: 'Register', href: '/register', },
  {
    name: 'ตรวจสอบสถานะ', name_en: 'History', href: '/register/history',  },
 
  { name: 'รายละเอียดและกฎกติกาการแข่งขัน', name_en: 'Rule', href: '/register/customers', },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-yellow-300 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-yellow-300 text-blue-600': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}<br />{link.name_en}</p>
          </Link>
        );
      })}
    </>
  );
}
