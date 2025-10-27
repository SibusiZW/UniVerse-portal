from .views import StudentViewSet, LecturerViewSet, CourseViewSet, EnrollmentViewSet, DepartmentViewSet, AssignmentViewSet, AnnouncementViewSet
from django.urls import include, path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'lecturers', LecturerViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'enrollments', EnrollmentViewSet)
router.register(r'departments', DepartmentViewSet)
router.register(r'assignments', AssignmentViewSet)
router.register(r'announcements', AnnouncementViewSet)

urlpatterns = [
    path('', include(router.urls))
]