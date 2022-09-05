# yoongi

quickly made project for my Final Year Project `Security risks between Serverless vs non-Serverless systems` to demonstrate visually what a CSRF attack could look like. 

Assumption:
- Victim is logged in and authenticated (provided session token)
- Victim is on a payment transaction page

The Form page would appear as normal to victim, once information is sent it should trigger the default functionality on the site and lambda function (the exploit).
