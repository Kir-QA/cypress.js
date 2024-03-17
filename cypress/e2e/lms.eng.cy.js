
describe('Тестирование сайта тестов https://lmseng.aeroflot.ru/', () =>{
	it('Проверка номер один',() => {
		cy.visit('lmseng.aeroflot.ru', (failOnStatusCode=false )).wait(5000);
	})
})