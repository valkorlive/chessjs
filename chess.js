let figureStatus = false;
let dataType = '';
let field = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';

function getCell(color, type, figure, x, y) {
    return `<td class="${color} cell cell-${x}-${y} " data-type="${type}" >` + figure + `</td>`;
}
function getCellColor(color) {
    if (color == 'white') {
        color = 'black';
    } else {
        color = 'white';
    }
    return color;
}

function getImage(piece) {
    if(piece == 'r') {
        return 'black_rook.png';
    }
    if(piece == 'n') {
        return 'black_knigth.png';
    }
    if(piece == 'b') {
        return 'black_bishop.png';
    }
    if(piece == 'q') {
        return 'black_queen.png';
    }
    if(piece == 'k') {
        return 'black_king.png';
    }
    if(piece == 'R') {
        return 'white_rook.png';
    }
    if(piece == 'N') {
        return 'white_knigth.png';
    }
    if(piece == 'B') {
        return 'white_bishop.png';
    }
    if(piece == 'Q') {
        return 'white_queen.png';
    }
    if(piece == 'K') {
        return 'white_king.png';
    }
    if(piece == 'p') {
        return 'black_pawn.png';
    }
    if(piece == 'P') {
        return 'white_pawn.png';
    }
    
    return '';
}
function printField(str) {
    let html = '<table cellpadding="0" cellspacing="0">';
    let figure_picture = '';
    let cellColor = 'white';
    const arr = str.split('/');
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('');
    }
    console.log(arr);
    for (let y = 0; y < 8; y++) {
        html += '<tr>';
        cellColor = getCellColor(cellColor);
        for (let x = 0; x < arr[y].length; x++) {
            dataType = 'cell';
            if (getImage(arr[y][x]) !== '') {
                figure_picture = `
                    <a href="javascript:return false;" class="figure" data-type="${arr[y][x]}">
                        <img src="img/` + getImage(arr[y][x]) +  `" />
                    </a>
                `;
                dataType = 'figure';
                cellColor = getCellColor(cellColor);
                html += getCell(cellColor, dataType, figure_picture, x, y);
            } else {
                for(let i = 0; i < arr[y][x]; i++) {
                    cellColor = getCellColor(cellColor);
                    html += getCell(cellColor, dataType, '', i, y);
                }
            }
        }
        html += '</tr>';
    }
    html += '</table>';
    document.querySelector('#table').innerHTML = html;
}
function createNewStr(str) {
    const field_arr = str.split('/');
    const arr = [];
    let temp = [];
    for(let i = 0; i < field_arr.length; i++) {
        field_arr[i] = field_arr[i].split('');
    }
    for(let i = 0; i < field_arr.length; i++) {
        temp = [];
        for(let j = 0; j < field_arr[i].length; j++) {
            if(field_arr[i][j] == '1' || field_arr[i][j] == '2' || field_arr[i][j] == '3' || field_arr[i][j] == '4' || field_arr[i][j] == '5' || field_arr[i][j] == '6' || field_arr[i][j] == '7' || field_arr[i][j] == '8') {
                for (let u = 0; u < field_arr[i][j] * 1; u++) {
                    temp.push('');
                }
            } else {
                temp.push(field_arr[i][j]);
            }
        }
        arr.push(temp);
    }
    return arr;
}
function doMove(arr, p1x, p1y, p2x, p2y) {
    arr[p2y][p2x] = arr[p1y][p1x];
    arr[p1y][p1x] = '';
    let txt = '';
    let spase = 1;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] == '') {
                while(arr[i][j + 1] == '') {
                    spase++;
                    j++;
                }
                txt += spase;
                spase = 1; 
            } else {
                txt += arr[i][j];
            }
        }
        txt += '/';
    }
    console.log(txt);
    return txt;
}

printField(field);
//ход

let fx = 0,
    fy = 0,
    sx = 0,
    sy = 0,
    off = 0,
    figureActive;
const container = document.querySelector('#table table');
document.querySelectorAll('.figure').forEach((figure) => {
    figure.addEventListener('mousedown', function(event) {
        console.log(1);
        if (off == 0) {
            sx = event.pageX - (container.getBoundingClientRect().left + document.body.scrollLeft);
            sy = event.pageY - (container.getBoundingClientRect().top + document.body.scrollTop);
            sx /= 132,67;
            sy /= 132,67;
            sx -= (sx % 1);
            sy -= (sy % 1);
            off = 1;
        }
        figureActive = figure;
        figure.style.position = 'fixed';
        return false;
    });
    figure.addEventListener('mouseup', function(event) {
        //console.log(event.pageX, event.pageY);
        let x = event.pageX - (container.getBoundingClientRect().left + document.body.scrollLeft);
        let y = event.pageY - (container.getBoundingClientRect().top + document.body.scrollTop);
        let field_arr = createNewStr(field);
        x /= 132,67;
        y /= 132,67;
        x -= (x % 1);
        y -= (y % 1);
        console.log(sx, sy, x, y);
        figure.style.position = 'static';
        document.querySelector('.cell-' + x + '-' + y + '').innerHTML = document.querySelector('.cell-' + sx + '-' + sy + '').innerHTML;
        document.querySelector('.cell-' + sx + '-' + sy + '').innerHTML = '';
        /*field = doMove(field_arr, sx, sy, x, y);
        printField(field);*/
        off = 0;
    });
    
});
document.querySelector('#table').addEventListener('mousemove', function(event) {
    fx = event.pageX;
    fy = event.pageY;
    figureActive.style.left = (fx - 65) + 'px';
    figureActive.style.top = (fy - 65) + 'px';
});
