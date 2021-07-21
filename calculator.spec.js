describe('calculator.js', function() {
    let calculator1
    let calculator2

    describe("Calculator", function() {
        beforeEach(function() {
            calculator1 = new Calculator()
            calculator2 = new Calculator()
        })

        afterEach(function() {

        })

        it('should initialize the total', function() {
            expect(calculator1.total).toBe(0)
            expect(calculator1.toBe).toBeFalsy()
        })
    
        it('can be instantiated', function() {
            expect(calculator1).toBeTruthy()
            expect(calculator2).toBeTruthy()
            expect(calculator1).toEqual(calculator2)
            expect(calculator1.constructor.name).toContain("Calc")
        })
    
        it('instantiates unique object', function() {
            expect(calculator1).not.toBe(calculator2)
        })

        it('can overwrite total', function() {
            calculator1.total = null
    
            expect(calculator1.total).toBeNull()
        })

        describe("add()", function() {

            it('should add numbers to total', function() {
                calculator1.add(5)
        
                expect(calculator1.total).toBe(5)
            })

            it('has commom operations', function() {
                expect(calculator1.add).toBeDefined()
                expect(calculator1.subtract).toBeDefined()
                expect(calculator1.multiply).toBeDefined()
                expect(calculator1.divide).toBeDefined()
            })

        })

        describe("subtract()", function() {
            
            it('should subtract numbers from total', function() {
                calculator1.total = 30
        
                calculator1.subtract(5)
        
                expect(calculator1.total).toBe(25)
            })
        })

        describe("divide()", function() {

            it('should divide total by number', function() {
                calculator1.total = 100
        
                calculator1.divide(10)
        
                expect(calculator1.total).toBe(10)
            })

            it('handles divide by zero', function() {
                expect(function() { calculator1.divide(0) }).toThrow()
                expect(function() { calculator1.divide(0) }).toThrowError(Error)
                expect(function() { calculator1.divide(0) }).toThrowError(Error, 'Cannot divide by zero.')
            })
        })

        describe("multiply()", function() {

            it('should multiply total by number', function() {
                calculator1.total = 10
        
                calculator1.multiply(7)
        
                expect(calculator1.total).toBe(70)
            })

            it('does not handle NaN', function() {
                calculator1.total = 20
                calculator1.multiply('a')
        
                expect(calculator1.total).toBeNaN()
            })
        })      
    })
})