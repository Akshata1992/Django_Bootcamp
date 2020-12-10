from django.shortcuts import render
from InfoApp.forms import NewUserPage

# Create your views here.

def index(request):
	return render(request,'home.html')

def user_index(request):
	form = NewUserPage()

	if request.method == 'POST':
		form = NewUserPage(request.POST)
		if form.is_valid():
			form.save(commit=True)
			return index(request)
		else:
			print('ERROR FROM INVALID')

	return render(request,'info.html',{'form':form})

