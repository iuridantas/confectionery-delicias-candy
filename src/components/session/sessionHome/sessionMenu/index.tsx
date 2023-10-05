import { CardHomeMenu } from '../../../card/cardHomeMenu';
import { HomeMenuSession } from './style';

export function SessionHomeMenu() {
  return (
    <section aria-label="Seção do cardápio">
      <HomeMenuSession>
        <CardHomeMenu />
      </HomeMenuSession>
    </section>
  );
}
