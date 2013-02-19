$(function(){
    var data = {
            row_headers : ['Column 1', 'Column 2', 'Column 3'],
            rows        : [['1', '2', '3'],
                           ['4', '5', '6']]
        };

    var table = Tables.init({
        classes : 'table-stripped'
    }).render(data, $('#wrapper'));
});
