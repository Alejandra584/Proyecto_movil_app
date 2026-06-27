import { StyleSheet } from 'react-native';

const FacturacionStyles = StyleSheet.create({
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
        fontWeight: '600',
        color: '#333333',
        textAlign: 'center',
        marginBottom: 25,
    },
    resumenCard: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    resumenTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    servicioItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    servicioNombre: {
        fontSize: 14,
        color: '#333',
        fontWeight: '500',
    },
    servicioPrecio: {
        fontSize: 14,
        color: '#333',
        fontWeight: '500',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        paddingTop: 15,
        borderTopWidth: 2,
        borderTopColor: '#333',
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    totalPrecio: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    metodoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    metodoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 15,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#E0E0E0',
    },
    metodoItemSeleccionado: {
        borderColor: '#009951',
        backgroundColor: '#e5fbf1',
    },
    metodoIcon: {
        fontSize: 24,
        marginRight: 15,
    },
    metodoNombre: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    procederButton: {
        backgroundColor: '#009951',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 15,
    },
    procederButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    seguridadText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30,
        fontWeight: '500',
    },
});

export default FacturacionStyles;
