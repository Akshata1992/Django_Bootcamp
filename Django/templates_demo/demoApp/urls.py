from django.urls import re_path,include
from demoApp import views

#template tagging for relative url

app_name = 'demoApp'

urlpatterns=[re_path(r'^other/',views.other,name='other'),
    re_path(r'^relative/',views.relative,name='relative'),
]