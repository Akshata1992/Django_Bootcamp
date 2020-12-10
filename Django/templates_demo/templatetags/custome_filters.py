#building customised filter

from django import template

register = template.Library()

#define filter function

@register.filter(name='cut')
def cut(value,arg):
	return value.replace(arg,'')


#register.filter('cut',cut)
