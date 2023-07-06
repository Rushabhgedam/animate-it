enum Direction {
    Up,
    Down,
    Left,
    Right
}

function getDirection(direction: Direction){
    switch (direction) {
        case Direction.Up:
            console.log(direction)
            return 0;
        case Direction.Down:
            console.log(direction)
            return 1;
        case Direction.Left:
            console.log(direction)
            return 2;
        case Direction.Right:
            console.log(direction)
            return 3;
        default:
            return 0;
    }
}
type Dictionary = {
    [key: string]:string
}
const word : Dictionary={"name":"name"} 
const map1 = new Map();
map1.set(0, 1);
map1.set(2, 1);
map1.set(3, 1);
map1.set(9, 1);
map1.set(20, 231);
const re = map1.get(20)
map1.get(20)
console.log(map1, re)

// getDirection(Direction.Up)