import { useState } from 'react';

const LoginViewModel = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChange = (property: string, value: any) => {
    setValues({
      ...values,
      [property]: value
    });
  };

  const login = () => {
    console.log('Email:', values.email);
    console.log('Password:', values.password);
    // Aquí iría la lógica de autenticación
  };

  return {
    ...values,
    onChange,
    login
  };
};

export default LoginViewModel;