import React from 'react';

const MovieDescription = (props) => {
  return (
    <div className="flex mt-12 justify-between">
      <div className="flex w-7/12 text-clone4 text-3xl font-normal">
        "Avengers Infinity War"un ardından pek çok süper kahraman küle dönüşmüştür. Doktor Strange, Gamora, Drax, Mantis, genç Örümcek Adam, Black Panther, Bucky Barnes, Groot, Scarlet Witch, Vision, Star Lord, Maria Hill, The Wasp ve Nick Fury gibi pek çok kahraman, Thanos'un Sonsuzluk Eldiveni'ni ele geçirmesi ve kendi dengesini kurması yüzünden yok olmuştur ve dünya umutsuz haldedir. Dünya üzerinde kalan Black Widow, Kaptan Amerika, Thor ve Hulk kendi yaslarını tutmaktayken, Iron ve Nebula ise kontrol edemedikleri bir uzay gemisinin içinde, uzay boşluğunda sürüklenmektedirler. Süper kahramanlar takımı için işler pek de iyi görünmemektedir. Ancak Kuantum Bölgesi'nden çıkmanın bir yolunu bularak Avengers ekibinin kalan üyelerine giden Ant-Man, yeni bir umut ışığı olacaktır. Daha önce var olduğunu bilmedikleri bölgeler, kahramanlar ve evrenlerin varlığını öğrenen ekip, Thanos'un kurduğu bu çarpık dengeyi değiştirmek ve kendilerinden alınanı geri getirmek için hayatlarının en büyük mücadelesine girişeceklerdir. Hepsi kişisel olarak önem verdikleri şeyleri kaybetmiş olan kahramanlarımız için intikam vakti gelmiştir.
      </div>
      <div className="flex">
        <img className="w-full h-auto" src="https://img04.mgo-images.com/image/thumbnail?id=MMVAF76018A477C2826A4EC8747C40B7BE27&ql=70&sizes=310x465"></img>
      </div>
    </div>
  );
}

export default MovieDescription;