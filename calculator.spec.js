describe('calculator.js', function() {
    let calculator1
    let calculator2

    describe("Calculator", function() {

        beforeEach(function() {
            calculator1 = new Calculator()
            calculator2 = new Calculator()
        })

        it('can be instantiated', function() {
            expect(calculator1).toBeTruthy()
            expect(calculator2).toBeTruthy()
            expect(calculator1).toEqual(calculator2)
            expect(calculator2).toEqual(calculator1)
        })
    
        it('instantiates uniques objects', function() {
            expect(calculator1).not.toBe(calculator2)
        })

        it('should initialize the variable total', function() {
            expect(calculator1.total).toBe(0)
            expect(calculator1).toBeTruthy()
        })

        it('can overwrite total with null', function() {
            calculator1.total = null
    
            expect(calculator1.total).toBeNull()
        })

        it('can overwrite total with negative number', function() {
            calculator1.total = -1
    
            expect(calculator1.total).toBe(-1)
        })

        it('can overwrite total with positive number', function() {
            calculator1.total = 1
    
            expect(calculator1.total).toBe(1)
        })

        it('can overwrite total with huge (2^53 = 9007199254740992) positive number', function() {
            calculator1.total = 9007199254740992
    
            expect(calculator1.total).toBe(9007199254740992)
        })

        it('can overwrite total with huge (-(2^53) = -9007199254740992) negative number', function() {
            calculator1.total = -9007199254740992
    
            expect(calculator1.total).toBe(-9007199254740992)
        })

        describe("add()", function() {
            
            it('add function can be defined', function() {
                expect(calculator1.add).toBeDefined()
            })

            it('should add integer number to total', function() {
                calculator1.total = 1

                calculator1.add(5)
        
                expect(calculator1.total).toBe(6)
            })

            it('should add decimal number to total', function() {
                calculator1.total = 0.01

                calculator1.add(9.98)
        
                expect(calculator1.total).toBe(9.99)
            })
        })

        describe("subtract()", function() {
            
            it('subtract function can be defined', function() {
                expect(calculator1.subtract).toBeDefined()
            })

            it('should subtract numbers from total having postive number as result', function() {
                calculator1.total = 30
        
                calculator1.subtract(5)
        
                expect(calculator1.total).toBe(25)
            })

            it('should subtract numbers from total having negative number as result', function() {
                calculator1.total = -30.2
        
                calculator1.subtract(31.0)
        
                expect(calculator1.total).toBe(-61.2)
            })
        })

        describe("divide()", function() {
            
            it('divide function can be defined', function() {
                expect(calculator1.divide).toBeDefined()
            })

            it('should divide integer total by integer number', function() {
                calculator1.total = 10
        
                calculator1.divide(10)
        
                expect(calculator1.total).toBe(1)
            })

            it('should divide decimal total by integer number', function() {
                calculator1.total = 100.10
        
                calculator1.divide(10)
        
                expect(calculator1.total).toBe(10.01)
            })

            it('should divide negative float total by integer number', function() {
                calculator1.total = -100.60
        
                calculator1.divide(10)
        
                expect(calculator1.total).toBe(-10.059999999999999)
            })

            it('handles divide by zero', function() {
                calculator1.total = 10.01

                expect(function() { calculator1.divide(0) }).toThrowError(Error, 'Cannot divide by zero.')
            })
        })

        describe("multiply()", function() {

            it('multiply function can be defined', function() {
                expect(calculator1.multiply).toBeDefined()
            })

            it('should multiply total by integer number', function() {
                calculator1.total = 10
        
                calculator1.multiply(7)
        
                expect(calculator1.total).toBe(70)
            })

            it('should multiply total by negative integer number', function() {
                calculator1.total = 10
        
                calculator1.multiply(-7)
        
                expect(calculator1.total).toBe(-70)
            })

            it('should multiply total by negative decimal number', function() {
                calculator1.total = 10
        
                calculator1.multiply(-7.54)
        
                expect(calculator1.total).toBe(-75.4)
            })

            it('should multiply total by 1', function() {
                calculator1.total = 10
        
                calculator1.multiply(1)
        
                expect(calculator1.total).toBe(10)
            })

            it('should multiply total by 0', function() {
                calculator1.total = 10
        
                calculator1.multiply(0)
        
                expect(calculator1.total).toBe(0)
            })

            it('does not handle NaN', function() {
                calculator1.total = 20
                calculator1.multiply('a')
        
                expect(calculator1.total).toBeNaN()
            })
        })      
    })
})