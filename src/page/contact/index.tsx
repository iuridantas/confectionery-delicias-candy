import { SessionSocialMedia } from '../../components/session/sessionContact/sessionSocialMedia';
import { SessionTimes } from '../../components/session/sessionContact/sessionTimes';
import { Container } from './style';

export function Contact() {
  return (
    <Container aria-label="Página Contato - Delícias de Candy">
      <SessionSocialMedia/>
      <SessionTimes/>
    </Container>
  );
}
