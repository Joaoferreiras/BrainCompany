const { v4 } = require("uuid")
const { extname, resolve } = require("path")
const multer = require("multer")

module.exports = {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "uploads"),
    filename: (request, file, callback) => {
      return callback(null, v4() + extname(file.originalname))
    },
  }),
}
