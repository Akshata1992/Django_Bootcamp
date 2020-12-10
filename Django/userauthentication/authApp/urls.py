from django.urls import re_path,include
from authApp import views

#template tagging

app_name = 'authApp'

urlpatterns = [
		re_path(r'^index/',views.index,name='index'),
		re_path(r'^register/',views.register,name='register'),
		re_path(r'^login/',views.user_login,name='user_login'),
]