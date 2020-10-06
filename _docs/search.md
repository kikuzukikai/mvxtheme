---
layout: docs
title: サイト内検索
---

<form action="get" id="site_search">
  <label for="search_box">Search</label><input type="text" id="search_box">
  <input type="submit" value="search">
</form>

<ul id="results"></ul>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="/assets/js/search.js"></script>
<script src="/assets/js/lunr.min.js"></script>
