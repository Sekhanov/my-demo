const sum = (a, b) => (a + b)

describe('my test', () => {
    it('fist test', () => {
        expect(sum(1, 1)).toEqual(3)
    })
})