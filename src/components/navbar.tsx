"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { Button } from './ui/button';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-sm relative">
    <div className="logo flex items-center gap-2">
      <Link href="/" className="cursor-pointer">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </Link>
      <span className="text-xl font-bold text-primary">IAM, IP</span>
    </div>
    
    <button 
      className="lg:hidden p-2"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Toggle menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="#008000" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <div className="hidden lg:block">
      <Button variant="link" asChild className="hover:text-primary/80">
        <Link href="/" className="mr-4">
          Página Inicial
        </Link>
      </Button>
      <Button variant="link" asChild className="hover:text-primary/80">
        <Link href="https://iam.gov.mz" target="_blank" className="mr-4">
          Sobre Nós
        </Link>
      </Button>
      <Button variant="link" asChild className="hover:text-primary/80">
        <Link href="/contact" className="mr-4">
          Contacto
        </Link>
      </Button>
    </div>

    <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all ${isMenuOpen ? 'block' : 'hidden'}`}>
      <div className="flex flex-col p-4">
        <Button variant="link" asChild className="hover:text-primary/80 py-2">
          <Link href="/">Página Inicial</Link>
        </Button>
        <Button variant="link" asChild className="hover:text-primary/80 py-2">
          <Link href="https://iam.gov.mz" target="_blank">Sobre Nós</Link>
        </Button>
        <Button variant="link" asChild className="hover:text-primary/80 py-2">
          <Link href="/contact">Contacto</Link>
        </Button>
      </div>
    </div>
  </nav>
  )
}
