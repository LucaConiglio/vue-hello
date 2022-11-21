const { createApp } = Vue;
const inputvalue = document.querySelector(".input-el")

createApp({
    // data: function () {}
    data () {
      // la funzione data deve SEMPRE ritornare un oggetto
      return {
        titolo : "Primo esercizio in Vue",
        h1red : "titolo",
        fullScreen : "full",
        resizing : "resizing",
        boxImg : "boxImg",
        altImg : "uomo al computer",
        immagine : "https://s3-eu-central-1.amazonaws.com/social-academy-blog/wp-content/uploads/2017/03/8-modi-per-diventare-migliore-programmatore-social-academy-2_720.jpg",
        inputEl : "input-el",
        pick : "https://i.gifer.com/8D8q.gif"
      };
    },
    methods: {}
  }).mount("#app")