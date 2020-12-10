from django.shortcuts import render
from django.http import HttpResponse
from SecondApp.models import Topic,Webpage,AccessRecord

# Create your views here.
def index(request):

	webpages_list = AccessRecord.objects.order_by('date')
	web_dict = {'access_record':webpages_list}

	#my_dict = {'insert_me':"Hello I am from views.py!",}

	return render(request,"app.html",context=web_dict)
	#return HttpResponse("<em>This is my Second App</em>")