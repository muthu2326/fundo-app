const express = require('express')
const router = express.Router()
const { upload } = require('../middlewares/multer')
const { Campaign } = require('../models/campaign')
const { User } = require('../models/user')
const { CampaignUpdates} = require('../models/campaign-updates')
const { authenticateUser } = require('../middlewares/authenticate')

router.get('/campaigns-list', (req, res) => {
    Campaign.find().populate('user')
        .then(function(campaigns){
            res.send(campaigns)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.post("/new", authenticateUser, upload,  (req, res) => {
    console.log(req.files)
    const { title, description, targetAmount, imageUrl, briefStory, benficiary, accountDetails} = req.body
    const campaign = new Campaign({
        title,
        description,
        targetAmount,
        briefStory,
        benficiary,
        accountDetails,
        imageUrl
    })
    campaign.user = req.user._id
    campaign.save()
        .then(function(campaign){
            const { user } = campaign
            User.findById(user)
                .then((user) => {
                    user.campaign.push(campaign._id)
                    user.save()
                        .then((user) => {
                            console.log(user)
                        })
                })
                res.send(campaign)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    Campaign.findOne({
        _id: id}).populate('user')
        .then((campaign => res.send(campaign)))
        .catch((err => res.send(err)))
})

router.post("/updates/:id", (req, res) => {
    const campaign = req.params.id
    console.log(campaign)
    const { updatedBody } = req.body
    const campaignUpdates = new CampaignUpdates({
        campaign,
        updatedBody
    })

    campaignUpdates.save()
        .then((campaignUpdate) => {
            const campaignId = campaignUpdate.campaign
            Campaign.findById(campaignId)
                .then((campaign) => {
                    if(campaign){
                        campaign.updates.push(campaignUpdate._id)
                            campaign.save()
                                .then((campaign) => {})
                            }else{
                        res.send('Campaign Record Not found')
                    }
                })
            res.send(campaignUpdate)
        })
        .catch((err) => {
            res.send(err)
        })
    })                                 

module.exports = {
    campaignController : router
}