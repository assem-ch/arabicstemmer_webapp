from django.http import HttpResponse
from django.shortcuts import render_to_response
from rest_framework import response, schemas
from rest_framework import viewsets
from rest_framework.decorators import api_view, renderer_classes
from rest_framework_swagger.renderers import OpenAPIRenderer, SwaggerUIRenderer

from arabicstemmer import ArabicStemmer
from arabicstemmer_api.models import Word, Stem, StopWord
from arabicstemmer_api.serializers import WordSerializer, StemSerializer, StopWordSerializer


@api_view()
@renderer_classes([OpenAPIRenderer, SwaggerUIRenderer])
def schema_view(request):
    generator = schemas.SchemaGenerator(title='Stemming API')
    return response.Response(generator.get_schema(request=request))


class WordViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows words to be viewed or edited.
    """
    queryset = Word.objects.all().order_by('-text')
    serializer_class = WordSerializer


class StemViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows stems to be viewed or edited.
    """
    queryset = Stem.objects.all().order_by('-text')
    serializer_class = StemSerializer


class StopWordViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows stopwords to be viewed or edited.
    """
    queryset = StopWord.objects.all().order_by('-text')
    serializer_class = StopWordSerializer


def index(request):
    return render_to_response('../templates/index.html', {})


def flare(request):
    return render_to_response('../templates/flare.html', {})


def stopwords(request):
    stopwords = StopWord.objects.all()[:10]

    return render_to_response('../templates/stem_list.html', {'stems': stopwords})


def init(request):
    if request.user.is_authenticated():
        # with open("arabic.txt") as sw:
        #     line = sw.readline()
        #     while(line):
        #         StopWord.objects.update_or_create(text=line[:-1].strip())
        #         line = sw.readline()
        with open("voc.txt") as voc:
            line = voc.readline()
            while (line):
                stem(request, line[:-1])
                line = voc.readline()

    return HttpResponse("")


def stem(request, word=""):
    word = word.strip()
    stemmer = ArabicStemmer()
    stemmed = stemmer.stemWord(word)
    response = HttpResponse(
        "<html><head></head> <body>%s</body></html>" % stemmed,
        # content_type="text/plain"
    )
    response['charset'] = 'utf-8'
    response['Access-Control-Allow-Origin'] = '*'
    response['Access-Control-Allow-Methods'] = 'GET'
    if request.user.is_authenticated():
        stem, created = Stem.objects.get_or_create(text=stemmed)
        Word.objects.update_or_create(text=word, stem=stem)
    # response['Content-Encoding'] = 'gzip'
    return response
