describe('Напиши длинный автотест на покупку нового фото для своего тренера',() =>{
	var a="Login",b="Password"; //a="login"/b="pass"     <=========================== Пароль писать тута!!!!!!!!!!!!!!
	var c=0;
	it('Ну шо тряхнем покемонами',() => {
		cy.clearCookies();
		cy.clearLocalStorage();
		cy.visit('https://pokemonbattle.me/');
		cy.get('.auth__title').contains("Битва покемонов");
		cy.get(':nth-child(1) > .auth__input').type(a);
		cy.get('#password').type(b);
		cy.get('.auth__button').should('be.ok').click();
		cy.get('.header__btns > [href="/shop"]').click();
		c=Math.floor(Math.random() * 11)+1;                             //Рандом пипец не нормальный тута
		cy.log(c);
		cy.get('.shop__list > li').children('.shop__button').eq(c).click(); // короч и так нормас тупо выбираем то что выбирается...
		cy.get(':nth-child(1) > .pay_base-input-v2').type('1026{enter}');
		cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125{enter}');
		cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4800895800465954{enter}'); // если тут через клик делать нужно как то привязывать к ожиданию появления элемента.
		cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Test Testovich{enter}');            //я ХЗ как и падает часто нет ничего лучше интера  Ж=))
		cy.get('#cardnumber').type('56456{enter}');
		cy.get('.payment__submit-button').should('be.visible');
		cy.get('.payment__font-for-success').contains("Покупка прошла успешно");
		cy.get('.payment__back-button-success').click();
		cy.get('.header__btns > [href="/"]').click();
		cy.get('.header__btns > [href="/trainers"]').click();
		cy.get('.header__img').click();
		cy.end();

		
	})
});