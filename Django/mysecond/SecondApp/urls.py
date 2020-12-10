from django.urls import path,re_path
from SecondApp import views

urlpatterns = [re_path(r'^$',views.index,name='index'),
]