const { ForgeClient, LogPriority } = require("@tryforge/forgescript");
const { QuorielDB } = require("@nationdex/qdb");
require("dotenv").config();

const db = new QuorielDB({
    events: [
        "databaseConnect",
        "recordUpdate",
        "recordRemove"
    ]
});

const client = new ForgeClient({
    intents: [
        "Guilds",
        "GuildMembers",
        "GuildModeration",
        "GuildEmojisAndStickers",
        "GuildIntegrations",
        "GuildWebhooks",
        "GuildInvites",
        "GuildVoiceStates",
        "GuildPresences",
        "GuildMessages",
        "GuildMessageReactions",
        "GuildMessageTyping",
        "DirectMessages",
        "DirectMessageReactions",
        "DirectMessageTyping",
        "MessageContent",
        "GuildScheduledEvents",
        "AutoModerationConfiguration",
        "AutoModerationExecution",
        "GuildMessagePolls",
        "DirectMessagePolls"
    ],
    events: [
        "autoModerationActionExecution",
        "autoModerationRuleCreate",
        "autoModerationRuleDelete",
        "autoModerationRuleUpdate",
        "channelCreate",
        "channelDelete",
        "channelPinsUpdate",
        "channelUpdate",
        "clientReady",
        "debug",
        "emojiCreate",
        "emojiDelete",
        "emojiUpdate",
        "entitlementCreate",
        "entitlementDelete",
        "entitlementUpdate",
        "error",
        "guildAuditLogEntryCreate",
        "guildAvailable",
        "guildBanAdd",
        "guildBanRemove",
        "guildCreate",
        "guildDelete",
        "guildIntegrationsUpdate",
        "guildMemberAdd",
        "guildMemberAvailable",
        "guildMemberRemove",
        "guildMemberUpdate",
        "guildScheduledEventCreate",
        "guildScheduledEventDelete",
        "guildScheduledEventUpdate",
        "guildScheduledEventUserAdd",
        "guildScheduledEventUserRemove",
        "guildSoundboardSoundCreate",
        "guildSoundboardSoundDelete",
        "guildSoundboardSoundUpdate",
        "guildUnavailable",
        "guildUpdate",
        "interactionCreate",
        "inviteCreate",
        "inviteDelete",
        "messageCreate",
        "messageDelete",
        "messageDeleteBulk",
        "messagePollVoteAdd",
        "messagePollVoteRemove",
        "messageReactionAdd",
        "messageReactionRemove",
        "messageReactionRemoveAll",
        "messageReactionRemoveEmoji",
        "messageUpdate",
        "presenceUpdate",
        "roleCreate",
        "roleDelete",
        "roleUpdate",
        "shardDisconnect",
        "shardError",
        "shardReady",
        "shardReconnecting",
        "shardResume",
        "stageInstanceCreate",
        "stageInstanceDelete",
        "stageInstanceUpdate",
        "stickerCreate",
        "stickerDelete",
        "stickerUpdate",
        "subscriptionCreate",
        "subscriptionDelete",
        "subscriptionUpdate",
        "threadCreate",
        "threadDelete",
        "threadMemberUpdate",
        "threadUpdate",
        "typingStart",
        "userUpdate",
        "voiceChannelEffectSend",
        "voiceServerUpdate",
        "voiceStateUpdate",
        "webhooksUpdate"
    ],
    extensions: [
        db
    ],
    prefixes: [
        "+"
    ],
    logLevel: LogPriority.High
});

db.commands.load('./handlers/db');
client.functions.load('./functions');
client.commands.load('./handlers/core');
client.applicationCommands.load('./commands');

client.login(process.env.TOKEN);