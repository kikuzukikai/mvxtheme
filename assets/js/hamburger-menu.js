/* Copyright (c) 2017 MvvmCross */var hamburgerMenu=openMenu("hamburger-menu");function openMenu(id){var element=document.getElementById(id);return function(){with(element.style){display=(display==="block")?"none":"block";}};}
$(document).click(function(){$('#hamburger-menu').hide();});
