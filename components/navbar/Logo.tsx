import Link from 'next/link';
import { LuTent } from 'react-icons/lu';
import { Button } from '../ui/button';

export function Logo() {
  return (
    <Button size="icon" asChild className='bg-chart-1'>
      <Link href="/">
        <LuTent className="w-6 h-6"  />
      </Link>
    </Button>
  );
}
