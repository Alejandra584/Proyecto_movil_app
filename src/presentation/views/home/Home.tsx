import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import styles from './Styles';

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { userName, recordatorios } = useViewModel();

  const opcionesRapidas = [
    { id: 1, icon: '📅', label: 'Agendar\ncita', screen: 'AgendarCitaScreen' },
    { id: 2, icon: '📋', label: 'Historial', screen: 'HistorialScreen' },
    { id: 3, icon: '💉', label: 'Vacunas', screen: 'HistorialScreen' },
    { id: 4, icon: '📊', label: 'Pagos', screen: 'FacturacionScreen' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Título Veterinaria */}
        <Text style={styles.headerTitle}>Veterinaria</Text>

        {/* Cuadro de bienvenida con foto */}
        <View style={styles.welcomeCard}>
          <View style={styles.welcomeRow}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeText}>Hola, bienvenido</Text>
              <Text style={styles.userName}>{userName}</Text>
            </View>
          </View>
        </View>

        {/* Recordatorio */}
        {recordatorios[0] && (
          <View style={styles.recordatorioCard}>
            <Text style={styles.recordatorioTitle}>
              🔔 RECORDATORIO DE VACUNACION
            </Text>
            <Text style={styles.recordatorioMensaje}>
              {recordatorios[0].mensaje}
            </Text>
          </View>
        )}

        {/* Mascotas */}
        {recordatorios.map((mascota) => (
          <View key={mascota.id} style={styles.mascotaCard}>
            <Text style={styles.mascotaNombre}>{mascota.nombre}</Text>
            <Text
              style={
                mascota.tieneCita
                  ? styles.mascotaCitaActiva
                  : styles.mascotaCita
              }
            >
              {mascota.tieneCita ? `📌 cita ${mascota.cita}` : mascota.mensaje}
            </Text>
          </View>
        ))}

        {/* Acceso Rápido */}
        <View style={styles.accesoRapido}>
          <Text style={styles.accesoRapidoTitle}>Acceso rápido</Text>
          <View style={styles.gridContainer}>
            {opcionesRapidas.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.gridItem}
                onPress={() => {
                  navigation.navigate(item.screen as keyof RootStackParamList);
                }}
              >
                <Text style={styles.gridIcon}>{item.icon}</Text>
                <Text style={styles.gridLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;