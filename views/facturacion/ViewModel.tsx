import { useState } from 'react';

const FacturacionViewModel = () => {
  const [metodoPago, setMetodoPago] = useState('');

  const servicios = [
    { id: 1, nombre: 'Consulta Diagnóstica', precio: 50000 },
    { id: 2, nombre: 'Dosis Vacuna Tripe Canina', precio: 30000 },
    { id: 3, nombre: 'Estética / peluquería Canina', precio: 40000 },
  ];

  const metodosPago = [
    { id: 1, nombre: 'Tarjeta de Crédito', icon: '💳' },
    { id: 2, nombre: 'Transferencia Automatica PSE', icon: '🏦' },
  ];

  const total = servicios.reduce((sum, item) => sum + item.precio, 0);

  const procesarPago = () => {
    if (!metodoPago) {
      alert('Selecciona un método de pago');
      return;
    }
    console.log('Procesando pago...', { metodoPago, total });
    alert('Pago procesado exitosamente');
  };

  return {
    servicios,
    metodosPago,
    metodoPago,
    setMetodoPago,
    total,
    procesarPago,
  };
};

export default FacturacionViewModel;
