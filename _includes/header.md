<div id="wrap">
<header class="header" role="banner" aria-label="Header">
<a href="{{ '/' | relative_url }}" class="logo" role="link" aria-label="Home">{% include_cached svg-title.md %}</a>
<a href="javascript:void(0);" onclick="hamburgerMenu();" class="hamburger-button" role="link" aria-label="Hamburger menu button">
    <i class="fa-bars"></i>
</a>
    <nav class="navigation" role="navigation" aria-label="Navigation">
        <ul role="menu" aria-hidden="true" aria-label="Navigation menu">
            <li role="menuitem" aria-label="Navigation menu item">
                <a href="{{ '/' | relative_url }}" class="logo" role="menuitem" aria-label="Home">{% include_cached svg-title.md %}</a>
            </li>
            {% for item in site.menu %}
            <li role="menuitem"><a href="{{ item.url | relative_url }}" role="menuitem" aria-label="{{ item.title | escape }}">{{ item.title | escape }}</a></li>
            {% endfor %}
        </ul>
    </nav>
    <div class="searchbox" role="search" aria-label="Search">
        <form action="{{ '/search' | relative_url }}" id="searchthis" method="get" role="form" aria-label="Search form">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="search" id="search" name="query" placeholder="Search..." role="textbox" aria-label="Search textbox"/>
        </form>
    </div>
</header>
<nav id="hamburger-menu" role="navigation" aria-label="Hamburger menu">
    <div class="searchbox" role="search" aria-label="Search">
        <form action="{{ '/search' | relative_url }}" id="searchthis" method="get" role="form" aria-label="Search form">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="search" id="search" name="query" placeholder="Search..." role="textbox" aria-label="Search textbox"/>
        </form>
    </div>
    <div class="doc-nav" role="navigation" aria-label="Site navigation">
        <ul class="menu" role="menu" aria-hidden="true" aria-label="Navigation menu">
            <li role="presentation" aria-label="Category name"><a href="{{ '/blog/' | relative_url }}" class="doc-link" role="link" aria-label="Blog">ブログ記事</a></li>
            <li role="presentation" aria-label="Category name"><a href="{{ '/docs/' | relative_url }}" class="doc-link" role="link" aria-label="Docs">団体概要</a>
                <ul class="sub-menu" role="menu" aria-hidden="true" aria-label="Navigation menu">
                {% for item in site.docs %}
                    <li role="menuitem" aria-label="Navigation menu item"><a href="{{ item.url | relative_url }}" class="doc-link" role="link" aria-label="{{ item.title }}">{{ item.title }}</a></li>
                {% endfor %}
                </ul>
            </li>
            <li role="presentation" aria-label="Category name"><a href="{{ '/special/' | relative_url }}" class="doc-link" role="link" aria-label="Special">特設ページ</a>
                <ul class="sub-menu" role="menu" aria-hidden="true" aria-label="Navigation menu">
                {% for item in site.special %}
                    <li role="menuitem" aria-label="Navigation menu item"><a href="{{ item.url | relative_url }}" class="doc-link" role="link" aria-label="{{ item.title }}">{{ item.title }}</a></li>
                {% endfor %}
                </ul>
            </li>
        </ul>
    </div>
</nav>
