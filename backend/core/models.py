from django.db import models

# Create your models here.
class Student(models.Model):
    student_id = models.CharField(max_length=10, primary_key=True)
    student_name = models.CharField(max_length=100)
    student_email = models.EmailField(unique=True)
    created_at = models.DateField(auto_now_add=True)