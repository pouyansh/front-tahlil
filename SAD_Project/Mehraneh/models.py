from django.db import models
from django.contrib.auth.models import User
from Mehraneh.choices import *

class Benefactor(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=30)
    nickname = models.CharField(max_length=30, blank=True)
    sex = models.CharField(max_length=1, choices=SEX_CHOICES)
    birthDate = models.IntegerField()
    birthMonth = models.IntegerField()
    birthYear = models.IntegerField()
    address = models.CharField(max_length=100)
    education = models.CharField(max_length=10, choices=EDUCATION_CHOICES)
    major = models.CharField(max_length=20, blank=True)
    city = models.CharField(max_length=10, choices=CITY_CHOICES)
    nid = models.CharField(max_length=10)
    image = models.ImageField(upload_to='profile_pics/', default='profile_pics/no-picture.png')
    more = models.CharField(max_length=100, blank=True)

# class Projects(models.Model):
#     project_id = models.IntegerField(primary_key=True)
#     cash = models.IntegerField()
#     description = models.TextField()
#
# class Report(models.Model):
#     report_id = models.IntegerField(primary_key=True)
#     description = models.TextField()
#
#
# class Reports(models.Model):
#     report_id = models.ForeignKey(Report, on_delete=models.CASCADE)
#     reporter = models.ForeignKey(User, on_delete=models.CASCADE)
#     reported = models.ForeignKey(User, on_delete=models.CASCADE)
#
#     class Meta:
#         unique_together = ('report_id', 'reporter', 'reported')
#
#
# class Rate(models.Model):
#     rate_id = models.IntegerField(primary_key=True)
#     final_rate = models.IntegerField(max_length=2)
#     punctuality = models.IntegerField(max_length=2)
#     reliability = models.IntegerField(max_length=2)
#     morality = models.IntegerField(max_length=2)
#     description = models.TextField()
#     environment_quality = models.IntegerField(max_length=2, default=None, blank=True, null=True)
#     job_quality = models.IntegerField(max_length=2, default=None, blank=True, null=True)
#
#
# class Rates(models.Model):
#     rate_id = models.ForeignKey(Rate, on_delete=models.CASCADE)
#     rater = models.ForeignKey(User, on_delete=models.CASCADE)
#     rated = models.ForeignKey(User, on_delete=models.CASCADE)
#
#     class Meta:
#         unique_together = ('rate_id', 'rater', 'rated')
#
#
# class Request(models.Model):
#     request_id = models.IntegerField(primary_key=True)
#     request_type = models.CharField(max_length=20)
#     description = models.TextField()
#
#
# class Requests(models.Model):
#     request_id = models.ForeignKey(Request, on_delete=models.CASCADE)
#     requester_id = models.ForeignKey(User, on_delete=models.CASCADE)
#     requested_id = models.ForeignKey(User, on_delete=models.CASCADE)
#     project_id = models.ForeignKey(Projects, on_delete=models.CASCADE)
#     state = models.BooleanField(default=None, blank=True, null=True)
#
#     class Meta:
#         unique_together = ('request_id', 'requester_id', 'requested_id', 'project_id')
#
#
#
#
