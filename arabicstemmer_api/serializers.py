from rest_framework import serializers

from models import Word, Stem, StopWord


class WordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Word
        fields = ('id', 'text', 'stem')


class StemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Stem
        fields = ('id', 'text',)


class StopWordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = StopWord
        fields = ('id', 'text',)
