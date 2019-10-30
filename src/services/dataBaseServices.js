import fs from 'fs'

const storageServices = {

  getGames () {
    return new Promise((resolve, reject) => {
      fs.readFile('./stubs/games.json', { encoding: 'utf-8' }, function (err, data) {
        if (!err) {
          resolve(data)
        } else {
          reject(err)
        }
      })
    })
  }
}

export default storageServices
