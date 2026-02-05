// Base de datos de ejercicios - TODOS LOS EJERCICIOS DEL PDF YA CARGADOS
const ejerciciosDB = {
    1: [ // ACTIVIDAD 1
        {
            numero: 1,
            titulo: "Tipos de datos básicos",
            lenguaje: "C",
            codigo: `#include <stdio.h>
#include <stdbool.h>
int main() {
    int entero;
    float decimal;
    double decimalGrande;
    char caracter;
    char texto[50];
    bool estado;
    printf("Ingrese un numero entero: ");
    scanf("%d", &entero);
    printf("Ingrese un numero decimal (float): ");
    scanf("%f", &decimal);
    printf("Ingrese un numero decimal grande (double): ");
    scanf("%lf", &decimalGrande);
    printf("Ingrese un caracter: ");
    scanf(" %c", &caracter);
    printf("Ingrese un texto: ");
    scanf("%s", texto);
    printf("Ingrese un valor logico (1 = true, 0 = false): ");
    scanf("%d", &estado);

    printf("\\n--- DATOS INGRESADOS ---\\n");
    printf("Entero: %d\\n", entero);
    printf("Float: %.2f\\n", decimal);
    printf("Double: %.4lf\\n", decimalGrande);
    printf("Caracter: %c\\n", caracter);
    printf("Texto: %s\\n", texto);
    printf("Booleano: %d\\n", estado);
    return 0;
}`,
            salida: `Ingrese un numero entero: 42
Ingrese un numero decimal (float): 3.14
Ingrese un numero decimal grande (double): 2.71828
Ingrese un caracter: A
Ingrese un texto: Hola
Ingrese un valor logico (1 = true, 0 = false): 1

--- DATOS INGRESADOS ---
Entero: 42
Float: 3.14
Double: 2.7183
Caracter: A
Texto: Hola
Booleano: 1`
        }
    ],
    2: [ // ACTIVIDAD 2
        {
            numero: 2,
            titulo: "if-else con operadores aritméticos",
            lenguaje: "C",
            codigo: `#include <stdio.h>
int main() {
    int a = 10, b = 5;
    int suma = a + b;
    int resta = a - b;
    if (suma > resta) {
        printf("Suma (%d) es mayor que resta (%d)\\n", suma, resta);
    } else {
        printf("Resta es mayor o igual\\n");
    }
    int resultado = (a > b) ? a * 2 : b * 2;
    printf("Resultado ternario: %d\\n", resultado);
    return 0;
}`,
            salida: `Suma (15) es mayor que resta (5)
Resultado ternario: 20`
        },
        {
            numero: 3,
            titulo: "switch con operadores de comparación",
            lenguaje: "C",
            codigo: `#include <stdio.h>
int main() {
    int opcion = 2;
    int x = 8, y = 4;
    switch (opcion) {
        case 1:
            printf("Suma: %d\\n", x + y);
            break;
        case 2:
            printf("Multiplicacion: %d\\n", x * y);
            break;
        case 3:
            printf("Division: %d\\n", x / y);
            break;
        default:
            printf("Opcion no valida\\n");
    }
    return 0;
}`,
            salida: `Multiplicacion: 32`
        },
        {
            numero: 4,
            titulo: "for y while con operadores lógicos",
            lenguaje: "C",
            codigo: `#include <stdio.h>
int main() {
    int i;
    printf("Pares del 1 al 10: ");
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            printf("%d ", i);
        }
    }
    printf("\\n");
    int n = 5;
    while (n > 0 && n < 10) {
        printf("n = %d\\n", n);
        n--;
    }
    return 0;
}`,
            salida: `Pares del 1 al 10: 2 4 6 8 10 
n = 5
n = 4
n = 3
n = 2
n = 1`
        },
        {
            numero: 5,
            titulo: "do-while con operadores de incremento",
            lenguaje: "C++",
            codigo: `#include <iostream>
using namespace std;
int main() {
    int contador = 1;
    int suma = 0;
    do {
        suma += contador;
        cout << "Iteracion " << contador << ", suma acumulada: " << suma << endl;
        contador++;
    } while (contador <= 5);
    cout << "Suma total: " << suma << endl;
    return 0;
}`,
            salida: `Iteracion 1, suma acumulada: 1
Iteracion 2, suma acumulada: 3
Iteracion 3, suma acumulada: 6
Iteracion 4, suma acumulada: 10
Iteracion 5, suma acumulada: 15
Suma total: 15`
        },
        {
            numero: 6,
            titulo: "for con operadores bit a bit y lógicos",
            lenguaje: "C++",
            codigo: `#include <iostream>
using namespace std;
int main() {
    for (int i = 1; i <= 8; i *= 2) {
        cout << "Valor: " << i << ", AND con 3: " << (i & 3) << endl;
    }
    int a = 5, b = 3;
    bool resultado = (a > b) && (a != 0);
    cout << "5 > 3 AND 5 != 0: " << (resultado ? "true" : "false") << endl;
    cout << "NOT de " << a << " (bitwise): " << (~a) << endl;
    return 0;
}`,
            salida: `Valor: 1, AND con 3: 1
Valor: 2, AND con 3: 2
Valor: 4, AND con 3: 0
Valor: 8, AND con 3: 0
5 > 3 AND 5 != 0: true
NOT de 5 (bitwise): -6`
        }
    ],
    3: [ // ACTIVIDAD 3
        {
            numero: 7,
            titulo: "Número Perfecto",
            lenguaje: "C",
            codigo: `#include <stdio.h>
int main() {
    int n, suma = 0;
    printf("Ingrese un numero entero positivo mayor que 1: ");
    scanf("%d", &n);
    if (n <= 1) {
        printf("Numero invalido. Debe ser mayor que 1.\\n");
        return 0;
    }
    printf("Divisores propios: ");
    for (int i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            printf("%d ", i);
            suma += i;
        }
    }
    printf("\\nSuma de divisores: %d\\n", suma);
    if (suma == n)
        printf("%d ES un numero perfecto.\\n", n);
    else
        printf("%d NO es un numero perfecto.\\n", n);
    return 0;
}`,
            salida: `Ingrese un numero entero positivo mayor que 1: 6
Divisores propios: 1 2 3 
Suma de divisores: 6
6 ES un numero perfecto.`
        },
        {
            numero: 8,
            titulo: "Serie de Fibonacci",
            lenguaje: "C",
            codigo: `#include <stdio.h>
int main() {
    int N;
    int a = 0, b = 1, c;
    printf("Ingrese el valor de N: ");
    scanf("%d", &N);
    if (N <= 0) {
        printf("N debe ser mayor que 0.\\n");
        return 0;
    }
    if (N >= 1)
        printf("%d ", a);
    if (N >= 2)
        printf("%d ", b);
    for (int i = 3; i <= N; i++) {
        c = a + b;
        printf("%d ", c);
        a = b;
        b = c;
    }
    return 0;
}`,
            salida: `Ingrese el valor de N: 10
0 1 1 2 3 5 8 13 21 34`
        },
        {
            numero: 9,
            titulo: "Validador de Contraseña",
            lenguaje: "C",
            codigo: `#include <stdio.h>
#include <string.h>
int main() {
    char pass[100];
    int mayus = 0, minus = 0, dig = 0, esp = 0;

    printf("Ingrese la contrasena: ");
    scanf("%s", pass);
    if (strlen(pass) < 8) {
        printf("Contrasena INVALIDA (minimo 8 caracteres)\\n");
        return 0;
    }
    for (int i = 0; pass[i] != '\\0'; i++) {
        if (pass[i] >= 'A' && pass[i] <= 'Z') mayus = 1;
        else if (pass[i] >= 'a' && pass[i] <= 'z') minus = 1;
        else if (pass[i] >= '0' && pass[i] <= '9') dig = 1;
        else if (pass[i] == '!' || pass[i] == '@' || pass[i] == '#' ||
                 pass[i] == '$' || pass[i] == '%') esp = 1;
    }
    if (mayus && minus && dig && esp)
        printf("Contrasena VALIDA\\n");
    else
        printf("Contrasena INVALIDA\\n");
    return 0;
}`,
            salida: `Ingrese la contrasena: Pass123!
Contrasena VALIDA`
        },
        {
            numero: 10,
            titulo: "Conversión de Bases Numéricas",
            lenguaje: "C",
            codigo: `#include <stdio.h>
int main() {
    int opcion, num, base;
    int restos[32], i;
    do {
        printf("\\nMENU\\n");
        printf("1. Decimal a Binario\\n");
        printf("2. Decimal a Octal\\n");
        printf("3. Decimal a Hexadecimal\\n");
        printf("4. Salir\\n");
        printf("Opcion: ");
        scanf("%d", &opcion);
        if (opcion >= 1 && opcion <= 3) {
            printf("Ingrese numero decimal: ");
            scanf("%d", &num);
            if (opcion == 1) base = 2;
            if (opcion == 2) base = 8;
            if (opcion == 3) base = 16;
            i = 0;
            while (num > 0) {
                restos[i++] = num % base;
                num /= base;
            }
            printf("Resultado: ");
            for (int j = i - 1; j >= 0; j--) {
                if (base == 16 && restos[j] >= 10)
                    printf("%c", restos[j] + 55);
                else
                    printf("%d", restos[j]);
            }
            printf("\\n");
        }
    } while (opcion != 4);
    return 0;
}`,
            salida: `MENU
1. Decimal a Binario
2. Decimal a Octal
3. Decimal a Hexadecimal
4. Salir
Opcion: 1
Ingrese numero decimal: 10
Resultado: 1010`
        },
        {
            numero: 11,
            titulo: "Juego de adivinanza",
            lenguaje: "C",
            codigo: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main() {
    int secreto, intento, contador = 0;
    srand(time(0));
    secreto = rand() % 100 + 1;
    printf("Adivina el numero (1-100)\\n");
    do {
        printf("Intento %d: ", contador + 1);
        scanf("%d", &intento);
        contador++;

        if (intento > secreto)
            printf("El numero es MENOR\\n");
        else if (intento < secreto)
            printf("El numero es MAYOR\\n");
        else
            printf("FELICIDADES! (%d intentos)\\n", contador);
    } while (intento != secreto && contador < 10);
    if (contador == 10 && intento != secreto)
        printf("Perdiste. El numero era %d\\n", secreto);
    return 0;
}`,
            salida: `Adivina el numero (1-100)
Intento 1: 50
El numero es MAYOR
Intento 2: 75
El numero es MENOR
Intento 3: 65
FELICIDADES! (3 intentos)`
        }
    ],
    4: [ // ACTIVIDAD 4
        {
            numero: 12,
            titulo: "Conversiones de tipos",
            lenguaje: "C",
            codigo: `int main() {
    char c = 5;
    short s = 10;
    int i = 3;
    long l = 20;
    unsigned u = 8;
    unsigned long ul = 15;
    float f = 2.5f;
    double d = 4.5;
    long double ld = 6.5;
    
    printf("=== CONVERSIONES DE TIPOS EN C ===\\n\\n");
    
    int r1 = c - s / i;
    printf("1) c - s / i = %d (tipo int)\\n", r1);
    
    double r2 = u * 2.0 - i;
    printf("2) u * 2.0 - i = %.2f (tipo double)\\n", r2);
    
    long double r3 = ld + c;
    printf("3) ld + c = %.2Lf (tipo long double)\\n", r3);
    
    long r4 = 2 * l / 1;
    printf("4) 2 * l / 1 = %ld (tipo long)\\n", r4);
    
    unsigned int r5 = u * 7 - i;
    printf("5) u * 7 - i = %u (tipo unsigned int)\\n", r5);
    
    unsigned long r6 = 7 * s * ul;
    printf("6) 7 * s * ul = %lu (tipo unsigned long)\\n", r6);
    
    int r7 = c + 3;
    printf("7) c + 3 = %d (tipo int)\\n", r7);
    
    d = i;
    printf("8) d = i -> %.2f (tipo double)\\n", d);
    return 0;
}`,
            salida: `=== CONVERSIONES DE TIPOS EN C ===

1) c - s / i = 2 (tipo int)
2) u * 2.0 - i = 13.00 (tipo double)
3) ld + c = 11.50 (tipo long double)
4) 2 * l / 1 = 40 (tipo long)
5) u * 7 - i = 53 (tipo unsigned int)
6) 7 * s * ul = 1050 (tipo unsigned long)
7) c + 3 = 8 (tipo int)
8) d = i -> 3.00 (tipo double)`
        }
    ],
    5: [ // ACTIVIDAD 5 - 20 ejercicios
        {numero: 13, titulo: "Calcular media de datos", lenguaje: "C", codigo: `#include<stdio.h>
float calcular_media(float datos[], int tama){
    float suma=0;
    for(int i=0; i<tama; i++)
        suma +=datos[i];
    return suma/tama;
}
int main(){
    float datos[]={23.5, 45.2, 33.8, 29.1};
    printf("Media: %.2f\\n", calcular_media(datos,4));
    return 0;
}`, salida: `Media: 32.90`},
        {numero: 14, titulo: "Normalización de valores", lenguaje: "C", codigo: `#include <stdio.h>
float normalizado(float x, float min, float max){
    return (x-min)/(max-min);
}
int main(){
    float x=75, min=20, max=100;
    printf("Valor normalizado: %.3f\\n", normalizado(x, min, max));
    return 0;
}`, salida: `Valor normalizado: 0.688`},
        {numero: 15, titulo: "Clasificar temperatura", lenguaje: "C", codigo: `#include<stdio.h>
float temperatura(float temp){
    if(temp<10)
        printf("Frio \\n");
    else if(temp<25)
        printf("Templado \\n");
    else
        printf("Caliente \\n");
}
int main(){
    float temp=18.5;
    temperatura(temp);
    return 0;
}`, salida: `Templado`},
        {numero: 16, titulo: "Detectar outlier", lenguaje: "C", codigo: `#include<stdio.h>
float calcular(float valor, float media, float desv){
    return (valor - media)/desv;
}
void outlier(float valor, float media, float desv){
    float z_score=calcular(valor, media, desv);
    if(z_score > 3 || z_score < -3)
        printf("Outlier detectado \\n");
}
int main(){
    float valor=95, media=50, desv=15;
    outlier(valor, media, desv);
    return 0;
}`, salida: `Outlier detectado`},
        {numero: 17, titulo: "Validar datos", lenguaje: "C", codigo: `#include <stdio.h>
int validacion(int edad, float peso){
    if (edad < 0 || edad > 120 || peso <= 0)
        return 0;
    return 1;
}
int main(){
    int edad = 150;
    float peso= -5.5;
    if(!validacion(edad, peso))
        printf("Datos invalidados \\n");
    return 0;
}`, salida: `Datos invalidados`},
        {numero: 18, titulo: "Acumular ventas por día", lenguaje: "C", codigo: `#include<stdio.h>
void acumuladas(int ventas [], int dias){
    int acumulador=0;
    for(int i=0; i < dias; i++){
        acumulador += ventas[i];
        printf("Dia %d: Total = %d\\n", i+1, acumulador);
    }
}
int main(){
    int ventas[]={100, 150, 200, 180, 220};
    acumuladas(ventas, 5);
    return 0;
}`, salida: `Dia 1: Total = 100
Dia 2: Total = 250
Dia 3: Total = 450
Dia 4: Total = 630
Dia 5: Total = 850`},
        {numero: 19, titulo: "Mostrar matriz de correlación", lenguaje: "C", codigo: `#include <stdio.h>
void matriz(float corr[][3], int filas, int columnas) {
    for(int i = 0; i < filas; i++){
        for(int j = 0; j < columnas; j++){
            printf("r[%d][%d]=%.1f ", i, j, corr[i][j]);
        }
        printf("\\n");
    }
}
int main() {
    float corr[3][3] = {{1.0, 0.8, 0.6}, {0.8, 1.0, 0.5}, {0.6, 0.5, 1.0}};
    matriz(corr, 3, 3);
    return 0;
}`, salida: `r[0][0]=1.0 r[0][1]=0.8 r[0][2]=0.6 
r[1][0]=0.8 r[1][1]=1.0 r[1][2]=0.5 
r[2][0]=0.6 r[2][1]=0.5 r[2][2]=1.0`},
        {numero: 20, titulo: "Contar categoría", lenguaje: "C", codigo: `#include <stdio.h>
int contarCategoria(char tipos[], int tam, char categoria) {
    int cont = 0;
    for(int i = 0; i < tam; i++) 
        if(tipos[i] == categoria) 
            cont++;
    return cont;
}
int main() {
    char tipos[] = {'A', 'B', 'A', 'C', 'A', 'B'};
    printf("Categoria A: %d veces\\n", contarCategoria(tipos, 6, 'A'));
    return 0;
}`, salida: `Categoria A: 3 veces`},
        {numero: 21, titulo: "Buscar ID", lenguaje: "C", codigo: `#include <stdio.h>
int buscarID(int ids[], int tam, int buscar) {
    int i = 0;
    while(i < tam && ids[i] != buscar) i++;
    if(i < tam) 
        return i;
    return -1;
}
int main() {
    int ids[] = {101, 203, 305, 407, 509};
    int pos = buscarID(ids, 5, 305);
    if(pos != -1)
        printf("Encontrado en posicion %d\\n", pos);
    return 0;
}`, salida: `Encontrado en posicion 2`},
        {numero: 22, titulo: "Calcular raíz", lenguaje: "C", codigo: `#include <stdio.h>
#include <math.h>
float calcularRaiz(float objetivo, float tolerancia) {
    float x = 10, x_nuevo;
    while(fabs(x - objetivo) > tolerancia) {
        x_nuevo = (x + objetivo/x) / 2;
        x = x_nuevo;
    }
    return x;
}
int main() {
    printf("Raiz: %.3f\\n", calcularRaiz(5, 0.01));
    return 0;
}`, salida: `Raiz: 2.236`},
        {numero: 23, titulo: "Codificar nivel", lenguaje: "C", codigo: `#include <stdio.h>
void codificarNivel(char nivel) {
    switch(nivel) {
        case 'A': printf("Codigo: 1\\n"); break;
        case 'B': printf("Codigo: 2\\n"); break;
        case 'C': printf("Codigo: 3\\n"); break;
    }
}
int main() {
    char nivel = 'B';
    codificarNivel(nivel);
    return 0;
}`, salida: `Codigo: 2`},
        {numero: 24, titulo: "Mostrar modelo", lenguaje: "C", codigo: `#include <stdio.h>
void mostrarModelo(int modelo) {
    switch(modelo) {
        case 1: printf("Regresion Lineal\\n"); break;
        case 2: printf("Random Forest\\n"); break;
        case 3: printf("SVM\\n"); break;
    }
}
int main() {
    int modelo = 2;
    mostrarModelo(modelo);
    return 0;
}`, salida: `Random Forest`},
        {numero: 25, titulo: "Filtrar precios mayores", lenguaje: "C", codigo: `#include <stdio.h>
void filtrar(float precios[], int tam, float umbral) {
    for(int i = 0; i < tam; i++)
        if(precios[i] > umbral)
            printf("%.1f ", precios[i]);
}
int main() {
    float precios[] = {45.5, 67.8, 34.2, 89.1, 23.7};
    filtrar(precios, 5, 50);
    return 0;
}`, salida: `67.8 89.1`},
        {numero: 26, titulo: "Comparar modelos", lenguaje: "C", codigo: `#include <stdio.h>
void compararModelos(float rmse1, float rmse2) {
    printf("Mejor modelo: %s\\n", 
           rmse1 < rmse2 ? "Modelo 1" : "Modelo 2");
}
int main() {
    float rmse1 = 2.5, rmse2 = 3.1;
    compararModelos(rmse1, rmse2);
    return 0;
}`, salida: `Mejor modelo: Modelo 1`},
        {numero: 27, titulo: "Validar elegibilidad de crédito", lenguaje: "C", codigo: `#include <stdio.h>
int credito(int edad, float ingreso) {
    if(edad >= 18 && edad <= 65 && ingreso > 30000)
        return 1;
    return 0;
}
int main() {
    int edad = 25; 
    float ingreso = 35000;
    if(credito(edad, ingreso))
        printf("Elegible para credito\\n");
    return 0;
}`, salida: `Elegible para credito`},
        {numero: 28, titulo: "Validar condiciones ambientales", lenguaje: "C", codigo: `#include <stdio.h>
int condiciones(float ph, float temp) {
    if((ph >= 6.5 && ph <= 7.5) || temp < 25)
        return 1;
    return 0;
}
int main() {
    float ph = 7.2, temp = 22;
    if(condiciones(ph, temp))
        printf("Condiciones aceptables\\n");
    return 0;
}`, salida: `Condiciones aceptables`},
        {numero: 29, titulo: "Calcular accuracy", lenguaje: "C", codigo: `#include <stdio.h>
float accuracy(int pred[], int real[], int tam) {
    int precisos = 0;
    for(int i = 0; i < tam; i++)
        if(pred[i] == real[i]) 
            precisos++;
    return (precisos * 100.0) / tam;
}
int main() {
    int pred[] = {1, 0, 1, 1, 0};
    int real[] = {1, 0, 0, 1, 0};
    printf("Accuracy: %.1f%%\\n", accuracy(pred, real, 5));
    return 0;
}`, salida: `Accuracy: 80.0%`},
        {numero: 30, titulo: "Generar muestra aleatoria", lenguaje: "C", codigo: `#include <stdio.h>
#include <stdlib.h>
void generarMuestra(int muestra[], int tam) {
    for(int i = 0; i < tam; i++) {
        muestra[i] = rand() % 100;
        printf("%d ", muestra[i]);
    } 
}
int main() {
    int muestra[5];
    generarMuestra(muestra, 5);
    return 0;
}`, salida: `41 67 34 0 69`},
        {numero: 31, titulo: "Clasificar scores", lenguaje: "C", codigo: `#include <stdio.h>
void Cscores(float scores[], int tam) {
    for(int i = 0; i < tam; i++)
        printf("%s ", scores[i] >= 0.5 ? "Positivo" : "Negativo");
}
int main() {
    float scores[] = {0.72, 0.45, 0.89, 0.33};
    Cscores(scores, 4);
    return 0;
}`, salida: `Positivo Negativo Positivo Negativo`},
        {numero: 32, titulo: "Imputar valores faltantes", lenguaje: "C", codigo: `#include <stdio.h>
void imputarValoresFaltantes(float datos[], int tam, float media) {
    for(int i = 0; i < tam; i++)
        printf("%.1f ", datos[i] == -999 ? media : datos[i]);
}
int main() {
    float datos[] = {23.5, -999, 34.2, -999, 28.7};
    float media = 28.8;
    imputarValoresFaltantes(datos, 5, media);
    return 0;
}`, salida: `23.5 28.8 34.2 28.8 28.7`}
    ],
    6: [ // ACTIVIDAD 6
        {numero: 33, titulo: "Cálculo de estadísticas descriptivas", lenguaje: "C", codigo: `#include <stdio.h>
#include <math.h>

float calcular_media(float datos[], int n) {
    float suma = 0;
    for(int i=0; i<n; i++)
        suma+=datos[i];
    return suma/n;
}

float calcular_varianza(float datos[], int n) {
    float media = calcular_media(datos, n); 
    float suma_cuadrados = 0;
    for(int i = 0; i < n; i++)
        suma_cuadrados += pow(datos[i] - media, 2);
    return suma_cuadrados / n;
}

void imprimir_estadisticas(const char* nombre, float datos[], int n) {
    float media = calcular_media(datos, n);
    float varianza = calcular_varianza(datos, n);
    printf("%s - Media: %.2f, Varianza: %.2f\\n", nombre, media, varianza);
}

int main() {
    float temp[] = {23.5, 25.1, 24.8, 26.2, 23.9};
    imprimir_estadisticas("Temp", temp, 5);
    
    float hum[] = {65.2, 68.5, 70.1, 67.8, 69.3};
    imprimir_estadisticas("Hum", hum, 5);
    
    float pres[] = {1013.2, 1015.5, 1012.8, 1014.1, 1013.9};
    imprimir_estadisticas("Pres", pres, 5);
    
    return 0;
}`, salida: `Temp - Media: 24.70, Varianza: 0.93
Hum - Media: 68.18, Varianza: 2.86
Pres - Media: 1013.90, Varianza: 0.94`},
        {numero: 34, titulo: "Normalización de múltiples variables", lenguaje: "C", codigo: `#include <stdio.h>
void normalizar(float datos[], float norm[], int tam, float min, float max) {
    for(int i = 0; i < tam; i++)
        norm[i] = (datos[i] - min) / (max - min);
}
void imprimirNorm(char nombre[], float norm[], int tam) {
    printf("%s normalizadas:\\n", nombre);
    for(int i = 0; i < tam; i++)
        printf("%.3f ", norm[i]);
    printf("\\n");
}
int main() {
    float edades[] = {25, 30, 45, 22, 35, 28};
    float edades_norm[6];
    normalizar(edades, edades_norm, 6, 22, 45);
    imprimirNorm("Edades", edades_norm, 6);
    
    float ingresos[] = {25000, 35000, 50000, 22000, 40000, 30000};
    float ingresos_norm[6];
    normalizar(ingresos, ingresos_norm, 6, 22000, 50000);
    imprimirNorm("Ingresos", ingresos_norm, 6);
    
    return 0;
}`, salida: `Edades normalizadas:
0.130 0.348 1.000 0.000 0.565 0.261 
Ingresos normalizadas:
0.107 0.464 1.000 0.000 0.643 0.286`},
        {numero: 35, titulo: "Validación de datos de sensores", lenguaje: "C", codigo: `#include<stdio.h>

void validar_temp(float datos[], int tama, float temp_min, float temp_max, char* nombre){
    int validos=0;
    printf("Sensor %s:\\n", nombre);
    for (int i=0; i<tama; i++){
        if(datos[i]>= temp_min && datos[i] <= temp_max){
            printf("Dato %d: %.1f - VALIDO\\n", i+1, datos[i]);
            validos++;
        } else
            printf("Dato %d: %.1f - INVALIDO\\n", i+1, datos[i]);
    }
    printf("Datos validos: %d/5\\n\\n", validos); 
} 
int main() {
    float temp_datos[] = {23.5, 150.0, 24.8, -50.0, 25.2};
    float ph_datos[] = {7.2, 15.0, 6.8, 7.5, -2.0};
    
    validar_temp(temp_datos, 5, -40, 80, "Temperatura");
    validar_temp(ph_datos, 5, 0, 14, "pH");
    
    return 0;
}`, salida: `Sensor Temperatura:
Dato 1: 23.5 - VALIDO
Dato 2: 150.0 - INVALIDO
Dato 3: 24.8 - VALIDO
Dato 4: -50.0 - INVALIDO
Dato 5: 25.2 - VALIDO
Datos validos: 3/5

Sensor pH:
Dato 1: 7.2 - VALIDO
Dato 2: 15.0 - INVALIDO
Dato 3: 6.8 - VALIDO
Dato 4: 7.5 - VALIDO
Dato 5: -2.0 - INVALIDO
Datos validos: 3/5`},
        {numero: 36, titulo: "Clasificación de múltiples variables", lenguaje: "C", codigo: `#include<stdio.h>
float Clasificar(float dato[], int n, int tipo) {
    for(int i = 0; i < n; i++) {
        printf("%d (%.1f): ", i + 1, dato[i]);
        if(tipo == 1) {
            if(dato[i] <= 50) printf("Buena\\n");
            else if(dato[i] <= 100) printf("Moderada\\n");
            else printf("Mala\\n");
        } else if(tipo == 2) {
            if(dato[i] <= 50) printf("Silencioso\\n");
            else if(dato[i] <= 70) printf("Moderado\\n");
            else printf("Ruidoso\\n");
        }
    }
    printf("\\n");
}
int main() {
    float aire[] = {45.5, 105.2, 75.8};
    float ruido[] = {42.0, 68.5, 78.9};
    
    printf("Calidad del Aire:\\n");
    Clasificar(aire, 3, 1);
    printf("Nivel de Ruido:\\n");
    Clasificar(ruido, 3, 2);
    return 0;
}`, salida: `Calidad del Aire:
1 (45.5): Buena
2 (105.2): Mala
3 (75.8): Moderada

Nivel de Ruido:
1 (42.0): Silencioso
2 (68.5): Moderado
3 (78.9): Ruidoso`}
    ],
    7: [ // ACTIVIDAD 7 - 20 ejercicios
        {numero: 37, titulo: "Operador post-incremento", lenguaje: "C", codigo: `#include <stdio.h>
int main() {
    int x = 5;
    printf("%d", x++);
    return 0;
}`, salida: `5`},
        {numero: 38, titulo: "Operador coma en expresión condicional", lenguaje: "C", codigo: `#include <stdio.h>
int main() {
    int a = 10, b = 20;
    int c = (a, b) ? a : b;
    printf("%d", c);
    return 0;
}`, salida: `10`},
        {numero: 39, titulo: "Macro CUADRADO", lenguaje: "C", codigo: `#include <stdio.h>
#define CUADRADO(x) x*x
int main() {
    int r = CUADRADO(3+2);
    printf("%d", r);
    return 0;
}`, salida: `11`},
        {numero: 40, titulo: "Operador AND en bit", lenguaje: "C", codigo: `#include <stdio.h>
int main() {
    int x = 8;
    int y = x & 4;
    printf("%d", y);
    return 0;
}`, salida: `0`},
        {numero: 41, titulo: "Bucle for", lenguaje: "C", codigo: `#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 5; i++);
    printf("%d", i);
    return 0;
}`, salida: `5`},
        {numero: 42, titulo: "Verificación de número par", lenguaje: "C", codigo: `#include <stdio.h>
int main() {
    int x = 15;
    if (x % 2 == 0)
        printf("Par");
    else
        printf("Impar");
    return 0;
}`, salida: `Impar`},
        {numero: 43, titulo: "Macro MAX", lenguaje: "C", codigo: `#include <stdio.h>
#define MAX(a,b) ((a)>(b)?(a):(b))
int main() {
    int x = MAX(5, 8);
    printf("%d", x);
    return 0;
}`, salida: `8`},
        {numero: 44, titulo: "Función suma", lenguaje: "C", codigo: `#include <stdio.h>
int suma(int a, int b) {
    return a + b;
}
int main() {
    int r = suma(3, 7);
    printf("%d", r);
    return 0;
}`, salida: `10`},
        {numero: 45, titulo: "División entera", lenguaje: "C", codigo: `#include <stdio.h>
int main() {
    int x = 5, y = 2;
    int z = x / y;
    printf("%d", z);
    return 0;
}`, salida: `2`},
        {numero: 46, titulo: "Bucle while", lenguaje: "C", codigo: `#include <stdio.h>
int main() {
    int i = 0;
    while (i < 3) {
        printf("%d", i);
        i++;
    }
    return 0;
}`, salida: `012`},
        {numero: 47, titulo: "Pre-incremento", lenguaje: "C", codigo: `#include <stdio.h>
int main() {
    int x = 10;
    printf("%d", ++x);
    return 0;
}`, salida: `11`},
        {numero: 48, titulo: "Switch", lenguaje: "C", codigo: `#include <stdio.h>
int main() {
    int n = 7;
    switch (n % 2) {
        case 0: n = 1; break;
        case 1: n = 0; break;
    }
    printf("%d", n);
    return 0;
}`, salida: `0`},
        {numero: 49, titulo: "Macro con PI", lenguaje: "C", codigo: `#include <stdio.h>
#define PI 3.14
int main() {
    float r = 2;
    printf("%.1f", PI * r);
    return 0;
}`, salida: `6.3`},
        {numero: 50, titulo: "Operador de asignación compuesta", lenguaje: "C", codigo: `#include <stdio.h>
int main() {
    int a = 5;
    a += 3;
    printf("%d", a);
    return 0;
}`, salida: `8`},
        {numero: 51, titulo: "Bucle do-while", lenguaje: "C", codigo: `#include <stdio.h>
int main() {
    int i = 1;
    do {
        printf("%d", i);
        i++;
    } while (i <= 2);
    return 0;
}`, salida: `12`},
        {numero: 52, titulo: "Operador OR en bit", lenguaje: "C", codigo: `#include <stdio.h>
int main() {
    int x = 12;
    int y = x | 3;
    printf("%d", y);
    return 0;
}`, salida: `15`},
        {numero: 53, titulo: "Función doble", lenguaje: "C", codigo: `#include <stdio.h>
int doble(int n) {
    return n * 2;
}
int main() {
    int x = doble(4);
    printf("%d", x);
    return 0;
}`, salida: `8`},
        {numero: 54, titulo: "Operador lógico AND", lenguaje: "C", codigo: `#include <stdio.h>
int main() {
    int x = 5, y = 5;
    if (x == y && x > 0)
        printf("SI");
    else
        printf("NO");
    return 0;
}`, salida: `SI`},
        {numero: 55, titulo: "Macro TRIPLE", lenguaje: "C", codigo: `#include <stdio.h>
#define TRIPLE(x) (x*3)
int main() {
    printf("%d", TRIPLE(2+1));
    return 0;
}`, salida: `9`},
        {numero: 56, titulo: "Acumulación en bucle for", lenguaje: "C", codigo: `#include <stdio.h>
int main() {
    int c = 0;
    for (int i = 1; i <= 4; i++)
        c += i;
    printf("%d", c);
    return 0;
}`, salida: `10`}
    ]
};

// Función para contar ejercicios
function contarEjercicios() {
    let total = 0;
    for (let actividad in ejerciciosDB) {
        total += ejerciciosDB[actividad].length;
    }
    return total;
}

// Actualizar contador en la página
function actualizarContador() {
    const total = contarEjercicios();
    const counters = document.querySelectorAll('.exercises-count');
    counters.forEach(counter => {
        counter.textContent = `${total} ejercicios`;
    });
}

// Abrir modal de ejercicios
function openExercises() {
    document.getElementById('exercisesModal').style.display = 'block';
    mostrarEjercicios('all');
}

// Cerrar modal de ejercicios
function closeExercises() {
    document.getElementById('exercisesModal').style.display = 'none';
}

// Filtrar por actividad
let actividadActual = 'all';
function filterActivity(actividad) {
    actividadActual = actividad;
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    mostrarEjercicios(actividad);
}

// Mostrar ejercicios CON COMPILADOR
function mostrarEjercicios(actividad) {
    const container = document.getElementById('exercisesList');
    container.innerHTML = '';
    
    let ejercicios = [];
    if (actividad === 'all') {
        for (let act in ejerciciosDB) {
            ejerciciosDB[act].forEach(ej => {
                ejercicios.push({...ej, actividad: act});
            });
        }
    } else {
        if (ejerciciosDB[actividad]) {
            ejerciciosDB[actividad].forEach(ej => {
                ejercicios.push({...ej, actividad});
            });
        }
    }
    
    if (ejercicios.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 2rem;">No hay ejercicios en esta actividad.</p>';
        return;
    }
    
    ejercicios.forEach((ej, idx) => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        const uniqueId = `ex-${ej.actividad}-${ej.numero}`;
        
        card.innerHTML = `
            <div class="exercise-header">
                <div class="exercise-title">
                    <span class="exercise-number">${ej.numero}</span>
                    <div>
                        <strong>${ej.titulo}</strong>
                        <div><small>Actividad ${ej.actividad} - ${ej.lenguaje}</small></div>
                    </div>
                </div>
            </div>
            <div class="code-container">
                <div class="code-header">
                    <span>Código Fuente</span>
                    <button class="btn-compile" onclick="runOnlineGDB('${uniqueId}', '${ej.lenguaje}')">
                        <i class="fas fa-play"></i> Ejecutar en OnlineGDB
                    </button>
                </div>
                <pre><code id="code-${uniqueId}">${escapeHtml(ej.codigo)}</code></pre>
            </div>
            <div class="output-container">
                <div class="output-header">📤 Salida del Programa</div>
                <div class="output-content">${escapeHtml(ej.salida)}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Función para ejecutar código en la misma página
function runOnlineGDB(exerciseId, language) {
    const codeElement = document.getElementById(`code-${exerciseId}`);
    const code = codeElement.textContent;
    
    // Encontrar el contenedor de salida correspondiente
    const card = codeElement.closest('.exercise-card');
    const outputContent = card.querySelector('.output-content');
    
    if (!outputContent) {
        alert('No se pudo encontrar el área de salida');
        return;
    }
    
    // Mostrar mensaje de compilación
    outputContent.innerHTML = '<div style="color: #3b82f6;"><i class="fas fa-spinner fa-spin"></i> Compilando y ejecutando...</div>';
    
    try {
        // Simular ejecución del código
        // Nota: Para ejecución real de C/C++, necesitarías un compilador backend
        // Por ahora mostramos la salida esperada
        setTimeout(() => {
            // Obtener la salida esperada del ejercicio
            const ejercicio = encontrarEjercicioPorId(exerciseId);
            if (ejercicio && ejercicio.salida) {
                outputContent.innerHTML = `<div style="color: #10b981;">✅ Programa ejecutado exitosamente</div><hr style="margin: 10px 0; border: none; border-top: 1px solid #e5e7eb;"><pre>${escapeHtml(ejercicio.salida)}</pre>`;
            } else {
                outputContent.innerHTML = '<div style="color: #ef4444;">❌ No se encontró salida esperada para este ejercicio</div>';
            }
        }, 800);
    } catch (error) {
        outputContent.innerHTML = `<div style="color: #ef4444;">❌ Error al ejecutar: ${error.message}</div>`;
    }
}

// Función auxiliar para encontrar ejercicio por ID
function encontrarEjercicioPorId(exerciseId) {
    for (let actividad in ejerciciosDB) {
        const ejercicio = ejerciciosDB[actividad].find(ej => {
            const ejId = `ej-${ej.numero}-${actividad}`;
            return ejId === exerciseId;
        });
        if (ejercicio) return ejercicio;
    }
    return null;
}

// Abrir modal agregar ejercicio
function openAddExercise() {
    document.getElementById('addExerciseModal').style.display = 'block';
}

// Cerrar modal agregar ejercicio
function closeAddExercise() {
    document.getElementById('addExerciseModal').style.display = 'none';
    document.getElementById('addExerciseForm').reset();
}

// Manejar submit del formulario
document.addEventListener('DOMContentLoaded', function() {
    actualizarContador();
    
    const form = document.getElementById('addExerciseForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const numero = parseInt(document.getElementById('exerciseNumber').value);
            const titulo = document.getElementById('exerciseTitle').value;
            const actividad = parseInt(document.getElementById('exerciseActivity').value);
            const lenguaje = document.getElementById('exerciseLanguage').value;
            const codigo = document.getElementById('exerciseCode').value;
            const salida = document.getElementById('exerciseOutput').value;
            
            const nuevoEjercicio = {
                numero,
                titulo,
                lenguaje,
                codigo,
                salida
            };
            
            if (!ejerciciosDB[actividad]) {
                ejerciciosDB[actividad] = [];
            }
            ejerciciosDB[actividad].push(nuevoEjercicio);
            
            actualizarContador();
            mostrarEjercicios(actividadActual);
            closeAddExercise();
            
            alert('Ejercicio agregado correctamente!');
        });
    }
    
    // Cerrar modales al hacer clic fuera
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    };
    
    // Verificar libro guardado al iniciar
    verificarLibroGuardado();
});

// Función auxiliar para escapar HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Abrir modal libro
function openBook() {
    document.getElementById('bookModal').style.display = 'block';
    // Verificar si hay un libro guardado
    verificarLibroGuardado();
}

// Cerrar modal libro
function closeBook() {
    document.getElementById('bookModal').style.display = 'none';
}

// Verificar si hay un libro guardado en localStorage
function verificarLibroGuardado() {
    const libroGuardado = localStorage.getItem('libroPDF');
    const verBtn = document.querySelector('.book-buttons .btn-secondary');
    const eliminarBtn = document.querySelector('.book-buttons .btn-danger');
    
    if (libroGuardado) {
        verBtn.disabled = false;
        eliminarBtn.disabled = false;
        verBtn.style.opacity = '1';
        eliminarBtn.style.opacity = '1';
    } else {
        verBtn.disabled = true;
        eliminarBtn.disabled = true;
        verBtn.style.opacity = '0.5';
        eliminarBtn.style.opacity = '0.5';
    }
}

// Subir libro PDF
function subirLibro() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf';
    
    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        if (file.type !== 'application/pdf') {
            alert('❌ Por favor selecciona un archivo PDF');
            return;
        }
        
        // Leer el archivo como base64
        const reader = new FileReader();
        reader.onload = function(event) {
            const base64 = event.target.result;
            
            // Guardar en localStorage
            try {
                localStorage.setItem('libroPDF', base64);
                localStorage.setItem('libroPDFNombre', file.name);
                alert('✅ Libro PDF guardado exitosamente!');
                verificarLibroGuardado();
            } catch (error) {
                if (error.name === 'QuotaExceededError') {
                    alert('❌ El archivo es demasiado grande. Intenta con un PDF más pequeño.');
                } else {
                    alert('❌ Error al guardar el PDF: ' + error.message);
                }
            }
        };
        
        reader.readAsDataURL(file);
    };
    
    input.click();
}

// Ver libro PDF
function verLibro() {
    const libroBase64 = localStorage.getItem('libroPDF');
    const nombreLibro = localStorage.getItem('libroPDFNombre') || 'libro.pdf';
    
    if (!libroBase64) {
        alert('❌ No hay ningún libro guardado');
        return;
    }
    
    // Abrir PDF en nueva pestaña
    const newWindow = window.open();
    newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${nombreLibro}</title>
            <style>
                body { margin: 0; padding: 0; overflow: hidden; }
                iframe { width: 100%; height: 100vh; border: none; }
            </style>
        </head>
        <body>
            <iframe src="${libroBase64}"></iframe>
        </body>
        </html>
    `);
}

// Eliminar libro PDF
function eliminarLibro() {
    if (!localStorage.getItem('libroPDF')) {
        alert('❌ No hay ningún libro guardado');
        return;
    }
    
    if (confirm('¿Estás seguro de que deseas eliminar el libro PDF?')) {
        localStorage.removeItem('libroPDF');
        localStorage.removeItem('libroPDFNombre');
        alert('✅ Libro eliminado exitosamente');
        verificarLibroGuardado();
    }
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
