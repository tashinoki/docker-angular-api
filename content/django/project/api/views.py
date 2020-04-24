from django.http import HttpResponse
from django.http.request import HttpRequest

# Create your views here.
def name_api(request: HttpRequest):

    return HttpResponse({"name": "hoge"})