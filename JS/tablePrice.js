import { dataPrice } from './dataPrice.js';

const tableBody = document.querySelector('tbody');

export function renderPriceTable() {
    tableBody.innerHTML = '';

    dataPrice.forEach((category) => {
        const categoryRow = document.createElement('tr');
        categoryRow.className = 'table__price-worktype';
        categoryRow.innerHTML = `
                                    <td>
                                        <strong class="table__price-worktype-title">${category.workType}</strong>
                                    </td>
    `;
        tableBody.appendChild(categoryRow);

        category.operations.forEach((op) => {
            const opRow = document.createElement('tr');
            opRow.className = 'table__price-operentions table__operentions';

            let priceDisplay = '';

            if (op.price !== undefined) {
                priceDisplay = `от ${op.price} руб.`
            } else if (op.percent !== undefined) {
                priceDisplay = `${op.percent}%`;
            } else {
                priceDisplay = 'Цена договорная';
            }

            opRow.innerHTML = `
                                    <td class=" table__operentions-name"> ${op.name}</td>
                                    <td class="table__operentions-unit">${op.unit}</td>
                                    <td class="table__operentions-price">${priceDisplay}</td>
    `;

            tableBody.appendChild(opRow)
        })
    })
}