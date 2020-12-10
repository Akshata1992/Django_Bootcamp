from django.shortcuts import render

# Create your views here.

def base(request):
	my_dict = {'text':'hello! welcome to template filter tutorial','ques':'how you doing?'}
	return render(request,'demoApp/base.html',my_dict)

def index(request):
	return render(request,'demoApp/index.html')


def other(request):
	return render(request,'demoApp/other.html')


def relative(request):
	return render(request,'demoApp/relative_url_template.html')


