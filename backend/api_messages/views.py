from rest_framework import viewsets
# permissions, authentication
from .models import Message
from .serializers import MessageSerializer

# Create your views here.

class MessageViewSet(viewsets.ModelViewSet):
    # authentication_classes = (authentication.SessionAuthentication,)
    # permission_classes = (permissions.IsAuthenticated,)
    queryset = Message.objects.all()
    serializer_class = MessageSerializer