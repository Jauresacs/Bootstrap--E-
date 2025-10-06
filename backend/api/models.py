from django.db import models

# Create your models here.
# Table/Modèle User
class User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField()
    phone_number = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

# Table/modèle Team
class Team(models.Model):
    team_name = models.CharField(max_length=30)
    team_description = models.CharField(max_length=255)
    team_members = models.ManyToManyField(User)
    #team_manager = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.team_name
