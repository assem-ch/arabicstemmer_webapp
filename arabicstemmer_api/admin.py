from django.contrib import admin

import arabicstemmer_api.models

admin.site.register(arabicstemmer_api.models.Word)
admin.site.register(arabicstemmer_api.models.Stem)
admin.site.register(arabicstemmer_api.models.StopWord)
