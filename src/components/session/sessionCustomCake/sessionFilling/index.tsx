import { FillingSession } from './style';

interface SessionFillingProps {
  selectedEspecialFillings: string[];
  selectedSimpleFillings: string[];
  setSelectedEspecialFillings: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedSimpleFillings: React.Dispatch<React.SetStateAction<string[]>>;
}

export function SessionFilling({
  selectedEspecialFillings,
  selectedSimpleFillings,
  setSelectedEspecialFillings,
  setSelectedSimpleFillings,
}: SessionFillingProps) {
  const handleEspecialFillingChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFilling = event.target.value;

    if (selectedEspecialFillings.includes(selectedFilling)) {
      setSelectedEspecialFillings(
        selectedEspecialFillings.filter(
          (filling) => filling !== selectedFilling,
        ),
      );
    } else if (
      selectedEspecialFillings.length < 2 &&
      selectedSimpleFillings.length + selectedEspecialFillings.length < 2
    ) {
      setSelectedEspecialFillings([
        ...selectedEspecialFillings,
        selectedFilling,
      ]);
    }
  };

  const handleSimpleFillingChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFilling = event.target.value;

    if (selectedSimpleFillings.includes(selectedFilling)) {
      setSelectedSimpleFillings(
        selectedSimpleFillings.filter((filling) => filling !== selectedFilling),
      );
    } else if (
      selectedSimpleFillings.length < 2 &&
      selectedSimpleFillings.length + selectedEspecialFillings.length < 2
    ) {
      setSelectedSimpleFillings([...selectedSimpleFillings, selectedFilling]);
    }
  };

  return (
    <FillingSession>
      <h2>Escolha até duas opções de sabores para o recheio:</h2>
      <div className="column">
        <div className="filling">
          <h3>Especial</h3>
          <form>
            <label>
              Leite Ninho com Nutella
              <input
                type="checkbox"
                name="filling"
                value="Leite Ninho com Nutella"
                onChange={handleEspecialFillingChange}
                checked={selectedEspecialFillings.includes(
                  'Leite Ninho com Nutella',
                )}
              />
            </label>
            <label>
              Ninho com Geleia de Morango
              <input
                type="checkbox"
                name="filling"
                value="Ninho com Geleia de Morango"
                onChange={handleEspecialFillingChange}
                checked={selectedEspecialFillings.includes(
                  'Ninho com Geleia de Morango',
                )}
              />
            </label>
            <label>
              Maracujá
              <input
                type="checkbox"
                name="filling"
                value="Maracujá"
                onChange={handleEspecialFillingChange}
                checked={selectedEspecialFillings.includes('Maracujá')}
              />
            </label>
            <label>
              Brigadeiro Trufado com Gotas de Chocolate
              <input
                type="checkbox"
                name="filling"
                value="Brigadeiro Trufado com Gotas de Chocolate"
                onChange={handleEspecialFillingChange}
                checked={selectedEspecialFillings.includes(
                  'Brigadeiro Trufado com Gotas de Chocolate',
                )}
              />
            </label>
            <label>
              Brigadeiro Trufado com Gotas de Chocolate Branco
              <input
                type="checkbox"
                name="filling"
                value="Brigadeiro Trufado com Gotas de Chocolate Branco"
                onChange={handleEspecialFillingChange}
                checked={selectedEspecialFillings.includes(
                  'Brigadeiro Trufado com Gotas de Chocolate Branco',
                )}
              />
            </label>
            <label>
              Ferrero Rocher
              <input
                type="checkbox"
                name="filling"
                value="Ferrero Rocher"
                onChange={handleEspecialFillingChange}
                checked={selectedEspecialFillings.includes('Ferrero Rocher')}
              />
            </label>
            <label>
              Limão
              <input
                type="checkbox"
                name="filling"
                value="Limão"
                onChange={handleEspecialFillingChange}
                checked={selectedEspecialFillings.includes('Limão')}
              />
            </label>
            <label>
              Ameixa
              <input
                type="checkbox"
                name="filling"
                value="Ameixa"
                onChange={handleEspecialFillingChange}
                checked={selectedEspecialFillings.includes('Ameixa')}
              />
            </label>
            <label>
              Romeu e Julieta
              <input
                type="checkbox"
                name="filling"
                value="Romeu e Julieta"
                onChange={handleEspecialFillingChange}
                checked={selectedEspecialFillings.includes('Romeu e Julieta')}
              />
            </label>
            <label>
              Castanha
              <input
                type="checkbox"
                name="filling"
                value="Castanha"
                onChange={handleEspecialFillingChange}
                checked={selectedEspecialFillings.includes('Castanha')}
              />
            </label>
          </form>
        </div>
        <div className="filling">
          <h3>Simples</h3>
          <form>
            <label>
              Brigadeiro
              <input
                type="checkbox"
                name="filling"
                value="Brigadeiro"
                onChange={handleSimpleFillingChange}
                checked={selectedSimpleFillings.includes('Brigadeiro')}
              />
            </label>
            <label>
              Leite Ninho
              <input
                type="checkbox"
                name="filling"
                value="Leite Ninho"
                onChange={handleSimpleFillingChange}
                checked={selectedSimpleFillings.includes('Leite Ninho')}
              />
            </label>
            <label>
              Brigadeiro Branco
              <input
                type="checkbox"
                name="filling"
                value="Brigadeiro Branco"
                onChange={handleSimpleFillingChange}
                checked={selectedSimpleFillings.includes('Brigadeiro Branco')}
              />
            </label>
            <label>
              Prestígio
              <input
                type="checkbox"
                name="filling"
                value="Prestígio"
                onChange={handleSimpleFillingChange}
                checked={selectedSimpleFillings.includes('Prestígio')}
              />
            </label>
            <label>
              Amendoim
              <input
                type="checkbox"
                name="filling"
                value="Amendoim"
                onChange={handleSimpleFillingChange}
                checked={selectedSimpleFillings.includes('Amendoim')}
              />
            </label>
            <label>
              Doce de Leite
              <input
                type="checkbox"
                name="filling"
                value="Doce de Leite"
                onChange={handleSimpleFillingChange}
                checked={selectedSimpleFillings.includes('Doce de Leite')}
              />
            </label>
            <label>
              Brigadeiro Crocante de Amendoim
              <input
                type="checkbox"
                name="filling"
                value="Brigadeiro Crocante de Amendoim"
                onChange={handleSimpleFillingChange}
                checked={selectedSimpleFillings.includes(
                  'Brigadeiro Crocante de Amendoim',
                )}
              />
            </label>
          </form>
        </div>
      </div>
    </FillingSession>
  );
}
