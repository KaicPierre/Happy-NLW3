const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
 // inserir dados na tabela
  /*await saveOrphanage(db, {
    lat: "-23.5525197",
    lng: "-46.6485383",
    name: "Lar dos meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "00000000",
    images: [
        "https://images.unsplash.com/photo-1582167371270-68a4c033e732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

        "https://images.unsplash.com/photo-1599663253731-78db8b4d68ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours:"Horário de Visita Das 18h até as 8h",
    open_on_weekends: "0"
  });*/

  
  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consultar somente 1 orfanato, pelo id
  //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  //console.log(orphanage);

  //deletar dado da tabela
  //console.log(await db.run("DELETE FROM orphanages WHERE id ='1'"))
});
