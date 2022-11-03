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
