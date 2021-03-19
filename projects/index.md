---
layout: default
title: "Projects"
---

## {{ page.title }}

{% for project in site.data.projects %}

{% if project.target_blank == true %}

-   <a href="{{ project.url }}" target="_blank">{{ project.name }}</a>

{% else %}

-   [{{ project.name }}]({{ project.url }})

{% endif %}

{% endfor %}
