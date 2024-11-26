package org.loops;
import java.util.Scanner;

public class Loops {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Loops: While, do while
		int contador = 1; //Se declara manualmente fuera del ciclo el contador
		while (contador <= 5) {
			System.out.println("Iteración: " + contador);
			contador ++;
		}
		System.out.println("--------------------------------------");
		/*do while*/
		int contadorDoWhile = 1;
		do {
			System.out.println("IteraciónDoWhile: "+ contadorDoWhile);
			contadorDoWhile ++;
		} while (contadorDoWhile <= 5);
		/*for
		 *  Las condciones de los for  se basan  en 3 partes :
		 * 1. Inicialización -> se inicia el contador
		 * 2. condicion -> se utiliza la comparación de dos variables el inicializador
		 * y la cantidad o la condicion que delimite n de interacciones, de preferencia 
		 * se iguala =
		 * 3. El incremento o actualización del contador*/
		System.out.println("--------------------------------------");
		for (int i = 1; i<=5 ; i++) {
			System.out.println("Contador for: " + i);
		}
		
		/*ForEach Java
		 * Utiliza la palabra reservada form, similar a coo lo usa un for puro
		 * en ligar de recibir condicional de tres partes:
		 * (inicializador;ocndicion;elemento)
		 * Va a utilizr una estructura de parametros
		 * (TipodeElemento elemento(identificadorElemento)):collection(array,ArrayList,set,map)
		 * Tiene que elegir entre los parametros
		 * */
		String[] names = {"Xamitl", "Maggy", "Alex"};
		String misCompaneros = "";
		for(String name : names) {
			misCompaneros += (name + " ");
		}
		System.out.println("Los Chicatana: "+ misCompaneros);

		
	}
	
	public class nombresLetras {
		
	}

}
