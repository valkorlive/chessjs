const figures = [
    [{'name' : 'rook', 'color' : 'black', 'step': '0'}, {'name' : 'knigth', 'color' : 'black', 'step': '0'}, {'name' : 'bishop', 'color' : 'black', 'step': '0'}, {'name' : 'queen', 'color' : 'black', 'step': '0'}, {'name' : 'king', 'color' : 'black', 'step': '0'}, {'name' : 'bishop', 'color' : 'black', 'step': '0'}, {'name' : 'knigth', 'color' : 'black', 'step': '0'}, {'name' : 'rook', 'color' : 'black', 'step': '0'}],
    [{'name' : 'pawn', 'color' : 'black', 'step': '0'}, {'name' : 'pawn', 'color' : 'black', 'step': '0'}, {'name' : 'pawn', 'color' : 'black', 'step': '0'}, {'name' : 'pawn', 'color' : 'black', 'step': '0'}, {'name' : 'pawn', 'color' : 'black', 'step': '0'}, {'name' : 'pawn', 'color' : 'black', 'step': '0'}, {'name' : 'pawn', 'color' : 'black', 'step': '0'}, {'name' : 'pawn', 'color' : 'black', 'step': '0'}],
    [{'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}],
    [{'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}],
    [{'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}],
    [{'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}, {'name' : '', 'color' : '', 'step': '0'}],
    [{'name' : 'pawn', 'color' : 'white', 'step': '0'}, {'name' : 'pawn', 'color' : 'white', 'step': '0'}, {'name' : 'pawn', 'color' : 'white', 'step': '0'}, {'name' : 'pawn', 'color' : 'white', 'step': '0'}, {'name' : 'pawn', 'color' : 'white', 'step': '0'}, {'name' : 'pawn', 'color' : 'white', 'step': '0'}, {'name' : 'pawn', 'color' : 'white', 'step': '0'}, {'name' : 'pawn', 'color' : 'white', 'step': '0'}],
    [{'name' : 'rook', 'color' : 'white', 'step': '0'}, {'name' : 'knigth', 'color' : 'white', 'step': '0'}, {'name' : 'bishop', 'color' : 'white', 'step': '0'}, {'name' : 'queen', 'color' : 'white', 'step': '0'}, {'name' : 'king', 'color' : 'white', 'step': '0'}, {'name' : 'bishop', 'color' : 'white', 'step': '0'}, {'name' : 'knigth', 'color' : 'white', 'step': '0'}, {'name' : 'rook', 'color' : 'white', 'step': '0'}],
];
const colors = ['white', 'black', 'белых', 'черных'];
let col = 0;
let figure_picture = '';
let figureCoordinate = {'x': -1, 'y': -1};
let cellCoordinate = {'x': -1, 'y': -1};
let bkingCoordinate = {'x': 4, 'y': 0};
let bkingCoordinate2 = {'x': 4, 'y': 0};
let wkingCoordinate = {'x': 4, 'y': 7};
let wkingCoordinate2 = {'x': 4, 'y': 7};
let shah = 0;
let figureStatus = false;
let cellColor = '';
let dataType = '';
let start = 0, stoper = 0;
let startx = 0, stoperx = 0, starty = 0, stopery = 0;
let matshah = 0;
let polfotmatshah = 8;
let no = 0;
let d = {'name' : '', 'color' : ''};
let x = 0;
let y = 0;
let math = 0;
let shahfigure = {'x' : -1, 'y' : -1};
let saveshahfigure = {'x' : -1, 'y' : -1};
let closeshah = 0;

function makeMove(figureCoordinate, cellCoordinate){
    const cell = document.querySelector('.cell-' + cellCoordinate.y + '-' + cellCoordinate.x);
    const figure = document.querySelector('.cell-' + figureCoordinate.y + '-' + figureCoordinate.x);
    let img = document.querySelector('.cell-' + figureCoordinate.y + '-' + figureCoordinate.x + ' img').getAttribute('data-figure');

    cell.innerHTML = figure.innerHTML;
    cell.setAttribute('data-type', 'figure');

    figure.innerHTML = '';
    figure.setAttribute('data-type', 'cell');
    let save = figures[figureCoordinate.y][figureCoordinate.x];
    figures[cellCoordinate.y][cellCoordinate.x] = save;
    figures[figureCoordinate.y][figureCoordinate.x] = {'name' : '', 'color' : ''};
    document.querySelector('#result').innerHTML = 'Ход ' + colors[col+2];
    document.querySelector('#cube').style.background = colors[col];
}

function checkRook(x, y, color) {
    if(figures[y][x].name !== '' && figures[y][x].name !== 'king'){
        if(figures[y][x].name !== 'rook' && figures[y][x].name !== 'queen'){
            return true;
        } else {
            if(figures[y][x].color !== color){
                shahfigure.x = x;
                shahfigure.y = y;
                shah++;
                return true;
            }
        }
    }
}

function check(figureCoordinate, cellCoordinate, color){
    if(cellCoordinate.x * 1 + 1 < 8 && cellCoordinate.y * 1 + 1 < 8) {
        x = cellCoordinate.x * 1 + 1;
        y = cellCoordinate.y * 1 + 1;
        while(x < 8) {
            if (checkRook(cellCoordinate.y, x, color)) {
                break;
            }
            x++;
        }
        while(y < 8){
            if (checkRook(y, cellCoordinate.x, color)) {
                break;
            }
            y++;
        }
    }

    if(cellCoordinate.x * 1 - 1 >= 0 && cellCoordinate.y * 1 - 1 >= 0) {
        x = cellCoordinate.x * 1 - 1;
        y = cellCoordinate.y * 1 - 1;
        while(x >= 0){
            if (checkRook(cellCoordinate.y, x, color)) {
                break;
            }
            x--;
        }
        while(y >= 0){
            if (checkRook(y, cellCoordinate.x, color)) {
                break;
            }
            y--;
        }
    }
    if(cellCoordinate.x * 1 + 1 < 8 && cellCoordinate.y * 1 + 1 < 8) {
        x = cellCoordinate.x * 1 + 1;
        y = cellCoordinate.y * 1 + 1;
        while(x < 8 && y < 8){
            if(figures[y][x].name !== '' && figures[y][x].name !== 'king'){
                if(figures[y][x].name !== 'bishop' && figures[y][x].name !== 'queen'){
                    break;
                } else {
                    if(figures[y][x].color !== color){
                        shahfigure.x = x;
                        shahfigure.y = y;
                        shah++;
                        break;
                    }
                }
            }
            x++;
            y++;
        }
    }
    if(cellCoordinate.x * 1 - 1 >= 0 && cellCoordinate.y * 1 - 1 >= 0) {
        x = cellCoordinate.x * 1 - 1;
        y = cellCoordinate.y * 1 - 1;
        while(x >= 0 && y >= 0){
            if(figures[y][x].name !== '' && figures[y][x].name !== 'king'){
                if(figures[y][x].name !== 'bishop' && figures[y][x].name !== 'queen'){
                    break;
                } else {
                    if(figures[y][x].color !== color){
                        shahfigure.x = x;
                        shahfigure.y = y;
                        shah++;
                        break;
                    }
                }
            }
            x--;
            y--;
        }
    }
    if(cellCoordinate.x * 1 + 1 < 8 && cellCoordinate.y * 1 - 1 >= 0) {
        x = cellCoordinate.x * 1 + 1;
        y = cellCoordinate.y * 1 - 1;
        while(x < 8 && y >= 0){
            if(figures[y][x].name !== '' && figures[y][x].name !== 'king'){
                if(figures[y][x].name !== 'bishop' && figures[y][x].name !== 'queen'){
                    break;
                } else {
                    if(figures[y][x].color !== color){
                        shahfigure.x = x;
                        shahfigure.y = y;
                        shah++;
                        break;
                    }
                }
            }
            x++;
            y--;
        }
    }
    if(cellCoordinate.x * 1 - 1 >= 0 && cellCoordinate.y * 1 + 1 < 8) {
        x = cellCoordinate.x * 1 - 1;
        y = cellCoordinate.y * 1 + 1;
        while(x >= 0 && y < 8){
            if(figures[y][x].name !== '' && figures[y][x].name !== 'king'){
                if(figures[y][x].name !== 'bishop' && figures[y][x].name !== 'queen'){
                    break;
                } else {
                    if(figures[y][x].color !== color){
                        shahfigure.x = x;
                        shahfigure.y = y;
                        shah++;
                        break;
                    }
                }
            }
            x--;
            y++;
        }
    }
    

    if(figures[figureCoordinate.y][figureCoordinate.x].color == 'white'){
        if(cellCoordinate.y > 0 && cellCoordinate.x > 0){
            if(figures[cellCoordinate.y * 1 - 1][cellCoordinate.x * 1 - 1].name == 'pawn'){
                if(figures[cellCoordinate.y * 1 - 1][cellCoordinate.x * 1 - 1].color !== color){
                    x = cellCoordinate.x * 1 - 1;
                    y = cellCoordinate.y * 1 - 1;
                    shahfigure.x = x;
                    shahfigure.y = y;
                    shah++;
                    return false;
                }
            }
        }
        if(cellCoordinate.y > 0 && cellCoordinate.x < 7){
            if(figures[cellCoordinate.y * 1 - 1][cellCoordinate.x * 1 + 1].name == 'pawn'){
                if(figures[cellCoordinate.y * 1 - 1][cellCoordinate.x * 1 + 1].color !== color){
                    x = cellCoordinate.x * 1 + 1;
                    y = cellCoordinate.y * 1 - 1;
                    shahfigure.x = x;
                    shahfigure.y = y;
                    shah++;
                    return false;
                }
            }
        }
    } else if(figures[figureCoordinate.y][figureCoordinate.x].color == 'black'){
        if(cellCoordinate.y < 7 && cellCoordinate.x > 0){
            if(figures[cellCoordinate.y * 1 + 1][cellCoordinate.x * 1 - 1].name == 'pawn'){
                if(figures[cellCoordinate.y * 1 + 1][cellCoordinate.x * 1 - 1].color !== color){
                    x = cellCoordinate.x * 1 - 1;
                    y = cellCoordinate.y * 1 + 1;
                    shahfigure.x = x;
                    shahfigure.y = y;
                    shah++;
                    return false;
                }
            }
        }
        if(cellCoordinate.y < 7 && cellCoordinate.x < 7){
            if(figures[cellCoordinate.y * 1 + 1][cellCoordinate.x * 1 + 1].name == 'pawn'){
                if(figures[cellCoordinate.y * 1 + 1][cellCoordinate.x * 1 + 1].color !== color){
                    x = cellCoordinate.x * 1 + 1;
                    y = cellCoordinate.y * 1 + 1;
                    shahfigure.x = x;
                    shahfigure.y = y;
                    shah++;
                    return false;
                }
            }
        }
    }

    if (cellCoordinate.y > 0 && cellCoordinate.x > 1){
        if (figures[cellCoordinate.y * 1 - 1][cellCoordinate.x * 1 - 2].name == 'knigth') {
            if(figures[cellCoordinate.y * 1 - 1][cellCoordinate.x * 1 - 2].color !== color) {
                x = cellCoordinate.x * 1 - 2;
                y = cellCoordinate.y * 1 - 1;
                shahfigure.x = x;
                shahfigure.y = y;
                shah++;
                return false;
            }
        }
    }
    if (cellCoordinate.y < 7 && cellCoordinate.x > 1) {
        if (figures[cellCoordinate.y * 1 + 1][cellCoordinate.x * 1 - 2].name == 'knigth'){
            if (figures[cellCoordinate.y * 1 + 1][cellCoordinate.x * 1 - 2].color !== color) {
                x = cellCoordinate.x * 1 - 2;
                y = cellCoordinate.y * 1 + 1;
                shahfigure.x = x;
                shahfigure.y = y;
                shah++;
                return false;
            }
        }
    }
    if (cellCoordinate.y > 0 && cellCoordinate.x < 6) {
        if (figures[cellCoordinate.y * 1 - 1][cellCoordinate.x * 1 + 2].name == 'knigth') {
            if(figures[cellCoordinate.y * 1 - 1][cellCoordinate.x * 1 + 2].color !== color) {
                x = cellCoordinate.x * 1 + 2;
                y = cellCoordinate.y * 1 - 1;
                shahfigure.x = x;
                shahfigure.y = y;
                shah++;
                return false;
            }
        }
    }
    if (cellCoordinate.y < 7 && cellCoordinate.x < 6) {
        if(figures[cellCoordinate.y * 1 + 1][cellCoordinate.x * 1 + 2].name == 'knigth'){
            if (figures[cellCoordinate.y * 1 + 1][cellCoordinate.x * 1 + 2].color !== color) {
                x = cellCoordinate.x * 1 + 2;
                y = cellCoordinate.y * 1 + 1;
                shahfigure.x = x;
                shahfigure.y = y;
                shah++;
                return false;
            }
        }
    }
    if (cellCoordinate.y > 1 && cellCoordinate.x < 7) {
        if (figures[cellCoordinate.y * 1 - 2][cellCoordinate.x * 1 + 1].name == 'knigth') {
            if(figures[cellCoordinate.y * 1 - 2][cellCoordinate.x * 1 + 1].color !== color) {
                x = cellCoordinate.x * 1 + 1;
                y = cellCoordinate.y * 1 - 2;
                shahfigure.x = x;
                shahfigure.y = y;
                shah++;
                return false;
            }
        }
    }
    if (cellCoordinate.y > 1 && cellCoordinate.x > 0) {
        if (figures[cellCoordinate.y * 1 - 2][cellCoordinate.x * 1 - 1].name == 'knigth') {
            if(figures[cellCoordinate.y * 1 - 2][cellCoordinate.x * 1 - 1].color !== color){
                x = cellCoordinate.x * 1 - 1;
                y = cellCoordinate.y * 1 - 2;
                shahfigure.x = x;
                shahfigure.y = y;
                shah++;
                return false;
            }
        }
    }
    if (cellCoordinate.y < 6 && cellCoordinate.x > 0) {
        if (figures[cellCoordinate.y * 1 + 2][cellCoordinate.x * 1 - 1].name == 'knigth') {
            if(figures[cellCoordinate.y * 1 + 2][cellCoordinate.x * 1 - 1].color !== color) {
                x = cellCoordinate.x * 1 - 1;
                y = cellCoordinate.y * 1 + 2;
                shahfigure.x = x;
                shahfigure.y = y;
                shah++;
                return false;
            }
        }
    }
    if (cellCoordinate.y < 6 && cellCoordinate.x < 7) {
        if (figures[cellCoordinate.y * 1 + 2][cellCoordinate.x * 1 + 1].name == 'knigth') {
            if(figures[cellCoordinate.y * 1 + 2][cellCoordinate.x * 1 + 1].color !== color) {
                x = cellCoordinate.x * 1 + 1;
                y = cellCoordinate.y * 1 + 2;
                shahfigure.x = x;
                shahfigure.y = y;
                shah++;
                return false;
            }
        }
    }

    if(cellCoordinate.y * 1 + 1 < 8){
        if(cellCoordinate.x * 1 - 1 >= 0){
            if(figures[cellCoordinate.y * 1 + 1][cellCoordinate.x * 1 - 1].name == 'king'){
                if(figures[cellCoordinate.y * 1 + 1][cellCoordinate.x * 1 - 1].color !== color){
                    shah++;
                    return false;
                }
            }
        }
        if(1 < 2){
            if(figures[cellCoordinate.y * 1 + 1][cellCoordinate.x].name == 'king'){
                if(figures[cellCoordinate.y * 1 + 1][cellCoordinate.x].color !== color){
                    shah++;
                    return false;
                }
            }
        }
        if(cellCoordinate.x * 1 + 1 < 8){
            if(figures[cellCoordinate.y * 1 + 1][cellCoordinate.x * 1 + 1].name == 'king'){
                if(figures[cellCoordinate.y * 1 + 1][cellCoordinate.x * 1 + 1].color !== color){
                    shah++;
                    return false;
                }
            }
        }
    } 
    if(cellCoordinate.y * 1 - 1 >= 0){
        if(cellCoordinate.x * 1 - 1 >= 0){
            if(figures[cellCoordinate.y * 1 - 1][cellCoordinate.x * 1 - 1].name == 'king'){
                if(figures[cellCoordinate.y * 1 - 1][cellCoordinate.x * 1 - 1].color !== color){
                    shah++;
                    return false;
                }
            }
        } 
        if(1 < 2){
            if(figures[cellCoordinate.y * 1 - 1][cellCoordinate.x].name == 'king'){
                if(figures[cellCoordinate.y * 1 - 1][cellCoordinate.x].color !== color){
                    shah++;
                    return false;
                }
            }
        } 
        if(cellCoordinate.x * 1 + 1 < 8){
            if(figures[cellCoordinate.y * 1 - 1][cellCoordinate.x * 1 + 1].name == 'king'){
                if(figures[cellCoordinate.y * 1 - 1][cellCoordinate.x * 1 + 1].color !== color){
                    shah++;
                    return false;
                }
            }
        }
    } 
    if(cellCoordinate.x * 1 + 1 < 8){
        if(figures[cellCoordinate.y][cellCoordinate.x * 1 + 1].name == 'king'){
            if(figures[cellCoordinate.y][cellCoordinate.x * 1 + 1].color !== color){
                shah++;
                return false;
            }
        }
    } 
    if(cellCoordinate.x * 1 - 1 >= 0){
        if(figures[cellCoordinate.y][cellCoordinate.x * 1 - 1].name == 'king'){
            if(figures[cellCoordinate.y][cellCoordinate.x * 1 - 1].color !== color){
                shah++;
                return false;
            }
        }
    }
}

function checkmath(kingCoordinate, kingCoordinate2) {
    shah = 0;
    check(kingCoordinate, kingCoordinate2, figures[kingCoordinate.y][kingCoordinate.x].color);
    if(shah > 0){
        if(shah > 1){
            shah = 0;
            if(kingCoordinate2.y * 1 + 1 < 8){
                if(kingCoordinate2.x * 1 - 1 >= 0){
                    if(figures[kingCoordinate2.y * 1 + 1][kingCoordinate2.x * 1 - 1].name !== '') {
                        no++;
                        polfotmatshah--;
                    }
                    check(kingCoordinate, {'y': kingCoordinate2.y * 1 + 1, 'x': kingCoordinate2.x * 1 - 1}, figures[kingCoordinate.y][kingCoordinate.x].color);
                    if(shah > 0 && no == 0) {
                        matshah++;
                        shah = 0;
                    }
                    no = 0;
                }
                    if(1 < 2){
                    if(figures[kingCoordinate2.y * 1 + 1][kingCoordinate2.x].name !== '') {
                        no++;
                        polfotmatshah--;
                    }
                    check(kingCoordinate, {'y': kingCoordinate2.y * 1 + 1, 'x': kingCoordinate2.x}, figures[kingCoordinate.y][kingCoordinate.x].color);
                    if(shah > 0 && no == 0) {
                        matshah++;
                        shah = 0;
                    }
                    no = 0;
                }
                if(kingCoordinate2.x * 1 + 1 < 8){
                    if(figures[kingCoordinate2.y * 1 + 1][kingCoordinate2.x * 1 + 1].name !== '') {
                        no++;
                        polfotmatshah--;
                    }
                    check(kingCoordinate, {'y': kingCoordinate2.y * 1 + 1, 'x': kingCoordinate2.x * 1 + 1}, figures[kingCoordinate.y][kingCoordinate.x].color);
                    if(shah > 0 && no == 0) {
                        matshah++;
                        shah = 0;
                    }
                    no = 0;
                }
            } else {
                polfotmatshah -= 3;
            }
            if(kingCoordinate2.y * 1 - 1 >= 0){
                if(kingCoordinate2.x * 1 - 1 >= 0){
                    if(figures[kingCoordinate2.y * 1 - 1][kingCoordinate2.x * 1 - 1].name !== '') {
                        no++;
                        polfotmatshah--;
                    }
                    check(kingCoordinate, {'y': kingCoordinate2.y * 1 - 1, 'x': kingCoordinate2.x * 1 - 1}, figures[kingCoordinate.y][kingCoordinate.x].color);
                    if(shah > 0 && no == 0) {
                        matshah++;
                        shah = 0;
                    }
                    no = 0;
                } 
                if(1 < 2){
                    if(figures[kingCoordinate2.y * 1 - 1][kingCoordinate2.x].name !== '') {
                        no++;
                        polfotmatshah--;
                    }
                    check(kingCoordinate, {'y': kingCoordinate2.y * 1 - 1, 'x': kingCoordinate2.x}, figures[kingCoordinate.y][kingCoordinate.x].color);
                    if(shah > 0 && no == 0) {
                        matshah++;
                        shah = 0;
                    }
                    no = 0;
                } 
                if(kingCoordinate2.x * 1 + 1 < 8){
                    if(figures[kingCoordinate2.y * 1 - 1][kingCoordinate2.x * 1 + 1].name !== '') {
                        no++;
                        polfotmatshah--;
                    }
                    check(kingCoordinate, {'y': kingCoordinate2.y * 1 - 1, 'x': kingCoordinate2.x * 1 + 1}, figures[kingCoordinate.y][kingCoordinate.x].color);
                    if(shah > 0 && no == 0) {
                        matshah++;
                        shah = 0;
                    }
                    no = 0;
                }
            } else {
                polfotmatshah -= 3;
            }
            if(kingCoordinate2.x * 1 + 1 < 8){
                if(figures[kingCoordinate2.y][kingCoordinate2.x * 1 + 1].name !== '') {
                    no++;
                    polfotmatshah--;
                }
                check(kingCoordinate, {'y': kingCoordinate2.y, 'x': kingCoordinate2.x * 1 + 1}, figures[kingCoordinate.y][kingCoordinate.x].color);
                if(shah > 0 && no == 0) {
                    matshah++;
                    shah = 0;
                }
                no = 0;
            } else {
                polfotmatshah--;
            }
            if(kingCoordinate2.x * 1 - 1 >= 0){
                if(figures[kingCoordinate2.y][kingCoordinate2.x * 1 - 1].name !== '') {
                    no++;
                    polfotmatshah--;
                }
                check(kingCoordinate, {'y': kingCoordinate2.y, 'x': kingCoordinate2.x - 1}, figures[kingCoordinate.y][kingCoordinate.x].color);
                if(shah > 0 && no == 0) {
                    matshah++;
                    shah = 0;
                }
                no = 0;
            } else {
                polfotmatshah--;
            }
            if(matshah >= polfotmatshah) {
                math = 1;
            }
        } else if (shah == 1){
            if(kingCoordinate2.y * 1 + 1 < 8){
                if(kingCoordinate2.x * 1 - 1 >= 0){
                    if(figures[kingCoordinate2.y * 1 + 1][kingCoordinate2.x * 1 - 1].name !== '') {
                        no++;
                        polfotmatshah--;
                    }
                    check(kingCoordinate, {'y': kingCoordinate2.y * 1 + 1, 'x': kingCoordinate2.x * 1 - 1}, figures[kingCoordinate.y][kingCoordinate.x].color);
                    if(shah > 0 && no == 0) {
                        matshah++;
                        shah = 0;
                    }
                    no = 0;
                }
                    if(1 < 2){
                    if(figures[kingCoordinate2.y * 1 + 1][kingCoordinate2.x].name !== '') {
                        no++;
                        polfotmatshah--;
                    }
                    check(kingCoordinate, {'y': kingCoordinate2.y * 1 + 1, 'x': kingCoordinate2.x}, figures[kingCoordinate.y][kingCoordinate.x].color);
                    if(shah > 0 && no == 0) {
                        matshah++;
                        shah = 0;
                    }
                    no = 0;
                }
                if(kingCoordinate2.x * 1 + 1 < 8){
                    if(figures[kingCoordinate2.y * 1 + 1][kingCoordinate2.x * 1 + 1].name !== '') {
                        no++;
                        polfotmatshah--;
                    }
                    check(kingCoordinate, {'y': kingCoordinate2.y * 1 + 1, 'x': kingCoordinate2.x * 1 + 1}, figures[kingCoordinate.y][kingCoordinate.x].color);
                    if(shah > 0 && no == 0) {
                        matshah++;
                        shah = 0;
                    }
                    no = 0;
                }
            } else {
                polfotmatshah -= 3;
            }
            if(kingCoordinate2.y * 1 - 1 >= 0){
                if(kingCoordinate2.x * 1 - 1 >= 0){
                    if(figures[kingCoordinate2.y * 1 - 1][kingCoordinate2.x * 1 - 1].name !== '') {
                        no++;
                        polfotmatshah--;
                    }
                    check(kingCoordinate, {'y': kingCoordinate2.y * 1 - 1, 'x': kingCoordinate2.x * 1 - 1}, figures[kingCoordinate.y][kingCoordinate.x].color);
                    if(shah > 0 && no == 0) {
                        matshah++;
                        shah = 0;
                    }
                    no = 0;
                } 
                if(1 < 2){
                    if(figures[kingCoordinate2.y * 1 - 1][kingCoordinate2.x].name !== '') {
                        no++;
                        polfotmatshah--;
                    }
                    check(kingCoordinate, {'y': kingCoordinate2.y * 1 - 1, 'x': kingCoordinate2.x}, figures[kingCoordinate.y][kingCoordinate.x].color);
                    if(shah > 0 && no == 0) {
                        matshah++;
                        shah = 0;
                    }
                    no = 0;
                } 
                if(kingCoordinate2.x * 1 + 1 < 8){
                    if(figures[kingCoordinate2.y * 1 - 1][kingCoordinate2.x * 1 + 1].name !== '') {
                        no++;
                        polfotmatshah--;
                    }
                    check(kingCoordinate, {'y': kingCoordinate2.y * 1 - 1, 'x': kingCoordinate2.x * 1 + 1}, figures[kingCoordinate.y][kingCoordinate.x].color);
                    if(shah > 0 && no == 0) {
                        matshah++;
                        shah = 0;
                    }
                    no = 0;
                }
            } else {
                polfotmatshah -= 3;
            }
            if(kingCoordinate2.x * 1 + 1 < 8){
                if(figures[kingCoordinate2.y][kingCoordinate2.x * 1 + 1].name !== '') {
                    no++;
                    polfotmatshah--;
                }
                check(kingCoordinate, {'y': kingCoordinate2.y, 'x': kingCoordinate2.x * 1 + 1}, figures[kingCoordinate.y][kingCoordinate.x].color);
                if(shah > 0 && no == 0) {
                    matshah++;
                    shah = 0;
                }
                no = 0;
            } else {
                polfotmatshah--;
            }
            if(kingCoordinate2.x * 1 - 1 >= 0){
                if(figures[kingCoordinate2.y][kingCoordinate2.x * 1 - 1].name !== '') {
                    no++;
                    polfotmatshah--;
                }
                check(kingCoordinate, {'y': kingCoordinate2.y, 'x': kingCoordinate2.x - 1}, figures[kingCoordinate.y][kingCoordinate.x].color);
                if(shah > 0 && no == 0) {
                    matshah++;
                    shah = 0;
                }
                no = 0;
            } else {
                polfotmatshah--;
            }
            check(kingCoordinate, kingCoordinate2, figures[kingCoordinate.y][kingCoordinate.x].color);
            if(figures[shahfigure.y][shahfigure.x].name == 'knigth') {
                if(matshah >= polfotmatshah){
                    shah = 0;
                    check({'y': y, 'x': x}, {'y': y, 'x': x}, figures[y][x].color);
                    if(shah == 0){
                        math = 1;
                    }
                }
            } else if (figures[shahfigure.y][shahfigure.x].name !== 'knigth'){
                shah = 0;
                saveshahfigure = shahfigure;
                if(kingCoordinate.x !== saveshahfigure.x && kingCoordinate.y == saveshahfigure.y) {
                    if(kingCoordinate.x < saveshahfigure.x) {
                        startx = kingCoordinate.x * 1 + 1;
                        stoperx = saveshahfigure.x * 1 - 1;
                    } else {
                        startx = saveshahfigure.x * 1 + 1;
                        stoperx = kingCoordinate.x * 1 - 1;
                    }
                    closeshah = 0;
                    while(stoperx >= startx) {
                        shah = 0;
                        check({'y': kingCoordinate.y, 'x': startx}, {'y': kingCoordinate.y, 'x': startx}, figures[saveshahfigure.y][saveshahfigure.x].color);
                        if(shah > 0) {
                            closeshah++;
                        }
                        startx++;
                    }
                } else if(kingCoordinate.x == saveshahfigure.x && kingCoordinate.y !== saveshahfigure.y) {
                    if(kingCoordinate.y < saveshahfigure.y) {
                        starty = kingCoordinate.y * 1 + 1;
                        stopery = saveshahfigure.y * 1 - 1;
                    } else {
                        starty = saveshahfigure.y * 1 + 1;
                        stopery = kingCoordinate.y * 1 - 1;
                    }
                    closeshah = 0;
                    while(stopery >= starty) {
                        shah = 0;
                        check({'y': starty, 'x': kingCoordinate.x}, {'y': starty, 'x': kingCoordinate.x}, figures[saveshahfigure.y][saveshahfigure.x].color);
                        if(shah > 0) {
                            closeshah++;
                        }
                        startx++;
                        shah = 0;
                    }
                } else if(kingCoordinate.x !== saveshahfigure.x && kingCoordinate.y !== saveshahfigure.y) {
                    if(kingCoordinate.x < saveshahfigure.x) {
                        startx = kingCoordinate.x * 1 + 1;
                        stoperx = saveshahfigure.x * 1 - 1;
                    } else {
                        startx = saveshahfigure.x * 1 + 1;
                        stoperx = kingCoordinate.x * 1 - 1;
                    }
                    if(kingCoordinate.y < saveshahfigure.y) {
                        starty = kingCoordinate.y * 1 + 1;
                        stopery = saveshahfigure.y * 1 - 1;
                    } else {
                        starty = saveshahfigure.y * 1 + 1;
                        stopery = kingCoordinate.y * 1 - 1;
                    }
                    while(stopery >= starty && stoperx >= startx) {
                        shah = 0;
                        check({'y': starty, 'x': startx}, {'y': starty, 'x': startx}, figures[saveshahfigure.y][saveshahfigure.x].color);
                        if(shah > 0) {
                            closeshah++;
                        }
                        startx++;
                    }
                }
                if(matshah >= polfotmatshah){
                    if(closeshah == 0){
                        shah = 0;
                        check({'y': y, 'x': x}, {'y': y, 'x': x}, figures[y][x].color);
                        if(shah == 0){
                            math = 1;
                        }
                    }
                }
            }
        }
    }
}

function imitation(figure, cell) {
    let empty = {'name' : '', 'color' : ''};
    d = figures[cell.y][cell.x];
    figures[cell.y][cell.x] = figures[figure.y][figure.x];
    figures[figure.y][figure.x] = empty; 
    figures[figureCoordinate.y][figureCoordinate.x] = figures[figure.y][figure.x];
    figures[cellCoordinate.y][cellCoordinate.x] = figures[cell.y][cell.x];
}
function swap(f1, f2){
    figures[f2.y][f2.x] = figures[f1.y][f1.x];
    figures[f1.y][f1.x] = d;
}

let html = '<table cellpadding="0" cellspacing="0">';
for (let y = 0; y < 8; y++) {
    html += '<tr>';
    for (let x = 0; x < 8; x++) {
        figure_picture = '';
        dataType = 'cell';
        if (figures[y][x].name !== '') {
            figure_picture = `
                <a href="javascript:return false;" class="figure" data-x="${x}" data-y="${y}">
                    <img src="img/` + figures[y][x].color + '_' + figures[y][x].name +  `.png" data-figure="${figures[y][x]}" />
                </a>
            `;
            dataType = 'figure';
            //figure_picture = figures[i][j];
        }

        if ((y + x) % 2 === 1) {
            cellColor = 'black';
        } else {
            cellColor = 'white';
        }
        html += `<td class="${cellColor} cell cell-${y}-${x}" data-x="${x}" data-y="${y}" data-type="${dataType}">` + figure_picture + `</td>`;
    }
    html += '</tr>';
}
html += '</table>';
document.querySelector('#table').innerHTML = html;
//ход
document.querySelectorAll('.cell').forEach((cell) => {
    cell.addEventListener('click', function() {
        dataType = this.getAttribute('data-type');
        if (dataType === 'figure' && !figureStatus) {
            figureCoordinate.x = this.getAttribute('data-x');
            figureCoordinate.y = this.getAttribute('data-y');

            figureStatus = true;
            return false;
        }
        //Бить фигуру
        if (figureStatus) {
            cellCoordinate.x = this.getAttribute('data-x');
            cellCoordinate.y = this.getAttribute('data-y');
            if(cellCoordinate.y === figureCoordinate.y && cellCoordinate.x === figureCoordinate.x){
                return false;
            }
            if(figures[figureCoordinate.y][figureCoordinate.x].color == figures[cellCoordinate.y][cellCoordinate.x].color){
                figureCoordinate.x = this.getAttribute('data-x');
                figureCoordinate.y = this.getAttribute('data-y');
                return false;
            }
            if(figures[figureCoordinate.y][figureCoordinate.x].color == colors[col]){
                if (figures[figureCoordinate.y][figureCoordinate.x].name == 'pawn') {
                    if (figures[figureCoordinate.y][figureCoordinate.x].color == 'white') {
                        if (figures[cellCoordinate.y][cellCoordinate.x].name !== '') {
                            if (!(figureCoordinate.x - 1 == cellCoordinate.x && figureCoordinate.y - 1 == cellCoordinate.y) && 
                                !(figureCoordinate.x * 1 + 1 == cellCoordinate.x && figureCoordinate.y - 1 == cellCoordinate.y)) {
                                return false;
                            }
                        } else {
                            if (figureCoordinate.x !== cellCoordinate.x) {
                                return false;
                            }
                            if(figures[figureCoordinate.y][figureCoordinate.x].step == '0'){
                                if (((figureCoordinate.y * 1 - 1) !== cellCoordinate.y * 1) && 
                                    ((figureCoordinate.y * 1 - 2) !== cellCoordinate.y * 1)) {
                                    return false;
                                }
                            } else {
                                if ((figureCoordinate.y * 1 - 1) !== cellCoordinate.y * 1) {
                                    return false;
                                }
                            }
                        }
                    } else if (figures[figureCoordinate.y][figureCoordinate.x].color == 'black') {
                        if (figures[cellCoordinate.y][cellCoordinate.x].name !== '') {
                            if (!(figureCoordinate.x - 1 == cellCoordinate.x && figureCoordinate.y * 1 + 1 == cellCoordinate.y) && 
                                !(figureCoordinate.x * 1 + 1 == cellCoordinate.x && figureCoordinate.y * 1 + 1 == cellCoordinate.y)) {
                                return false;
                            }
                        } else {
                            if (figureCoordinate.x !== cellCoordinate.x) {
                                return false;
                            }
                            if(figures[figureCoordinate.y][figureCoordinate.x].step == '0'){
                                if (((figureCoordinate.y * 1 + 1) !== cellCoordinate.y * 1) && 
                                    ((figureCoordinate.y * 1 + 2) !== cellCoordinate.y * 1)) {
                                    return false;
                                }
                            } else {
                                if ((figureCoordinate.y * 1 + 1) !== cellCoordinate.y * 1) {
                                    return false;
                                }
                            }
                        }
                    }
                } else if (figures[figureCoordinate.y][figureCoordinate.x].name == 'rook') {
                    if (!(figureCoordinate.x == cellCoordinate.x) && 
                        !(figureCoordinate.y == cellCoordinate.y)) {
                        return false;
                    }
                    if(figureCoordinate.x !== cellCoordinate.x){
                        if(figureCoordinate.x > cellCoordinate.x){
                            start = cellCoordinate.x * 1;
                            stoper = figureCoordinate.x * 1;
                        } else {
                            stoper = cellCoordinate.x * 1;
                            start = figureCoordinate.x * 1;
                        }
                        for(let i = start + 1; i < stoper; i++){
                            if(figures[figureCoordinate.y][i].name !== ''){
                                return false;
                            }
                        }
                    } else if(figureCoordinate.y !== cellCoordinate.y){
                        if(figureCoordinate.y > cellCoordinate.y){
                            start = cellCoordinate.y * 1;
                            stoper = figureCoordinate.y * 1;
                        } else {
                            stoper = cellCoordinate.y * 1;
                            start = figureCoordinate.y * 1;
                        }
                        for(let i = start + 1; i < stoper; i++){
                            if(figures[i][figureCoordinate.x].name !== ''){
                                return false;
                            }
                        }
                    }
                } else if (figures[figureCoordinate.y][figureCoordinate.x].name == 'bishop') {
                    let diagonalxstart = 0;
                    let diagonalxstop = 0;
                    let diagonalystart = 0;
                    let diagonalystop = 0;
                    const arr1 = [];
                    const arr2 = [];
                    if(figureCoordinate.x > cellCoordinate.x){
                        diagonalxstart = figureCoordinate.x;
                        diagonalxstop = cellCoordinate.x;
                        for (let i = figureCoordinate.x * 1 - 1; i > cellCoordinate.x; i--) {
                            arr2.push(i);
                        }
                    } else {
                        diagonalxstart = cellCoordinate.x;
                        diagonalxstop = figureCoordinate.x;
                        for (let i = figureCoordinate.x * 1 + 1; i < cellCoordinate.x; i++) {
                            arr2.push(i);
                        }
                    }
                    if(figureCoordinate.y > cellCoordinate.y){
                        diagonalystart = figureCoordinate.y;
                        diagonalystop = cellCoordinate.y;
                        for (let i = figureCoordinate.y * 1 - 1; i > cellCoordinate.y; i--) {
                            arr1.push(i);
                        }
                    } else {
                        diagonalystart = cellCoordinate.y;
                        diagonalystop = figureCoordinate.y;
                        for (let i = figureCoordinate.y * 1 + 1; i < cellCoordinate.y; i++) {
                            arr1.push(i);
                        }
                    }
                    if(diagonalxstart * 1 - diagonalxstop * 1 !== diagonalystart * 1 - diagonalystop * 1){
                        return false;
                    }
                    for(let i = 0; i < arr1.length; i++){
                        if(figures[arr1[i]][arr2[i]].name !== ''){
                            return false;
                        }
                    }
                } else if (figures[figureCoordinate.y][figureCoordinate.x].name == 'queen'){
                    if ((figureCoordinate.x == cellCoordinate.x) || 
                        (figureCoordinate.y == cellCoordinate.y)) {
                        if(figureCoordinate.x !== cellCoordinate.x){
                            if(figureCoordinate.x > cellCoordinate.x){
                                start = cellCoordinate.x * 1;
                                stoper = figureCoordinate.x * 1;
                            } else {
                                stoper = cellCoordinate.x * 1;
                                start = figureCoordinate.x * 1;
                            }
                            for(let i = start + 1; i < stoper; i++){
                                if(figures[figureCoordinate.y][i].name !== ''){
                                    return false;
                                }
                            }
                        } else if(figureCoordinate.y !== cellCoordinate.y){
                            if(figureCoordinate.y > cellCoordinate.y){
                                start = cellCoordinate.y * 1;
                                stoper = figureCoordinate.y * 1;
                            } else {
                                stoper = cellCoordinate.y * 1;
                                start = figureCoordinate.y * 1;
                            }
                            for(let i = start + 1; i < stoper; i++){
                                if(figures[i][figureCoordinate.x].name !== ''){
                                    return false;
                                }
                            }
                        }
                    } else {
                        let diagonalxstart = 0;
                        let diagonalxstop = 0;
                        let diagonalystart = 0;
                        let diagonalystop = 0;
                        const arr1 = [];
                        const arr2 = [];
                        if(figureCoordinate.x > cellCoordinate.x){
                            diagonalxstart = figureCoordinate.x;
                            diagonalxstop = cellCoordinate.x;
                            for (let i = figureCoordinate.x * 1 - 1; i > cellCoordinate.x; i--) {
                                arr2.push(i);
                            }
                        } else {
                            diagonalxstart = cellCoordinate.x;
                            diagonalxstop = figureCoordinate.x;
                            for (let i = figureCoordinate.x * 1 + 1; i < cellCoordinate.x; i++) {
                                arr2.push(i);
                            }
                        }
                        if(figureCoordinate.y > cellCoordinate.y){
                            diagonalystart = figureCoordinate.y;
                            diagonalystop = cellCoordinate.y;
                            for (let i = figureCoordinate.y * 1 - 1; i > cellCoordinate.y; i--) {
                                arr1.push(i);
                            }
                        } else {
                            diagonalystart = cellCoordinate.y;
                            diagonalystop = figureCoordinate.y;
                            for (let i = figureCoordinate.y * 1 + 1; i < cellCoordinate.y; i++) {
                                arr1.push(i);
                            }
                        }
                        if(diagonalxstart * 1 - diagonalxstop * 1 !== diagonalystart * 1 - diagonalystop * 1){
                            return false;
                        }
                        for(let i = 0; i < arr1.length; i++){
                            if(figures[arr1[i]][arr2[i]].name !== ''){
                                return false;
                            }
                        }
                    }
                } else if (figures[figureCoordinate.y][figureCoordinate.x].name == 'knigth') {
                    if (figureCoordinate.x * 1 + 2 == cellCoordinate.x || figureCoordinate.x * 1 - 2 == cellCoordinate.x) {
                        if(!(figureCoordinate.y * 1 + 1 == cellCoordinate.y || figureCoordinate.y * 1 - 1 == cellCoordinate.y)) {
                            return false;
                        }
                    } else if (figureCoordinate.y * 1 + 2 == cellCoordinate.y || figureCoordinate.y * 1 - 2 == cellCoordinate.y) {
                        if(!(figureCoordinate.x * 1 + 1 == cellCoordinate.x || figureCoordinate.x * 1 - 1 == cellCoordinate.x)){
                            return false;
                        }
                    } else {
                        return false;
                    }                        
                } else if (figures[figureCoordinate.y][figureCoordinate.x].name == 'king') {
                    let c = {'x' : cellCoordinate.x, 'y': cellCoordinate.y};
                    if (figureCoordinate.x * 1 + 1 == cellCoordinate.x || figureCoordinate.x * 1 - 1 == cellCoordinate.x) {
                        if(!(figureCoordinate.y * 1 + 1 == cellCoordinate.y || figureCoordinate.y * 1 - 1 == cellCoordinate.y || figureCoordinate.y == cellCoordinate.y)) {
                            return false;
                        }
                    } else if (figureCoordinate.y * 1 + 1 == cellCoordinate.y || figureCoordinate.y * 1 - 1 == cellCoordinate.y) {
                        if(!(figureCoordinate.x * 1 + 1 == cellCoordinate.x || figureCoordinate.x * 1 - 1 == cellCoordinate.x || figureCoordinate.x == cellCoordinate.x)){
                            return false;
                        }
                    } else if((cellCoordinate.x == figureCoordinate.x * 1 - 2 && cellCoordinate.y == figureCoordinate.y) && (figureCoordinate.y * 1 == 7 || figureCoordinate.y * 1 == 0)){
                        if((figures[figureCoordinate.y][figureCoordinate.x * 1 - 4].name == 'rook' && figures[figureCoordinate.y][figureCoordinate.x * 1- 4].step == '0') && figures[figureCoordinate.y][figureCoordinate.x].step == '0'){
                            shah = 0;
                            check({'y': figureCoordinate.y, 'x': figureCoordinate.x}, {'y': figureCoordinate.y, 'x': figureCoordinate.x}, figures[figureCoordinate.y][figureCoordinate.x].color);
                            if(shah == 0){
                                check({'y': figureCoordinate.y, 'x': figureCoordinate.x * 1 - 1}, {'y': figureCoordinate.y, 'x': figureCoordinate.x * 1 - 1}, figures[figureCoordinate.y][figureCoordinate.x].color);
                                if(shah == 0) {
                                    if(figures[figureCoordinate.y][figureCoordinate.x * 1 - 1].name == '' && figures[figureCoordinate.y][figureCoordinate.x * 1 - 3].name == '') {
                                        makeMove({'y': figureCoordinate.y, 'x': figureCoordinate.x}, {'y': figureCoordinate.y, 'x': figureCoordinate.x})
                                    }
                                } else {
                                    return false;
                                }
                            } else {
                                return false;
                            }
                            shah = 0;
                        } else {
                            return false;
                        }
                    } else if((cellCoordinate.x == figureCoordinate.x * 1 + 2 && cellCoordinate.y == figureCoordinate.y) && (figureCoordinate.y * 1 == 7 || figureCoordinate.y * 1 == 0)){
                        if((figures[figureCoordinate.y][figureCoordinate.x * 1 + 3].name == 'rook' && figures[figureCoordinate.y][figureCoordinate.x * 1 + 3].step == '0') && figures[figureCoordinate.y][figureCoordinate.x].step == '0'){
                            shah = 0;
                            check({'y': figureCoordinate.y, 'x': figureCoordinate.x}, {'y': figureCoordinate.y, 'x': figureCoordinate.x}, figures[figureCoordinate.y][figureCoordinate.x].color);
                            if(shah == 0){
                                check({'y': figureCoordinate.y, 'x': figureCoordinate.x * 1 + 1}, {'y': figureCoordinate.y, 'x': figureCoordinate.x * 1 + 1}, figures[figureCoordinate.y][figureCoordinate.x].color);
                                if(shah == 0){
                                    if(figures[figureCoordinate.y][figureCoordinate.x * 1 + 1].name == '') {
                                        makeMove({'y': figureCoordinate.y, 'x': figureCoordinate.x * 1 + 3}, {'y': figureCoordinate.y, 'x': figureCoordinate.x * 1 + 1})
                                    }
                                } else {
                                    return false;
                                }
                            } else {
                                return false;
                            }
                            shah = 0;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                    check(figureCoordinate, cellCoordinate, figures[figureCoordinate.y][figureCoordinate.x].color);
                    if(col == 1){
                        bkingCoordinate = c;
                        bkingCoordinate2 = bkingCoordinate;
                    } else{
                        wkingCoordinate = c;
                        wkingCoordinate2 = wkingCoordinate;
                    }
                    shah = 0;
                }
                if(col == 0){
                    col = 1;
                } else{
                    col = 0;
                }
                figures[figureCoordinate.y][figureCoordinate.x].step++;
            } else {
                figureCoordinate.x = this.getAttribute('data-x');
                figureCoordinate.y = this.getAttribute('data-y');
                return false;
            }
            
            imitation(figureCoordinate, cellCoordinate);
            shah = 0;
            if(col == 0){
                check(bkingCoordinate, bkingCoordinate2, figures[bkingCoordinate.y][bkingCoordinate.x].color);
                if(shah > 0){
                    col = 1;
                    shah = 0;
                    swap(cellCoordinate, figureCoordinate);
                } else {
                    swap(cellCoordinate, figureCoordinate);
                    makeMove(figureCoordinate, cellCoordinate);
                }
            } else {
                check(wkingCoordinate, wkingCoordinate2, figures[wkingCoordinate.y][wkingCoordinate.x].color);
                if(shah > 0){
                    col = 0;
                    shah = 0;
                    swap(cellCoordinate, figureCoordinate);
                } else {
                    swap(cellCoordinate, figureCoordinate);
                    makeMove(figureCoordinate, cellCoordinate);
                }
            }
            shah = 0;
            checkmath(bkingCoordinate, bkingCoordinate2);
            if(math == 1) {
                alert('Шах и мат черные проиграли');
            }
            polfotmatshah = 8;
            matshah = 0;
            checkmath(wkingCoordinate, wkingCoordinate2);
            if(math == 1) {
                alert('Шах и мат белые проиграли');
            }
            polfotmatshah = 8;
            matshah = 0;
            

            figureStatus = false;
        }
    });
});