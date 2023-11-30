const Ships = {
    constructor(name, length) {
        this.name = name
        this.length = length
    }
}

const battleship = new Ships("Battleship", 4)
const carrier = new Ships("Carrier", 5)
const cruiser = new Ships("Cruiser", 3)
const submarine = new Ships("Submarine", 3)
const destroyer = new Ships("Destroyer", 2)