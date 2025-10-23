from .views import StudentViewSet, LecturerViewSet
from django.urls import include, path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'lecturers', LecturerViewSet)

urlpatterns = [
    path('', include(router.urls))
]