const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  //   console.log(e.key,e.code,e.which);
  //   console.log(e);
  insert.innerHTML = `<div class="key">
  ${e.key === " " ? "Space" : e.key.toUpperCase()}
  <small>Event.key</small>
</div>

<div class="key">
  ${e.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${e.code}
  <small>event.code</small>
</div>`;
});
