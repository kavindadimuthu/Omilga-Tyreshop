import { React } from "react";

const users = [{"id":1,"full_name":"Leanor Waddell","first_name":"Gaétane","last_name":"Waddell","email":"lwaddell0@phoca.cz","ip_address":"168.111.218.24"},
{"id":2,"full_name":"Shannen Daens","first_name":"Léonie","last_name":"Daens","email":"sdaens1@sitemeter.com","ip_address":"70.7.32.175"},
{"id":3,"full_name":"Zara Sebley","first_name":"Jú","last_name":"Sebley","email":"zsebley2@constantcontact.com","ip_address":"121.121.21.133"},
{"id":4,"full_name":"Nonnah Persitt","first_name":"Faîtes","last_name":"Persitt","email":"npersitt3@quantcast.com","ip_address":"185.27.171.107"},
{"id":5,"full_name":"Stormi Rattray","first_name":"Stéphanie","last_name":"Rattray","email":"srattray4@wsj.com","ip_address":"113.106.12.21"},
{"id":6,"full_name":"Kip Jennins","first_name":"Torbjörn","last_name":"Jennins","email":"kjennins5@biglobe.ne.jp","ip_address":"102.55.9.108"},
{"id":7,"full_name":"Arlin Kless","first_name":"Stévina","last_name":"Kless","email":"akless6@google.com.br","ip_address":"11.48.31.65"},
{"id":8,"full_name":"Catina Kissell","first_name":"Tú","last_name":"Kissell","email":"ckissell7@geocities.com","ip_address":"86.198.115.34"},
{"id":9,"full_name":"Darla Gerckens","first_name":"Aloïs","last_name":"Gerckens","email":"dgerckens8@ow.ly","ip_address":"144.149.180.166"},
{"id":10,"full_name":"Cindra Gorham","first_name":"Mårten","last_name":"Gorham","email":"cgorham9@fotki.com","ip_address":"60.163.108.64"},
{"id":11,"full_name":"Kaitlyn Goodread","first_name":"Maïly","last_name":"Goodread","email":"kgoodreada@purevolume.com","ip_address":"55.21.95.52"},
{"id":12,"full_name":"Wendie Biddlestone","first_name":"Maïlis","last_name":"Biddlestone","email":"wbiddlestoneb@xrea.com","ip_address":"185.207.141.8"},
{"id":13,"full_name":"Pincus Guillou","first_name":"Märta","last_name":"Guillou","email":"pguillouc@china.com.cn","ip_address":"71.21.166.43"},
{"id":14,"full_name":"Talbert Kimmince","first_name":"Salomé","last_name":"Kimmince","email":"tkimminced@indiegogo.com","ip_address":"35.194.46.76"},
{"id":15,"full_name":"Reinaldos Gozzard","first_name":"Uò","last_name":"Gozzard","email":"rgozzarde@wired.com","ip_address":"178.255.163.26"},
{"id":16,"full_name":"Pat Brimilcome","first_name":"Pål","last_name":"Brimilcome","email":"pbrimilcomef@lulu.com","ip_address":"18.112.187.94"},
{"id":17,"full_name":"Kiley Ozintsev","first_name":"Agnès","last_name":"Ozintsev","email":"kozintsevg@webeden.co.uk","ip_address":"16.235.156.15"},
{"id":18,"full_name":"Gallagher Matteoni","first_name":"Régine","last_name":"Matteoni","email":"gmatteonih@oakley.com","ip_address":"239.48.140.80"},
{"id":19,"full_name":"Nickey Waliszek","first_name":"Mégane","last_name":"Waliszek","email":"nwaliszeki@apple.com","ip_address":"132.100.88.84"},
{"id":20,"full_name":"Sallyann Ripley","first_name":"Anaïs","last_name":"Ripley","email":"sripleyj@ning.com","ip_address":"38.184.142.192"},
{"id":21,"full_name":"Carilyn Abadam","first_name":"Estée","last_name":"Abadam","email":"cabadamk@amazon.com","ip_address":"171.171.135.209"},
{"id":22,"full_name":"Annora Kuscha","first_name":"Méthode","last_name":"Kuscha","email":"akuschal@apple.com","ip_address":"92.18.230.126"},
{"id":23,"full_name":"Trix Tumini","first_name":"Edmée","last_name":"Tumini","email":"ttuminim@istockphoto.com","ip_address":"232.196.73.130"},
{"id":24,"full_name":"Hatty Ivanchin","first_name":"Andréa","last_name":"Ivanchin","email":"hivanchinn@java.com","ip_address":"87.96.28.45"},
{"id":25,"full_name":"Page MacCart","first_name":"Sòng","last_name":"MacCart","email":"pmaccarto@abc.net.au","ip_address":"95.48.59.56"},
{"id":26,"full_name":"Cybil Dalli","first_name":"Maïlys","last_name":"Dalli","email":"cdallip@independent.co.uk","ip_address":"112.77.124.240"},
{"id":27,"full_name":"Elizabeth Armitt","first_name":"Eloïse","last_name":"Armitt","email":"earmittq@gnu.org","ip_address":"56.150.224.115"},
{"id":28,"full_name":"Samantha Trimby","first_name":"Håkan","last_name":"Trimby","email":"strimbyr@elpais.com","ip_address":"169.117.33.108"},
{"id":29,"full_name":"Rozina Avramovsky","first_name":"Tán","last_name":"Avramovsky","email":"ravramovskys@clickbank.net","ip_address":"17.6.229.199"},
{"id":30,"full_name":"Leshia Broomer","first_name":"Mén","last_name":"Broomer","email":"lbroomert@g.co","ip_address":"104.81.236.87"},
{"id":31,"full_name":"Alexine Cumo","first_name":"Kévina","last_name":"Cumo","email":"acumou@cdbaby.com","ip_address":"187.185.206.195"},
{"id":32,"full_name":"Leshia Pautard","first_name":"Geneviève","last_name":"Pautard","email":"lpautardv@phpbb.com","ip_address":"26.98.188.167"},
{"id":33,"full_name":"Carol Panons","first_name":"Uò","last_name":"Panons","email":"cpanonsw@globo.com","ip_address":"125.5.23.197"},
{"id":34,"full_name":"Giffard Daddow","first_name":"Cléopatre","last_name":"Daddow","email":"gdaddowx@icio.us","ip_address":"216.209.7.215"},
{"id":35,"full_name":"Bayard Redit","first_name":"Illustrée","last_name":"Redit","email":"bredity@youtube.com","ip_address":"123.3.158.144"},
{"id":36,"full_name":"Pansie Yateman","first_name":"Maïwenn","last_name":"Yateman","email":"pyatemanz@google.co.uk","ip_address":"20.1.64.242"},
{"id":37,"full_name":"Horatio Zollner","first_name":"Sòng","last_name":"Zollner","email":"hzollner10@phpbb.com","ip_address":"242.200.109.68"},
{"id":38,"full_name":"Lora Lown","first_name":"Célestine","last_name":"Lown","email":"llown11@cyberchimps.com","ip_address":"134.146.218.160"},
{"id":39,"full_name":"Linzy Matuszyk","first_name":"Stévina","last_name":"Matuszyk","email":"lmatuszyk12@opensource.org","ip_address":"21.72.235.61"},
{"id":40,"full_name":"Cori Barck","first_name":"Cléopatre","last_name":"Barck","email":"cbarck13@google.co.jp","ip_address":"228.205.87.98"},
{"id":41,"full_name":"Zara Whear","first_name":"Océane","last_name":"Whear","email":"zwhear14@craigslist.org","ip_address":"26.200.10.4"},
{"id":42,"full_name":"Sebastien Loftus","first_name":"Anaël","last_name":"Loftus","email":"sloftus15@meetup.com","ip_address":"43.215.232.176"},
{"id":43,"full_name":"Titos Breed","first_name":"Ophélie","last_name":"Breed","email":"tbreed16@virginia.edu","ip_address":"169.238.202.86"},
{"id":44,"full_name":"Marge Asel","first_name":"Mahélie","last_name":"Asel","email":"masel17@gizmodo.com","ip_address":"32.173.59.153"},
{"id":45,"full_name":"Aube Aleksankin","first_name":"Annotée","last_name":"Aleksankin","email":"aaleksankin18@cmu.edu","ip_address":"202.146.86.22"},
{"id":46,"full_name":"Haleigh Caverhill","first_name":"Méghane","last_name":"Caverhill","email":"hcaverhill19@trellian.com","ip_address":"178.16.245.251"},
{"id":47,"full_name":"Lucias Ransley","first_name":"Noémie","last_name":"Ransley","email":"lransley1a@issuu.com","ip_address":"20.16.84.129"},
{"id":48,"full_name":"Saba Northall","first_name":"Mélodie","last_name":"Northall","email":"snorthall1b@washingtonpost.com","ip_address":"238.8.240.242"},
{"id":49,"full_name":"Julianna Euesden","first_name":"Maëlla","last_name":"Euesden","email":"jeuesden1c@yelp.com","ip_address":"76.32.98.67"},
{"id":50,"full_name":"Amii Huffy","first_name":"Mélia","last_name":"Huffy","email":"ahuffy1d@bloglovin.com","ip_address":"253.246.164.179"}]





const getUsers = function(page, limit) {

    let array = [];

    for (let i = (page - 1) * limit; i < page * limit; i++) {
        array.push(users[i]);
    }

  return (array)
}

export default getUsers

export const getLength = function() {
  return users.length;
}