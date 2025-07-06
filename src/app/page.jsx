import Link from "next/link";

export default function Home() {
  return (
    <>

      <nav className="w-full bg-gray-800 text-white p-4 flex justify-center gap-8 fixed top-0 z-50">
        <Link href="/contato" className="hover:underline">
          Contato
        </Link>
        <Link href="/produtos" className="hover:underline">
          Produtos
        </Link>
        <Link href="/eventos" className="hover:underline">
          Eventos
        </Link>
        <Link href="/clientes" className="hover:underline">
          Clientes
        </Link>
        <Link href="/sobre-nos" className="hover:underline">
          Sobre Nós
        </Link>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-center p-24 pt-32">
        <h1 className="text-2xl font-bold text-center">
          Seja bem-vindo ao Trabalho de Versionamento de Software!
        </h1>
        <p className="text-center mt-4">
          Todas as informações necessárias para realização do trabalho encontram-se no
          arquivo <span className="font-semibold">README.md</span>
        </p>
      </main>
    </>
  );
}


