import { CardSession } from './style';
import homeMenus from '../../../json/homeMenus.json';
import { Link } from 'react-router-dom';

export function CardHomeMenu() {
  return (
    <section aria-label="card do cardápio">
      {homeMenus.map((homeMenu, index) => (
        <CardSession key={index}>
          <Link to={homeMenu.url}>
            <img src={homeMenu.photo} alt={`Imagem de ${homeMenu.name}`} />
            <h2>{homeMenu.name}</h2>
          </Link>
        </CardSession>
      ))}
    </section>
  );
}
