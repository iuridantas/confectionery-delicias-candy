import { Container } from './style';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiFillCaretDown } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

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
      { id: 'bolos-vulcao-link', target: '/boloVulcao' },
      { id: 'bolos-piscina-link', target: '/boloPiscina' },
      { id: 'torta-doce-link', target: '/tortaDoce' },
      { id: 'torta-salgada-link', target: '/tortaSalgada' },
      { id: 'cupcakes-link', target: '/cupcakes' },
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
                <Link to="/" id="home-link" className="container-link">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre-nos"
                  id="sobre-link"
                  className="container-link"
                >
                  Sobre Nós
                </Link>
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
                    <Link to="/bolosPiscina" id="bolos-piscina-link">
                      Bolo Piscina
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bolosPersonalizados"
                      id="bolos-personalizados-link"
                    >
                      Bolo Personalizado
                    </Link>
                  </li>
                  <li>
                    <Link to="/bolosVulcao" id="bolos-vulcao-link">
                      Bolo Vulcão
                    </Link>
                  </li>
                  <li>
                    <Link to="/cupcakes" id="cupcakes-link">
                      Cupcakes
                    </Link>
                  </li>
                  <li>
                    <Link to="/docesEspeciais" id="doces-especiais-link">
                      Doces Especiais
                    </Link>
                  </li>
                  <li>
                    <Link to="/docesFinos" id="doces-finos-link">
                      Doces Finos
                    </Link>
                  </li>
                  <li>
                    <Link to="/docesTradicionais" id="doces-tradicionais-link">
                      Doces Tradicionais
                    </Link>
                  </li>
                  <li>
                    <Link to="/salgadosAssados" id="salgados-assados-link">
                      Salgados Assados
                    </Link>
                  </li>
                  <li>
                    <Link to="/salgadosFolhados" id="salgados-folhados-link">
                      Salgados Folhados
                    </Link>
                  </li>
                  <li>
                    <Link to="/salgadosFritos" id="salgados-fritos-link">
                      Salgados Fritos
                    </Link>
                  </li>
                  <li>
                    <Link to="/tortaDoce" id="torta-doce-link">
                      Torta Doce
                    </Link>
                  </li>
                  <li>
                    <Link to="/tortaSalgada" id="torta-salgada-link">
                      Torta Salgada
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/contato"
                  id="contato-link"
                  className="container-link"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
