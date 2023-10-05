import { CardHomeMenu } from '../../../card/cardHomeMenu';
import { HomeMenuSession } from './style';

export function SessionHomeMenu() {
  return (
    <section aria-label="Seção do cardápio">
      <HomeMenuSession>
        <h1>Explore nosso cardápio clicando na imagem de sua escolha.</h1>
        <CardHomeMenu />
      </HomeMenuSession>
    </section>
  );
}
