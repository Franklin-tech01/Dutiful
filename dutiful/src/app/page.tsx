// app/page.tsx or any other component
'use client'; // Required for client-side use of hooks

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Logic to check authentication can be added here
    // For now, we're directly navigating to the login page
    router.push('/auth/login');
  }, [router]);

  return null;
}
