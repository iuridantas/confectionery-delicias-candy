import { Container } from './style';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiFillCaretDown } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    const btnMobile = document.getElementById('btn-mobile');
    const nav = document.getElementById('nav');

    function toggleMenu(event: MouseEvent) {
      if (!nav) return;
      nav.classList.toggle('active');
      const active = nav.classList.contains('active');
      (event.currentTarget as HTMLElement).setAttribute(
        'aria-expanded',
        active.toString(),
      );
      (event.currentTarget as HTMLElement).setAttribute(
        'aria-label',
        active ? 'Fechar Menu' : 'Abrir Menu',
      );
    }

    btnMobile?.addEventListener('click', toggleMenu);

    function addLinkClickEvent(linkId: string, target: string) {
      const link = document.getElementById(linkId);
      link?.addEventListener('click', (event) => {
        event.preventDefault();
        navigate(target);
        if (nav) nav.classList.remove('active');
        setSubmenuOpen(false);
      });
    }

    const menuLinks = [
      { id: 'home-link', target: '/' },
      { id: 'sobre-link', target: '/sobre-nos' },
      { id: 'contato-link', target: '/contato' },
      { id: 'salgados-assados-link', target: '/salgadosAssados' },
      { id: 'salgados-fritos-link', target: '/salgadosFritos' },
      { id: 'salgados-folhados-link', target: '/salgadosFolhados' },
      { id: 'doces-tradicionais-link', target: '/docesTradicionais' },
      { id: 'doces-finos-link', target: '/docesFinos' },
      { id: 'doces-especiais-link', target: '/docesEspeciais' },
      { id: 'bolos-personalizados-link', target: '/boloPersonalizado' },
      { id: 'bolos-vucao-link', target: '/boloVulcão' },
      { id: 'bolos-piscina-link', target: '/boloPiscina' },
      { id: 'torta-doce-link', target: '/tortaDoce' },
      { id: 'torta-salgada-link', target: '/tortaSalgada' },
    ];

    menuLinks.forEach((link) => {
      addLinkClickEvent(link.id, link.target);
    });

    return () => {
      btnMobile?.removeEventListener('click', toggleMenu);
      menuLinks.forEach((link) => {
        const linkElement = document.getElementById(link.id);
        linkElement?.removeEventListener('click', () => {
          navigate(link.target);
          if (nav) nav.classList.remove('active');
          setSubmenuOpen(false);
        });
      });
    };
  }, []);

  const handleSubmenuItemClicked = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <header>
      <Container aria-label="Menu de navegação principal">
        <div>
          <img
            src="/img/logo.png"
            alt="logo"
            aria-label="Logotipo da Delicias de Candy"
          />
          <nav id="nav">
            <button
              id="btn-mobile"
              aria-label="Abrir Menu"
              aria-haspopup="true"
              aria-controls="menu"
              aria-expanded="false"
            >
              <AiOutlineMenu />
            </button>
            <ul id="menu" role="menu">
              <li>
                <a id="home-link" className="container-link">
                  Início
                </a>
              </li>
              <li>
                <a id="sobre-link" className="container-link">
                  Sobre Nós
                </a>
              </li>
              <li
                onMouseEnter={() => setSubmenuOpen(true)}
                onMouseLeave={() => setSubmenuOpen(false)}
              >
                <a
                  className="container-link"
                  onClick={handleSubmenuItemClicked}
                >
                  Cardápio
                  <span>
                    <AiFillCaretDown />
                  </span>
                </a>
                <ul className={submenuOpen ? 'submenu-open' : 'submenu-closed'}>
                  <li>
                    <a id="salgados-assados-link">Salgados Assados</a>
                  </li>
                  <li>
                    <a id="salgados-fritos-link">Salgados Fritos</a>
                  </li>
                  <li>
                    <a id="salgados-folhados-link">Salgados Folhados</a>
                  </li>
                  <li>
                    <a id="doces-tradicionais-link">Doces Tradicionais</a>
                  </li>
                  <li>
                    <a id="doces-finos-link">Doces Finos</a>
                  </li>
                  <li>
                    <a id="doces-especiais-link">Doces Especiais</a>
                  </li>
                  <li>
                    <a id="bolos-personalizados-link">Bolo Personalizado</a>
                  </li>
                  <li>
                    <a id="bolos-vucao-link">Bolo Vulcão</a>
                  </li>
                  <li>
                    <a id="bolos-piscina-link">Bolo Piscina</a>
                  </li>
                  <li>
                    <a id="torta-doce-link">Torta Doce</a>
                  </li>
                  <li>
                    <a id="torta-salgada-link">Torta Salgada</a>
                  </li>
                </ul>
              </li>
              <li>
                <a id="contato-link" className="container-link">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
