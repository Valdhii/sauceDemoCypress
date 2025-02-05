// function for generate random string, use it if needed
function randomString(length) {
    var result           = '';
    var characters       = 'QWERTYUIOPASDFGHJKLZXCVBNM0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }

describe('Automate API with Authorization',()=>{
    const baseUrl = 'https://simple-books-api.glitch.me'
    let tokenValue
    let orderIdValue
    const newOrderId = 6
    const newOrderName = 'John'

        it ('GET Status', ()=> {
            cy.request({
                method : 'GET',
                url : baseUrl+'/status'
            }).then((res)=>{
                expect(res.status).to.eq(200)
            })
        })

        it ('GET Books', ()=> {
            cy.request({
                method : 'GET',
                url : baseUrl+'/books'
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body).to.not.empty
            })
        })

        it ('GET Single Book With ID', ()=> {
            cy.request({
                method : 'GET',
                url : baseUrl+'/books/2'
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.id).to.eq(2)
            })
        })


        // Generate new token

        it ('POST Create New Token', ()=> {
            
            cy.request({
                method : 'POST',
                url : baseUrl+'/api-clients',
                body : {
                    "clientName": "Postman",
                    "clientEmail": "valentindespa"+ randomString(3) +"@example.com"                    
                }
            }).then(res=>{
                expect(res.status).to.eq(201)
                expect(res.body).to.not.empty
                tokenValue = res.body.accessToken
                cy.log("Current token", tokenValue)
            })
            
        })

        it('POST Submit New Order', ()=>{
            cy.request({
                method : 'POST',
                url : baseUrl+'//orders',

                // Dynamic token based on generated new token
                headers : {
                    Authorization : 'Bearer '+tokenValue
                },
                body : {
                    "bookId": newOrderId,
                    "customerName": newOrderName,
                }
            }).then((res)=>{
                expect(res.status).to.eq(201)
                expect(res.body).to.not.empty
                orderIdValue = res.body.orderId
                cy.log("Current Order Id", orderIdValue)

            })
        })
        
        it('GET All Data Orders', ()=>{
            cy.request({
                method : 'GET',
                url : baseUrl+'//orders',

                // Dynamic token based on generated new token
                headers : {
                    Authorization : 'Bearer '+tokenValue
                }
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body).to.not.empty
            })
        })
        
        it('GET Specific Data Orders', ()=>{
            cy.request({
                method : 'GET',
                url : baseUrl+'//orders/'+orderIdValue,

                // Dynamic token based on generated new token
                headers : {
                    Authorization : 'Bearer '+tokenValue
                }
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.id).to.eq(orderIdValue)
                expect(res.body.bookId).to.eq(newOrderId)
                expect(res.body.customerName).to.eq(newOrderName)
            })
        })

        it('UPDATE Specific Data Orders', ()=>{
            cy.request({
                method : 'PATCH',
                url : baseUrl+'//orders/'+orderIdValue,
             
                // Dynamic token based on generated new token
                headers : {
                    Authorization : 'Bearer '+tokenValue
                }
            }).then((res)=>{
                expect(res.status).to.eq(204)
            })
        })

        it('DELETE Specific Data Orders', ()=>{
            cy.request({
                method : 'DELETE',
                url : baseUrl+'//orders/'+orderIdValue,

                // Dynamic token based on generated new token
                headers : {
                    Authorization : 'Bearer '+tokenValue
                }
            }).then((res)=>{
                expect(res.status).to.eq(204)
            })
        })

        
})