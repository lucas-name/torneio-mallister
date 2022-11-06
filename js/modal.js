function iniciaModal (modalId){
    const modal = document.getElementById(modalId)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalId || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}

const logo = document.getElementById('nozel')
logo.addEventListener('click', () =>  iniciaModal('modal-promocao'))




function modalPark (idModal){
    const modal = document.getElementById(idModal)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == idModal || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}   
const park = document.getElementById('park')
park.addEventListener('click', () => modalPark('modal-park'))





function modalSimmon (idModal){
    const modal = document.getElementById(idModal)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == idModal || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}   
const simmon = document.getElementById('simmon')
simmon.addEventListener('click', () => modalSimmon('modal-simmon'))





function modalSong (idModal){
    const modal = document.getElementById(idModal)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == idModal || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}   
const song = document.getElementById('song')
song.addEventListener('click', () => modalSong('modal-song'))





function modalZoltan (idModal){
    const modal = document.getElementById(idModal)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == idModal || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}   
const zoltan = document.getElementById('zoltan')
zoltan.addEventListener('click', () => modalZoltan('modal-zoltan'))



/*TEAM REESE */

function modalJames (idModal){
    const modal = document.getElementById(idModal)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == idModal || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}   
const james = document.getElementById('james')
james.addEventListener('click', () => modalZoltan('modal-james'))


function modalAnne (idModal){
    const modal = document.getElementById(idModal)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == idModal || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}   
const anne = document.getElementById('anne')
anne.addEventListener('click', () => modalZoltan('modal-anne'))


function modalRobert (idModal){
    const modal = document.getElementById(idModal)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == idModal || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}   
const robert = document.getElementById('robert')
robert.addEventListener('click', () => modalZoltan('modal-robert'))



function modalMari (idModal){
    const modal = document.getElementById(idModal)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == idModal || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}   
const mari = document.getElementById('mari')
mari.addEventListener('click', () => modalZoltan('modal-mari'))


function modalKamil (idModal){
    const modal = document.getElementById(idModal)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == idModal || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}   
const kamil = document.getElementById('kamil')
kamil.addEventListener('click', () => modalZoltan('modal-kamil'))






