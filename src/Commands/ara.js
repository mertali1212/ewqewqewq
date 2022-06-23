const { MessageEmbed } = require("discord.js");
const {
  polisChannelID,
  meslekler,
  ambulansChannelID,
  yardımMerkeziChannelID,
} = require("../Configs/ecoConfig");
const ecoUserData = require("../Models/ecoUserData");

module.exports = {
  name: "ara",
  aliases: [],
  description: "Hesabım komutu ile ne kadar paranız var görüntüleyebilirsiniz.",
  guildOnly: true,
  async execute(message, args, bot) {
    const memberData = await ecoUserData.findOne({
      guildID: message.guild.id,
      userID: message.author.id,
    });

    const reason = args.slice(1).join(" ");

    const polisChannel = message.guild.channels.cache.get(polisChannelID);
    const ambulansChannel = message.guild.channels.cache.get(ambulansChannelID);
    const yardımMerkeziChannel = message.guild.channels.cache.get(
      yardımMerkeziChannelID
    );

    try {
      if (memberData.userAccount === false)
        return message
          .reply({
            content: `Geçersiz kullanım, polisi aramak için bir hesabının olması gerekiyor.`,
          })
          .catch(() => {
            return undefined;
          });

      let datas = memberData.userInventory.map((z) => z.Type);

      if (!datas.includes("Elektronik Market"))
        return message
          .reply({
            content: `Telefonun veya telsizin yok bu işlemi gerçekleştiremezsin.`,
          })
          .catch(() => {
            return undefined;
          });

      if (args[0] === "polis") {
        if (!reason)
          return message
            .reply({
              content: `Geçersiz kullanım, polisi aramak için bir neden belirtmelisin.`,
            })
            .catch(() => {
              return undefined;
            });

        const embed = new MessageEmbed()
          .setColor("RED")
          .setDescription(
            `${message.author} adlı kişi polisi arıyor! \n\nNedeni: ${reason}`
          );

        polisChannel
          .send({
            content: `<@&${meslekler.polis.roleID}>,`,
            embeds: [embed],
          })
          .catch(() => {
            return undefined;
          });

        message
          .reply({
            content: `Heyy! polisi aradın seninle ilgileneceklerdir.`,
          })
          .catch(() => {
            return undefined;
          });

        return;
      }

      if (args[0] === "ambulans") {
        if (!reason)
          return message
            .reply({
              content: `Geçersiz kullanım, ambulansı aramak için bir neden belirtmelisin.`,
            })
            .catch(() => {
              return undefined;
            });

        const embed = new MessageEmbed()
          .setColor("RED")
          .setDescription(
            `${message.author} adlı kişi ambulansı arıyor! \n\nNedeni: ${reason}`
          );

        ambulansChannel
          .send({
            content: `<@&${meslekler.doktor.roleID}>,`,
            embeds: [embed],
          })
          .catch(() => {
            return undefined;
          });

        message
          .reply({
            content: `Heyy! ambulansı aradın seninle ilgileneceklerdir.`,
          })
          .catch(() => {
            return undefined;
          });

        return;
      }

      if (args[0] === "yardım-merkezi") {
        if (!reason)
          return message
            .reply({
              content: `Geçersiz kullanım, yardım merkezini aramak için bir neden belirtmelisin.`,
            })
            .catch(() => {
              return undefined;
            });

        const embed = new MessageEmbed()
          .setColor("RED")
          .setDescription(
            `${message.author} adlı kişi yardım merkezini arıyor! \n\nNedeni: ${reason}`
          );

        yardımMerkeziChannel
          .send({
            content: `<@&${meslekler.doktor.roleID}>, <@&${meslekler.polis.roleID}>`,
            embeds: [embed],
          })
          .catch(() => {
            return undefined;
          });

        message
          .reply({
            content: `Heyy! yardım merkezini aradın seninle ilgileneceklerdir.`,
          })
          .catch(() => {
            return undefined;
          });

        return;
      }
    } catch (err) {
      message.reply({
        content: `Geçersiz kullanım, polisi aramak için bir hesabının olması gerekiyor.`,
      });

      return;
    }
  },
};
