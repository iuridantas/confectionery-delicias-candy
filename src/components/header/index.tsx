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

    function scrollToTarget(target: string) {
      const targetElement = document.getElementById(target);
      if (!targetElement) return;
      const headerHeight =
        (document.querySelector('header') as HTMLElement)?.offsetHeight || 0;
      const targetOffset = targetElement.offsetTop - headerHeight;
      window.scrollTo({ top: targetOffset, behavior: 'smooth' });
      if (nav) nav.classList.remove('active');
    }

    const navLinks = document.querySelectorAll('#menu a');

    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = (event.target as HTMLElement).getAttribute('href');
        if (target) scrollToTarget(target);
      });
    });

    const homeLink = document.getElementById('home-link');
    const sobreLink = document.getElementById('sobre-link');
    const contatoLink = document.getElementById('contato-link');
    const salgadosAssadosLink = document.getElementById(
      'salgados-assados-link',
    );
    const salgadosFritosLink = document.getElementById('salgados-fritos-link');
    const salgadosFolhadosLink = document.getElementById(
      'salgados-folhados-link',
    );
    const docesTradicionaisLink = document.getElementById(
      'salgados-tradicionais-link',
    );
    const docesFinosLink = document.getElementById('doces-finos-link');
    const docesEspeciaisLink = document.getElementById('doces-especiais-link');
    const bolosPersonalizadosLink = document.getElementById(
      'bolos-personalizados-link',
    );
    const bolosVucaoLink = document.getElementById('bolos-vucao-link');
    const bolosPiscinaLink = document.getElementById('bolos-piscina-link');
    const tortaDoceLink = document.getElementById('torta-doce-link');
    const tortaSalgadaLink = document.getElementById('torta-salgada-link');

    homeLink?.addEventListener('click', () => {
      if (nav) nav.classList.remove('active');
    });

    sobreLink?.addEventListener('click', () => {
      if (nav) nav.classList.remove('active');
    });

    contatoLink?.addEventListener('click', () => {
      if (nav) nav.classList.remove('active');
    });

    salgadosAssadosLink?.addEventListener('click', () => {
      if (nav) nav.classList.remove('active');
      setSubmenuOpen(false);
    });

    salgadosFritosLink?.addEventListener('click', () => {
      if (nav) nav.classList.remove('active');
      setSubmenuOpen(false);
    });

    salgadosFolhadosLink?.addEventListener('click', () => {
      if (nav) nav.classList.remove('active');
      setSubmenuOpen(false);
    });

    docesTradicionaisLink?.addEventListener('click', () => {
      if (nav) nav.classList.remove('active');
      setSubmenuOpen(false);
    });

    return () => {
      btnMobile?.removeEventListener('click', toggleMenu);

      navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const target = (event.target as HTMLElement).getAttribute('href');
          if (target) scrollToTarget(target);
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
                <a
                  id="home-link"
                  onClick={() => {
                    navigate('/');
                  }}
                  className="container-link"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  id="sobre-link"
                  onClick={() => {
                    navigate('/sobre-nos');
                  }}
                  className="container-link"
                >
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
                    <a
                      id="salgados-assados-link"
                      onClick={() => {
                        navigate('/salgadosAssados');
                      }}
                    >
                      Salgados Assados
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate('/salgadosFritos');
                        handleSubmenuItemClicked();
                      }}
                    >
                      Salgados Fritos
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate('/salgadosFolhados');
                        handleSubmenuItemClicked();
                      }}
                    >
                      Salgados Folhados
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate('/docesTradicionais');
                        handleSubmenuItemClicked();
                      }}
                    >
                      Doces Tradicionais
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate('/docesFinos');
                        handleSubmenuItemClicked();
                      }}
                    >
                      Doces Finos
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate('/docesEspeciais');
                        handleSubmenuItemClicked();
                      }}
                    >
                      Doces Especiais
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate('/boloPersonalizado');
                        handleSubmenuItemClicked();
                      }}
                    >
                      Bolo Personalizado
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate('/boloVulcão');
                        handleSubmenuItemClicked();
                      }}
                    >
                      Bolo Vulcão
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate('/boloPiscina');
                        handleSubmenuItemClicked();
                      }}
                    >
                      Bolo Piscina
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate('/tortaDoce');
                        handleSubmenuItemClicked();
                      }}
                    >
                      Torta Doce
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate('/tortaSalgada');
                        handleSubmenuItemClicked();
                      }}
                    >
                      Torta Salgada
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  id="contato-link"
                  onClick={() => {
                    navigate('/contato');
                  }}
                  className="container-link"
                >
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
