// test all endpoint in website https://restful-booker.herokuapp.com/apidoc/index.html

describe('Test All End Point in Website restfull-booker',()=>{
    const baseUrl = 'https://restful-booker.herokuapp.com'
    let tokenValue

        it ('GET Check Connection - PING',()=>{
            cy.request({
                method : 'GET',
                url : baseUrl+'/ping'
            }).then((resp)=>{
                expect(resp.status).to.eq(201)
            })
        })

        it ('POST Create Token',()=>{
            cy.request({
                method : 'POST',
                url : baseUrl+'/auth',
                body : {
                    "username" : "admin",
                    "password" : "password123"
                }
            }).then((resp)=>{
                expect(resp.status).to.eq(200)
                expect(resp.body).to.not.empty
                tokenValue = resp.body.token
                cy.log("Current Token ",tokenValue)
            })
        })
        
        it ('GET All Booking Id',()=>{
            cy.request({
                method : 'GET',
                url : baseUrl+'/booking'
            }).then((resp)=>{
                expect(resp.status).to.eq(200)
                expect(resp.body).to.not.empty
            })
        })
        
        it ('GET Specific Booking Id',()=>{
            cy.request({
                method : 'GET',
                url : baseUrl+'/booking/2'
            }).then((resp)=>{
                expect(resp.status).to.eq(200)
                expect(resp.body).to.not.empty
            })
        })
        
        it ('POST Create Booking Data',()=>{
            cy.request({
                method : 'POST',
                url : baseUrl+'/booking',
                body : {
                    "firstname" : "Jim",
                    "lastname" : "Brown",
                    "totalprice" : 111,
                    "depositpaid" : true,
                    "bookingdates" : {
                        "checkin" : "2018-01-01",
                        "checkout" : "2019-01-01"
                    },
                    "additionalneeds" : "Breakfast"
                }
            }).then((resp)=>{
                expect(resp.status).to.eq(200)
                expect(resp.body).to.not.empty
                expect(resp.body.booking.firstname).to.eq('Jim')
                expect(resp.body.booking.lastname).to.eq('Brown')
            })
        })
        
        it ('PUT Update Booking Data by ID',()=>{
            cy.request({
                method : 'PUT',
                url : baseUrl+'/booking/2',
                headers : {
                    cookie : 'token='+tokenValue,
                    authorization : 'YWRtaW46cGFzc3dvcmQxMjM=',
                },
                body : {
                    "firstname" : "James",
                    "lastname" : "Brown",
                    "totalprice" : 111,
                    "depositpaid" : true,
                    "bookingdates" : {
                        "checkin" : "2018-01-01",
                        "checkout" : "2019-01-01"
                    },
                    "additionalneeds" : "Breakfast"
                }
            }).then((resp)=>{
                expect(resp.status).to.eq(200)
                expect(resp.body).to.not.empty
                expect(resp.body.firstname).to.eq('James')
                expect(resp.body.lastname).to.eq('Brown')
            })
        })
        
        it ('DELETE Data Booking By Id',()=>{
            cy.request({
                method : 'DELETE',
                url : baseUrl+'/booking/1',
                headers : {
                    cookie : 'token='+tokenValue,
                    authorization : 'YWRtaW46cGFzc3dvcmQxMjM=',
                }
            }).then((resp)=>{
                expect(resp.status).to.eq(201)
            })
        })

})