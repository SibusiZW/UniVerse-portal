from django.contrib import admin
from .models import Student, Lecturer, Course, Enrollment, Department, Assignment

# Register your models here.
admin.site.register(Student)
admin.site.register(Lecturer)
admin.site.register(Course)
admin.site.register(Enrollment)
admin.site.register(Department)
admin.site.register(Assignment)