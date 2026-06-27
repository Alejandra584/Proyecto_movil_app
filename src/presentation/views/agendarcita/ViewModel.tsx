import { useState } from 'react';

const AgendarCitaViewModel = () => {
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [fechaSeleccionada, setFechaSeleccionada] = useState('');
  const [horaSeleccionada, setHoraSeleccionada] = useState('');

  const servicios = [
    { id: 1, nombre: 'Consulta General' },
    { id: 2, nombre: 'Vacunación' },
    { id: 3, nombre: 'Peluquería / Estética' },
  ];

  const horasDisponibles = [
    '08:00 AM',
    '10:00 AM',
    '11:30 AM',
    '02:00 PM',
    '03:00 PM',
    '05:00 PM',
  ];

  const diasMes = [
    ['', '', '', '', '', 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, '', '', '', ''],
  ];

  const confirmarCita = () => {
    console.log('Cita agendada:', {
      servicio: servicioSeleccionado,
      fecha: fechaSeleccionada,
      hora: horaSeleccionada,
    });
  };

  return {
    servicios,
    servicioSeleccionado,
    setServicioSeleccionado,
    fechaSeleccionada,
    setFechaSeleccionada,
    horaSeleccionada,
    setHoraSeleccionada,
    horasDisponibles,
    diasMes,
    confirmarCita,
  };
};

export default AgendarCitaViewModel;