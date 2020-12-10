from django.urls import re_path,include
from InfoApp import views

urlpatterns=[re_path(r'^$',views.user_index,name='user_index'),]