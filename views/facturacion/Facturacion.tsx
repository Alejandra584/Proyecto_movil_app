import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import useViewModel from './ViewModel';
import styles from './Styles';

export const FacturacionScreen = () => {
  const {
    servicios,
    metodosPago,
    metodoPago,
    setMetodoPago,
    total,
    procesarPago,
  } = useViewModel();

  const handleProcesar = () => {
    if (!metodoPago) {
      Alert.alert('Error', 'Selecciona un método de pago');
      return;
    }
    Alert.alert(
      'Confirmar Pago',
      `¿Deseas procesar el pago por $${total.toLocaleString()}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Confirmar', onPress: procesarPago },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Pasarela de Facturación</Text>

        <View style={styles.resumenCard}>
          <Text style={styles.resumenTitle}>RESUMEN DE SERVICIOS ADQUIRIDOS</Text>
          {servicios.map((servicio) => (
            <View key={servicio.id} style={styles.servicioItem}>
              <Text style={styles.servicioNombre}>{servicio.nombre}</Text>
              <Text style={styles.servicioPrecio}>
                ${servicio.precio.toLocaleString()}
              </Text>
            </View>
          ))}
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>TOTAL NETO A PAGAR</Text>
            <Text style={styles.totalPrecio}>
              ${total.toLocaleString()}
            </Text>
          </View>
        </View>

        <Text style={styles.metodoTitle}>SELECCIONE MÉTODO DE PAGO</Text>

        {metodosPago.map((metodo) => (
          <TouchableOpacity
            key={metodo.id}
            style={[
              styles.metodoItem,
              metodoPago === metodo.nombre && styles.metodoItemSeleccionado,
            ]}
            onPress={() => setMetodoPago(metodo.nombre)}
          >
            <Text style={styles.metodoIcon}>{metodo.icon}</Text>
            <Text style={styles.metodoNombre}>{metodo.nombre}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.procederButton} onPress={handleProcesar}>
          <Text style={styles.procederButtonText}>🔒 Proceder al pago Seguro</Text>
        </TouchableOpacity>

        <Text style={styles.seguridadText}>
          Encriptación SSL de extremo a extremo. Conforme con las regulaciones de protección de datos vigentes
        </Text>
      </ScrollView>
    </View>
  );
};

export default FacturacionScreen;
