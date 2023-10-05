
import { SessionHomeMenu } from '../../components/session/sessionHome/sessionMenu';
import { Container } from './style';

export function Home() {
  return (
    <Container aria-label="Página Inicial - Delícias de Candy">
      <SessionHomeMenu/>
    </Container>
  );
}
