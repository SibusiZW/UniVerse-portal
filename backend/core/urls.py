from .views import StudentViewSet, LecturerViewSet, CourseViewSet
from django.urls import include, path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'lecturers', LecturerViewSet)
router.register(r'courses', CourseViewSet)

urlpatterns = [
    path('', include(router.urls))
]