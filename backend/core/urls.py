from .views import StudentViewSet, LecturerViewSet, CourseViewSet, EnrollmentViewSet
from django.urls import include, path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'lecturers', LecturerViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'enrollments', EnrollmentViewSet)

urlpatterns = [
    path('', include(router.urls))
]