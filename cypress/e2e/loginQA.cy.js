
describe('Тестирование формы логина и пароля login.qa.studio',() => {
	it('1.Напиши проверку на позитивный кейс авторизации',() => {                                                     //Напиши проверку на позитивный кейс авторизации:
	cy.visit('http://login.qa.studio');
	// Пробую условия
	if (cy.get('#form > .header').contains("Форма логина")) {
       cy.get('#mail').type('german@dolnikov.ru');                                                                  //а) Ввести правильный логин
       cy.get('#pass').type('iLoveqastudio1');                                                                      //б) Ввести правильный пароль
       cy.get('#loginButton').should('be.visible').get('#loginButton').click();                                     //в) Нажать войти
       cy.log("Проверка связи с миром");                                                                            //г) Проверить нужный текст и наличие кнопки крестик
       cy.get('#messageHeader').contains("Авторизация прошла успешно").log("Проверку на наличие сообщения прошел");
       cy.get('#exitMessageButton').should('be.visible').log("Кнопка выхода на месте кек");
       cy.wait(1000);
       cy.get('#exitMessageButton > .exitIcon').click();
       }
	else {
		throw new Error("Кирюха твой тест говно!");  //Самоценка это главное!
	} 
	   cy.end();

      })

	it('2.Напиши автотест на проверку логики восстановления пароля',() => {                         //Прости меня дуру грешную, писать коменты к коду стало лень...
		cy.visit('http://login.qa.studio');
		cy.get('#forgotEmailButton').click();
		cy.get('#mailForgot').type('test@test.me');
		cy.get('#restoreEmailButton').click();
		cy.get('#messageHeader').contains("Успешно отправили пароль на e-mail");
		cy.get('#exitMessageButton > .exitIcon').should('be.ok').click();
		cy.end();
	})
	it('3.Напиши проверку на негативный кейс авторизации:',() => {
		cy.visit('http://login.qa.studio');
		cy.get('#mail').type('german@dolnikov.ru');
		cy.get('#pass').type('iLove');
		cy.get('#loginButton').should('be.ok').get('#loginButton').click();
		cy.get('#messageHeader').contains("Такого логина или пароля нет");
		cy.get('#exitMessageButton').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').click();
		cy.end();
	})
    
    it('4.Напиши проверку на негативный кейс авторизации',() =>{
    	cy.visit('http://login.qa.studio');
    	cy.get('#mail').type('test@test.me');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').should('be.ok').get('#loginButton').click();
		cy.get('#messageHeader').contains("Такого логина или пароля нет");
		cy.get('#exitMessageButton').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').click();
		cy.end();
    })

    it('5. Напиши проверку на негативный кейс валидации:',() =>{
    	cy.visit('http://login.qa.studio');
    	cy.get('#mail').type('testtest.me');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').should('be.ok').get('#loginButton').click();
		cy.get('#messageHeader').contains("Нужно исправить проблему валидации");
		cy.get('#exitMessageButton').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').click();
		cy.end();
    })
    it('6. Напиши проверку на приведение к строчным буквам в логине:',() =>{
    	cy.visit('http://login.qa.studio');
    	cy.get('#mail').type('GerMan@Dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').should('be.ok').get('#loginButton').click();
		cy.get('#messageHeader').contains("Авторизация прошла успешно").log("Я вижу мертвецов");
		cy.get('#exitMessageButton').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').click();
		cy.end();
    })
})