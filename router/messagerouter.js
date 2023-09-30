const express=require('express');
const router=express.Router();
const Message=require('../controller/messagecontroller');

router.post('/sendWhatsAppMessage', Message.sendWhatsApp);
router.post('/sendSMS', Message.sendSMS);
router.post('/makeaCall',Message.makeCall);

module.exports=router;