const { error } = require('../helpers/utils');

// Direction indexes
const Direction = {
    NORTH: 1,
    EAST: 2,
    SOUTH: 3,
    WEST: 4
}

module.exports = class Robot {
    constructor (boundaries) {
        this.x = 0;
        this.y = 0;
        this.boundaries = boundaries;
        this.direction = Direction.NORTH;
        this.placed = false;
    };

    // parameter x is a number
    // parameter y is a number
    // parameter direction is a string
    // Places the robot on the grid with an x,y and direction
    place(x, y, direction) {
        if ((x <= this.boundaries.x && x >= 0) && (this.y <= this.boundaries.y && y >= 0) && this.isValidDirection(direction)) {
			this.x = x;
			this.y = y;
			this.direction = Direction[direction];
			this.placed = true;
		} else {
            return error(`Robot could not be placed. Please check that the direction is correct and the position is valid`);
        }
    };

    // Moves the robot forward based on it's current facing direction
    move() {
        switch (this.direction) {
            case Direction.NORTH:
                this.y + 1 < this.boundaries.y ? this.y++ : null;
                break;
            case Direction.EAST:
                this.x + 1 < this.boundaries.x ? this.x++ : null;
                break;
            case Direction.SOUTH:
                this.y - 1 >= 0 ? this.y-- : null;
                break;
            case Direction.WEST:
                this.x - 1  >= 0 ? this.x-- : null;
                break;
        }
    };


    // Turns the Robot  to the left from it's current direction
    left() {
        return this.direction - 1 === 0 ? this.direction = Direction.WEST : this.direction--;
    };


    // Turns the Robot  to the right from it's current direction
    right() {
        return this.direction + 1 === Object.keys(Direction).length ? this.direction = Direction.NORTH : this.direction++;
    };


    // this function returns Direction Name 'NORTH', 'SOUTH', 'EAST', 'WEST'
    convertDirectionToString() {
        for (const dir in Direction) {
            if (this.direction === Direction[dir]) {
                return dir;
            }
        }
    };


    //check if direction is valid
    isValidDirection(direction) {
		return !Direction[direction]? false: true;
    };

    
    // returns final report details
    report() {
        return `${this.x},${this.y},${this.convertDirectionToString()}`
    }

}