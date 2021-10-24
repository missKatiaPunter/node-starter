// Task B05
// Extract, reformat and prepare the user’s test message data (illustrated below)
// into a suitable, ‘optimised’ (i.e., minimal fields used) single SQL ‘INSERT’ instruction
// that results in the insertion and correct relationship of each of the specified messages to
// their owner ensuring you also appropriately set the message’s initial archive state (where outlined in the test data).  

const insertMessages = `
INSERT INTO "Messages"(
    message,
    userid,
    archive)
    VALUES
    ("Always bear in mind that your own resolution to success is more important than any other one thing.", 1000, 0),
    ("An unexamined life is not worth living.", 1010, 0);
`
module.exports = { insertMessages };