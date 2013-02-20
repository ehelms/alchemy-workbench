var data = function(size){
    var tmp = {
        row_headers : [],
        rows        : []
    };

    for( i=0; i < size; i += 1){
        tmp['row_headers'].push('Column ' + i);
        cells = [];
        
        for(j=0; j < size; j+= 1){
            cells.push(j + i);
        }

        tmp['rows'].push({
            'id'    : 'row_' + i,
            'cells' : cells
        })
    }

    return tmp;
};

$(function(){

    var template = ' \
            <table class="table {{ classes }}" style="background: rgb(235, 235, 235);"> \
              <thead class="table-head"> \
                <tr> \
                  <th><input class="select_all" type="checkbox" name="select_all" value="none"></td> \
                  {{#each row_headers}} \
                    <th>{{ this }}</th> \
                  {{/each}} \
                </tr> \
              </thead> \
              <tbody class="table-body"> \
                {{#each rows}} \
                  <tr> \
                    <td><input class="row_select" type="checkbox" name="{{ id }}" value="{{ id }}"></td> \
                    {{#each cells}} \
                      <td>{{ this }}</td> \
                    {{/each}} \
                  </tr> \
                {{/each}} \
              </tbody> \
            </table>';

    var table = new Table({
            data    : data(5),
            target  : '#backbone-table'
        });

    var custom_table = new Table({
            classes : 'table-stripped',
            template: template,
            data    : data(5),
            target  : '#backbone-custom-table'
        });
});

var table_controller = function($scope){
    var tmp_data = data(5);

    $scope.row_headers = tmp_data['row_headers'];
    $scope.rows = tmp_data['rows'];

};
