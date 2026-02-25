import { StyleSheet, Text, View, Button } from 'react-native';

export default function Alumno(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>{props.nombre}</Text>
      <Text style={styles.matricula}>Matrícula: {props.matricula}</Text>
      
      {/* Aquí agregamos el botón que pedía la práctica */}
      <View style={styles.espacioBoton}>
        <Button 
          title="Saludar" 
          color="#003049" 
          onPress={props.accionBoton} // Recibe la función desde App.js
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212529',
  },
  matricula: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 10,
  },
  espacioBoton: {
    marginTop: 5,
  }
});