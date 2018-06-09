from django.shortcuts import render
from Mehraneh.forms import *

from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from django.shortcuts import redirect


def index(request):
    return render(request, 'index.html')


def benefactor_registration(request):
    form = BenefactorRegistraton()
    if request.method == 'POST':
        form = BenefactorRegistraton(request.POST)
        if form.is_valid():
            print("SUCCESS")

        else:
            print(BenefactorRegistraton.errors)

    return render(request, 'registerBenefactor.html', {'form': form})


def organization_registration(request):
    form = OrganizationRegistration()
    if request.method == 'POST':
        form = OrganizationRegistration(request.POST)

        if form.is_valid():
            print("SUCCESS")

        else:
            print(OrganizationRegistration.errors)

    return render(request, 'registerOrganization.html', {'form': form})


def organization_profile(request):
    return render(request, 'organizationProfileView.html')


def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username=username, password=password)

        if user:
            if user.is_active:
                login(request, user)
                return HttpResponseRedirect(reverse('index'))
            else:
                return HttpResponse("Your account is not active.")
        else:
            print("Someone tried to login and failed.")
            print("They used username: {} and password: {}".format(username, password))
            return HttpResponse("Invalid login details supplied.")

    else:
        return render(request, 'login.html', {})


@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))
