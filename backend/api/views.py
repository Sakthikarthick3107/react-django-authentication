from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from .serializers import UserSerializer
from django.contrib.auth.models import  User
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh'
    ]
    return Response(routes) 

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email

        return token
class MyTokenObtainPairView (TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserRegistrationView (generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
#In virtualenv -> Install package by python -m pip install djangorestframework