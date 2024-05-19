// Dados estáticos para a demonstração
const records = [
    { codigo: '001', descricao: 'Compra de materiais', data: '2024-05-01', valor: '150.00', tipo: 'debito' },
    { codigo: '002', descricao: 'Venda de produto', data: '2024-05-03', valor: '300.00', tipo: 'credito' },
    { codigo: '003', descricao: 'Serviço de manutenção', data: '2024-05-05', valor: '100.00', tipo: 'debito' },
    { codigo: '004', descricao: 'Venda de serviço', data: '2024-05-10', valor: '200.00', tipo: 'credito' }
];

// Função para exibir os registros na tabela
function displayRecords(records) {
    var tbody = document.getElementById('financial-records');
    records.forEach(record => {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.codigo}</td>
            <td>${record.descricao}</td>
            <td>${record.data}</td>
            <td>${record.valor}</td>
            <td>${record.tipo.charAt(0).toUpperCase() + record.tipo.slice(1)}</td>
        `;
        tbody.appendChild(row);
    });
}