var SortElement = function (list, revers) {

    var elem = document.getElementsByClassName('elem');
    var col = elem.length;

    //функция перестановки
    var transposition = function () {
        //анимация для перемещения
        list.children[i].style.transition = '0.2s'; //время анимации
        list.children[i+1].style.transition = '0.2s';
            
        list.children[i].style.background = 'red';
        list.children[i+1].style.background = 'red';

        list.children[i].style.position = 'relative';
        list.children[i+1].style.position = 'relative';

        list.children[i].style.left ='0px';
        list.children[i+1].style.right = '0px';

        setTimeout(function(){
            list.children[i].style.left = 13 +'px';
            list.children[i+1].style.right = 13 +'px';

        },100);    
        setTimeout(function(){
            list.children[i].style.background = 'aqua';
            list.children[i+1].style.background = 'aqua';
            list.insertBefore(list.children[i+1], list.children[i]);
            list.children[i].style.transition = 'none'; //отключаем анимацию
            list.children[i+1].style.transition = 'none';

            list.children[i].style.left = '';
            list.children[i].style.right = '';
            list.children[i+1].style.left = '';
            list.children[i+1].style.right = '';

            flag  = false;
        },300);    

    }

    //восстановка флага
    if (flag) {
        return;
    }
    else{
        flag = true;
    }


    for(var i = 0; i <= col-2; i++    ){

        var num = Number(list.children[i].innerText); // перобразуем в число текущий и следующий элемент
        var next_num = Number(list.children[i+1].innerText);

        if (revers){
    
        
            if ( (num < next_num) ){

                transposition();
                break;
            }
        }
        else{
            if ( (num > next_num) ){

                transposition();
                break;
            }
        }

        if (i == col-2){
            flag = false;
        }
    }
}