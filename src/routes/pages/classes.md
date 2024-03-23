---
title: Classes
category: Classes & Skills
ord: 100
---

<script context="module">
  import BowClass from './components/bow-class.svelte';
  import ShieldClass from './components/shield-class.svelte';
  import SpearClass from './components/spear-class.svelte';
  import DarkClass from './components/dark-class.svelte';
</script>

<article class="flex-col">

<section class="flex-row">
    <label for="bow-class" class="class-icon icon hover-invert" data-class="bow"></label> 
    <label for="shield-class" class="class-icon icon hover-invert" data-class="shield"></label>
    <label for="spear-class" class="class-icon icon hover-invert" data-class="spear"></label>
    <label for="dark-class" class="class-icon icon hover-invert" data-class="dark"></label> 
</section>

<div class="w-full">
    <input id="bow-class" type="radio" name="class-selection" class="none" checked />
    <div class="toggled-content"><BowClass /></div>
</div>

<div class="w-full">
    <input id="shield-class" type="radio" name="class-selection" class="none" />
    <div class="toggled-content"><ShieldClass /></div>
</div>

<div class="w-full">
    <input id="spear-class" type="radio" name="class-selection" class="none" />
    <div class="toggled-content"><SpearClass /></div>
</div>

<div class="w-full">
    <input id="dark-class" type="radio" name="class-selection" class="none" />
    <div class="toggled-content"><DarkClass /></div>
</div>

</article>
