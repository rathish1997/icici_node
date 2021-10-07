const fs = require('fs')
const mCrypto = require('crypto')
const axios = require('axios')



const testIciciEncryption = async ()=> {
  let hh = {"AGGRID":"CUST0207","CORPID":"575731824","USERID":"VASANTHD","URN":"SR184416205","ACCOUNTNO":"190105000963"}
// let hh = "hello"
  let publicKey = mCrypto.createPublicKey(fs.readFileSync(__dirname + '/publicCertificate.crt'))
  let binaryDataa = Buffer.from(JSON.stringify(hh))
  let encryptedMessages = mCrypto.publicEncrypt({key:publicKey,padding:mCrypto.constants.RSA_PKCS1_PADDING},binaryDataa).toString('base64')
  console.log("encryptedMessages",encryptedMessages)
// let encryptedText = 'LDuIhv/Mrr85cyrPIxsD83yjTMIbVhS2pqGslBXYToZZlf3lYg13KeEOQL4pGiPi4L7j4oHhBhWEQ28N75LCDZsQdtEStUo09y8Fe15/iHczQgfI8xTjtrVdKNzVJtEtk3QNEnqRsjasvfDuacF4qX7PaaA9cDPJWlKxn98FZa2QE4S+EWfMvmrkFU7mNTB/hbs8ad3cNZ8DAX2bc1+wxOtLuZESxt3VPGWx2BmdG3T9uZIyVlLp0DJqTwWrIfTebiFn/vfzn9ltOmInJfEtNlvZs1/PQGanOFDODJjfoGTczHDxFJI7qlUAN2DCs//ff9iTUjvNR4Fo8jwfAFsRtqIFnZUDmpAhP/SLuufxTjKMw59QD6a+DKJgbHkTSShm189byf9Mq9Q6MSLgo/Gz8dijwvny1n9IYJk0PgBD4V+dUx6g2iPshEnnZEitYVegnjJbqqhUX2hmgvv/KfTUBrgowpzBNKI4zLkUKKmTBlKGLZHdAfUKZLltMvcSPWxhS6HhMxgEajNa2A6mefUVO/VlBJGfKh0FaJzV9YrMhYoQr59JVrwbgn1Ww5Tae9M65EjH2Q3tV+V5OBOlm6CLN2goedGmwm+lm+4r+ljrwUPqP+lMv/L1NEjEFt0S/GuqjnV9QiWWf7SwO72YWQhjPOrMVGwbwobimzFh63X9AF0='


//decrypt
//   let encryptedMessage = "WqQNnE8OYT6iCyLKxZlss/zQf5ke0qGNXxsmrM2QbqQUAg2zpWWT6n1ha754wIfalhlJIckmGQqXI2VQNV8Pcd0dEmOvJn3ddYphd4C8HNA7sSdFXRhH6FU6qPS5bIi9CEC1V7+yPSnXDKbxuSfyl/xyfptF6x9YTIqtkVlCbsebCM+3APHQDdx9nSvYrAoulBezhOD/FjXXm3JJay2gk5OZTw3RmragM7zWnySQLZjbq/I9emOCibCLDiobQQKEFkNLF4xHxI8fR/mVJ5ktK21XVUxdnkq92SvquT1aDmitm5I/v4fy/+GaXhHMQ89DDONgwjBNUu8AmhnO31xusqJ6aVA7ow6IrBcVgBmKxYr91y08mWt/fBW1n379gMNAtZLt3D484vT6pxZvwbz6X8x40aL2+dCRkC33KC3scMvBZE5ydkIT7B4p6U2rdzpXBs/WG50JwERt4CPpb4dtVdrJQyJ6yiSZ1STshPsrL0Fo/r73GpWLcPheg+e1YbWI51Yu5bZ04JG/dxFwRzM1DtyhS7GDbmRVcgyGXTHniWSSPy0/4KRzGhlrt+1/TR2pt41mDW19dFcO37j0UmcVwmaYr4WfaaJunZBiM+ASr/qUxlmkyFtexjziwvLFpMzZcQSuobI2/zxZ/rxI/0qUrU4geC0xW9XNr9YmpW1bgffo="
// //let sampleEcncryptedMessage = "PlbSfzPD4ovY7N8svl9yrKhalrXJvbJXPcc198FWKQtyZQEPoZ7EkYUWt+s1iK4selBbQGfWPgaWvdGkg2wDgq8hg6jwAteTAP6tzMj9sajzfAEh6k56RiJI7pxAsFL9E9CyJigRez6sD7YPtMPHWPzxlZ60WVxT1bjmE111j4c4hRhgoM1Opbd46TbA0pGUukN8cc3DFBs0JfMhkXayhSJpihywKOVoJ35FaiSdgRx5fBNwnU6lYDY8EGp3UHEnCUsqYG9k7j0NZaTQK3A0ayX9C2zmoKkt34nEpMIgqQIyXBFUe6DA15uCAjiXXmg5rOcP1NBvYSnpZdfFC4G4FrW9di+c19gkIxZyuQEREYsJWe31Q54savoBzIep30pwaA7VlI8h6r+SjbTWZxw34//gku0Lsq4VGhbM6f/05xQvu3K44vJ3uxXxT6aD9BQ0xwcpqoF4jdc6bYIQgnKnKfT7HqKMGf+yk9tC+q9nvsu3hxNQ7BGLkZMfNRtHT9EHUoMxZCOtb5LiLG24KRnehiMRT2wvT9Rle2VOMbr4CM2C/OBcxqFWt4OXjltGSKtbTDjizsIffM3UslWLV52pXDJTOr/ybfrPXUOsSJGglTO7Z+D4Oi5nH/JNX+M1jVMm2Avg21fPDt9ugJcgZb+tJbVm/gJiQ1UQAtNHTcUpq0w="
//   let privateKey = mCrypto.createPrivateKey(fs.readFileSync(__dirname + '/collectionsPublicCertificate.key'))
//   let binaryData = Buffer.from(encryptedMessages,"base64");
//   let decryptedMessage = mCrypto.privateDecrypt({key:privateKey,padding:mCrypto.constants.RSA_PKCS1_PADDING},binaryData).toString()
//   console.log(decryptedMessage)

  let apiResponse  = await axios.post('https://api.icicibank.com:8443/api/Corporate/CIB/v1/BalanceInquiry',encryptedMessages,
    {headers:{apikey:"a42e15f1fe7343319db0f4068a8a373a"}})
  console.log("apiResponse---",apiResponse)
  
}

testIciciEncryption()