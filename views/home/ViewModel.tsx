import { useState } from 'react';

const HomeViewModel = () => {
  const [userName, setUserName] = useState('Maria Ramirez');
  const [recordatorios, setRecordatorios] = useState([
    {
      id: 1,
      nombre: 'Toby',
      mensaje: 'Requiere Refuerzo Triple Viral antes del 20/06',
      cita: '28/05/2026',
      tieneCita: true,
    },
    {
      id: 2,
      nombre: 'Luna',
      mensaje: 'Sin citas vigentes',
      cita: '',
      tieneCita: false,
    },
  ]);

  return {
    userName,
    recordatorios,
  };
};

export default HomeViewModel;
