function Random_img() {
    const img = [
        "https://api.gbif.org/v1/image/unsafe/1500x750/http:%2F%2Fimages.ctfassets.net%2Fuo17ejk9rkwj%2F1xnqES81C6w2W9WbcKEMxb%2F0d1e05a6d28e95a57783d6d62f1ad3be%2Fimage.png",
        "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https://paininthearsenal.com/wp-content/uploads/getty-images/2017/07/1141847104.jpeg",
        "https://transfery.info/img/photos/80967/1500xauto/hakim-ziyech.jpg",
        "https://i.guim.co.uk/img/media/1b8e6e0f5ad822a7fa2d4d9854f8c9e546e67d4b/0_148_5342_3206/master/5342.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9b2e53fab9c1bc7120d674590e69e56b",
        "https://www.planetsport.com/image-library/og/1600/h/hakim-ziyech-chelsea-26-oct-2021.jpg",
        "https://www.foot01.com/img/images/1200x/2023/Jan/31/hakim-ziyech-passe-sa-visite-medicale-avec-le-psg-icon_sipausa_43720585-356447.jpg",
        "https://cdn.modernghana.com/images/content/1022202060530-8eu2xkjwvr-hakim-ziyech-201017-inaction-g-1050.jpg",
      ];
      const b = setInterval(function () {
        const random = Math.floor(Math.random() * 7);
        document.querySelector(
          ".header .card.text-bg-dark .card-img"
        ).src = `${img[random]}`;
      }, 2000);
      clearInterval(b);
}

export default Random_img;