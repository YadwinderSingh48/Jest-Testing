//Async unit testing

const fetchData = require('./indexAsync');

test('someData response get', () => {
    return fetchData().then((data) => {
        expect(data).toBe("someData");
    });
});

test('someData response error', () => {
    return fetchData(true).catch((error) => {
        expect(error).toBe("an error occured");
    });
});

//doing the same test case with async/await
test('get the data', async() => {
    const data = await fetchData();
    expect(data).toBe('someData');
});

test('fetch failed', async() => {
    expect.assertions(1); // we are betting that we will getting the true value
    const data = await fetchData();
    try {
        await fetchData(true);
    } catch (error) {
        expect(error).toBe('an error occured');
    }
});

test('Async test with resolve here', async() => {
    await expect(fetchData()).resolves.toBe('someData');
    await expect(fetchData(true)).rejects.toMatch('an error occured');
})


