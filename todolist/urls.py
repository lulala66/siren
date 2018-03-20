from django.urls import path, include
from . import views

app_name = 'todolist'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:category_id>/', views.list, name='list'),
]