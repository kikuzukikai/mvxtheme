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
    <meta name="keywords" content="{{ site.keywords }}">
    <meta property="fb:app_id" content="{{ site.app_id }}">
    <!-- dns prefetch -->
    <link rel="dns-prefetch" href="//www.kikuzukikai.org/">
    <link rel="dns-prefetch" href="//fonts.googleapis.com/">
    <!-- favicon -->
    <link rel="icon" href="{{ '/favicon.ico' | relative_url }}">
    <!-- rss -->
    <link rel="alternate" type="application/rss+xml" title="{{ site.title | escape }}" href="{{ '/feed.xml' | relative_url }}">
    <!-- stylesheet -->
    <link rel="stylesheet" href="{{ "/assets/css/main.css" | relative_url }}">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Noto+Sans+JP:300|Noto+Serif+JP:300|Roboto:300|Ubuntu:300&display=swap">
    <link rel="stylesheet" href="//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- js -->
    {% include google-analytics.md %}
</script>
</head>
