var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function getDirection(direction) {
    switch (direction) {
        case Direction.Up:
            console.log(direction);
            return 0;
        case Direction.Down:
            console.log(direction);
            return 1;
        case Direction.Left:
            console.log(direction);
            return 2;
        case Direction.Right:
            console.log(direction);
            return 3;
        default:
            return 0;
    }
}
let map1 = new Map();
map1.set(0, 1);
map1.set(2, 1);
map1.set(3, 1);
map1.set(9, 1);
map1.set(20, 231);
var re = map1.get(20);
console.log(map1, re);
// getDirection(Direction.Up)
