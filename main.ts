
/** 
 - Si no pone nada en get o set son públicas, no privadas.
 - Creamos una variable privada con un _ para que no hagan set o get de
   la variable de la interfaz.
 - Tenemos:
    · get y set por cada variable implementada por Greet que retorna la
    variable que empieza por _, así evitamos el uso de la variable Greet
    · constructor vacío ya que no lo necesitamos
    · método sayHello() que nos devuelve el valor de las variables con _
*/

import { Greet } from "./greet";

class Test1 implements Greet {
    private _name: string = ""
    get name(): string { return this._name }
    set name(new_name: string){ this._name = new_name }

    private _surname: string = ""
    get surname(): string { return this._surname }
    set surname(new_surname: string){ this._surname = new_surname }

    private _message: string = ""
    get message(): string { return this._message }
    set message(new_message: string){ this._message = new_message }

    private _nick: string = ""
    get nick(): string { return this._nick }
    set nick(new_nick: string){ this._nick = new_nick }

    constructor(){

    }

    sayHello(): void{
        console.log(`
            ${this.message} ${this.name} ${this.surname} ${this.nick}
        `);
    }

}

/** 
 * Inicializamos una variable hello, que será una instancia de Test1
 * Establecemos las propiedades de hello
 * Usamos el método sayHello para mostrar estas propiedades
*/

var hello = new Test1()
hello.message = "Hola mundo, en especial a ti"
hello.name = "Adrián"
hello.surname = "Perogil Fernández"
hello.nick = "Chopito"

hello.sayHello()