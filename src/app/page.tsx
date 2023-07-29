// Import Swiper styles
import "swiper/css";

import PageHeaderCards from "./_components/PageHeaderCards";
import SlideSimpleItems from "./_components/SlideSimpleItems";
import { SlideSimpleTypes } from "./_types/types";

export default function Home() {
  const restaurantes: SlideSimpleTypes[] = [
    {
      id: "249837",
      image: "caminho/para/a/imagem1.jpg",
      name: "Delícia Italiana",
      avaliation: "3.6",
      category: "Italiana",
      distance: 1.5, // em quilômetros
      timeSend: [11, 14], // horários de entrega em horas (11:00 e 14:00)
      valueSend: 5.0, // valor da taxa de entrega em reais
    },
    {
      id: "981726",
      image: "caminho/para/a/imagem2.jpg",
      name: "Sabor Chinês",
      avaliation: "4.2",
      category: "Chinesa",
      distance: 2.0,
      timeSend: [12, 15],
      valueSend: 4.5,
    },
    {
      id: "567123",
      image: "caminho/para/a/imagem3.jpg",
      name: "Taco Loco",
      avaliation: "4.8",
      category: "Mexicana",
      distance: 3.2,
      timeSend: [10, 13],
      valueSend: 6.0,
    },
    {
      id: "987654",
      image: "caminho/para/a/imagem4.jpg",
      name: "Indian Spice",
      avaliation: "5.0",
      category: "Indiana",
      distance: 4.0,
      timeSend: [13, 18],
      valueSend: 7.0,
    },
    {
      id: "321456",
      image: "caminho/para/a/imagem5.jpg",
      name: "Green Bites",
      avaliation: "2.7",
      category: "Vegana",
      distance: 2.5,
      timeSend: [12, 17],
      valueSend: 6.5,
    },
    {
      id: "876543",
      image: "caminho/para/a/imagem6.jpg",
      name: "Sushi Delight",
      avaliation: "4.2",
      category: "Japonesa",
      distance: 1.8,
      timeSend: [11, 14],
      valueSend: 5.5,
    },
    {
      id: "135792",
      image: "caminho/para/a/imagem7.jpg",
      name: "do Brasil",
      avaliation: "3.6",
      category: "Brasileira",
      distance: 3.0,
      timeSend: [12, 15],
      valueSend: 4.0,
    },
    {
      id: "456789",
      image: "caminho/para/a/imagem8.jpg",
      name: "Thai Tastes",
      avaliation: "3.6",
      category: "Tailandesa",
      distance: 4.5,
      timeSend: [10, 13],
      valueSend: 8.0,
    },
    {
      id: "987123",
      image: "caminho/para/a/imagem9.jpg",
      name: "Korean Flavors",
      avaliation: "3.6",
      category: "Coreana",
      distance: 2.2,
      timeSend: [13, 18],
      valueSend: 7.5,
    },
    {
      id: "564738",
      image: "caminho/para/a/imagem10.jpg",
      name: "Arabian Nights",
      avaliation: "3.6",
      category: "Árabe",
      distance: 3.8,
      timeSend: [12, 17],
      valueSend: 6.2,
    },
    {
      id: "246813",
      image: "caminho/para/a/imagem11.jpg",
      name: "French Delights",
      avaliation: "3.6",
      category: "Francesa",
      distance: 1.2,
      timeSend: [11, 14],
      valueSend: 5.7,
    },
    {
      id: "101112",
      image: "caminho/para/a/imagem12.jpg",
      name: "Tapas Españolas",
      avaliation: "3.6",
      category: "Espanhola",
      distance: 2.7,
      timeSend: [12, 15],
      valueSend: 4.8,
    },
    {
      id: "131415",
      image: "caminho/para/a/imagem13.jpg",
      name: "American Grub",
      avaliation: "3.6",
      category: "Americana",
      distance: 3.5,
      timeSend: [10, 13],
      valueSend: 6.9,
    },
  ];

  return (
    <main className="z-10">
      <header className="pt-5">
        <PageHeaderCards />
      </header>

      <div className="hero py-14  text-slate-700 overflow-hidden flex flex-col pl-16 max-lg:pl-0 max gap-10 ">
        <section className="list  flex flex-col items-start px-14  max-sm:px-3 gap-5 ">
          <div className="listTitle w-full  flex justify-between items-center ">
            <h1 className="text-xl font-semibold tracking-wider">
              Lojas da semana
            </h1>
            <span className="text-red-500 cursor-pointer hover:scale-95 transition-all">
              Ver mais
            </span>
          </div>
          <div className="w-full  ">
            <SlideSimpleItems slideItems={restaurantes} />
          </div>
        </section>
        <section className="list  flex flex-col items-start px-14  max-sm:px-3 gap-5 ">
          <div className="listTitle w-full  flex justify-between items-center ">
            <h1 className="text-xl font-semibold tracking-wider">
              Tops Restaurantes
            </h1>
            <span className="text-red-500 cursor-pointer hover:scale-95 transition-all">
              Ver mais
            </span>
          </div>
          <div className="w-full  ">
            <SlideSimpleItems slideItems={restaurantes} />
          </div>
        </section>
      </div>
    </main>
  );
}
