import { SessionDough } from '../../components/session/sessionCustomCake/sessionDough';
import { SessionFilling } from '../../components/session/sessionCustomCake/sessionFilling';
import { SessionSize } from '../../components/session/sessionCustomCake/sessionSize';
import { Container, CakeSession } from './style';
import { useState } from 'react';

export function CustomCake() {
  const [selectedDough, setSelectedDough] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedEspecialFillings, setSelectedEspecialFillings] = useState<
    string[]
  >([]);
  const [selectedSimpleFillings, setSelectedSimpleFillings] = useState<
    string[]
  >([]);

  return (
    <Container aria-label="Página Sobre Bolos Personalizados - Delícias de Candy">
      <SessionSize
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <SessionDough
        selectedDough={selectedDough}
        setSelectedDough={setSelectedDough}
      />
      <SessionFilling
        selectedEspecialFillings={selectedEspecialFillings}
        selectedSimpleFillings={selectedSimpleFillings}
        setSelectedEspecialFillings={setSelectedEspecialFillings}
        setSelectedSimpleFillings={setSelectedSimpleFillings}
      />
      <CakeSession>
        <p>Tamanho do bolo: {selectedSize}</p>
        <p>Massa selecionada: {selectedDough}</p>
        <p>
          Recheios selecionados:{' '}
          {selectedEspecialFillings.concat(selectedSimpleFillings).join(', ')}
        </p>
      </CakeSession>
    </Container>
  );
}
