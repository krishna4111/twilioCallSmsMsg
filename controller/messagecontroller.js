require('dotenv').config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

exports.sendWhatsApp= async (req,res)=>{
    try{
        const{text}=req.body;
        console.log('text>>',text);
      const result=await  client.messages
        .create({
           from: 'whatsapp:+14155238886',
           body: `${text}`,
           to: 'whatsapp:+15005550006'
         })
         console.log(`message send : ${result.sid}`);
        return res.status(200).json({success:'true',reply:'message send successfully'});

        
    }
    catch(err){
        console.log(`Error on sending message: ${err}`);

    }
   
}

exports.sendSMS=async (req,res)=>{
  try{
    const{sms}=req.body;
   const message=await client.messages
    .create({
       body: `${sms}`,
       from: '+12565738498',
       to: '+919003282420'
     })
   console.log(`sms sended :${message.sid}`);
   return res.status(200).json({success:'true',msg:"sms sended"})
  }
  catch(err){
    console.log(`error : ${err}`);
    
  }
    
  
}


exports.makeCall=async (req,res)=>{
  try{
    const call=await client.calls
    .create({
       twiml: '<Response><Say>Ahoy, World!</Say></Response>',
       to: '+919003282420',
       from: '+12565738498'
     })
    console.log("call sended",call.sid);
    return res.status(200).json({success:"true",msg:"call sended"});
  }
  catch(err){
      console.log(err);
  }
  
}



//module.exports=sendWhatsApp;

