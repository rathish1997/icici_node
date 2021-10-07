const fs = require('fs')
const mCrypto = require('crypto')
const axios = require('axios')



const testIciciEncryption = async ()=> {
//   let hh = {"AGGRID":"CUST0207","CORPID":"572507578","USERID":"VASANTHD","URN":"SR184416205","ACCOUNTNO":"190105000844"}
// // let hh = "hello"
//   let publicKey = mCrypto.createPublicKey(fs.readFileSync(__dirname + '/publicCertificate.crt'))
//   let binaryDataa = Buffer.from(JSON.stringify(hh))
//   let encryptedMessages = mCrypto.publicEncrypt({key:publicKey,padding:mCrypto.constants.RSA_PKCS1_PADDING},binaryDataa).toString('base64')
//   console.log("encryptedMessages",encryptedMessages)
// // let encryptedText = 'LDuIhv/Mrr85cyrPIxsD83yjTMIbVhS2pqGslBXYToZZlf3lYg13KeEOQL4pGiPi4L7j4oHhBhWEQ28N75LCDZsQdtEStUo09y8Fe15/iHczQgfI8xTjtrVdKNzVJtEtk3QNEnqRsjasvfDuacF4qX7PaaA9cDPJWlKxn98FZa2QE4S+EWfMvmrkFU7mNTB/hbs8ad3cNZ8DAX2bc1+wxOtLuZESxt3VPGWx2BmdG3T9uZIyVlLp0DJqTwWrIfTebiFn/vfzn9ltOmInJfEtNlvZs1/PQGanOFDODJjfoGTczHDxFJI7qlUAN2DCs//ff9iTUjvNR4Fo8jwfAFsRtqIFnZUDmpAhP/SLuufxTjKMw59QD6a+DKJgbHkTSShm189byf9Mq9Q6MSLgo/Gz8dijwvny1n9IYJk0PgBD4V+dUx6g2iPshEnnZEitYVegnjJbqqhUX2hmgvv/KfTUBrgowpzBNKI4zLkUKKmTBlKGLZHdAfUKZLltMvcSPWxhS6HhMxgEajNa2A6mefUVO/VlBJGfKh0FaJzV9YrMhYoQr59JVrwbgn1Ww5Tae9M65EjH2Q3tV+V5OBOlm6CLN2goedGmwm+lm+4r+ljrwUPqP+lMv/L1NEjEFt0S/GuqjnV9QiWWf7SwO72YWQhjPOrMVGwbwobimzFh63X9AF0='
//
//
// //decrypt
//   let encryptedMessage = "se3sU5RUGceQxxFDyoqG4Y1IAIeikINojcMQzvFQ6vBLFG8rdjOyxpyDGdhGxKRVHKIJy0yA1JUbZgsVt5gBy4Wm770LpGiDw6MOye51CzSUwKoYtXc2apgNZtsMKiocfQivb7PjgygaHV5pJO0gUlAmUzDuRhRzdS+M8uZVZmF63EcXr6sR/2zCK9iMFL+TYArPJ8wDu+BYB4cXkVfEt5UZSQGaxaihiR78dbpiY+jJ91tjXbt80ctNcRGMDT4gP2mxBkvF+mLiSpsjfNKj+4cek3gljmwkjxdstpzpzzQ5UcRLH2rzkIbwZlNmbqSUXxWWr1VddL+JB3VneWZtjvIpcn6sPN6OxLxWNWaNVjJRe39t3gR3S/PsX1Hm8ug4GTuDTf/7sGYkbCzT0JlmCQp2q0AlAovC65C6tgxe7tIJyaWiTTinJb8RYCHTWNGBB8796FUN2wXmFCnQwS0DHf5QSLhhcsKuHpjGB3S2xOFZQC8zoxZckoHHwG8j30LTwLNy6qIMnSiEt+Op9JyAOalU0HyUsjYY0BbF01ybv1UIDDzJUp8jDhJ9czURep5/zqrwFq94ykuZbABgOgjEbbjtX103IX3FvUHfhfXmp+lLR7CZfGIrIlDQ6eDPkqJEoaRCcNXei+Kd9BeG/4aKHP6OT6O7pRoMaPmVDg9swXw="
// //let sampleEcncryptedMessage = "PlbSfzPD4ovY7N8svl9yrKhalrXJvbJXPcc198FWKQtyZQEPoZ7EkYUWt+s1iK4selBbQGfWPgaWvdGkg2wDgq8hg6jwAteTAP6tzMj9sajzfAEh6k56RiJI7pxAsFL9E9CyJigRez6sD7YPtMPHWPzxlZ60WVxT1bjmE111j4c4hRhgoM1Opbd46TbA0pGUukN8cc3DFBs0JfMhkXayhSJpihywKOVoJ35FaiSdgRx5fBNwnU6lYDY8EGp3UHEnCUsqYG9k7j0NZaTQK3A0ayX9C2zmoKkt34nEpMIgqQIyXBFUe6DA15uCAjiXXmg5rOcP1NBvYSnpZdfFC4G4FrW9di+c19gkIxZyuQEREYsJWe31Q54savoBzIep30pwaA7VlI8h6r+SjbTWZxw34//gku0Lsq4VGhbM6f/05xQvu3K44vJ3uxXxT6aD9BQ0xwcpqoF4jdc6bYIQgnKnKfT7HqKMGf+yk9tC+q9nvsu3hxNQ7BGLkZMfNRtHT9EHUoMxZCOtb5LiLG24KRnehiMRT2wvT9Rle2VOMbr4CM2C/OBcxqFWt4OXjltGSKtbTDjizsIffM3UslWLV52pXDJTOr/ybfrPXUOsSJGglTO7Z+D4Oi5nH/JNX+M1jVMm2Avg21fPDt9ugJcgZb+tJbVm/gJiQ1UQAtNHTcUpq0w="
//   let privateKey = mCrypto.createPrivateKey(fs.readFileSync(__dirname + '/collectionsPublicCertificate.key'))
//   let binaryData = Buffer.from(encryptedMessages,"base64");
//   let decryptedMessage = mCrypto.privateDecrypt({key:privateKey,padding:mCrypto.constants.RSA_PKCS1_PADDING},binaryData).toString()
//   console.log(decryptedMessage)

  let apiResponse  = await axios.post('https://apigwuat.icicibank.com:8443/api/Corporate/CIB/v1/BalanceInquiry',"bdel0nvEXJZz+JfL0yh+7Fu3FbY8tShl7BWmHBLjVUfQSnWBH13bzqer1HEz6qMBiPnrRjSAKXhRocykuuO/ANVH1MW0YZTEdNKgF/Xmzj+GYMeOl/lxrhp/1cRzmEyTs2Zte6PA8HG/2uDzsFGEqjRNJ1IyhZB+xCt3zHWzpIbPsg8UyqkyPSrh0RMVlJjeaehO36U5onjuJfMv8eSN+8M6yVXUqfa9p580447b5hxcpkycAVjSHTcHv+2omi8Tsb2tpGhZ/ypgjk24WTHByPo3LWKa6rwhVrtzY+vSFXOs+nMhkiXSC9qUIOM91ZpV+TCzq7tsg2iWXyG1CmaIA0rotOjpq6u7vK/W/itgvsLwvtJStoaRZ96Ezj1Eqqy5PI4LPq2XW0Rk29UJRbslXAVdwCKYRbtYZKoTVoCb55CvaEvnCdDC3/fj4hzCO15U9yJ4AZ4cWk4FfHravS4VOWqSZt3S4iB9naql5ixEBS9zSQgg8Nm/O3vhOkDabtjTNs7AtOH63MrDrSj4Ipi4B/Xcpd2ctA9zCAKMoOFQBEuCmR/Hm50kRJZmI6EYACwgnaUjrqzVM4r+TGj5+QE4mlntU4sFDPGPAtMTjU58Y7RQnu8W6YFmfGgzxBpY9gmFT+piiM0mO3TBrnjZA1AdgE2cSGaRqEAplATYdcdo+Qo=",
    {headers:{apikey:""}})
}

testIciciEncryption()