document.addEventListener("DOMContentLoaded", ()=>{
    let outer = document.getElementById("outer");
    let chance = false;
    let arr = Array(9).fill(undefined);
    outer.addEventListener("click", (e) => {
        let cell = e.target;
        let cellNumber = cell.getAttribute("data-cell");
        if (cell.getAttribute("data-clicked")){
            return;
        }
        cell.setAttribute("data-clicked", "true");
        if(chance == true){
            cell.textContent = "X";
            arr[cellNumber] = 'X';
            winningCombo("X");
        }
        else{
            cell.textContent = "0";
            arr[cellNumber] = '0';
            winningCombo("0");
        }

        chance = !chance;
    })

        function winningCombo(char){
            let result = document.getElementById("result");
            if(arr[0] == char && arr[1] == char && arr[2]== char){
                // the 0th row is having char
                result.textContent = `${char} wins`;
            }
            if(arr[3] == char && arr[4] == char && arr[5]== char){
                // the 2nd row is having char
                result.textContent = `${char} wins`;
            }
            if(arr[6] == char && arr[7] == char && arr[8]== char){
                // the 3rd row is having char
                result.textContent = `${char} wins`;
            }
            if(arr[0] == char && arr[3] == char && arr[6]== char){
                // the 1st col is having char
                result.textContent = `${char} wins`;
            }
            if(arr[1] == char && arr[4] == char && arr[7]== char){
                // the 2nd col is having char
                result.textContent = `${char} wins`;
            }
            if(arr[2] == char && arr[5] == char && arr[8]== char){
                // the 3rd col is having char
                result.textContent = `${char} wins`;
            }
            if(arr[0] == char && arr[4] == char && arr[8]== char){
                // the 1st diag is having char
                result.textContent = `${char} wins`;
            }
            if(arr[2] == char && arr[4] == char && arr[6]== char){
                // the 2nd diag is having char
                result.textContent = `${char} wins`;
            }
        }
    
})