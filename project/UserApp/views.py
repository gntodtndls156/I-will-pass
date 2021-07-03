from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

def spec(request):
    return render(request, 'spec.html')   

def notebook(request):
    return render(request, 'notebook.html')   

def notebook_detail(request):
    return render(request, 'notebook_detail.html')   
