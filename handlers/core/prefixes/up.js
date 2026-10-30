module.exports = { 
    name: "up",
    type: "messageCreate",
    code: `
    $onlyForUsers[You are not allowed to use this command!;$botOwnerID]
    $updateApplicationCommands
    $updateCommands
    All the commands have been updated!✅️
    `
}