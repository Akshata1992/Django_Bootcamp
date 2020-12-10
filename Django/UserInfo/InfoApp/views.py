from django.shortcuts import render
from InfoApp.models import User

# Create your views here.

def index(request):
	return render(request,'home.html')

def user_index(request):

	user_rec = User.objects.all()
	user_dic={'user_info':user_rec}
	return render(request,'info.html',context=user_dic)