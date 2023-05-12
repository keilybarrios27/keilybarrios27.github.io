let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy programadora web junior en TecnoloChicas Pro, me gusta aprender cosas nuevas y Python es mi relación tóxica de amor odio.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
