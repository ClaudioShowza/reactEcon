import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import styled from 'styled-components';

const MainContent = styled.main`
  padding: 20px;
  background-color: #f7f7f7;
  min-height: 100vh;
`;

const App = () => {
  const allProducts = [
    {
      id: 1,
      title: "Placa de Vídeo NVIDIA RTX 3080",
      description: "Placa de vídeo de alto desempenho com 10GB de memória GDDR6X, ideal para jogos e tarefas gráficas intensivas.",
      imageUrl: "https://images.kabum.com.br/produtos/fotos/128054/placa-de-video-evga-nvidia-geforce-rtx-3080-10gb-gddr6x-10g-p5-3897-kr_1600345090_gg.jpg",
      price: "R$ 6.500,00"
    },
    {
      id: 2,
      title: "Processador Intel Core i9-11900K",
      description: "Processador de 11ª geração da Intel com 8 núcleos e 16 threads, perfeito para jogos e criação de conteúdo.",
      imageUrl: "https://images.kabum.com.br/produtos/fotos/148901/processador-intel-core-i9-11900k-11-geracao-cache-16mb-3-5-ghz-5-1ghz-turbo-lga1200-bx8070811900k_1615489709_gg.jpg",
      price: "R$ 2.500,00"
    },
    {
      id: 3,
      title: "Teclado Mecânico RGB",
      description: "Teclado mecânico com iluminação RGB personalizável e switches de alta durabilidade.",
      imageUrl: "https://images.kabum.com.br/produtos/fotos/105009/teclado-mecanico-gamer-hyperx-alloy-origins-core-rgb-hx-kb7rdx-br_1574693479_g.jpg",
      price: "R$ 750,00"
    },
    {
      id: 4,
      title: "Mouse Gamer Logitech G502",
      description: "Mouse gamer com sensor HERO de alta precisão, 11 botões programáveis e pesos ajustáveis.",
      imageUrl: "https://images.kabum.com.br/produtos/fotos/98244/mouse-gamer-logitech-g502-hero-16k-rgb-lightsync-11-botoes-16000-dpi-910-005550_1626297206_original.jpg",
      price: "R$ 350,00"
    },
    {
      id: 5,
      title: "Monitor Curvo 32'' Samsung",
      description: "Monitor curvo de 32 polegadas com resolução 4K UHD e taxa de atualização de 144Hz.",
      imageUrl: "https://images.samsung.com/is/image/samsung/br-c32t55-lc32t550fdlxzd-dynamicblack-258468329?$650_519_PNG$",
      price: "R$ 3.200,00"
    },
    {
      id: 6,
      title: "Memória RAM Corsair 16GB DDR4",
      description: "Kit de memória RAM DDR4 com 16GB (2x8GB) de alta performance e dissipador de calor.",
      imageUrl: "https://images.kabum.com.br/produtos/fotos/97487/97487_1532002367_index_g.jpg",
      price: "R$ 600,00"
    },
    {
      id: 7,
      title: "SSD Samsung 970 EVO 1TB",
      description: "SSD NVMe M.2 com 1TB de armazenamento e velocidade de leitura de até 3500MB/s.",
      imageUrl: "https://images.kabum.com.br/produtos/fotos/100129/ssd-samsung-970-evo-plus-1tb-m-2-leitura-3500mb-s-gravacao-3300mb-s-mz-v7s1t0b-am__1549363624_gg.jpg",
      price: "R$ 1.200,00"
    },
    {
      id: 8,
      title: "Fonte de Alimentação 750W Modular",
      description: "Fonte de alimentação de 750W com certificação 80 Plus Gold e cabos modulares.",
      imageUrl: "https://images.kabum.com.br/produtos/fotos/103281/fonte-xpg-core-reactor-750w-80-plus-gold-modular_1571153415_gg.jpg",
      price: "R$ 650,00"
    },
    {
      id: 9,
      title: "Gabinete Gamer Mid Tower",
      description: "Gabinete Mid Tower com painéis de vidro temperado, suporte para radiadores e iluminação RGB.",
      imageUrl: "https://cdn.awsli.com.br/2500x2500/2537/2537347/produto/247643476a493ece7b4.jpg",
      price: "R$ 850,00"
    },
    {
      id: 10,
      title: "Headset Gamer HyperX Cloud II",
      description: "Headset gamer com som surround 7.1 virtual, almofadas de memória e microfone destacável.",
      imageUrl: "https://m.media-amazon.com/images/I/71u77S3CdSL._AC_UF894,1000_QL80_.jpg",
      price: "R$ 400,00"
    },
    {
      id: 11,
      title: "Placa-mãe ASUS ROG Strix Z590-E",
      description: "Placa-mãe ATX com suporte para processadores Intel de 11ª geração e tecnologia Wi-Fi 6.",
      imageUrl: "https://images.kabum.com.br/produtos/fotos/151559/placa-mae-asus-rog-strix-z590-e-gaming-wifi-intel-socket-lga1200-atx-ddr4-rgb-aura-sync-90mb1640-m0eay0_1615387462_gg.jpg",
      price: "R$ 1.900,00"
    },
    {
      id: 12,
      title: "Cooler Master Hyper 212",
      description: "Cooler para processadores com dissipador de calor em alumínio e ventoinha silenciosa de 120mm.",
      imageUrl: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/r/rr-212s-20pk-r2.jpg",
      price: "R$ 250,00"
    },
    {
      id: 13,
      title: "Webcam Logitech C920 HD Pro",
      description: "Webcam com resolução Full HD 1080p e microfone estéreo integrado, ideal para videochamadas e streaming.",
      imageUrl: "https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UF894,1000_QL80_.jpg",
      price: "R$ 300,00"
    },
    {
      id: 14,
      title: "Impressora Multifuncional HP Ink Tank 415",
      description: "Impressora multifuncional com tanque de tinta, conectividade Wi-Fi e impressão econômica.",
      imageUrl: "https://m.media-amazon.com/images/I/61+rNpWZFJL._AC_UF894,1000_QL80_.jpg",
      price: "R$ 1.100,00"
    },
    {
      id: 15,
      title: "Cadeira Gamer DXRacer",
      description: "Cadeira gamer ergonômica com ajuste de altura, encosto reclinável e almofadas de apoio lombar e para cabeça.",
      imageUrl: "https://ds92okzpvwldu.cloudfront.net/Custom/Content/Products/24/26/2426258_cadeira-dxracer-gaming-preta-branco_m3_637504938747415777.jpg",
      price: "R$ 1.400,00"
    },
    {
      id: 16,
      title: "Hub USB 3.0 7 Portas",
      description: "Hub USB 3.0 com 7 portas, ideal para expandir a conectividade de dispositivos em seu PC.",
      imageUrl: "https://www.sdtronic.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/h/u/hub_3.0_7p.jpg",
      price: "R$ 120,00"
    },
    {
      id: 17,
      title: "Cabo HDMI 2.1 3m",
      description: "Cabo HDMI 2.1 com 3 metros de comprimento, suporte para 4K 120Hz e HDR.",
      imageUrl: "https://m.media-amazon.com/images/I/61dC3cC7NpL._AC_UF1000,1000_QL80_.jpg",
      price: "R$ 90,00"
    },
    {
      id: 18,
      title: "Roteador Wi-Fi 6 TP-Link Archer AX6000",
      description: "Roteador Wi-Fi 6 de alto desempenho com velocidade de até 6000Mbps e tecnologia MU-MIMO.",
      imageUrl: "https://m.media-amazon.com/images/I/51b-nEEziqL._AC_UF894,1000_QL80_.jpg",
      price: "R$ 1.200,00"
    },
    {
      id: 19,
      title: "Controle Xbox Series X",
      description: "Controle sem fio para Xbox Series X, compatível com PC, com layout ergonômico e textura antiderrapante.",
      imageUrl: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/158630/Controle-Microsoft-Xbox-Carbon-Black-Sem-Fio-Para-Xbox-Series-X-e-S-Preto-Qat-00007_1724168813_gg.jpg",
      price: "R$ 350,00"
    },
    {
      id: 20,
      title: "Disco Rígido Externo Seagate 2TB",
      description: "HD externo com 2TB de capacidade e conectividade USB 3.0, ideal para backups e armazenamento extra.",
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_952033-MLA53215390042_012023-O.webp",
      price: "R$ 450,00"
    }
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const handleSearch = (searchTerm) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filtered = allProducts.filter(product =>
      product.title.toLowerCase().includes(lowercasedSearchTerm) ||
      product.description.toLowerCase().includes(lowercasedSearchTerm)
    );
    setFilteredProducts(filtered);
  };

  const handleSelectCategory = (category) => {
    if (category === 'Todos') {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <Header />
      <Banner />
      <SearchBar onSearch={handleSearch} />
      <Categories onSelectCategory={handleSelectCategory} />
      <MainContent>
        <Products products={filteredProducts} />
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;