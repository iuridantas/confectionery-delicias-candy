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
      <form>
        <label>
          Mini (12cm de Diâmetro - 8 fatias)
          <input
            type="radio"
            name="size"
            value="Mini"
            onChange={handleSizeChange}
            checked={selectedSize === 'Mini'}
          />
        </label>
        <label>
          PP (15cm de Diâmetro - 10 a 12 fatias)
          <input
            type="radio"
            name="size"
            value="PP"
            onChange={handleSizeChange}
            checked={selectedSize === 'PP'}
          />
        </label>
        <label>
          P (20cm de Diâmetro - 20 a 25 fatias)
          <input
            type="radio"
            name="size"
            value="P"
            onChange={handleSizeChange}
            checked={selectedSize === 'P'}
          />
        </label>
        <label>
          M (25cm de Diâmetro - 30 a 40 fatias)
          <input
            type="radio"
            name="size"
            value="M"
            onChange={handleSizeChange}
            checked={selectedSize === 'M'}
          />
        </label>
        <label>
          G (30cm de Diâmetro - 50 a 60 fatias)
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
