from django.db import models

# Create your models here.
class Student(models.Model):
    student_id = models.CharField(max_length=10, primary_key=True)
    student_name = models.CharField(max_length=100)
    student_email = models.EmailField(unique=True)
    student_password = models.CharField(max_length=200)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.student_name
    
class Lecturer(models.Model):
    lecturer_id = models.CharField(max_length=10, primary_key=True)
    lecturer_name = models.CharField(max_length=100)
    lecturer_email = models.EmailField(unique=True)
    lecturer_dept = models.CharField(max_length=100)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.lecturer_name
    
class Course(models.Model):
    course_code = models.CharField(max_length=10, primary_key=True)
    course_name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    lecturer = models.ForeignKey(Lecturer, on_delete=models.SET_NULL, null=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.course_name
    
class Enrollment(models.Model):
    student = models.ForeignKey('Student', on_delete=models.CASCADE)
    course = models.ForeignKey('Course', on_delete=models.CASCADE)
    grade = models.CharField(max_length=5)
    date_enrolled = models.DateField(auto_now_add=True)

    class Meta:
        unique_together = ('student', 'course')

    def __str__(self):
        return f"{self.student} - {self.course}"
    
class Department(models.Model):
    department_id = models.CharField(max_length=10, primary_key=True)
    department_name = models.CharField()
    description = models.TextField()
    head_of_department = models.ForeignKey('Lecturer' ,on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return f"{self.department_id}: HOD ( {self.head_of_department} )"
    
class Assignment(models.Model):
    assignment_id = models.CharField(max_length=10, primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    issued_by = models.ForeignKey(Lecturer, on_delete=models.CASCADE)
    date_given = models.DateField(auto_now_add=True)
    date_due = models.DateField()

    def __str__(self):
        return f"{self.course}: {self.title}"
    
class Announcement(models.Model):
    title = models.CharField()
    description = models.TextField(blank=True)
    made_by = models.ForeignKey(Lecturer, on_delete=models.CASCADE)
    announced_on = models.DateField(auto_now_add=True)