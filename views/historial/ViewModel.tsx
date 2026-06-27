const HistorialViewModel = () => {
  const mascota = {
    nombre: 'Toby',
    raza: 'Golden Retriever',
    edad: '2 años',
    tipo: 'Canino',
    controles: 'Controles al día',
  };

  const evaluaciones = [
    {
      id: 1,
      fecha: '15 MAYO 2026',
      titulo: 'Control de Vacunas General',
      descripcion: 'Vacuna séptuple aplicada con éxito por el Dr. Edwin',
    },
    {
      id: 2,
      fecha: '10 MAYO 2026',
      titulo: 'Alerta Automatica: Antirrábia',
      descripcion: 'Alerta disparada en el movil del usuario para mitigar olvido asistencial',
    },
  ];

  return {
    mascota,
    evaluaciones,
  };
};

export default HistorialViewModel;
