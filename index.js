const fs = require("fs")
const input = fs.readFileSync('./input/a_solar.txt', 'utf8').split("\n")
const [ width, height ] = input.shift().split(" ")

function getGrid() {

    const grid = []
    
    for (let i = 0; i < height; i++) {
        let line = []
        for (let j = 0; j < width; j++) {
            line.push(input[0][j])
        }
        grid.push(line)
        input.shift()
    }

    return grid

}


function getDevs() {
    const numberOfDevs = input.shift()

    const devs = []

    for (let index = 0; index < numberOfDevs; index++) {
        const devLine = input.shift().split(" ")

        const dev = {
            "company" : devLine.shift(),
            "bonusPotential" : devLine.shift(),
            "numberOfSkills" : devLine.shift(),
            "skills" : [...devLine] 
        }

        devs.push(dev)
    }

    return devs

}

function getManagers () {
    
    const numberOfManagers = input.shift()

    const managers = []

    for (let index = 0; index < numberOfManagers; index++) {
        const managerLine = input.shift().split(" ")

        const manager = {
            "company" : managerLine.shift(),
            "bonusPotential" : managerLine.shift()
        }
        managers.push(manager)
    }
    
    return managers

}

const grid = getGrid()
const devs = getDevs()
const managers = getManagers()

console.log(devs)
console.log(managers)
console.log(grid)