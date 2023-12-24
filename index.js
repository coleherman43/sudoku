var numSelected = null;
var tileSelected = false;
var currTile = null;
var errors = 0;
//TO FIX LATER: 
//Generate boards automatically instead of using this one
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function() {
    setGame();
}

function setGame(){
    //Bottom digits
    for(let i = 1; i <= 9; i++){
        let num = document.createElement("div");
        num.id = i;
        num.innerText = i;
        num.addEventListener('click', selectNumber);
        num.classList.add("number");
        document.getElementById("digits").appendChild(num);
    }

    //Board
    for(let row = 0; row < 9; row++){
        for(let col = 0; col < 9; col++){
            let tile = document.createElement("div");
            tile.id = `${row}-${col}`;

            //empty tiles
            if(board[row][col] != "-"){
                tile.innerText = board[row][col];
                tile.classList.add("tile-start");
            }
            if(row ==2 || row == 5){
                tile.classList.add("horizontal-line");
            }
            if(col == 2 || col == 5){
                tile.classList.add("vertical-line");
            }
            tile.addEventListener('click', selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if(numSelected){
        numSelected.classList.remove("number-selected");
        if(numSelected == this){
            numSelected = null;
            return;
        }
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile(){
    if(numSelected){
        if(this.innerText != ""){
            return;
        }
        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        
        if (solution[r][c] == numSelected.id){
            this.innerText = numSelected.id;
        }else{
            errors++;
            document.getElementById("errors").innerText = errors;

        }
    } 
}