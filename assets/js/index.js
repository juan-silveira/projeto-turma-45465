class Curso {
    constructor(nome, preco) {
    this.nome = nome;
    this.valor = parseFloat(preco);
    this.adicionado = false;
    }
    addCarrinho() {
        this.adicionado = true;
    }
}

let cursos = [];

cursos.push(new Curso("Desenvolvimento Web", 199.50));
cursos.push(new Curso("Javascript", 249.50));
cursos.push(new Curso("React", 149.50));
cursos.push(new Curso("Backend", 499.50));
cursos.push(new Curso("Figma", 149.50));

setTimeout(() => {
    do {
        var curso = parseInt(prompt("Digite um número de 1-5 da lista para adicionar o curso no carrinho ou 0 para sair:"))
        if(curso != 0) {
            if(cursos[curso - 1].adicionado == true){
                console.log("Curso " + cursos[curso - 1].nome + " já foi adicionado ao carrinho!")
            } else{
                cursos[curso - 1].addCarrinho();
                console.log("Curso " + cursos[curso - 1].nome + " foi adicionado ao carrinho!")
            }
        }
    
    } while (curso != 0);
    
    const valorCarrinho = (carrinho) => {
        var valor = 0;
        carrinho.forEach(element => {
            if (element.adicionado == true) {
                valor = element.valor + valor;
            };
        });
        console.log("O valor do carrinho é de : " + valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
    }
    
    const quantidadeCursos = (carrinho) => {
        var qde = 0;
        carrinho.forEach(element => {
            if (element.adicionado == true) {
                qde++
            };
        });
        console.log("A quantidade de cursos no carrinho é de " + qde + " cursos");
    }
    
    valorCarrinho(cursos);
    quantidadeCursos(cursos);
}, "1000");
