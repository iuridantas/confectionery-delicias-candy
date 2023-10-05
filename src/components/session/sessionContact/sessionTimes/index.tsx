import { useState } from 'react';
import { format, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { TimesSession } from './style';

export function SessionTimes() {
  const daysOfWeek = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Domingo',
    'Feriado',
  ];

  const openingHours = [
    '08:00 às 18:00',
    '08:00 às 18:00',
    '08:00 às 18:00',
    '08:00 às 18:00',
    '08:00 às 18:00',
    '08:00 às 12:00',
    'Fechado',
    'Fechado',
  ];

  const [showAllHours, setShowAllHours] = useState(false);

  const toggleShowAllHours = () => {
    setShowAllHours(!showAllHours);
  };

  const currentDate = new Date();

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <section aria-label="Horário de atendimento">
      <TimesSession>
        <h2>Horário de atendimento</h2>
        <div className="hours-container">
          <h3>
            Hoje ({capitalize(format(currentDate, 'iiii', { locale: ptBR }))})
          </h3>
          <h3>{openingHours[(getDay(currentDate) + 6) % 7]}</h3>
        </div>
        {showAllHours && (
          <div>
            {daysOfWeek.map((day, index) => (
              <h3 className='openingHours' key={day}>
                {day}: {openingHours[index]}
              </h3>
            ))}
          </div>
        )}
        <button onClick={toggleShowAllHours}>
          {showAllHours ? 'Ver menos' : 'Ver todos os horários'}
        </button>
      </TimesSession>
    </section>
  );
}
