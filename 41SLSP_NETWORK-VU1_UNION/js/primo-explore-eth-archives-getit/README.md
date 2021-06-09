# primo-explore-eth-archives-getit

## Description

Changes 'getit' and 'how to get it' sections according to eth archives.
By default Primo VE shows nonsense for our archives at getit and viewit.
Hochschularchiv (HSA) contains some online resources (-> viewit-after), but not for all resources. For no online resources viewit section is also displayed with an empty link.
Max Frisch Archiv (MFA) and Thomas Mann Archiv (TMA) do not contain online resources, but do not have a proper getit ( -> htgi-svc-after ).

### Screenshot

#### 1: default Primo without this module (there is no online resource)
![screenshot](https://gitlab.com/ethlibrary/primo-explore-modules/primo-explore-eth-archives-getit/-/raw/master/screenshot1.jpg)

#### 2: after installing this module
![screenshot](https://gitlab.com/ethlibrary/primo-explore-modules/primo-explore-eth-archives-getit/-/raw/master/screenshot2.jpg)

## Installation

1. Assuming you've installed and are using [primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv).

2. Navigate to your view root directory. For example:
    ```
    cd primo-explore/custom/MY_VIEW_ID
    ```
3. If you do not already have a package.json file in this directory, create one:
    ```
    npm init -y
    ```
4. Install this package:
    ```
    npm install primo-explore-eth-archives-getit --save-dev
    ```

## Usage

Once installed, inject `ethArchivesGetitModule` as a dependency, and then add the eth-archives-getit-component directive to the prmAlmaViewitAfter and almaHtgiSvcAfter component.

```js

import 'primo-explore-eth-archives-getit';
var app = angular.module('viewCustom', ['ethArchivesGetitModule']);

app.component('prmAlmaViewitAfter',  {
        bindings: {parentCtrl: '<'},
        controller: 'ethArchivesGetitController',
        template: `<eth-archives-getit-component after-ctrl="$ctrl"></eth-archives-getit-component>`
    })
    .component('almaHtgiSvcAfter',  {
        bindings: {parentCtrl: '<'},
        controller: 'ethArchivesGetitController',
        template: `<eth-archives-getit-component after-ctrl="$ctrl"></eth-archives-getit-component>`
    })

```
Multilingual texts and urls are configured in eth-archives-getit.config.js.
