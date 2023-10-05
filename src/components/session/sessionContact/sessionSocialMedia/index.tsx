import { SocialMediaSession } from './style';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export function SessionSocialMedia() {
  return (
    <section aria-label="Contato">
      <SocialMediaSession>
        <h1>Entre em contato</h1>
        <div>
          <a
            href="https://instagram.com/deliciasdecandy?igshid=MzRlODBiNWFlZA=="
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Perfil do Instagram de Delicias de Candy"
            title="Perfil do Instagram de Delicias de Candy"
          >
            <h2>
              <FaInstagram
                className="instagram"
                alt="Ícone representando o perfil do Instagram de Delicias de Candy"
              />
              <span>Instagram</span>
            </h2>
            <p>deliciasdecandy</p>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5582996080689&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de Delicias de Candy"
            title="WhatsApp de Delicias de Candy"
          >
            <h2>
              <FaWhatsapp
                className="whatsApp"
                alt="Ícone representando o WhatsApp de Delicias de Candy"
              />
              <span>WhatsApp</span>
            </h2>
            <p>(82) 9 9608-0689</p>
          </a>
        </div>
      </SocialMediaSession>
    </section>
  );
}
