# Acerca de lambda generateOcuPaymentPay

Para la refactorización que se quiere realizar a la Billetera web, se requiere que el Endpoint PaymentPay genere ordenes de compra única, a través de la Lambda ApiOcPost. Uno de los comercios identificados que está utilizando este endpoint actualmente, es Softnyx.

Por lo cual, esta Lambda se encarga de generar las ordenes de compra única (OCU) para este comercio y cualquier otro que esté utilizando este endpoint, invocando a la lambda apiOcPost. En términos generales, esta Lambda recibe los datos generados por el comercio, la transforma y crea una petición válida para generar una orden de compra única.


### Acerca de la solución y el proceso 
- Documento de diseño [más info aquí](https://docs.google.com/document/d/1Kgu2UfDdz5fzxFjsug_sIPobbAtLTu8k/edit?usp=sharing&ouid=106149972609361591543&rtpof=true&sd=true)
- Enlace de wrike [más info aquí](https://www.wrike.com/open.htm?id=766247004)
- Diagramas y casos de uso [más info aquí](https://drive.google.com/file/d/1JD5evIu9mEMDUE2D4i6QhAQKan7d7gYL/view?usp=sharing)
  
## Ejemplo de Invocación
Petición POST.
### Ejemplo de Body
x-www-form-urlencode
```
merchant_id: kuanto
po_id: test-softnyx1
iso_currency: COP
amount: 5000
pv_checksum: f31e9edf07346e0543e86d6b3901bd1b3d8a0edb986926245734f8f62849ac0d
brief: softnyx2
email: msidler@payvalida.com
lifetime: 24h
payment_method: efecty
Enviar: Enviar
```
### Dev
https://api-dev.payvalidda.net/v4/migration/generateOcuRiot
### Sandbox
https://api-test.payvalida.com/v4/migration/generateOcuRiot
# Historial de Cambios

## [1.0.0] - 06-oct-2021

### Enlaces:
- [Task](https://dev.azure.com/payvalida/payValida/_workitems/edit/8207/)


### Cambios

- Creación de la lambda.
