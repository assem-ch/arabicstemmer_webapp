from django.db import models


class Stem(models.Model):
    text = models.CharField(max_length=25, unique=True)

    def __unicode__(self):
        return u"%s. %s" % (self.id, self.text)


class Word(models.Model):
    stem = models.ForeignKey(Stem)
    text = models.CharField(max_length=25, unique=True)

    def __unicode__(self):
        return u"%s. %s" % (self.id, self.text)


class StopWord(models.Model):
    text = models.CharField(max_length=25)

    def __unicode__(self):
        return u"%s. %s" % (self.id, self.text)
