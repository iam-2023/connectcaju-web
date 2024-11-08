import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-4 text-center bg-[#008000]">
    <div className="container mx-auto space-x-4">
      <Button variant="link" asChild className="text-white hover:text-white/80">
        <Link href="/terms">Termos</Link>
      </Button>
      <Button variant="link" asChild className="text-white hover:text-white/80">
        <Link href="/privacy">Privacidade</Link>
      </Button>
      </div>
      <p className="text-white">
        &copy; {new Date().getFullYear()} IAM, IP. Todos os direitos reservados.
      </p>
    </footer>
  );
}
