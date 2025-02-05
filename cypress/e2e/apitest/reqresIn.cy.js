// test all endpoint in website https://reqres.in/

describe('Test All Endpoint in Website Reqres.in', () => {
    const startUrl = 'https://reqres.in'
    
        it('Get List User',()=>{
            cy.request({
                method : 'GET',
                url : startUrl+'/api/users?page=2'
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body).to.not.empty
            })
        })
    
        it('Get Single User',()=>{
            cy.request({
                method : 'GET',
                url : startUrl+'/api/users/2'
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body).to.not.empty
                expect(res.body.data.id).to.eq(2)
            })
        })
    
        it('Get Single User Not Found',()=>{
            cy.request({
                method : 'GET',
                url : startUrl+'/api/users/23',
                failOnStatusCode: false
            }).its('status').should('equal', 404)
        })
    
        it('Create User',()=>{
            cy.request({
                method : 'POST',
                url : startUrl+'/api/users',
                body : {
                    "name": "morpheus",
                    "job": "leader"     
                }
            }).then((res)=>{
                expect(res.status).to.eq(201)
                expect(res.body.name).to.eq('morpheus')
                expect(res.body.job).to.eq('leader')
            })
        })
    
        it('Update Specific Id User',()=>{
            cy.request({
                method : 'PUT',
                url : startUrl+'/api/users/2',
                body : {
                    "name": "morpheus",
                    "job": "zion resident"     
                }
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.name).to.eq('morpheus')
                expect(res.body.job).to.eq('zion resident')
            })
        })
    
        it('Delete Specific Id User',()=>{
            cy.request({
                method : 'DELETE',
                url : startUrl+'/api/users/2'
            }).then((res)=>{
                expect(res.status).to.eq(204)
            })
        })
    
        it('User Register Successful',()=>{
            cy.request({
                method : 'POST',
                url : startUrl+'/api/register',
                body : {
                    "email": "eve.holt@reqres.in",
                    "password": "pistol"
                }
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.id).to.not.equal()
                expect(res.body.token).not.to.be.empty
            })
        })
        
        it('User Register Not Successful',()=>{
            cy.request({
                method : 'POST',
                url : startUrl+'/api/register',
                body : {
                    "email": "eve.holt@reqres.in",
                    "password": ""
                },
                failOnStatusCode: false
            }).its('status').should('equal', 400)
        })
    
        it('User Login Successful',()=>{
            cy.request({
                method : 'POST',
                url : startUrl+'/api/login',
                body : {
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                }
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.token).not.to.be.empty
            })
        })
    
    })