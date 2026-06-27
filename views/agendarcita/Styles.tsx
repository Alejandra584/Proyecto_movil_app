import { StyleSheet } from 'react-native';

const AgendarCitaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  servicioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  servicioItem: {
    width: '31%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center', 
    borderWidth: 2,
    borderColor: '#000000',
  },
  servicioItemSeleccionado: {
    borderColor: '#000000',
    backgroundColor: '#000000',
  },
  servicioNombre: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333333',
    fontWeight: '500',
  },
  servicioNombreSeleccionado: {
    color: '#FFFFFF',
  },
  calendarioContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  calendarioHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  calendarioMes: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  semanaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 3,
  },
  semanaDia: {
    fontSize: 11,
    color: '#666',
    width: '12%',
    textAlign: 'center',
    fontWeight: '600',
  },
  semanaFila: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 2,
  },
  diaItem: {
    width: '12%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  diaItemSeleccionado: {
    backgroundColor: '#000000',
  },
  diaTexto: {
    fontSize: 13,
    color: '#333',
  },
  diaTextoOpaco: {
    color: '#CCCCCC',
  },
  diaTextoSeleccionado: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  horasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  horaItem: {
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000000',
  },
  horaItemSeleccionado: {
    borderColor: '#000000',
    backgroundColor: '#000000',
  },
  horaTexto: {
    fontSize: 13,
    color: '#333333',
    fontWeight: '500',
  },
  horaTextoSeleccionado: {
    color: '#FFFFFF',
  },
  confirmarButton: {
    backgroundColor: '#000000',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 30,
  },
  confirmarButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AgendarCitaStyles;