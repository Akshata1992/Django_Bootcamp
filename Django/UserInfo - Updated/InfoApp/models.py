from django.db import models
from django.contrib.auth.models import User

"""
class User(models.Model):
	firstName = models.CharField(max_length=264)
	lastName = models.CharField(max_length=264)
	email = models.CharField(max_length=264)
"""

#create User model

class UserProfileInfo(models.Model):

	#extend the class attributes instead of inheriting
	user = models.OneToOneField(User)

	#additional classes
	portfolio_site = models.URLField(blank=True)

	profile_pic = models.ImageField(upload_tp='profile_pic',blank
		=True)

	def __str__(self):
		return self.user.username
