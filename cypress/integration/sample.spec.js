//<reference types = "cypress" />

describe('Checking Login Siakad Polinema', () => {
    it('Load Web', () => {
        cy.visit('http://siakad.polinema.ac.id/')
        cy.url().should('eq', 'http://siakad.polinema.ac.id/')
    });

    it('Checking Login with Invalid data', () => {
        //username must be NIM 
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#username').type('kia')
        cy.get('#password').type('kia12')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    });

    it('Checking If Username and Password are empty', () => {
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    });

    it('Checking with Correct Username and Wrong Pass', () => {
        //my NIM : 1831710139
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#username').type('1831710139')
        cy.get('#password').type('kia12')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    });

    it('Checking with one of field is empty', () => {
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#username').type('kia')
        cy.get('.btn-success').click()
        cy.contains('Password harus diisi')

        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#password').type('kia12')
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    });

    it('Checking Tampilkan Password', () => {
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#username').type('kia')
        cy.get('#password').type(1234567890)
        cy.get('#chk_tampilkan').check()
    });

    it('Checking Lupa Password', () => {
        cy.visit('http://siakad.polinema.ac.id/')
        cy.contains('Lupa Password?')//.click()
        //cy.url().should('eq', 'https://helpakademik.polinema.ac.id/ajukan-pertanyaan/')
    });

    it('Checking Daftar Ulang', () => {
        cy.visit('http://siakad.polinema.ac.id/')
        cy.contains('PEMBAYARAN DAFTAR ULANG').click()
        //cy.url().should('eq', 'https://www.polinema.ac.id/pengumuman/daftar-ulang-semester-genap-2018-2019/')
    });

    it('Checking Lihat Mekanisme', () => {
        cy.visit('http://siakad.polinema.ac.id/')
        cy.contains('LIHAT MEKANISME').click()
        //cy.url().should('eq', 'http://spmb.polinema.ac.id/pembayaran/mekanisme')
    });

    it('Checking Responsiveness', () => {
        //berdasarkan width

        cy.visit('http://siakad.polinema.ac.id/')
        cy.viewport(1440, 720)  //laptop l 
        cy.wait(1000)
        cy.viewport(1024, 700)  //laptop
        cy.wait(1000)
        cy.viewport(768, 660)   //tablet
        cy.wait(1000)
        cy.viewport(425, 500)   //mobile l
        cy.wait(1000)
        cy.viewport(375, 372)   //mobile m
        cy.wait(1000)
        cy.viewport(320, 372)   //mobile s
    });
  })