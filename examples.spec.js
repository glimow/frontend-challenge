const client = require('./client');

// Mock localstorage because we are not in a browser environment
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');



describe('Banking API', () => {
  it('Login as a user', async() => {
    const user = await client.login('fake@escape.tech', 'fakepassword');
    console.log(user) // The returned object also has the user's transactions
    expect(user.username).toBe('fakeuser');
  });

  it('Get current user', async() => {
    const user = await client.getUser();
    expect(user.id).toBe(21);
  });

  it('Logout current user', async() => {
    client.logout();
    let code = 200;
    try {
      await client.getTransactions();
    } catch (err) {
      code = err.response.data.statusCode;
    }
    expect(code).toBe(401);
  });

  it('Get a transaction', async() => {
    const user = await client.login('fake@escape.tech', 'fakepassword');
    
    const transaction = await client.getOneTransaction(1)
    console.log(transaction)
  });

  it('Creates a transaction', async() => {

    const transaction = await client.createTransaction(
        {
            "user_from": 1,
            "user_to": 2,
            "amount": 0,
            "description": "Hello",
            "image_resize_parameters": "" // This is compulsory but should be let empty
        })
    console.log(transaction)
  });

});
