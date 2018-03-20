$("#tasks").sortable();

countTodos();

//create new task
$('.add-todo').on('keypress', function (e) {
    e.preventDefault
    if (e.which == 13) {
        if ($(this).val() != '') {
            var todo = $(this).val();
            createTodo(todo);
            countTodos();
        } else {
            // some validation
        }
    }
});
// mark task as done/undone and remove it from the list/finished
$('.todolist').on('change', 'input[type="checkbox"]', function () {
    var doneItem = $(this).parent().text();
    $(this).parent().parent().remove();
    if ($(this).prop('checked')) {
        done(doneItem);
    } else {
        undone(doneItem);
    }
    countTodos();
});


// count tasks
function countTodos() {
    var count = $("#tasks li").length;
    $('.count-todos').html(count);
}

//create task
function createTodo(text) {
    var markup = '<li class="ui-state-default"><div class="checkbox"><input type="checkbox" value="" /><p>' + text + '<span class="del-button glyphicon glyphicon-remove" aria-hidden="true"></span></p></div></li>';
    $('#tasks').append(markup);
    $('.add-todo').val('');
    addRemove();
}

//mark task as done and move it to finished
function done(doneItem) {
    var markup = '<li class="ui-state-default"><div class="checkbox"><input type="checkbox" value="" checked/><p>' + doneItem + '<span class="del-button glyphicon glyphicon-remove" aria-hidden="true"></span></p></div></li>';
    $('#finished').append(markup);
    addRemove();
}

//mark task as undone and move it to list
function undone(doneItem) {
    var markup = '<li class="ui-state-default"><div class="checkbox"><input type="checkbox" value=""/><p>' + doneItem + '<span class="del-button glyphicon glyphicon-remove" aria-hidden="true"></span></p></div></li>';
    $('#tasks').append(markup);
    addRemove();
}

//delete done task from "already done"
function addRemove() {
    $('.del-button').on('click', function () {
    $(this).parent().parent().parent().remove();
    countTodos();
});
}
addRemove()