---
layout: default
title: "Projects"
---

<h2 id="projects">Main {{ page.title }}</h2>

{% for project in site.data.projects %}

{% if project.target_blank == true %}

-   <a href="{{ project.url }}" target="_blank">{{ project.name }}</a>

{% else %}

-   [{{ project.name }}]({{ project.url }})

{% endif %}

{% endfor %}

<h2 id="other">Other {{ page.title }}</h2>

{% for project in site.data.otherProjects %}

{% if project.target_blank == true %}

-   <a href="{{ project.url }}" target="_blank">{{ project.name }}</a>

{% else %}

-   [{{ project.name }}]({{ project.url }})

{% endif %}

{% endfor %}
