from django import forms
from InfoApp.models import User
from django.contrib.auth.models import UserProfileInfo

"""
class NewUserPage(forms.ModelForm):
	class Meta:
		model = User
		fields = '__all__'
"""

class UserForm(forms.ModelForm):
	password = forms.CharField(widget=forms.PasswordInput())

	class Meta():
		model = User
		fields = ('username','email','password')

class UserProfileInfo(forms.ModelForm):
	class Meta():
		model = UserProfileInfo
		fields = ('portfolio_site','profile_pic')

