        function displayUser(userData) {
            document.getElementById('profile-pic').innerHTML = `<img src="${userData.picture}" alt="User Image">`;
            document.getElementById('name').innerText = userData.name;
        }
        async function loadUser() {
            let storedUser = localStorage.getItem('user');
            if (storedUser) {
                storedUser = JSON.parse(storedUser);
                displayUser(storedUser);
            } else {
                const res = await axios.get('https://randomuser.me/api/');
                const user = res.data.results[0];
                const userData = {
                    picture: user.picture.large,
                    name: `${user.name.first} ${user.name.last}`
                };
                localStorage.setItem('user', JSON.stringify(userData));
                displayUser(userData);
            }
        }
        async function refreshUser() {
            const res = await axios.get('https://randomuser.me/api/?no-cache=' + Math.random());
            const user = res.data.results[0];
            const userData = {
                picture: user.picture.large,
                name: `${user.name.first} ${user.name.last}`
            };
            localStorage.setItem('user', JSON.stringify(userData)); // update localStorage
            displayUser(userData);
        }
        window.onload = loadUser;