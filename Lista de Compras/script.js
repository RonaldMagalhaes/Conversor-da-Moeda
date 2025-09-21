document.getElementById('form-lista').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('item-input');
    const valor = input.value.trim();
    if (valor) {
        adicionarItem(valor);
        input.value = '';
    }
});

function adicionarItem(texto) {
    const ul = document.getElementById('lista');
    const li = document.createElement('li');
    li.className = 'item-lista';

    // Checkbox customizado
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox-custom';

    // Texto do item
    const span = document.createElement('span');
    span.textContent = texto;
    span.className = 'item-texto';

    // Botão remover (ícone lixeira)
    const btnRemover = document.createElement('button');
    btnRemover.className = 'btn-icon';
    btnRemover.innerHTML = `
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path d="M9 3h6m2 3v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6m13 0H4" stroke="#C93847" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
    btnRemover.onclick = function() {
        ul.removeChild(li);
        mostrarAlerta('O item foi removido da lista');
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnRemover);
    ul.appendChild(li);
}

function mostrarAlerta(msg) {
    let alerta = document.getElementById('alerta');
    if (alerta) alerta.remove();
    alerta = document.createElement('div');
    alerta.id = 'alerta';
    alerta.className = 'alerta-removido';
    alerta.innerHTML = `
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style="margin-right:8px;">
            <circle cx="12" cy="12" r="10" fill="#fff2" />
            <path d="M12 8v4m0 4h.01" stroke="#FFF" stroke-width="2" stroke-linecap="round"/>
        </svg>
        ${msg}
        <button class="close-alert" onclick="this.parentElement.style.display='none'">&times;</button>
    `;
    document.querySelector('.container').appendChild(alerta);
    setTimeout(() => {
        if (alerta) alerta.style.display = 'none';
    }, 2000);
}

.item-lista {
    display: flex;
    align-items: center;
    background: #FFF;
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 12px;
    border: 1.5px solid #D1D5DB;
    box-shadow: 0 1px 2px rgba(0,0,0,0.01);
}

.btn-icon {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 8px;
    padding: 4px;
    display: flex;
    align-items: center;
}

.alerta-removido {
    margin-top: 24px;
    background: #C93847;
    color: #FFF;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    display: none;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}

@media (max-width: 500px) {
    .container {
        padding: 16px 8px;
    }
    .item-lista {
        padding: 10px 8px;
    }
}