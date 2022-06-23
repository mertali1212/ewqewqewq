module.exports = {
  guildID: "SUNUCU ID",
  başlangıçMoney: 5000,
  telefonChannelID: "TELEFON KANAL ID",
  ambulansChannelID: "AMBULANS KANAL ID",
  polisChannelID: "POLIS KANAL ID",
  yardımMerkeziChannelID: "YARDIM MERKEZI KANAL ID",
  ownerRolesID: ["SUNUCU OWNER ROL ID"],

  // meslek ve görev rol id kısmı
  meslekler: {
    devletBaşkanı: {
      roleID: "ID",
    },
    şerif: {
      roleID: "ID",
    },
    polis: {
      roleID: "ID",
    },
    doktor: {
      roleID: "ID",
    },
    hakim: {
      roleID: "ID",
    },
    savcı: {
      roleID: "ID",
    },
    baron: {
      sellerRoleID: "ID",
      officerRoleID: "ID",
    },
    galerici: {
      sellerRoleID: "ID",
      officerRoleID: "ID",
    },
    elektronikçi: {
      sellerRoleID: "ID",
      officerRoleID: "ID",
    },
    emlakçı: {
      sellerRoleID: "ID",
      officerRoleID: "ID",
    },
    banka: {
      officerRoleID: "ID",
    },
  },

  // market özelleştireme kısmı
  galeriMarket: [
    {
      ID: "1",
      Name: "Mercedes-Benz",
      Description: "Bu bir test1 ürünüdür",
      Price: 10000,
      Type: "Araba Market",
    }, // Çoğaltılabilir
  ],

  elektronikMarket: [
    {
      ID: "1",
      Name: "APPLE",
      Description: "Bu bir test1 ürünüdür",
      Price: 10000,
      Type: "Elektronik Market",
    }, // Çoğaltılabilir
  ],

  emlakMarket: [
    {
      ID: "1",
      Name: "Ev 1+1",
      Description: "Bu bir test1 ürünüdür",
      Price: 10000,
      Type: "Emlak Market",
    }, // Çoğaltılabilir
  ],

  blackMarket: [
    {
      ID: "1",
      Name: "Black-1",
      Description: "Bu bir test1 ürünüdür",
      Price: 10000,
      Type: "Black Market",
    }, // Çoğaltılabilir
  ],

  uyusturucuMarket: [
    {
      ID: "1",
      Name: "Uyuşturucu-1",
      Description: "Bu bir test1 ürünüdür",
      Price: 10000,
      Type: "Uyuşturucu Market",
    }, // Çoğaltılabilir
  ],
};
