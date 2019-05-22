const express = require('express')
const router = express.Router()

const { Campaign } = require('../models/campaign')
const { CampaignUpdates} = require('../models/campaign-updates')
const { authenticateUser } = require('../middlewares/authenticate')

router.get('/campaigns-list', (req, res) => {
    Campaign.find()
        .then(function(campaigns){
            res.send(campaigns)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.post("/new", authenticateUser, (req, res) => {
    const { title, description, targetAmount, briefStory, benficiary, accountDetails} = req.body
    const campaign = new Campaign({
        title,
        description,
        targetAmount,
        briefStory,
        benficiary,
        accountDetails
      })
    campaign.save()
    .then(function(campaign){
        res.send(campaign)
    })
    .catch(function(err){
        res.send(err)
    })
})

router.put('/:id', function(req,res){
    const id = req.params.id
    const body = req.body

    
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