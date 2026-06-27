import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import useViewModel from './ViewModel';
import styles from './Styles';

export const HistorialScreen = () => {
  const { mascota, evaluaciones } = useViewModel();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.headerTitle}>Historial Clínico Móvil</Text>

        <View style={styles.mascotaCard}>
          <View style={styles.mascotaRow}>
            <View style={styles.mascotaImageContainer}>
              <Text style={styles.mascotaImageText}>🐕</Text>
            </View>
            <View style={styles.mascotaInfoContainer}>
              <Text style={styles.mascotaNombre}>{mascota.nombre}</Text>
              <Text style={styles.mascotaInfo}>
                {mascota.tipo} - {mascota.raza} - {mascota.edad}
              </Text>
              <Text style={styles.mascotaEstado}>✅ {mascota.controles}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.seccionTitle}>EVALUACIONES Y SEGUIMIENTO</Text>

        {evaluaciones.map((evaluacion) => (
          <View 
            key={evaluacion.id} 
            style={[
              styles.evaluacionCard,
              evaluacion.id === 2 && styles.evaluacionCardRojo
            ]}
          >
            <Text style={styles.evaluacionFecha}>{evaluacion.fecha}</Text>
            <Text style={styles.evaluacionTitulo}>{evaluacion.titulo}</Text>
            <Text style={styles.evaluacionDescripcion}>
              {evaluacion.descripcion}
            </Text>
          </View>
        ))}

        <TouchableOpacity style={styles.descargarButton}>
          <Text style={styles.descargarButtonText}>
            📄 Descargar Historial Completo (PDF)
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HistorialScreen;
