describe('main.js', function() {
    describe('calculate()', function(){
        it('validates expression when first number is invalid', function() {
            spyOn(window, 'updateResult').and.stub()

            calculate('a+3')

            expect(window.updateResult).toHaveBeenCalled()

            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized.')
            
            expect(window.updateResult).toHaveBeenCalledTimes(1)


        }) 

        it('validates expression when second number is invalid', function() {
            spyOn(window, 'updateResult')

            calculate('3+a')

            expect(window.updateResult).toHaveBeenCalled()
        }) 

        it('validates expression when operation is invalid', function() {
            spyOn(window, 'updateResult')

            calculate('3_4')

            expect(window.updateResult).toHaveBeenCalled()
        }) 
        
        it('calls add', function() {
            const spyAdd = spyOn(Calculator.prototype, 'add')

            calculate('3+4')

            expect(spyAdd).toHaveBeenCalledTimes(2)
            expect(spyAdd).toHaveBeenCalledWith(3)
            expect(spyAdd).toHaveBeenCalledWith(4)
        }) 
        
        it('calls subtract', function() {
            const spySub = spyOn(Calculator.prototype, 'subtract')

            calculate('3-7')
            expect(spySub).toHaveBeenCalled()
            expect(spySub).toHaveBeenCalledTimes(1)
            expect(spySub).toHaveBeenCalledWith(7)
        }) 
        
        it('calls multiply', function() {
            const spyMult = spyOn(Calculator.prototype, 'multiply')

            calculate('3*8')
            expect(spyMult).toHaveBeenCalled()
            expect(spyMult).toHaveBeenCalledTimes(1)
            expect(spyMult).toHaveBeenCalledWith(8)
        }) 
        
        it('calls divide', function() {
            const spyDivide = spyOn(Calculator.prototype, 'divide')

            calculate('3/2')
            expect(spyDivide).toHaveBeenCalled()
            expect(spyDivide).toHaveBeenCalledTimes(1)
            expect(spyDivide).toHaveBeenCalledWith(2)
        }) 
        
        it('calls updateResult', function() {
            spyOn(window, 'updateResult')
            spyOn(Calculator.prototype, 'multiply').and.callThrough()

            calculate('6*7')
            expect(window.updateResult).toHaveBeenCalled()
            expect(window.updateResult).toHaveBeenCalledWith(42)
        }) 
    })

    describe('updateResult()', function(){
        let element

        beforeAll(function() {
            element = document.createElement('div')
            element.setAttribute('id', 'result')

            document.body.appendChild(element)
        })

        afterAll(function() {
            element = document.getElementById('result')

            document.body.removeChild(element)
        })

        it('adds result to DOM element', function() {
            updateResult('5')

            expect(element.innerText).toBe('5')
        }) 
    })
})