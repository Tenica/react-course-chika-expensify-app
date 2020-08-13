console.log('running')

const item = ['coffee(hot)', '$2.00', '$2,50', '$2.75'];
const [itemName, ,price2,] = item;
console.log(`A ${itemName} costs ${price2}`)
console.log('A medium Coffee (hot) costs $2.50');