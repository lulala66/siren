from django.shortcuts import render, get_object_or_404


from .models import MainList


def index(request):
    return render(request, 'todolist/index.html')

def list(request, category_id):
    list = get_object_or_404(MainList, pk=category_id)
    # todos = list.todo_set.all()
    # for todo in todos:
    #     print(todo)
    # where todo is an object
    return render(request, 'todolist/list.html', {'list': list})
