from django.db import models

class User(models.Model):
	firstName = models.CharField(max_length=264)
	lastName = models.CharField(max_length=264)
	email = models.CharField(max_length=264)
