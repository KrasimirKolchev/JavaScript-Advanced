function lockedProfile() {
    let profiles = Array.from(document.getElementsByClassName('profile'));

    profiles.map(p => process(p));

    function process(profile) {

        let inpFields = profile.querySelectorAll('input');
        let lock = inpFields[0];
        let unLock = inpFields[1];
        let btn = profile.querySelector('button');
        let hiddenFiles = profile.querySelector('div');
        btn.addEventListener('click', showHideInfo);

        function showHideInfo() {

            if (unLock.checked) {

                if (btn.textContent === 'Show more') {
                    hiddenFiles.style.display = 'block';
                    btn.classList.remove('disabled');
                    btn.textContent = 'Hide it';
                } else if (btn.textContent === 'Hide it') {
                    hiddenFiles.style.display = 'none';
                    btn.textContent = 'Show more';
                }
            } else if (lock.checked) {
                btn.classList.add('disabled');
            }
        }
    }
}