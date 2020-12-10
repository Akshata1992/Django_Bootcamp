import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','UserInfo.settings')

import django
django.setup()

import random
from InfoApp.models import User
from faker import Faker

fake = Faker()

def populate(N):

	for i in range(N):
		firstname = fake.first_name()
		lastname = fake.last_name()
		u_email = fake.email()

		#create records.
		userInfo = User.objects.get_or_create(firstName=firstname,lastName=lastname,email=u_email)[0]
		print(userInfo)
	return userInfo

if __name__ == '__main__':
	print('Populating the script')
	populate(10)
	print('Population completed')


