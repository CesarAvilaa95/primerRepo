package org.loops;
import java.util.Scanner;
public class nombresLetras {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Ingresa un nombre: ");
		String name = scanner.nextLine();
		
		for (int i = 0; i < name.length(); i++) {
			System.out.println("Letra " + (i + 1) + ": " + name.charAt(i));
		}
		scanner.close();
	}

}
