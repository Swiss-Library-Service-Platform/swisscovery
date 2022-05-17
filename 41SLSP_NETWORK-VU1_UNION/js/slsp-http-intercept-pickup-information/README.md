
The easiest way to use this module is to import it and then add it to the (view|central)Custom module.

```code javascript
import './swisscovery/41SLSP_NETWORK-VU1_UNION/js/slsp-http-intercept-pickup-information';
let customType = 'viewCustom';
//let customType = 'centralCustom';

let app = angular.module(customType, ['slspHttpInterceptPickupInformation']);
```

If you want to use this in you own code base add a reference to swisscovery as a git submodule.

``` bash
cd src
git submodule add https://github.com/mehmetc/swisscovery
```