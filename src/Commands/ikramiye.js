const { MessageEmbed } = require("discord.js");
const { meslekler } = require("../Configs/ecoConfig");
const ecoUserData = require("../Models/ecoUserData");

module.exports = {
  name: "ikramiye",
  aliases: [],
  description: "Hesabım komutu ile ne kadar paranız var görüntüleyebilirsiniz.",
  guildOnly: true,
  async execute(message, args, bot) {
    const roles = [
      meslekler.devletBaşkanı.roleID,
      meslekler.doktor.roleID,
      meslekler.elektronikçi.sellerRoleID,
      meslekler.emlakçı.sellerRoleID,
      meslekler.galerici.sellerRoleID,
      meslekler.hakim.roleID,
      meslekler.polis.roleID,
      meslekler.savcı.roleID,
      meslekler.şerif.roleID,
      meslekler.baron.sellerRoleID,
    ];

    const members = message.guild.members.cache.filter((x) =>
      roles.some((c) => x.roles.cache.has(c))
    );

    const money = Number(args[1]);

    if (!ownerRolesID.some((x) => message.member.roles.cache.has(x))) return;

    if (args[0] === "herkese") {
      if (!money)
        return message
          .reply({
            content: `Geçersiz kullanım, bir miktar belirtmen gerekiyor.`,
          })
          .catch(() => {
            return undefined;
          });

      if (money < 0)
        return message
          .reply({
            content: `Geçersiz kullanım, belirtiğin para miktarı pozitif bir sayı değil.`,
          })
          .catch(() => {
            return undefined;
          });

      if (members.size === 0)
        return message
          .reply({
            content: "Mesleğe sahip kişi olmadığı için ikramiye verilmedi.",
          })
          .catch(() => {
            return undefined;
          });

      members.forEach(async (member) => {
        await ecoUserData.findOneAndUpdate(
          { guildID: message.guild.id, userID: member.id },
          { $inc: { userMoney: money } },
          { upsert: true }
        );

        await ecoUserData.findOneAndUpdate(
          { guildID: message.guild.id, userID: member.id },
          {
            $push: {
              userNotification: [
                {
                  Type: "İkramiye",
                  Reason: `\`${money}\` dolar ikramiye geldi.`,
                },
              ],
            },
          },
          { upsert: true }
        );
      });

      const embed = new MessageEmbed()
        .setAuthor({
          name: message.guild.name,
          iconURL: message.guild.iconURL({ dynamic: true }),
        })
        .setColor("RANDOM")
        .setDescription(
          `Mesleklere sahip herkese \`${money.toLocaleString()}\` dolar ikramiye verilmiştir iyi kullanımlar dileriz. \n\nMesleğe Sahip Kişi Sayısı: (\`${
            members.size
          }\`)`
        );

      message.reply({ embeds: [embed] }).catch(() => {
        return undefined;
      });
    }
  },
};
