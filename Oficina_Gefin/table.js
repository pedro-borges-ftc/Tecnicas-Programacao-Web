//Povoando a tabela registrosFinanceiros com dados fictícios
/*const registrosFinanceiros = [
    { codigo: '001', descricao: 'Compra de materiais', data: '2024-05-01', valor: '150.00', tipo: 'debito' },
    { codigo: '002', descricao: 'Venda de produto', data: '2024-05-03', valor: '300.00', tipo: 'credito' },
    { codigo: '003', descricao: 'Serviço de manutenção', data: '2024-05-05', valor: '100.00', tipo: 'debito' },
    { codigo: '004', descricao: 'Venda de serviço', data: '2024-05-10', valor: '200.00', tipo: 'credito' }
];

localStorage.setItem('registrosFinanceiros', JSON.stringify(registrosFinanceiros));*/

// Função para obter registros financeiros do Local Storage
function getRegistrosFinanceiros() {
    const records = localStorage.getItem('registrosFinanceiros');
    return records ? JSON.parse(records) : [];
}

// Função para salvar registros financeiros no Local Storage
function saveRegistrosFinanceiros(records) {
    localStorage.setItem('registrosFinanceiros', JSON.stringify(records));
}

// Função para exibir os registros na tabela
function exibirRegistros(records) {
    const tbody = document.getElementById('registros-financeiros');
    tbody.innerHTML = ''; // Limpar a tabela antes de adicionar os registros
    records.forEach((record, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.codigo}</td>
            <td>${record.descricao}</td>
            <td>${record.data}</td>
            <td>${record.valor}</td>
            <td>${record.tipo.charAt(0).toUpperCase() + record.tipo.slice(1)}</td>
            <td>
                <button class="btn-edit" onclick="editarRegistro(${index})">Editar</button>
                <button class="btn-delete" onclick="deletarRegistro(${index})">Excluir</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Função para inicializar a tabela com dados do Local Storage
function init() {
    const records = getRegistrosFinanceiros();
    exibirRegistros(records);
}

// Função para redirecionar para a página de edição com o índice do registro
function editarRegistro(index) {
    window.location.href = `form.html?index=${index}`;
}

// Função para excluir um registro financeiro
function deletarRegistro(index) {
    const records = getRegistrosFinanceiros();
    records.splice(index, 1);
    saveRegistrosFinanceiros(records);
    exibirRegistros(records);
}

// Executar a função de inicialização ao carregar a página
window.onload = init;