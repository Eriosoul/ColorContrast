import random
import csv

# Función para generar un color aleatorio en formato HEX
def generate_color():
    return f"#{random.randint(0, 255):02X}{random.randint(0, 255):02X}{random.randint(0, 255):02X}"

# Función para calcular la luminancia relativa de un color
def luminance(hex_color):
    rgb = tuple(int(hex_color[i:i+2], 16) / 255 for i in (1, 3, 5))
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]

# Función para calcular la relación de contraste entre dos colores
def contrast_ratio(color1, color2):
    l1, l2 = luminance(color1), luminance(color2)
    l1, l2 = max(l1, l2), min(l1, l2)
    return (l1 + 0.05) / (l2 + 0.05)

# Generar combinaciones aleatorias de colores
dataset = [
    {
        "Background_Color": generate_color(),
        "Text_Color": generate_color()
    }
    for _ in range(1000000)
]

# Agregar el cálculo de contraste a cada combinación
for entry in dataset:
    entry["Contrast_Ratio"] = round(contrast_ratio(entry["Background_Color"], entry["Text_Color"]), 2)

# Guardar el dataset en un archivo CSV
csv_file = "color_combinations.csv"
with open(csv_file, mode="w", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=["Background_Color", "Text_Color", "Contrast_Ratio"])
    writer.writeheader()
    writer.writerows(dataset)

print(f"Dataset guardado en {csv_file}")
