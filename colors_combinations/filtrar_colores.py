import csv
import json

def leer_csv():
    combinaciones_validas = []  # Lista para almacenar las combinaciones válidas
    with open('color_combinations.csv', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)  # Leer el archivo CSV como diccionario
        for row in reader:
            try:
                # Convertir el valor de 'Contrast_Ratio' a flotante y verificar si es mayor o igual a 5
                if float(row['Contrast_Ratio']) >= 5:
                    combinaciones_validas.append(row)  # Añadir fila válida a la lista
            except ValueError as ex:
                # Imprimir error en caso de que no se pueda convertir a flotante
                print(f"Error al procesar fila: {row} - {ex}")
    return combinaciones_validas  # Retornar la lista de combinaciones válidas

# Leer combinaciones válidas del archivo CSV
combinaciones = leer_csv()

# Escribir combinaciones válidas en un archivo JSON
with open('combinaciones_validas.json', 'w', encoding='utf-8') as json_file:
    json.dump(combinaciones, json_file, ensure_ascii=False, indent=4)

print(f"{len(combinaciones)} combinaciones válidas han sido guardadas en 'combinaciones_validas.json'.")
