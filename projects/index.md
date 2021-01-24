---
layout: default
title: "Projects"
---

## {{ page.title }}

### Online projects

{% for project in site.data.onlineProjects %}

-   [{{ project.name }}]({{ project.url | relative_url }})

{% endfor %}

### Other projects

{% for project in site.data.projects %}

-   [{{ project.name }}]({{ project.url }})

{% endfor %}
