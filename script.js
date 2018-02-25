let currentColor = "red";
let currentPlayer = 1;
let board = [
    [0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0]
];


handleClick = function (event) {

    const currentCol = event.currentTarget;
    const colIndex = currentCol.id.split('-')[1];
    createBox(currentCol);
    
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
    const rowIndex = document.querySelectorAll('#' + col.id + ' .row').length

    const row = document.createElement("div");
    row.classList.add("row");
    row.classList.add(currentColor);

    row.id = "row-" + rowIndex;

    console.log('colIndex is ', colIndex, ' and rowIndex is ', rowIndex)
    console.log(board)
    board[colIndex][rowIndex] = currentPlayer;

    col.appendChild(row)
}


const edgeX = board[0].length - 2;
const edgeY = board.length - 2;

for (var x = 0; x < edgeX; x++) {
    let column = board[y];
  
    for (var y = 0; y < edgeY; y++) {
        var row = board[x];
        
        if (row !== 0)
            var horizontal = [
                (board[x] || [])[y + 1],
                (board[x] || [])[y + 2],
                (board[x] || [])[y + 3]
            ].every(function (c) {
                return c === row;
            });
        if (horizontal) {
            return true;
            console.log("4 in a row found at" + [y+1] + [y+2] + [y+3]);
    }
    }
}