from django.contrib import admin
from django.contrib.auth.models import User

from .models import MainList, Todo

class TodoInline(admin.StackedInline):
    model = Todo


class MainListAdmin(admin.ModelAdmin):
    inlines = [TodoInline]

admin.site.register(MainList, MainListAdmin)
admin.site.register(Todo)

