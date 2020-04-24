from django.urls import path

from .views import name_api

urlpatterns = [
    path("", name_api, name="name_api")
]