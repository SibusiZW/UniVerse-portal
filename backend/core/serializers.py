from .models import Student, Lecturer
from rest_framework import serializers

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class LecturerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecturer
        fields = '__all__'