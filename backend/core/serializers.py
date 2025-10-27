from .models import Student, Lecturer, Course, Enrollment, Department, Assignment, Announcement
from rest_framework import serializers

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class LecturerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecturer
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    lecturer = serializers.StringRelatedField()
    class Meta:
        model = Course
        fields = '__all__'

class EnrollmentSerializer(serializers.ModelSerializer):
    student = serializers.StringRelatedField()
    course = serializers.StringRelatedField()
    class Meta:
        model = Enrollment
        fields = '__all__'

class DepartmentSerializer(serializers.ModelSerializer):
    head_of_department = serializers.StringRelatedField()
    class Meta:
        model = Department
        fields = '__all__'

class AssignmentSerializer(serializers.ModelSerializer):
    course = serializers.StringRelatedField()
    issued_by = serializers.StringRelatedField()
    class Meta:
        model = Assignment
        fields = '__all__'

class AnnouncementSerializer(serializers.ModelSerializer):
    made_by = serializers.StringRelatedField()
    class Meta:
        model = Announcement
        fields = '__all__'