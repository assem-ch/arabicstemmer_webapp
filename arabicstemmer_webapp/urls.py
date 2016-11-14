
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers

from arabicstemmer_api import views
from arabicstemmer_api.views import schema_view

router = routers.DefaultRouter()
router.register(r'words', views.WordViewSet)
router.register(r'stems', views.StemViewSet)
router.register(r'stopwords', views.StopWordViewSet)

urlpatterns = [
    url(r'^$', 'arabicstemmer_api.views.index'),
    url(r'^flare/?$', 'arabicstemmer_api.views.flare'),

    url(r'^admin/?', include(admin.site.urls)),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url('^api/', schema_view),
    url(r'^list/stopwords/?', 'arabicstemmer_api.views.stopwords'),
    url(r'word/(?P<word>\w{2,15})/?', 'arabicstemmer_api.views.stem'),
]
