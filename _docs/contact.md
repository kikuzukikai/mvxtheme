---
layout: docs
title: お問い合わせフォーム
---
匿名でのお問い合わせにもお答えできるようになりました。

原則、匿名でのお問い合わせとその回答はこのページに公開いたします。

非公開または返信を希望される場合はメールアドレス欄に返信先を記入いただくか、[トップページ]({{ site.url }})掲載のアドレス(contact@kikuzuki<span class="obfuscate">-</span>kai.org)にメールをお送りください。

また、お問い合わせの内容によっては回答までにお時間を頂く場合がございますので、予めご了承ください。
<div align="center">
<form name="contact" method="POST" netlify-honeypot="subject" netlify>
  <!--  Email -->
  <div class="form-group">
    <input class="controls" type="email" name="email" placeholder="メールアドレス" />
  </div>
  <!--  Subject -->	
  <div class="form-group hidden">	
    <input class="controls" type="text" name="subject" placeholder="件名" />
  </div>
  <!--  Message -->
  <div class="form-group">
    <textarea class="controls" name="message" placeholder="メッセージ" rows="3" required=""></textarea>
  </div>
  <button type="submit" class="btn btn-primary">送信</button>
</form>
</div>
