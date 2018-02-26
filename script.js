let currentColor = "red";
let currentPlayer = 1;
let board = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];
// let board = [
//     [0, 0, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0]
// ];


function handleClick(event) {
    const currentCol = event.currentTarget;
    createBox(currentCol);
    const winner = checkWinner();
    if(winner){
        alert("Player " + winner + " Wins!");
    }
   
    if (currentColor == "red") {
        currentColor = "black";
        currentPlayer = 2;
    } else {
        currentColor = "red";
        currentPlayer = 1;
    }
}

for (let iCol = 0; iCol < 7; iCol++) {
    let col = document.createElement("div");
    col.classList.add("col");
    col.id = "col-" + iCol;
    col.onclick = handleClick;


    var destination = document.getElementById("container");
    destination.appendChild(col);
}

function createBox(col) {
    const colIndex = col.id.split("-")[1];
    const rowIndex = document.querySelectorAll('#' + col.id + ' .row').length;

    const row = document.createElement("div");
    row.classList.add("row");
    row.classList.add(currentColor);

    row.id = "row-" + rowIndex;

    board[colIndex][rowIndex] = currentPlayer;


    col.appendChild(row);
}


function checkWinner() {


    for (var x = 0; x < board.length; x++) {
        let column = board[x];

        for (var y = 0; y < column.length; y++) {
            var cell = column[y];

            if (cell !== 0) {
                var horizontal = [
                    (board[x + 1] || [])[y],
                    (board[x + 2] || [])[y],
                    (board[x + 3] || [])[y]
                ].every(function (c) {
                    return c === cell;
                });
                
                if (horizontal) {
                    return cell;

                }

                
            } else if (cell !== 0) {
                var vertical = [
                    (board[x] || [])[y + 1],
                    (board[x] || [])[y + 2],
                    (board[x] || [])[y + 3]
                ].every(function (c) {
                    return c === cell;
                });
                if (vertical) {
                    return cell;
                }
            } else if (cell !== 0) {
                var diagonalRight = [
                    (board[x + 1] || [])[y + 1],
                    (board[x + 2] || [])[y + 2],
                    (board[x + 3] || [])[y + 3]
                ].every(function(c) {
                    return c === cell;
                });
                if (diagonalRight) {
                    return cell;
                }
            } else if (cell !== 0) {
                var diagonalLeft = [
                    (board[x - 1] || [])[y - 1],
                    (board[x - 2] || [])[y - 2],
                    (board[x - 3] || [])[y - 3]
                ].every(function(c) {
                    return c === cell;
                });
                if (diagonalLeft) {
                    return cell;
                }
            }
        }
    }
}

// const horizontal = [
//     (grid[x + 1] || [])[y],
//     (grid[x + 2] || [])[y],
//     (grid[x + 3] || [])[y]
// ].every(function (c) {
//     return c === cell;
// });
// if (horizontal) {
//     return cell;
// }