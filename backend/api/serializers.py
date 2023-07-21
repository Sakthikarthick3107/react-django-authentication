from django.contrib.auth.models import  User
from rest_framework import serializers

class UserSerializer( serializers . ModelSerializer ):
    #confirmPassword = serializers.CharField(write_only=True)
    class Meta :
        model = User
        fields = ('username', 'email', 'password')
        #extra_kwargs = {'password': {'write_only': True}}
        
    # def validate(self, data):
    #     if data['password'] != data['confirmPassword']:
    #         raise serializers.ValidationError("Passwords do not match.")
    #     return data
    
    def create(self, validated_data):
        #validated_data.pop('confirmPassword')
        user = User.objects.create_user(
            username = validated_data['username'],
            email = validated_data['email'],
            password = validated_data['password'],
            #confirmPassword = validated_data['confirmPassword']
        )
        return user
        