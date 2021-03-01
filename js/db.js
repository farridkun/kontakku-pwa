const contactform = document.querySelector('.add-contact form');
const tambahContactModal = document.querySelector('#tambah_kontak_modal')
contactform.addEventListener('submit', e => {
    e.preventDefault()
    const contact = {
        name: contactform.name.value,
        phone: contactform.phone.value,
        favorite:false
    }
    db.collection('contacts').add(contact).then(() => {
        contactform.reset();
        var instance = M.Modal.getInstance(tambahContactModal);
        instance.close()
        contactform.querySelector('.error').textContent = '';
    }).catch(err => {
        contactform.querySelector('.error').textContent = err.message;
    })
})

db.collection('contacts').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            renderContacts(change.doc.data(), change.doc.id)
        }
        if (change.type === 'removed') {
            console.log(`${change.doc.id} telah dihapus`);
        }
    })
})