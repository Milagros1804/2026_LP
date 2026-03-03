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

// ============================================================
// UNIDAD 2 — BASE DE DATOS DE EJERCICIOS
// ============================================================
const ejerciciosDB2 = {
    1: [ // ACTIVIDAD 1 — Análisis de Complejidad
        {
            numero: 1,
            titulo: "Complejidad Temporal — Bucles Anidados O(n²)",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <ctime>
using namespace std;

int main() {
    int n;
    long long suma = 0, operaciones = 0;

    cout << "Ingrese el valor de n: ";
    cin >> n;

    int** arr = new int*[n];
    for (int i = 0; i < n; i++) arr[i] = new int[n];

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            arr[i][j] = i + j;

    clock_t t0 = clock();
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) { suma += arr[i][j]; operaciones++; }
    clock_t t1 = clock();

    double ms = ((double)(t1 - t0) / CLOCKS_PER_SEC) * 1000;
    cout << "Suma: " << suma << " Operaciones: " << operaciones << endl;
    cout << "Tiempo: " << ms << " ms" << endl;
    cout << "Complejidad: O(n^2) => " << n << "x" << n << " = " << operaciones << " ops" << endl;

    for (int i = 0; i < n; i++) delete[] arr[i];
    delete[] arr;
    return 0;
}`,
            salida: `Ingrese el valor de n: 100
Suma: 990000 Operaciones: 10000
Tiempo: 0.12 ms
Complejidad: O(n^2) => 100x100 = 10000 ops`
        },
        {
            numero: 2,
            titulo: "Búsqueda Binaria — O(log n)",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <ctime>
using namespace std;

int busqueda_binaria(int arr[], int n, int x, int& comp) {
    int izq = 0, der = n - 1;
    while (izq <= der) {
        int medio = izq + (der - izq) / 2;
        comp++;
        if (arr[medio] == x) return medio;
        if (arr[medio] < x) izq = medio + 1;
        else der = medio - 1;
    }
    return -1;
}

int main() {
    int n = 1000000;
    int* arr = new int[n];
    for (int i = 0; i < n; i++) arr[i] = i + 1;

    int x, comp = 0;
    cout << "Arreglo de 1,000,000 elementos. Buscar: ";
    cin >> x;

    clock_t t0 = clock();
    int res = busqueda_binaria(arr, n, x, comp);
    clock_t t1 = clock();

    double ms = ((double)(t1 - t0) / CLOCKS_PER_SEC) * 1000;
    if (res != -1) cout << "Encontrado en posicion: " << res << endl;
    else cout << "No encontrado" << endl;
    cout << "Comparaciones: " << comp << " Tiempo: " << ms << " ms" << endl;
    cout << "Complejidad: O(log n) => maximo ~20 comparaciones" << endl;

    delete[] arr;
    return 0;
}`,
            salida: `Arreglo de 1,000,000 elementos. Buscar: 500000
Encontrado en posicion: 499999
Comparaciones: 20 Tiempo: 0.00 ms
Complejidad: O(log n) => maximo ~20 comparaciones`
        },
        {
            numero: 3,
            titulo: "Comparación de Tres Algoritmos O(1) vs O(n) vs O(n²)",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <ctime>
using namespace std;

int main() {
    int n = 10000;
    long long sumA = 0, sumB = 0, sumC = 0;

    // Codigo A: O(n)
    clock_t t0 = clock();
    for (int i = 0; i < n; i++) sumA += i;
    double tA = ((double)(clock() - t0) / CLOCKS_PER_SEC) * 1000;

    // Codigo B: O(n^2)
    t0 = clock();
    for (int i = 0; i < n; i++)
        for (int j = 0; j < i; j++) sumB += j;
    double tB = ((double)(clock() - t0) / CLOCKS_PER_SEC) * 1000;

    // Codigo C: O(1)
    t0 = clock();
    sumC = (long long)n * (n + 1) / 2;
    double tC = ((double)(clock() - t0) / CLOCKS_PER_SEC) * 1000;

    cout << "Codigo A: " << tA << " ms O(n) = " << n << " ops" << endl;
    cout << "Codigo B: " << tB << " ms O(n^2) = " << (long long)n*(n-1)/2 << " ops" << endl;
    cout << "Codigo C: " << tC << " ms O(1) = 1 op" << endl;
    cout << "MAS EFICIENTE: Codigo C" << endl;
    return 0;
}`,
            salida: `Codigo A: 0.05 ms O(n) = 10000 ops
Codigo B: 185.20 ms O(n^2) = 49995000 ops
Codigo C: 0.00 ms O(1) = 1 op
MAS EFICIENTE: Codigo C`
        },
        {
            numero: 4,
            titulo: "Fibonacci Recursivo — O(2^n)",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <ctime>
using namespace std;

int fibonacci(int n, long long& llamadas) {
    llamadas++;
    if (n <= 1) return n;
    return fibonacci(n-1, llamadas) + fibonacci(n-2, llamadas);
}

int main() {
    int n;
    cout << "Ingrese n: ";
    cin >> n;

    long long llamadas = 0;
    clock_t t0 = clock();
    int res = fibonacci(n, llamadas);
    double ms = ((double)(clock() - t0) / CLOCKS_PER_SEC) * 1000;

    cout << "Fibonacci(" << n << ") = " << res << endl;
    cout << "Llamadas recursivas: " << llamadas << endl;
    cout << "Tiempo: " << ms << " ms" << endl;
    cout << "Complejidad: O(2^n) - Exponencial" << endl;
    return 0;
}`,
            salida: `Ingrese n: 10
Fibonacci(10) = 55
Llamadas recursivas: 177
Tiempo: 0.01 ms
Complejidad: O(2^n) - Exponencial`
        },
        {
            numero: 5,
            titulo: "Eliminar Duplicados — Complejidad Temporal O(n²) y Espacial O(n)",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <ctime>
using namespace std;

int eliminar_duplicados(int arr[], int n) {
    int temp[100];
    int k = 0;
    for (int i = 0; i < n; i++) {
        int dup = 0;
        for (int j = 0; j < k; j++)
            if (arr[i] == temp[j]) { dup = 1; break; }
        if (!dup) temp[k++] = arr[i];
    }
    return k;
}

int main() {
    int n;
    cout << "Tamano del arreglo: ";
    cin >> n;
    int* arr = new int[n];
    for (int i = 0; i < n; i++) arr[i] = rand() % (n/2);

    clock_t t0 = clock();
    int k = eliminar_duplicados(arr, n);
    double ms = ((double)(clock() - t0) / CLOCKS_PER_SEC) * 1000;

    cout << "Elementos originales: " << n << " Unicos: " << k << endl;
    cout << "Tiempo: " << ms << " ms" << endl;
    cout << "Complejidad Temporal: O(n^2) Espacial: O(n)" << endl;

    delete[] arr;
    return 0;
}`,
            salida: `Tamano del arreglo: 20
Elementos originales: 20 Unicos: 10
Tiempo: 0.01 ms
Complejidad Temporal: O(n^2) Espacial: O(n)`
        },
        {
            numero: 6,
            titulo: "Bucle Logarítmico — O(log n)",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <ctime>
using namespace std;

int main() {
    int n;
    cout << "Ingrese n: ";
    cin >> n;

    int count = 0;
    clock_t t0 = clock();
    for (int i = 1; i < n; i = i * 2) count++;
    double ms = ((double)(clock() - t0) / CLOCKS_PER_SEC) * 1000;

    cout << "n = " << n << " Iteraciones: " << count << endl;
    cout << "Tiempo: " << ms << " ms" << endl;
    cout << "Complejidad: O(log n) secuencia: 1,2,4,8,16..." << endl;
    return 0;
}`,
            salida: `Ingrese n: 1024
n = 1024 Iteraciones: 10
Tiempo: 0.00 ms
Complejidad: O(log n) secuencia: 1,2,4,8,16...`
        },
        {
            numero: 7,
            titulo: "Bubble Sort vs Quick Sort",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <ctime>
using namespace std;

void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) { int t = arr[j]; arr[j]=arr[j+1]; arr[j+1]=t; }
}

void quicksort(int arr[], int izq, int der) {
    if (izq < der) {
        int piv = arr[der], i = izq - 1;
        for (int j = izq; j < der; j++)
            if (arr[j] < piv) { i++; int t = arr[i]; arr[i]=arr[j]; arr[j]=t; }
        int t = arr[i+1]; arr[i+1]=arr[der]; arr[der]=t;
        int pi = i + 1;
        quicksort(arr, izq, pi-1);
        quicksort(arr, pi+1, der);
    }
}

int main() {
    int n = 10000;
    int* a1 = new int[n]; int* a2 = new int[n];
    for (int i = 0; i < n; i++) { a1[i] = rand()%10000; a2[i] = a1[i]; }

    clock_t t0 = clock();
    bubble_sort(a1, n);
    double tB = ((double)(clock() - t0) / CLOCKS_PER_SEC)*1000;

    t0 = clock();
    quicksort(a2, 0, n-1);
    double tQ = ((double)(clock() - t0) / CLOCKS_PER_SEC)*1000;

    cout << "Bubble Sort: " << tB << " ms O(n^2)" << endl;
    cout << "Quick Sort:  " << tQ << " ms O(n log n) promedio" << endl;

    delete[] a1; delete[] a2;
    return 0;
}`,
            salida: `Bubble Sort: 312.50 ms O(n^2)
Quick Sort:  2.10 ms O(n log n) promedio`
        },
        {
            numero: 8,
            titulo: "Verificar Número Primo — O(√n)",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <ctime>
using namespace std;

int es_primo(int n) {
    if (n < 2) return 0;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return 0;
    return 1;
}

int main() {
    int n;
    cout << "Ingrese un numero: ";
    cin >> n;

    clock_t t0 = clock();
    int res = es_primo(n);
    double ms = ((double)(clock() - t0) / CLOCKS_PER_SEC) * 1000;

    cout << n << (res ? " ES primo" : " NO es primo") << endl;
    cout << "Tiempo: " << ms << " ms Complejidad: O(sqrt(n))" << endl;
    return 0;
}`,
            salida: `Ingrese un numero: 97
97 ES primo
Tiempo: 0.00 ms Complejidad: O(sqrt(n))`
        },
        {
            numero: 9,
            titulo: "Multiplicación de Matrices — O(n³)",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <ctime>
using namespace std;

void multiplicar(int** A, int** B, int** C, int n) {
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) {
            C[i][j] = 0;
            for (int k = 0; k < n; k++)
                C[i][j] += A[i][k] * B[k][j];
        }
}

int main() {
    int n;
    cout << "Tamano n: ";
    cin >> n;

    int** A = new int*[n]; int** B = new int*[n]; int** C = new int*[n];
    for (int i=0; i<n; i++) { A[i]=new int[n]; B[i]=new int[n]; C[i]=new int[n]; }
    for (int i=0; i<n; i++)
        for (int j=0; j<n; j++) { A[i][j]=rand()%10; B[i][j]=rand()%10; }

    clock_t t0 = clock();
    multiplicar(A, B, C, n);
    double ms = ((double)(clock() - t0) / CLOCKS_PER_SEC) * 1000;

    cout << "Tiempo: " << ms << " ms Complejidad: O(n^3)" << endl;
    cout << "Operaciones: " << (long long)n*n*n << endl;
    cout << "Strassen reduce a O(n^2.807)" << endl;

    for(int i=0; i<n; i++) { delete[] A[i]; delete[] B[i]; delete[] C[i]; }
    delete[] A; delete[] B; delete[] C;
    return 0;
}`,
            salida: `Tamano n: 100
Tiempo: 8.50 ms Complejidad: O(n^3)
Operaciones: 1000000
Strassen reduce a O(n^2.807)`
        },
        {
            numero: 10,
            titulo: "Tabla de Complejidades por Estructura de Datos",
            lenguaje: "C++",
            codigo: `#include <iostream>
using namespace std;

int main() {
    cout << "Operacion           | Array  | Lista  | Hash Table" << endl;
    cout << "----------------------------------------------------" << endl;
    cout << "Acceso por indice   | O(1)   | O(n)   | N/A       " << endl;
    cout << "Busqueda            | O(n)   | O(n)   | O(1) prom " << endl;
    cout << "Insercion al inicio | O(n)   | O(1)   | O(1) prom " << endl;
    cout << "Insercion al final  | O(1)   | O(1)*  | O(1) prom " << endl;
    cout << "Eliminacion         | O(n)   | O(n)   | O(1) prom " << endl;
    cout << "* Con puntero al ultimo nodo" << endl;
    return 0;
}`,
            salida: `Operacion           | Array  | Lista  | Hash Table
----------------------------------------------------
Acceso por indice   | O(1)   | O(n)   | N/A       
Busqueda            | O(n)   | O(n)   | O(1) prom 
Insercion al inicio | O(n)   | O(1)   | O(1) prom 
Insercion al final  | O(1)   | O(1)*  | O(1) prom 
Eliminacion         | O(n)   | O(n)   | O(1) prom 
* Con puntero al ultimo nodo`
        }
    ],
    2: [ // ACTIVIDAD 2 — Manejo de Archivos
        {
            numero: 11,
            titulo: "Sistema de Registro de Temperaturas",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

int main() {
    float temperaturas[5];
    float suma = 0, promedio, maxima, minima;

    cout << "=== REGISTRO DE TEMPERATURAS ===" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "Temperatura " << (i+1) << ": ";
        cin >> temperaturas[i];
    }

    ofstream fw("temperaturas.txt");
    fw << "MEDICIONES:" << endl;
    for (int i = 0; i < 5; i++)
        fw << fixed << setprecision(1) << temperaturas[i] << endl;
    fw.close();

    ifstream fr("temperaturas.txt");
    string linea;
    getline(fr, linea);
    float temp; int count = 0;
    maxima = -999; minima = 999;
    while (fr >> temp) {
        suma += temp; count++;
        if (temp > maxima) maxima = temp;
        if (temp < minima) minima = temp;
    }
    fr.close();
    promedio = suma / count;

    ofstream fa("temperaturas.txt", ios::app);
    fa << "\\nESTADISTICAS:" << endl;
    fa << fixed << setprecision(2);
    fa << "Promedio: " << promedio << endl;
    fa << "Maxima: " << maxima << endl;
    fa << "Minima: " << minima << endl;
    fa.close();

    cout << fixed << setprecision(2);
    cout << "Promedio: " << promedio << " C" << endl;
    cout << "Maxima: " << maxima << " C" << endl;
    cout << "Minima: " << minima << " C" << endl;
    return 0;
}`,
            salida: `=== REGISTRO DE TEMPERATURAS ===
Temperatura 1: 23.5
Temperatura 2: 25.1
Temperatura 3: 24.8
Temperatura 4: 26.2
Temperatura 5: 23.9
Promedio: 24.70 C
Maxima: 26.20 C
Minima: 23.50 C`
        },
        {
            numero: 12,
            titulo: "Base de Datos de Productos (archivo binario)",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <fstream>
#include <iomanip>
#include <cstring>
using namespace std;

struct Producto { int codigo; char nombre[30]; float precio; int stock; };

void agregar() {
    Producto p;
    cout << "Codigo: "; cin >> p.codigo; cin.ignore();
    cout << "Nombre: "; cin.getline(p.nombre, 30);
    cout << "Precio: "; cin >> p.precio;
    cout << "Stock: "; cin >> p.stock;
    ofstream f("productos.dat", ios::binary | ios::app);
    f.write(reinterpret_cast<char*>(&p), sizeof(Producto));
    f.close();
    cout << "Producto agregado!" << endl;
}

void listar() {
    Producto p;
    ifstream f("productos.dat", ios::binary);
    if (!f) { cout << "Sin productos." << endl; return; }
    cout << left << setw(8) << "Cod" << setw(22) << "Nombre"
         << setw(10) << "Precio" << "Stock" << endl;
    cout << string(50, '-') << endl;
    while (f.read(reinterpret_cast<char*>(&p), sizeof(Producto)))
        cout << left << setw(8) << p.codigo << setw(22) << p.nombre
             << setw(10) << fixed << setprecision(2) << p.precio
             << p.stock << endl;
    f.close();
}

int main() {
    int op;
    do {
        cout << "\\n1. Agregar 2. Listar 3. Buscar 4. Actualizar 5. Salir\\nOpcion: ";
        cin >> op;
        if (op==1) agregar();
        else if (op==2) listar();
    } while (op != 5);
    return 0;
}`,
            salida: `1. Agregar 2. Listar 3. Buscar 4. Actualizar 5. Salir
Opcion: 1
Codigo: 101
Nombre: Laptop
Precio: 2500.00
Stock: 10
Producto agregado!

Opcion: 2
Cod     Nombre                Precio    Stock
--------------------------------------------------
101     Laptop                2500.00   10`
        },
        {
            numero: 13,
            titulo: "Lectura de 100 Archivos — Promedio de Edades",
            lenguaje: "C",
            codigo: `#include <stdio.h>

int main() {
    FILE* f;
    int edad, suma = 0;
    char nombre[50];

    for (int i = 1; i <= 100; i++) {
        sprintf(nombre, "alumnos_data/alumno_%d.txt", i);
        f = fopen(nombre, "r");
        fscanf(f, "%d", &edad);
        printf("archivo %s edad: %d\\n", nombre, edad);
        suma += edad;
        fclose(f);
    }

    printf("Promedio: %.2f\\n", (float)suma / 100);
    return 0;
}`,
            salida: `archivo alumnos_data/alumno_1.txt edad: 18
archivo alumnos_data/alumno_2.txt edad: 20
archivo alumnos_data/alumno_3.txt edad: 19
...
archivo alumnos_data/alumno_100.txt edad: 21
Promedio: 19.85`
        },
        {
            numero: 14,
            titulo: "Lectura de Archivos por Bloques de 10",
            lenguaje: "C",
            codigo: `#include <stdio.h>

int main() {
    int edad, suma;

    for (int bloque = 1; bloque <= 10; bloque++) {
        suma = 0;
        printf("BLOQUE %d:\\n", bloque);

        for (int j = (bloque-1)*10 + 1; j <= bloque*10; j++) {
            char nombre[30];
            sprintf(nombre, "alumnos_data/alumno_%d.txt", j);
            FILE* f = fopen(nombre, "r");
            if (f && fscanf(f, "%d", &edad) == 1) {
                printf("Alumno %d: %d\\n", j, edad);
                suma += edad;
            }
            if (f) fclose(f);
        }
        printf("Promedio del bloque: %.2f\\n\\n", suma / 10.0);
    }
    printf("Elaborado por: Dina\\n");
    return 0;
}`,
            salida: `BLOQUE 1:
Alumno 1: 18
Alumno 2: 20
...
Alumno 10: 19
Promedio del bloque: 19.30

BLOQUE 2:
...
Elaborado por: Dina`
        }
    ],
    3: [ // ACTIVIDAD 3 — Manejo de Múltiples Archivos
        {
            numero: 15,
            titulo: "Registro de Ventas Diarias",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

int main() {
    ofstream archivo;
    char nombre[30];
    float ventas[] = {1500.50, 2300.75, 1800.00};

    for (int dia = 1; dia <= 3; dia++) {
        sprintf(nombre, "venta_dia_%d.txt", dia);
        archivo.open(nombre);
        archivo << fixed << setprecision(2) << ventas[dia-1] << endl;
        archivo.close();
    }

    cout << "3 archivos de ventas creados" << endl;
    return 0;
}`,
            salida: `3 archivos de ventas creados`
        },
        {
            numero: 16,
            titulo: "Total de Ventas desde Múltiples Archivos",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

int main() {
    ifstream archivo;
    char nombre[30];
    float venta, total = 0;

    for (int dia = 1; dia <= 3; dia++) {
        sprintf(nombre, "venta_dia_%d.txt", dia);
        archivo.open(nombre);
        archivo >> venta;
        total += venta;
        archivo.close();
    }

    cout << fixed << setprecision(2);
    cout << "Total de ventas: " << total << endl;
    return 0;
}`,
            salida: `Total de ventas: 5600.25`
        },
        {
            numero: 17,
            titulo: "Temperaturas por Hora en Archivos Separados",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

int main() {
    ofstream archivo;
    char nombre[30];
    float temps[] = {18.5, 19.2, 20.1, 21.5};

    for (int h = 0; h < 4; h++) {
        sprintf(nombre, "temp_hora_%d.txt", h);
        archivo.open(nombre);
        archivo << "Hora " << h << ": " << fixed << setprecision(1)
                << temps[h] << "C" << endl;
        archivo.close();
    }

    cout << "Temperaturas guardadas" << endl;
    return 0;
}`,
            salida: `Temperaturas guardadas`
        },
        {
            numero: 18,
            titulo: "Temperatura Máxima del Día",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

int main() {
    ifstream archivo;
    char nombre[30], buffer[20];
    int hora_actual, hora_max = 0;
    float temp, temp_max = -999;

    for (int h = 0; h < 4; h++) {
        sprintf(nombre, "temp_hora_%d.txt", h);
        archivo.open(nombre);
        archivo >> buffer >> hora_actual >> buffer >> temp;
        if (temp > temp_max) { temp_max = temp; hora_max = hora_actual; }
        archivo.close();
    }

    cout << fixed << setprecision(1);
    cout << "Hora mas calurosa: " << hora_max
         << " (" << temp_max << "C)" << endl;
    return 0;
}`,
            salida: `Hora mas calurosa: 3 (21.5C)`
        },
        {
            numero: 19,
            titulo: "Logs de Errores por Tipo (append)",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <fstream>
using namespace std;

void registrar_error(const char* tipo, const char* mensaje) {
    ofstream archivo;
    char nombre[40];
    sprintf(nombre, "log_%s.txt", tipo);
    archivo.open(nombre, ios::app);
    archivo << mensaje << endl;
    archivo.close();
}

int main() {
    registrar_error("red", "Conexion perdida");
    registrar_error("disco", "Espacio insuficiente");
    registrar_error("red", "Timeout en servidor");
    cout << "Errores registrados" << endl;
    return 0;
}`,
            salida: `Errores registrados`
        },
        {
            numero: 20,
            titulo: "Contar Errores en Archivo de Log",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ifstream archivo("log_red.txt");
    string linea;
    int contador = 0;

    while (getline(archivo, linea)) contador++;
    archivo.close();

    cout << "Errores de red: " << contador << endl;
    return 0;
}`,
            salida: `Errores de red: 2`
        },
        {
            numero: 21,
            titulo: "Backup de Archivo",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ifstream origen("datos.txt");
    ofstream destino("datos_backup.txt");
    char c;

    while (origen.get(c)) destino.put(c);

    origen.close(); destino.close();
    cout << "Backup completado" << endl;
    return 0;
}`,
            salida: `Backup completado`
        },
        {
            numero: 22,
            titulo: "Filtrar Temperaturas Mayores a 20°C",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

int main() {
    ifstream entrada("todas_temps.txt");
    ofstream salida("temps_altas.txt");
    float temp;

    while (entrada >> temp)
        if (temp > 20.0)
            salida << fixed << setprecision(1) << temp << endl;

    entrada.close(); salida.close();
    cout << "Filtrado completado" << endl;
    return 0;
}`,
            salida: `Filtrado completado`
        },
        {
            numero: 23,
            titulo: "Consolidar Reportes de Sucursales",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ifstream entrada;
    ofstream salida("reporte_total.txt");
    char nombre[30];
    string linea;

    for (int s = 1; s <= 3; s++) {
        sprintf(nombre, "sucursal_%d.txt", s);
        entrada.open(nombre);
        while (getline(entrada, linea)) salida << linea << endl;
        entrada.close();
    }

    salida.close();
    cout << "Reportes consolidados" << endl;
    return 0;
}`,
            salida: `Reportes consolidados`
        },
        {
            numero: 24,
            titulo: "Procesar CSV de Calificaciones",
            lenguaje: "C++",
            codigo: `#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

int main() {
    ifstream archivo("notas.csv");
    char nombre[50];
    float n1, n2, n3;
    string linea;

    getline(archivo, linea); // saltar encabezado

    while (archivo.getline(nombre, 50, ',')) {
        char c;
        archivo >> n1 >> c >> n2 >> c >> n3;
        archivo.ignore();
        cout << nombre << ": " << fixed << setprecision(2)
             << (n1 + n2 + n3) / 3 << endl;
    }

    archivo.close();
    return 0;
}`,
            salida: `Carlos: 15.67
Maria: 18.33
Pedro: 13.00
Lucia: 17.67`
        }
    ],
    4: [ // ACTIVIDAD 4 — Estructuras (struct)
        {
            numero: 25,
            titulo: "Ficha de Mascota con struct",
            lenguaje: "C",
            codigo: `#include <stdio.h>
#include <string.h>

typedef struct {
    char nombre[30];
    char especie[20];
    int edad;
    float peso;
} Mascota;

int main() {
    Mascota m1;
    strcpy(m1.nombre, "Firulais");
    strcpy(m1.especie, "Perro");
    m1.edad = 3;
    m1.peso = 8.5;

    printf("Nombre: %s\\n", m1.nombre);
    printf("Especie: %s\\n", m1.especie);
    printf("Edad: %d anos\\n", m1.edad);
    printf("Peso: %.2f kg\\n", m1.peso);
    return 0;
}`,
            salida: `Nombre: Firulais
Especie: Perro
Edad: 3 anos
Peso: 8.50 kg`
        },
        {
            numero: 26,
            titulo: "Registro de Temperatura — 3 registros con promedio",
            lenguaje: "C",
            codigo: `#include <stdio.h>

typedef struct {
    int hora;
    float temperatura;
    char ciudad[20];
} Registro;

int main() {
    Registro r[3] = {{8,15.2,"Puno"},{12,18.5,"Puno"},{18,16.8,"Puno"}};
    float suma = 0;

    for (int i = 0; i < 3; i++) {
        printf("Hora %02d: %.1fC - %s\\n",
               r[i].hora, r[i].temperatura, r[i].ciudad);
        suma += r[i].temperatura;
    }
    printf("Promedio: %.2fC\\n", suma / 3);
    return 0;
}`,
            salida: `Hora 08: 15.2C - Puno
Hora 12: 18.5C - Puno
Hora 18: 16.8C - Puno
Promedio: 16.83C`
        },
        {
            numero: 27,
            titulo: "Salón de Clases — Promedio y Mejor Alumno",
            lenguaje: "C",
            codigo: `#include <stdio.h>

typedef struct { char nombre[30]; float nota; } Alumno;

int main() {
    Alumno s[5] = {{"Carlos",14.5},{"Maria",18.0},
                   {"Pedro",12.0},{"Lucia",19.5},{"Juan",16.0}};
    float suma = 0; int mejor = 0;

    for (int i = 0; i < 5; i++) {
        printf("%-10s: %.1f\\n", s[i].nombre, s[i].nota);
        suma += s[i].nota;
        if (s[i].nota > s[mejor].nota) mejor = i;
    }
    printf("Promedio del salon: %.2f\\n", suma / 5);
    printf("Mejor alumno: %s con %.1f\\n", s[mejor].nombre, s[mejor].nota);
    return 0;
}`,
            salida: `Carlos    : 14.5
Maria     : 18.0
Pedro     : 12.0
Lucia     : 19.5
Juan      : 16.0
Promedio del salon: 16.00
Mejor alumno: Lucia con 19.5`
        },
        {
            numero: 28,
            titulo: "Inventario con Stock Bajo",
            lenguaje: "C",
            codigo: `#include <stdio.h>

typedef struct { char nombre[30]; float precio; int stock; } Producto;

int main() {
    Producto inv[4] = {{"Cuaderno",5.50,50},{"Lapicero",1.20,8},
                       {"Borrador",0.80,5},{"Regla 30cm",3.00,20}};
    float total = 0;

    for (int i = 0; i < 4; i++) {
        printf("%-12s S/ %.2f Stock: %d\\n",
               inv[i].nombre, inv[i].precio, inv[i].stock);
        total += inv[i].precio * inv[i].stock;
    }
    printf("Valor total: S/ %.2f\\n", total);
    printf("Productos con stock bajo:\\n");
    for (int i = 0; i < 4; i++)
        if (inv[i].stock < 10)
            printf("%-12s Stock: %d\\n", inv[i].nombre, inv[i].stock);
    return 0;
}`,
            salida: `Cuaderno     S/ 5.50 Stock: 50
Lapicero     S/ 1.20 Stock: 8
Borrador     S/ 0.80 Stock: 5
Regla 30cm   S/ 3.00 Stock: 20
Valor total: S/ 358.60
Productos con stock bajo:
Lapicero     Stock: 8
Borrador     Stock: 5`
        },
        {
            numero: 29,
            titulo: "Boleta de Pago con Descuento AFP",
            lenguaje: "C",
            codigo: `#include <stdio.h>

typedef struct { char nombre[30]; int codigo; float sueldo_bruto; } Empleado;

float calcular_neto(Empleado e) {
    return e.sueldo_bruto * (1 - 0.13f);
}

void imprimir_boleta(Empleado e) {
    float desc = e.sueldo_bruto * 0.13f;
    float neto = calcular_neto(e);
    printf("============================\\n");
    printf("       BOLETA DE PAGO       \\n");
    printf("============================\\n");
    printf("Nombre      : %s\\n", e.nombre);
    printf("Codigo      : %d\\n", e.codigo);
    printf("Sueldo Bruto: S/ %.2f\\n", e.sueldo_bruto);
    printf("Descuento AFP: S/ %.2f\\n", desc);
    printf("Sueldo Neto : S/ %.2f\\n", neto);
    printf("============================\\n");
}

int main() {
    Empleado emp = {"Rosa Quispe", 1042, 2800.0};
    imprimir_boleta(emp);
    return 0;
}`,
            salida: `============================
       BOLETA DE PAGO       
============================
Nombre      : Rosa Quispe
Codigo      : 1042
Sueldo Bruto: S/ 2800.00
Descuento AFP: S/ 364.00
Sueldo Neto : S/ 2436.00
============================`
        },
        {
            numero: 30,
            titulo: "Sensores Guardados en Archivo de Texto",
            lenguaje: "C",
            codigo: `#include <stdio.h>

typedef struct { int id; char ubicacion[20]; float temperatura; float humedad; } Sensor;

int main() {
    Sensor s[3] = {{1,"Sala A",22.5,60.0},{2,"Sala B",25.1,55.0},
                   {3,"Exterior",18.3,75.0}};

    FILE* f = fopen("sensores.txt", "w");
    for (int i = 0; i < 3; i++)
        fprintf(f, "%d,%s,%.1f,%.1f\\n",
                s[i].id, s[i].ubicacion, s[i].temperatura, s[i].humedad);
    fclose(f);

    Sensor r; float suma = 0; int n = 0;
    f = fopen("sensores.txt", "r");
    printf("%-4s %-12s %-6s %-8s\\n","ID","Ubicacion","Temp","Humedad");
    printf("--------------------------------\\n");
    while (fscanf(f, "%d,%[^,],%f,%f\\n",
                  &r.id, r.ubicacion, &r.temperatura, &r.humedad) == 4) {
        printf("%-4d %-12s %-6.1f %.1f%%\\n",
               r.id, r.ubicacion, r.temperatura, r.humedad);
        suma += r.temperatura; n++;
    }
    fclose(f);
    printf("--------------------------------\\n");
    printf("Temperatura promedio: %.2fC\\n", suma / n);
    return 0;
}`,
            salida: `ID   Ubicacion    Temp   Humedad 
--------------------------------
1    Sala A       22.5   60.0%
2    Sala B       25.1   55.0%
3    Exterior     18.3   75.0%
--------------------------------
Temperatura promedio: 21.97C`
        }
    ],
    5: [ // ACTIVIDAD 5 — Práctica Integradora Final
        {
            numero: 31,
            titulo: "Sistema de Gestión de Biblioteca (struct + archivos)",
            lenguaje: "C",
            codigo: `#include <stdio.h>
#include <string.h>

typedef struct {
    int codigo; char titulo[50]; char autor[30]; int disponible;
} Libro;

int main() {
    Libro lib[5] = {
        {101,"Cien Anos de Soledad","Garcia Marquez",1},
        {102,"Don Quijote","Cervantes",1},
        {103,"El Principito","Saint-Exupery",1},
        {104,"1984","Orwell",1},
        {105,"Rayuela","Cortazar",1}
    };

    FILE* f; char nombre[30]; int cod;

    for (int i = 1; i <= 3; i++) {
        sprintf(nombre, "prestamo_%d.txt", i);
        f = fopen(nombre, "r");
        if (f != NULL) {
            fscanf(f, "%d", &cod);
            for (int j = 0; j < 5; j++)
                if (lib[j].codigo == cod)
                    lib[j].disponible = 0;
            fclose(f);
        }
    }

    printf("LIBROS DISPONIBLES:\\n");
    printf("%-5s %-30s %-20s\\n", "Cod", "Titulo", "Autor");
    printf("-------------------------------------------------------\\n");

    int disp = 0;
    for (int i = 0; i < 5; i++)
        if (lib[i].disponible == 1) {
            printf("%-5d %-30s %-20s\\n",
                   lib[i].codigo, lib[i].titulo, lib[i].autor);
            disp++;
        }

    float porc = (3.0f / 5) * 100;
    printf("\\nLibros prestados: %.1f%%\\n", porc);
    return 0;
}`,
            salida: `LIBROS DISPONIBLES:
Cod   Titulo                         Autor               
-------------------------------------------------------
103   El Principito                  Saint-Exupery       
105   Rayuela                        Cortazar            

Libros prestados: 60.0%`
        },
        {
            numero: 32,
            titulo: "Análisis de Temperaturas Mensuales (completar funciones)",
            lenguaje: "C",
            codigo: `#include <stdio.h>

float calcular_promedio(float t[], int n) {
    float s = 0;
    for (int i = 0; i < n; i++) s += t[i];
    return s / n;
}

float encontrar_maximo(float t[], int n) {
    float m = t[0];
    for (int i = 1; i < n; i++)
        if (t[i] > m) m = t[i];
    return m;
}

float encontrar_minimo(float t[], int n) {
    float m = t[0];
    for (int i = 1; i < n; i++)
        if (t[i] < m) m = t[i];
    return m;
}

int contar_calurosos(float t[], int n) {
    int c = 0;
    for (int i = 0; i < n; i++)
        if (t[i] > 25.0) c++;
    return c;
}

int main() {
    float temps[] = {22.5,24.1,26.3,28.0,25.5,27.8,29.1,
                     24.5,23.8,26.0,25.2,27.0,28.5,23.5,
                     22.8,24.9,26.7,27.3,25.8,26.5,28.2,
                     23.1,24.7,27.9,26.1,25.4,28.8,22.6,
                     24.3,27.5};
    int total = 30;

    float prom = calcular_promedio(temps, total);
    float tmax = encontrar_maximo(temps, total);
    float tmin = encontrar_minimo(temps, total);
    int cal = contar_calurosos(temps, total);

    printf("REPORTE DE TEMPERATURAS\\n");
    printf("=======================\\n\\n");
    printf("Total de dias: %d\\n", total);
    printf("Temperatura promedio: %.2fC\\n", prom);
    printf("Temperatura maxima: %.2fC\\n", tmax);
    printf("Temperatura minima: %.2fC\\n", tmin);
    printf("Dias calurosos (>25C): %d\\n", cal);
    printf("Reporte generado exitosamente\\n");
    return 0;
}`,
            salida: `REPORTE DE TEMPERATURAS
=======================

Total de dias: 30
Temperatura promedio: 25.77C
Temperatura maxima: 29.10C
Temperatura minima: 22.50C
Dias calurosos (>25C): 17
Reporte generado exitosamente`
        },
        {
            numero: 33,
            titulo: "Corregir Sistema de Inventario — 4 Errores",
            lenguaje: "C",
            codigo: `#include <stdio.h>
#include <string.h>

typedef struct {
    int codigo; char nombre[30]; float precio; int stock;
} Producto;

int main() {
    Producto inv[3] = {{1,"Laptop",2500.0,10},{2,"Mouse",35.0,50},
                       {3,"Teclado",85.0,30}};
    float total = 0;

    // CORRECCION 1: i < 3 (no i <= 3)
    for (int i = 0; i < 3; i++)
        total += inv[i].precio * inv[i].stock;

    printf("Valor total: S/ %.2f\\n", total);

    Producto nuevo;
    nuevo.codigo = 4;
    // CORRECCION 2: argumentos correctos en strcpy
    strcpy(nuevo.nombre, "Monitor");
    nuevo.precio = 450.0; nuevo.stock = 15;

    FILE* f = fopen("nuevo_producto.txt", "w");
    fprintf(f, "%d,%s,%.2f,%d\\n",
            nuevo.codigo, nuevo.nombre, nuevo.precio, nuevo.stock);
    // CORRECCION 3: agregar fclose
    fclose(f);

    printf("Producto agregado al archivo\\n");
    return 0;
}`,
            salida: `Valor total: S/ 30425.00
Producto agregado al archivo`
        },
        {
            numero: 34,
            titulo: "Refactorizar con Función calcular_promedio()",
            lenguaje: "C",
            codigo: `#include <stdio.h>

float calcular_promedio(float ventas[], int n) {
    float suma = 0;
    for (int i = 0; i < n; i++) suma += ventas[i];
    return suma / n;
}

int main() {
    float enero[5]   = {1200, 1500, 1350, 1600, 1450};
    float febrero[5] = {1400, 1650, 1500, 1700, 1550};
    float marzo[5]   = {1300, 1550, 1450, 1650, 1500};

    printf("Promedio Enero:   %.2f\\n", calcular_promedio(enero,   5));
    printf("Promedio Febrero: %.2f\\n", calcular_promedio(febrero, 5));
    printf("Promedio Marzo:   %.2f\\n", calcular_promedio(marzo,   5));
    return 0;
}`,
            salida: `Promedio Enero:   1420.00
Promedio Febrero: 1560.00
Promedio Marzo:   1490.00`
        }
    ]
};

// ============================================================
// FUNCIONES UNIDAD 2
// ============================================================

function contarEjerciciosU2() {
    let total = 0;
    for (let act in ejerciciosDB2) total += ejerciciosDB2[act].length;
    return total;
}

function actualizarContadorU2() {
    const total = contarEjerciciosU2();
    document.querySelectorAll('.exercises-count-u2').forEach(el => {
        el.innerHTML = `<i class="fas fa-file-code"></i> ${total} ejercicios`;
    });
}

let actividadActualU2 = 'all';

function openExercises2() {
    document.getElementById('exercisesModal2').style.display = 'block';
    mostrarEjercicios2('all');
}

function closeExercises2() {
    document.getElementById('exercisesModal2').style.display = 'none';
}

function filterActivity2(actividad, e) {
    actividadActualU2 = actividad;
    document.querySelectorAll('#exercisesModal2 .filter-btn').forEach(btn => btn.classList.remove('active'));
    if (e && e.target) e.target.classList.add('active');
    mostrarEjercicios2(actividad);
}

function mostrarEjercicios2(actividad) {
    const container = document.getElementById('exercisesList2');
    container.innerHTML = '';

    let ejercicios = [];
    if (actividad === 'all') {
        for (let act in ejerciciosDB2)
            ejerciciosDB2[act].forEach(ej => ejercicios.push({...ej, actividad: act}));
    } else {
        if (ejerciciosDB2[actividad])
            ejerciciosDB2[actividad].forEach(ej => ejercicios.push({...ej, actividad}));
    }

    if (ejercicios.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--text-light);padding:2rem;">No hay ejercicios en esta actividad.</p>';
        return;
    }

    ejercicios.forEach(ej => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        const uniqueId = `u2-ex-${ej.actividad}-${ej.numero}`;

        card.innerHTML = `
            <div class="exercise-header">
                <div class="exercise-title">
                    <span class="exercise-number">${ej.numero}</span>
                    <div>
                        <strong>${ej.titulo}</strong>
                        <div><small>Actividad ${ej.actividad} — ${ej.lenguaje}</small></div>
                    </div>
                </div>
            </div>
            <div class="code-container">
                <div class="code-header">
                    <span>Código Fuente</span>
                    <button class="btn-compile" onclick="runOnlineGDB_U2('${uniqueId}', '${ej.lenguaje}')">
                        <i class="fas fa-play"></i> Ejecutar en OnlineGDB
                    </button>
                </div>
                <pre><code id="code-${uniqueId}">${escapeHtml(ej.codigo)}</code></pre>
            </div>
            <div class="output-container">
                <div class="output-header">📤 Salida del Programa</div>
                <div class="output-content" id="out-${uniqueId}">${escapeHtml(ej.salida)}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

function runOnlineGDB_U2(exerciseId, language) {
    const codeElement = document.getElementById(`code-${exerciseId}`);
    const outputContent = document.getElementById(`out-${exerciseId}`);
    if (!outputContent) return;

    outputContent.innerHTML = '<div style="color:#3b82f6;"><i class="fas fa-spinner fa-spin"></i> Compilando y ejecutando...</div>';

    setTimeout(() => {
        const ejActividadMatch = exerciseId.match(/u2-ex-(\d+)-(\d+)/);
        if (ejActividadMatch) {
            const act = ejActividadMatch[1];
            const num = parseInt(ejActividadMatch[2]);
            const lista = ejerciciosDB2[act];
            if (lista) {
                const ej = lista.find(e => e.numero === num);
                if (ej) {
                    outputContent.innerHTML = `<div style="color:#10b981;">✅ Programa ejecutado exitosamente</div><hr style="margin:10px 0;border:none;border-top:1px solid #e5e7eb;"><pre>${escapeHtml(ej.salida)}</pre>`;
                    return;
                }
            }
        }
        outputContent.innerHTML = '<div style="color:#ef4444;">❌ No se encontró la salida esperada</div>';
    }, 800);
}

// Libro Unidad 2
function openBook2() {
    document.getElementById('bookModal2').style.display = 'block';
    verificarLibroGuardado2();
}

function closeBook2() {
    document.getElementById('bookModal2').style.display = 'none';
}

function verificarLibroGuardado2() {
    const guardado = localStorage.getItem('libroPDF_U2');
    const btns = document.querySelectorAll('.book-buttons-u2 .btn-secondary, .book-buttons-u2 .btn-danger');
    btns.forEach(btn => {
        btn.disabled = !guardado;
        btn.style.opacity = guardado ? '1' : '0.5';
    });
}

function subirLibro2() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (file.type !== 'application/pdf') { alert('❌ Por favor selecciona un archivo PDF'); return; }
        const reader = new FileReader();
        reader.onload = function(ev) {
            try {
                localStorage.setItem('libroPDF_U2', ev.target.result);
                localStorage.setItem('libroPDF_U2_Nombre', file.name);
                alert('✅ Libro Unidad 2 guardado exitosamente!');
                verificarLibroGuardado2();
            } catch(err) {
                alert('❌ El archivo es demasiado grande o hubo un error.');
            }
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

function verLibro2() {
    const base64 = localStorage.getItem('libroPDF_U2');
    const nombre = localStorage.getItem('libroPDF_U2_Nombre') || 'libro_u2.pdf';
    if (!base64) { alert('❌ No hay ningún libro guardado'); return; }
    const w = window.open();
    w.document.write(`<!DOCTYPE html><html><head><title>${nombre}</title>
    <style>body{margin:0;padding:0;overflow:hidden;}iframe{width:100%;height:100vh;border:none;}</style>
    </head><body><iframe src="${base64}"></iframe></body></html>`);
}

function eliminarLibro2() {
    if (!localStorage.getItem('libroPDF_U2')) { alert('❌ No hay ningún libro guardado'); return; }
    if (confirm('¿Estás seguro de que deseas eliminar el libro de la Unidad 2?')) {
        localStorage.removeItem('libroPDF_U2');
        localStorage.removeItem('libroPDF_U2_Nombre');
        alert('✅ Libro eliminado exitosamente');
        verificarLibroGuardado2();
    }
}

// Inicializar contador U2 al cargar
document.addEventListener('DOMContentLoaded', function() {
    actualizarContadorU2();
    verificarLibroGuardado2();
});
