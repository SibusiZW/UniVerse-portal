from .models import Student, Lecturer
from .serializers import StudentSerializer, LecturerSerializer
from rest_framework import viewsets

# Create your views here.
class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class LecturerViewSet(viewsets.ModelViewSet):
    queryset = Lecturer.objects.all()
    serializer_class = LecturerSerializer