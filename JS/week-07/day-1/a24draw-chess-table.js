
let size = 10

for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            console.log(
                '% '.repeat(size / 2)
            )
        } else if (i % 2 !== 0) {
            console.log(
                ' %'.repeat(size / 2)
            )
        }
    }