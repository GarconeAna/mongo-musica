const mongoose = require('mongoose');

function Conn(url, porta, banco) {
  mongoose.connect(`mongodb+srv://dbUser:IY1B8jxBBc7NiZLo@bluenode.ccrfh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("MongoDB connected");
  }).catch((err) => {
    console.log(err);
  });
}

module.exports = Conn;
