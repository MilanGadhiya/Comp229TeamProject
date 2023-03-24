var express = require('express');
var router = express.Router();
var Survey = require('../models/dataSchema');

router.get('/read', async(req, res) => {
    try {
        const surveys = await Survey.find({ });
        res.send(surveys);
        console.log(surveys);
    } 
    catch (err) {
        console.log(err);
    }
});

router.post('/create', async (req, res, next) => {
    var newSurvey = new Survey({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        age: req.body.age,
        address: req.body.address,
        city: req.body.city,
        zip: req.body.zip,
        province: req.body.province,
        country: req.body.country,
        coronaAffected: req.body.coronaAffected
    });

    const result = await newSurvey.save()
    console.log(result);
});


router.put('/update/:id', async (req, res, next) => {

    try {
        const id = req.params.id;
        console.log("params ============ ",req.params);
        let survey = Survey.findById(id);
        
        if (!survey) {
            return next(new Error('Could not load the document'));
        } else {
           
            console.log('inside....',req.body);
            // survey.name = req.body.name,
            // survey.email = req.body.email,
            // survey.gender = req.body.gender,
            // survey.age = req.body.age,
            // survey.address = req.body.address,
            // survey.city = req.body.city,
            // survey.zip = req.body.zip,
            // survey.province = req.body.province,
            // survey.country = req.body.country,
            // survey.coronaAffected = req.body.coronaAffected

            survey = await Survey.findByIdAndUpdate(id,req.body);
            // const result = await survey.save();
            // console.log(result);

            res.send({message:"updated",survey})
        }
    }
    catch (err) {
        console.log(err);
    }
});

router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    Survey.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message : "Survey was deleted successfully!"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Could not delete Survey with id=" + id
        });
    });
});

module.exports = router;