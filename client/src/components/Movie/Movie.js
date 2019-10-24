import React from 'react';

import './Movie.css'

const Movie = (props) => {
  return (
    <div className="w-full">
      <div className="video-container">
        <iframe
          className="down"
          width="1280"
          height="720"
          allow="autoplay"
          allowfullscreen="true"
          src="https://www.youtube.com/embed/TcMBFSGVi1c"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen">
        </iframe>
      </div>
      <div className="flex pt-5 pb-2 text-white text-2xl xl:text-4xl font-normal">
        Avengers: Endgame - Official Trailer
      </div>
      <div>
        <div className="flex text-clone4 text-base xl:text-xl font-normal">
          2018
        </div>
        <div className="flex text-clone4 text-base xl:text-xl font-normal">
          120 Görüntülenme
        </div>
      </div>
      <div className="flex mt-12 justify-between">
        <div className="flex text-clone4 text-sm md:text-2xl font-normal text-justify mr-4">
          "Avengers Infinity War"un ardından pek çok süper kahraman küle dönüşmüştür. Doktor Strange, Gamora, Drax, Mantis, genç Örümcek Adam, Black Panther, Bucky Barnes, Groot, Scarlet Witch, Vision, Star Lord, Maria Hill, The Wasp ve Nick Fury gibi pek çok kahraman, Thanos'un Sonsuzluk Eldiveni'ni ele geçirmesi ve kendi dengesini kurması yüzünden yok olmuştur ve dünya umutsuz haldedir. Dünya üzerinde kalan Black Widow, Kaptan Amerika, Thor ve Hulk kendi yaslarını tutmaktayken, Iron ve Nebula ise kontrol edemedikleri bir uzay gemisinin içinde, uzay boşluğunda sürüklenmektedirler. Süper kahramanlar takımı için işler pek de iyi görünmemektedir. Ancak Kuantum Bölgesi'nden çıkmanın bir yolunu bularak Avengers ekibinin kalan üyelerine giden Ant-Man, yeni bir umut ışığı olacaktır. Daha önce var olduğunu bilmedikleri bölgeler, kahramanlar ve evrenlerin varlığını öğrenen ekip, Thanos'un kurduğu bu çarpık dengeyi değiştirmek ve kendilerinden alınanı geri getirmek için hayatlarının en büyük mücadelesine girişeceklerdir. Hepsi kişisel olarak önem verdikleri şeyleri kaybetmiş olan kahramanlarımız için intikam vakti gelmiştir.
      </div>
        <div className="flex">
          <img className="movie-description" src="https://img04.mgo-images.com/image/thumbnail?id=MMVAF76018A477C2826A4EC8747C40B7BE27&ql=70&sizes=310x465"></img>
        </div>
      </div>
    </div>
  );
}

export default Movie;