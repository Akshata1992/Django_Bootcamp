from django.shortcuts import render
from . import forms

# Create your views here.
def index(request):
	return render(request,'form_app.html')


def form_name_view(request):

	if request.method == 'POST':
		form = forms.FormName(request.POST)

		if form.is_valid():
			print("Validation Success!")
			print("NAME: "+form.cleaned_data['name'])
			print("EMAIL: "+form.cleaned_data['email'])
			print("TEXT: "+form.cleaned_data['text'])

	name = forms.FormName()
	return render(request,'form_page.html',{'formKey':name})