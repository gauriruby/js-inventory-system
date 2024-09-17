let inventory = [
    { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
    { id: 2, name: 'Banana', quantity: 20, price: 0.2 }
];

function addItem(inventory, item) {
    inventory.push(item);
    console.log("Item added to inventory:", item);
    printInventory(inventory);
}

function updateItem(inventory, id, newDetails) {
    let item = inventory.find(i => i.id === id);
    if (item) {
        Object.assign(item, newDetails); // Updates the item's details
        console.log(`Item with id ${id} updated`);
    } else {
        console.log(`Item with id ${id} not found`);
    }
    printInventory(inventory);
}

function deleteItem(inventory, id) {
    let index = inventory.findIndex(i => i.id === id);
    if (index !== -1) {
        let removedItem = inventory.splice(index, 1);
        console.log(`Item with id ${id} deleted`, removedItem);
    } else {
        console.log(`Item with id ${id} not found`);
    }
    printInventory(inventory);
}

function getItem(inventory, id) {
    let item = inventory.find(i => i.id === id);
    if (item) {
        console.log(`Item with id ${id} found:`, item);
        return item;
    } else {
        console.log(`Item with id ${id} not found`);
        return null;
    }
}

function printInventory(inventory) {
    console.log("Current Inventory:");
    console.log(JSON.stringify(inventory, null, 2));
}

console.log("Initial Inventory:");
printInventory(inventory);

addItem(inventory, { id: 3, name: 'Orange', quantity: 15, price: 0.7 });

updateItem(inventory, 2, { quantity: 30 });

deleteItem(inventory, 2);

getItem(inventory, 1);
