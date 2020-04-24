from django.http import HttpResponse
from django.http.request import HttpRequest
import json

# Create your views here.
def name_api(request: HttpRequest):

    return HttpResponse(json.dumps({"name": "hoge"}))