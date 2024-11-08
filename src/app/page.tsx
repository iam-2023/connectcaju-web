import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      <Image
        src="/logo.png"
        alt="Background Logo"
        layout="fill"
        objectFit="cover"
        className="opacity-30"
      />
      <Card className="w-full max-w-md bg-background/90 backdrop-blur-sm">
        <CardHeader className="space-y-2 flex flex-col items-center justify-center">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={80} 
            height={80}
            className="w-[60px] md:w-[80px] h-auto" 
          />
          <div>
            <CardTitle className="text-center text-xl md:text-2xl">
              Instituto de Amêndoas de Moçambique, IP
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-center px-2 md:px-4">
            <p className="text-center text-xs md:text-sm text-muted-foreground">
              Este site ainda está em desenvolvimento.
            </p>
            <p className="text-center text-xs md:text-sm text-muted-foreground">
              Para saber mais sobre o Instituto de Amêndoas de Moçambique, IP e
              o projecto Connect Caju, clique no botão abaixo.
            </p>
            <Button variant="link" asChild>
              <Link href="https://iam.gov.mz" target="_blank">
                Sobre Nós
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
