db.enablePersistence().catch(err => {
    if (err.code == 'failed-precondition') {
        console.log('multiple tabs opened');
    } else if (err.code == 'unimplemented') {
        console.log('browser tidak di dukung');
    }
})
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
            removeContact(change.doc.id)
        }
    })
})

const contactContainer = document.querySelector('.contacts');
contactContainer.addEventListener('click', e => {
    console.log('e.target.textContent', e.target.textContent);
    if (e.target.textContent === 'delete_outline') {
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('contacts').doc(id).delete()
    }
})