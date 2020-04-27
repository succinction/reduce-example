const fs = require('fs')

const output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\r\n')
    .map(line => line.split(';'))
    .reduce((customers, line) => {
        console.log()
        console.log(customers)
        console.log()
        console.log(JSON.stringify(customers, null, 2))
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3],
        })
        return customers
    }, {})

console.log('output', output)


