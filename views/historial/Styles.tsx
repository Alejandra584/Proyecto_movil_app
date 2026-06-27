import { StyleSheet } from 'react-native';

const HistorialStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 25,
  },
  mascotaCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  mascotaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mascotaImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  mascotaImageText: {
    fontSize: 30,
  },
  mascotaInfoContainer: {
    flex: 1,
  },
  mascotaNombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  mascotaInfo: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  mascotaEstado: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
    marginTop: 2,
  },
  seccionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  evaluacionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  evaluacionCardRojo: {
    backgroundColor: '#ffffff',
    borderLeftColor: '#DC362E',
  },
  evaluacionFecha: {
    fontSize: 12,
    color: '#666',
    fontWeight: 'bold',
  },
  evaluacionTitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 5,
  },
  evaluacionDescripcion: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  descargarButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#625b71',
  },
  descargarButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HistorialStyles;
