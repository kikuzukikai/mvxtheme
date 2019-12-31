<head>
    <title>{% if page.title %}{{ page.title }} | {% endif %}{{ site.title }}{% if page.title %}{% else %} | {{ site.tagline }}{% endif %}</title>
    <meta name="description" content="{% if page.excerpt %}{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}{% else %}{{ site.description }}{% endif %}">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="cache-control" content="public, max-age=604800, s-maxage=31536000">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{% if site.google_site_verification %}}
    <meta name="google-site-verification" content="{{ site.google_site_verification }}">
    {{% endif %}}
    <meta name="keywords" content="{{ site.keywords }}">
    <meta property="fb:app_id" content="{{ site.app_id }}">
    <!-- dns prefetch -->
    <link rel="dns-prefetch" href="//typesquare.com/">
    <link rel="dns-prefetch" href="//www.kikuzukikai.org/">
    <link rel="dns-prefetch" href="//stackpath.bootstrapcdn.com/">
    <link rel="dns-prefetch" href="//fonts.googleapis.com/">
    <!-- favicon -->
    <link rel="icon" href="{{ '/favicon.ico' | relative_url }}">
    <!-- rss -->
    <link rel="alternate" type="application/rss+xml" title="{{ site.title | escape }}" href="{{ '/feed.xml' | relative_url }}">
    <!-- css -->
    <style>
    .logo {
        font-family: HanaBotan-DB;
    }
    </style>
    <!-- js -->
    {% include google-analytics.md %}
    <script src="//typesquare.com/3/tsst/script/ja/typesquare.js?5ccd4bc22e0841d784d862ecac1e02ec" charset="utf-8"></script>
</head>
