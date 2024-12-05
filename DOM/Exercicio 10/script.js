const inputTarefa = document.getElementById('tarefa');
const botaoAdicionar = document.getElementById('adicionar');
const listaTarefas = document.getElementById('lista-tarefas');

botaoAdicionar.addEventListener('click', () => {
  const novaTarefa = inputTarefa.value.trim().toLowerCase();

  // Cria o elemento li e define o texto, mesmo que a tarefa esteja vazia
  const itemLista = document.createElement('li');
  itemLista.textContent = novaTarefa;

  // Adiciona o item à lista apenas se o texto não estiver vazio
  listaTarefas.appendChild(novaTarefa ? itemLista : null);
  inputTarefa.value = '';
});