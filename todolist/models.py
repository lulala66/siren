from django.db import models
from django.contrib.auth.models import User


class MainList(models.Model):
    category = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.category


class Todo(models.Model):
    text = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now=True)
    deadline = models.DateTimeField(null=True)
    is_finished = models.BooleanField(default=False)
    category = models.ForeignKey(MainList, on_delete=models.CASCADE)

    def __str__(self):
        return self.text




