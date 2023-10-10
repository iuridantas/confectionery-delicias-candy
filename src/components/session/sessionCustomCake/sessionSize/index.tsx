import { SizeSession } from './style';

interface SessionSizeProps {
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

export function SessionSize({
  selectedSize,
  setSelectedSize,
}: SessionSizeProps) {
  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  return (
    <SizeSession>
      <h2>Tamanho:</h2>
      <p>
        <strong>Observação:</strong> Caso deseje que o bolo tenha um topo
        decorado com flores ou outros detalhes especiais, por favor, informe-nos
        quando entrar em contato, pois haverá um acréscimo no valor.
      </p>
      <form>
        <label>
          Mini (12cm de Diâmetro - 8 fatias) - R$ 70,00.
          <input
            type="radio"
            name="size"
            value="Mini"
            onChange={handleSizeChange}
            checked={selectedSize === 'Mini'}
          />
        </label>
        <label>
          PP (15cm de Diâmetro - 10 a 12 fatias) - R$ 130,00.
          <input
            type="radio"
            name="size"
            value="PP"
            onChange={handleSizeChange}
            checked={selectedSize === 'PP'}
          />
        </label>
        <label>
          P (20cm de Diâmetro - 20 a 25 fatias) - R$ 170,00.
          <input
            type="radio"
            name="size"
            value="P"
            onChange={handleSizeChange}
            checked={selectedSize === 'P'}
          />
        </label>
        <label>
          M (25cm de Diâmetro - 30 a 40 fatias) - R$ 220,00.
          <input
            type="radio"
            name="size"
            value="M"
            onChange={handleSizeChange}
            checked={selectedSize === 'M'}
          />
        </label>
        <label>
          G (30cm de Diâmetro - 50 a 60 fatias) - R$ 320,00.
          <input
            type="radio"
            name="size"
            value="G"
            onChange={handleSizeChange}
            checked={selectedSize === 'G'}
          />
        </label>
      </form>
    </SizeSession>
  );
}
