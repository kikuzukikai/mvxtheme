<head>
    <link rel="canonical" href="{{ site.url }}">
    <title>{% if page.title %}{{ page.title }} | {% endif %}{{ site.title }}{% if page.title %}{% else %} | {{ site.tagline }}{% endif %}</title>
    <meta name="description" content="{% if page.excerpt %}{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}{% else %}{{ site.description }}{% endif %}">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{% if site.google_site_verification %}}
    <meta name="google-site-verification" content="{{ site.google_site_verification }}">
    {{% endif %}}
    <!-- favicon -->
    <link rel="icon" href="{{ '/assets/svg/favicon.svg' | relative_url }}" type="image/svg+xml">
    <!-- rss -->
    <link rel="alternate" type="application/rss+xml" title="{{ site.title | escape }}" href="{{ '/feed.xml' | relative_url }}">
    <!-- stylesheet -->
    <link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
</head>
