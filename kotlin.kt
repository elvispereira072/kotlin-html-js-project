// 1. Declaração de Variáveis
val nome: String = "Elvis"
var idade: Int = 28

// 2. Funções
fun saudacao(nome: String): String {
    return "Olá, $nome!"
}

// 3. Classes e Objetos
class Pessoa(val nome: String, var idade: Int) {
    fun aniversario() {
        idade++
    }
}

val pessoa = Pessoa("Elvis", 28)
pessoa.aniversario()

// 4. Coleções
val lista: List<Int> = listOf(1, 2, 3)
val set: Set<String> = setOf("A", "B", "C")
val map: Map<String, Int> = mapOf("um" to 1, "dois" to 2)

// 5. Controle de Fluxo
val resultado = if (idade > 18) "Adulto" else "Menor"
when (idade) {
    28 -> println("Você tem 28 anos")
    else -> println("Idade desconhecida")
}

// 6. Manipulação de Strings
val texto = "Kotlin é incrível!"
val partes = texto.split(" ")

// 7. Tratamento de Exceções
try {
    val numero = "123a".toInt()
} catch (e: NumberFormatException) {
    println("Erro de formato numérico")
}

// 8. Operações com Nulos
val nome: String? = null
val comprimento = nome?.length ?: 0

// 9. Extensões de Função
fun String.reverter(): String {
    return this.reversed()
}

val palavra = "Kotlin"
val palavraRevertida = palavra.reverter()

// 10. Corrotinas
import kotlinx.coroutines.*

fun main() = runBlocking {
    launch {
        delay(1000L)
        println("Corrotina!")
    }
    println("Olá,")
}


