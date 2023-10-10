import { DoughSession } from './style';

interface SessionDoughProps {
  selectedDough: string;
  setSelectedDough: React.Dispatch<React.SetStateAction<string>>;
}

export function SessionDough({
  selectedDough,
  setSelectedDough,
}: SessionDoughProps) {
  const handleDoughChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDough(event.target.value);
  };

  return (
    <DoughSession>
      <h2>Escolha a massa desejada para o bolo:</h2>
      <form>
        <label>
          Massa de Chocolate (Cacau 100% e Cacau Black)
          <input
            type="radio"
            name="dough"
            value="Massa de Chocolate"
            onChange={handleDoughChange}
            checked={selectedDough === 'Massa de Chocolate'}
          />
        </label>
        <label>
          Massa Branca (Neutra Comum)
          <input
            type="radio"
            name="dough"
            value="Massa Branca"
            onChange={handleDoughChange}
            checked={selectedDough === 'Massa Branca'}
          />
        </label>
        <label>
          Massa Mista (Metade Chocolate, Metade Branca)
          <input
            type="radio"
            name="dough"
            value="Massa Mista"
            onChange={handleDoughChange}
            checked={selectedDough === 'Massa Mista'}
          />
        </label>
        <label>
          Red Velvet
          <input
            type="radio"
            name="dough"
            value="Red Velvet"
            onChange={handleDoughChange}
            checked={selectedDough === 'Red Velvet'}
          />
        </label>
      </form>
    </DoughSession>
  );
}
