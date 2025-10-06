from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'phone_number']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['team_name', 'team_description', 'team_members']
