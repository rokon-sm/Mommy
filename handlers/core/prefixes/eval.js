module.exports = { 
    name: "e",
    type: "messageCreate",
    code: `
    $onlyForUsers[You are not allowed to use this command!;$botOwnerID]
    $eval[$message]
    `
}