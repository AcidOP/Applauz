import AuthMenu from './AuthMenu';
import MainNav from './MainNav';
import MobileNav from './mobile';

import { grotesque } from '@/components/font/grotesque';
import { auth } from '@/lib/session';
import { cn } from '@/lib/utils';

import Link from 'next/link';

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className='sticky top-0 z-50 bg-background'>
      <div className='layout relative flex h-16 items-center justify-between text-lg'>
        <h1 className='text-xl'>
          <Link
            href={'/'}
            className={cn(
              'text-xl font-black lg:text-3xl',
              grotesque.className,
            )}
          >
            VouchFast
          </Link>
        </h1>

        <MainNav />

        <div
          className={cn(
            'flex items-center gap-2',
            !session && 'lg:hidden',
          )}
        >
          <AuthMenu />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
