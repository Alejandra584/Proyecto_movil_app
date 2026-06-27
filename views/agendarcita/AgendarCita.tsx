import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import useViewModel from './ViewModel';
import styles from './Styles';

export const AgendarCitaScreen = () => {
  const {
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
  } = useViewModel();

  const handleConfirmar = () => {
    if (!servicioSeleccionado || !fechaSeleccionada || !horaSeleccionada) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }
    confirmarCita();
    Alert.alert('Éxito', 'Cita agendada correctamente');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

        <Text style={styles.sectionTitle}>1. SELECCIONE EL SERVICIO</Text>
        <View style={styles.servicioContainer}>
          {servicios.map((servicio) => (
            <TouchableOpacity
              key={servicio.id}
              style={[
                styles.servicioItem,
                servicioSeleccionado === servicio.nombre &&
                  styles.servicioItemSeleccionado,
              ]}
              onPress={() => setServicioSeleccionado(servicio.nombre)}
            >
              <Text
                style={[
                  styles.servicioNombre,
                  servicioSeleccionado === servicio.nombre &&
                    styles.servicioNombreSeleccionado,
                ]}
              >
                {servicio.nombre}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>
          2. SELECCIONE FECHA (MAYO 2026)
        </Text>
        <View style={styles.calendarioContainer}>
          <View style={styles.calendarioHeader}>
            <Text style={styles.calendarioMes}>Mayo 2026</Text>
          </View>
          <View style={styles.semanaHeader}>
            {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((dia) => (
              <Text key={dia} style={styles.semanaDia}>
                {dia}
              </Text>
            ))}
          </View>
          {diasMes.map((semana, index) => (
            <View key={index} style={styles.semanaFila}>
              {semana.map((dia, idx) => {
                const esNumeroValido = typeof dia === 'number' && dia >= 1 && dia <= 31;
                return (
                  <TouchableOpacity
                    key={idx}
                    style={[
                      styles.diaItem,
                      fechaSeleccionada === dia.toString() &&
                        styles.diaItemSeleccionado,
                    ]}
                    onPress={() => {
                      if (esNumeroValido) {
                        setFechaSeleccionada(dia.toString());
                      }
                    }}
                    disabled={!esNumeroValido}
                  >
                    <Text
                      style={[
                        styles.diaTexto,
                        !esNumeroValido && styles.diaTextoOpaco,
                        fechaSeleccionada === dia.toString() &&
                          styles.diaTextoSeleccionado,
                      ]}
                    >
                      {dia}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>3. HORAS DISPONIBLES</Text>
        <View style={styles.horasContainer}>
          {horasDisponibles.map((hora) => (
            <TouchableOpacity
              key={hora}
              style={[
                styles.horaItem,
                horaSeleccionada === hora && styles.horaItemSeleccionado,
              ]}
              onPress={() => setHoraSeleccionada(hora)}
            >
              <Text
                style={[
                  styles.horaTexto,
                  horaSeleccionada === hora && styles.horaTextoSeleccionado,
                ]}
              >
                {hora}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.confirmarButton} onPress={handleConfirmar}>
          <Text style={styles.confirmarButtonText}>Confirmar y Agendar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AgendarCitaScreen;
