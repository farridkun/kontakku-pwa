const contacts = document.querySelector('.contacts')

document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var modals = document.querySelectorAll('.modal');
    var fab = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(fab);
    M.Sidenav.init(sidenav);
    M.Modal.init(modals);
  });

  const renderContacts = (data, id) => {
    const html = `<li class="collection-item avatar" data-id=${id}>
    Nama:<span class="name">${data.name}</span>
    <p>Telepon:<span class="phone">${data.phone}</span>
    </p>
    <a href="#!" class="secondary-content" data-id=${id} style="text-align: right;">
        <i class="material-icons modal-trigger" style="cursor: pointer;" href="#ubah_kontak_modal">edit</i>
        <i class="material-icons" style="cursor: pointer;">${data.favorite ? 'star' : 'star_border'}</i>
        <i class="material-icons" style="cursor: pointer;">delete_outline</i>
    </a>
</li>`;
contacts.innerHTML += html
  }