import { SessionDough } from '../../components/session/sessionCustomCake/sessionDough';
import { SessionFilling } from '../../components/session/sessionCustomCake/sessionFilling';
import { SessionSize } from '../../components/session/sessionCustomCake/sessionSize';
import { Container, CakeSession } from './style';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export function CustomCake() {
  const [selectedDough, setSelectedDough] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedEspecialFillings, setSelectedEspecialFillings] = useState<
    string[]
  >([]);
  const [selectedSimpleFillings, setSelectedSimpleFillings] = useState<
    string[]
  >([]);

  function constructWhatsAppURL(
    selectedSize: string,
    selectedDough: string,
    selectedFillings: string[],
  ) {
    const message = `Olá, gostaria de fazer um pedido de bolo. Eu gostaria que fosse um bolo de tamanho ${selectedSize}, com uma massa de ${selectedDough} e recheio de ${selectedFillings.join(
      ' e ',
    )}. Seria possível me informar o valor total para esse pedido?`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '55082996080689';

    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  }

  return (
    <Container aria-label="Página Sobre Bolos Personalizados - Delícias de Candy">
      <h1>Cardápio de Bolos</h1>
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
        <h2>Resumo do pedido:</h2>
        <p>Tamanho do bolo: {selectedSize}</p>
        <p>Massa selecionada: {selectedDough}</p>
        <p>
          Recheios selecionados:{' '}
          {selectedEspecialFillings.concat(selectedSimpleFillings).join(', ')}
        </p>
        <a
          href={constructWhatsAppURL(
            selectedSize,
            selectedDough,
            selectedEspecialFillings.concat(selectedSimpleFillings),
          )}
          rel="noopener noreferrer"
          aria-label="WhatsApp de Delicias de Candy"
          title="WhatsApp de Delicias de Candy"
        >
          <h2>
            <FaWhatsapp
              className="whatsApp"
              alt="Ícone representando o WhatsApp de Delicias de Candy"
            />
            <span>Fazer o Pedido</span>
          </h2>
        </a>
      </CakeSession>
    </Container>
  );
}
