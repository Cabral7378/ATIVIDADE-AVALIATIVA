// Garantir que o DOM (HTML) esteja completamente carregado.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formAluno');
    const nomeInput = document.getElementById('nome');
    const notaInput = document.getElementById('nota');
    const mensagem = document.getElementById('mensagem');
    const listaAlunos = document.getElementById('listaAlunos');

    const alunos = [];

    nomeInput.addEventListener('input', () => {
        mensagem.textContent = `Nome digitado: ${nomeInput.value}`
    });

    form.addEventListener('submit', (event) => {
        // bloquear o comportamento padrão do submit
        event.preventDefault();
        // alert('enviado');
        const nome = nomeInput.value.trim().toUpperCase();
        const nota = Number(notaInput.value);

        // verifica se digitou um nome com no mínimo duas palavras.
        const testNome = nome.split(' '); // cria um array com cada as palavras
        // alert(testNome);
        if (testNome.length < 2) {
            mensagem.textContent = 'O nome deve ser completo!';
            mensagem.className = 'mt-4 text-sm text-red-600';
            // o return vazio interrompe o fluxo de execução.
            return;
        };
        
        alunos.push({
        nome: nome,
        nota: nota
        })

        form.reset();
        mensagem.textContent = '';
        console.log(alunos);

        // Função para atualizar a lista usando o array alunos.

        mostraAlunos();

    });

    function mostraAlunos() {
        
        // lista a lista
        listaAlunos.innerHTML = '';

        alunos.forEach((item) => {
            const listItem = document.createElement('li');
            const nota = String(item.nota).replace('.',',');
            listItem.textContent = `${item.nome} - Nota: ${item.nota}`;
            listaAlunos.appendChild(listItem)
        })
    }
});